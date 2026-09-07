import { servicesContent } from "@/data/home/services";

export function ServicesHeader() {
  return (
    <div className="mx-auto w-full max-w-[min(100%,1000px)] text-center">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-action-primary">
        {servicesContent.eyebrow}
      </p>

      <h2 className="mt-2 font-heading text-[clamp(2rem,3.5vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-900">
        {servicesContent.title}
      </h2>

      <p className="mx-auto mt-3 w-full max-w-[680px] text-[clamp(0.95rem,1.1vw,1.125rem)] leading-[1.75] text-slate-600">
        {servicesContent.description}
      </p>
    </div>
  );
}