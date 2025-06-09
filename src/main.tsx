import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./assets/fonts/DepartureMono-Regular.woff2";
import { ScrollToTop } from "@/components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <div className="flex relative flex-col text-white font-[DepartureMono]">
        <div className="fixed top-0 z-0 w-screen h-screen from-black to-black bg-linear-to-tr via-gray-900/10 backdrop-blur-md" />
        <div
          style={{
            position: "fixed",
            top: 0,
            zIndex: 10,
            width: "100vw",
            height: "100vh",
            backgroundSize: "2rem 2rem",
            backgroundImage:
              "linear-gradient(to right, rgba(17, 24, 39, 0.2) 2px, transparent 2px),linear-gradient(to bottom, rgba(17, 24, 39, 0.2) 2px, transparent 2px)",
          }}
        />
        <App />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
