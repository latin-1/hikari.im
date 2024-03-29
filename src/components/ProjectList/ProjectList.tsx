import type { ReactNode } from "react";

import styles from "./ProjectList.module.scss";

interface ProjectListProps {
  children?: ReactNode;
}

const ProjectList = ({ children }: ProjectListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export { ProjectList, type ProjectListProps };
