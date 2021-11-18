import Head from "next/head";
import styles from "styles/pages/about-page.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title>HairLogとは</title>
        <meta property="og:title" content="ヘアログとは" />
        <meta
          property="og:description"
          content="美容師向けカタログ作成アプリ「ヘアログ」とは"
        />
        <meta
          name="description"
          content="美容師向けカタログ作成アプリ「ヘアログ」とは"
        />
      </Head>
      <div className={styles.aboutPage}>
        <section className={styles.mv}>
          <div className={styles.mask} />
          <h2 className={styles.title}>
            なりたい自分を
            <br />
            より、見つけやすく。
          </h2>
          <img
            className={styles.image}
            src="/images/about_mv.png"
            alt="メインビジュアル"
          />
        </section>

        <section className={styles.description}>
          <h1 className={styles.title}>HairLogとは</h1>
        </section>

        <section className={styles.forte}>
          <div className={styles.flex}>
            <div className={styles.left}>
              <h2>美容師を検索</h2>
            </div>
            <div className={styles.right}></div>
          </div>

          <div className={styles.flex}>
            <div className={styles.left}>
              <h2>カテゴライズ</h2>
            </div>
            <div className={styles.right}></div>
          </div>
        </section>
      </div>
    </>
  );
}
