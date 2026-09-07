import {
  Award,
  Globe2,
  Headphones,
  Ship,
  Users,
  type LucideIcon,
} from "lucide-react";

import { whyChooseContent } from "@/data/home/why-choose";

const iconMap: Record<
  (typeof whyChooseContent.stats)[number]["icon"],
  LucideIcon
> = {
  award: Award,
  users: Users,
  ship: Ship,
  globe: Globe2,
  headphones: Headphones,
};

export function WhyChooseStats() {
  return (
    <div className="mt-[clamp(2rem,3vw,2.5rem)] rounded-[1.5rem] border border-border-subtle bg-background-elevated/30 px-[clamp(1rem,2vw,2rem)] py-[clamp(1.5rem,3vw,2rem)] lg:mt-[clamp(2.5rem,3vw,3rem)]">
      <div className="grid gap-[clamp(1.25rem,2vw,1.5rem)] sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {whyChooseContent.stats.map((stat, index) => {
          const Icon = iconMap[stat.icon];

          return (
            <div
              key={stat.label}
              className={`flex items-center gap-4 lg:px-[clamp(1rem,1.5vw,1.5rem)] ${
                index !== 0
                  ? "lg:border-l lg:border-border-subtle"
                  : ""
              }`}
            >
              <Icon
                className="size-8 shrink-0 text-text-accent sm:size-9"
                strokeWidth={1.6}
              />

              <div className="min-w-0">
                <p className="text-[clamp(1.5rem,2vw,1.75rem)] font-extrabold leading-none text-text-primary">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-medium leading-5 text-text-secondary">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}