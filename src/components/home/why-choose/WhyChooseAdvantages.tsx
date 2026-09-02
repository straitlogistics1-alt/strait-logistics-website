import { whyChooseContent } from "@/data/home/why-choose";

import { WhyChooseAdvantageCard } from "./WhyChooseAdvantageCard";

export function WhyChooseAdvantages() {
  const { advantages } = whyChooseContent;

  return (
    <div className="mt-14 rounded-[1.5rem] border border-border-subtle bg-background-elevated/35 px-6 py-10 md:px-8 md:py-12 lg:mt-20 lg:px-6">
      {/* Heading */}
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-accent">
          {advantages.eyebrow}
        </p>

        <h2 className="mt-3 text-[clamp(1.75rem,2.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-text-primary">
          {advantages.title}
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
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