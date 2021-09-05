import type { ReactElement } from "react";

import type { Friend } from "../../types/Friend";
import styles from "./FriendListItem.module.scss";

type FriendListItemProps = {
  data: Friend;
};

const FriendListItem = ({ data }: FriendListItemProps): ReactElement => {
  const avatarUrl = `https://avatars.githubusercontent.com/${data.socials.github}?s=64`;

  return (
    <a
      className={styles.link}
      href={data.homepage}
      target="_blank"
      rel="noopener"
    >
      <div className={styles.item}>
        <img className={styles.avatar} src={avatarUrl} alt="" />
        <div className={styles.name}>{data.name}</div>
      </div>
    </a>
  );
};

export { FriendListItem };
export type { FriendListItemProps };
