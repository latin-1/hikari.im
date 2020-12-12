import type { ReactElement } from "react";

import type { Friend } from "../../types/Friend";
import { FriendItem } from "./FriendItem";
import styles from "./FriendList.module.scss";

const FriendList = ({ data }: { data: Friend[] }): ReactElement => {
  return (
    <div className={styles.list}>
      {data.map((item) => (
        <FriendItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export { FriendList };
