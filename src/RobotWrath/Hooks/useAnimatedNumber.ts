import { useEffect, useState } from "react";

export function useAnimatedNumber(target: number): number {
  const [previous, setPrevious] = useState(0);

  const [result, setResult] = useState(target);

  const [lerpProgress, setLerpProgress] = useState(1);

  useEffect(() => {
    setPrevious(result);
    setLerpProgress(0);
  }, [target]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(
        "lerpProgress",
        lerpProgress,
        "easedProgress",
        ease(lerpProgress)
      );
      setResult((target - previous) * ease(lerpProgress) + previous);

      if (lerpProgress >= 1) {
        return;
      }

      const progress = lerpProgress + 0.05;
      setLerpProgress(Math.min(progress, 1));
    }, 20);
    return () => clearTimeout(timer);
  }, [lerpProgress]);

  return Math.round(result);
}

function ease(x: number): number {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}
