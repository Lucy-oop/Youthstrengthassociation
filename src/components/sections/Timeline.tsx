"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { timeline } from "@/content/impact";
import { Reveal } from "@/components/motion/Reveal";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";

/** Vertical timeline whose line fills as you scroll. */
export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const reduce = usePrefersReducedMotion();

  return (
    <ol ref={ref} className="relative ml-3 sm:ml-0">
      <span aria-hidden className="absolute left-0 top-2 bottom-2 w-px bg-line sm:left-1/2" />
      <motion.span
        aria-hidden
        style={{ scaleY }}
        className="absolute left-0 top-2 bottom-2 w-px origin-top bg-brand-500 sm:left-1/2"
      />
      {timeline.map((t, i) => {
        const right = i % 2 === 1;
        return (
          <li key={t.years} className="relative pb-12 pl-8 last:pb-0 sm:grid sm:grid-cols-2 sm:gap-16 sm:pl-0">
            <motion.span
              aria-hidden
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 18, delay: 0.15 }}
              className="absolute left-0 top-1.5 size-3.5 -translate-x-1/2 rounded-full border-2 border-paper bg-gold-500 ring-2 ring-brand-500 sm:left-1/2"
            />
            <Reveal
              x={right ? 24 : -24}
              y={0}
              className={right ? "sm:col-start-2" : "sm:text-right"}
            >
              <p className="font-display text-sm font-semibold tracking-wide text-brand-600">{t.years}</p>
              <h3 className="mt-1 text-xl font-medium">{t.title}</h3>
              <p className="mt-2 text-muted">{t.text}</p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
