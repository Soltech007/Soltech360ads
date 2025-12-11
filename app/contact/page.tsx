import ContactPage from "@/src/components/Contact/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Soltech360Ads - Get in Touch",
  description:
    "Contact Soltech360Ads for website development, branding, SEO, and digital solutions. We are here to help businesses grow.",
  keywords: [
    "contact Soltech360Ads",
    "website development contact",
    "hire web developer",
    "Next.js development agency",
  ],
  openGraph: {
    title: "Contact Us | Soltech360Ads",
    description:
      "Get in touch with Soltech360Ads for web development and digital solutions.",
    url: "https://soltech360ads.com/contact",
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

export default function Contact() {
  return (
    <div>
      <ContactPage />
    </div>
  );
}
