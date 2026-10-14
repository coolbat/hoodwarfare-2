import fs from "node:fs";
import path from "node:path";
import { pages } from "../src/lib/site";

const root = path.resolve(import.meta.dirname, "..");
const errors: string[] = [];

const forbidden = [
  /best gun in the game/i,
  /damage per second/i,
  /one-click fix/i,
  /ps5 version is available/i,
  /xbox version is available/i,
  /download (it )?for free/i,
];

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const sources = walk(path.join(root, "src"));
for (const file of sources) {
  const text = fs.readFileSync(file, "utf8");
  for (const pattern of forbidden) {
    if (pattern.test(text)) {
      errors.push(`${path.relative(root, file)} matches ${pattern}`);
    }
  }
}

for (const page of pages) {
  const file = path.join(root, page.file);
  if (!fs.existsSync(file)) {
    errors.push(`missing ${page.file}`);
    continue;
  }
  const text = fs.readFileSync(file, "utf8");
  if (!text.includes(page.h1)) errors.push(`${page.file} is missing H1: ${page.h1}`);
  if (!text.includes("pageMetadata")) errors.push(`${page.file} is missing pageMetadata`);
}

const home = fs.readFileSync(path.join(root, "src/app/page.tsx"), "utf8");
for (const phrase of ["hoodwarfare2", "private match", "No sound", "Voice chat", "Game modes", "PS5"]) {
  if (!home.includes(phrase)) errors.push(`homepage is missing ${phrase}`);
}

const shots = [
  "header.jpg",
  "block-night.jpg",
  "downtown-pistol.jpg",
  "strip-mall.jpg",
  "block-squad.jpg",
  "mall-floor.jpg",
  "yard-suppressor.jpg",
  "supermarket.jpg",
  "mall-gold.jpg",
  "lot-scope.jpg",
];
for (const shot of shots) {
  const file = path.join(root, "public/media", shot);
  if (!fs.existsSync(file)) errors.push(`missing screenshot ${shot}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`validated ${pages.length} pages and ${shots.length} screenshots`);
