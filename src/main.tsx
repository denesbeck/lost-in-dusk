import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./assets/fonts/DepartureMono-Regular.woff2";
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
        <Stack className="relative font-[DepartureMono] text-white">
          <div className="fixed top-0 z-0 h-screen w-screen bg-gradient-to-tr from-black via-gray-900 to-black backdrop-blur-md" />
          <div
            style={{
              position: "fixed",
              top: 0,
              zIndex: 10,
              width: "100vw",
              height: "100vh",
              backgroundSize: "2rem 2rem",
              backgroundImage:
                "linear-gradient(to right, rgba(17, 24, 39, 0.15) 2px, transparent 2px),linear-gradient(to bottom, rgba(17, 24, 39, 0.15) 2px, transparent 2px)",
            }}
          />
          <App />
          <ScrollToTop />
        </Stack>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);
