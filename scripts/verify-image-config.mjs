#!/usr/bin/env node
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextConfigPath = path.join(root, "next.config.ts");
const imagesModulePath = path.join(root, "src/data/images.ts");

const nextConfig = readFileSync(nextConfigPath, "utf8");
const imagesModule = readFileSync(imagesModulePath, "utf8");

const hasLocalPatterns = /localPatterns\s*:\s*\[/.test(nextConfig);
const hasImagesPattern = /pathname:\s*["']\/images\/\*\*/.test(nextConfig);

if (!hasLocalPatterns || !hasImagesPattern) {
  console.error("Next.js image localPatterns for /images are missing.");
  process.exit(1);
}

const imagePaths = [...imagesModule.matchAll(/img\("([^"]+)"\)/g)].map((match) => match[1]);
const galleryPaths = [...imagesModule.matchAll(/src:\s*img\("([^"]+)"\)/g)].map((match) => match[1]);
const allPaths = [...imagePaths, ...galleryPaths];

const missing = allPaths.filter((relativePath) => {
  const normalized = relativePath.replace(/^\//, "");
  const absolutePath = path.join(root, "public", "images", normalized);
  return !existsSync(absolutePath);
});

if (missing.length) {
  console.error(`Missing image assets: ${missing.join(", ")}`);
  process.exit(1);
}

console.log(`Verified ${allPaths.length} image references and Next.js image config.`);
