import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n.ts";
import { BrowserRouter } from "react-router";
import "./css/index.css";
import { App } from "@components/index.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
);
