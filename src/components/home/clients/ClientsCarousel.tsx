"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { clientsContent } from "@/data/home/clients";
import { ClientCard } from "./ClientCard";

export function ClientsGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const setWidthRef = useRef(0);
  const viewportWidthRef = useRef(0);

  const [isReady, setIsReady] = useState(false);

  // Pixels per second.
  const SPEED = 45;

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;

    if (!track || !firstSet) {
      return;
    }

    const updateDimensions = () => {
      setWidthRef.current = firstSet.offsetWidth;
      viewportWidthRef.current = window.innerWidth;

      if (setWidthRef.current > 0) {
        setIsReady(true);
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(firstSet);

    window.addEventListener("resize", updateDimensions);

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = Math.min(time - lastTimeRef.current, 50);
      lastTimeRef.current = time;

      const setWidth = setWidthRef.current;

      if (setWidth > 0) {
        positionRef.current += (SPEED * delta) / 1000;

        // Seamlessly loop after exactly one complete set.
        if (positionRef.current >= setWidth) {
          positionRef.current -= setWidth;
        }

        track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDimensions);
      lastTimeRef.current = null;
    };
  }, []);

  const moveTrack = (direction: "left" | "right") => {
    const track = trackRef.current;
    const setWidth = setWidthRef.current;

    if (!track || setWidth <= 0) {
      return;
    }

    const viewportWidth = viewportWidthRef.current;

    // Responsive movement amount.
    const amount = Math.min(
      Math.max(viewportWidth * 0.2, 180),
      320
    );

    if (direction === "right") {
      positionRef.current += amount;

      if (positionRef.current >= setWidth) {
        positionRef.current -= setWidth;
      }
    } else {
      positionRef.current -= amount;

      if (positionRef.current < 0) {
        positionRef.current += setWidth;
      }
    }

    track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
  };

  return (
    <div className="relative mt-[clamp(2rem,4vw,3.5rem)] w-full">
      {/* Left arrow */}
      <button
        type="button"
        onClick={() => moveTrack("left")}
        aria-label="Scroll clients left"
        className="absolute left-1 top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-brand-accent sm:left-2 sm:size-10 md:left-4"
      >
        <ChevronLeft className="size-4 sm:size-5" />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={() => moveTrack("right")}
        aria-label="Scroll clients right"
        className="absolute right-1 top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-brand-accent sm:right-2 sm:size-10 md:right-4"
      >
        <ChevronRight className="size-4 sm:size-5" />
      </button>

      {/* Viewport */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className={`flex w-max items-center will-change-transform ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* First set */}
          <div
            ref={firstSetRef}
            className="flex shrink-0 items-center gap-[clamp(0.75rem,2.5vw,3.5rem)] pr-[clamp(0.75rem,2.5vw,3.5rem)]"
          >
            {clientsContent.clients.map((client) => (
              <div
                key={client.id}
                className="w-[clamp(180px,20vw,270px)] shrink-0"
              >
                <ClientCard client={client} />
              </div>
            ))}
          </div>

          {/* Identical second set */}
          <div
            className="flex shrink-0 items-center gap-[clamp(0.75rem,2.5vw,3.5rem)] pr-[clamp(0.75rem,2.5vw,3.5rem)]"
            aria-hidden="true"
          >
            {clientsContent.clients.map((client) => (
              <div
                key={client.id}
                className="w-[clamp(180px,20vw,270px)] shrink-0"
              >
                <ClientCard client={client} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-surface-light to-transparent sm:w-14 md:w-24" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-surface-light to-transparent sm:w-14 md:w-24" />
    </div>
  );
}