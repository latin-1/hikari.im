import type { ReactNode } from "react";

import styles from "./Typography.module.scss";

type TypographyProps = {
  children?: ReactNode;
};

const Typography = ({ children }: TypographyProps) => {
  return <div className={styles.typography}>{children}</div>;
};

export { type TypographyProps, Typography };
