import Lottie from "react-lottie";
import * as animationData from "public/lottie/search.json";

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

export default function SearchAnimationIcon({ className }: Props) {
  return (
    <div className={className}>
      <Lottie options={defaultOptions} width={250} />
    </div>
  );
}
