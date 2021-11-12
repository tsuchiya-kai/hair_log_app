import { useState } from "react";
import { SiteLogo, HamburgerMenuIcon } from "components/atoms/icon/index";
import { TheMenuForPc } from "components/molecules/index";
import toggleVisible from "utils/toggleVisible";
import styles from "styles/components/organisms/the-header.module.scss";

export default function TheHeader(props) {
  const [menuToggleState, setMenuToggleState] = useState<boolean>(false);

  return (
    <>
      <header className={`${styles.theHeader} ${props.className}`}>
        <SiteLogo className={styles.logo} />
        <HamburgerMenuIcon
          className={styles.menu}
          onMouseOver={() => setMenuToggleState(true)}
          onMouseOut={() => setMenuToggleState(false)}
        />

        <TheMenuForPc
          className={toggleVisible(menuToggleState)}
          onMouseOver={() => setMenuToggleState(true)}
          onMouseOut={() => setMenuToggleState(false)}
        />
      </header>
    </>
  );
}
