import type { ReactNode } from "react";

import styles from "./SocialList.module.scss";

interface SocialListProps {
  children?: ReactNode;
}

const SocialList = ({ children }: SocialListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export { SocialList, type SocialListProps };
