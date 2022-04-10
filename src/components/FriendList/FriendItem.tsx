import type { ReactNode } from "react";

import styles from "./FriendItem.module.scss";

type FriendItemProps = {
  name?: ReactNode;
  avatarUrl?: string;
  link?: string;
};

const FriendItem = ({ name, avatarUrl, link }: FriendItemProps) => {
  return (
    <a className={styles.link} href={link} target="_blank">
      <section className={styles.item}>
        <img
          className={styles.avatar}
          src={avatarUrl}
          draggable={false}
          aria-hidden
        />
        <h3 className={styles.name}>{name}</h3>
      </section>
    </a>
  );
};

export { FriendItem };
