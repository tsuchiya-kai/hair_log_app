import styles from "styles/components/organisms/the-footer.module.scss";

export default function TheFooter(props) {
  return (
    <header className={`${styles.theFooter} ${props.className}`}>
      <div className={styles.inner}>仮のフッターです！</div>
    </header>
  );
}
