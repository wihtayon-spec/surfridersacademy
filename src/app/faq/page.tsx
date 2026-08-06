import type { Metadata } from "next";
import { Section, CTABand } from "@/components/Section";
import FaqAccordion from "@/components/FaqAccordion";
import { FaqSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "FAQ — Surf Lessons in Huntington Beach",
  description: "Answers to common questions about surf lessons in Huntington Beach: experience, swimming, gear, kids, safety, and booking.",
};

export default function FaqPage() {
  return (
    <>
      <FaqSchema />
      <div className="bg-ocean py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="eyebrow text-cyan-bright">FAQ</p>
          <h1 className="font-display mt-3 text-4xl text-white sm:text-5xl">Frequently asked questions</h1>
        </div>
      </div>

      <Section className="max-w-3xl">
        <FaqAccordion />
      </Section>

      <CTABand />
    </>
  );
}
