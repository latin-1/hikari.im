import type { ReactElement } from "react";

import type { Friend } from "../../types/Friend";

const FriendItem = ({ data }: { data: Friend }): ReactElement => {
  return <div>{data.id}</div>;
};

export { FriendItem };
