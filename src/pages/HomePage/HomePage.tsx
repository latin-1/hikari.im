import type { ReactElement } from "react";

import { Page } from "../../components/Page";
import { Poster } from "../../components/Poster";

const HomePage = (): ReactElement => {
  return (
    <Page>
      <Poster />
    </Page>
  );
};

export { HomePage };
