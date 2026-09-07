import {
  Award,
  Clock3,
  Users,
  type LucideIcon,
} from "lucide-react";

import { aboutContent } from "@/data/home/about";

const iconMap: Record<
  (typeof aboutContent.stats)[number]["icon"],
  LucideIcon
> = {
  award: Award,
  users: Users,
  clock: Clock3,
};

export function AboutStats() {
  return (
    <div className="mt-[clamp(2rem,3vw,2.75rem)] grid grid-cols-1 gap-[clamp(1.25rem,2.5vw,2rem)] sm:grid-cols-2 lg:grid-cols-3">
      {aboutContent.stats.map((stat) => {
        const Icon = iconMap[stat.icon];

        return (
          <div
            key={stat.label}
            className="flex items-center gap-3"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-action-primary/15 text-text-accent">
              <Icon
                className="size-5"
                strokeWidth={2}
              />
            </div>

            <div className="min-w-0">
              <p className="text-[clamp(1rem,1.5vw,1.125rem)] font-bold leading-none text-text-primary">
                {stat.value}
              </p>

              <p className="mt-1 text-xs font-medium leading-snug text-text-secondary">
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}