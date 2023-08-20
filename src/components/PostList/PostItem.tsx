import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import styles from "./PostItem.module.scss";

interface PostItemProps {
  title: ReactNode;
  date: ReactNode;
  to: string;
}

const PostItem = ({ title, date, to }: PostItemProps) => {
  return (
    <Link className={styles.link} to={to}>
      <article className={styles.item}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.date}>{date}</p>
      </article>
    </Link>
  );
};

export { PostItem, type PostItemProps };
