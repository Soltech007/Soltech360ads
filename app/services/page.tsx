import Service from "@/src/components/Services/Service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Soltech360Ads - Website Development Agency",
  description:
    "Discover all the digital services we offer including website development, UI/UX design, SEO, branding, and digital marketing.",
  keywords: [
    "Soltech360Ads services",
    "website development services",
    "SEO services",
    "branding services",
    "Next.js development",
  ],
  openGraph: {
    title: "Our Services | Soltech360Ads",
    description:
      "Explore premium website development, branding, and SEO services powered by Soltech360Ads.",
    url: "https://soltech360ads.com/services",
    siteName: "Soltech360Ads",
    images: [
      {
        url: "https://soltech360ads.com/icons/logo.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://soltech360ads.com/icons/logo.webp"],
  },
};

export default function ServicesPage() {
  return (
    <div>
      <Service />
    </div>
  );
}
