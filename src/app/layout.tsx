import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import { LocalBusinessSchema } from "@/components/Schema";

// NOTE: This build environment cannot reach Google Fonts, so we use
// curated system font stacks (defined in globals.css) instead of
// next/font/google. To use real webfonts (Fraunces + Inter) once
// deployed somewhere with internet access, swap back to:
//   import { Fraunces, Inter } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | Surf Lessons in Huntington Beach, CA`,
    template: `%s | ${business.name}`,
  },
  description:
    "Premium surf lessons in Huntington Beach, California. Private, family, kids, and group lessons for beginners — equipment included, safety first, year-round.",
  keywords: [
    "surf lessons Huntington Beach",
    "Huntington Beach surf school",
    "private surf lessons Huntington Beach",
    "kids surf lessons Huntington Beach",
    "family surf lessons Huntington Beach",
    "group surf lessons Huntington Beach",
    "beginner surf lessons California",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.url,
    siteName: business.name,
    title: business.name + " | Surf Lessons in Huntington Beach, CA",
    description:
      "Private, family, kids, and group surf lessons in Surf City USA. Equipment included, beginner-friendly, safety first.",
  },
  twitter: {
    card: "summary_large_image",
    title: business.name + " | Huntington Beach Surf School",
    description:
      "Premium beginner-friendly surf lessons in Huntington Beach, California.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-ocean antialiased pb-20 lg:pb-0">
        <LocalBusinessSchema />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-ocean focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyBookingBar />
      </body>
    </html>
  );
}
