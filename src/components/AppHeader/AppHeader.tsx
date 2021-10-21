import { Link } from "@neetly/router";
import { ReactElement, useLayoutEffect, useRef, useState } from "react";

import styles from "./AppHeader.module.scss";

const AppHeader = (): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setSticky] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[entries.length - 1];
        if (entry) {
          setSticky(!entry.isIntersecting);
        }
      });
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <div ref={ref} className={styles.ref} />
      <header className={styles.header} data-sticky={isSticky ? "" : null}>
        <div className={styles.content}>
          <nav className={styles.nav}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
            <Link className={styles.navLink} to="/friends">
              Friends
            </Link>
            <Link className={styles.navLink} to="/about">
              About
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export { AppHeader };
