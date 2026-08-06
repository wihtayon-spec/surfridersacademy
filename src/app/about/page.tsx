import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Divider, StatBar, CTABand } from "@/components/Section";
import BgPhoto from "@/components/BgPhoto";
import { business, photos, yearsTeaching, founder, press } from "@/config/site";

export const metadata: Metadata = {
  title: `${founder.name} — Owner & Head Surf Coach`,
  description: `Meet Marcus Barrera, owner of Surfriders Academy — surfing since age 12, coaching Huntington Beach since ${business.foundingYear}. Featured on CBS Los Angeles.`,
};

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-ocean py-24 sm:py-32">
        <BgPhoto src={photos.aboutHero.src} alt={photos.aboutHero.alt} priority className="opacity-90" />
        <div className="hero-wash absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="eyebrow text-cyan-bright">{founder.title}</p>
          <h1 className="font-display mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">
            {founder.name} has been reading these waves since {business.foundingYear}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-sand/80 sm:text-lg">
            {founder.credentials}
          </p>
        </div>
      </div>

      {/* Press strip */}
      <div className="border-b border-ocean/10 bg-sand">
        <a
          href={press.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-5 py-5 text-center transition-colors hover:bg-sand-200/50 sm:flex-row sm:justify-center sm:gap-3 lg:px-8"
        >
          <span className="eyebrow text-ocean/50">As Featured On</span>
          <span className="font-display text-base text-ocean sm:text-lg">{press.outlet}</span>
          <span className="text-sm text-ocean/60">— &ldquo;{press.segment}&rdquo; →</span>
        </a>
      </div>

      <Section className="!py-12 sm:!py-14">
        <StatBar />
        <p className="mt-6 text-xs text-ocean/40">
          Years teaching reflects our {business.foundingYear} founding. Review counts and ratings link to the
          original platforms — see the Reviews page for details.
        </p>
      </Section>

      <Divider />

      {/* Origin story */}
      <Section className="max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading eyebrow="How It Started" title="A kid who watched Gidget and never looked back" />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ocean/70">
              <p>
                Long before {business.name} existed, {founder.firstName} was a kid glued to Beach Blanket Bingo,
                watching Moon Doogie and the old Gidget films and deciding, right then, that surfing was what he
                wanted to do with his life. He caught his first waves at 12 years old, running with the older guys
                on the block.
              </p>
              <p>
                His father took him surfing every weekend after that — rain or shine. During summer, when he
                couldn&apos;t get a ride, he&apos;d hitchhike to the beach instead. It was a different world back
                then, and it built a relationship with this coastline that no certification alone can teach.
              </p>
              <p>
                In {business.foundingYear}, that relationship became {business.name}. {yearsTeaching}+ years later,
                {" "}{founder.firstName} — now a Red Cross–certified lifeguard — is still in the water every day,
                teaching the same respect for the ocean his father taught him.
              </p>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <BgPhoto src={photos.aboutSecondary.src} alt={photos.aboutSecondary.alt} />
          </div>
        </div>
      </Section>

      {/* Founder portrait spotlight */}
      <Section className="bg-sand !max-w-none sm:!py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div className="mx-auto lg:mx-0">
            <div className="relative w-full max-w-sm -rotate-1 overflow-hidden rounded-2xl bg-white p-2 shadow-xl shadow-ocean/10 ring-1 ring-ocean/10">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <Image
                  src={photos.founder.src}
                  alt={photos.founder.alt}
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="eyebrow px-2 pb-1 pt-3 text-ocean/45">{founder.name}, Huntington Beach Pier</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Meet Your Coach" title={`Every lesson, taught by ${founder.firstName} and his hand-picked team`} />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ocean/70">
              <p>
                Look through our reviews and you&apos;ll see the same name again and again: {founder.firstName}.
                He built {business.name} on being in the water himself — teaching, coaching, and personally
                signing off on every session with the same two words he&apos;s used for {yearsTeaching}+ years.
              </p>
              <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                <Image
                  src="/images/logo.png"
                  alt={`${business.name} seal, established ${business.foundingYear}`}
                  width={799}
                  height={815}
                  className="h-20 w-auto shrink-0 rotate-3 sm:h-24"
                />
                <blockquote className="font-display border-l-2 border-cyan pl-5 text-xl italic text-ocean">
                  &ldquo;{founder.signOff}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Our Standards" title={`What ${founder.firstName} holds every coach to`} />
          <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-ocean/70">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              Red Cross–certified in ocean lifeguarding and water safety.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              Background-checked, especially for coaches working with kids.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              Daily conditions check before any lesson is confirmed.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              Fully insured business operations, {business.foundingYear} to today.
            </li>
          </ul>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
