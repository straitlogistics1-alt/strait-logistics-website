"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation } from "@/data/navigation";
import { contactInfo } from "@/data/company";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const email = contactInfo.email[0];

  return (
    <header className="sticky top-0 z-50 border-b border-border-on-light bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[clamp(3.75rem,5vw,4.25rem)] w-full max-w-[1600px] items-center justify-between px-[clamp(1.25rem,4vw,5rem)]">
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="relative z-50 shrink-0"
          aria-label="Strait Logistics Home"
        >
          <Image
            src="/images/logo.png"
            alt="Strait Logistics Pvt. Ltd."
            width={210}
            height={70}
            priority
            quality={100}
            className="h-auto w-[clamp(130px,12vw,180px)]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-[clamp(1rem,2.2vw,2rem)] lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`group relative whitespace-nowrap py-2 text-sm font-semibold uppercase tracking-[0.02em] transition-colors duration-300 ${
                index === 0
                  ? "text-brand-accent"
                  : "text-text-on-light-primary hover:text-brand-accent"
              }`}
            >
              {item.label}

              <span
                className={`absolute -bottom-[clamp(10px,1vw,15px)] left-0 h-[2px] bg-action-primary transition-all duration-300 ${
                  index === 0 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* CTA */}
          <a
            href={`mailto:${email}`}
            className="whitespace-nowrap rounded-button bg-action-primary px-[clamp(1rem,1.5vw,1.25rem)] py-2.5 text-sm font-semibold uppercase tracking-[0.02em] text-white transition-colors duration-300 hover:bg-action-primary-hover"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="relative z-50 flex size-9 items-center justify-center rounded-button text-text-on-light-primary transition-colors hover:bg-black/5 lg:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-border-on-light bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-[1600px] flex-col px-[clamp(1.25rem,4vw,5rem)] py-3 sm:py-4"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-border-on-light py-3.5 text-sm font-semibold uppercase tracking-wide text-text-on-light-primary transition-colors hover:text-brand-accent sm:py-4"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <a
            href={`mailto:${email}`}
            onClick={closeMenu}
            className="mt-4 rounded-button bg-action-primary px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-action-primary-hover"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}