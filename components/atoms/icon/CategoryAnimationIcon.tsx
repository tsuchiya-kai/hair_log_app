import Lottie from "react-lottie";
import * as animationData from "public/lottie/category.json";
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

function CategoryAnimationIcon({ className }: Props, ref: Ref<HTMLDivElement>) {
  return (
    <div className={className} ref={ref}>
      <Lottie options={defaultOptions} width={250} />
    </div>
  );
}

const forwardRefCategoryAnimationIcon = forwardRef<HTMLDivElement, Props>(
  CategoryAnimationIcon
);
export default forwardRefCategoryAnimationIcon;
