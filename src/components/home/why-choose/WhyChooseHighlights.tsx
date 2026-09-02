import {
  BarChart3,
  Settings,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { whyChooseContent } from "@/data/home/why-choose";

const iconMap: Record<
  (typeof whyChooseContent.highlights)[number]["icon"],
  LucideIcon
> = {
  shield: ShieldCheck,
  chart: BarChart3,
  settings: Settings,
  users: Users,
};

export function WhyChooseHighlights() {
  return (
    <div className="mt-8 space-y-5">
      {whyChooseContent.highlights.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <div
            key={item.title}
            className="flex items-start gap-4"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border-accent bg-action-primary/10 text-text-accent">
              <Icon
                className="size-5"
                strokeWidth={1.8}
              />
            </div>

            <div className="pt-0.5">
              <h3 className="text-sm font-bold text-text-primary">
                {item.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-text-secondary md:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}