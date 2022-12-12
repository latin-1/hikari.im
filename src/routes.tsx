import { createRoutesFromElements, Route } from "react-router-dom";

import { App } from "./App";
import { HomePage } from "./pages/HomePage";

const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route path="/" element={<HomePage />} />
  </Route>,
);

export { routes };
