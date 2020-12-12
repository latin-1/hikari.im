import type { ReactElement } from "react";

import type { Friend } from "../../types/Friend";
import { FriendItem } from "./FriendItem";

const FriendList = ({ data }: { data: Friend[] }): ReactElement => {
  return (
    <div>
      {data.map((item) => (
        <FriendItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export { FriendList };
