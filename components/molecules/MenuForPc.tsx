import styles from "styles/components/molecules/the-menu-for-pc.module.scss";

type PropsVariables = {
  className?: string;
  isShow: boolean;
  onMouseOver: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseOut: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function TheMenuForPc(props: PropsVariables) {
  // NOTE: https://reactjs.org/warnings/unknown-prop.html
  const { className, isShow, ...rest } = props;

  return (
    <section
      {...rest}
      className={`${styles.theMenuForPc} ${
        isShow ? styles.Show : ""
      } ${className}`}
    >
      <p>PCメニューの中身は</p>
      <p>遷移先が決まったら実装します🙇‍♂️</p>
    </section>
  );
}
