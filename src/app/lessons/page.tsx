import type { Metadata } from "next";
import { Section, SectionHeading, Divider, CTABand } from "@/components/Section";
import LessonCard from "@/components/LessonCard";
import BgPhoto from "@/components/BgPhoto";
import { lessonCards, expectSteps, whyChooseUs, business, photos, founder } from "@/config/site";

export const metadata: Metadata = {
  title: "Surf Lessons in Huntington Beach, CA",
  description:
    "Private and group surf lessons plus custom corporate and hotel experiences in Huntington Beach. Equipment included, beginner-friendly, safety first.",
};

export default function LessonsPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-ocean py-24 sm:py-28">
        <BgPhoto src={photos.lessonsHero.src} alt={photos.lessonsHero.alt} priority className="opacity-90" />
        <div className="hero-wash absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="eyebrow text-cyan-bright">Surf Lessons</p>
          <h1 className="font-display mt-3 text-4xl text-white sm:text-5xl">
            A lesson for every kind of first wave
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-sand/80 sm:text-lg">
            Every lesson in {business.city} is personally overseen by {founder.name} — starting on the sand with
            real safety instruction, and ending with you standing up.
          </p>
        </div>
      </div>

      <Section>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lessonCards.map((l) => (
            <LessonCard key={l.id} title={l.title} forWho={l.forWho} blurb={l.blurb} productId={l.productId} />
          ))}
        </div>
      </Section>

      <Divider />

      <Section className="bg-sand !max-w-none sm:!py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Your Session" title="What to expect, start to finish" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {expectSteps.map((s) => (
              <div key={s.step}>
                <div className="font-display text-4xl text-cyan/50">{String(s.step).padStart(2, "0")}</div>
                <h3 className="font-display mt-3 text-lg text-ocean">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ocean/65">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why Surf With Us" title="Coaching built around safety, not just standing up" />
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-lg text-ocean">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ocean/65">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
