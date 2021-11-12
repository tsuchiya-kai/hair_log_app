import dayjs from "dayjs";
import styles from "styles/components/organisms/the-footer.module.scss";

export default function TheFooter(props) {
  const myBirthYear = 1998;
  const age = dayjs().year() - myBirthYear;
  return (
    <header className={`${styles.theFooter} ${props.className}`}>
      <div className={styles.inner}>
        <article className={styles.profile}>
          <h2 className={styles.title}>Developer</h2>
          <img
            className={styles.image}
            src="/images/profile.jpg"
            alt="プロフィール画像"
          />
          <p className={styles.text}>Name: Tsuchiya Kaita</p>
          <p className={styles.text}>Age:{age}</p>
          <p className={styles.text}>Address: Shibuya</p>
          <p className={styles.text}>Profession:Frontend Engineer</p>
        </article>
      </div>
    </header>
  );
}
