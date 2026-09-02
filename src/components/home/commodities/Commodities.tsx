import { CommoditiesBenefits } from "./CommoditiesBenefits";
import { CommoditiesCarousel } from "./CommoditiesCarousel";
import { CommoditiesHeader } from "./CommoditiesHeader";

export function Commodities() {
  return (
    <section
      id="commodities"
      className="bg-background-page"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <CommoditiesHeader />

        <CommoditiesCarousel />

        <CommoditiesBenefits />
      </div>
    </section>
  );
}