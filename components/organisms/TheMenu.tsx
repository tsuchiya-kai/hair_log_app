import { useState } from "react";
import { HamburgerMenuIcon } from "components/atoms/icon/index";
import { MenuForPc } from "components/molecules/index";
import toggleVisible from "utils/toggleVisible";

export default function TheMenu(props) {
  const [menuToggleState, setMenuToggleState] = useState<boolean>(false);
  return (
    <div className={`menu-container ${props.className}`}>
      <HamburgerMenuIcon
        onMouseOver={() => setMenuToggleState(true)}
        onMouseOut={() => setMenuToggleState(false)}
      />

      <MenuForPc
        className={toggleVisible(menuToggleState)}
        onMouseOver={() => setMenuToggleState(true)}
        onMouseOut={() => setMenuToggleState(false)}
      />
    </div>
  );
}
