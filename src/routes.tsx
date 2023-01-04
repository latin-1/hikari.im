import { createElement, lazy } from "react";
import { createRoutesFromElements, Route } from "react-router-dom";

import { App } from "./App";
import { HomePage } from "./pages/HomePage";

const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route path="/" element={<HomePage />} />
    <Route
      path="/posts/2022"
      loader={() => import("./posts/2023-01-05-2022")}
      element={createElement(lazy(() => import("./posts/2023-01-05-2022")))}
    />
  </Route>,
);

export { routes };
