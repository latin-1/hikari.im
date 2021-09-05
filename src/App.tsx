import {
  Route,
  Routes,
  useLocation,
  useScrollRestoration,
} from "@buncho/router";
import type { ReactElement } from "react";

import styles from "./App.module.scss";
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export { App };
