import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
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
    // SVG first for browsers that take it (sharp at any size), PNG as
    // the fallback. The 1.3MB favicon.ico that was here is left on disk
    // but no longer referenced.
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
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
    "https://x.com/KartikB43758249",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* `suppressHydrationWarning` because next-themes writes the theme
       class onto <html> before React hydrates, which would otherwise be
       reported as a mismatch. Geist Mono remains wired here for metadata
       labels; the page typography is defined in the global type system. */
    <html
      lang="en"
      suppressHydrationWarning
      className={GeistMono.variable}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
