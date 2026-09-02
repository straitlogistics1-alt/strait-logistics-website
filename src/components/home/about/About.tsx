import { AboutContent } from "./AboutContent";
import { AboutVisual } from "./AboutVisual";

export function About() {
  return (
    <section
      id="about"
      className="bg-background-section"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AboutContent />

          <AboutVisual />
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AboutVisual />
          
          <AboutContent />

        </div>
      </div>
    </section>
  );
}