import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Protected/AuthContext.jsx";
import AppInitializer from "./tools/AppInitializer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppInitializer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
