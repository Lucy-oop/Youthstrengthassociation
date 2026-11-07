export type Project = {
  title: string;
  subtitle?: string;
  years: string;
  location: string;
  partners?: string;
  objective: string;
  details?: string[];
  image: string;
  alt: string;
};

export type Program = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  coverAlt: string;
  projects: Project[];
};

export const programs: Program[] = [
  {
    slug: "women-youth-empowerment",
    title: "Women & Youth Empowerment",
    summary:
      "Building economic independence for rural women and leadership skills for young people.",
    cover: "/photos/ysa-team-banner.jpg",
    coverAlt: "YSA women and youth members standing in front of a YSA banner",
    projects: [
      {
        title: "Women's Economic Empowerment",
        subtitle: "Rural Women's Income Growth Savings and Loans Program",
        years: "2016 – 2018",
        location: "5 villages, Kyauk Phyu Township",
        partners: "Funded by YSA · with local village authorities",
        objective:
          "Increase women's economic empowerment and financial independence.",
        image: "/photos/classroom-circle.jpg",
        alt: "Village women seated together in a circle at a savings group lesson",
      },
      {
        title: "Youth Capacity Building",
        years: "2024 – 2025",
        location: "Kyauk Phyu, Rakhine State",
        objective:
          "Equip youth leaders and civil-society actors with the skills to drive change in their communities.",
        image: "/photos/seminar-hall.jpg",
        alt: "Large hall of young people attending a training",
      },
    ],
  },
  {
    slug: "sustainable-development",
    title: "Sustainable Development",
    summary:
      "Livelihood support and community-based disaster risk reduction for long-term stability.",
    cover: "/photos/mangrove-conservation.jpg",
    coverAlt: "Villagers building an embankment beside a waterway",
    projects: [
      {
        title: "Livelihood Support",
        subtitle: "Agricultural development",
        years: "2015 – 2016",
        location: "9 villages, Kyauk Phyu Township",
        partners: "YSA & Better Life Organization",
        objective:
          "Implement agricultural development projects to ensure local social security and stability.",
        image: "/photos/mangrove-planting.jpg",
        alt: "Community members planting mangrove seedlings together",
      },
      {
        title: "Community Based Disaster Risk Reduction (CBDRR)",
        years: "2019 – 2020",
        location: "Kyauk Phyu Township",
        objective:
          "Prepare communities to anticipate, withstand and recover from natural hazards.",
        image: "/photos/meeting-wooden-hut.jpg",
        alt: "Community members seated in a circle at a village training in a wooden hall",
      },
    ],
  },
  {
    slug: "poverty-alleviation",
    title: "Poverty Alleviation",
    summary:
      "Emergency relief and direct cash support for families facing crisis and displacement.",
    cover: "/photos/truck-loading.jpg",
    coverAlt: "Volunteers unloading relief supplies from a truck",
    projects: [
      {
        title: "COVID-19 Emergency Response",
        years: "2020",
        location: "Kyaukphyu Town",
        partners: "Funded by HARP-F · with local government & CSOs",
        objective:
          "Protect communities during the pandemic with essential supplies.",
        details: [
          "Hygiene kits and food supplies delivered",
          "11 wards and 5 quarantine centers covered",
        ],
        image: "/photos/hygiene-kit-handoff.jpg",
        alt: "Health worker in protective gear handing a hygiene kit to a woman",
      },
      {
        title: "Emergency Response & Assistance",
        subtitle: "Kyauk Phyu CSOs Emergency Relief Network (KCERN)",
        years: "After Cyclone Mocha",
        location: "Kyauk Phyu Township",
        partners: "Civil-society organizations, youth & donors",
        objective:
          "Unite civil society to deliver emergency food supplies to disaster-affected communities.",
        details: [
          "Formed KCERN, uniting CSOs across the township",
          "Mobilized youth, CSOs and donors",
          "Coordinated with local authorities",
        ],
        image: "/photos/village-relief-shelter.jpg",
        alt: "Volunteers handing out relief items to villagers under a shelter",
      },
      {
        title: "Emergency Multi-Purpose Cash Transfer",
        years: "2024 – ongoing",
        location: "Kyaukphyu Township",
        partners: "Funded by People In Need (PIN) · implemented by YSA",
        objective:
          "Address urgent, basic livelihood needs of displaced families through direct multi-purpose cash assistance.",
        image: "/photos/rice-donation.jpg",
        alt: "Volunteer handing a sack of rice to an elderly woman in her bamboo home",
      },
    ],
  },
  {
    slug: "equality-inclusion",
    title: "Equality & Inclusion",
    summary:
      "Social accountability and non-discrimination work that gives every voice a seat at the table.",
    cover: "/photos/youth-group-balloons.jpg",
    coverAlt: "Students and youth gathered in a classroom session",
    projects: [
      {
        title: "Social Accountability Project",
        years: "2018 – 2019",
        location: "Kyauk Phyu Township",
        partners: "6 local CSOs · 5 villages",
        objective:
          "Strengthen accountability between communities and public services.",
        details: [
          "Department of Rural Development",
          "Department of Agriculture",
          "Department of Animal Husbandry and Veterinary Services",
          "Department of Fisheries",
        ],
        image: "/photos/head-table-meeting.jpg",
        alt: "Community meeting with government officials at a head table",
      },
      {
        title: "Creating a Non-discrimination Youth Environment",
        years: "2022 – 2023",
        location: "Kyauk Phyu, Rakhine State",
        objective:
          "Promote inclusion and equality by engaging diverse youth groups.",
        image: "/photos/planning-table.jpg",
        alt: "Diverse young people collaborating around a planning table",
      },
    ],
  },
];

export const getProgram = (slug: string) =>
  programs.find((p) => p.slug === slug);
