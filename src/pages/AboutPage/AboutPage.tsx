import type { ReactElement } from "react";

import { Page } from "../../components/Page";
import { SocialList } from "../../components/SocialList";
import { Typography } from "../../components/Typography";
import { socials } from "../../data/socials";

const AboutPage = (): ReactElement => {
  return (
    <Page title="About">
      <Typography>
        <figure>
          <SocialList data={socials} />
        </figure>
      </Typography>
    </Page>
  );
};

export { AboutPage };
