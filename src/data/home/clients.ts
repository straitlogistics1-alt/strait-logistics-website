import type { LucideIcon } from "lucide-react";

import {
  ArrowUpRight,
  Globe2,
  Handshake,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export type ClientItem = {
  id : string ;
  name: string;
  displayName: string;

  // Full image used as the background of the entire card
  image: string | null;

  // Company logo displayed on top of the card image
  logo: string | null;
};

export type ClientStat = {
  value: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const clientsContent = {
  eyebrow: "Our Valued Clients",

  title: ["Trusted by", "Leading Businesses"],

  description:
    "We are privileged to partner with forward-thinking companies across industries. Their trust drives us to deliver excellence, every time.",

  clients: [
    {
      id : "ERGO AUTO" ,
      name: "ERGO AUTO",
      displayName: "ERGO AUTO",
      image: "/images/clients/ergo-auto-card.jpg",
      logo: "/images/clients/ergo-auto.png",
    },
    {
      id: "SADHU FORGINGS LTD.",
      name: "SADHU FORGINGS LTD.",
      displayName: "SADHU FORGINGS LTD.",
      image: "/images/clients/sadhu-forgings-card.jpg",
      logo: "/images/clients/sadhu-forgings.png",
    },
    {
      id: "RLF LIMITED",
      name: "RLF LIMITED",
      displayName: "RLF LIMITED",
      image: "/images/clients/rlf-limited-card.jpg",
      logo: "/images/clients/rlf-limited.png",
    },
    {
      id: "DEE-ESS BUHIN PVT. LTD.",
      name: "DEE-ESS BUHIN PVT. LTD.",
      displayName: "DEE-ESS BUHIN PVT. LTD.",
      image: "/images/clients/dee-ess-buhin-card.jpg",
      logo: "/images/clients/dee-ess-buhin.png",
    },
    {
      id: "OSNA ELECTRONICS PVT. LTD.",
      name: "OSNA ELECTRONICS PVT. LTD.",
      displayName: "OSNA ELECTRONICS PVT. LTD.",
      image: "/images/clients/osna-electronics-card.jpg",
      logo: "/images/clients/osna-electronics.png",
    },
    {
      id: "And many more",
      name: "And many more",
      displayName: "AND MANY MORE",
      image: null,
      logo: null,
    },
  ] satisfies ClientItem[],

  stats: [
    {
      value: "100+",
      title: "Happy Clients",
      description: "",
      icon: Handshake,
    },
    {
      value: "Diverse",
      title: "Industries Served",
      description: "",
      icon: Globe2,
    },
    {
      value: "Long-term",
      title: "Partnerships",
      description: "",
      icon: ShieldCheck,
    },
    {
      value: "Growing",
      title: "Together",
      description: "",
      icon: ArrowUpRight,
    },
    {
      value: "Built on Trust",
      title: "Driven by Results",
      description: "",
      icon: Star,
    },
  ] satisfies ClientStat[],

  fallbackClientIcon: Users,
} as const;