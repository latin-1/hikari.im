import styles from "./AppHeader.module.scss";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>Hikari Hayashi</h1>
    </header>
  );
};

export { AppHeader };
