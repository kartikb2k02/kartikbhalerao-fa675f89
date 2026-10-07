/**
 * Makes a second, visually distinct card crop from a wide banner strip by
 * picking the densest window that does NOT overlap the one already used.
 *
 *   node scripts/alt-crop.mjs <wideFile> <outFile>
 */
import sharp from "sharp";

const [, , SRC, OUT] = process.argv;
const ASPECT = 18 / 10;
const OUT_W = 560;
const OUT_H = Math.round(OUT_W / ASPECT);

const { data, info } = await sharp(SRC).greyscale().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;

const ink = new Float64Array(W);
for (let x = 0; x < W; x++) {
  let sum = 0;
  for (let y = 0; y < H; y++) sum += 255 - data[y * W + x];
  ink[x] = sum;
}

const win = Math.min(W, Math.round(H * ASPECT));

function scoreAt(left) {
  let s = 0;
  for (let x = left; x < left + win; x++) s += ink[x];
  return s;
}

// Primary window: the densest one (what crop-banners.mjs already used).
let bestLeft = 0;
let best = scoreAt(0);
for (let x = 1; x + win <= W; x++) {
  const s = scoreAt(x);
  if (s > best) { best = s; bestLeft = x; }
}

// Alternate: densest window that overlaps the primary by less than a third.
let altLeft = null;
let alt = -1;
for (let x = 0; x + win <= W; x++) {
  const overlap = Math.max(0, Math.min(x + win, bestLeft + win) - Math.max(x, bestLeft));
  if (overlap / win >= 0.08) continue;
  const s = scoreAt(x);
  if (s > alt) { alt = s; altLeft = x; }
}

if (altLeft === null) {
  console.error("no non-overlapping window available");
  process.exit(1);
}

await sharp(SRC)
  .extract({ left: altLeft, top: 0, width: win, height: H })
  // Mirrored as well as re-windowed, so it does not read as the same artwork.
  .flop()
  .resize(OUT_W, OUT_H, { fit: "fill", kernel: "lanczos3" })
  .webp({ quality: 90 })
  .toFile(OUT);

console.log(
  `  ${OUT}  primary at ${((bestLeft / (W - win)) * 100).toFixed(0)}%, alt at ${((altLeft / (W - win)) * 100).toFixed(0)}%`
);
