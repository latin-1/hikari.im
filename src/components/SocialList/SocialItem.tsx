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
        <div className={styles.icon}>
          <data.icon className={styles.iconImage} />
        </div>
        <div className={styles.content}>
          <div className={styles.name}>{data.name}</div>
        </div>
      </div>
    </a>
  );
};

export { SocialItem };
