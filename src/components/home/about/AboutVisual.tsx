import Image from "next/image";

import { aboutContent } from "@/data/home/about";

export function AboutVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-white/10">
      <Image
        src={aboutContent.image.src}
        alt={aboutContent.image.alt}
        fill
        sizes="
          (min-width: 1280px) 50vw,
          (min-width: 1024px) 52vw,
          (min-width: 768px) 90vw,
          100vw
        "
        className="object-cover"
      />

      {/* Subtle premium image treatment */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-page/20 via-transparent to-transparent" />
    </div>
  );
}