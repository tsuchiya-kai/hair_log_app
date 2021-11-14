import { ReactNode, useRef, useContext, useEffect } from "react";
import { useBodyScrollLock } from "hooks/useBodyScrollLock";
import { maskContext } from "components/layout";
import styles from "styles/components/atoms/app-modal.module.scss";

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
  const { setMaskIsShow } = useContext(maskContext);

  useEffect(() => {
    setMaskIsShow(isShow);
  }, [isShow, setMaskIsShow]);

  const target = useRef<HTMLDivElement>(null);
  useBodyScrollLock({
    isActive: isShow,
    target: target,
  });

  return (
    <>
      {isShow ? (
        <div ref={target} className={styles.appModal}>
          <button onClick={switchFunc}>閉じる</button>
          <div className={`${styles.content} ${isScroll ? "Scroll" : ""}`}>
            {children}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
