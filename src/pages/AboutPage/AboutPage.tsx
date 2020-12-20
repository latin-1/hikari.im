import type { ReactElement } from "react";

import { Page } from "../../components/Page";
import { SocialList } from "../../components/SocialList";
import { socials } from "../../data/socials";

const AboutPage = (): ReactElement => {
  return (
    <Page title="About">
      <SocialList data={socials} />
    </Page>
  );
};

export { AboutPage };
