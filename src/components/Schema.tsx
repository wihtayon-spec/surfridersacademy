import { business, faqs, products, reviewsArePlaceholder, founder } from "@/config/site";

/**
 * LocalBusiness + SportsActivityLocation schema for the whole site.
 * Rendered once in the root layout.
 *
 * NOTE: `aggregateRating` and `review` are intentionally OMITTED until
 * real, verifiable review data replaces the config placeholders.
 * Emitting unverifiable structured data can trigger search-engine
 * manual actions — do not add it back until values are confirmed real.
 */
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "LocalBusiness"],
    name: business.name,
    description:
      "Premium surf lessons in Huntington Beach, California — private, family, kids, and group lessons for all levels.",
    url: business.url,
    telephone: business.phoneDisplay,
    email: business.email,
    foundingDate: String(business.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.address.lat,
      longitude: business.address.lng,
    },
    areaServed: {
      "@type": "City",
      name: "Huntington Beach",
    },
    priceRange: "$$",
    sameAs: Object.values(business.social),
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.title,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** FAQPage schema — render on the FAQ page. */
export function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Service schema list — render on the Pricing / Lessons pages. */
export function ServiceSchema() {
  const data = products
    .filter((p) => p.price !== null)
    .map((p) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: p.name,
      provider: { "@type": "LocalBusiness", name: business.name },
      areaServed: "Huntington Beach, CA",
      offers: {
        "@type": "Offer",
        price: p.price,
        priceCurrency: "USD",
      },
    }));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Guard export so pages can check before ever wiring up Review schema.
export const canEmitReviewSchema = !reviewsArePlaceholder;
