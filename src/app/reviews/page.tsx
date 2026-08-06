import type { Metadata } from "next";
import { Section, CTABand } from "@/components/Section";
import { ReviewsGrid } from "@/components/Testimonials";
import { reviewPlatforms, founder } from "@/config/site";

const google = reviewPlatforms.find((p) => p.name === "Google");

export const metadata: Metadata = {
  title: "Reviews — 5.0★ on Google, 270+ Reviews",
  description: `Real guest reviews of surf lessons with ${founder.name} in Huntington Beach, California — 5.0 stars on Google with 270+ reviews.`,
};

export default function ReviewsPage() {
  return (
    <>
      <div className="bg-ocean py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="eyebrow text-cyan-bright">Reviews</p>
          <h1 className="font-display mt-3 text-4xl text-white sm:text-5xl">
            {google?.rating}★ on Google, {google?.reviewCount}+ reviews
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-sand/80 sm:text-lg">
            Real families, travelers, and first-timers, coached personally by {founder.name}.
          </p>
        </div>
      </div>

      <Section>
        <ReviewsGrid />
      </Section>

      <CTABand />
    </>
  );
}
