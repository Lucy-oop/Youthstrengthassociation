"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";
import { useMediaQuery } from "@/components/motion/useMediaQuery";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { showcaseImages } from "@/content/home";
import { site } from "@/content/site";

/** Centered content hero with a 3-card visual grid (triptych). */
export function CenteredShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  // Parallax only when the photos sit side by side; on phones it would overlap the next photo.
  const sideBySide = useMediaQuery("(min-width: 640px)");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lift = useTransform(scrollYProgress, [0, 1], reduce || !sideBySide ? [0, 0] : [60, -60]);

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">{site.years} years of community strength</p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.1] sm:text-6xl">
            Diversity is our <em className="text-brand-600">strength</em>.<br className="hidden sm:block" />{" "}
            Equality is our <em className="text-sky-600">goal</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Founded in {site.founded} in Kyauk Phyu, YSA gives marginalized communities —
            particularly youth and women — the tools, education and support to overcome poverty
            and inequality.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Our story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold transition hover:border-ink/40 hover:bg-white"
            >
              Partner with us
            </Link>
          </div>
        </Reveal>

        <div ref={ref}>
          <Stagger className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-3 sm:gap-6">
            {showcaseImages.map((img, i) => (
              <StaggerItem key={img.src}>
                <motion.figure
                  style={i === 1 ? { y: lift } : undefined}
                  className={`group relative overflow-hidden rounded-3xl bg-sand ${
                    i === 1 ? "aspect-[4/5] sm:-mt-8" : "aspect-[4/5] sm:mt-8"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold backdrop-blur">
                    {img.caption}
                  </figcaption>
                </motion.figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
