import type { ReactElement } from "react";

import type { Friend } from "../../types/Friend";
import styles from "./FriendItem.module.scss";

const AVATAR_SIZE = 48 * window.devicePixelRatio;

const FriendItem = ({ data }: { data: Friend }): ReactElement => {
  return (
    <a
      className={styles.link}
      href={data.homepage}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.item}>
        <div className={styles.avatar}>
          <img
            className={styles.avatarImage}
            src={`https://avatars.githubusercontent.com/${data.socials.github}?s=${AVATAR_SIZE}`}
            alt=""
            loading="lazy"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.id}>@{data.id}</div>
        </div>
      </div>
    </a>
  );
};

export { FriendItem };
