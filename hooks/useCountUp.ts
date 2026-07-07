"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  const frame = useRef<number>();

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [start, target, duration]);

  return value;
}
