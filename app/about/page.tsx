// app/about/page.tsx

import About from "@/src/components/About/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Soltech360Ads - Website Development Agency",
  description:
    "Soltech360Ads is a professional website development agency offering modern, responsive, and SEO-friendly websites for businesses. Learn more about our mission, values, and expertise.",
  keywords: [
    "Soltech360Ads",
    "website development agency",
    "web design",
    "SEO services",
    "Next.js developer",
    "React developer",
    "digital agency",
  ],
  openGraph: {
    title: "About Us | Soltech360Ads",
    description:
      "We build high-performance websites for startups and businesses. Learn more about Soltech360Ads.",
    url: "https://soltech360ads.com/about",
    siteName: "Soltech360Ads",
    images: [
      {
        url: "https://soltech360ads.com/icons/logo.webp", // yaha about page ka og banner daalna
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Soltech360Ads",
    description:
      "Modern, SEO-optimized website development services by Soltech360Ads.",
    images: ["https://soltech360ads.com/icons/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div>
      <About />
    </div>
  );
}
