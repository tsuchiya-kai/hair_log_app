// import Link from "next/link";
// import Image from "next/image";
import { SearchAnimationIcon } from "components/atoms/icon/index";
import { AppInput } from "components/atoms/index";
import { TopPageModal } from "components/organisms/index";
import { useState } from "react";
// import axios from "lib/axiosIntercepted";
import styles from "styles/pages/top-page.module.scss";

export default function TopPage() {
  const [inputState, setInputState] = useState("");
  const [modalState, setModalState] = useState(false);
  const switchModal = () => setModalState((prev) => !prev);

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
          {[...(Array(20) as undefined[])].map((_, i) => {
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
        </section>
      </div>
      <TopPageModal isShow={modalState} switchFunc={switchModal} />
    </>
  );
}
