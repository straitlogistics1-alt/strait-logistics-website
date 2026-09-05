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
      id: "RLF LIMITED",
      name: "RLF LIMITED",
      displayName: "RLF LIMITED",
      image: "/images/clients/rlf-limited-card.jpg",
      logo: "/images/clients/rlf-limited.png",
    },
    {
      id: "Fed Ex",
      name: "Fed Ex",
      displayName: "Fed Ex",
      image: "/images/clients/fed-ex-card.jpg",
      logo: "/images/clients/fed-ex.png",
    },
    {
      id: "OSNA ELECTRONICS PVT. LTD.",
      name: "OSNA ELECTRONICS PVT. LTD.",
      displayName: "OSNA ELECTRONICS PVT. LTD.",
      image: "/images/clients/osna-electronics-card.jpg",
      logo: "/images/clients/osna-electronics.png",
    },
    {
      id: "Danblock Braking",
      name: "Danblock Braking",
      displayName: "Danblock Braking",
      image: "/images/clients/danblock-card.jpg",
      logo: "/images/clients/danblock.png",
    },
     {
      id: "Pranav Mediatech",
      name: "Pranav Mediatech",
      displayName: "Pranav Mediatech",
      image: "/images/clients/pranav-mediatech-card.jpg",
      logo: "/images/clients/pranav-mediatech.png",
    },
     {
      id: "Mat Holdings.inc",
      name: "Mat Holdings.inc",
      displayName: "Mat Holdings.inc",
      image: "/images/clients/mat-holdings-card.jpg",
      logo: "/images/clients/mat-holdings.png",
    },
    {
      id: "AFFINIA",
      name: "AFFINIA",
      displayName: "Affinia",
      image: "/images/clients/affinia-card.jpg",
      logo: "/images/clients/affinia.png",
    },
    {
      id: "Rajesh Industrial Projects Pvt Ltd",
      name: "Rajesh Industrial Projects Pvt Ltd",
      displayName: "Rajesh Industrial Projects Pvt Ltd",
      image: "/images/clients/rajesh-industrial-card.jpg",
      logo: "/images/clients/rajesh-industrial.png",
    },
    {
      id: "Lakshay International",
      name: "Lakshay International",
      displayName: "Lakshay International",
      image: "/images/clients/lakshay-international-card.jpg",
      logo: "/images/clients/lakshay-international.png",
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