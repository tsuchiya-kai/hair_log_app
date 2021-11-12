import { SiteLogo, HamburgerMenuIcon } from "components/atoms/icon/index";
import styles from "styles/components/organisms/the-header.module.scss";

console.log({ styles });

export default function TheHeader(props) {
  return (
    <header className={`${styles.theHeader} ${props.className}`}>
      <SiteLogo className={styles.logo} />
      <HamburgerMenuIcon className={styles.menu} />
    </header>
  );
}
