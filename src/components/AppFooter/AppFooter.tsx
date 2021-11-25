import styles from "./AppFooter.module.scss";

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          <del>Copyright &copy; Hikari Hayashi.</del> Who cares.
        </p>
      </div>
    </footer>
  );
};

export { AppFooter };
