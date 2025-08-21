// const myMiddleware = (axiosInstance) => (store) => (next) => (action) => {
//   if (!action || typeof action !== "object" || !action.type) {
//     return next(action);
//   }

//   if (action.type === "apiCall") {
//     const { url, method, data, tool, onSuccess, onError, isFormData } =
//       action.payload;

//     const config = {};
//     if (isFormData) {
//       config.headers = { "Content-Type": "multipart/form-data" };
//     }

//     axiosInstance({
//       url,
//       method,
//       data,
//       ...config,
//     })
//       .then((res) => {
//         if (tool) {
//          store.dispatch(tool(res.data));
//         }
//         if (onSuccess) {
//           store.dispatch(onSuccess());
//         }
//       })
//       .catch((error) => {
//         console.error("API call failed in middleware:", error);
//         if (onError) {
//           const errorMessage =
//             error.response?.data?.message ||
//             error.message ||
//             "An unknown error occurred";
//           store.dispatch(onError(errorMessage));
//         }
//       });
//   } else {
//     return next(action);
//   }
// };

// export default myMiddleware;

const myMiddleware = (axiosInstance) => (store) => (next) => (action) => {
  if (!action || typeof action !== "object" || !action.type) {
    return next(action);
  }

  if (action.type === "apiCall") {
    const { url, method, data, tool, onSuccess, onError, isFormData, params } =
      action.payload;

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        ...(isFormData ? { "Content-Type": "multipart/form-data" } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      params,
    };

    axiosInstance({
      url,
      method,
      data,
      ...config,
    })
      .then((res) => {
        if (tool) {
          const actionResult =
            typeof tool === "function" ? tool(res.data) : tool;
          if (
            actionResult &&
            typeof actionResult === "object" &&
            actionResult.type
          ) {
            store.dispatch(actionResult);
          }
        }

        if (onSuccess) {
          store.dispatch(onSuccess());
        }
      })
      .catch((error) => {
        console.error("API call failed in middleware:", error);
        console.error("Response data:", error.response?.data);
        if (onError) {
          const errorMessage =
            error.response?.data?.message ||
            error.message ||
            "An unknown error occurred";
          store.dispatch(onError(errorMessage));
        }
      });
  } else {
    return next(action);
  }
};

export default myMiddleware;
