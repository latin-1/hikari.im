import type { ReactElement, ReactNode } from "react";

import styles from "./Typography.module.scss";

const Typography = ({ children }: { children?: ReactNode }): ReactElement => {
  return <div className={styles.typography}>{children}</div>;
};

export { Typography };
