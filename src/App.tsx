import { Route, Routes, useAction, useLocation } from "@buncho/router";
import { ReactElement, useLayoutEffect } from "react";

import styles from "./App.module.scss";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { AboutPage } from "./pages/AboutPage";
import { FriendsPage } from "./pages/FriendsPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TwentyTwentyPage } from "./pages/TwentyTwentyPage/TwentyTwentyPage";

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
          <Route path="/2020" element={<TwentyTwentyPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
};

export { App };
