import Image from "next/image";

import type { ClientItem } from "@/data/home/clients";

type ClientCardProps = {
  client: ClientItem;
};

export function ClientCard({ client }: ClientCardProps) {
  return (
    <article className="flex h-[150px] w-full items-center justify-center px-8">
      {client.logo ? (
        <Image
          src={client.logo}
          alt={client.displayName}
          width={220}
          height={110}
          className="h-auto max-h-[100px] w-auto max-w-[220px] object-contain"
        />
      ) : (
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
            {client.displayName}
          </p>
        </div>
      )}
    </article>
  );
}