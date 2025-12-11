import PrivacyPolicy from "@/src/components/TermAndConditions/PrivacyPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Soltech360Ads",
  description:
    "Read the privacy policy of Soltech360Ads to understand how we collect, store, and protect your data.",
  keywords: ["privacy policy Soltech360Ads", "data protection", "website policy"],
  openGraph: {
    title: "Privacy Policy | Soltech360Ads",
    description: "Learn how Soltech360Ads protects your personal data.",
    url: "https://soltech360ads.com/privacy",
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

export default function PrivacyPage() {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
}
