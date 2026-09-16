import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

const BASE_URL = "https://kartikbhalerao.in";
const SITE_NAME = "Kartik Bhalerao";
const DEFAULT_DESCRIPTION =
  "Kartik Bhalerao is a Product Manager focused on building customer-centric products, driving growth through data-driven decisions, and crafting AI-powered product strategies.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/index.xml", title: `${SITE_NAME} – Blog` }],
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    url: BASE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/favicon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: ["/favicon.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: BASE_URL,
  image: `${BASE_URL}/favicon.png`,
  jobTitle: "Product Manager",
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    "https://linkedin.com/in/kartik-bhalerao",
    "https://github.com/kartikbh6614",
    "https://medium.com/@kartikbhalerao",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <div className="accent-rule" aria-hidden="true" />
        <div className="vignette-overlay" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
