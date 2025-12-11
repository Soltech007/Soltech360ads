// app/terms-and-conditions/page.tsx

import TermAndCondition from "@/src/components/TermAndConditions/TermAndCondition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Soltech360Ads",
  description:
    "Read the Terms & Conditions for using Soltech360Ads services including website development, branding, SEO, and digital solutions.",
  keywords: [
    "Soltech360Ads terms",
    "terms and conditions",
    "website terms",
    "service agreement",
  ],
  openGraph: {
    title: "Terms & Conditions | Soltech360Ads",
    description:
      "Learn about the terms and conditions for using Soltech360Ads services.",
    url: "https://soltech360ads.com/terms",
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div>
      <TermAndCondition />
    </div>
  );
}
