import { useState } from "react";
import { HamburgerMenuIcon } from "components/atoms/icon/index";
import { MenuForPc, MenuForSp } from "components/molecules/index";
import { useViewPort } from "hooks/useViewPort";
import styles from "styles/components/organisms/the-menu.module.scss";

export default function TheMenu(props) {
  const [pcMenuToggleState, setPcMenuToggleState] = useState<boolean>(false);

  const toggleVisibleFlagForPc = (e: React.MouseEvent<HTMLElement>) =>
    setPcMenuToggleState(e.type === "mouseover");

  const { windowWidth } = useViewPort();
  const tabPortBreakPoint = 768;
  const isPcSize = windowWidth > tabPortBreakPoint;
  return (
    <div className={`${styles.theMenu} ${props.className}`}>
      <HamburgerMenuIcon
        onMouseOver={toggleVisibleFlagForPc}
        onMouseOut={toggleVisibleFlagForPc}
      />

      {isPcSize ? (
        <MenuForPc
          isShow={pcMenuToggleState}
          className={styles.pc}
          onMouseOver={toggleVisibleFlagForPc}
          onMouseOut={toggleVisibleFlagForPc}
        />
      ) : (
        <MenuForSp />
      )}
    </div>
  );
}
