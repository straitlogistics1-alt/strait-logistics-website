import {
  CircleDollarSign,
  Clock3,
  FileCheck2,
  Globe2,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { whyChooseContent } from "@/data/home/why-choose";

type AdvantageItem =
  (typeof whyChooseContent.advantages.items)[number];

const iconMap: Record<AdvantageItem["icon"], LucideIcon> = {
  globe: Globe2,
  fileCheck: FileCheck2,
  clock: Clock3,
  circleDollar: CircleDollarSign,
  shield: ShieldCheck,
  users: Users,
};

type WhyChooseAdvantageCardProps = {
  item: AdvantageItem;
};

export function WhyChooseAdvantageCard({
  item,
}: WhyChooseAdvantageCardProps) {
  const Icon = iconMap[item.icon];

  return (
    <article className="group flex min-h-[270px] flex-col rounded-[1rem] border border-border-subtle bg-background-page/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-accent hover:bg-background-subtle/30">
      {/* Icon */}
      <div className="flex size-16 items-center justify-center rounded-xl border border-border-accent bg-action-primary/15 text-text-accent transition-transform duration-300 group-hover:scale-105">
        <Icon
          className="size-8"
          strokeWidth={1.6}
        />
      </div>

      {/* Content */}
      <div className="mt-7">
        <h3 className="text-base font-bold leading-6 text-text-primary">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-text-secondary">
          {item.description}
        </p>
      </div>

      {/* Accent */}
      <div className="mt-auto pt-6">
        <div className="h-[2px] w-6 bg-action-primary transition-all duration-300 group-hover:w-10" />
      </div>
    </article>
  );
}