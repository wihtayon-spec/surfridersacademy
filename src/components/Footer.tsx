import Link from "next/link";
import { business, navLinks, cta, founder, press, developer } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ocean text-sand">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold text-white">{business.shortName}</div>
            <p className="mt-1 text-xs uppercase tracking-widest text-cyan-bright">{business.tagline}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/70">
              Premium, safety-first surf lessons in {business.city}, {business.region} — personally coached by{" "}
              {founder.name} since {business.foundingYear}.
            </p>
            <p className="font-display mt-4 text-sm italic text-cyan-bright">&ldquo;{founder.signOff}&rdquo;</p>
          </div>

          <div>
            <div className="eyebrow text-cyan-bright">Explore</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.slice(1).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sand/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-cyan-bright">Contact</div>
            <ul className="mt-4 space-y-2.5 text-sm text-sand/75">
              <li>
                <a href={cta.call.href} className="hover:text-white">{business.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-white">{business.email}</a>
              </li>
              <li>{business.address.street}, {business.address.locality}, {business.address.region}</li>
              <li>{business.hours}</li>
              <li>
                <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  @surfridersacademy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-cyan-bright">Ready when you are</div>
            <p className="mt-4 text-sm text-sand/75">
              Book your first wave today — private, family, and group lessons available year-round.
            </p>
            <Link
              href={cta.primary.href}
              className="mt-4 inline-flex rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-ocean hover:bg-cyan-bright"
            >
              {cta.primary.label}
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-xs text-sand/50 sm:gap-1">
            <p>
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
            <p>
              {business.city}, {business.region} · Licensed & insured surf instruction ·{" "}
              <a href={press.url} target="_blank" rel="noopener noreferrer" className="underline decoration-white/20 hover:text-white">
                As featured on {press.outlet}
              </a>
            </p>
          </div>

          <a
            href={developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-sand/70 backdrop-blur transition-colors hover:border-cyan-bright/50 hover:bg-white/10 hover:text-white sm:self-auto"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" />
            Website by {developer.name}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
