/**
 * Slices a contact-sheet of banners into individual images.
 *
 *   node scripts/slice-banners.mjs <source.png> [outDir] [prefix]
 *
 * Tiles are found by detecting the near-white gutters between them, so the
 * grid shape does not need to be hard coded.
 */
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const SRC = process.argv[2];
const OUT = process.argv[3] ?? "public/lovable-uploads";
const PREFIX = process.argv[4] ?? "banner";

if (!SRC) {
  console.error("usage: node scripts/slice-banners.mjs <source> [outDir] [prefix]");
  process.exit(1);
}

const WHITE = 248;    // pixel value at or above this counts as background
const PURITY = 0.99;  // share of a line that must be background to be a gutter
const MIN_SPAN = 20;  // ignore slivers

const { data, info } = await sharp(SRC).greyscale().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;

const blankRow = (y) => {
  let light = 0;
  for (let x = 0; x < W; x++) if (data[y * W + x] >= WHITE) light++;
  return light / W >= PURITY;
};

const blankCol = (x) => {
  let light = 0;
  for (let y = 0; y < H; y++) if (data[y * W + x] >= WHITE) light++;
  return light / H >= PURITY;
};

function bands(isBlank, n) {
  const out = [];
  let start = null;
  for (let i = 0; i < n; i++) {
    if (!isBlank(i)) {
      if (start === null) start = i;
    } else if (start !== null) {
      if (i - start >= MIN_SPAN) out.push([start, i - 1]);
      start = null;
    }
  }
  if (start !== null && n - start >= MIN_SPAN) out.push([start, n - 1]);
  return out;
}

const rows = bands(blankRow, H);
const cols = bands(blankCol, W);

console.log(`source ${W}x${H} -> ${cols.length} cols x ${rows.length} rows`);

await fs.mkdir(OUT, { recursive: true });

let n = 0;
for (const [top, bottom] of rows) {
  for (const [left, right] of cols) {
    n += 1;
    const name = `${PREFIX}-${String(n).padStart(2, "0")}.webp`;
    const out = path.join(OUT, name);
    await sharp(SRC)
      .extract({
        left,
        top,
        width: right - left + 1,
        height: bottom - top + 1,
      })
      .webp({ quality: 88 })
      .toFile(out);
    const { size } = await fs.stat(out);
    console.log(
      `  ${name}  ${right - left + 1}x${bottom - top + 1}  ${(size / 1024).toFixed(0)}kb`
    );
  }
}

console.log(`\nwrote ${n} banners to ${OUT}`);
