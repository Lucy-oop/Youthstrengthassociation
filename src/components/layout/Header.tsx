"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on Escape; lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-paper/90 text-ink shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
          : "bg-linear-to-b from-black/50 to-transparent text-white"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <span className="grid size-11 place-items-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5">
            <Image src={asset("/logo.png")} alt="" width={44} height={44} className="size-11 object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">{site.short}</span>
            <span className="block font-myanmar text-[0.7rem] opacity-80">{site.nameMy}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="group relative px-4 py-2 text-sm font-medium"
            >
              {item.label}
              <span
                className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left bg-gold-500 transition-transform duration-300 ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold-300"
          >
            Support us <ArrowUpRight className="size-4" />
          </Link>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-paper md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 pt-6">
              {site.nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-line py-4 font-display text-3xl ${
                      isActive(item.href) ? "text-brand-600" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="container-page mt-8 space-y-1 text-sm text-muted">
              {site.phones.map((p) => (
                <a key={p.href} href={p.href} className="block py-1">
                  {p.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
