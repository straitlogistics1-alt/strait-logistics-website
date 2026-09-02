import { clientsContent } from "@/data/home/clients";

export function ClientsHeader() {
  return (
    <div className="relative mx-auto max-w-[720px] text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-action-primary">
        {clientsContent.eyebrow}
      </p>

      <h2 className="mt-2 text-[clamp(2.5rem,4vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#1d3557]">
        {clientsContent.title.map((line, index) => (
          <span
            key={line}
            className={index === 1 ? "block text-[#245b9f]" : "block"}
          >
            {line}
          </span>
        ))}
      </h2>

      <p className="mx-auto mt-4 max-w-[620px] text-base leading-8 text-slate-600 md:text-lg">
        {clientsContent.description}
      </p>

      {/* Accent line */}
      <div className="mx-auto mt-4 h-[2px] w-20 bg-action-primary" />
    </div>
  );
}