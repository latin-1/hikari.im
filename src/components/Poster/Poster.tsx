import type { ReactElement } from "react";

import styles from "./Poster.module.scss";

const POSTER = new URL("../../assets/poster.png", import.meta.url).toString();

const Poster = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img className={styles.posterImage} src={POSTER} alt="" />
      </div>
    </div>
  );
};

export { Poster };
