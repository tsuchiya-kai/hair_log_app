import { TheHeader } from "../components/organisms/index"; // TODO: なぜかaliasが効かない
import styles from "@styles/pages/layout-container.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <TheHeader />
      <div className={styles.layoutContainer}>
        <main>{children}</main>
      </div>
    </>
  );
}
