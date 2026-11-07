import Image from "next/image";
import { Handshake, Quote } from "lucide-react";
import { ImageReveal, Reveal } from "@/components/motion/Reveal";
import { partners } from "@/content/impact";
import { SectionHeading } from "./SectionHeading";

/** Asymmetrical, zig-zag mix of photo, quote, list and stat blocks. */
export function AsymmetricGrid() {
  return (
    <section className="bg-sand/60 py-16 sm:py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Partners & collaboration"
          title="Stronger together — with donors, agencies and local leaders."
          text="Our work multiplies through partnership: international donors, UN agencies, government departments, village authorities and civil-society organizations."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Row 1 */}
          <ImageReveal from="left" className="relative min-h-80 overflow-hidden rounded-3xl lg:col-span-7 lg:row-span-2 lg:min-h-[34rem]">
            <Image
              src="/photos/head-table-meeting.jpg"
              alt="YSA facilitating a meeting between villagers and government officials"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent" />
            <p className="absolute bottom-6 left-6 right-6 max-w-md text-lg font-medium text-white">
              Social accountability: bringing 5 villages and 6 CSOs together with 4 government departments.
            </p>
          </ImageReveal>

          <Reveal delay={0.1} className="rounded-3xl bg-brand-700 p-8 text-white lg:col-span-5 sm:p-10">
            <Quote className="size-8 text-gold-400" aria-hidden />
            <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
              Building resilient communities, empowering youth and women, and fostering equality
              across Rakhine State.
            </p>
            <p className="mt-5 text-sm text-white/70">— YSA Executive Team</p>
          </Reveal>

          <Reveal delay={0.2} className="rounded-3xl bg-white p-8 ring-1 ring-line lg:col-span-5 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gold-300/60">
                <Handshake className="size-5 text-ink" aria-hidden />
              </span>
              <h3 className="text-xl font-medium">Who we work with</h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {partners.map((p) => (
                <li key={p} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm">
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Row 2 — reversed weight */}
          <Reveal className="flex flex-col justify-between rounded-3xl bg-gold-400 p-8 text-ink lg:col-span-4 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em]">COVID-19 · HARP-F</p>
            <div className="mt-10">
              <p className="font-display text-6xl font-medium sm:text-7xl">16</p>
              <p className="mt-2 max-w-xs">wards and quarantine centers reached with hygiene kits and food.</p>
            </div>
          </Reveal>

          <ImageReveal delay={0.1} from="right" className="relative min-h-80 overflow-hidden rounded-3xl lg:col-span-8">
            <Image
              src="/photos/health-donation-drive.jpg"
              alt="Volunteers presenting hygiene kit supplies and an awareness poster"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover object-[50%_22%]"
            />
            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur">
              Hygiene kits & health awareness
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
