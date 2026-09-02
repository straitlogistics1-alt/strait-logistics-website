import type {
  Service,
  ServiceBenefit,
  ServiceTrustPoint,
} from "@/types/services";

export const servicesContent = {
  eyebrow: "Our Services",

  title: "End-to-End Logistics Solutions",

  description:
    "From customs clearance to final delivery, we provide complete logistics solutions designed to simplify your supply chain and accelerate your business.",

  highlights: [
    {
      icon: "shield",
      label: "25+ Years of Expertise",
    },
    {
      icon: "clock",
      label: "Time-Critical Support",
    },
    {
      icon: "users",
      label: "Client-First Approach",
    },
  ] satisfies ServiceTrustPoint[],

  services: [
    {
      title: "Import & Export Clearance",
      description:
        "Seamless clearance of all import and export shipments by Air & Sea.",
      image: "/images/services/import-export-clearance.jpg",
      icon: "ship",
      href: "/services/import-export-clearance",
    },
    {
      title: "Freight Forwarding",
      description:
        "Reliable freight forwarding with competitive rates and on-time delivery.",
      image: "/images/services/freight-forwarding.jpg",
      icon: "truck",
      href: "/services/freight-forwarding",
    },
    {
      title: "Drawback Clearance",
      description:
        "Efficient drawback and refund processing to optimize your costs.",
      image: "/images/services/drawback-clearance.jpg",
      icon: "file",
      href: "/services/drawback-clearance",
    },
    {
      title: "IEC Registration",
      description:
        "Hassle-free IEC number registration and related documentation.",
      image: "/images/services/iec-registration.jpg",
      icon: "badge",
      href: "/services/iec-registration",
    },
    {
      title: "Licenses (DEPB, EPCG, Advance)",
      description:
        "Assistance in obtaining essential import-export licenses and benefits.",
      image: "/images/services/licenses.jpg",
      icon: "stamp",
      href: "/services/licenses",
    },
    {
      title: "Personal Baggage Clearance",
      description:
        "Smooth clearance of personal baggage shipments.",
      image: "/images/services/personal-baggage.jpg",
      icon: "briefcase",
      href: "/services/personal-baggage-clearance",
    },
    {
      title: "Door-to-Door Delivery",
      description:
        "End-to-end door-to-door delivery, both in import and export.",
      image: "/images/services/door-to-door-delivery.jpg",
      icon: "package",
      href: "/services/door-to-door-delivery",
    },
    {
      title: "Warehousing & Distribution",
      description:
        "Secure warehousing and efficient distribution solutions.",
      image: "/images/services/warehousing-distribution.jpg",
      icon: "warehouse",
      href: "/services/warehousing-distribution",
    },
  ] satisfies Service[],

  benefits: [
    {
      icon: "globe",
      title: "Global Network",
      description: "Worldwide Partners",
    },
    {
      icon: "shield-check",
      title: "Secure Handling",
      description: "Safety Guaranteed",
    },
    {
      icon: "clock-3",
      title: "24/7 Support",
      description: "Always Here to Help",
    },
    {
      icon: "chart",
      title: "Cost Effective",
      description: "Optimized for You",
    },
  ] satisfies ServiceBenefit[],
} as const;