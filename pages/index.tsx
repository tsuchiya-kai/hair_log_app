// import Link from "next/link";
import { useState, useRef, useEffect, useContext } from "react";
import { SearchAnimationIcon, LoaderDom } from "components/atoms/icon/index";
import { SearchInput, AppButton } from "components/atoms/index";
import { TopPageModal } from "components/organisms/index";
import axios from "lib/axiosIntercepted";
import { AxiosResponse } from "axios";
import useIntersection from "hooks/useIntersection";
import styles from "styles/pages/top-page.module.scss";
import { footerContext } from "components/layout";

export default function TopPage() {
  const [inputState, setInputState] = useState("");
  const [modalState, setModalState] = useState(false);
  const switchModal = () => setModalState((prev) => !prev);

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

  // 無限スクロールの発火
  useEffect(() => {
    if (intersecting && !isLastPage) {
      // 入力があれば、検索結果をfetchする
      if (inputState) {
        const fetchRecent = async () => {
          const endpoint = `/api/catalog/search?page=${page}?word=${inputState}`;
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

  /**
   * 投稿取得系 検索周り
   */
  const SearchFor = async () => {
    setSearchResult([]);

    const endpoint = `/api/catalog/search?word=${inputState}`;

    const res: AxiosResponse<CatalogDataResponse> =
      await axios.get<CatalogDataResponse>(endpoint);

    const { data } = res;
    setSearchResult([...data.data]);

    setPage(2); // NOTE: 今回が1なので、次回用にインクリメント済みの2を固定で指定する
    const { total_page } = data;
    setLastPage(page === total_page);
  };

  return (
    <>
      <div className={styles.topPage}>
        <SearchAnimationIcon className={styles.icon} />
        <h1 className={styles.title}>カタログを検索！</h1>
        <div className={styles.sticky}>
          <div className={styles.search}>
            <SearchInput
              placeholder="ヘアカタログを検索"
              state={inputState}
              onChange={(e) => setInputState(e.target.value)}
            />
            <AppButton
              onClick={SearchFor}
              className={styles.button}
              radius="0 30px 30px 0"
              disabled={!inputState}
            >
              検索
            </AppButton>
          </div>
        </div>
        <h2 className={styles.subtitle}>
          {inputState ? "検索結果" : "最近の投稿"}
        </h2>
        <section className={styles.result}>
          {(() => {
            if (inputState) {
              return searchResult.length ? (
                searchResult.map((post, i) => {
                  return (
                    <div
                      className={styles.content}
                      key={i}
                      onClick={switchModal}
                    >
                      <img
                        className={styles.image}
                        src={post.url}
                        alt="検索結果画像"
                      />
                    </div>
                  );
                })
              ) : (
                <div className={styles.loader}>
                  <LoaderDom className={styles.resultloader} />
                </div>
              );
            } else {
              return recent.length ? (
                recent.map((post, i) => {
                  return (
                    <div
                      className={styles.content}
                      key={i}
                      onClick={switchModal}
                    >
                      <img
                        className={styles.image}
                        src={post.url}
                        alt="検索結果画像"
                      />
                    </div>
                  );
                })
              ) : (
                <div className={styles.loader}>
                  <LoaderDom className={styles.resultloader} />
                </div>
              );
            }
          })()}
        </section>

        <div
          ref={loaderRef}
          className={`${styles.loaderwrap} ${
            isLastPage || !recent.length ? "_invisible" : ""
          }`}
        >
          <LoaderDom className={`${styles.infinityloader}`} />
        </div>
      </div>
      <TopPageModal isShow={modalState} switchFunc={switchModal} />
    </>
  );
}
