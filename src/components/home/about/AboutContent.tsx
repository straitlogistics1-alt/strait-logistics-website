import { aboutContent } from "@/data/home/about";

import { AboutStats } from "./AboutStats";

export function AboutContent() {
  const titleLines = aboutContent.title.split("\n");

  return (
    <div className="max-w-[580px]">
      {/* Eyebrow */}
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-accent">
        {aboutContent.eyebrow}
      </p>

      {/* Heading */}
      <h2 className="mt-3 font-heading text-[clamp(2rem,3vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-text-primary">
        {titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      {/* Description */}
      <div className="mt-7 space-y-4">
        {aboutContent.description.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "text-base font-medium leading-7 text-text-primary md:text-[1.05rem]"
                : "text-sm leading-6 text-text-secondary md:text-base md:leading-7"
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