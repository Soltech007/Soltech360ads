import Partners from "@/src/components/Partners/Partners";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners | Soltech360Ads",
  description:
    "Explore trusted partners and collaborations that help Soltech360Ads deliver powerful digital solutions.",
  keywords: ["Soltech360Ads partners", "business partners", "collaborations"],
  openGraph: {
    title: "Our Partners | Soltech360Ads",
    description:
      "Meet the partners helping us build world-class digital experiences.",
    url: "https://soltech360ads.com/partners",
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

export default function PartnersPage() {
  return (
    <div>
      <Partners />
    </div>
  );
}
