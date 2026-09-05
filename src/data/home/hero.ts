import { contactInfo } from "@/data/company";

export const heroContent = {
  title: "Moving Cargo.\nConnecting Worlds.",

  description:
    "Trusted partner in customs clearance and freight forwarding with 25+ years of excellence.",

  primaryAction: {
    label: "Our Services",
    href: "#services",
  },

  secondaryAction: {
    label: "Contact Us",
    href: `mailto:${contactInfo.email[0]}`,
  },
} as const;