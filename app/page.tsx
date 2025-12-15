// app/page.tsx

import type { Metadata } from "next";

import HeroSection from "@/src/components/home/HeroSection";
import TrustedBy from "@/src/components/home/TrustedBy";
import ServicesSection from "@/src/components/home/ServicesSection";
import HowItWorks from "@/src/components/home/HowItWorks";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import TestimonialsSection from "@/src/components/home/TestimonialsSection";
import FAQSection from "@/src/components/home/FAQSection";
import CTASection from "@/src/components/home/CTASection";

export const metadata: Metadata = {
  title:
    "Soltech360Ads - Website Development Agency | Next.js, SEO & Branding Experts",
  description:
    "Soltech360Ads is a professional website development agency specializing in modern websites, branding, SEO, and digital solutions. We help businesses grow with high-performance web experiences.",
  keywords: [
    "Soltech360Ads",
    "website development agency",
    "Next.js development",
    "React developer",
    "SEO agency",
    "branding services",
    "web design company",
    "digital solutions",
  ],
  openGraph: {
    title: "Soltech360Ads - Modern Website Development Agency",
    description:
      "We create fast, SEO-optimized, and modern websites using Next.js, React, and Tailwind for growing businesses.",
    url: "https://soltech360ads.com",
    siteName: "Soltech360Ads",
    images: [
      {
        url: "https://soltech360ads.com/icons/logo.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soltech360Ads - Website Development Agency",
    description:
      "Next.js web development, SEO, branding, UI/UX, and digital growth solutions.",
    images: ["https://soltech360ads.com/icons/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <CTASection />
    </>
  );
}
