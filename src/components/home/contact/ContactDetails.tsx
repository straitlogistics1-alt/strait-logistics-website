import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { company, contactInfo } from "@/data/company";
import { contactContent } from "@/data/home/contact";

export function ContactDetails() {
  const phoneNumbers = [
    ...contactInfo.phone,
    ...contactInfo.mobile,
  ];

  return (
    <div className="mt-10 grid max-w-[620px] grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Phone */}
      <article className="group min-h-[150px] rounded-card border border-white/10 bg-background-section p-5 transition-all duration-300 hover:border-border-accent hover:bg-background-elevated">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-action-primary/15 text-text-accent transition-colors duration-300 group-hover:bg-action-primary group-hover:text-white">
            <Phone className="size-5" strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-accent">
              {contactContent.cards.phone.label}
            </p>

            <div className="mt-3 space-y-0.5">
              {phoneNumbers.map((number) => (
                <a
                  key={number}
                  href={`tel:${number.replace(/[^\d+]/g, "")}`}
                  className="block text-sm leading-5 text-text-secondary transition-colors hover:text-text-primary"
                >
                  {number}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Email */}
      <article className="group min-h-[150px] rounded-card border border-white/10 bg-background-section p-5 transition-all duration-300 hover:border-border-accent hover:bg-background-elevated">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-action-primary/15 text-text-accent transition-colors duration-300 group-hover:bg-action-primary group-hover:text-white">
            <Mail className="size-5" strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-accent">
              {contactContent.cards.email.label}
            </p>

            <div className="mt-3 space-y-0.5">
              {contactInfo.email.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block break-all text-sm leading-5 text-text-secondary transition-colors hover:text-text-primary"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Office */}
      <article className="group min-h-[170px] rounded-card border border-white/10 bg-background-section p-5 transition-all duration-300 hover:border-border-accent hover:bg-background-elevated">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-action-primary/15 text-text-accent transition-colors duration-300 group-hover:bg-action-primary group-hover:text-white">
            <MapPin className="size-5" strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-accent">
              {contactContent.cards.office.label}
            </p>

            <address className="mt-3 not-italic text-sm leading-5 text-text-secondary">
              {contactInfo.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}

              <span className="block">
                {contactInfo.address.city} -{" "}
                {contactInfo.address.postalCode},{" "}
                {contactInfo.address.country}
              </span>
            </address>

            <a
              href={contactInfo.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-text-accent transition-colors hover:text-text-primary"
            >
              Get Directions
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>
      </article>

      {/* Support */}
      <article className="group min-h-[170px] rounded-card border border-white/10 bg-background-section p-5 transition-all duration-300 hover:border-border-accent hover:bg-background-elevated">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-action-primary/15 text-text-accent transition-colors duration-300 group-hover:bg-action-primary group-hover:text-white">
            <Clock3 className="size-5" strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-text-accent">
              {contactContent.cards.support.label}
            </p>

            <p className="mt-3 text-sm leading-6 text-text-secondary">
              {company.operations.support}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}