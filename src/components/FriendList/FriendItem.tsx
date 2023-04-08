import type { ReactNode } from "react";

import styles from "./FriendItem.module.scss";

type FriendItemProps = {
  name: ReactNode;
  avatarUrl: string;
  link: string;
};

const FriendItem = ({ name, avatarUrl, link }: FriendItemProps) => {
  return (
    <a className={styles.link} href={link} target="_blank" rel="noreferrer">
      <span className={styles.item}>
        <img className={styles.avatar} src={avatarUrl} alt="" />
        <span className={styles.name}>{name}</span>
      </span>
    </a>
  );
};

export { FriendItem, type FriendItemProps };
