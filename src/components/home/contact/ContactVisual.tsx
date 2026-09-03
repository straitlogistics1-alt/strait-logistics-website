import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { contactInfo } from "@/data/company";
import { contactContent } from "@/data/home/contact";

export function ContactVisual() {
  const primaryEmail = contactInfo.email[0];

  return (
    <div className="relative overflow-hidden rounded-card border border-border-accent bg-background-elevated">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(61,150,232,0.16),transparent_32%),radial-gradient(circle_at_25%_80%,rgba(40,120,212,0.12),transparent_36%)]" />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[38%] top-[10%] h-px w-[55%] rotate-[8deg] bg-brand-accent/40" />
          <div className="absolute left-[42%] top-[24%] h-px w-[42%] rotate-[-12deg] bg-brand-accent/30" />
          <div className="absolute left-[52%] top-[45%] h-px w-[38%] rotate-[18deg] bg-brand-accent/30" />

          <span className="absolute left-[48%] top-[21%] size-2 rounded-full bg-brand-accent shadow-[0_0_18px_rgba(61,150,232,0.8)]" />
          <span className="absolute left-[67%] top-[31%] size-2 rounded-full bg-brand-accent shadow-[0_0_18px_rgba(61,150,232,0.8)]" />
          <span className="absolute left-[58%] top-[56%] size-2 rounded-full bg-brand-accent shadow-[0_0_18px_rgba(61,150,232,0.8)]" />
        </div>
      </div>

      <div className="relative flex min-h-[460px] flex-col justify-between p-7 md:p-8">
        {/* Top icon */}
        <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-brand-accent/50 bg-background-page/60 text-brand-accent backdrop-blur-sm">
          <Phone className="size-6" strokeWidth={1.8} />
        </div>

        {/* Notebook */}
        <div className="pointer-events-none absolute right-[-4%] top-[17%] w-[64%] rotate-[9deg] rounded-[10px] border border-white/10 bg-[#102b4c] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
          <div className="absolute left-[-7px] top-0 h-full w-2 rounded-l-full bg-[#071c34]" />

          <div className="flex aspect-[1.15/1] items-center justify-center border border-white/10 bg-[#0d2745]">
            <div className="text-center">
              <Image
                src="/images/logo.png"
                alt="Strait Logistics Pvt. Ltd."
                width={210}
                height={70}
                className="mx-auto h-auto w-[150px] opacity-90"
              />

              <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.28em] text-white/50">
                Logistics Pvt. Ltd.
              </p>
            </div>
          </div>

          {/* Pen */}
          <div className="absolute -bottom-16 -right-8 h-40 w-[5px] rotate-[12deg] rounded-full bg-gradient-to-b from-[#d8b36a] via-[#111827] to-[#d8b36a] shadow-lg" />
        </div>

        {/* Copy */}
        <div className="relative z-10 mt-auto max-w-[280px] pt-44">
          <h3 className="text-[clamp(2rem,3vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-text-primary">
            {contactContent.visual.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>

          <p className="mt-5 max-w-[260px] text-sm leading-6 text-text-secondary">
            {contactContent.visual.description}
          </p>

          <div className="mt-6 h-[2px] w-12 bg-action-primary" />

          <Link
            href={`mailto:${primaryEmail}`}
            className="mt-6 inline-flex h-11 items-center gap-3 rounded-button border border-action-primary/70 bg-action-primary/10 px-5 text-xs font-bold uppercase tracking-[0.08em] text-text-primary transition-all duration-300 hover:bg-action-primary hover:text-white"
          >
            Talk to an Expert
            <ArrowRight className="size-4" strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </div>
  );
}