import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Our work",
  description: "YSA's four focus areas: women & youth empowerment, sustainable development, poverty alleviation, and equality & inclusion.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Four focus areas, one goal: equality."
        crumb="Our work"
        text="From savings groups and farmland to cyclone relief and youth leadership — every project starts with the community."
        image="/photos/seminar-hall.jpg"
        alt="Hundreds of young people seated in a bright hall for a YSA session"
      />

      <section className="py-16 sm:py-24 lg:py-32">
        <Stagger className="container-page grid gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/programs/${p.slug}`}
                className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-3xl p-7 text-white sm:p-10"
              >
                <Image
                  src={p.cover}
                  alt={p.coverAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="-z-10 object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/40 to-black/10 transition group-hover:from-brand-900/95" />
                <span className="font-display text-sm text-gold-300">0{i + 1}</span>
                <h2 className="mt-2 text-3xl font-medium sm:text-4xl">{p.title}</h2>
                <p className="mt-3 max-w-md text-white/80">{p.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                  {p.projects.length} projects
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTABanner />
    </>
  );
}
