import type { Service } from "@/types/company";

export const services: Service[] = [
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    description:
      "Freight forwarding solutions designed to support reliable and efficient movement of cargo.",
    features: [
      "Competitive freight rates",
      "Import and export shipments",
      "Air and sea freight coordination",
    ],
  },

  {
    id: "customs-clearance",
    title: "Customs Clearance",
    description:
      "Customs clearance support for import and export shipments with a focus on efficient documentation and execution.",
    features: [
      "Import and export clearance",
      "Drawback clearance",
      "IEC number registration",
      "DEPB, EPCG and Advance Licence registration",
    ],
  },

  {
    id: "air-sea-transportation",
    title: "Air & Sea Transportation",
    description:
      "Transportation support for cargo moving through air and sea channels.",
    features: [
      "Import shipments",
      "Export shipments",
      "Door-to-door delivery",
    ],
  },
];