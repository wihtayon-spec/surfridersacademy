import { testimonials, reviewsArePlaceholder, reviewPlatforms } from "@/config/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-cyan" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" className="h-4 w-4">
          <path
            strokeWidth="1"
            d="M10 1.5l2.6 5.4 5.9.9-4.3 4.2 1 5.9L10 15l-5.2 2.9 1-5.9L1.5 7.8l5.9-.9L10 1.5z"
          />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-ocean/10 bg-white p-7 shadow-sm">
      <Stars rating={t.rating} />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ocean/75">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-5 border-t border-ocean/10 pt-4 text-sm">
        <div className="font-semibold text-ocean">{t.name}</div>
        <div className="text-ocean/50">{t.location}</div>
      </figcaption>
    </figure>
  );
}

/** Attributed rating badges linking out to the real review platforms. */
export function ReviewPlatformBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {reviewPlatforms.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-ocean/15 bg-white px-4 py-2 text-sm font-medium text-ocean/80 transition-colors hover:border-cyan/50 hover:text-ocean"
        >
          {p.rating && (
            <span className="flex items-center gap-1 text-cyan">
              <Stars rating={Math.round(Number(p.rating))} />
            </span>
          )}
          <span>
            {p.rating ? `${p.rating} on ${p.name}` : `Read us on ${p.name}`}
            {p.reviewCount ? ` (${p.reviewCount} reviews)` : ""}
          </span>
        </a>
      ))}
    </div>
  );
}

export function ReviewsGrid() {
  return (
    <div>
      {reviewsArePlaceholder && (
        <p className="mb-6 rounded-lg border border-sunrise/30 bg-sunrise/10 px-4 py-2.5 text-xs text-ocean/70">
          Sample reviews shown for layout — replace with real guest testimonials before launch.
        </p>
      )}
      {!reviewsArePlaceholder && (
        <p className="mb-6 text-center text-xs text-ocean/45">
          Paraphrased from real guest reviews on Google — see the full, original reviews via the links below.
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
      <div className="mt-10">
        <ReviewPlatformBadges />
      </div>
    </div>
  );
}
