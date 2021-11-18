import Head from "next/head";
import useViewPort from "hooks/useViewPort";
import styles from "styles/pages/about-page.module.scss";

export default function About() {
  const { windowWidth } = useViewPort();
  const tabPortBreakPoint = 768;
  const isPcSize = windowWidth ? windowWidth > tabPortBreakPoint : false;
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
            なりたい
            {isPcSize ? "" : <br />}
            自分を
            <br />
            より、
            {isPcSize ? "" : <br />}
            見つけやすく。
          </h2>
          <img
            className={styles.image}
            src="/images/about_mv.png"
            alt="メインビジュアル"
          />
        </section>

        <section className={styles.description}>
          <h1 className={styles.title}>HairLogとは</h1>
          <p className={styles.text}>テキスト1テキスト1テキスト1</p>
          <p className={styles.text}>
            テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2
          </p>
          <p className={styles.text}>
            テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3
            <br />
            テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3
          </p>
        </section>

        <section className={styles.forte}>
          <div className={styles.grid}>
            <div className={styles.left}>
              {/* TODO: そのうち様々な単位で検索できるようにした方が良い */}
              <h2 className={styles.title}>美容師単位で検索</h2>
            </div>
            <div className={styles.right}>right</div>
          </div>

          <div className={styles.grid}>
            <div className={styles.left}>left</div>
            <div className={styles.right}>
              <h2 className={styles.title}>カテゴライズ</h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
