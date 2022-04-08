import { Route, Routes } from "@neetly/router";

import { AppHeader } from "./components/AppHeader";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export { App };
