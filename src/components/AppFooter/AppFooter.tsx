import type { ReactElement } from "react";

import styles from "./AppFooter.module.scss";

const AppFooter = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyright &copy; 2020 Hikari Hayashi.</p>
    </footer>
  );
};

export { AppFooter };
