import { useLocation } from "@buncho/router";
import { ReactElement, ReactNode, useLayoutEffect, useRef } from "react";

import styles from "./Page.module.scss";

const Page = ({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}): ReactElement => {
  const page = useRef<HTMLElement>(null);
  const location = useLocation();

  useLayoutEffect(() => {
    document.title = title ? `${title} - Hikari Hayashi` : "Hikari Hayashi";
  }, [title]);

  useLayoutEffect(() => {
    if (page.current) {
      const { scrollX, scrollY } = window;
      page.current.focus({ preventScroll: true });
      if (window.scrollX !== scrollX || window.scrollY !== scrollY) {
        window.scrollTo(scrollX, scrollY);
      }
    }
  }, [location.pathname]);

  return (
    <article ref={page} className={styles.page}>
      <h1 className={styles.title}>{title || "Hikari Hayashi"}</h1>
      <div className={styles.content}>{children}</div>
    </article>
  );
};

export { Page };
