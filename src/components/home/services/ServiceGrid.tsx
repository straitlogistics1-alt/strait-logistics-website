import { servicesContent } from "@/data/home/services";

import { ServiceCard } from "./ServiceCard";

export function ServiceGrid() {
  return (
    <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {servicesContent.services.map((service) => (
        <ServiceCard
          key={service.title}
          service={service}
        />
      ))}
    </div>
  );
}