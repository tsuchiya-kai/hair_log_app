// import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { SearchAnimationIcon } from "components/atoms/icon/index";
import { AppInput } from "components/atoms/index";
import { TopPageModal } from "components/organisms/index";
import axios from "lib/axiosIntercepted";
// import axios from "axios";
import useIntersection from "hooks/useIntersection";
import styles from "styles/pages/top-page.module.scss";

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

  type RecentObject = {
    url: string;
  };
  const [recent, setRecent] = useState<RecentObject[]>();

  // 初回fetch
  useEffect(() => {
    const fetchRecent = async () => {
      const endpoint = "/api/posts/recent";
      // const endpoint = ""/最近の投稿のendpoint" + `${page ? `?page=${page}` : ""}`;
      const res = await axios.get<RecentObject[]>(endpoint);
      setRecent(res.data);
    };
    void fetchRecent();
    setPage((prev) => (prev ? prev + 1 : 1));
  }, []);

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
            <div>ローダー</div>
          )}
        </section>

        <div ref={loaderRef} className={recent ? "" : "_invisible"}>
          ローダー！！！！！！！
        </div>
      </div>
      <TopPageModal isShow={modalState} switchFunc={switchModal} />
    </>
  );
}
