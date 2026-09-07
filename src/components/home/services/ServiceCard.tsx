import Image from "next/image";

import type { Service } from "@/types/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative block aspect-[1.28/1] w-full overflow-hidden rounded-[20px]">
      {/* Image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="
          (min-width: 1536px) 25vw,
          (min-width: 1024px) 33vw,
          (min-width: 640px) 50vw,
          100vw
        "
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07182d]/95 via-[#07182d]/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

      {/* Subtle blue overlay */}
      <div className="absolute inset-0 bg-[#0b3b6f]/10 transition-colors duration-500 group-hover:bg-[#0b3b6f]/25" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-[clamp(1.25rem,2vw,1.75rem)]">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white/75">
          Our Services
        </p>

        <h3 className="mt-3 max-w-[18rem] text-[clamp(1.35rem,2vw,1.7rem)] font-extrabold leading-[1.08] tracking-[-0.025em] text-white transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {service.title}
        </h3>

        {/* Hover indicator */}
        <div className="mt-4 h-[2px] w-0 bg-brand-accent transition-all duration-500 group-hover:w-12" />
      </div>
    </article>
  );
}