import { clientsContent } from "@/data/home/clients";

import { ClientCard } from "./ClientCard";

export function ClientsGrid() {
  return (
    <div className="relative mt-6 w-full overflow-hidden">
      {/* Very subtle edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background-page via-background-page/50 to-transparent md:w-10" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background-page via-background-page/50 to-transparent md:w-10" />

      <div className="flex w-max animate-commodities-scroll hover:[animation-play-state:paused]">
        <div className="flex shrink-0 gap-5 pr-5">
          {clientsContent.clients.map((client) => (
            <div
              className="w-[280px] shrink-0 md:w-[320px]"
              key={client.name}
            >
              <ClientCard
                key={client.name}
                client={client}
              />
            </div>
          ))}
        </div>

        <div
          className="flex shrink-0 gap-5 pr-5"
          aria-hidden="true"
        >
          {clientsContent.clients.map((client) => (
            <div
              className="w-[280px] shrink-0 md:w-[320px]"
              key={client.name}
            >
              <ClientCard
                key={client.name}
                client={client}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}