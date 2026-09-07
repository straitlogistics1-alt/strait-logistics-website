import Image from "next/image";

import type { ClientItem } from "@/data/home/clients";

type ClientCardProps = {
  client: ClientItem;
};

export function ClientCard({ client }: ClientCardProps) {
  return (
    <article className="flex h-[clamp(120px,11vw,150px)] w-full items-center justify-center px-[clamp(1rem,2vw,2rem)]">
      {client.logo ? (
        <Image
          src={client.logo}
          alt={client.displayName}
          width={220}
          height={110}
          className="h-auto max-h-[clamp(70px,7vw,100px)] w-auto max-w-[clamp(170px,18vw,220px)] object-contain"
          sizes="220px"
        />
      ) : (
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-sm">
            {client.displayName}
          </p>
        </div>
      )}
    </article>
  );
}