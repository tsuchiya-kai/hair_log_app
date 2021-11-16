// import Link from "next/link";
import { useState, useRef, useEffect, useContext } from "react";
import { SearchAnimationIcon, LoaderDom } from "components/atoms/icon/index";
import { AppInput } from "components/atoms/index";
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
   * 投稿取得系
   */
  // 無限スクロール周り
  const loaderRef = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;
  const { intersecting } = useIntersection(loaderRef);
  const [page, setPage] = useState<number>();
  const [isLastPage, setLastPage] = useState<boolean>(false);
  const [recent, setRecent] = useState<RecentData[]>([]);

  // footerの出し分け、無限スクロールが最後のページに達した時のみ表示
  const { setFooterIsShow } = useContext(footerContext);
  // 参考:https://qiita.com/FumioNonaka/items/3fe39911e3f2479128e8
  useEffect(() => setFooterIsShow(isLastPage), [setFooterIsShow, isLastPage]);

  useEffect(() => {
    if (intersecting && !isLastPage) {
      const fetchRecent = async () => {
        const endpoint = "/api/posts/recent" + `${page ? `?page=${page}` : ""}`;
        const res: AxiosResponse<RecentResponseData> =
          await axios.get<RecentResponseData>(endpoint);
        const { data } = res;

        setRecent((prev) => {
          if (prev) return [...prev, ...data.data];
          return [...data.data];
        });

        setPage((prev) => (prev ? prev + 1 : 1));
        const { total_page } = data;
        setLastPage(page === total_page);
      };

      void fetchRecent();
    }
  }, [intersecting]); // eslint-disable-line react-hooks/exhaustive-deps
  //参考:http://watanabeyu.blogspot.com/2019/09/eslintreact-hooksexhaustive-deps.html

  return (
    <>
      <div className={styles.topPage}>
        <SearchAnimationIcon className={styles.icon} />
        <h1 className={styles.title}>カタログを検索！</h1>
        <div className={styles.sticky}>
          <AppInput
            placeholder="ヘアカタログを検索"
            state={inputState}
            onChange={(e) => setInputState(e.target.value)}
          />
        </div>
        <h2 className={styles.subtitle}>人気の投稿</h2>
        <section className={styles.result}>
          {recent ? (
            recent.map((post, i) => {
              return (
                <div className={styles.content} key={i} onClick={switchModal}>
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
          )}
        </section>

        <div
          ref={loaderRef}
          className={`${styles.loaderwrap} ${isLastPage ? "_invisible" : ""}`}
        >
          <LoaderDom className={`${styles.infinityloader}`} />
        </div>
      </div>
      <TopPageModal isShow={modalState} switchFunc={switchModal} />
    </>
  );
}
