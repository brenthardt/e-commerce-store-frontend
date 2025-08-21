import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    token: null,
    role: null,
    refreshToken: null,
  });
  const [loading, setLoading] = useState(true);

  const setAuthFromStorage = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const refreshToken = localStorage.getItem("refreshToken");

    if (token && refreshToken) {
      setAuth({ isLoggedIn: true, token, role, refreshToken });
    } else {
      setAuth({
        isLoggedIn: false,
        token: null,
        role: null,
        refreshToken: null,
      });
    }
  };

  useEffect(() => {
    setAuthFromStorage();
    setLoading(false);
  }, []);

  const login = (token, role, refreshToken) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("refreshToken", refreshToken);
    setAuth({ isLoggedIn: true, token, role, refreshToken });
  };

  const isRefreshTokenValid = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return false;

    try {
      const res = await fetch("http://localhost:9980/users/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      return res.status === 200;
    } catch (err) {
      console.error("Error validating refresh token:", err);
      return false;
    }
  };

  const logout = async ({ auto = false } = {}) => {
    if (auto) {
      const isValid = await isRefreshTokenValid();
      if (isValid) return;
    }

    console.log("Logging out...");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    setAuth({ isLoggedIn: false, token: null, role: null, refreshToken: null });
  };



  return (
    <AuthContext.Provider
      value={{ auth, login, logout, loading, setAuthFromStorage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
