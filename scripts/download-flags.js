import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";
import { countries, regions } from "../src/data/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const countriesDir = path.join(rootDir, "public", "assets", "flags", "countries");
const regionsDir = path.join(rootDir, "public", "assets", "flags", "regions");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (
        response.statusCode &&
        response.statusCode >= 300 &&
        response.statusCode < 400 &&
        response.headers.location
      ) {
        response.resume();
        downloadFile(response.headers.location, filePath).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }

      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
      file.on("error", reject);
    });

    request.on("error", reject);
  });
}

async function saveCountryFlags() {
  const tasks = countries.map(async (country) => {
    const code = country.code.toLowerCase();
    const remote = country.flagRemoteUrl || `https://flagcdn.com/w320/${code}.png`;
    const filePath = path.join(countriesDir, `${code}.png`);
    await downloadFile(remote, filePath);
    return { type: "country", code: country.code };
  });

  return Promise.allSettled(tasks);
}

async function saveRegionFlags() {
  const tasks = Object.keys(regions).flatMap((countryCode) => {
    return regions[countryCode].map(async (region) => {
      const fileName = `${region.code.toLowerCase()}.png`;
      const filePath = path.join(regionsDir, fileName);

      const regionalRemote = `https://flagcdn.com/w320/${region.code.toLowerCase()}.png`;
      const countryFallback = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;

      try {
        await downloadFile(regionalRemote, filePath);
      } catch {
        await downloadFile(countryFallback, filePath);
      }

      return { type: "region", code: region.code };
    });
  });

  return Promise.allSettled(tasks);
}

async function main() {
  ensureDir(countriesDir);
  ensureDir(regionsDir);

  const [countryResults, regionResults] = await Promise.all([
    saveCountryFlags(),
    saveRegionFlags()
  ]);

  const failedCountries = countryResults.filter((result) => result.status === "rejected");
  const failedRegions = regionResults.filter((result) => result.status === "rejected");

  console.log(`Country flags: ${countryResults.length - failedCountries.length}/${countryResults.length}`);
  console.log(`Region flags: ${regionResults.length - failedRegions.length}/${regionResults.length}`);

  if (failedCountries.length || failedRegions.length) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
