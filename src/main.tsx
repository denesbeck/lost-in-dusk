import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <div className="flex overflow-auto flex-col min-h-screen font-mono dark:text-gray-200 dark:bg-gray-900">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
