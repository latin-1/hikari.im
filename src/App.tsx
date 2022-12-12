import { Outlet, ScrollRestoration } from "react-router-dom";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Hikari Hayashi</h1>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export { App };
