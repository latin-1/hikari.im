import type { ReactElement } from "react";

import type { Social } from "../../types/Social";
import styles from "./SocialItem.module.scss";

const SocialItem = ({ data }: { data: Social }): ReactElement => {
  return (
    <a
      className={styles.link}
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.item}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.value}>{data.value}</div>
      </div>
    </a>
  );
};

export { SocialItem };
