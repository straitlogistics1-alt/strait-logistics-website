import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { company, contactInfo } from "@/data/company";

export function Footer() {
  const address = [
    ...contactInfo.address.lines,
    `${contactInfo.address.city}, ${contactInfo.address.state} - ${contactInfo.address.postalCode}`,
  ];

  const phoneNumbers = [...contactInfo.phone, ...contactInfo.mobile];

  return (
    <footer className="border-t border-border-subtle bg-background-page">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.3fr_0.85fr] lg:gap-16">
          {/* Company */}
          <div>
            <Image
              src="/images/logo.png"
              alt={company.name}
              width={210}
              height={70}
              className="h-auto w-[180px]"
            />

            <p className="mt-6 max-w-[290px] text-sm leading-7 text-text-secondary">
              Your trusted logistics partner for customs clearance, freight
              forwarding and end-to-end supply chain solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-text-accent">
              Contact Us
            </p>

            <div className="mt-5 space-y-4">
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

                <div className="flex flex-col gap-1">
                  {contactInfo.email.map((email) => (
                    <Link
                      key={email}
                      href={`mailto:${email}`}
                      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
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

            <p className="mt-5 max-w-[220px] text-sm leading-7 text-text-secondary">
              Have a shipment to move?
              <br />
              We&apos;re here to help.
            </p>

            <Link
              href="#contact"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-button bg-action-primary px-7 text-xs font-bold uppercase tracking-wide text-text-primary transition-colors hover:bg-action-primary-hover"
            >
              Send Enquiry
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border-subtle pt-5">
          <p className="text-center text-xs text-text-muted">
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}