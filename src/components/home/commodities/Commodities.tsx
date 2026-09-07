import { CommoditiesBenefits } from "./CommoditiesBenefits";
import { CommoditiesCarousel } from "./CommoditiesCarousel";
import { CommoditiesHeader } from "./CommoditiesHeader";

export function Commodities() {
  return (
    <section
      id="commodities"
      className="bg-background-page"
    >
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(1.25rem,4vw,5rem)] py-[clamp(4rem,7vw,7rem)]">
        <CommoditiesHeader />

        <CommoditiesCarousel />

        <CommoditiesBenefits />
      </div>
    </section>
  );
}