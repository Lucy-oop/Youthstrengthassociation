export const site = {
  name: "Youth Strength Association",
  short: "YSA",
  nameMy: "လူငယ်အားမာန်အဖွဲ့",
  motto: "Diversity is Our Strength – Equality is Our Goal",
  founded: 2014,
  years: 11,
  region: "Rakhine State, Myanmar",
  description:
    "Youth Strength Association (YSA) empowers marginalized communities — especially youth and women — across Rakhine State, Myanmar, through education, livelihood support and emergency relief.",
  address: [
    "No (143), Phone Gyi Kyaung Street",
    "Zedi Ward, Kyauk Phyu Town",
    "Kyauk Phyu District, Rakhine State, Myanmar",
  ],
  phones: [
    { label: "+95 09 261 873 453", href: "tel:+959261873453" },
    { label: "+95 09 666 095 694", href: "tel:+959666095694" },
  ],
  emails: [
    "youthstrengthassocation@gmail.com",
    "info@youthstrengthassocation-ysa.org",
  ],
  mapQuery: "Zedi Ward, Kyaukphyu, Rakhine, Myanmar",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/programs" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const mission =
  "To empower marginalized communities — particularly youth and women — through tools, education and support to overcome poverty and inequality.";

export const vision =
  "A society where all individuals have equal opportunities to thrive and contribute to sustainable development.";

export const executiveMessage =
  "Since 2014 we have walked alongside the communities of Rakhine State. As we mark our 11th year, we reaffirm our commitment to building resilient communities, empowering youth and women, and fostering equality — with deep gratitude to our board members, advisors, donors and local partners who made this journey possible.";

export const coreValues = [
  {
    title: "Empowerment",
    text: "Supporting individuals to become agents of change in their own communities.",
    icon: "sparkles",
  },
  {
    title: "Inclusivity",
    text: "Embracing diversity and equal opportunity for everyone we serve.",
    icon: "users",
  },
  {
    title: "Sustainability",
    text: "Promoting long-term balance between social, economic and environmental goals.",
    icon: "leaf",
  },
  {
    title: "Collaboration",
    text: "Building partnerships with donors, agencies and local actors for greater impact.",
    icon: "handshake",
  },
] as const;
