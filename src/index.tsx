import "./index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataBrowserRouter, Route } from "react-router-dom";

import { App } from "./App";
import { HomePage } from "./pages/HomePage";

const container = document.querySelector("#root");
if (container) {
  createRoot(container).render(
    <StrictMode>
      <DataBrowserRouter>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </DataBrowserRouter>
    </StrictMode>,
  );
}
