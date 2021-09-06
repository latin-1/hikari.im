import type { ReactElement } from "react";

import type { Social } from "../../types/Social";
import styles from "./SocialList.module.scss";
import { SocialListItem } from "./SocialListItem";

type SocialListProps = {
  data: readonly Social[];
};

const SocialList = ({ data }: SocialListProps): ReactElement => {
  return (
    <div className={styles.list}>
      {data.map((data) => (
        <SocialListItem key={data.name} data={data} />
      ))}
    </div>
  );
};

export { SocialList };
export type { SocialListProps };
