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
    <div className="mt-8 rounded-[1.5rem] border border-border-subtle bg-background-elevated/30 px-5 py-7 md:px-8 lg:mt-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {whyChooseContent.stats.map((stat, index) => {
          const Icon = iconMap[stat.icon];

          return (
            <div
              key={stat.label}
              className={`flex items-center gap-4 lg:px-6 ${
                index !== 0
                  ? "lg:border-l lg:border-border-subtle"
                  : ""
              }`}
            >
              <Icon
                className="size-9 shrink-0 text-text-accent"
                strokeWidth={1.6}
              />

              <div>
                <p className="text-2xl font-extrabold leading-none text-text-primary">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-medium text-text-secondary">
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