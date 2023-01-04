import { Suspense } from "react";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Link className={styles.homeLink} to="/">
          <h1 className={styles.name}>Hikari Hayashi</h1>
        </Link>
      </header>
      <div className={styles.content}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>Copyright &copy; Hikari Hayashi.</p>
      </footer>
      <ScrollRestoration />
    </div>
  );
};

export { App };
