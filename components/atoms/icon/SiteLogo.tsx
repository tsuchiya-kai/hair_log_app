import styles from "styles/components/atoms/site-icon.module.scss";

export default function SiteLogo(props) {
  return (
    <img {...props} className={styles.siteIcon} src="images/sample_logo.png" />
  );
}
