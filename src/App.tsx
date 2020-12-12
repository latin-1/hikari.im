import { Route, Routes, useAction, useLocation } from "@buncho/router";
import { ReactElement, useLayoutEffect } from "react";

import styles from "./App.module.scss";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { AboutPage } from "./pages/AboutPage";
import { FriendsPage } from "./pages/FriendsPage";
import { HomePage } from "./pages/HomePage";

const App = (): ReactElement => {
  const location = useLocation();
  const action = useAction();

  useLayoutEffect(() => {
    if (action === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
};

export { App };
