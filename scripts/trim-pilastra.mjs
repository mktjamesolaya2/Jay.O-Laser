import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "..", "src", "assets", "Pilastra_semfundo.png");
const outputPath = path.join(__dirname, "..", "src", "assets", "Pilastra_semfundo.png");

// 1) Trim transparent edges (alpha < 30 considered empty), then 2) pad a small top breathing room.
const trimmed = await sharp(inputPath)
  .ensureAlpha()
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 10 })
  .toBuffer();

const meta = await sharp(trimmed).metadata();
const padTop = Math.round(meta.height * 0.04); // 4% breathing room at top

await sharp(trimmed)
  .extend({
    top: padTop,
    bottom: 0,
    left: 0,
    right: 0,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(outputPath);

const after = await sharp(outputPath).metadata();
console.log(`Trimmed + padded: ${meta.width}x${meta.height} → ${after.width}x${after.height} (top pad ${padTop}px)`);
