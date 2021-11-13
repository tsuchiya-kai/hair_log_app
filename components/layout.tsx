import { TheHeader, TheFooter } from "components/organisms/index";
import styles from "styles/pages/layout-container.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <TheHeader />
      {/* TODO: あとで実装する、max-width:823pxで */}
      <div className={styles.inner}>
        <main className={styles.content}>{children}</main>
      </div>
      <TheFooter />
    </div>
  );
}
