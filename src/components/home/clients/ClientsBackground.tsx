import Image from "next/image";

export function ClientsBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* World map */}
      <div className="absolute inset-x-0 top-0 h-[clamp(300px,32vw,480px)] opacity-40">
        <Image
          src="/images/clients/world-map.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Left glow */}
      <div className="absolute left-[-20%] top-[8%] size-[clamp(300px,40vw,500px)] rounded-full bg-action-primary/10 blur-[clamp(90px,10vw,140px)]" />

      {/* Right glow */}
      <div className="absolute right-[-20%] top-[5%] size-[clamp(300px,40vw,500px)] rounded-full bg-brand-accent/10 blur-[clamp(90px,10vw,140px)]" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-b from-transparent to-surface-light/90" />
    </div>
  );
}