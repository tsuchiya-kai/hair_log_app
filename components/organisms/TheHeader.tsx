import { SiteLogo } from "components/atoms/icon/index";
import { TheMenu } from "components/organisms/index";
import styles from "styles/components/organisms/the-header.module.scss";

type Props = {
  className?: string;
};

export default function TheHeader(props: Props) {
  return (
    <>
      <header className={`${styles.theHeader} ${props.className}`}>
        <div className={styles.wrap}>
          <SiteLogo className={styles.logo} />
          <TheMenu className={styles.menu} />
        </div>
      </header>
    </>
  );
}
