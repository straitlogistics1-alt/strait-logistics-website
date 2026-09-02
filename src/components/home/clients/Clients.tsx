import { ClientsBackground } from "./ClientsBackground";
import { ClientsGrid  } from "./ClientsCarousel";
import { ClientsHeader } from "./ClientsHeader";
import { ClientStats } from "./ClientStats";

export function Clients() {
  return (
    <section
      id="clients"
      className="relative isolate overflow-hidden bg-surface-light"
    >
      <ClientsBackground />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-24 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <ClientsHeader />

        <ClientsGrid  />

        <ClientStats />
      </div>
    </section>
  );
}