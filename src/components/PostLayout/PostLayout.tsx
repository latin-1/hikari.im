import type { ReactNode } from "react";

import styles from "./PostLayout.module.scss";

type PostLayoutProps = {
  title: ReactNode;
  date: ReactNode;
  coverImage?: {
    url: string;
    position?: string;
    size?: string;
  };
  children?: ReactNode;
};

const PostLayout = ({ title, date, coverImage, children }: PostLayoutProps) => {
  return (
    <article>
      {coverImage && (
        <div
          className={styles.coverImage}
          style={{
            "--cover-image": `url(${coverImage.url})`,
            "--cover-position": coverImage.position,
            "--cover-size": coverImage.size,
          }}
        />
      )}
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.date}>{date}</p>
      </header>
      {children}
    </article>
  );
};

export { PostLayout };
