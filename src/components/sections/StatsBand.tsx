import { CountUp } from "@/components/motion/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { highlights, stats } from "@/content/impact";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-24 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[32rem] rounded-full bg-brand-600/30 blur-3xl"
      />
      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold-300">Our impact · 2018 – 2025</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
            Thousands of lives reached across Rakhine State.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-3">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="bg-brand-900 p-6 sm:p-10">
              <CountUp
                value={s.value}
                className="block font-display text-4xl font-medium tabular-nums text-gold-400 sm:text-6xl"
              />
              <p className="mt-2 text-sm text-white/75 sm:text-base">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal as="li" key={h} delay={i * 0.08} className="flex gap-3 text-white/85">
              <span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-gold-400" />
              {h}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
