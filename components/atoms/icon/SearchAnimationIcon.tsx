import Lottie from "react-lottie";
import * as animationData from "public/lottie/search.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function SearchAnimationIcon() {
  return <Lottie options={defaultOptions} width={250} />;
}
