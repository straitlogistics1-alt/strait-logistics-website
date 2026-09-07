import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { company, contactInfo } from "@/data/company";
import { navigation } from "@/data/navigation";

export function Footer() {
  const address = [
    ...contactInfo.address.lines,
    `${contactInfo.address.city}, ${contactInfo.address.state} - ${contactInfo.address.postalCode}`,
  ];

  const phoneNumbers = [...contactInfo.phone, ...contactInfo.mobile];
  const email = contactInfo.email[0];

  return (
    <footer className="border-t border-border-subtle bg-background-page">
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(1.25rem,4vw,5rem)] py-[clamp(3rem,5vw,5rem)]">
        <div className="grid gap-[clamp(2.5rem,4vw,4rem)] sm:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_1.2fr_0.8fr]">
          {/* Company */}
          <div>
            <Image
              src="/images/logo.png"
              alt={company.name}
              width={210}
              height={70}
              quality={100}
              className="h-auto w-[clamp(150px,14vw,180px)]"
            />

            <p className="mt-[clamp(1rem,2vw,1.5rem)] w-full max-w-[320px] text-sm leading-7 text-text-secondary">
              Your trusted logistics partner for customs clearance, freight
              forwarding and end-to-end supply chain solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-text-accent">
              Navigation
            </p>

            <nav
              className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3"
              aria-label="Footer navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-text-accent">
              Contact Us
            </p>

            <div className="mt-4 space-y-4 sm:mt-5">
              {/* Address */}
              <Link
                href={contactInfo.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-accent" />

                <span className="text-sm leading-6 text-text-secondary transition-colors group-hover:text-text-primary">
                  {address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </Link>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand-accent" />

                <div className="text-sm leading-6 text-text-secondary">
                  {phoneNumbers.map((phone) => (
                    <span key={phone} className="block">
                      {phone}
                    </span>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-brand-accent" />

                <div className="flex min-w-0 flex-col gap-1">
                  {contactInfo.email.map((email) => (
                    <Link
                      key={email}
                      href={`mailto:${email}`}
                      className="break-all text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {email}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:justify-self-end">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-text-accent">
              Get in Touch
            </p>

            <p className="mt-4 max-w-[260px] text-sm leading-7 text-text-secondary sm:mt-5">
              Have a shipment to move?
              <br />
              We&apos;re here to help.
            </p>

            <Link
              href={`mailto:${email}`}
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-button bg-action-primary px-7 text-xs font-bold uppercase tracking-wide text-text-primary transition-colors hover:bg-action-primary-hover sm:mt-5"
            >
              Send Enquiry
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[clamp(2.5rem,4vw,3.5rem)] border-t border-border-subtle pt-5">
          <p className="text-center text-xs leading-5 text-text-muted">
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}