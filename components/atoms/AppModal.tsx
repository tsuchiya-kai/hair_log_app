import { ReactNode, useRef } from "react";
import { CrossMarkIcon } from "components/atoms/icon/index";
import { useBodyScrollLock } from "hooks/useBodyScrollLock";
import styles from "styles/components/atoms/app-modal.module.scss";
/**
 * TODO: backgroundをクリックした時もモーダルが閉じるようにしたい
 */
type Props = {
  isShow: boolean;
  children: ReactNode;
  isScroll?: boolean;
  switchFunc: () => void;
};
export default function AppModal({
  children,
  isShow,
  isScroll,
  switchFunc,
}: Props) {
  const target = useRef<HTMLDivElement>(null);
  useBodyScrollLock({
    isActive: isShow,
    target: target,
  });

  return (
    <>
      {isShow ? (
        <div className={styles.appModal}>
          <div ref={target} className={styles.body}>
            <button onClick={switchFunc} className={styles.close}>
              <CrossMarkIcon />
            </button>

            <div className={`${styles.content} ${isScroll ? "Scroll" : ""}`}>
              {children}
            </div>
          </div>
          <div
            onClick={switchFunc}
            className={`${styles.mask} ${isShow ? styles.Show : ""}`}
          />{" "}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
