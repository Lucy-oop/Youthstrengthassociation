import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Noto_Sans_Myanmar } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import "./globals.css";

const heading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "variable",
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "variable",
});

const myanmar = Noto_Sans_Myanmar({
  variable: "--font-my",
  weight: ["400", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://youthstrengthassocation-ysa.org"),
  title: {
    default: `${site.name} (${site.short}) — ${site.region}`,
    template: `%s · ${site.short}`,
  },
  description: site.description,
  icons: { icon: "/logo.png" },
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/hero-children.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${heading.variable} ${body.variable} ${myanmar.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
