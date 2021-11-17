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
  className?: string;
};
export default function AppModal({
  children,
  isShow,
  isScroll,
  switchFunc,
  className,
}: Props) {
  const target = useRef<HTMLDivElement>(null);
  useBodyScrollLock({
    isActive: isShow,
    target: target,
  });

  return (
    <>
      {isShow ? (
        <div className={styles.appModal} ref={target}>
          <div className={`${styles.body}  ${className ? className : ""}`}>
            <button onClick={switchFunc} className={styles.close}>
              <CrossMarkIcon />
            </button>

            <div
              className={`${styles.content} ${isScroll ? styles.Scroll : ""}`}
            >
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
