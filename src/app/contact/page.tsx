import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import { business, cta } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Book Now — Huntington Beach Surf Lessons",
  description: "Book your surf lesson in Huntington Beach, CA. Call or text us and we'll confirm availability and get you in the water.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-ocean py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="eyebrow text-cyan-bright">Book Now</p>
          <h1 className="font-display mt-3 text-4xl text-white sm:text-5xl">Let&apos;s get you in the water</h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-sand/80 sm:text-lg">
            Call or text us — whichever is easiest. We&apos;ll confirm availability and get you booked in.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Reach Us Directly" title="Call, text, or email" />
            <div className="mt-8 space-y-6">
              <a href={cta.call.href} className="flex items-center gap-4 rounded-xl border border-ocean/10 p-5 hover:border-cyan/40">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-cyan">☎</span>
                <div>
                  <div className="text-sm text-ocean/50">Call</div>
                  <div className="font-display text-lg text-ocean">{business.phoneDisplay}</div>
                </div>
              </a>
              <a href={cta.text.href} className="flex items-center gap-4 rounded-xl border border-ocean/10 p-5 hover:border-cyan/40">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-cyan">✉</span>
                <div>
                  <div className="text-sm text-ocean/50">Text</div>
                  <div className="font-display text-lg text-ocean">{business.phoneDisplay}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-ocean/10 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-cyan">@</span>
                <div>
                  <div className="text-sm text-ocean/50">Email</div>
                  <div className="font-display text-lg text-ocean">{business.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-ocean/10 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-cyan">📍</span>
                <div>
                  <div className="text-sm text-ocean/50">Meet Location</div>
                  <div className="font-display text-lg text-ocean">
                    {business.address.street}, {business.address.locality}, {business.address.region}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-ocean/10 bg-white p-8 text-center shadow-sm sm:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan/10 text-2xl text-cyan">
              ☎
            </span>
            <h3 className="font-display mt-5 text-2xl text-ocean">Ready to book?</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ocean/60">
              Give us a call or send a text — we&apos;ll get you set up with a time, coach, and everything you need to
              know before you show up.
            </p>
            <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">
              <Button href={cta.call.href} variant="primary" className="flex-1">
                {cta.call.label}
              </Button>
              <Button href={cta.text.href} variant="sand" className="flex-1">
                {cta.text.label}
              </Button>
            </div>
            <p className="font-display mt-6 text-lg text-ocean">{business.phoneDisplay}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
