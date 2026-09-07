import { ClientsBackground } from "./ClientsBackground";
import { ClientsGrid } from "./ClientsCarousel";
import { ClientsHeader } from "./ClientsHeader";

export function Clients() {
  return (
    <section
      id="clients"
      className="relative isolate overflow-hidden bg-surface-light"
    >
      <ClientsBackground />

      <div className="relative mx-auto w-full max-w-[1600px] px-[clamp(1.25rem,4vw,5rem)] py-[clamp(4rem,7vw,7rem)]">
        <ClientsHeader />

        <ClientsGrid />
      </div>
    </section>
  );
}