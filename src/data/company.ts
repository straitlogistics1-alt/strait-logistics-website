import type {
  CompanyStat,
  ContactInfo,
} from "@/types/company";

export const company = {
  name: "Strait Logistics Pvt. Ltd.",
  shortName: "Strait Logistics",

  website: "https://www.straitlogistics.in",

  tagline: "Powering Global Connections",

  description:
    "Strait Logistics is a trusted partner in customs clearance and freight forwarding, combining speed, transparency and expertise to help keep supply chains moving.",

  yearsOfExperience: "25+",

  strengths: [
    "25+ years of experience",
    "Strong presence across the NCR region",
    "Expertise in freight forwarding and customs clearance",
    "Air and sea transportation capabilities",
  ],

  operations: {
    support: "Round-the-clock support",
    documentation: "EDI-enabled documentation",
    shipmentUpdates: "Real-time shipment updates",
    clearanceLocations: [
      "ICD PPG",
      "ICD TKD",
      "IGI Airport",
    ],
  },

  targetCustomers: [
    "Automotive components manufacturers",
    "Engineering goods manufacturers",
    "Agricultural equipment manufacturers",
  ],
} as const;

export const companyStats: CompanyStat[] = [
  {
    value: "25+",
    label: "Years of Experience",
  },
];

export const contactInfo: ContactInfo = {
  phone: [
    "011-43063988",
    "011-45689306",
  ],

  mobile: [
    "9582795481-90",
    "+91 9811225503",
  ],

  email: [
    "straitlogistics1@gmail.com",
    "info@straitlogistics.com",
  ],

  address: {
    lines: [
      "302, Anupam Plaza",
      "DDA Local Shopping Complex",
      "Gazipur",
    ],

    city: "Delhi",
    state: "Delhi",
    postalCode: "110096",
    country: "India",

    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=302%20Anupam%20Plaza%20DDA%20Local%20Shopping%20Complex%20Gazipur%20Delhi%20110096",
  },
};
