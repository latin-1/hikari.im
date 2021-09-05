import type { ReactElement } from "react";

import { FriendList } from "../../components/FriendList";
import { Page } from "../../components/Page";
import { friends } from "../../data/friends";

const FriendsPage = (): ReactElement => {
  return (
    <Page title="Friends">
      <FriendList data={friends} />
    </Page>
  );
};

export { FriendsPage };
