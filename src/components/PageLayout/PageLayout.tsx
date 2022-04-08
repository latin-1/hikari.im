import type { ReactNode } from "react";

import styles from "./PageLayout.module.scss";

type PageLayoutProps = {
  children?: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return <main className={styles.layout}>{children}</main>;
};

export { PageLayout };
export type { PageLayoutProps };
