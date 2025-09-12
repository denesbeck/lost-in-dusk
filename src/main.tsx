import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./assets/fonts/DepartureMono-Regular.woff2";
import { ScrollToTop } from "@/components";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <div className="flex relative flex-col text-text-dark font-[DepartureMono]">
          <div className="fixed top-0 w-screen h-screen from-black to-black via-dark-900 bg-linear-to-r" />
          <div
            style={{
              position: "fixed",
              top: 0,
              zIndex: 10,
              width: "100dvw",
              height: "100dvh",
              backgroundSize: "2rem 2rem",
              backgroundImage:
                "linear-gradient(to right, rgba(17, 24, 39, 0.2) 2px, transparent 2px),linear-gradient(to bottom, rgba(17, 24, 39, 0.2) 2px, transparent 2px)",
            }}
          />
          <App />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
