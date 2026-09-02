import {
  Armchair,
  Boxes,
  CircuitBoard,
  Cog,
  Factory,
  Package,
  Settings,
  Shirt,
  Sparkles,
  Wheat,
  type LucideIcon,
} from "lucide-react";

export type CommodityVisual = {
  image: string;
  description: string;
  icon: LucideIcon;
};

export const commodityVisuals: Record<string, CommodityVisual> = {
  "automotive-parts": {
    image: "/images/commodities/automotive-parts.jpg",
    description: "Quality parts supporting global industries.",
    icon: Cog,
  },

  "mechanical-goods": {
    image: "/images/commodities/mechanical-goods.jpg",
    description: "Reliable handling for machinery parts and components.",
    icon: Settings,
  },

  garments: {
    image: "/images/commodities/garments.jpg",
    description: "Careful logistics for apparel and garment shipments.",
    icon: Shirt,
  },

  handicrafts: {
    image: "/images/commodities/handicrafts.jpg",
    description: "Specialized handling for handcrafted goods worldwide.",
    icon: Sparkles,
  },

  "fabrics-yarn": {
    image: "/images/commodities/fabrics-yarn.jpg",
    description: "Dependable movement of fabrics and textile materials.",
    icon: Package,
  },

  furniture: {
    image: "/images/commodities/furniture.jpg",
    description: "Secure transportation for furniture and finished goods.",
    icon: Armchair,
  },

  electronics: {
    image: "/images/commodities/electronics.jpg",
    description: "Careful logistics for sensitive electronic products.",
    icon: CircuitBoard,
  },

  machinery: {
    image: "/images/commodities/machinery.jpg",
    description: "Reliable handling for industrial machinery and equipment.",
    icon: Factory,
  },

  food: {
    image: "/images/commodities/food-items.jpg",
    description: "Efficient logistics for food products and commodities.",
    icon: Wheat,
  },
};