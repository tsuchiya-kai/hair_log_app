import styles from "styles/components/molecules/the-menu-for-pc.module.scss";

type Props = {
  className?: string;
  isShow: boolean;
  onMouseOver: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseOut: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function TheMenuForPc(props: Props) {
  // NOTE: https://reactjs.org/warnings/unknown-prop.html
  const { className, isShow, ...rest } = props;
  const classNames = `${styles.theMenuForPc} ${className} ${
    isShow ? styles.Show : ""
  }`;

  return (
    <section {...rest} className={classNames}>
      <p>PCメニューの中身は</p>
      <p>遷移先が決まったら実装します🙇‍♂️</p>
    </section>
  );
}
