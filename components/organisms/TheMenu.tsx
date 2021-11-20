import { useState } from "react";
import { HamburgerButtonAnimationThatMovesOnlyAtSP } from "components/atoms/index";
import { MenuForPc, MenuForSp } from "components/molecules/index";
import useViewPort from "hooks/useViewPort";
import styles from "styles/components/organisms/the-menu.module.scss";

type Props = {
  className?: string;
};

export default function TheMenu(props: Props) {
  const [hamburgerState, setHamburger] = useState(false);
  const [pcMenuToggleState, setPcMenuToggleState] = useState<boolean>(false);
  const [spMenuToggleState, setSpMenuToggleState] = useState<boolean>(false);

  const toggleVisibleFlagForPc = (
    e: React.MouseEvent<HTMLElement | SVGElement>
  ) => setPcMenuToggleState(e.type === "mouseover");
  const toggleVisibleFlagForSp = () => {
    setHamburger((prev) => !prev);
    setSpMenuToggleState((prev) => !prev);
  };

  const { windowWidth } = useViewPort();
  const tabPortBreakPoint = 768;
  const isPcSize = windowWidth ? windowWidth > tabPortBreakPoint : false;

  return (
    <div className={`${styles.theMenu} ${props.className ?? ""}`}>
      <HamburgerButtonAnimationThatMovesOnlyAtSP
        isActive={hamburgerState}
        onMouseOver={toggleVisibleFlagForPc}
        onMouseOut={toggleVisibleFlagForPc}
        onClick={toggleVisibleFlagForSp}
      />

      {isPcSize ? (
        <MenuForPc
          className={styles.pc}
          isShow={pcMenuToggleState}
          isShowSetter={setPcMenuToggleState}
          onMouseOver={toggleVisibleFlagForPc}
          onMouseOut={toggleVisibleFlagForPc}
        />
      ) : (
        <MenuForSp
          className={styles.pc}
          isShowSetter={setSpMenuToggleState}
          isShow={spMenuToggleState}
          setHamburgerState={setHamburger}
        />
      )}
    </div>
  );
}
