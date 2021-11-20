// import Link from "next/link";
import Urls from "lib/urls";
import styles from "styles/components/atoms/site-icon.module.scss";

type Props = {
  className?: string;
};

export default function SiteLogo(props: Props) {
  const { topPageUrl } = Urls;

  return (
    // TODO: Linkを使って遷移すると、layoutなどが再描画されないためハンバーガーの状態が維持される
    // そのため、遷移後も開きっぱなしになってしまうが
    // TheMenuコンポーネントと等コンポーネントのstateを共有するには大幅な修正が必要なため
    // 一旦は優先度を低く捉え、通常のaタグを用いた動的な遷移でページ全体を際描画することで対応する。
    // 後ほど改修する。
    <div className={props.className ?? ""}>
      <a href={topPageUrl}>
        <a className="_height100">
          <img
            className={`${styles.siteIcon}`}
            src="/images/sample_logo.png"
            alt="サイトロゴ"
          />
        </a>
      </a>
    </div>
  );
}
