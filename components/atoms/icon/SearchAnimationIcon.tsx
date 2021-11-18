import Lottie from "react-lottie";
import * as animationData from "public/lottie/search.json";
import React, { Ref, forwardRef } from "react";

type Props = {
  className?: string;
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function SearchAnimationIcon({ className }: Props, ref: Ref<HTMLDivElement>) {
  return (
    <div className={className} ref={ref}>
      <Lottie options={defaultOptions} width={250} />
    </div>
  );
}

const forwardRefSearchAnimationIcon = forwardRef<HTMLDivElement, Props>(
  SearchAnimationIcon
);
export default forwardRefSearchAnimationIcon;
