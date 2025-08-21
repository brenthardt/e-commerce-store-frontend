import axios from "axios";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:9980";

let isRefreshing = false;
let refreshSubscribers = [];

function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}

function onRefreshed(newToken) {
  refreshSubscribers.forEach((cb) => cb(newToken));
  refreshSubscribers = [];
}

const useAxiosWithRefresh = () => {
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  const instance = axios.create({ baseURL });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config || {};
      const refreshToken = localStorage.getItem("refreshToken");

      if (
        (error.response?.status === 401 ||
          error.response?.statusText === "Unauthorized") &&
        refreshToken &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        if (isRefreshing) {
          return new Promise((resolve) => {
            subscribeTokenRefresh((newToken) => {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              resolve(instance(originalRequest));
            });
          });
        }

        isRefreshing = true;
        console.log(" Attempting to refresh token...");

        try {
          const refreshInstance = axios.create();
          const res = await refreshInstance.post(`${baseURL}/users/refresh`, {
            refreshToken,
          });

          const {
            token: newToken,
            refreshToken: newRefreshToken,
            role,
          } = res.data;

          localStorage.setItem("token", newToken);
          localStorage.setItem("refreshToken", newRefreshToken);
          localStorage.setItem("role", role);

          login(newToken, role, newRefreshToken);

          onRefreshed(newToken);
          isRefreshing = false;

          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return instance(originalRequest);
        } catch (refreshErr) {
          isRefreshing = false;
          refreshSubscribers = [];

          console.error(" Refresh failed", refreshErr);
          logout();
          navigate("/login");

          return Promise.reject(refreshErr);
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosWithRefresh;
