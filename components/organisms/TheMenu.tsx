import { useState } from "react";
import { HamburgerMenuIcon } from "components/atoms/icon/index";
import { MenuForPc, MenuForSp } from "components/molecules/index";
import toggleVisible from "utils/toggleVisible";
import { useViewPort } from "hooks/useViewPort";
import styles from "styles/components/organisms/the-menu.module.scss";

export default function TheMenu(props) {
  const [menuToggleState, setMenuToggleState] = useState<boolean>(false);

  const toggleVisibleFlag = (e: Event) =>
    setMenuToggleState(e.type === "mouseover");

  const { windowWidth } = useViewPort();
  const tabPortBreakPoint = 768;
  const isPcSize = windowWidth > tabPortBreakPoint;
  return (
    <div className={`${styles.theMenu} ${props.className}`}>
      <HamburgerMenuIcon
        onMouseOver={toggleVisibleFlag}
        onMouseOut={toggleVisibleFlag}
      />

      {isPcSize ? (
        <MenuForPc
          className={`${styles.pc} ${toggleVisible(menuToggleState)}`}
          onMouseOver={toggleVisibleFlag}
          onMouseOut={toggleVisibleFlag}
        />
      ) : (
        <MenuForSp />
      )}
    </div>
  );
}
