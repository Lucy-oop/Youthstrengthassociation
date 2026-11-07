import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { AlternatingSplit } from "@/components/sections/AlternatingSplit";
import { CTABanner } from "@/components/sections/CTABanner";
import { Reveal } from "@/components/motion/Reveal";
import { getProgram, programs } from "@/content/programs";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const program = getProgram(slug);
  return program ? { title: program.title, description: program.summary } : {};
}

export default async function ProgramPage(props: PageProps<"/programs/[slug]">) {
  const { slug } = await props.params;
  const program = getProgram(slug);
  if (!program) notFound();

  const idx = programs.indexOf(program);
  const next = programs[(idx + 1) % programs.length];

  return (
    <>
      <PageHeader
        eyebrow="Focus area"
        title={program.title}
        text={program.summary}
        image={program.cover}
        alt={program.coverAlt}
        crumbs={[{ label: "Our work", href: "/programs" }]}
      />

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-page">
          <AlternatingSplit
            items={program.projects.map((proj) => ({
              eyebrow: proj.years,
              title: proj.title,
              subtitle: proj.subtitle,
              meta: [proj.location, proj.partners].filter(Boolean) as string[],
              image: proj.image,
              alt: proj.alt,
              body: (
                <>
                  <p>
                    <strong className="font-semibold text-ink">Objective: </strong>
                    {proj.objective}
                  </p>
                  {proj.details && (
                    <ul className="space-y-2 text-base">
                      {proj.details.map((d) => (
                        <li key={d} className="flex gap-2.5">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ),
            }))}
          />

          <Reveal>
          <nav
            aria-label="Program navigation"
            className="mt-24 flex flex-col justify-between gap-4 border-t border-line pt-10 sm:flex-row"
          >
            <Link href="/programs" className="inline-flex items-center gap-2 font-semibold text-muted hover:text-ink">
              <ArrowLeft className="size-4" /> All focus areas
            </Link>
            <Link
              href={`/programs/${next.slug}`}
              className="group inline-flex items-center gap-2 font-display text-2xl hover:text-brand-700"
            >
              Next: {next.title}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
