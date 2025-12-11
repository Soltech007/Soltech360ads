import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/src/lib/constants";
import Script from "next/script";
import LayoutWrapper from "@/src/components/layout/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soltech360ads.com"),   // ★ canonical base URL

  title: {
    default: `${siteConfig.name} - Digital Marketing & Web Development Agency`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "digital marketing agency",
    "web development",
    "facebook ads",
    "google ads",
    "SEO services",
    "social media marketing",
    "Next.js agency",
    "Soltech360Ads",
  ],

  openGraph: {
    title: `${siteConfig.name} - Digital Marketing & Web Development Agency`,
    description: siteConfig.description,
    url: "https://soltech360ads.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/icons/logo.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Digital Marketing & Web Development Agency`,
    description: siteConfig.description,
    images: ["/icons/logo.webp"],
    creator: "@soltech360ads",
  },

  icons: {
    icon: "/icons/favicon.webp",
    apple: "/icons/favicon.webp",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://soltech360ads.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N5BM99CP');
        `}
      </Script>

      <body className={`${inter.className} bg-white text-gray-800 antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5BM99CP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
