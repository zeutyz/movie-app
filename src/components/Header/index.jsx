import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles["border-header"]}>
      <header className={styles.header}>
        <span>MoviesFlix</span>
        <nav>
          <a href="#">HOME</a>
          <a href="#">WATCH</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
