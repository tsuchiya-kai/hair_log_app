import { SiteLogo, HamburgerMenuIcon } from "components/atoms/icon/index";
import styles from "styles/components/organisms/the-header.module.scss";

export default function TheHeader(props) {
  return (
    <header {...props} className={styles.theHeader}>
      <SiteLogo />
      <HamburgerMenuIcon className={styles.theHeader} />
    </header>
  );
}
