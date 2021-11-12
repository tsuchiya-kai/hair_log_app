import styles from "styles/components/organisms/the-header.module.scss";

export default function TheFooter(props) {
  return (
    <header className={`${styles.theHeader} ${props.className}`}>
      仮のヘッダーです！
    </header>
  );
}
