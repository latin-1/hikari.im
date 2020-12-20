import type { ReactElement } from "react";

import type { Social } from "../../types/Social";
import { SocialItem } from "./SocialItem";
import styles from "./SocialList.module.scss";

const SocialList = ({ data }: { data: readonly Social[] }): ReactElement => {
  return (
    <div className={styles.list}>
      {data.map((item) => (
        <SocialItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export { SocialList };
