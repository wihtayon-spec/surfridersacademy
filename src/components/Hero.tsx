import Button from "./Button";
import { cta, photos, business, founder, press } from "@/config/site";
import { TrustBadges } from "./Section";
import BgPhoto from "./BgPhoto";

export default function Hero() {
  return (
    <div className="relative flex min-h-[92vh] items-end overflow-hidden bg-ocean sm:min-h-[85vh]">
      <BgPhoto src={photos.homeHero.src} alt={photos.homeHero.alt} priority />
      <div className="hero-wash absolute inset-0" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="rise-in flex flex-wrap items-center gap-3" style={{ animationDelay: "0ms" }}>
          <p className="eyebrow text-cyan-bright">Surf City, USA · Huntington Beach, CA</p>
          <span className="rounded-full border border-cyan-bright/40 bg-cyan-bright/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-cyan-bright">
            Est. {business.foundingYear}
          </span>
          <a
            href={press.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white/90 backdrop-blur hover:bg-white/20"
          >
            As Seen on {press.outlet.split(" / ")[1] ?? press.outlet}
          </a>
        </div>
        <h1 className="font-display rise-in mt-4 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl" style={{ animationDelay: "80ms" }}>
          Learn to Surf in Huntington Beach with California&apos;s Most Trusted Surf Coaches
        </h1>
        <p className="rise-in mt-6 max-w-xl text-base leading-relaxed text-sand/85 sm:text-lg" style={{ animationDelay: "160ms" }}>
          Private, family, and group surf lessons — personally coached by {founder.name} and his hand-picked
          team, teaching Huntington Beach to surf since {business.foundingYear}.
        </p>

        <div className="rise-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
          <Button href={cta.primary.href} size="lg">{cta.primary.label}</Button>
          <Button href={cta.pricing.href} variant="secondary" size="lg">{cta.pricing.label}</Button>
        </div>

        <div className="rise-in mt-10" style={{ animationDelay: "320ms" }}>
          <TrustBadges tone="light" />
        </div>
      </div>
    </div>
  );
}
