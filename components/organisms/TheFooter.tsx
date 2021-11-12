import styles from "styles/components/organisms/the-header.module.scss";

export default function TheFooter(props) {
  return (
    <header {...props} className={styles.theHeader}>
      仮のヘッダーです！
    </header>
  );
}
