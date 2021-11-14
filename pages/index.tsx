// import Link from "next/link";
// import Image from "next/image";
import { SearchAnimationIcon } from "components/atoms/icon/index";
import { AppInput, AppModal } from "components/atoms/index";
import { useState } from "react";
// import axios from "lib/axiosIntercepted";
import styles from "styles/pages/top-page.module.scss";

export default function TopPage() {
  const [inputState, setInputState] = useState("");

  /**
   * テストです
   */
  // const [gitHubData, setGitHubData] = useState<any>({});
  // useEffect(() => {
  //   if (!inputState) return;
  //   const timeOutId = setTimeout(async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://api.github.com/users/${inputState}`
  //       );
  //       const { data } = res;
  //       if (data.message === "Not Found") {
  //         console.log("ユーザーが存在しませんでした");
  //         setGitHubData({
  //           name: "ユーザーが存在しません！",
  //           avatar_url:
  //             "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
  //         });
  //         return;
  //       }
  //       setGitHubData(data);
  //     } catch (e) {
  //       console.log("gitHubアカウントの取得に失敗しました", { e });
  //     }
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeOutId);
  //   };
  // }, [inputState]);

  const [modalState, setModalState] = useState(false);
  const switchModal = () => {
    console.log("発火");
    setModalState((prev) => !prev);
  };

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
          {[...(Array(20) as undefined[])].map((el, i) => {
            return (
              <div className={styles.content} key={i} onClick={switchModal}>
                <img
                  className={styles.image}
                  src={`https://unsplash.it/${i + 1}00/100`}
                  alt="検索結果画像"
                />
              </div>
            );
          })}
          {/* <div className={styles.content}>
          <img
            className={styles.image}
            src="https://placeimg.com/300/200/any"
            alt="検索結果画像"
          />
        </div> */}
        </section>
      </div>
      <AppModal isShow={modalState} switchFunc={switchModal}>
        {"テスト"}
      </AppModal>
    </>
  );
}
