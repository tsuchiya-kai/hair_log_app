import { TheHeader, TheFooter } from "components/organisms/index";
import { useViewPort } from "hooks/useViewPort";
import styles from "styles/pages/layout-container.module.scss";

export default function Layout({ children }) {
  const { windowWidth, windowHeight, clientHeight, maxScrollPosition } =
    useViewPort();
  console.log({ windowWidth, windowHeight, clientHeight, maxScrollPosition });

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
