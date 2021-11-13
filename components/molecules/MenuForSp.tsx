import styles from "styles/components/molecules/the-menu-for-sp.module.scss";

type Props = {
  className?: string;
  isShow: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function TheMenuForSp(props: Props) {
  const { className, isShow, ...rest } = props;
  const classNames = `${styles.theMenuForSp} ${className} ${
    isShow ? styles.Show : ""
  }`;

  return (
    <section {...rest} className={classNames}>
      <p>SPメニューの中身は</p>
      <p>遷移先が決まったら実装します！🙇‍♂️</p>
    </section>
  );
}
