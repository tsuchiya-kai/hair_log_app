import styles from "styles/components/atoms/site-icon.module.scss";

type Props = {
  className?: string;
};

export default function SiteLogo(props: Props) {
  return (
    <img
      className={`${styles.siteIcon} ${props.className ?? ""}`}
      src="/images/sample_logo.png"
    />
  );
}
