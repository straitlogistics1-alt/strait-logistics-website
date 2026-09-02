import {
  CheckCircle2,
  Clock3,
  Globe2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Handled with Care",
    description: "Every shipment matters",
  },
  {
    icon: CheckCircle2,
    title: "Compliance First",
    description: "Documentation expertise",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Connected worldwide",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description: "Keeping business moving",
  },
];

export function CommoditiesBenefits() {
  return (
    <div className="mt-12 grid overflow-hidden rounded-card border border-border-subtle bg-background-elevated sm:grid-cols-2 lg:grid-cols-4">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;

        return (
          <div
            key={benefit.title}
            className={`flex items-center gap-4 px-6 py-6 ${
              index < benefits.length - 1
                ? "border-b border-border-subtle lg:border-r lg:border-b-0"
                : ""
            }`}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-action-primary/15 text-text-accent">
              <Icon
                className="size-5"
                strokeWidth={1.8}
              />
            </div>

            <div>
              <p className="text-sm font-bold text-text-primary">
                {benefit.title}
              </p>

              <p className="mt-1 text-xs leading-5 text-text-secondary">
                {benefit.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}