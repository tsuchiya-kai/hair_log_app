// import Link from "next/link";
import { SearchAnimationIcon } from "components/atoms/icon/index";
import { AppInput } from "components/atoms/index";
import { useState, useEffect } from "react";
import axios from "lib/axiosIntercepted";
import styles from "styles/pages/top-page.module.scss";

export default function TopPage() {
  const [inputState, setInputState] = useState("");

  /**
   * テストです
   */
  const [gitHubData, setGitHubData] = useState<any>({});
  useEffect(() => {
    if (!inputState) return;
    const timeOutId = setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${inputState}`
        );
        const { data } = res;
        if (data.message === "Not Found") {
          console.log("ユーザーが存在しませんでした");
          setGitHubData({
            name: "ユーザーが存在しません！",
            avatar_url:
              "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
          });
          return;
        }
        setGitHubData(data);
      } catch (e) {
        console.log("gitHubアカウントの取得に失敗しました", { e });
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [inputState]);

  return (
    <div className={styles.topPage}>
      <h1 className={styles.title}>カタログを検索！</h1>
      <SearchAnimationIcon className={styles.icon} />

      <AppInput
        className={styles.search}
        placeholder="ヘアカタログを検索"
        state={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />

      <h2>検索結果：</h2>
      <img src={gitHubData?.avatar_url} alt="" />
      {Object.values(gitHubData).map((data, i) => (
        <p key={i}>{data}</p>
      ))}
    </div>
  );
}
