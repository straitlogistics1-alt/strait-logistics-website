import {
  company,
  companyStats,
} from "@/data/company";

import type { AboutStat } from "@/types/home";

export const aboutContent = {
  eyebrow: "About Us",

  title: "Delivering Trust.\nShipping Confidence.",

  description: [
    `At ${company.shortName}, we don't just move cargo — we power global connections.`,

    "As a trusted partner in customs clearance and freight forwarding, we combine speed, transparency and expertise to keep supply chains flowing effortlessly.",

    "With a client-obsessed mindset and round-the-clock support, we transform complex shipping into a smooth, predictable experience.",

    "Every shipment we handle reflects our promise: precision in execution, trust in communication and confidence in delivery.",
  ],

  image: {
    src: "/images/about/logistics-port.jpg",
    alt: "Container terminal and cargo ships at a logistics port",
  },

  stats: [
    {
      icon: "award",
      value: companyStats[0].value,
      label: companyStats[0].label,
    },
    {
      icon: "users",
      value: "Trusted",
      label: "by Leading Clients",
    },
    {
      icon: "clock",
      value: "Round-the-Clock",
      label: "Support",
    },
  ] satisfies AboutStat[],
} as const;