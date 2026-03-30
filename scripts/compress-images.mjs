/**
 * compress-images.mjs
 * Converts all PNG/JPG in public/lovable-uploads to WebP
 * Requires: npm install sharp
 *
 * Usage:
 *   node scripts/compress-images.mjs            # dry run (shows savings)
 *   node scripts/compress-images.mjs --write    # actually converts files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UPLOADS_DIR = path.resolve(__dirname, '../public/lovable-uploads');
const DRY_RUN = !process.argv.includes('--write');

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('\n  sharp not installed. Run: npm install --save-dev sharp\n');
  process.exit(1);
}

const EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const WEBP_QUALITY = 82; // 80–85 is sweet spot: visually lossless, ~10x smaller

const files = fs.readdirSync(UPLOADS_DIR).filter(f =>
  EXTENSIONS.includes(path.extname(f).toLowerCase())
);

console.log(`\nFound ${files.length} images in lovable-uploads/`);
if (DRY_RUN) console.log('DRY RUN — pass --write to actually convert\n');

let totalOriginal = 0;
let totalConverted = 0;

for (const file of files) {
  const inputPath = path.join(UPLOADS_DIR, file);
  const outputName = path.basename(file, path.extname(file)) + '.webp';
  const outputPath = path.join(UPLOADS_DIR, outputName);

  // Skip if WebP already exists
  if (fs.existsSync(outputPath)) {
    console.log(`  SKIP  ${file} → already has .webp`);
    continue;
  }

  const originalSize = fs.statSync(inputPath).size;
  totalOriginal += originalSize;

  if (DRY_RUN) {
    // Estimate size without writing
    const buffer = await sharp(inputPath)
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
    totalConverted += buffer.length;
    const saving = (((originalSize - buffer.length) / originalSize) * 100).toFixed(0);
    console.log(
      `  ${file.padEnd(55)} ${kb(originalSize).padStart(8)} → ${kb(buffer.length).padStart(8)}  (-${saving}%)`
    );
  } else {
    await sharp(inputPath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);
    const newSize = fs.statSync(outputPath).size;
    totalConverted += newSize;
    const saving = (((originalSize - newSize) / originalSize) * 100).toFixed(0);
    console.log(`  ✓  ${file} → ${outputName}  (-${saving}%)`);
  }
}

console.log('\n─────────────────────────────────────────────');
console.log(`Total original : ${mb(totalOriginal)}`);
console.log(`Total after    : ${mb(totalConverted)}`);
console.log(`Saved          : ${mb(totalOriginal - totalConverted)} (${(((totalOriginal - totalConverted) / totalOriginal) * 100).toFixed(0)}%)`);
if (DRY_RUN) {
  console.log('\nRun with --write to apply changes:');
  console.log('  node scripts/compress-images.mjs --write\n');
}

function kb(bytes) { return (bytes / 1024).toFixed(0) + ' KB'; }
function mb(bytes) { return (bytes / 1024 / 1024).toFixed(1) + ' MB'; }
