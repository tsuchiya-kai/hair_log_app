import Link from "next/link";
import Urls from "lib/urls";
import styles from "styles/components/atoms/site-icon.module.scss";

type Props = {
  className?: string;
};

export default function SiteLogo(props: Props) {
  const { topPageUrl } = Urls;

  return (
    <div className={props.className ?? ""}>
      <Link href={topPageUrl}>
        <a className="_height100">
          <img
            className={`${styles.siteIcon}`}
            src="/images/sample_logo.png"
            alt="サイトロゴ"
          />
        </a>
      </Link>
    </div>
  );
}
