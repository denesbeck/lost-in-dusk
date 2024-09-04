import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Stack } from "@chakra-ui/react";
import { ScrollToTop } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter basename="/">
        <Stack className="font-mono dark:bg-gray-900 dark:text-gray-200">
          <App />
          <ScrollToTop />
        </Stack>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);
