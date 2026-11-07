import Image from "next/image";
import type { ReactNode } from "react";
import { ImageReveal, Reveal } from "@/components/motion/Reveal";
import { asset } from "@/lib/asset";

export type SplitItem = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body: ReactNode;
  meta?: string[];
  image: string;
  alt: string;
};

/** Alternating 2-column zig-zag storytelling rows. */
export function AlternatingSplit({ items }: { items: SplitItem[] }) {
  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-28">
      {items.map((item, i) => {
        const flip = i % 2 === 1;
        return (
          <article key={item.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ImageReveal
              from={flip ? "right" : "left"}
              className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${flip ? "lg:order-2" : ""}`}
            >
              <Image
                src={asset(item.image)}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <span
                aria-hidden
                className="absolute left-5 top-5 grid size-12 place-items-center rounded-full bg-gold-400 font-display text-lg font-semibold text-ink"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </ImageReveal>

            <Reveal delay={0.2} className={flip ? "lg:order-1" : ""}>
              {item.eyebrow && <p className="eyebrow">{item.eyebrow}</p>}
              <h3 className="mt-4 text-3xl font-medium leading-tight sm:text-4xl">{item.title}</h3>
              {item.subtitle && <p className="mt-2 text-lg font-medium text-brand-700">{item.subtitle}</p>}
              {item.meta && item.meta.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.meta.map((m) => (
                    <li key={m} className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm text-brand-700 ring-1 ring-brand-100">
                      {m}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6 space-y-4 text-lg text-muted">{item.body}</div>
            </Reveal>
          </article>
        );
      })}
    </div>
  );
}
