import type { ReactElement } from "react";

import type { Friend } from "../../types/Friend";
import { List, ListItem } from "../List";

type FriendListProps = {
  data: readonly Friend[];
};

const FriendList = ({ data }: FriendListProps): ReactElement => {
  return (
    <List>
      {data.map((item) => (
        <ListItem
          key={item.name}
          href={item.homepage}
          icon={`https://avatars.githubusercontent.com/${item.socials.github}?s=48`}
        >
          {item.name}
        </ListItem>
      ))}
    </List>
  );
};

export { FriendList };
export type { FriendListProps };
