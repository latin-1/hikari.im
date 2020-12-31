import type { ReactElement } from "react";

import poster from "../../assets/poster.png";
import styles from "./Poster.module.scss";

const Poster = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img className={styles.posterImage} src={poster} alt="" />
      </div>
    </div>
  );
};

export { Poster };
