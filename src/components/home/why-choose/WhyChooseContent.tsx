import { whyChooseContent } from "@/data/home/why-choose";

import { WhyChooseHighlights } from "./WhyChooseHighlights";

export function WhyChooseContent() {
  const titleLines = whyChooseContent.title.split("\n");

  return (
    <div className="max-w-[500px]">
      {/* Eyebrow */}
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-accent">
        {whyChooseContent.eyebrow}
      </p>

      {/* Heading */}
      <h2 className="mt-4 text-[clamp(2.25rem,3.2vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-text-primary">
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
      <div className="mt-4 h-[2px] w-11 bg-action-primary" />

      {/* Description */}
      <p className="mt-4 max-w-[470px] text-sm leading-7 text-text-secondary md:text-base">
        {whyChooseContent.description}
      </p>

      <WhyChooseHighlights />
    </div>
  );
}