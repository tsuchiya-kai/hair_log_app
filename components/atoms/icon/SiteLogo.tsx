import styles from "styles/components/atoms/site-icon.module.scss";

export default function SiteLogo(props) {
  return (
    <img
      className={`${styles.siteIcon} ${props.className}`}
      src="images/sample_logo.png"
    />
  );
}
