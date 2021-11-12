import { TheHeader } from "components/organisms/index";
import styles from "styles/pages/layout-container.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      {/* TODO: あとで実装する、max-width:823pxで */}
      <div className={styles.inner}>
        <TheHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}
