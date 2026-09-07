import { clientsContent } from "@/data/home/clients";

export function ClientsHeader() {
  return (
    <div className="relative mx-auto w-full max-w-[820px] text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-action-primary">
        {clientsContent.eyebrow}
      </p>

      <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,4rem)] font-extrabold leading-[1] tracking-[-0.04em] text-[#1d3557]">
        {clientsContent.title.map((line, index) => (
          <span
            key={line}
            className={index === 1 ? "block text-[#245b9f]" : "block"}
          >
            {line}
          </span>
        ))}
      </h2>

      <p className="mx-auto mt-[clamp(1rem,1.5vw,1.25rem)] w-full max-w-[640px] text-[clamp(0.95rem,1.1vw,1.125rem)] leading-7 text-slate-600 md:leading-8">
        {clientsContent.description}
      </p>

      {/* Accent line */}
      <div className="mx-auto mt-[clamp(1rem,1.5vw,1.25rem)] h-[2px] w-20 bg-action-primary" />
    </div>
  );
}