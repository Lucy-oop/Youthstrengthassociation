import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ImageReveal, Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export function CTABanner() {
  return (
    <section className="pb-16 sm:pb-24 lg:pb-32">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-sky-900 px-6 py-16 text-white sm:px-14 sm:py-20">
          <ImageReveal className="absolute inset-0 -z-10">
          <Image
            src="/photos/schoolgirl-window.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover object-right"
          />
          </ImageReveal>
          {/* Shade only behind the text; the girl on the right stays clear. */}
          <div className="absolute inset-0 -z-10 bg-sky-900/80 sm:bg-transparent sm:bg-linear-to-r sm:from-sky-900 sm:from-35% sm:via-sky-900/60 sm:via-55% sm:to-transparent sm:to-75%" />
          <Reveal delay={0.15} className="max-w-xl">
            <p className="eyebrow text-gold-300">Get involved</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              Help a young person in Rakhine build a stronger future.
            </h2>
            <p className="mt-5 text-lg text-white/80">
              Contact us to learn more about our projects and how to partner, donate or volunteer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-300"
              >
                Contact us <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={site.phones[0].href}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10"
              >
                <Phone className="size-4" /> {site.phones[0].label}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
