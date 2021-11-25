import type { ReactNode } from "react";

import styles from "./List.module.scss";

type ListProps = {
  children?: ReactNode;
};

const List = ({ children }: ListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export { List };
export type { ListProps };
