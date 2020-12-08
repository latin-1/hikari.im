import type { ReactElement } from "react";

import styles from "./App.module.scss";

const App = (): ReactElement => {
  return (
    <div className={styles.app}>
      <p className={styles.placeholder}>This page intentionally left blank.</p>
    </div>
  );
};

export { App };
