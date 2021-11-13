import { TheHeader, TheFooter } from "components/organisms/index";
import styles from "styles/pages/layout-container.module.scss";
import { createContext, useState } from "react";

export const maskContext = createContext(
  {} as {
    maskIsShow: boolean;
    setMaskIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

export default function Layout({ children }) {
  const [maskIsShow, setMaskIsShow] = useState<boolean>(false);

  return (
    <maskContext.Provider value={{ maskIsShow, setMaskIsShow }}>
      <div className={styles.layoutContainer}>
        <TheHeader />
        <div className={styles.inner}>
          <main className={styles.content}>{children}</main>
        </div>
        <TheFooter />
        {/* モーダルなどのための黒い透けている背景 */}
        <div
          className={`${styles.mask} ${maskIsShow ? styles.Show : ""}`}
        />{" "}
      </div>
    </maskContext.Provider>
  );
}
