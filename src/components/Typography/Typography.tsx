import type { ReactNode } from "react";

import styles from "./Typography.module.scss";

interface TypographyProps {
  children?: ReactNode;
}

const Typography = ({ children }: TypographyProps) => {
  return <div className={styles.typography}>{children}</div>;
};

export { Typography, type TypographyProps };
