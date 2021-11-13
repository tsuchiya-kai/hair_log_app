import { useContext, useEffect, useRef } from "react";
import { useBodyScrollLock } from "hooks/useBodyScrollLock";
import { maskContext } from "components/layout";
import styles from "styles/components/molecules/the-menu-for-sp.module.scss";

type Props = {
  className?: string;
  isShow: boolean;
};

export default function TheMenuForSp(props: Props) {
  const { className, isShow, ...rest } = props;
  const classNames = `${styles.theMenuForSp} ${className} ${
    isShow ? styles.Show : ""
  }`;

  const { setMaskIsShow } = useContext(maskContext);

  useEffect(() => {
    setMaskIsShow(isShow);
  }, [isShow]);

  const target = useRef<HTMLDivElement>(null);
  useBodyScrollLock({
    isActive: isShow,
    target: target,
  });

  return (
    <>
      <section {...rest} className={classNames} ref={target}>
        <p>SPメニューの中身は</p>
        <p>遷移先が決まったら実装します！🙇‍♂️</p>
      </section>
    </>
  );
}
