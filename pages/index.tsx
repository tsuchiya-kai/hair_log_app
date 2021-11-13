// import Link from "next/link";
import { SearchAnimationIcon } from "components/atoms/icon/index";
import { AppInput } from "components/atoms/index";
import { useState } from "react";
import styles from "styles/pages/top-page.module.scss";

export default function TopPage() {
  const [inputState, setInputState] = useState("");
  return (
    <div className={styles.topPage}>
      <h1 className={styles.title}>カタログを検索！</h1>
      <SearchAnimationIcon />

      <AppInput
        className={styles.search}
        placeholder="ヘアカタログを検索"
        state={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
    </div>
  );
}
