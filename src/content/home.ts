export const heroIntro = {
  eyebrow: "Since 2014 · Kyauk Phyu, Rakhine State",
  title: "Every child, every young person, a chance to thrive.",
  text: "For 11 years YSA has empowered youth and women across Kyauk Phyu to overcome poverty and inequality.",
  primary: { label: "Discover our work", href: "/programs" },
  secondary: { label: "Support us", href: "/contact" },
} as const;

/** Rotating impact stories shown behind the fixed hero headline. */
export const heroSlides = [
  {
    image: "/photos/school-assembly.jpg",
    alt: "Rows of schoolchildren in white uniforms listening at a school assembly",
    kicker: "Education · Kyauk Phyu",
    title: "Learning that opens doors.",
    text: "Supporting students and schools so every child can stay in class.",
    href: "/programs",
  },
  {
    image: "/photos/truck-loading.jpg",
    alt: "Volunteers loading emergency supplies onto a truck as villagers gather",
    kicker: "Emergency relief · KCERN",
    title: "Standing with communities when disaster strikes.",
    text: "After Cyclone Mocha we united civil society in KCERN to deliver emergency food.",
    href: "/programs/poverty-alleviation",
  },
  {
    image: "/photos/relief-boxes-handover.jpg",
    alt: "Volunteers in masks and protective gear handing over boxes of hygiene supplies",
    kicker: "COVID-19 response · HARP-F",
    title: "11 wards and 5 quarantine centers protected.",
    text: "Hygiene kits and food reached families across Kyaukphyu during the pandemic.",
    href: "/programs/poverty-alleviation",
  },
  {
    image: "/photos/youth-group-balloons.jpg",
    alt: "A diverse group of young people smiling together with balloons under palm trees",
    kicker: "Equality & inclusion",
    title: "Diversity is our strength. Equality is our goal.",
    text: "Engaging diverse youth groups to build a non-discriminating environment.",
    href: "/programs/equality-inclusion",
  },
] as const;

export const showcaseImages = [
  { src: "/photos/ysa-team-banner.jpg", alt: "YSA members in white shirts standing in front of a YSA banner", caption: "Our people" },
  { src: "/photos/aid-distribution.jpg", alt: "A YSA volunteer handing relief supplies to a village woman beside a delivery truck", caption: "Our communities" },
  { src: "/photos/classroom-circle.jpg", alt: "Women and young people seated in a circle at a YSA community lesson", caption: "Our programs" },
] as const;
