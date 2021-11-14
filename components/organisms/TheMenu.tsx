import { useState } from "react";
import { HamburgerMenuIcon } from "components/atoms/icon/index";
import { MenuForPc, MenuForSp } from "components/molecules/index";
import { useViewPort } from "hooks/useViewPort";
import styles from "styles/components/organisms/the-menu.module.scss";

type Props = {
  className?: string;
};

export default function TheMenu(props: Props) {
  const [pcMenuToggleState, setPcMenuToggleState] = useState<boolean>(false);
  const [spMenuToggleState, setSpMenuToggleState] = useState<boolean>(false);

  const toggleVisibleFlagForPc = (
    e: React.MouseEvent<HTMLElement | SVGElement>
  ) => setPcMenuToggleState(e.type === "mouseover");
  const toggleVisibleFlagForSp = () => setSpMenuToggleState((prev) => !prev);

  const { windowWidth } = useViewPort();
  const tabPortBreakPoint = 768;
  const isPcSize = windowWidth ? windowWidth > tabPortBreakPoint : false;

  return (
    <div className={`${styles.theMenu} ${props.className ?? ""}`}>
      <HamburgerMenuIcon
        onMouseOver={toggleVisibleFlagForPc}
        onMouseOut={toggleVisibleFlagForPc}
        onClick={toggleVisibleFlagForSp}
      />

      {isPcSize ? (
        <MenuForPc
          isShow={pcMenuToggleState}
          className={styles.pc}
          onMouseOver={toggleVisibleFlagForPc}
          onMouseOut={toggleVisibleFlagForPc}
        />
      ) : (
        <MenuForSp isShow={spMenuToggleState} className={styles.pc} />
      )}
    </div>
  );
}
