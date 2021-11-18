import { useContext, useEffect, useRef } from "react";
import { useBodyScrollLock } from "hooks/useBodyScrollLock";
import { maskContext } from "components/layout";
import urls from "lib/urls";
import Link from "next/link";
import styles from "styles/components/molecules/the-menu-for-sp.module.scss";

type Props = {
  className?: string;
  isShow: boolean;
  isShowSetter: (flag: boolean) => void;
};

export default function TheMenuForSp(props: Props) {
  const { className, isShow, isShowSetter, ...rest } = props;
  const classNames = `${styles.theMenuForSp} ${className ?? ""} ${
    isShow ? styles.Show : ""
  }`;

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
      <section {...rest} className={classNames} ref={target}>
        <Link href={urls.topPageUrl}>
          <a className={styles.link} onClick={() => isShowSetter(false)}>
            トップページ
          </a>
        </Link>
        <Link href={urls.postPageUrl}>
          <a className={styles.link} onClick={() => isShowSetter(false)}>
            投稿する
          </a>
        </Link>
        <Link href={urls.aboutPageUrl}>
          <a className={styles.link} onClick={() => isShowSetter(false)}>
            ヘアログとは
          </a>
        </Link>
      </section>
    </>
  );
}
