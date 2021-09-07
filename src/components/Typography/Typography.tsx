import type { ReactElement, ReactNode } from "react";

import styles from "./Typography.module.scss";

type TypographyProps = {
  children?: ReactNode;
};

const Typography = ({ children }: TypographyProps): ReactElement => {
  return <div className={styles.typography}>{children}</div>;
};

export { Typography };
export type { TypographyProps };
