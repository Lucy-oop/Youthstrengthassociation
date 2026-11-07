import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { asset } from "@/lib/asset";

type Props = {
  title: string;
  eyebrow: string;
  text?: string;
  image: string;
  alt: string;
  crumbs?: { label: string; href: string }[];
  /** Short label for the current page in the breadcrumb (defaults to title). */
  crumb?: string;
};

export function PageHeader({ title, eyebrow, text, image, alt, crumbs = [], crumb }: Props) {
  return (
    <section className="relative isolate flex min-h-[28rem] items-end overflow-hidden bg-ink pb-14 pt-36 text-white sm:min-h-[34rem] sm:pb-20">
      <Image src={asset(image)} alt={alt} fill preload sizes="100vw" className="-z-10 animate-kenburns object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-black/40 to-transparent" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-black/50 via-black/15 via-55% to-transparent" />
      <div className="container-page">
        <div>
          <nav aria-label="Breadcrumb" className="animate-hero-rise">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.href} className="flex items-center gap-1">
                  <ChevronRight className="size-3.5" aria-hidden />
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                </li>
              ))}
              <li className="flex items-center gap-1" aria-current="page">
                <ChevronRight className="size-3.5" aria-hidden />
                <span className="text-white">{crumb ?? title}</span>
              </li>
            </ol>
          </nav>
          <p style={{ animationDelay: "0.1s" }} className="animate-hero-rise eyebrow mt-8 text-gold-300">{eyebrow}</p>
          <h1 style={{ animationDelay: "0.2s" }} className="animate-hero-rise mt-4 max-w-4xl text-4xl font-medium leading-[1.05] [text-shadow:0_2px_24px_rgb(0_0_0/0.35)] sm:text-6xl">{title}</h1>
          {text && <p style={{ animationDelay: "0.35s" }} className="animate-hero-rise mt-5 max-w-2xl text-lg text-white/90 [text-shadow:0_1px_12px_rgb(0_0_0/0.35)]">{text}</p>}
        </div>
      </div>
    </section>
  );
}
