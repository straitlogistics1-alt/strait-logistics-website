import {
  Clock3,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { servicesContent } from "@/data/home/services";

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  clock: Clock3,
  users: UsersRound,
};

export function ServicesHighlights() {
  return (
    <div className="mx-auto mt-6 flex max-w-[760px] flex-col items-center justify-center gap-5 sm:flex-row sm:gap-0">
      {servicesContent.highlights.map((item, index) => {
        const Icon = iconMap[item.icon];

        return (
          <div
            key={item.label}
            className="flex items-center gap-3 px-6 sm:border-r sm:border-slate-200 last:sm:border-r-0"
          >
            <Icon
              className="size-5 text-action-primary"
              strokeWidth={2}
            />

            <span className="text-sm font-semibold text-slate-700">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}