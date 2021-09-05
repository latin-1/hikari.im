import type { ReactElement } from "react";

import type { Friend } from "../../types/Friend";
import styles from "./FriendList.module.scss";
import { FriendListItem } from "./FriendListItem";

type FriendListProps = {
  data: readonly Friend[];
};

const FriendList = ({ data }: FriendListProps): ReactElement => {
  return (
    <div className={styles.list}>
      {data.map((data) => (
        <FriendListItem key={data.name} data={data} />
      ))}
    </div>
  );
};

export { FriendList };
export type { FriendListProps };
