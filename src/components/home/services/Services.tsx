import { ServicesHeader } from "./ServicesHeader";
import { ServicesHighlights } from "./ServicesHighlights";
import { ServiceGrid } from "./ServiceGrid";
import { ServicesTrustBar } from "./ServicesTrustBar";

export function Services() {
  return (
    <section
      id="services"
      className="bg-[#f7f9fc]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <ServicesHeader />

        <ServicesHighlights />

        <ServiceGrid />

        <ServicesTrustBar />
      </div>
    </section>
  );
}