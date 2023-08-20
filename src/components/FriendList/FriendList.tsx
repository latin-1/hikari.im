import type { ReactNode } from "react";

import styles from "./FriendList.module.scss";

interface FriendListProps {
  children?: ReactNode;
}

const FriendList = ({ children }: FriendListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export { FriendList, type FriendListProps };
