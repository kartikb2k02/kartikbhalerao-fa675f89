import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const BASE_URL = "https://kartikbhalerao.in";
export const SITE_NAME = "Kartik Bhalerao";
const DEFAULT_OG_IMAGE = "/favicon.png";

// LinkedIn and Twitter/X reject SVG previews outright, so an SVG `image` needs a
// PNG stand-in. Most images compressed via scripts/compress-images.mjs have a
// same-name PNG sibling in public/lovable-uploads — derive that instead of
// hand-maintaining a second image list per post. WebP is widely accepted by
// social crawlers today, so it's used as-is when no PNG sibling exists.
export function toOgImage(image: string, override?: string): string {
  if (override) return override;
  if (!image) return DEFAULT_OG_IMAGE;
  if (image.endsWith(".png")) return image;

  const pngCandidate = image.replace(/\.(webp|svg)$/i, ".png");
  if (pngCandidate !== image && fs.existsSync(path.join(process.cwd(), "public", pngCandidate))) {
    return pngCandidate;
  }
  if (image.endsWith(".webp")) return image;
  return DEFAULT_OG_IMAGE;
}

export function absoluteUrl(pathOrUrl: string): string {
  return pathOrUrl.startsWith("http") ? pathOrUrl : `${BASE_URL}${pathOrUrl}`;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

// Equivalent of the old client-side <SEO> component, ported to the App
// Router's metadata API so every route (not just JS-executing visitors)
// gets real tags baked into the static HTML.
export function pageMetadata({
  title,
  description,
  path: routePath,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(routePath);
  const fullImage = absoluteUrl(image);
  // Next's title template (set in the root layout) only affects the <title>
  // tag, not openGraph/twitter — build the "X | Kartik Bhalerao" form here too.
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      type,
      siteName: SITE_NAME,
      images: [{ url: fullImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
    },
  };
}
