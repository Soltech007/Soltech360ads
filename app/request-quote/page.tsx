import RequestQuotePage from "@/src/components/RequestQuote/RequestQuote";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Soltech360Ads",
  description:
    "Request a custom quote for website development, branding, SEO, and digital marketing services from Soltech360Ads.",
  keywords: [
    "request quote Soltech360Ads",
    "web development pricing",
    "digital agency quote",
  ],
  openGraph: {
    title: "Request a Quote | Soltech360Ads",
    description:
      "Get a tailored quote for your website or digital project from Soltech360Ads.",
    url: "https://soltech360ads.com/request-quote",
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

export default function QuotePage() {
  return (
    <div>
      <RequestQuotePage />
    </div>
  );
}
