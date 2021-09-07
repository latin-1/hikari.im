import type { ReactElement } from "react";

import { FriendList } from "../../components/FriendList";
import { Page } from "../../components/Page";
import { Typography } from "../../components/Typography";
import { friends } from "../../data/friends";

const FriendsPage = (): ReactElement => {
  return (
    <Page title="Friends">
      <Typography>
        <figure>
          <FriendList data={friends} />
        </figure>
      </Typography>
    </Page>
  );
};

export { FriendsPage };
