import Image from "next/image";

export function WhyChooseVisual() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-border-subtle">
      <div className="relative aspect-[1.05/1] min-h-[420px]">
        <Image
          src="/images/why-choose/logistics-technology.jpg"
          alt="Global logistics technology and cargo operations"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background-page/30 via-transparent to-action-primary/5" />
      </div>
    </div>
  );
}