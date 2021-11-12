import styles from "styles/components/organisms/the-header.module.scss";
import { SiteLogo } from "components/atoms/icon/index";

export default function TheHeader() {
  return (
    <header className={styles.theHeader}>
      <SiteLogo />
    </header>
  );
}
