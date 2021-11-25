import type { ReactNode } from "react";

import styles from "./ListItem.module.scss";

type ListItemProps = {
  href?: string;
  icon: string;
  children: ReactNode;
};

const ListItem = ({ href, icon, children }: ListItemProps) => {
  const item = (
    <div className={styles.item}>
      <img className={styles.icon} src={icon} alt="" />
      <div className={styles.content}>{children}</div>
    </div>
  );

  if (href) {
    return (
      <a className={styles.link} href={href} target="_blank" rel="noopener">
        {item}
      </a>
    );
  }

  return item;
};

export { ListItem };
export type { ListItemProps };
