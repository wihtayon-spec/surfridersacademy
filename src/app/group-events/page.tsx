import type { Metadata } from "next";
import { Section, SectionHeading, Divider, CTABand } from "@/components/Section";
import Button from "@/components/Button";
import PricingCard from "@/components/PricingCard";
import BgPhoto from "@/components/BgPhoto";
import { getProduct, cta, photos } from "@/config/site";

export const metadata: Metadata = {
  title: "Group & Corporate Surf Events in Huntington Beach",
  description:
    "Group surf lessons, corporate team events, and hotel guest experiences in Huntington Beach, CA. Custom logistics for any group size.",
};

const groupPoints = [
  { title: "Multiple coaches, one coordinator", body: "For larger groups, we bring in additional coaches and a single point of contact to keep everything smooth." },
  { title: "Flexible group sizing", body: "From a friend group of four to a hotel activity of forty, we scale gear and staffing to match." },
  { title: "On-brand for hotels & companies", body: "A memorable, photo-worthy activity for guest experiences, offsites, and team-building days." },
  { title: "Optional add-ons", body: "Photo/video packages, post-surf refreshments, and custom timing to fit your event schedule." },
];

export default function GroupEventsPage() {
  const corporate = getProduct("corporate");
  const group = getProduct("group");

  return (
    <>
      <div className="relative overflow-hidden bg-ocean py-24 sm:py-28">
        <BgPhoto src={photos.groupHero.src} alt={photos.groupHero.alt} priority className="opacity-90" />
        <div className="hero-wash absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="eyebrow text-cyan-bright">Group &amp; Corporate Events</p>
          <h1 className="font-display mt-3 text-4xl text-white sm:text-5xl">
            Surf lessons for groups, hotels, and teams
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-sand/80 sm:text-lg">
            A fully coordinated surf experience for friend groups, hotel guests, and corporate teams — any size,
            handled end to end.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={cta.primary.href} size="lg">Request a Custom Quote</Button>
            <Button href={cta.call.href} variant="secondary" size="lg">{cta.call.label}</Button>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading eyebrow="Group Logistics" title="Group events, handled without the stress" />
            <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {groupPoints.map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-lg text-ocean">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ocean/65">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <BgPhoto src={photos.groupSecondary.src} alt={photos.groupSecondary.alt} />
          </div>
        </div>
      </Section>

      <Divider />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
          {group && <PricingCard product={group} />}
          {corporate && <PricingCard product={corporate} />}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
