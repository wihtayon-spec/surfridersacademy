# Surfriders Academy — Website

A premium, high-conversion Next.js website for a Huntington Beach, CA surf school.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build — also generates the static export in out/
```

> This project is configured for **static export** (`output: "export"` in
> `next.config.ts`), because it's being deployed to SiteGround shared hosting,
> which doesn't support Node.js. `npm run build` produces plain HTML/CSS/JS in
> the `out/` folder — no server process needed to run it.

### Deploying to SiteGround (or any standard web host)

1. Run `npm run build`.
2. Upload the **contents of `out/`** (not the folder itself) to `public_html`
   on SiteGround, via Site Tools → File Manager, FTP, or Git.
3. Replace whatever's currently in `public_html` with these files. No DNS
   changes are needed — the domain already points at this server.
4. That's it. Visit the domain to confirm.

To redeploy after a content change: edit `src/config/site.ts` (or any page),
run `npm run build` again, and re-upload the new `out/` contents.

**If you ever want to move to a Node-capable host instead** (Vercel, Netlify,
Railway, etc. — any of which support this app's full feature set, including
Next.js's built-in image optimization): remove the `output: "export"` and
`trailingSlash: true` lines from `next.config.ts` first, since those are
static-export-only settings.

> **Note:** This project was built in a sandbox without access to Google Fonts,
> so `src/app/globals.css` currently uses curated **system font stacks** instead
> of `next/font/google`. Once deployed somewhere with normal internet access,
> restore the original webfont pairing (Fraunces display + Inter body) by
> following the instructions left as comments in `src/app/layout.tsx` and
> `src/app/globals.css`.

## Everything editable lives in one file

**`src/config/site.ts`** is the single source of truth for the whole site. Edit
it and every page updates automatically. It contains:

| Section | What it controls |
|---|---|
| `business` | Name, phone, email, address, map link, hours, social links |
| `founder` | Real founder identity (Marcus Barrera) — name, title, credentials, sign-off phrase — used across Home, About, Lessons, and Footer |
| `press` | Real press mention (CBS Los Angeles / KCAL News feature) — shown as a badge on Home and About |
| `developer` | Website developer credit (AYON Ecosystem) — shown as a link in the footer |
| `stats` | The trust/authority stat bar (years in business, students taught, etc.) |
| `heroBadges` | The badge row under the hero headline |
| `products` | **All pricing** — every price on the site is pulled from here |
| `lessonCards` | The 4 lesson-type cards on Home/Lessons |
| `whyChooseUs` | The "Why Choose Us" 6-item grid |
| `expectSteps` | The 5-step "What to Expect" process |
| `testimonials` | Review cards (currently sample placeholders — see below) |
| `faqs` | All FAQ questions/answers (also feeds the FAQPage schema) |
| `cta` | Central CTA button labels/links, so wording stays consistent site-wide |
| `navLinks` | Header/footer navigation |
| `lessonTypeOptions` / `experienceOptions` | Dropdown options in the booking form |

### To change a price
Edit the relevant `price` field in the `products` array in `site.ts`. Pricing
page, homepage packages, and lesson cards all read from this one array. Set
`price: null` for "Custom Quote" items (like the corporate package).

### To change the phone number
Edit `business.phoneDisplay` (what's shown) and `business.phoneE164` (used for
`tel:`/`sms:` links) in `site.ts`.

### Photos
Real Surfriders Academy photography lives in `public/images/` and is
referenced by the `photos` object in `src/config/site.ts` (one entry per
placement — hero shots, secondary in-page images, the CTA band background).
To swap or add a photo:

1. Drop the new image into `public/images/`.
2. Update the matching entry's `src` (and `alt` text) in the `photos` object
   in `site.ts` — every page that uses it updates automatically.
3. For a totally new placement, add a new entry to `photos` and render it
   with `<BgPhoto src={photos.yourKey.src} alt={photos.yourKey.alt} />`
   (see `src/components/BgPhoto.tsx`).

A few CSS gradient placeholders (`.photo-sand`, `.photo-ocean`,
`.photo-sunrise` in `globals.css`) remain available as a fallback style if
you ever need a spot without a real photo.

### To change services/lesson descriptions
Edit `lessonCards` (short marketing blurbs) and `products` (what's included,
duration, pricing) in `site.ts`.

### Logo & favicon
The real Surfriders Academy logo (circular badge, "Since 1975") lives at:
- `public/images/logo.png` — used in the header and as a seal graphic on
  the About page. Background was removed/made transparent so it drops
  cleanly onto light surfaces.
- `src/app/icon.png` — the favicon. Next.js's App Router picks this up
  automatically (no `<link rel="icon">` needed) via its file-based
  favicon convention.

**Important:** the logo's navy ink has very low contrast against the
site's dark navy/ocean sections (measured ~1.6:1, well under readable).
It's intentionally only used on light backgrounds (header, About page,
sand-colored sections) — not on the dark footer or hero overlays. If you
ever get a white/light version of the logo made, that could be added to
the dark sections too.

To replace the logo: swap `public/images/logo.png` with a new file (same
filename), and re-run the build. If the new file isn't square or has a
different aspect ratio, check `Header.tsx` and `about/page.tsx` for the
hardcoded `width`/`height` props on the `<Image>` tags and update them to
match.
The `testimonials` array in `site.ts` holds real, paraphrased reviews (see
"About the reviews" below). To add or swap one:

1. Add the new entry to `testimonials` — paraphrase in your own words rather
   than pasting verbatim platform text.
2. To add a new review platform badge (e.g. once Google's exact star rating
   is confirmed), fill in the matching entry in `reviewPlatforms`.

### Booking — call/text only, by client request
There is **no booking form or backend** — the client requested it be removed
in favor of a simple "call or text to book" flow. The Contact page
(`src/app/contact/page.tsx`) shows direct call/text/email/location cards
instead. Pricing cards' "Book This Lesson" buttons link to `/contact`, which
now leads straight to that same call/text panel — there's no lead-capture
step anywhere on the site.

If the client wants a real booking form or online payment flow added back in
later, that's a clean addition: reintroduce a form component and wire its
submit handler to a real endpoint (Formspree/Resend/a Next.js API route), or
a full booking/payment flow (Stripe Checkout, Calendly embed, etc.).

### SEO / structured data
- `src/components/Schema.tsx` emits `LocalBusiness`/`SportsActivityLocation`
  schema (site-wide), `FAQPage` schema (FAQ page), and `Service` schema
  (Pricing page).
- `foundingDate` and review/rating schema are **intentionally omitted** until
  you confirm real values — see the comments in `Schema.tsx` and the `TODO`
  markers in `site.ts` (`business.foundingYear`, `stats`).
- `src/app/sitemap.ts` and `src/app/robots.ts` auto-generate `/sitemap.xml`
  and `/robots.txt` from `navLinks` — no manual sitemap maintenance needed.
- Per-page metadata (title/description) is set in each `page.tsx` via the
  exported `metadata` object.

## Before you launch — checklist

- [x] Real contact info (phone, email, Instagram) — already in `src/config/site.ts`
- [x] Real photography — already in `public/images/`, wired into hero sections
- [x] Confirmed founding year (1975) — reflected in hero badge, About page, and
      `foundingDate` schema; "years teaching" auto-calculates from this
- [x] Real address (114 7th St, Unit 3, Huntington Beach, CA 92648)
- [x] Real reviews — paraphrased from real Google reviews (5.0★, 270 reviews),
      with attributed rating badges linking to Google/Tripadvisor/Yelp
      (see "About the reviews" below)
- [ ] Connect the booking form to a real lead pipeline (see above)
- [ ] Confirm exact Yelp and Google star ratings (`reviewPlatforms` in `site.ts`
      currently only has the confirmed Tripadvisor rating filled in)
- [ ] If deploying with internet access, restore Google Fonts in
      `layout.tsx`/`globals.css` (see note at top of this file)
- [ ] Update `business.url` to your real production domain (used in metadata,
      Open Graph, and the sitemap)

### About the reviews
The `testimonials` array in `site.ts` contains **real customer stories**,
paraphrased in original wording from your real Google Business reviews (5.0★,
270 reviews — not verbatim quotes, out of respect for Google's content
rights). `reviewPlatforms` holds the real links and confirmed rating/review-
count data for Google, Tripadvisor, and Yelp — shown on the site as plain
attributed text/badges linking out to the original reviews, **not** as
Schema.org `aggregateRating` structured data. That's intentional: copying a
third-party platform's rating into your own site's structured data
misrepresents it as first-party data and can trigger a Google Search Console
manual action. If you want real `Review`/`aggregateRating` schema, you'd need
reviews collected directly on your own site/booking flow.

## Project structure

```
src/
  app/
    page.tsx                Home
    lessons/page.tsx        Surf Lessons
    pricing/page.tsx        Pricing
    kids-families/page.tsx  Kids & Families
    group-events/page.tsx   Group Events
    about/page.tsx          About
    reviews/page.tsx        Reviews
    faq/page.tsx             FAQ
    contact/page.tsx         Contact / Book Now
    sitemap.ts / robots.ts
    layout.tsx / globals.css
  components/                Reusable UI (Header, Footer, Hero, cards, forms, schema)
  config/site.ts              Central config — edit this file
```
