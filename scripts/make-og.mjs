/**
 * Generates the social-preview banners in public/og.
 *
 * Link previews were falling back to text because every page pointed at
 * favicon.png — 32×32, below the floor LinkedIn, X and Slack will render.
 * These are 1200×630, the size every crawler expects.
 *
 * Drawn as SVG and rasterised with sharp rather than screenshotted, so the
 * output is deterministic and regenerating it needs no browser:
 *
 *   node scripts/make-og.mjs
 *
 * Type is set in a system stack rather than Geist: librsvg does not load
 * @font-face, and a missing webfont would silently fall back mid-render.
 */

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = path.join(process.cwd(), "public", "og");

const W = 1200;
const H = 630;

/** The site's own tokens, resolved to hex for the rasteriser. */
const INK = "#121212";
const PAPER = "#fcfcfb";
const MUTED = "#6b6b6b";
const SIGNAL = "#23954d";
const RULE = "#e2e2e0";

const SANS = "Helvetica Neue, Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * One card: a mono kicker, a headline set in a few big lines, a rule, and a
 * footer. Everything is positioned absolutely — no text wrapping to guess at,
 * because the renderer gives none.
 */
function card({ kicker, lines, lineSize, sub, footer }) {
  const left = 84;
  const top = 198;
  const leading = Math.round(lineSize * 1.06);

  const headline = lines
    .map(
      (line, i) =>
        `<text x="${left}" y="${top + i * leading}" font-family="${SANS}" font-size="${lineSize}" font-weight="700" letter-spacing="-3.2" fill="${INK}">${esc(
          line
        )}</text>`
    )
    .join("\n    ");

  const headBottom = top + (lines.length - 1) * leading;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="${PAPER}"/>

    <!-- A faint grid, the same motif the site uses behind the home page. -->
    <defs>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="${INK}" stroke-opacity="0.045" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#grid)"/>

    <!-- Signal bar down the left edge. -->
    <rect x="0" y="0" width="10" height="${H}" fill="${SIGNAL}"/>

    <text x="${left}" y="78" font-family="${MONO}" font-size="21" letter-spacing="3.4" fill="${MUTED}">${esc(
    kicker
  )}</text>

    ${headline}

    <text x="${left}" y="${headBottom + 62}" font-family="${SANS}" font-size="27" fill="${MUTED}">${esc(
    sub
  )}</text>

    <line x1="${left}" y1="${H - 92}" x2="${W - 84}" y2="${H - 92}" stroke="${RULE}" stroke-width="2"/>
    <text x="${left}" y="${H - 50}" font-family="${MONO}" font-size="21" letter-spacing="1.6" fill="${MUTED}">${esc(
    footer
  )}</text>
    <text x="${W - 84}" y="${H - 50}" text-anchor="end" font-family="${MONO}" font-size="21" letter-spacing="1.6" fill="${INK}">kartikbhalerao.in</text>
  </svg>`;
}

const CARDS = {
  "home.png": card({
    kicker: "KARTIK BHALERAO · PRODUCT MANAGER",
    lines: ["Building, scaling", "and growing", "products."],
    lineSize: 92,
    sub: "AI agents, PRDs and teardowns of products worth studying.",
    footer: "PORTFOLIO",
  }),
  "builds.png": card({
    kicker: "KARTIK BHALERAO · BUILDS",
    lines: ["Products shipped,", "specs written,", "giants torn down."],
    lineSize: 86,
    sub: "17 builds — from discovery through launch.",
    footer: "BUILDS",
  }),
};

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const [name, svg] of Object.entries(CARDS)) {
  const file = path.join(OUT_DIR, name);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(file);
  const { size } = fs.statSync(file);
  console.log(`${name.padEnd(12)} ${W}×${H}  ${Math.round(size / 1024)}K`);
}
