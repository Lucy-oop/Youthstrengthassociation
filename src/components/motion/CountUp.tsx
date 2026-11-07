"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

export function CountUp({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = fmt(v);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  // Server/no-JS render shows the final number; animation starts from 0 once visible.
  return (
    <span ref={ref} className={className} aria-label={fmt(value)}>
      {fmt(value)}
    </span>
  );
}
