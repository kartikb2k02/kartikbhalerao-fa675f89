/**
 * Takes the wide banner strips and produces card-shaped (18:10) crops,
 * choosing the horizontal window with the most artwork in it rather than
 * blindly taking the centre, which lands on empty paper for several of them.
 *
 *   node scripts/crop-banners.mjs <dir> <prefix> <count>
 */
import sharp from "sharp";
import path from "node:path";

const DIR = process.argv[2] ?? "public/lovable-uploads";
const PREFIX = process.argv[3] ?? "banner";
const COUNT = Number(process.argv[4] ?? 10);

const ASPECT = 18 / 10;
const OUT_W = 560;
const OUT_H = Math.round(OUT_W / ASPECT);

for (let i = 1; i <= COUNT; i++) {
  const id = String(i).padStart(2, "0");
  const wide = path.join(DIR, `${PREFIX}-${id}-wide.webp`);

  const { data, info } = await sharp(wide).greyscale().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;

  // "Ink" per column: how far from white it is.
  const ink = new Float64Array(W);
  for (let x = 0; x < W; x++) {
    let sum = 0;
    for (let y = 0; y < H; y++) sum += 255 - data[y * W + x];
    ink[x] = sum;
  }

  const win = Math.min(W, Math.round(H * ASPECT));

  // Rolling sum to find the densest window.
  let running = 0;
  for (let x = 0; x < win; x++) running += ink[x];
  let best = running;
  let bestLeft = 0;
  for (let x = win; x < W; x++) {
    running += ink[x] - ink[x - win];
    if (running > best) {
      best = running;
      bestLeft = x - win + 1;
    }
  }

  const out = path.join(DIR, `${PREFIX}-${id}.webp`);
  await sharp(wide)
    .extract({ left: bestLeft, top: 0, width: win, height: H })
    .resize(OUT_W, OUT_H, { fit: "fill", kernel: "lanczos3" })
    .webp({ quality: 90 })
    .toFile(out);

  const pct = ((bestLeft / (W - win)) * 100).toFixed(0);
  console.log(`  ${PREFIX}-${id}.webp  window at ${pct}% across  ${win}x${H} -> ${OUT_W}x${OUT_H}`);
}
