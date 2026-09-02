import { commodities } from "@/data/commoditites";

import { CommodityCard } from "./CommodityCard";

export function CommoditiesCarousel() {
  return (
    <div className="relative mt-12 w-full overflow-hidden">
      {/* Very subtle edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background-page via-background-page/50 to-transparent md:w-10" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background-page via-background-page/50 to-transparent md:w-10" />

      <div className="flex w-max animate-commodities-scroll hover:[animation-play-state:paused]">
        <div className="flex shrink-0 gap-5 pr-5">
          {commodities.map((commodity) => (
            <div
              key={commodity.id}
              className="w-[280px] shrink-0 md:w-[320px]"
            >
              <CommodityCard commodity={commodity} />
            </div>
          ))}
        </div>

        <div
          className="flex shrink-0 gap-5 pr-5"
          aria-hidden="true"
        >
          {commodities.map((commodity) => (
            <div
              key={`duplicate-${commodity.id}`}
              className="w-[280px] shrink-0 md:w-[320px]"
            >
              <CommodityCard commodity={commodity} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}