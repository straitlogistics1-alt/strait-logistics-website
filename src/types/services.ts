export type ServiceIcon =
  | "ship"
  | "truck"
  | "file"
  | "badge"
  | "stamp"
  | "briefcase"
  | "package"
  | "warehouse";

export interface Service {
  title: string;
  description: string;
  image: string;
  icon: ServiceIcon;
  href: string;
}

export interface ServiceTrustPoint {
  icon: "shield" | "clock" | "users";
  label: string;
}

export interface ServiceBenefit {
  icon: "globe" | "shield-check" | "clock-3" | "chart";
  title: string;
  description: string;
}