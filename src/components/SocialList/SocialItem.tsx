import type { ReactNode } from "react";

import styles from "./SocialItem.module.scss";

type SocialItemProps = {
  name: ReactNode;
  icon: string;
  link: string;
};

const SocialItem = ({ name, icon, link }: SocialItemProps) => {
  return (
    <a className={styles.link} href={link} target="_blank" rel="noreferrer">
      <span className={styles.item}>
        <img className={styles.icon} src={icon} aria-hidden />
        <span className={styles.name}>{name}</span>
      </span>
    </a>
  );
};

export { type SocialItemProps, SocialItem };
