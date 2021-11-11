import styles from "../styles/pages/layout-container.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <h1>ページだよ！！</h1>
      {children}
    </div>
  );
}
