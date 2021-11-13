import styles from "styles/components/molecules/the-menu-for-sp.module.scss";

export default function TheMenuForSp(props) {
  return (
    <section {...props} className={`${styles.theMenuForSp} ${props.className}`}>
      <p>SPメニューの中身は</p>
      <p>遷移先が決まったら実装します！🙇‍♂️</p>
    </section>
  );
}
