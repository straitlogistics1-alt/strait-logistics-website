import Image from "next/image";

export function WhyChooseVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-border-subtle">
      <div className="relative aspect-[1.05/1] min-h-[280px] sm:min-h-[340px] lg:min-h-[clamp(380px,38vw,560px)]">
        <Image
          src="/images/why-choose/logistics-technology.jpg"
          alt="Global logistics technology and cargo operations"
          fill
          sizes="
            (min-width: 1536px) 52vw,
            (min-width: 1024px) 55vw,
            (min-width: 768px) 90vw,
            100vw
          "
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background-page/30 via-transparent to-action-primary/5" />
      </div>
    </div>
  );
}