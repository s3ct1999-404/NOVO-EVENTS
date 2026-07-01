#!/usr/bin/env node
/**
 * Optimizes all images in public/images/ for web delivery.
 * Resizes oversized photos, compresses JPEGs, and strips metadata.
 *
 * Usage: npm run images:optimize
 */

import { readdir, stat, rename, writeFile } from "node:fs/promises";
import { join, extname, relative } from "node:path";
import sharp from "sharp";

const IMAGES_DIR = new URL("../public/images", import.meta.url).pathname;
const MANIFEST_PATH = new URL(
  "../src/data/image-manifest.json",
  import.meta.url
).pathname;

/** Max width by folder — heroes need more resolution than thumbnails */
const MAX_WIDTH = {
  hero: 2400,
  pages: 2000,
  intro: 1600,
  gallery: 1600,
  portfolio: 1600,
  services: 1400,
  categories: 1400,
  equipment: 1400,
  team: 1200,
  default: 1600,
};

const QUALITY = 82;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function getMaxWidth(filePath) {
  const rel = relative(IMAGES_DIR, filePath);
  const folder = rel.split("/")[0];
  return MAX_WIDTH[folder] ?? MAX_WIDTH.default;
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const maxWidth = getMaxWidth(filePath);
  const before = (await stat(filePath)).size;

  let pipeline = sharp(filePath).rotate().resize({
    width: maxWidth,
    withoutEnlargement: true,
    fit: "inside",
  });

  if (ext === ".png") {
    pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: QUALITY });
  } else {
    pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
  }

  const tempPath = `${filePath}.opt`;
  await pipeline.toFile(tempPath);
  await rename(tempPath, filePath);

  const after = (await stat(filePath)).size;
  const saved = before - after;
  const pct = before > 0 ? ((saved / before) * 100).toFixed(1) : "0.0";

  return { before, after, saved, pct };
}

async function main() {
  console.log("Optimizing images in public/images/...\n");

  const files = await walk(IMAGES_DIR);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files.sort()) {
    const rel = relative(IMAGES_DIR, file);
    try {
      const result = await optimizeImage(file);
      totalBefore += result.before;
      totalAfter += result.after;
      const beforeMb = (result.before / 1024 / 1024).toFixed(2);
      const afterMb = (result.after / 1024 / 1024).toFixed(2);
      console.log(
        `  ${rel}: ${beforeMb}MB → ${afterMb}MB (${result.pct}% saved)`
      );
    } catch (err) {
      console.error(`  ✗ ${rel}: ${err.message}`);
    }
  }

  const manifest = {
    version: Date.now(),
    optimizedAt: new Date().toISOString(),
    fileCount: files.length,
  };
  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

  const savedMb = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
  console.log(
    `\nDone. ${files.length} files optimized. Total saved: ${savedMb}MB`
  );
  console.log(`Manifest written to src/data/image-manifest.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
