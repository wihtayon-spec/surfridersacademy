import Hero from "@/components/Hero";
import { Section, SectionHeading, StatBar, Divider, CTABand } from "@/components/Section";
import LessonCard from "@/components/LessonCard";
import { ReviewsGrid } from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import BgPhoto from "@/components/BgPhoto";
import {
  lessonCards,
  whyChooseUs,
  expectSteps,
  photos,
  founder,
} from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Social proof strip */}
      <div className="border-b border-ocean/10 bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
          <p className="text-center text-sm font-medium text-ocean/70">
            Trusted by families, travelers, first-time surfers, and ocean lovers in Surf City USA.
          </p>
        </div>
      </div>

      {/* Stats / authority bar */}
      <Section className="!py-12 sm:!py-14">
        <StatBar />
      </Section>

      <Divider />

      {/* Lesson cards */}
      <Section>
        <SectionHeading
          eyebrow="Choose Your Lesson"
          title="A lesson built for exactly where you're starting from"
          body="Whichever way you learn best, every lesson starts with safety and ends with a wave."
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lessonCards.map((l) => (
            <LessonCard key={l.id} title={l.title} forWho={l.forWho} blurb={l.blurb} productId={l.productId} />
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section className="bg-navy !max-w-none !py-20 text-white sm:!py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Surf With Us"
            title="Learn the right way, from people who know these waves"
            tone="light"
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Divider />      <Divider />

      {/* What to expect */}
      <Section className="bg-sand !max-w-none sm:!py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Your Session" title="What to expect, start to finish" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {expectSteps.map((s) => (
              <div key={s.step} className="relative">
                <div className="font-display text-4xl text-cyan/50">{String(s.step).padStart(2, "0")}</div>
                <h3 className="font-display mt-3 text-lg text-ocean">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ocean/65">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* HB SEO section */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why Huntington Beach"
              title="Surf City USA is one of the best places on earth to learn"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ocean/70">
              <p>
                Huntington Beach earned the name &ldquo;Surf City&rdquo; in 1959, after hosting the original U.S.
                Surfing Championship — and it&apos;s carried that identity ever since. This isn&apos;t a marketing
                label; it&apos;s a title the city earned before {founder.firstName} was even born.
              </p>
              <p>
                The beach breaks here are long, sandy-bottomed, and exceptionally forgiving for a first-timer — on
                the right day, the gentle rollers near the pier are close to ideal for standing up for the first
                time. {founder.firstName} checks conditions personally before confirming any lesson, so you get
                the safest, most learnable window each day has to offer.
              </p>
              <p>
                Add in a walkable pier, beachfront dining, and easy access from LA and Orange County hotels, and
                Huntington Beach isn&apos;t just a great place to learn to surf — it&apos;s a great day trip for the
                whole family.
              </p>
            </div>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl lg:min-h-full">
            <BgPhoto src={photos.hbLocal.src} alt={photos.hbLocal.alt} />
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section className="bg-sand !max-w-none sm:!py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Reviews" title="What guests say after their first wave" align="center" />
          <div className="mt-10">
            <ReviewsGrid />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="max-w-3xl">
        <SectionHeading eyebrow="Good to Know" title="Frequently asked questions" />
        <div className="mt-8">
          <FaqAccordion />
        </div>
        <div className="mt-8 text-center">
          <Button href="/faq" variant="ghost">See all FAQs</Button>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
