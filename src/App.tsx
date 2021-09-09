import {
  Route,
  Routes,
  useLocation,
  useScrollRestoration,
} from "@buncho/router";
import type { ReactElement } from "react";

import styles from "./App.module.scss";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { AboutPage } from "./pages/AboutPage";
import { FriendsPage } from "./pages/FriendsPage";
import { HomePage } from "./pages/HomePage";

const App = (): ReactElement => {
  const location = useLocation();
  useScrollRestoration(location.pathname);

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
