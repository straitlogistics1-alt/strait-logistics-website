"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { clientsContent } from "@/data/home/clients";

import { ClientCard } from "./ClientCard";

export function ClientsGrid() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Pixels per second.
  // Increase this number to make the carousel faster.
  const SPEED = 55;

  useEffect(() => {
    const carousel = carouselRef.current;
    const firstSet = firstSetRef.current;

    if (!carousel || !firstSet) {
      return;
    }

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      const setWidth = firstSet.offsetWidth;

      if (setWidth > 0) {
        carousel.scrollLeft += (SPEED * delta) / 1000;

        /*
         * Once we've travelled exactly one complete set,
         * jump back by that set's width.
         *
         * Because the second set is identical to the first,
         * this jump is invisible and creates a continuous loop.
         */
        if (carousel.scrollLeft >= setWidth) {
          carousel.scrollLeft -= setWidth;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      lastTimeRef.current = null;
    };
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    const firstSet = firstSetRef.current;

    if (!carousel || !firstSet) {
      return;
    }

    const amount = 300;
    const setWidth = firstSet.offsetWidth;

    if (direction === "right") {
      carousel.scrollLeft += amount;

      if (carousel.scrollLeft >= setWidth) {
        carousel.scrollLeft -= setWidth;
      }
    } else {
      carousel.scrollLeft -= amount;

      if (carousel.scrollLeft < 0) {
        carousel.scrollLeft += setWidth;
      }
    }
  };

  return (
    <div className="relative mt-10 w-full">
      {/* Left arrow */}
      <button
        type="button"
        onClick={() => scrollByAmount("left")}
        aria-label="Scroll clients left"
        className="absolute left-2 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-brand-accent md:left-4"
      >
        <ChevronLeft className="size-5" />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={() => scrollByAmount("right")}
        aria-label="Scroll clients right"
        className="absolute right-2 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-brand-accent md:right-4"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Carousel viewport */}
      <div
        ref={carouselRef}
        className="w-full overflow-hidden"
      >
        <div className="flex w-max items-center">
          {/* First set */}
          <div
            ref={firstSetRef}
            className="flex shrink-0 items-center gap-6 pr-6 md:gap-10 md:pr-10 lg:gap-14 lg:pr-14"
          >
            {clientsContent.clients.map((client) => (
              <div
                key={client.id}
                className="w-[220px] shrink-0 md:w-[250px] lg:w-[270px]"
              >
                <ClientCard client={client} />
              </div>
            ))}
          </div>

          {/* Identical second set */}
          <div
            className="flex shrink-0 items-center gap-6 pr-6 md:gap-10 md:pr-10 lg:gap-14 lg:pr-14"
            aria-hidden="true"
          >
            {clientsContent.clients.map((client) => (
              <div
                key={client.id}
                className="w-[220px] shrink-0 md:w-[250px] lg:w-[270px]"
              >
                <ClientCard client={client} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-surface-light to-transparent md:w-24" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-surface-light to-transparent md:w-24" />
    </div>
  );
}