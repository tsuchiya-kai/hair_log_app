import { useState, useEffect } from "react";

export default function useIntersection(
  ref: React.MutableRefObject<HTMLDivElement>
) {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const { current } = ref;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  });

  return { intersecting };
}
