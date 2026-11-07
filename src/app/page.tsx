import { HeroSlider } from "@/components/sections/HeroSlider";
import { CenteredShowcase } from "@/components/sections/CenteredShowcase";
import { StatsBand } from "@/components/sections/StatsBand";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CardGrid3 } from "@/components/sections/CardGrid3";
import { AsymmetricGrid } from "@/components/sections/AsymmetricGrid";
import { SplitFAQ } from "@/components/sections/SplitFAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { initiatives } from "@/content/impact";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CenteredShowcase />
      <StatsBand />

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Current initiatives · 2024 – 2025"
            title="Where our energy is going right now."
          />
          <CardGrid3 cards={initiatives} className="mt-14" />
        </div>
      </section>

      <AsymmetricGrid />
      <SplitFAQ />
      <CTABanner />
    </>
  );
}
