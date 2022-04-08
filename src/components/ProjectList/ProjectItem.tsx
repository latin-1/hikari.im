import type { ReactNode } from "react";

import styles from "./ProjectItem.module.scss";

type ProjectItemProps = {
  name?: ReactNode;
  description?: ReactNode;
  link?: string;
};

const ProjectItem = ({ name, description, link }: ProjectItemProps) => {
  return (
    <a className={styles.link} href={link} target="_blank">
      <section className={styles.item}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </section>
    </a>
  );
};

export { ProjectItem };
export type { ProjectItemProps };
