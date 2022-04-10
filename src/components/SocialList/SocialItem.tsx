import type { ReactNode } from "react";

import styles from "./SocialItem.module.scss";

type SocialItemProps = {
  name?: ReactNode;
  iconUrl?: string;
  link?: string;
};

const SocialItem = ({ name, iconUrl, link }: SocialItemProps) => {
  return (
    <a className={styles.link} href={link}>
      <section className={styles.item}>
        <img
          className={styles.icon}
          src={iconUrl}
          draggable={false}
          aria-hidden
        />
        <h3 className={styles.name}>{name}</h3>
      </section>
    </a>
  );
};

export { SocialItem };
export type { SocialItemProps };
