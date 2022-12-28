import type { ReactNode } from "react";

import styles from "./SocialList.module.scss";

type SocialListProps = {
  children?: ReactNode;
};

const SocialList = ({ children }: SocialListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export { type SocialListProps, SocialList };
