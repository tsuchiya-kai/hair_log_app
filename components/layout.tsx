import { TheHeader } from "components/organisms/index";
import styles from "styles/pages/layout-container.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <TheHeader />
      <main>{children}</main>
    </div>
  );
}
