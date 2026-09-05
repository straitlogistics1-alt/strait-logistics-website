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
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 md:h-[64px] md:px-8 lg:px-10">
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
            className="h-auto w-[140px] md:w-[155px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`group relative py-2 text-sm font-semibold uppercase tracking-[0.02em] transition-colors duration-300 ${
                index === 0
                  ? "text-brand-accent"
                  : "text-text-on-light-primary hover:text-brand-accent"
              }`}
            >
              {item.label}

              <span
                className={`absolute -bottom-[15px] left-0 h-[2px] bg-action-primary transition-all duration-300 ${
                  index === 0 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* CTA */}
          <a
            href={`mailto:${email}`}
            className="rounded-button bg-action-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.02em] text-white transition-colors duration-300 hover:bg-action-primary-hover"
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
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1280px] flex-col px-5 py-4"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-border-on-light py-4 text-sm font-semibold uppercase tracking-wide text-text-on-light-primary transition-colors hover:text-brand-accent"
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
