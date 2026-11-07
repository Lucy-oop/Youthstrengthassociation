import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export type Card = {
  title: string;
  text: string;
  image: string;
  alt: string;
  href: string;
  tag?: string;
};

/** Three-column teaser card grid. */
export function CardGrid3({ cards, className = "" }: { cards: readonly Card[]; className?: string }) {
  return (
    <Stagger className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {cards.map((c) => (
        <StaggerItem
          key={c.title}
          className="h-full md:last:odd:col-span-2 md:last:odd:mx-auto md:last:odd:w-1/2 lg:last:odd:col-span-1 lg:last:odd:w-auto"
        >
          <Link
            href={c.href}
            className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(20,32,26,0.35)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              {c.tag && (
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">{c.tag}</p>
              )}
              <h3 className="mt-3 text-2xl font-medium leading-snug">{c.title}</h3>
              <p className="mt-3 flex-1 text-muted">{c.text}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Learn more
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
