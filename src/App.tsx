import { Route, Routes } from "@neetly/router";

import styles from "./App.module.scss";
import { AppHeader } from "./components/AppHeader";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <div className={styles.container}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export { App };
