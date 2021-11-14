import { useState, useEffect } from "react";

export default function useIntersection(
  ref: React.MutableRefObject<HTMLDivElement>
) {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  });

  return { intersecting };
}
