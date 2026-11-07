import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import { programs } from "@/content/programs";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { asset } from "@/lib/asset";

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white/80">
      <Stagger className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <StaggerItem>
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-full bg-white">
              <Image src={asset("/logo.png")} alt="" width={56} height={56} className="size-14 object-contain" />
            </span>
            <div>
              <p className="font-display text-xl font-semibold text-white">{site.name}</p>
              <p className="font-myanmar text-sm">{site.nameMy}</p>
            </div>
          </div>
          <p className="mt-6 max-w-xs font-display text-lg italic text-gold-300">
            “{site.motto}”
          </p>
        </StaggerItem>

        <StaggerItem>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-gold-300">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white">Our work</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/programs/${p.slug}`} className="transition hover:text-gold-300">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
              <address className="not-italic">{site.address.join(", ")}</address>
            </li>
            {site.phones.map((p) => (
              <li key={p.href} className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <a href={p.href} className="hover:text-gold-300">{p.label}</a>
              </li>
            ))}
            {site.emails.map((e) => (
              <li key={e} className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <a href={`mailto:${e}`} className="break-all hover:text-gold-300">{e}</a>
              </li>
            ))}
          </ul>
        </StaggerItem>
      </Stagger>
      <div className="border-t border-white/10">
        <p className="container-page py-6 text-xs text-white/60">
          © 2026 {site.short}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
