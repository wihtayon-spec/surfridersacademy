import type { Metadata } from "next";
import { Section, CTABand } from "@/components/Section";
import LessonCard from "@/components/LessonCard";
import { ServiceSchema } from "@/components/Schema";
import { lessonCards } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing — Surf Lesson Rates in Huntington Beach",
  description:
    "Straightforward pricing for private and group surf lessons, plus custom corporate and hotel experiences in Huntington Beach, CA.",
};

export default function PricingPage() {
  return (
    <>
      <ServiceSchema />
      <div className="bg-ocean py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="eyebrow text-cyan-bright">Pricing</p>
          <h1 className="font-display mt-3 text-4xl text-white sm:text-5xl">Simple, honest pricing</h1>
          <p className="mx-auto mt-5 max-w-lg text-base text-sand/80 sm:text-lg">
            Every lesson includes coaching, board, and wetsuit. Corporate and hotel experiences are quoted around
            your group.
          </p>
        </div>
      </div>

      <Section>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lessonCards.map((lesson) => (
            <LessonCard
              key={lesson.id}
              title={lesson.title}
              forWho={lesson.forWho}
              blurb={lesson.blurb}
              productId={lesson.productId}
            />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ocean/45">
          Private lessons are $169 per person. Group lessons are $89 per person. Corporate and hotel experiences
          receive a custom quote.
        </p>
      </Section>

      <CTABand />
    </>
  );
}
