import { WhyChooseAdvantages } from "./WhyChooseAdvantages";
import { WhyChooseContent } from "./WhyChooseContent";
import { WhyChooseStats } from "./WhyChooseStats";
import { WhyChooseVisual } from "./WhyChooseVisual";

export function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="bg-background-page"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
        {/* Top Section */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <WhyChooseContent />

          <WhyChooseVisual />
        </div>

        {/* Advantages */}
        <WhyChooseAdvantages />

        {/* Statistics */}
        <WhyChooseStats />
      </div>
    </section>
  );
}