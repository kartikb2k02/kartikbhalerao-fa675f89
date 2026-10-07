/**
 * Renders one banner per blog post: the shared background image with the
 * post title set across the lower middle.
 *
 *   node scripts/make-blog-banners.mjs
 *
 * Output lands in public/lovable-uploads/blog/<slug>.webp. Re-run after
 * adding or renaming a post.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const BASE = "public/lovable-uploads/blog-banner-base.png";
const OUT_DIR = "public/lovable-uploads/blog";
const W = 1280;
const H = 720;

// Pull title + slug straight out of the data file so this cannot drift.
const src = fs.readFileSync("data/blogPosts.ts", "utf8");
const posts = [];
const re = /title:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?slug:\s*"([^"]+)"/g;
let m;
while ((m = re.exec(src)) !== null) {
  posts.push({ title: m[1].replace(/\\"/g, '"'), slug: m[2] });
}

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Rough advance width for Helvetica Neue Bold, good enough for wrapping.
const CHAR_W = 0.53;

function wrap(title, fontSize, maxWidth) {
  const perLine = Math.floor(maxWidth / (fontSize * CHAR_W));
  const words = title.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length <= perLine) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function layout(title) {
  const maxWidth = W - 160;
  // Step the size down until it fits in at most three lines.
  for (const size of [60, 54, 48, 44, 40]) {
    const lines = wrap(title, size, maxWidth);
    if (lines.length <= 3) return { size, lines };
  }
  return { size: 38, lines: wrap(title, 38, maxWidth) };
}

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const { title, slug } of posts) {
  const { size, lines } = layout(title);
  const lineHeight = Math.round(size * 1.22);

  // Sit the block in the lower middle: last baseline at ~78% of the height.
  const lastBaseline = Math.round(H * 0.78);
  const firstBaseline = lastBaseline - (lines.length - 1) * lineHeight;

  const tspans = lines
    .map(
      (line, i) =>
        `<tspan x="${W / 2}" y="${firstBaseline + i * lineHeight}">${esc(line)}</tspan>`
    )
    .join("");

  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="35%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#shade)"/>
  <text
    text-anchor="middle"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="${size}"
    font-weight="700"
    letter-spacing="-0.5"
    fill="#FFFFFF">${tspans}</text>
</svg>`;

  const out = path.join(OUT_DIR, `${slug}.webp`);
  await sharp(BASE)
    .resize(W, H, { fit: "cover" })
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .webp({ quality: 88 })
    .toFile(out);

  const kb = (fs.statSync(out).size / 1024).toFixed(0);
  console.log(`  ${slug}.webp  ${size}px / ${lines.length} line(s)  ${kb}kb`);
}

console.log(`\nwrote ${posts.length} banners to ${OUT_DIR}`);
