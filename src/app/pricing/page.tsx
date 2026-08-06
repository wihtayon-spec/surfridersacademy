import type { Metadata } from "next";
import { Section, CTABand } from "@/components/Section";
import PricingCard from "@/components/PricingCard";
import { ServiceSchema } from "@/components/Schema";
import { products } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing — Surf Lesson Rates in Huntington Beach",
  description:
    "Clear, upfront pricing for private, group, kids, family, and premium surf lessons in Huntington Beach, CA.",
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
            Every price includes coaching, board, and wetsuit. No surprise fees on the beach.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <PricingCard key={p.id} product={p} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ocean/45">
          Prices shown are current standard rates and may vary by season or group size. Corporate and large-group
          rates are custom — request a quote for exact pricing.
        </p>
      </Section>

      <CTABand />
    </>
  );
}
