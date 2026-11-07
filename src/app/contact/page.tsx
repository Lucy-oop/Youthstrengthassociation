import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { SplitFAQ } from "@/components/sections/SplitFAQ";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Kyauk Phyu, Rakhine State, Myanmar.`,
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build stronger communities together."
        crumb="Contact"
        text="Contact us to learn more about our projects, partnerships and how you can help."
        image="/photos/training-celebration.jpg"
        alt="Village women and youth holding certificates after a community training"
      />

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-page grid gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Stagger className="space-y-5">
            <StaggerItem className="rounded-3xl bg-white p-8 ring-1 ring-line">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Phone className="size-5" aria-hidden />
                </span>
                <h2 className="text-2xl font-medium">Call us</h2>
              </div>
              <ul className="mt-5 space-y-2">
                {site.phones.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="text-lg font-semibold tabular-nums hover:text-brand-700">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem className="rounded-3xl bg-white p-8 ring-1 ring-line">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-gold-300/60 text-ink">
                  <Mail className="size-5" aria-hidden />
                </span>
                <h2 className="text-2xl font-medium">Email us</h2>
              </div>
              <ul className="mt-5 space-y-2">
                {site.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="break-words text-sm font-semibold hover:text-brand-700 lg:text-base">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem className="rounded-3xl bg-brand-700 p-8 text-white">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-white/10 text-gold-300">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <h2 className="text-2xl font-medium">Visit our office</h2>
              </div>
              <address className="mt-5 not-italic leading-relaxed text-white/85">
                {site.address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
            </StaggerItem>
          </Stagger>

          <Reveal x={32} y={0} className="relative min-h-96 overflow-hidden rounded-3xl bg-sand ring-1 ring-line md:min-h-full">
            <iframe
              title="Map of YSA office in Kyauk Phyu"
              src={mapSrc}
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-lg ring-1 ring-black/5 transition hover:bg-gold-300"
            >
              <MapPin className="size-4 text-brand-600" /> Open in Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      <SplitFAQ image="/photos/outdoor-lesson-tree.jpg" alt="YSA volunteers and villagers gathered in a circle under a leafy tree" />
    </>
  );
}
