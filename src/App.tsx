import type { ReactElement } from "react";

import styles from "./App.module.scss";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";

const App = (): ReactElement => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.content}></div>
      <AppFooter />
    </div>
  );
};

export { App };
