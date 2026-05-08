import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "..", "src", "assets", "Pilastra.png");

const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// Sample several spots: bg, columns, machine
const samples = [
  // background
  { name: "bg top-left", x: 20, y: 20 },
  { name: "bg top-right", x: width - 20, y: 20 },
  { name: "bg mid-left", x: 20, y: Math.floor(height / 2) },
  { name: "bg mid-right", x: width - 20, y: Math.floor(height / 2) },
  { name: "bg bottom-left", x: 20, y: height - 20 },
  { name: "bg upper area", x: 200, y: 100 },
  // ground
  { name: "ground far-left", x: 100, y: height - 50 },
  { name: "ground front-mid", x: 600, y: height - 50 },
  // column (right tall column)
  { name: "col-right base", x: 1340, y: 700 },
  { name: "col-right top", x: 1340, y: 200 },
  // column under machine
  { name: "col-mid base", x: 750, y: 850 },
  // fallen column
  { name: "fallen col", x: 1100, y: 850 },
  // machine
  { name: "machine body", x: 700, y: 350 },
  // sky in arch
  { name: "sky", x: 700, y: 200 },
];

for (const s of samples) {
  const i = (s.y * width + s.x) * channels;
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  console.log(`${s.name.padEnd(20)} (${s.x},${s.y}) → rgb(${r}, ${g}, ${b})`);
}

console.log(`\nImage: ${width}x${height}, channels=${channels}`);
