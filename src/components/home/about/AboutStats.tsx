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
    <div className="mt-10 grid gap-6 sm:grid-cols-3">
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

            <div>
              <p className="text-lg font-bold leading-none text-text-primary">
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