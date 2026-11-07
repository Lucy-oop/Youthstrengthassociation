"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { heroIntro, heroSlides } from "@/content/home";
import { asset } from "@/lib/asset";

const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Full-bleed hero: a fixed headline + CTAs on the left, and a frosted
 * "story card" on the right that narrates the rotating background photos.
 */
export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduce = usePrefersReducedMotion();
  const touchX = useRef<number | null>(null);
  const count = heroSlides.length;

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const autoplay = !reduce && !paused;
  const running = autoplay && !hovered;
  const slide = heroSlides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Youth Strength Association — impact stories"
      tabIndex={-1}
      className="relative isolate flex min-h-svh items-end sm:h-svh sm:max-h-240 sm:min-h-160 overflow-hidden bg-ink text-white outline-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {/* Background photos */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0 -z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={asset(slide.image)}
            alt={slide.alt}
            fill
            sizes="100vw"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            className={`object-cover ${reduce ? "" : "animate-kenburns"}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Light, targeted scrims: keep photos vivid, text legible */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/25 via-45% to-transparent" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-black/35 to-transparent" />
      <div aria-hidden className="absolute inset-0 -z-10 hidden bg-linear-to-r from-black/45 via-black/10 via-55% to-transparent lg:block" />

      <div className="container-page relative grid gap-8 pb-8 pt-32 sm:pb-12 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-16">
        {/* Fixed message */}
        <div className="lg:col-span-7">
          <p style={{ animationDelay: "0.1s" }} className="animate-hero-rise eyebrow text-gold-300 [text-shadow:0_1px_8px_rgb(0_0_0/0.4)]">
            {heroIntro.eyebrow}
          </p>
          <h1 style={{ animationDelay: "0.2s" }} className="animate-hero-rise mt-4 text-4xl font-medium leading-[1.04] [text-shadow:0_2px_24px_rgb(0_0_0/0.35)] sm:text-6xl xl:text-7xl"
          >
            {heroIntro.title}
          </h1>
          <p style={{ animationDelay: "0.35s" }} className="animate-hero-rise mt-5 max-w-xl text-base text-white/90 sm:text-lg">
            {heroIntro.text}
          </p>
          <div style={{ animationDelay: "0.5s" }} className="animate-hero-rise mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <Link
              href={heroIntro.primary.href}
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold-400 px-4 py-3.5 sm:px-6 text-sm font-semibold text-ink shadow-lg shadow-black/20 transition hover:bg-gold-300"
            >
              {heroIntro.primary.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={heroIntro.secondary.href}
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/40 bg-white/10 px-4 py-3.5 sm:px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/70 hover:bg-white/20"
            >
              {heroIntro.secondary.label}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Story card */}
        <div style={{ animationDelay: "0.65s" }} className="animate-hero-rise rounded-2xl bg-black/30 p-4 ring-1 ring-white/20 backdrop-blur-md sm:p-5 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9"
        >
          <div aria-live={autoplay ? "off" : "polite"} className="min-h-14 sm:min-h-27">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
              >
                <p className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">
                  <span className="truncate">{slide.kicker}</span>
                  <span className="shrink-0 tabular-nums text-white/60">
                    {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                  </span>
                </p>
                <Link
                  href={slide.href}
                  className="group mt-2 flex items-start justify-between gap-3 font-display text-lg font-medium leading-snug sm:text-xl"
                >
                  {slide.title}
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-white/70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300" />
                </Link>
                <p className="mt-1.5 hidden text-sm text-white/75 sm:block">{slide.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-white/15 pt-4">
            <ol className="flex flex-1 gap-1.5">
              {heroSlides.map((s, i) => (
                <li key={s.image} className="flex-1">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to story ${i + 1}: ${s.kicker}`}
                    aria-current={i === index ? "true" : undefined}
                    className="block w-full py-3"
                  >
                    <span className="relative block h-1 overflow-hidden rounded-full bg-white/25">
                      {i < index && <span className="absolute inset-0 bg-white/80" />}
                      {i === index &&
                        (autoplay ? (
                          <span
                            key={`fill-${index}`}
                            className="absolute inset-0 origin-left bg-gold-400"
                            style={{
                              animation: `ysa-progress ${DURATION}ms linear forwards`,
                              animationPlayState: running ? "running" : "paused",
                            }}
                            onAnimationEnd={() => go(index + 1)}
                          />
                        ) : (
                          <span className="absolute inset-0 bg-gold-400" />
                        ))}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="flex shrink-0 items-center gap-1">
              <HeroControl label="Previous story" onClick={() => go(index - 1)}>
                <ChevronLeft className="size-4" />
              </HeroControl>
              <HeroControl label={paused ? "Play slideshow" : "Pause slideshow"} onClick={() => setPaused((p) => !p)}>
                {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
              </HeroControl>
              <HeroControl label="Next story" onClick={() => go(index + 1)}>
                <ChevronRight className="size-4" />
              </HeroControl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroControl({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-10 place-items-center rounded-full text-white/85 ring-1 ring-white/25 transition hover:bg-white/15 hover:text-white"
    >
      {children}
    </button>
  );
}
