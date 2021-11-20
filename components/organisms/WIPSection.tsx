import styles from "styles/components/organisms/work-in-progress-section.module.scss";

type Props = {
  title: string;
  description?: string;
};
export default function WIPSection({ title, description }: Props) {
  return (
    <>
      <section className={styles.workInProgressSection}>
        <div className={styles.inner}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>こちらのページは現在、製作中です🙇‍♂️</p>
          {description ? (
            <div className={styles.detailcontainer}>
              <h2 className={styles.subtitle}>詳細：</h2>
              <p className={styles.description}>{description}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}
