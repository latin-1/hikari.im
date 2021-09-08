import type { ReactElement } from "react";

import { DeviceList } from "../../components/DeviceList";
import { Page } from "../../components/Page";
import { SocialList } from "../../components/SocialList";
import { Typography } from "../../components/Typography";
import { devices } from "../../data/devices";
import { socials } from "../../data/socials";

const AboutPage = (): ReactElement => {
  return (
    <Page title="About">
      <Typography>
        <figure>
          <DeviceList data={devices} />
        </figure>
        <hr />
        <figure>
          <SocialList data={socials} />
        </figure>
      </Typography>
    </Page>
  );
};

export { AboutPage };
