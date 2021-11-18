import { useState, useRef, useEffect, useContext } from "react";
import axios from "lib/axiosIntercepted";
import useIntersection from "hooks/useIntersection";
import { footerContext } from "components/layout";
import { LoaderDom } from "components/atoms/icon/index";
import { SearchInput, AppButton } from "components/atoms/index";
import { TopPageModal } from "components/organisms/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Swiper as RealSwiper } from "swiper";
RealSwiper.use([Autoplay]);
import type { AxiosResponse } from "axios";
import styles from "styles/pages/top-page.module.scss";
import searchSectionStyle from "styles/components/organisms/search-container.module.scss";
import topPageContentsStyles from "styles/components/organisms/top-page-contents.module.scss";
import "swiper/css/bundle";

export default function TopPage() {
  const [inputState, setInputState] = useState("");
  const [modalState, setModalState] = useState(false);
  const switchModal = () => setModalState((prev) => !prev);

  /**
   * 投稿取得系 検索周り
   */
  const [searchWord, setSearchWord] = useState(inputState);

  const SearchFor = async () => {
    setTarget(targetType.search);
    setSearchWord(inputState);
    setSearchResult([]); // 初期化
    const endpoint = `/api/catalog/search?word=${searchWord}`;

    const res: AxiosResponse<CatalogDataResponse> =
      await axios.get<CatalogDataResponse>(endpoint);

    const { data } = res;
    setSearchResult([...data.data]);

    setPage(2); // NOTE: 今回が1なので、次回用にインクリメント済みの2を固定で指定する
    const { total_page } = data;
    setLastPage(page === total_page);
  };

  /**
   * 投稿取得系 無限スクロール周り
   */
  const loaderRef = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;
  const { intersecting } = useIntersection(loaderRef);
  const [page, setPage] = useState<number>(1);
  const [isLastPage, setLastPage] = useState<boolean>(false);
  const [recent, setRecent] = useState<CatalogData[]>([]); // 最近の投稿
  const [searchResult, setSearchResult] = useState<CatalogData[]>([]); //検索結果

  const targetType = {
    recent: "recent",
    search: "search",
  } as const;

  const [target, setTarget] = useState<keyof typeof targetType>(
    targetType.recent
  );

  const isFirstFetch =
    (target === targetType.recent && !recent.length) ||
    (target === targetType.search && !searchResult.length);

  // 無限スクロールの発火
  useEffect(() => {
    if (intersecting && !isLastPage) {
      // 入力があれば、検索結果をfetchする
      if (inputState) {
        setTarget(targetType.search);
        const fetchRecent = async () => {
          const endpoint = `/api/catalog/search?page=${page}?word=${searchWord}`;
          const res: AxiosResponse<CatalogDataResponse> =
            await axios.get<CatalogDataResponse>(endpoint);
          const { data } = res;

          setSearchResult((prev) => {
            if (prev) return [...prev, ...data.data];
            return [...data.data];
          });

          setPage((prev) => prev + 1);
          const { total_page } = data;
          setLastPage(page === total_page);
        };

        void fetchRecent();
      } else {
        //入力がなければ最新の投稿をfetchする
        setTarget(targetType.recent);
        const fetchRecent = async () => {
          const endpoint = `/api/catalog/recent?page=${page}`;

          const res: AxiosResponse<CatalogDataResponse> =
            await axios.get<CatalogDataResponse>(endpoint);
          const { data } = res;

          setRecent((prev) => {
            if (prev) return [...prev, ...data.data];
            return [...data.data];
          });

          setPage((prev) => prev + 1);
          const { total_page } = data;
          setLastPage(page === total_page);
        };

        void fetchRecent();
      }
    }
  }, [intersecting]); // eslint-disable-line react-hooks/exhaustive-deps
  //参考:http://watanabeyu.blogspot.com/2019/09/eslintreact-hooksexhaustive-deps.html

  // footerの出し分け、無限スクロールが最後のページに達した時のみ表示
  const { setFooterIsShow } = useContext(footerContext);
  // 参考:https://qiita.com/FumioNonaka/items/3fe39911e3f2479128e8
  useEffect(() => setFooterIsShow(isLastPage), [setFooterIsShow, isLastPage]);

  // スライダー周り
  const swiperParams = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  };

  // NOTE: ライブラリでdomが生成される都合でCSS設計に則ってスタイルを適用することができないためここだけインライン
  const SwiperSlideStyle = {
    height: "100%",
  };

  const SwiperSlideImageStyle = {
    objectFit: "cover" as const,
    width: "100%",
    height: "100%",
  };

  //モーダル周り
  const [modalContents, setModalContent] = useState<CatalogData>();
  const toBeSelected = (arg: {
    index: number;
    target: keyof typeof targetType;
  }) => {
    const { index, target } = arg;
    if (targetType[target] === targetType.recent)
      setModalContent(recent[index]);
    if (targetType[target] === targetType.search)
      setModalContent(searchResult[index]);
    switchModal();
  };

  return (
    <>
      <div className={styles.topPage}>
        <div className={styles.mv}>
          <div className={styles.mask} />
          <Swiper
            {...swiperParams}
            className={styles.slider}
            style={{ height: "100%" }}
          >
            <SwiperSlide className={styles.slide} style={SwiperSlideStyle}>
              <img
                style={SwiperSlideImageStyle}
                className={styles.image}
                src="/images/slider/slider_6.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide} style={SwiperSlideStyle}>
              <img
                style={SwiperSlideImageStyle}
                className={styles.image}
                src="/images/slider/slider_8.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide} style={SwiperSlideStyle}>
              <img
                style={SwiperSlideImageStyle}
                className={styles.image}
                src="/images/slider/slider_3.jpeg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <section
            className={`${styles.search} ${searchSectionStyle.searchContainer}`}
          >
            <h1 className={searchSectionStyle.title}>カタログを検索！</h1>

            <div className={searchSectionStyle.search}>
              <SearchInput
                placeholder="ヘアカタログを検索"
                state={inputState}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputState(e.target.value)
                }
              />
              <AppButton
                onClick={SearchFor}
                className={searchSectionStyle.button}
                radius="0 30px 30px 0"
                disabled={!inputState}
              >
                検索
              </AppButton>
            </div>
          </section>
        </div>

        <section className={topPageContentsStyles.topPageContents}>
          <h2 className={topPageContentsStyles.subtitle}>
            {searchWord ? "検索結果" : "最近の投稿"}
          </h2>
          <section className={topPageContentsStyles.result}>
            {(() => {
              if (searchWord) {
                return searchResult.length ? (
                  searchResult.map((post, i) => {
                    return (
                      <div
                        className={topPageContentsStyles.content}
                        key={i}
                        onClick={() =>
                          toBeSelected({ index: i, target: targetType.search })
                        }
                      >
                        <img
                          className={topPageContentsStyles.image}
                          src={post.thumbnail}
                          alt="検索結果画像"
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className={topPageContentsStyles.loader}>
                    <LoaderDom className={topPageContentsStyles.resultloader} />
                  </div>
                );
              } else {
                return recent.length ? (
                  recent.map((post, i) => {
                    return (
                      <div
                        className={topPageContentsStyles.content}
                        key={i}
                        onClick={() =>
                          toBeSelected({ index: i, target: targetType.recent })
                        }
                      >
                        <img
                          className={topPageContentsStyles.image}
                          src={post.thumbnail}
                          alt="検索結果画像"
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className={topPageContentsStyles.loader}>
                    <LoaderDom className={topPageContentsStyles.resultloader} />
                  </div>
                );
              }
            })()}
          </section>

          <div
            ref={loaderRef}
            className={`${topPageContentsStyles.loaderwrap} ${
              isLastPage || isFirstFetch ? "_invisible" : ""
            }`}
          >
            <LoaderDom className={`${topPageContentsStyles.infinityloader}`} />
          </div>
        </section>
      </div>
      <TopPageModal
        data={modalContents}
        isShow={modalState}
        switchFunc={switchModal}
      />
    </>
  );
}
