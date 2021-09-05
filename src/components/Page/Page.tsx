import { ReactElement, ReactNode, useLayoutEffect } from "react";

import { APP_NAME } from "../../env";
import styles from "./Page.module.scss";

type PageProps = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
};

const Page = ({ title, subtitle, children }: PageProps): ReactElement => {
  useLayoutEffect(() => {
    document.title = title ? `${title} - ${APP_NAME}` : APP_NAME;
  }, [title]);

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title || APP_NAME}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>
      {children}
    </article>
  );
};

export { Page };
export type { PageProps };
