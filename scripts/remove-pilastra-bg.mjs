import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "..", "src", "assets", "Pilastra.png");
const outputPath = path.join(__dirname, "..", "src", "assets", "Pilastra-transparent.png");

const BG_R = 250;
const BG_G = 248;
const BG_B = 246;

const FULL_TRANSPARENT_DIST = 6;
const FULL_OPAQUE_DIST = 22;

const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

const out = Buffer.alloc(width * height * 4);

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const dr = r - BG_R;
    const dg = g - BG_G;
    const db = b - BG_B;
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);

    let alpha;
    if (dist <= FULL_TRANSPARENT_DIST) alpha = 0;
    else if (dist >= FULL_OPAQUE_DIST) alpha = 255;
    else {
      const t = (dist - FULL_TRANSPARENT_DIST) / (FULL_OPAQUE_DIST - FULL_TRANSPARENT_DIST);
      alpha = Math.round(t * 255);
    }

    const o = (y * width + x) * 4;
    out[o] = r;
    out[o + 1] = g;
    out[o + 2] = b;
    out[o + 3] = alpha;
  }
}

await sharp(out, { raw: { width, height, channels: 4 } })
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(outputPath);

console.log(`Saved transparent PNG: ${outputPath}`);
