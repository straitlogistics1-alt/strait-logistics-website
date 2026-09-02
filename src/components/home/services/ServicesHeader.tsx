import { servicesContent } from "@/data/home/services";

export function ServicesHeader() {
  return (
    <div className="mx-auto max-w-[1100px] text-center">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-action-primary">
        {servicesContent.eyebrow}
      </p>

      <h2 className="mt-2 text-[clamp(2rem,3vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-slate-900 lg:whitespace-nowrap">
        {servicesContent.title}
      </h2>

      <p className="mx-auto mt-2 max-w-[680px] text-base leading-7 text-slate-600 md:text-lg">
        {servicesContent.description}
      </p>
    </div>
  );
}