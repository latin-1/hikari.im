import type { ReactElement } from "react";

import type { Social } from "../../types/Social";
import { List, ListItem } from "../List";

type SocialListProps = {
  data: readonly Social[];
};

const SocialList = ({ data }: SocialListProps): ReactElement => {
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.name} href={item.link} icon={item.icon}>
          {item.name}
        </ListItem>
      ))}
    </List>
  );
};

export { SocialList };
export type { SocialListProps };
