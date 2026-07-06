import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "public", "assets", "icons");

const ICONS = {
  globe: "https://api.iconify.design/lucide/globe.svg",
  map: "https://api.iconify.design/lucide/map.svg",
  "map-pin": "https://api.iconify.design/lucide/map-pin.svg",
  shipping: "https://api.iconify.design/lucide/package.svg",
  taxes: "https://api.iconify.design/lucide/receipt-text.svg",
  checkout: "https://api.iconify.design/lucide/credit-card.svg",
  payment: "https://api.iconify.design/lucide/wallet.svg",
  search: "https://api.iconify.design/lucide/search.svg",
  gps: "https://api.iconify.design/lucide/navigation.svg",
  warehouse: "https://api.iconify.design/lucide/warehouse.svg",
  analytics: "https://api.iconify.design/lucide/chart-column.svg",
  timezone: "https://api.iconify.design/lucide/clock-3.svg",
  language: "https://api.iconify.design/lucide/languages.svg",
  phone: "https://api.iconify.design/lucide/phone.svg"
};

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function download(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (
        response.statusCode &&
        response.statusCode >= 300 &&
        response.statusCode < 400 &&
        response.headers.location
      ) {
        response.resume();
        download(response.headers.location).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }

      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => {
        resolve(body);
      });
    });

    request.on("error", reject);
  });
}

async function main() {
  ensureDir(outputDir);

  const tasks = Object.entries(ICONS).map(async ([name, url]) => {
    const svg = await download(url);
    const filePath = path.join(outputDir, `${name}.svg`);
    fs.writeFileSync(filePath, svg, "utf8");
    return name;
  });

  const results = await Promise.allSettled(tasks);
  const failed = results.filter((result) => result.status === "rejected");
  const ok = results.length - failed.length;

  console.log(`Icons downloaded: ${ok}/${results.length}`);
  if (failed.length) {
    failed.slice(0, 10).forEach((entry) => {
      console.error(entry.reason?.message || entry.reason);
    });
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
