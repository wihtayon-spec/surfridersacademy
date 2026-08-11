/**
 * ============================================================
 *  SITE CONFIG — SINGLE SOURCE OF TRUTH
 * ============================================================
 *  Edit business info, prices, phone, services, FAQs, and
 *  testimonials HERE. Nothing is hard-coded elsewhere.
 *
 *  ⚠️  PLACEHOLDERS marked with TODO must be replaced with
 *      REAL, verifiable values before launch. Do not publish
 *      unverifiable claims (founding year, student counts).
 * ============================================================
 */

export const business = {
  name: "Surfriders Academy",
  shortName: "Surfriders",
  tagline: "Huntington Beach Surf School",
  foundingYear: 1975,
  city: "Huntington Beach",
  region: "California",
  regionCode: "CA",
  country: "US",

  // --- Contact ---
  phoneDisplay: "(714) 782-4510",
  phoneE164: "+17147824510", // used for tel: and sms: links
  email: "surfridersacademy@gmail.com",
  address: {
    street: "114 7th St, Unit 3",
    locality: "Huntington Beach",
    region: "CA",
    postalCode: "92648",
    // Approx. HB Pier coords — update to your exact meeting spot.
    lat: 33.6553,
    lng: -117.9988,
  },

  // Google Maps place / directions link (TODO: real link)
  mapsUrl: "https://maps.google.com/?q=Huntington+Beach+Pier",
  url: "https://www.example.com", // TODO: real production domain

  social: {
    instagram: "https://instagram.com/surfridersacademy",
  },

  hours: "Daily, 6:00 AM – 8:00 PM (season dependent)",
} as const;

/**
 * ============================================================
 *  FOUNDER — a real person, central to the brand identity.
 * ============================================================
 */
export const founder = {
  name: "Marcus Barrera",
  firstName: "Marcus",
  title: "Owner & Head Surf Coach",
  credentials: "Red Cross–certified lifeguard · surfing since age 12 · coaching since 1975",
  signOff: "Aloha, Marcus the surf coach",
} as const;

/** Real press mention — a verified local news feature. */
export const press = {
  outlet: "CBS Los Angeles / KCAL News",
  segment: "SoCal Spotlight: Learning How to Surf in Huntington Beach",
  url: "https://www.cbsnews.com/losangeles/video/socal-spotlight-learning-how-to-surf-in-huntington-beach/",
} as const;

/** Website developer credit. */
export const developer = {
  name: "AYON Ecosystem",
  url: "https://ayonecosystem.com",
} as const;

/**
 * Real, third-party review platform links — used for the "Read more
 * reviews" links and the attributed rating badges. These ratings are
 * intentionally NOT emitted as Schema.org aggregateRating (that would
 * misrepresent third-party review data as first-party site data, which
 * violates Google's structured data guidelines). They're shown as plain,
 * clearly-attributed text/links instead.
 */
export const reviewPlatforms = [
  {
    name: "Google",
    rating: "5.0",
    reviewCount: 270,
    url: "https://share.google/9hzKt7QdQdMO6vVsG",
  },
  {
    name: "Tripadvisor",
    rating: "5.0",
    reviewCount: 232,
    url: "https://www.tripadvisor.com/Attraction_Review-g32513-d1554712-Reviews-Surfriders_Academy_Surf_School-Huntington_Beach_California.html",
  },
  {
    name: "Yelp",
    rating: null, // TODO: confirm exact Yelp star rating
    reviewCount: 74,
    url: "https://www.yelp.com/biz/surfriders-academy-surf-school-huntington-beach",
  },
] as const;

/**
 * Trust stats. Shown in the authority bar.
 * KEEP THESE HONEST — every value must be verifiable.
 * Set `verified: false` to visually flag internally that a value
 * still needs confirmation (does not render differently to users,
 * just a reminder in code).
 */
export const yearsTeaching = new Date().getFullYear() - business.foundingYear;

export const stats = [
  { value: `${yearsTeaching}+`, label: "Years teaching in Surf City", verified: true },
  { value: "270+", label: "Five-star Google reviews", verified: true },
  { value: "5.0★", label: "Google rating", verified: true },
  { value: "All ages", label: "From age 5 to 75", verified: true },
] as const;

/** Short trust badges under the hero. */
export const heroBadges = [
  "Huntington Beach",
  "Equipment Included",
  "Beginner Friendly",
  "Family Safe",
  "Year-Round Lessons",
] as const;

/**
 * ============================================================
 *  PRICING — edit prices here only.
 * ============================================================
 *  `price` is a number (USD). `unit` describes what it buys.
 *  Set `price: null` for "custom quote" items.
 */
export type Product = {
  id: string;
  name: string;
  price: number | null;
  unit: string;
  duration: string;
  forWho: string;
  includes: string[];
  featured?: boolean;
  badge?: string;
  /** Small print shown under the price, e.g. a payment surcharge note. */
  note?: string;
};

export const products: Product[] = [
  {
    id: "private",
    name: "Private Surf Lesson",
    price: 169,
    unit: "per person",
    duration: "90 minutes",
    forWho: "Beginners who want undivided coaching",
    includes: ["1-on-1 coaching", "Surfboard & wetsuit", "Ocean safety briefing"],
  },
  {
    id: "group",
    name: "Group Surf Lesson",
    price: 89,
    unit: "per person",
    duration: "90 minutes",
    forWho: "Friends, couples & travelers",
    includes: ["Small groups (max 4)", "Surfboard & wetsuit", "Ocean safety briefing"],
  },
  {
    id: "corporate",
    name: "Corporate / Hotel Group Experience",
    price: null,
    unit: "custom quote",
    duration: "Flexible",
    forWho: "Teams, hotels, events & large groups",
    includes: ["Fully coordinated logistics", "Multiple coaches", "Custom group sizing"],
  },
];

/** Helper to fetch a product by id. */
export const getProduct = (id: string) => products.find((p) => p.id === id);

/** Format a price for display. */
export const formatPrice = (price: number | null) =>
  price === null ? "Custom Quote" : `$${price}`;

/**
 * ============================================================
 *  LESSON CARDS (home + lessons page)
 * ============================================================
 */
export const lessonCards = [
  {
    id: "private",
    title: "Private Surf Lessons",
    forWho: "Beginners who want undivided coaching",
    blurb: "One coach, one goal: your first real wave. The fastest, safest way to learn.",
    productId: "private",
  },
  {
    id: "group",
    title: "Group Surf Lessons",
    forWho: "Friends, couples & travelers",
    blurb: "Learn together in small groups of four or fewer. Same great coaching, shared stoke.",
    productId: "group",
  },
  {
    id: "corporate",
    title: "Corporate / Hotel Group Experience",
    forWho: "Teams, hotels, events & large groups",
    blurb: "A fully coordinated surf experience with flexible logistics for larger groups.",
    productId: "corporate",
  },
] as const;

/**
 * ============================================================
 *  "WHY CHOOSE US"
 * ============================================================
 */
export const whyChooseUs = [
  { title: "Personally coached by Marcus Barrera", body: "Our owner has surfed this exact coastline since he was 12 years old — and he's still in the water teaching, every week." },
  { title: "Beginner-safe lesson structure", body: "A proven, step-by-step method that gets first-timers standing up — safely and confidently." },
  { title: "Surfboards & wetsuits included", body: "Quality, well-maintained gear sized to you. Just bring yourself and a swimsuit." },
  { title: "Red Cross–certified water safety", body: "Every lesson starts on the sand with a real safety briefing from a certified lifeguard, not a script." },
  { title: "Friendly coaching for all ages", body: "From nervous five-year-olds to grandparents chasing a bucket-list wave, we meet you where you are." },
  { title: "Optional GoPro / photo package", body: "Leave with more than a memory. Add photo and video capture of your session." },
] as const;

/**
 * ============================================================
 *  "WHAT TO EXPECT" STEPS
 * ============================================================
 */
export const expectSteps = [
  { step: 1, title: "Meet your coach", body: "We start with introductions and get to know your comfort level in the water." },
  { step: 2, title: "Gear up", body: "We fit you with the right wetsuit and board for your size and the day's conditions." },
  { step: 3, title: "Beach safety & pop-up practice", body: "On the sand, you'll learn ocean safety and rehearse the pop-up before you ever get wet." },
  { step: 4, title: "Catch waves with coach support", body: "In the water, your coach positions you, reads the sets, and cheers you into your waves." },
  { step: 5, title: "Leave with confidence & memories", body: "You'll walk off the beach standing taller — with a new skill and a story to tell." },
] as const;

/**
 * ============================================================
 *  REVIEWS / TESTIMONIALS
 * ============================================================
 *  Paraphrased from real, publicly-posted Google reviews (sourced 2026).
 *  Rewritten in our own words — not verbatim quotes — out of respect for
 *  Google's content rights. Names used are the reviewers' own public
 *  display names on Google. See `reviewPlatforms` above for a link to
 *  the full, original reviews.
 */
export const reviewsArePlaceholder = false;

export const testimonials = [
  {
    name: "Robert Thornton",
    location: "Google review — private lesson for two teens",
    rating: 5,
    quote: "Booking was smooth — clear directions, parking tips, and what to bring, all sorted before we even showed up.",
  },
  {
    name: "Lauren Ritter",
    location: "Google review",
    rating: 5,
    quote: "I was up and riding a wave on my very first try — Marcus made it look easy and was a blast to learn from.",
  },
  {
    name: "Stephanie McGarry",
    location: "Google review — last-minute lesson for her 6-year-old",
    rating: 5,
    quote: "Called for a last-minute lesson for my son and they made it happen — our instructor was patient, kind, and great with kids.",
  },
  {
    name: "Diana Betancourt",
    location: "Google review",
    rating: 5,
    quote: "I'm not the strongest swimmer, but I felt completely safe in the water the whole time — real care taken with safety.",
  },
  {
    name: "Trish Williams",
    location: "Google review — grandson's first lesson",
    rating: 5,
    quote: "My grandson had never surfed before and was riding waves by the end of his very first lesson — his confidence afterward said it all.",
  },
  {
    name: "Jen Williams",
    location: "Google review",
    rating: 5,
    quote: "I'd always been too scared to try surfing. He made me feel completely comfortable in the water, and I was standing up by my third wave.",
  },
  {
    name: "Nesli Brown",
    location: "Google review — lesson for two kids, ages 7 and 9",
    rating: 5,
    quote: "Patient, kind, and genuinely fun with both our kids — they can't wait to go back.",
  },
  {
    name: "Rayshell Threadgill",
    location: "Google review, Local Guide",
    rating: 5,
    quote: "If you want a serious, experienced private surf coach, this is it.",
  },
] as const;

/**
 * ============================================================
 *  FAQ
 * ============================================================
 */
export const faqs = [
  { q: "Do I need experience?", a: "None at all. Most of our guests have never surfed before. Our lessons are built specifically for first-timers, with a step-by-step approach that starts on the sand." },
  { q: "Do I need to know how to swim?", a: "You should be comfortable in waist-to-chest-deep water. You don't need to be a strong swimmer — you'll wear a wetsuit for buoyancy and stay in shallow, coach-supervised water. Let us know your comfort level when booking." },
  { q: "Is equipment included?", a: "Yes. Every lesson includes a quality surfboard and a wetsuit sized to you. Just bring a swimsuit, a towel, water, and sunscreen." },
  { q: "Are kids welcome?", a: "Absolutely. We teach kids ages 5 and up with patient, kid-focused coaches, right-sized soft boards, and extra water-safety attention. Family lessons are one of our specialties." },
  { q: "What should I bring?", a: "A swimsuit worn under your clothes, a towel, water, sunscreen, and a sense of adventure. We provide the board and wetsuit." },
  { q: "What happens if conditions are unsafe?", a: "Safety comes first, always. If the ocean isn't safe for your group on a given day, we'll reschedule at no cost or help you find a better window. We never push a lesson in unsafe surf." },
  { q: "How long is the lesson?", a: "Private and group lessons run about 90 minutes, including the on-sand safety briefing and pop-up practice. Corporate and hotel experiences are scheduled around the group." },
  { q: "Can I book a family or corporate group?", a: "Yes. We regularly host families, friend groups, hotels, and corporate teams. For larger groups we coordinate multiple coaches and custom logistics — request a custom quote and we'll build it around you." },
] as const;

/**
 * ============================================================
 *  CTAs — central copy so buttons stay consistent
 * ============================================================
 */
export const cta = {
  primary: { label: "Book Your Surf Lesson", href: "/contact" },
  primaryShort: { label: "Book Now", href: "/contact" },
  pricing: { label: "View Pricing", href: "/pricing" },
  call: { label: "Call Us", href: `tel:${business.phoneE164}` },
  text: { label: "Text Us", href: `sms:${business.phoneE164}` },
} as const;

/**
 * ============================================================
 *  PHOTOS — real Surfriders Academy photography.
 *  Reference these paths from components via next/image.
 * ============================================================
 */
export const photos = {
  homeHero: { src: "/images/hero-action.jpg", alt: "Surf coach riding a wave in Huntington Beach" },
  lessonsHero: { src: "/images/lessons-hero.jpg", alt: "Two students riding waves together with a coach nearby" },
  kidsHero: { src: "/images/kids-hero.jpg", alt: "Young girl smiling while riding a wave on a soft-top board" },
  kidsSecondary: { src: "/images/kids-secondary.jpg", alt: "Two young surfers giving shaka signs on a board in the water" },
  groupHero: { src: "/images/group-hero.jpg", alt: "Group of surf students and coaches posing with boards on the beach" },
  groupSecondary: { src: "/images/group-secondary.jpg", alt: "Large group of surf students posing with colorful boards" },
  aboutHero: { src: "/images/about-hero.jpg", alt: "Veteran surf coach and student posing with boards on the beach" },
  aboutSecondary: { src: "/images/about-secondary.jpg", alt: "Coach and student sharing a private moment in the water with a camera" },
  founder: { src: "/images/founder-hb-pier.jpg", alt: "Founder floating in the water near the Huntington Beach Pier, giving a shaka" },
  hbLocal: { src: "/images/hb-local.jpg", alt: "Surfer riding a wave in Huntington Beach" },
  ctaBand: { src: "/images/cta-band.jpg", alt: "Surfer riding a wave at sunset" },
  lessonPractice: { src: "/images/lesson-practice.jpg", alt: "Students practicing pop-ups on the sand during a group lesson" },
  familyBoard: { src: "/images/family-board.jpg", alt: "Group of students posing with colorful surfboards on the beach" },
  groupFamily: { src: "/images/group-family.jpg", alt: "Family and friends posing with surfboards on an overcast day" },
} as const;

/**
 * ============================================================
 *  NAVIGATION
 * ============================================================
 */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Surf Lessons", href: "/lessons" },
  { label: "Pricing", href: "/pricing" },
  { label: "Kids & Families", href: "/kids-families" },
  { label: "Group Events", href: "/group-events" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

/** Lesson type options for the booking form. */
export const lessonTypeOptions = [
  "Private Surf Lesson",
  "Group Surf Lesson",
  "Corporate / Hotel Group Experience",
  "Not sure yet",
] as const;

export const experienceOptions = [
  "Total beginner (never surfed)",
  "Tried it once or twice",
  "Some experience",
  "Returning for progression",
] as const;
