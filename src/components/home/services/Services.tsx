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
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(1.25rem,4vw,5rem)] py-[clamp(4rem,7vw,7rem)]">
        <ServicesHeader />

        <ServicesHighlights />

        <ServiceGrid />

        <ServicesTrustBar />
      </div>
    </section>
  );
}