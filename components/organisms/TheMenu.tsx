import { useState } from "react";
import { HamburgerMenuIcon } from "components/atoms/icon/index";
import { MenuForPc } from "components/molecules/index";
import toggleVisible from "utils/toggleVisible";
import styles from "styles/components/organisms/the-menu.module.scss";

export default function TheMenu(props) {
  const [menuToggleState, setMenuToggleState] = useState<boolean>(false);
  return (
    <div className={`${styles.theMenu} ${props.className}`}>
      <HamburgerMenuIcon
        onMouseOver={() => setMenuToggleState(true)}
        onMouseOut={() => setMenuToggleState(false)}
      />

      <MenuForPc
        className={`${styles.pc} ${toggleVisible(menuToggleState)}`}
        onMouseOver={() => setMenuToggleState(true)}
        onMouseOut={() => setMenuToggleState(false)}
      />
    </div>
  );
}
