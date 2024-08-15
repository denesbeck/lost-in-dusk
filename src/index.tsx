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
      <div className="flex flex-col min-h-screen font-mono text-gray-200 bg-gray-900">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
