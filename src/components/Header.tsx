"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { business, navLinks, cta } from "@/config/site";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ocean/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={`${business.name} logo`}
            width={799}
            height={815}
            priority
            className="h-12 w-auto sm:h-14"
          />
          <span className="font-display hidden text-lg font-semibold tracking-tight text-ocean sm:inline">
            {business.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ocean/75 transition-colors hover:text-ocean"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={cta.call.href} variant="ghost" size="sm">
            {cta.call.label}
          </Button>
          <Button href={cta.primaryShort.href} variant="sand" size="sm">
            {cta.primaryShort.label}
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ocean/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-ocean transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`absolute left-0 top-[6px] h-0.5 w-4 bg-ocean transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-4 bg-ocean transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-ocean/10 bg-white px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ocean/85 hover:bg-sand-200/60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <Button href={cta.call.href} variant="ghost" className="flex-1">
              {cta.call.label}
            </Button>
            <Button href={cta.primaryShort.href} variant="sand" className="flex-1">
              {cta.primaryShort.label}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
