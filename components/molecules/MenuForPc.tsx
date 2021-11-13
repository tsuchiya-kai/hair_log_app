import styles from "styles/components/molecules/the-menu-for-pc.module.scss";

export default function TheMenuForPc(props) {
  return (
    <section {...props} className={`${styles.theMenuForPc} ${props.className}`}>
      <p>PCメニューの中身は</p>
      <p>遷移先が決まったら実装します🙇‍♂️</p>
    </section>
  );
}
