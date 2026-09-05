import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { heroContent } from "@/data/home/hero";

export function Hero() {
  const titleLines = heroContent.title.split("\n");

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-background-page"
    >
      {/* Background Image */}
      <Image
        src="/images/hero/logistics-hero.jpg"
        alt="Cargo ship at a container port"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Left-side gradient for text readability */}
       <div className="absolute inset-0 bg-gradient-to-r from-[#061a33]/80 via-[#061a33]/45 to-transparent" />

       {/* Subtle overall image treatment */}
       <div className="absolute inset-0 bg-[#061a33]/10" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[500px] w-full max-w-[1440px] items-center px-5 py-16 md:min-h-[560px] md:px-8 lg:min-h-[620px] lg:px-10">
        <div className="max-w-[620px]">
          {/* Heading */}
          <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-heading font-extrabold uppercase leading-[1.08] tracking-[-0.035em] text-text-primary">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[500px] text-base font-medium leading-8 text-text-secondary md:text-lg">
            {heroContent.description}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={heroContent.primaryAction.href}
              className="inline-flex h-13 items-center justify-center rounded-button bg-action-primary px-8 text-sm font-bold uppercase tracking-wide text-text-primary transition-colors duration-300 hover:bg-action-primary-hover"
            >
              {heroContent.primaryAction.label}
            </Link>

            <Link
              href={heroContent.secondaryAction.href}
              className="inline-flex h-13 items-center justify-center gap-3 rounded-button border border-white/40 bg-white/5 px-8 text-sm font-bold uppercase tracking-wide text-text-primary backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
            >
              {heroContent.secondaryAction.label}

              <ArrowRight
                className="size-4"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}