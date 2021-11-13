import {
  RefObject,
  // ForwardRefExoticComponent,
  // RefAttributes,
  useEffect,
} from "react";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

type Props = {
  isActive: boolean;
  target: RefObject<HTMLElement>;
  // target: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
};

export function useBodyScrollLock({ isActive, target }: Props) {
  useEffect(() => {
    if (target.current === null) return;

    if (isActive) {
      disableBodyScroll(target.current);
    } else {
      enableBodyScroll(target.current);
    }

    return () => clearAllBodyScrollLocks();
  }, [isActive, target]);
}
