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
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(1.25rem,4vw,5rem)] py-[clamp(4rem,7vw,7rem)]">
        {/* Top Section */}
        <div className="grid items-center gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-[0.9fr_1.1fr]">
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