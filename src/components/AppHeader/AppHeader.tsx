import { Link } from "@buncho/router";
import type { ReactElement } from "react";

import styles from "./AppHeader.module.scss";

const AppHeader = (): ReactElement => {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>Hikari Hayashi</h1>
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to="/friends">
            Friends
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export { AppHeader };
