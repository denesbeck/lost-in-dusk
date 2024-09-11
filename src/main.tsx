import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Stack } from "@chakra-ui/react";
import { ScrollToTop } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: {
          position: "top-right",
          variant: "solid",
        },
      }}
    >
      <BrowserRouter basename="/">
        <Stack className="relative font-mono text-slate-100">
          <div className="fixed top-0 z-0 w-screen h-screen bg-gradient-to-tr from-black via-gray-900 to-black backdrop-blur-md" />
          <div
            style={{
              position: "fixed",
              top: 0,
              zIndex: 10,
              width: "100vw",
              height: "100vh",
              backgroundSize: "2rem 2rem",
              backgroundImage:
                "linear-gradient(to right, rgba(15, 23, 41, 0.08) 2px, transparent 2px),linear-gradient(to bottom, rgba(15, 23, 41, 0.08) 2px, transparent 2px)",
            }}
          />
          <App />
          <ScrollToTop />
        </Stack>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);
