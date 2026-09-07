import { aboutContent } from "@/data/home/about";

import { AboutStats } from "./AboutStats";

export function AboutContent() {
  const titleLines = aboutContent.title.split("\n");

  return (
    <div className="w-full max-w-[min(100%,620px)]">
      {/* Eyebrow */}
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-accent">
        {aboutContent.eyebrow}
      </p>

      {/* Heading */}
      <h2 className="mt-3 font-heading text-[clamp(2rem,3.8vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-text-primary">
        {titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      {/* Description */}
      <div className="mt-[clamp(1.25rem,2vw,1.75rem)] space-y-4">
        {aboutContent.description.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "text-[clamp(0.95rem,1.1vw,1.05rem)] font-medium leading-[1.75] text-text-primary"
                : "text-[clamp(0.875rem,1vw,1rem)] leading-[1.75] text-text-secondary"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Stats */}
      <AboutStats />
    </div>
  );
}