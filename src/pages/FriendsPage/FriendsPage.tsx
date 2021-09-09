import type { ReactElement } from "react";

import { FriendList } from "../../components/FriendList";
import { Page } from "../../components/Page";
import { Typography } from "../../components/Typography";
import { friends } from "../../data/friends";

const FriendsPage = (): ReactElement => {
  return (
    <Page title="Friends">
      <Typography>
        <blockquote>
          <p>“I cannot play with you,” the fox said. “I am not tamed.”</p>
        </blockquote>
        <hr />
        <figure>
          <FriendList data={friends} />
        </figure>
      </Typography>
    </Page>
  );
};

export { FriendsPage };
