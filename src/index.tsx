import "./index.scss";

import { BrowserRouter } from "@buncho/router";
import { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "./App";

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.querySelector("#root"),
);
