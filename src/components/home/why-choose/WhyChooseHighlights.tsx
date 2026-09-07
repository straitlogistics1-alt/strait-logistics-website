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
    <div className="mt-[clamp(2rem,3vw,2.5rem)] space-y-[clamp(1rem,1.5vw,1.25rem)]">
      {whyChooseContent.highlights.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <div
            key={item.title}
            className="flex items-start gap-[clamp(0.75rem,1vw,1rem)]"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border-accent bg-action-primary/10 text-text-accent sm:size-11">
              <Icon
                className="size-5 sm:size-[1.35rem]"
                strokeWidth={1.8}
              />
            </div>

            <div className="min-w-0 pt-0.5">
              <h3 className="text-sm font-bold text-text-primary sm:text-[0.95rem]">
                {item.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-text-secondary sm:text-sm sm:leading-6">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}