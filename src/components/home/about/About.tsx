import { AboutContent } from "./AboutContent";
import { AboutVisual } from "./AboutVisual";

export function About() {
  return (
    <section
      id="about"
      className="bg-background-section"
    >
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(1.25rem,4vw,5rem)] py-[clamp(4rem,7vw,7rem)]">
        <div className="grid items-center gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-[0.95fr_1.05fr]">
          <AboutContent />

          <AboutVisual />
        </div>
      </div>
    </section>
  );
}