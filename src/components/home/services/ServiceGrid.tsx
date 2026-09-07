import { servicesContent } from "@/data/home/services";

import { ServiceCard } from "./ServiceCard";

export function ServiceGrid() {
  return (
    <div className="mt-[clamp(2rem,4vw,3.5rem)] grid grid-cols-1 gap-[clamp(1rem,1.5vw,1.5rem)] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {servicesContent.services.map((service) => (
        <ServiceCard
          key={service.title}
          service={service}
        />
      ))}
    </div>
  );
}