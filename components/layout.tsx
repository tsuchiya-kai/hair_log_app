import { TheHeader, TheFooter } from "components/organisms/index";
import { createContext, useState } from "react";
import { ReactNode } from "react";
import styles from "styles/pages/layout-container.module.scss";

type Props = {
  children: ReactNode;
};

// 参考: https://qiita.com/Rascal823/items/0f53ffbb410505b707f8
export const maskContext = createContext(
  {} as {
    maskIsShow: boolean;
    setMaskIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  }
);
export const footerContext = createContext(
  {} as {
    footerIsShow: boolean;
    setFooterIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

export default function Layout({ children }: Props) {
  const [maskIsShow, setMaskIsShow] = useState<boolean>(false);
  const [footerIsShow, setFooterIsShow] = useState<boolean>(true);

  return (
    <footerContext.Provider value={{ footerIsShow, setFooterIsShow }}>
      <maskContext.Provider value={{ maskIsShow, setMaskIsShow }}>
        <div className={styles.layoutContainer}>
          <TheHeader />
          <div className={styles.inner}>
            <main className={styles.content}>{children}</main>
          </div>
          {footerIsShow ? <TheFooter /> : ""}
          {/* モーダルなどのための黒い透けている背景 */}
          <div
            className={`${styles.mask} ${maskIsShow ? styles.Show : ""}`}
          />{" "}
        </div>
      </maskContext.Provider>
    </footerContext.Provider>
  );
}
