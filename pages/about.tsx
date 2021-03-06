import { useRef, useState, useEffect } from "react";
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
import { GetServerSidePropsContext } from "next";

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      serverDecisionIsPcSize: !req.headers["user-agent"]?.match(
        /iPhone|Android.+Mobile/
      ),
    },
  };
}

type Props = {
  serverDecisionIsPcSize: boolean;
};

export default function About({ serverDecisionIsPcSize }: Props) {
  const [isPcSize, setIsPcSize] = useState<boolean>(serverDecisionIsPcSize);
  const { windowWidth } = useViewPort();
  const tabPortBreakPoint = 768;
  useEffect(() => {
    if (windowWidth) {
      setIsPcSize(windowWidth ? windowWidth > tabPortBreakPoint : false);
    }
  }, [windowWidth]);

  /**
   * アニメーション周り
   */
  const mvRef = useRef<HTMLElement>(null);
  const descriptionRef1 = useRef<HTMLElement>(null);
  const descriptionRef2 = useRef<HTMLElement>(null);
  const searchTitleRef = useRef<HTMLHeadingElement>(null);
  const searchTextRef = useRef<HTMLHeadingElement>(null);
  const searchIconRef = useRef<HTMLDivElement>(null);
  const categoryTitleRef = useRef<HTMLHeadingElement>(null);
  const categoryTextRef = useRef<HTMLHeadingElement>(null);
  const categoryIconRef = useRef<HTMLDivElement>(null);
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
          "-=0.3"
        );

      // forte周り
      gsap.set(
        [
          searchTitleRef.current,
          searchTextRef.current,
          searchIconRef.current,
          categoryTitleRef.current,
          categoryTextRef.current,
          categoryIconRef.current,
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
        .to(searchTitleRef.current, 0.5, {
          autoAlpha: 1,
          ease: Power4.easeOut,
        })
        .to(
          searchTextRef.current,
          0.5,
          {
            autoAlpha: 1,
            ease: Power4.easeOut,
          },
          "-=0.3"
        )
        .to(
          searchIconRef.current,
          0.5,
          {
            autoAlpha: 1,
            ease: Power4.easeOut,
          },
          "-=0.2"
        )
        .to(categoryTitleRef.current, 0.5, {
          autoAlpha: 1,
          ease: Power4.easeOut,
        })
        .to(
          categoryTextRef.current,
          0.5,
          {
            autoAlpha: 1,
            ease: Power4.easeOut,
          },
          "-=0.3"
        )
        .to(
          categoryIconRef.current,
          0.5,
          {
            autoAlpha: 1,
            ease: Power4.easeOut,
          },
          "-=0.2"
        );
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
              <h2 className={styles.title} ref={searchTitleRef}>
                美容師単位で検索
              </h2>
              <p className={styles.text} ref={searchTextRef}>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
              </p>
            </div>
            <div className={styles.right}>
              <SearchAnimationIcon
                className={styles.icon}
                ref={searchIconRef}
              />
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.left}>
              <CategoryAnimationIcon
                className={styles.icon}
                ref={categoryIconRef}
              />
            </div>
            <div className={styles.right}>
              <h2 className={styles.title} ref={categoryTitleRef}>
                カテゴライズ
              </h2>
              <p className={styles.text} ref={categoryTextRef}>
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
