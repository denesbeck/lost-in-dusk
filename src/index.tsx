import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <div className="flex min-h-screen flex-col bg-gray-900 font-mono text-gray-200">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
