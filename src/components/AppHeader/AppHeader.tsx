import { Link, useLocation } from "@buncho/router";
import classNames from "classnames";
import type { ReactElement } from "react";

import styles from "./AppHeader.module.scss";

const AppHeader = (): ReactElement => {
  const location = useLocation();

  return (
    <header
      className={classNames(
        styles.header,
        location.pathname === "/" && styles.primary,
      )}
    >
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
