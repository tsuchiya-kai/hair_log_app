import { SiteLogo } from "components/atoms/icon/index";
import { TheMenu } from "components/organisms/index";
import styles from "styles/components/organisms/the-header.module.scss";

export default function TheHeader(props) {
  return (
    <>
      <header className={`${styles.theHeader} ${props.className}`}>
        <SiteLogo className={styles.logo} />
        <TheMenu className={styles.menu} />
      </header>
    </>
  );
}
