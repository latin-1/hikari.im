import type { ReactElement } from "react";

import { Page } from "../../components/Page";
import { Poster } from "../../components/Poster";

const TwentyTwentyPage = (): ReactElement => {
  return (
    <Page title="Twenty-Twenty">
      <Poster />
    </Page>
  );
};

export { TwentyTwentyPage };
