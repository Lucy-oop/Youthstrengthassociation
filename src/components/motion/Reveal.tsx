"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;
const instant = { duration: 0 } as const;
/** Trigger a little before the element is fully on screen. */
const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  as?: "div" | "li" | "section" | "article";
};

/** Fade + rise when scrolled into view (once). Instant for reduced-motion users. */
export function Reveal({ children, className, delay = 0, y = 48, x = 0, as = "div" }: RevealProps) {
  const reduce = usePrefersReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={viewport}
      transition={reduce ? instant : { duration: 0.9, ease, delay }}
    >
      {children}
    </Tag>
  );
}

const clipFrom = {
  bottom: "inset(100% 0% 0% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
} as const;

/**
 * Photo "curtain" reveal: the frame wipes open while the content settles
 * from a slight zoom. Use on image containers (keeps their own className).
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
  from = "bottom",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: keyof typeof clipFrom;
}) {
  const reduce = usePrefersReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ clipPath: clipFrom[from] }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={viewport}
      transition={reduce ? instant : { duration: 1.1, ease, delay }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={reduce ? instant : { duration: 1.6, ease, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const containerInstant: Variants = { hidden: {}, show: {} };

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease } },
};
const staggerItemInstant: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: instant },
};

/** Parent that staggers its <StaggerItem> children into view. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = usePrefersReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? containerInstant : container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = usePrefersReducedMotion();
  return (
    <motion.div className={className} variants={reduce ? staggerItemInstant : staggerItem}>
      {children}
    </motion.div>
  );
}
