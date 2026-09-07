import { whyChooseContent } from "@/data/home/why-choose";

import { WhyChooseHighlights } from "./WhyChooseHighlights";

export function WhyChooseContent() {
  const titleLines = whyChooseContent.title.split("\n");

  return (
    <div className="w-full max-w-[620px]">
      {/* Eyebrow */}
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-accent">
        {whyChooseContent.eyebrow}
      </p>

      {/* Heading */}
      <h2 className="mt-3 font-heading text-[clamp(2rem,3.8vw,3.75rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-text-primary">
        {titleLines.map((line) => (
          <span
            key={line}
            className="block"
          >
            {line}
          </span>
        ))}
      </h2>

      {/* Accent line */}
      <div className="mt-[clamp(1rem,1.5vw,1.25rem)] h-[2px] w-11 bg-action-primary" />

      {/* Description */}
      <p className="mt-[clamp(1rem,1.5vw,1.25rem)] w-full max-w-[520px] text-[clamp(0.95rem,1vw,1rem)] leading-7 text-text-secondary">
        {whyChooseContent.description}
      </p>

      <WhyChooseHighlights />
    </div>
  );
}