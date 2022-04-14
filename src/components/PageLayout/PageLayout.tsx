import type { ReactNode } from "react";
import { useLayoutEffect } from "react";

import { APP_NAME } from "../../constants";
import styles from "./PageLayout.module.scss";

type PageLayoutProps = {
  title?: string;
  children?: ReactNode;
};

const PageLayout = ({ title, children }: PageLayoutProps) => {
  useLayoutEffect(() => {
    document.title = title ? `${title} - ${APP_NAME}` : APP_NAME;
  }, [title]);

  return <main className={styles.layout}>{children}</main>;
};

export { PageLayout };
export type { PageLayoutProps };
