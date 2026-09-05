"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { commodities } from "@/data/commoditites";
import { CommodityCard } from "./CommodityCard";

export function CommoditiesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const positionRef = useRef(0);
  const setWidthRef = useRef(0);

  const isPausedRef = useRef(false);

  const [isReady, setIsReady] = useState(false);

  // Pixels per second.
  // Lower = slower, higher = faster.
  const SPEED = 40;

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;

    if (!track || !firstSet) {
      return;
    }

    const updateSetWidth = () => {
      setWidthRef.current = firstSet.offsetWidth;

      if (setWidthRef.current > 0) {
        setIsReady(true);
      }
    };

    updateSetWidth();

    const resizeObserver = new ResizeObserver(updateSetWidth);
    resizeObserver.observe(firstSet);

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = Math.min(time - lastTimeRef.current, 50);
      lastTimeRef.current = time;

      const setWidth = setWidthRef.current;

      if (setWidth > 0 && !isPausedRef.current) {
        positionRef.current += (SPEED * delta) / 1000;

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
      lastTimeRef.current = null;
    };
  }, []);

  const moveTrack = (direction: "left" | "right") => {
    const track = trackRef.current;
    const setWidth = setWidthRef.current;

    if (!track || setWidth <= 0) {
      return;
    }

    const amount = 320;

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
    <div
      className="relative mt-12 w-full overflow-hidden"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      {/* Left arrow */}
      <button
        type="button"
        onClick={() => moveTrack("left")}
        aria-label="Scroll commodities left"
        className="absolute left-2 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background-elevated/90 text-text-primary shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-background-subtle hover:text-brand-accent md:left-4"
      >
        <ChevronLeft className="size-5" />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={() => moveTrack("right")}
        aria-label="Scroll commodities right"
        className="absolute right-2 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background-elevated/90 text-text-primary shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-background-subtle hover:text-brand-accent md:right-4"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background-page via-background-page/50 to-transparent md:w-12" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background-page via-background-page/50 to-transparent md:w-12" />

      {/* Carousel viewport */}
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
            className="flex shrink-0 gap-5 pr-5"
          >
            {commodities.map((commodity) => (
              <div
                key={commodity.id}
                className="w-[280px] shrink-0 md:w-[320px]"
              >
                <CommodityCard commodity={commodity} />
              </div>
            ))}
          </div>

          {/* Identical second set */}
          <div
            className="flex shrink-0 gap-5 pr-5"
            aria-hidden="true"
          >
            {commodities.map((commodity) => (
              <div
                key={`duplicate-${commodity.id}`}
                className="w-[280px] shrink-0 md:w-[320px]"
              >
                <CommodityCard commodity={commodity} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}