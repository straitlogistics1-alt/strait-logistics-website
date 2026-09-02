import Image from "next/image";
import { Users } from "lucide-react";

import type { ClientItem } from "@/data/home/clients";

type ClientCardProps = {
  client: ClientItem;
};

export function ClientCard({ client }: ClientCardProps) {
  return (
    <article className="group relative aspect-[1.18/1] overflow-hidden rounded-[22px]">
      {/* Full-card background image */}
      {client.logo ? (
        <Image
          src={client.image}
          alt={client.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-slate-900">
          <div className="flex h-full items-center justify-center">
            <Users
              className="size-16 text-white/80"
              strokeWidth={1.5}
            />
          </div>
        </div>
      )}

      {/* Dark overlay 
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />*/}

      {/* Content directly over image */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/70">
          Our Valued Clients
        </p>

        <h3 className="mt-3 max-w-[280px] text-[clamp(1.75rem,2.4vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
          {client.displayName}
        </h3>

        <div className="mt-6 h-[3px] w-12 bg-brand-accent transition-all duration-300 group-hover:w-20" />
      </div>
    </article>
  );
}