import type { ReactNode } from "react";

import styles from "./ProjectItem.module.scss";

type ProjectItemProps = {
  name: ReactNode;
  description: ReactNode;
  link: string;
};

const ProjectItem = ({ name, description, link }: ProjectItemProps) => {
  return (
    <a className={styles.link} href={link} target="_blank" rel="noreferrer">
      <section className={styles.item}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{description}</p>
      </section>
    </a>
  );
};

export { type ProjectItemProps, ProjectItem };
