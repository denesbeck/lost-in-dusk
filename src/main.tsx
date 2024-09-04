import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Stack } from "@chakra-ui/react";
import { ScrollToTop } from "@/components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Stack className="font-mono dark:text-gray-200 dark:bg-gray-900">
        <App />
        <ScrollToTop />
      </Stack>
    </BrowserRouter>
  </StrictMode>,
);
