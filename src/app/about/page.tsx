import type { Metadata } from "next";
import { HandHeart, Handshake, Leaf, Sparkles, Users } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { AlternatingSplit } from "@/components/sections/AlternatingSplit";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Timeline } from "@/components/sections/Timeline";
import { CTABanner } from "@/components/sections/CTABanner";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { coreValues, executiveMessage, mission, site, vision } from "@/content/site";

export const metadata: Metadata = {
  title: "About us",
  description: `${site.name}: our mission, vision, values and journey since ${site.founded}.`,
};

const icons = { sparkles: Sparkles, users: Users, leaf: Leaf, handshake: Handshake } as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Since ${site.founded} · ${site.years} years`}
        title="About Youth Strength Association"
        text={`${site.nameMy} — a community organization in Kyauk Phyu, Rakhine State, working for youth, women and equality.`}
        image="/photos/classroom-circle.jpg"
        crumb="About"
        alt="Women and young people seated in a circle at a YSA community lesson"
      />

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-page">
          <AlternatingSplit
            items={[
              {
                eyebrow: "Our mission",
                title: "Tools, education and support to overcome poverty and inequality.",
                body: <p>{mission}</p>,
                image: "/photos/community-workshop.jpg",
                alt: "A YSA facilitator speaking to community members at a workshop",
              },
              {
                eyebrow: "Our vision",
                title: "Equal opportunity for everyone to thrive.",
                body: <p>{vision}</p>,
                image: "/photos/youth-group-balloons.jpg",
                alt: "A diverse group of young people smiling together with balloons",
              },
              {
                eyebrow: "Message from the executive team",
                title: `Celebrating ${site.years} years of community strength.`,
                body: (
                  <>
                    <p>{executiveMessage}</p>
                    <p className="font-display text-xl italic text-ink">“{site.motto}”</p>
                  </>
                ),
                image: "/photos/meeting-wooden-hut.jpg",
                alt: "A YSA leader speaking to community members in a wooden meeting hall",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-sand/60 py-16 sm:py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="Core values" title="What guides everything we do." align="center" />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v) => {
              const Icon = icons[v.icon] ?? HandHeart;
              return (
                <StaggerItem
                  key={v.title}
                  className="group rounded-3xl bg-white p-8 ring-1 ring-line transition duration-500 hover:-translate-y-1 hover:ring-brand-500"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-2xl font-medium">{v.title}</h3>
                  <p className="mt-3 text-muted">{v.text}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our journey"
            title="A decade of projects, 2015 – 2025."
            align="center"
            className="mb-16"
          />
          <Timeline />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
