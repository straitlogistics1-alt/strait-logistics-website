import Image from "next/image";
import Link from "next/link";

import type { Service } from "@/types/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className="group relative block aspect-[1.28/1] overflow-hidden rounded-[20px]"
    >
      {/* Image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07182d]/95 via-[#07182d]/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

      {/* Subtle blue overlay */}
      <div className="absolute inset-0 bg-[#0b3b6f]/10 transition-colors duration-500 group-hover:bg-[#0b3b6f]/25" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white/75">
          Our Services
        </p>

        <h3 className="mt-3 max-w-[18rem] text-2xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white transition-transform duration-500 ease-out group-hover:-translate-y-1 md:text-[1.7rem]">
          {service.title}
        </h3>

        {/* Hover indicator */}
        <div className="mt-4 h-[2px] w-0 bg-brand-accent transition-all duration-500 group-hover:w-12" />
      </div>
    </Link>
  );
}