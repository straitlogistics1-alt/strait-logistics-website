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
    <div className="mx-auto mt-[clamp(1.5rem,2.5vw,2rem)] grid w-full max-w-[900px] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-0">
      {servicesContent.highlights.map((item, index) => {
        const Icon = iconMap[item.icon];

        return (
          <div
            key={item.label}
            className={`flex items-center justify-center gap-3 px-4 py-2 sm:px-5 ${
              index !== servicesContent.highlights.length - 1
                ? "sm:border-r sm:border-slate-200"
                : ""
            }`}
          >
            <Icon
              className="size-5 shrink-0 text-action-primary"
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