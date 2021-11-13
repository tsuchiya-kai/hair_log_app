// import Link from "next/link";
import { SearchIcon, SearchAnimationIcon } from "components/atoms/icon/index";
import styles from "styles/pages/top-page.module.scss";

export default function TopPage() {
  return (
    <div className={styles.topPage}>
      <h1 className={styles.title}>カタログを検索！</h1>
      <SearchIcon />
      <SearchAnimationIcon />

      {/* <div>トップです</div>
      <h1>h1テスト</h1>
      <h2>h2テスト</h2>
      <Link href="/">テスト</Link>
      <li>
        {[...Array(3)].map((_, index) => {
          const temporaryId = index + 1;
          return (
            <Link href={`/beautician/${temporaryId}`} key={index}>
              <a>美容師{temporaryId}</a>
            </Link>
          );
        })}
      </li> */}
    </div>
  );
}
