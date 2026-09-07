export function CommoditiesHeader() {
  return (
    <div className="mx-auto w-full max-w-[min(100%,820px)] text-center">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-accent">
        Commodities
      </p>

      <h2 className="mt-3 font-heading text-[clamp(2rem,3.5vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-text-primary">
        Commodities We Handle
      </h2>

      <p className="mx-auto mt-[clamp(1rem,1.5vw,1.25rem)] w-full max-w-[680px] text-[clamp(0.95rem,1.1vw,1.125rem)] leading-[1.75] text-text-secondary">
        We manage a wide range of commodities with the same commitment to
        care, compliance, and on-time delivery.
      </p>
    </div>
  );
}