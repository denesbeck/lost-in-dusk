import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <div className="flex min-h-screen flex-col bg-gray-900 font-mono text-gray-200">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
