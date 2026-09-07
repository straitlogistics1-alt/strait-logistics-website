import Image from "next/image";

import type { Commodity } from "@/types/company";

import { commodityVisuals } from "./commodityVisuals";

type CommodityCardProps = {
  commodity: Commodity;
};

export function CommodityCard({ commodity }: CommodityCardProps) {
  const visual = commodityVisuals[commodity.id];

  if (!visual) {
    return null;
  }

  return (
    <article
      className="
        group relative aspect-[1.35/1] w-full shrink-0 overflow-hidden
        rounded-[22px]
        border border-white/[0.14]
        bg-[#0d2d52]
        shadow-[0_18px_45px_rgba(0,0,0,0.38)]
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:border-action-primary/60
        hover:shadow-[0_28px_65px_rgba(0,0,0,0.5)]
      "
    >
      {/* Full-card image */}
      <Image
        src={visual.image}
        alt={commodity.name}
        fill
        sizes="
          (min-width: 1536px) 340px,
          (min-width: 1024px) 27vw,
          (min-width: 640px) 45vw,
          85vw
        "
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061a33]/75 via-[#061a33]/20 to-transparent" />

      {/* Hover atmosphere */}
      <div className="absolute inset-0 bg-action-primary/0 transition-colors duration-500 group-hover:bg-action-primary/5" />

      {/* Premium top edge */}
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-white/20" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-[clamp(1.25rem,2vw,1.75rem)]">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/75 transition-colors duration-300 group-hover:text-text-accent">
          Commodities
        </p>

        <h3 className="mt-2 max-w-[280px] text-[clamp(1.4rem,2vw,1.9rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-white">
          {commodity.name}
        </h3>

        <div
          className="
            mt-5 h-[2px] w-11
            bg-action-primary
            shadow-[0_0_12px_rgba(40,120,212,0.45)]
            transition-all duration-500 ease-out
            group-hover:w-20
          "
        />
      </div>
    </article>
  );
}