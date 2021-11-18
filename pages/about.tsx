import { useRef, useEffect } from "react";
import Head from "next/head";
import useViewPort from "hooks/useViewPort";
import {
  SearchAnimationIcon,
  CategoryAnimationIcon,
} from "components/atoms/icon/index";
import { gsap, Power4 } from "gsap";
// NOTE: https://greensock.com/forums/topic/24661-nextjs-and-gsap/
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "styles/pages/about-page.module.scss";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { windowWidth } = useViewPort();
  const tabPortBreakPoint = 768;
  // TODO: window objectが取得できるまでの一瞬チラつく
  const isPcSize = windowWidth ? windowWidth > tabPortBreakPoint : false;

  /**
   * アニメーション周り
   */
  const mvRef = useRef<HTMLElement>(null);
  const descriptionRef1 = useRef<HTMLElement>(null);
  const descriptionRef2 = useRef<HTMLElement>(null);
  const searchTitle = useRef<HTMLHeadingElement>(null);
  const searchText = useRef<HTMLHeadingElement>(null);
  const searchIcon = useRef<HTMLDivElement>(null);
  const categoryTitle = useRef<HTMLHeadingElement>(null);
  const categoryText = useRef<HTMLHeadingElement>(null);
  const categoryIcon = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (process.browser) {
      gsap.set([descriptionRef1.current, descriptionRef2.current], {
        opacity: 0,
        y: 150,
      }); //初期状態としてopacity: 0;とvisibility: hidden;が指定される

      // description周り
      gsap
        .timeline({
          scrollTrigger: {
            trigger: mvRef.current,
            start: "bottom center",
          },
        })
        .to(descriptionRef1.current, 0.8, {
          opacity: 1,
          y: 0,
          ease: Power4.easeOut,
        })
        .to(
          descriptionRef2.current,
          0.8,
          {
            opacity: 1,
            y: 0,
            ease: Power4.easeOut,
          },
          "-=0.2"
        );

      // forte周り
      gsap.set(
        [
          searchTitle.current,
          searchText.current,
          searchIcon.current,
          categoryTitle.current,
          categoryText.current,
          categoryIcon.current,
        ],
        {
          autoAlpha: 0,
        }
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: descriptionRef2.current,
            start: "top center",
          },
        })
        .to(searchTitle.current, 0.5, {
          autoAlpha: 1,
          ease: Power4.easeOut,
        })
        .to(
          searchText.current,
          0.5,
          {
            autoAlpha: 1,
            ease: Power4.easeOut,
          },
          "-=0.4"
        )
        .to(
          searchIcon.current,
          0.5,
          {
            autoAlpha: 1,
            ease: Power4.easeOut,
          },
          "-=0.3"
        )
        .to(categoryTitle.current, 0.5, {
          autoAlpha: 1,
          ease: Power4.easeOut,
        })
        .to(
          categoryText.current,
          0.5,
          {
            autoAlpha: 1,
            ease: Power4.easeOut,
          },
          "-=0.4"
        )
        .to(
          categoryIcon.current,
          0.5,
          {
            autoAlpha: 1,
            ease: Power4.easeOut,
          },
          "-=0.3"
        );

      // gsap.to(descriptionRef.current, {
      //   autoAlpha: 1, //opacity: 1; visibility：visible;が付与される
      //   scrollTrigger: {
      //     trigger: mvRef.current,
      //     start: "bottom center",
      //   },
      // });
    }
  });
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
        <section className={styles.mv} ref={mvRef}>
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

        <section className={styles.description} ref={descriptionRef1}>
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

        <section className={styles.subdescription} ref={descriptionRef2}>
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
              <h2 className={styles.title} ref={searchTitle}>
                美容師単位で検索
              </h2>
              <p className={styles.text} ref={searchText}>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
              </p>
            </div>
            <div className={styles.right}>
              <SearchAnimationIcon className={styles.icon} ref={searchIcon} />
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.left}>
              <CategoryAnimationIcon
                className={styles.icon}
                ref={categoryIcon}
              />
            </div>
            <div className={styles.right}>
              <h2 className={styles.title} ref={categoryTitle}>
                カテゴライズ
              </h2>
              <p className={styles.text} ref={categoryText}>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
