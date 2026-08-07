import type { Metadata } from "next";
import { Section, SectionHeading, CTABand } from "@/components/Section";
import Button from "@/components/Button";
import BgPhoto from "@/components/BgPhoto";
import { cta, photos } from "@/config/site";

export const metadata: Metadata = {
  title: "Kids & Family Surf Lessons in Huntington Beach",
  description:
    "Family-friendly surf lessons in Huntington Beach for kids ages 5+. Patient coaches, right-sized boards, extra water safety.",
};

const familyPoints = [
  { title: "Patient, kid-focused coaches", body: "Our instructors are trained to teach children with encouragement, not pressure — every kid moves at their own pace." },
  { title: "Right-sized soft-top boards", body: "Softer, more forgiving boards sized to your child, for a safer and more confidence-building first session." },
  { title: "Extra water safety", body: "Family lessons run with a tighter safety radius and closer supervision, especially for younger surfers." },
  { title: "Parents can join in", body: "Book a shared family lesson so parents and kids learn together — or watch from the sand while your child surfs one-on-one." },
];

export default function KidsFamiliesPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-ocean py-24 sm:py-28">
        <BgPhoto src={photos.kidsHero.src} alt={photos.kidsHero.alt} priority className="opacity-90" />
        <div className="hero-wash absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="eyebrow text-cyan-bright">Kids &amp; Families</p>
          <h1 className="font-display mt-3 text-4xl text-white sm:text-5xl">
            Surf lessons the whole family will remember
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-sand/80 sm:text-lg">
            Patient coaching, right-sized gear, and extra safety — built for kids ages 5 and up, and the parents
            who bring them.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={cta.primary.href} size="lg">{cta.primary.label}</Button>
            <Button href={cta.call.href} variant="secondary" size="lg">{cta.call.label}</Button>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading eyebrow="Built for Families" title="What makes our family lessons different" />
            <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {familyPoints.map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-lg text-ocean">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ocean/65">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <BgPhoto src={photos.kidsSecondary.src} alt={photos.kidsSecondary.alt} />
          </div>
        </div>
      </Section>

      <CTABand />      <CTABand />
    </>
  );
}
