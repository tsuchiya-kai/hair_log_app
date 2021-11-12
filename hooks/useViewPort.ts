import { debounce } from "lodash";
import { useState, useEffect } from "react";

export function useViewPort() {
  const [windowWidth, setWindowWidth] = useState<number>();
  const [windowHeight, setWindowHeight] = useState<number>();
  const [clientHeight, setClientHeight] = useState<number>();
  const [maxScrollPosition, setMaxScrollPosition] = useState<number>(); //スクロールできる距離の最大値

  useEffect(() => {
    window.addEventListener("resize", debounce(handleResize, 100)); // NOTE: 100以上だと遅すぎる

    process.nextTick(() => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setClientHeight(document.documentElement.clientHeight);
      setMaxScrollPosition(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      );
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (): void => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setClientHeight(document.documentElement.clientHeight);
    setMaxScrollPosition(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    );
  };

  return {
    windowWidth,
    windowHeight,
    clientHeight,
    maxScrollPosition,
  };
}
