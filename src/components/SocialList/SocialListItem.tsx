import type { ReactElement } from "react";

import type { Social } from "../../types/Social";
import styles from "./SocialListItem.module.scss";

type SocialListItemProps = {
  data: Social;
};

const SocialListItem = ({ data }: SocialListItemProps): ReactElement => {
  return (
    <a className={styles.link} href={data.link} target="_blank" rel="noopener">
      <div className={styles.item}>
        <img
          className={styles.icon}
          src={data.icon}
          alt={`${data.name} Icon`}
        />
        <div className={styles.name}>{data.name}</div>
      </div>
    </a>
  );
};

export { SocialListItem };
export type { SocialListItemProps };
