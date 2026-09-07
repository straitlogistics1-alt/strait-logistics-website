import { whyChooseContent } from "@/data/home/why-choose";

import { WhyChooseAdvantageCard } from "./WhyChooseAdvantageCard";

export function WhyChooseAdvantages() {
  const { advantages } = whyChooseContent;

  return (
    <div className="mt-[clamp(3rem,5vw,5rem)] rounded-[1.5rem] border border-border-subtle bg-background-elevated/35 px-[clamp(1rem,2vw,1.5rem)] py-[clamp(2rem,4vw,3rem)]">
      {/* Heading */}
      <div className="mx-auto w-full max-w-[800px] text-center">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-accent">
          {advantages.eyebrow}
        </p>

        <h2 className="mt-3 font-heading text-[clamp(1.75rem,2.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-text-primary">
          {advantages.title}
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-[clamp(2rem,3vw,2.5rem)] grid grid-cols-1 gap-[clamp(0.75rem,1vw,1rem)] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
        {advantages.items.map((item) => (
          <WhyChooseAdvantageCard
            key={item.title}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}