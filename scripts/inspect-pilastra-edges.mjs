import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "..", "src", "assets", "Pilastra_semfundo.png");

const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;

// Find topmost, bottom-most, leftmost, rightmost non-transparent pixels
let topY = -1, bottomY = -1, leftX = -1, rightX = -1;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const a = data[(y * width + x) * 4 + 3];
    if (a > 30) {
      if (topY === -1) topY = y;
      bottomY = y;
      if (leftX === -1 || x < leftX) leftX = x;
      if (x > rightX) rightX = x;
    }
  }
}

console.log(`Image: ${width} x ${height}`);
console.log(`Bounding box of non-transparent content:`);
console.log(`  top:    y=${topY}  (${(topY/height*100).toFixed(1)}% from top)`);
console.log(`  bottom: y=${bottomY} (${(bottomY/height*100).toFixed(1)}% from top)`);
console.log(`  left:   x=${leftX}  (${(leftX/width*100).toFixed(1)}% from left)`);
console.log(`  right:  x=${rightX}  (${(rightX/width*100).toFixed(1)}% from left)`);
console.log(`\nContent dims: ${rightX - leftX + 1} x ${bottomY - topY + 1}`);
console.log(`Aspect (content): ${((rightX - leftX + 1) / (bottomY - topY + 1)).toFixed(3)}`);
