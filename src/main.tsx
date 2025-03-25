import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>
);
