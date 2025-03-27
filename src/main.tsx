import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n.ts";
import App from "./components/app/App.tsx";
import { BrowserRouter } from "react-router";
import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
