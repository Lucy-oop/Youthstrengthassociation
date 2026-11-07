"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

/** Two-column split FAQ: accordion beside a sticky media anchor. */
export function SplitFAQ({ image = "/photos/planning-table.jpg", alt = "Young people collaborating around a planning table" }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Questions & answers</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              Getting to know YSA
            </h2>
          </Reveal>

          <Stagger className="mt-10 border-t border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const btnId = `${baseId}-q${i}`;
              const panelId = `${baseId}-a${i}`;
              return (
                <StaggerItem key={f.q} className="border-b border-line">
                  <h3 className="font-sans">
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold transition hover:text-brand-700"
                    >
                      {f.q}
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-full border transition duration-300 ${
                          isOpen ? "rotate-45 border-brand-600 bg-brand-600 text-white" : "border-line"
                        }`}
                      >
                        <Plus className="size-4" aria-hidden />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 pr-12 text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <ImageReveal from="right" className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[4/5]">
          <figure className="relative size-full">
            <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/92 p-5 backdrop-blur">
              <p className="font-display text-lg italic">“{site.motto}”</p>
              <p className="mt-1 text-sm text-muted">Youth Strength Association · since {site.founded}</p>
            </figcaption>
          </figure>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
