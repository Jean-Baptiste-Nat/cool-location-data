import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname);
const sourcePath = path.join(rootDir, "country-state-code-phone-data.js");
const reportPath = path.join(rootDir, "public", "api", "data-update-report.json");

function collectSourceStats() {
  if (!fs.existsSync(sourcePath)) {
    return {
      sourceDetected: false,
      sourcePath,
      note: "No legacy source file found"
    };
  }

  const content = fs.readFileSync(sourcePath, "utf8");
  const countryCount = (content.match(/code:\s*'[A-Z]{2}'/g) || []).length;
  const regionBuckets = (content.match(/'([A-Z]{2})':\s*\[/g) || []).length;

  return {
    sourceDetected: true,
    sourcePath,
    countryCountApprox: countryCount,
    regionBucketApprox: regionBuckets
  };
}

function saveReport(report) {
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
}

function main() {
  const now = new Date().toISOString();
  const report = {
    name: "cool-location-data",
    stage: "incremental-country-rollout",
    updatedAt: now,
    nextTargets: ["US", "MX", "FR", "GB", "DE"],
    source: collectSourceStats(),
    status: "ok"
  };

  saveReport(report);
  console.log("Data update report generated.");
}

main();
