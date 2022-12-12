import { Outlet, ScrollRestoration } from "react-router-dom";

const App = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export { App };
