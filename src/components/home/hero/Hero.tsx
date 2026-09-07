"use client";

import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Container,
  Globe2,
  Plane,
  Ship,
  Truck,
} from "lucide-react";

import { heroContent } from "@/data/home/hero";

const metrics = [
  {
    value: "25+",
    label: "Years of Excellence",
  },
  {
    value: "100+",
    label: "Happy Clients",
  },
  {
    value: "Global",
    label: "Logistics Network",
  },
  {
    value: "End-to-End",
    label: "Supply Chain Support",
  },
];

const routes = [
  "INDIA → UK",
  "INDIA → USA",
  "INDIA → CANADA",
  "INDIA → EUROPE",
  "INDIA → UAE",
  "INDIA → ASIA",
  "UK → INDIA",
  "USA → INDIA",
];

export function Hero() {
  const titleLines = heroContent.title.split("\n");

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 size-[420px] rounded-full bg-[#2878d4]/5 blur-3xl" />

        <div className="absolute right-0 top-0 size-[520px] rounded-full bg-[#3d96e8]/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#2878d4 1px, transparent 1px), linear-gradient(90deg, #2878d4 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main hero */}
      <div className="relative mx-auto w-full max-w-[1600px] px-[clamp(1.25rem,4vw,5rem)] pb-[clamp(1.5rem,3vw,3rem)] pt-[clamp(1.25rem,2.5vw,2.5rem)]">
        <div className="grid items-center gap-[clamp(2rem,4vw,4rem)] lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          {/* Content */}
          <div className="relative z-10 w-full max-w-[min(100%,620px)]">
            <p className="mb-[clamp(0.75rem,1.5vw,1.25rem)] text-xs font-bold uppercase tracking-[0.2em] text-action-primary">
              Strait Logistics Pvt. Ltd.
            </p>

            <h1 className="font-heading text-[clamp(2.35rem,4.5vw,4.5rem)] font-extrabold leading-[1.01] tracking-[-0.045em] text-[#10243d]">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <div className="mt-[clamp(0.9rem,1.5vw,1.25rem)] h-1 w-[clamp(3rem,4vw,4rem)] rounded-full bg-action-primary" />

            <p className="mt-[clamp(0.9rem,1.5vw,1.5rem)] max-w-[570px] text-[clamp(0.9rem,1.1vw,1.125rem)] font-medium leading-[1.8] text-[#526174]">
              {heroContent.description}
            </p>

            <div className="mt-[clamp(1.25rem,2vw,1.75rem)] flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={heroContent.primaryAction.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-button bg-action-primary px-6 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-action-primary-hover hover:shadow-md sm:h-12 sm:px-7"
              >
                {heroContent.primaryAction.label}

                <ArrowRight
                  className="size-4"
                  strokeWidth={2.5}
                />
              </Link>

              <a
                href={heroContent.secondaryAction.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-button border border-[#10243d]/15 bg-white px-6 text-sm font-bold uppercase tracking-wide text-[#10243d] transition-all duration-300 hover:border-action-primary hover:text-action-primary sm:h-12 sm:px-7"
              >
                {heroContent.secondaryAction.label}

                <ArrowRight
                  className="size-4"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </div>

          {/* Logistics illustration */}
          <div className="relative min-h-[clamp(280px,34vw,430px)] w-full">
            {/* Large globe */}
            <div className="absolute right-[3%] top-1/2 flex size-[clamp(250px,31vw,430px)] -translate-y-1/2 items-center justify-center rounded-full border border-[#2878d4]/20 bg-gradient-to-br from-[#eaf4ff] via-white to-[#dceeff] shadow-[0_25px_80px_rgba(40,120,212,0.12)]">
              <div className="absolute inset-[5%] rounded-full border border-[#2878d4]/10" />

              <div className="absolute inset-[13%] rounded-full border border-dashed border-[#2878d4]/15" />

              <Globe2
                className="size-[68%] text-[#2878d4]/25"
                strokeWidth={0.7}
              />

              {/* Orbit */}
              <div className="absolute inset-[10%] rotate-[-18deg] rounded-full border-2 border-[#3d96e8]/20" />

              {/* Route dots */}
              <span className="absolute left-[18%] top-[34%] size-3 rounded-full bg-action-primary shadow-[0_0_0_6px_rgba(40,120,212,0.08)]" />

              <span className="absolute right-[20%] top-[28%] size-3 rounded-full bg-action-primary shadow-[0_0_0_6px_rgba(40,120,212,0.08)]" />

              <span className="absolute bottom-[25%] right-[28%] size-3 rounded-full bg-[#3d96e8] shadow-[0_0_0_6px_rgba(61,150,232,0.08)]" />
            </div>

            {/* Ship */}
            <div className="absolute bottom-[7%] left-[4%] flex size-[clamp(3.5rem,6vw,6rem)] items-center justify-center rounded-2xl border border-[#2878d4]/15 bg-white shadow-xl shadow-[#2878d4]/10">
              <Ship
                className="size-[55%] text-action-primary"
                strokeWidth={1.5}
              />
            </div>

            {/* Container */}
            <div className="absolute left-[18%] top-[8%] flex size-[clamp(3.25rem,5vw,5rem)] items-center justify-center rounded-2xl border border-[#2878d4]/10 bg-white shadow-lg shadow-[#2878d4]/10">
              <Container
                className="size-[50%] text-[#3d96e8]"
                strokeWidth={1.5}
              />
            </div>

            {/* Boxes */}
            <div className="absolute bottom-[13%] right-[3%] flex size-[clamp(3.25rem,5vw,5rem)] items-center justify-center rounded-2xl border border-[#2878d4]/10 bg-white shadow-lg shadow-[#2878d4]/10">
              <Boxes
                className="size-[50%] text-action-primary"
                strokeWidth={1.5}
              />
            </div>

            {/* Plane */}
            <div className="absolute right-[9%] top-[8%] flex size-[clamp(3.25rem,5vw,4rem)] rotate-[-18deg] items-center justify-center rounded-full bg-action-primary text-white shadow-lg shadow-[#2878d4]/20">
              <Plane
                className="size-[50%]"
                strokeWidth={1.7}
              />
            </div>

            {/* Truck */}
            <div className="absolute bottom-[2%] left-[42%] flex size-[clamp(3rem,4vw,4rem)] items-center justify-center rounded-full border border-[#2878d4]/10 bg-white shadow-lg shadow-[#2878d4]/10">
              <Truck
                className="size-[50%] text-[#245b9f]"
                strokeWidth={1.5}
              />
            </div>

            {/* Route lines */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 600 500"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M105 360 C180 270, 210 170, 300 135 C390 100, 455 145, 500 105"
                stroke="#2878d4"
                strokeWidth="2"
                strokeDasharray="6 8"
                opacity="0.35"
              />

              <path
                d="M150 390 C245 430, 320 390, 390 330 C445 285, 475 250, 515 220"
                stroke="#3d96e8"
                strokeWidth="2"
                strokeDasharray="5 9"
                opacity="0.25"
              />
            </svg>
          </div>
        </div>

        {/* Metrics */}
        <div className="relative z-20 mt-[clamp(1.5rem,3vw,2.5rem)] overflow-hidden rounded-2xl border border-[#10243d]/10 bg-white shadow-[0_18px_50px_rgba(16,36,61,0.10)]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`flex items-center gap-3 px-5 py-4 md:gap-4 md:px-6 md:py-5 ${
                  index !== 0
                    ? "border-t border-[#10243d]/10 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2878d4]/8 text-action-primary md:size-11">
                  {index === 0 && (
                    <Globe2
                      className="size-5"
                      strokeWidth={1.8}
                    />
                  )}

                  {index === 1 && (
                    <Boxes
                      className="size-5"
                      strokeWidth={1.8}
                    />
                  )}

                  {index === 2 && (
                    <Ship
                      className="size-5"
                      strokeWidth={1.8}
                    />
                  )}

                  {index === 3 && (
                    <Truck
                      className="size-5"
                      strokeWidth={1.8}
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <p className="font-heading text-xl font-extrabold leading-none text-[#10243d] md:text-2xl">
                    {metric.value}
                  </p>

                  <p className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#526174] md:text-xs">
                    {metric.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Routes ticker */}
          <div className="border-t border-[#10243d]/10 bg-[#f8fbff]">
            <div className="flex items-center gap-3 border-b border-[#10243d]/5 px-4 py-2.5 md:px-5 md:py-3">
              <Globe2
                className="size-4 shrink-0 text-action-primary"
                strokeWidth={1.8}
              />

              <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#526174] md:text-xs">
                Global Trade Routes
              </span>
            </div>

            <div className="relative overflow-hidden py-2.5 md:py-3">
              <div className="flex w-max animate-hero-routes">
                {[...routes, ...routes].map((route, index) => (
                  <div
                    key={`${route}-${index}`}
                    className="flex items-center"
                  >
                    <span className="mx-4 whitespace-nowrap text-xs font-semibold text-[#526174] md:mx-5 md:text-sm">
                      {route}
                    </span>

                    <span className="size-1.5 shrink-0 rounded-full bg-action-primary/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Route animation */}
      <style jsx>{`
        @keyframes hero-routes {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-hero-routes {
          animation: hero-routes 28s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-hero-routes {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}