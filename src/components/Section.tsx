import { ReactNode } from "react";
import { stats, heroBadges, cta, photos } from "@/config/site";
import Button from "./Button";
import SwellLine from "./SwellLine";
import BgPhoto from "./BgPhoto";
import Reveal from "./Reveal";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p className={`eyebrow ${tone === "dark" ? "text-cyan" : "text-cyan-bright"}`}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          tone === "light" ? "text-white" : "text-ocean"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${tone === "light" ? "text-sand/80" : "text-ocean/70"}`}>
          {body}
        </p>
      )}
    </Reveal>
  );
}

export function TrustBadges({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {heroBadges.map((b) => (
        <li
          key={b}
          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${
            tone === "light"
              ? "border-white/25 bg-white/10 text-white backdrop-blur"
              : "border-ocean/15 bg-ocean/5 text-ocean"
          }`}
        >
          {b}
        </li>
      ))}
    </ul>
  );
}

export function StatBar() {
  return (
    <Reveal className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="font-display text-3xl text-ocean sm:text-4xl">{s.value}</div>
          <div className="mt-1 text-sm text-ocean/60">{s.label}</div>
        </div>
      ))}
    </Reveal>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <SwellLine className={className} />;
}

export function CTABand() {
  return (
    <div className="relative overflow-hidden bg-ocean">
      <BgPhoto src={photos.ctaBand.src} alt={photos.ctaBand.alt} className="opacity-60" />
      <div className="hero-wash absolute inset-0" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <Divider className="relative" />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:py-20 lg:px-8">
        <h2 className="font-display text-3xl text-white sm:text-4xl lg:text-5xl">
          Your First Wave Starts Here
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-sand/80 sm:text-lg">
          Safe, coached, and unforgettable. Surf City is waiting.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={cta.primary.href} variant="primary" size="lg">
            {cta.primaryShort.label}
          </Button>
          <Button href={cta.call.href} variant="secondary" size="lg">
            {cta.call.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
