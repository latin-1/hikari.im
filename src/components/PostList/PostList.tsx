import type { ReactNode } from "react";

import styles from "./PostList.module.scss";

type PostListProps = {
  children?: ReactNode;
};

const PostList = ({ children }: PostListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export { PostList, type PostListProps };
