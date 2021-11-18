import urls from "lib/urls";
import Link from "next/link";
import styles from "styles/components/molecules/the-menu-for-pc.module.scss";

type Props = {
  className?: string;
  isShow: boolean;
  isShowSetter: (flag: boolean) => void;
  onMouseOver: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseOut: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function TheMenuForPc(props: Props) {
  // NOTE: https://reactjs.org/warnings/unknown-prop.html
  const { className, isShow, isShowSetter, ...rest } = props;
  const classNames = `${styles.theMenuForPc} ${className ?? ""} ${
    isShow ? styles.Show : ""
  }`;

  return (
    <section {...rest} className={classNames}>
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
  );
}
