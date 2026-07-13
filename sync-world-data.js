import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname);
const dataDir = path.join(rootDir, "src", "data");
const worldPath = path.join(dataDir, "world.js");
const legacySourcePath = path.join(rootDir, "country-state-code-phone-data.js");
const countriesDir = path.join(dataDir, "countries");
const regionsDir = path.join(dataDir, "regions");
const metroDir = path.join(dataDir, "metro");

const WORLD_ENDPOINT = "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function buildPhoneCode(idd) {
  if (!idd || !idd.root) return "";
  const suffix = Array.isArray(idd.suffixes) && idd.suffixes.length ? idd.suffixes[0] : "";
  return `${idd.root}${suffix}`;
}

function firstObjectValue(obj) {
  if (!obj || typeof obj !== "object") return null;
  const key = Object.keys(obj)[0];
  return key ? obj[key] : null;
}

function mapMeasurementSystem(countryCode) {
  return ["US", "LR", "MM"].includes(countryCode) ? "imperial" : "metric";
}

function mapTemperatureUnit(countryCode) {
  return ["US", "LR", "BS", "BZ", "KY", "PR", "GU", "VI", "AS", "MP", "PW", "FM", "MH"].includes(countryCode)
    ? "fahrenheit"
    : "celsius";
}

function mapZonePrefix(continent) {
  const map = {
    Africa: "AF",
    Europe: "EU",
    Asia: "AS",
    Oceania: "OC",
    "North America": "NA",
    "South America": "SA",
    Antarctica: "AN"
  };
  return map[continent] || "GL";
}

function mapCountry(country, nowIso) {
  const code = String(country.cca2 || "").toUpperCase();
  const code3 = String(country.cca3 || "").toUpperCase();
  const name = country?.name?.common || code;
  const officialName = country?.name?.official || name;
  const nativeNameObj = firstObjectValue(country?.name?.nativeName);
  const nativeName = nativeNameObj?.common || name;
  const phoneCode = buildPhoneCode(country.idd);

  const currencyObj = firstObjectValue(country.currencies) || {};
  const currency = Object.keys(country.currencies || {})[0] || "";
  const currencySymbol = currencyObj.symbol || "";

  const continent = Array.isArray(country.continents) && country.continents.length
    ? country.continents[0]
    : country.region || "Unknown";

  const subContinent = country.subregion || "Unknown";
  const geographicalRegion = continent;
  const zonePrefix = mapZonePrefix(continent);

  const languages = Array.isArray(country.languages)
    ? country.languages
    : Object.keys(country.languages || {});
  const primaryLanguage = languages[0] || "en";

  const lat = Array.isArray(country.latlng) ? Number(country.latlng[0] || 0) : 0;
  const lon = Array.isArray(country.latlng) ? Number(country.latlng[1] || 0) : 0;
  const domain = Array.isArray(country.tld) && country.tld.length ? country.tld[0] : "";
  const capital = Array.isArray(country.capital) && country.capital.length ? country.capital[0] : "";

  return {
    code,
    code3,
    name,
    officialName,
    nativeName,
    flagEmoji: code,
    flagUrl: `/assets/flags/countries/${code.toLowerCase()}.png`,
    flagRemoteUrl: `https://flagcdn.com/w320/${code.toLowerCase()}.png`,
    phoneCode,
    currency,
    currencySymbol,
    continent,
    subContinent,
    geographicalRegion,
    shippingZone: `${zonePrefix}-${code}`,
    taxZone: `${zonePrefix}-${code}`,
    economicZone: continent,
    languages,
    primaryLanguage,
    timezones: Array.isArray(country.timezones) ? country.timezones : [],
    capital,
    latitude: lat,
    longitude: lon,
    measurementSystem: mapMeasurementSystem(code),
    temperatureUnit: mapTemperatureUnit(code),
    drivingSide: country?.car?.side || "right",
    postalCodeFormat: country?.postalCode?.format || "",
    internetDomain: domain,
    weekStartsOn: country.startOfWeek || "monday",
    population: Number(country.population || 0),
    area: Number(country.area || 0),
    verified: true,
    isActive: true,
    createdAt: nowIso,
    updatedAt: nowIso
  };
}

function slugifyRegion(name) {
  return String(name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toUpperCase();
}

function uniqueStrings(values) {
  return Array.from(new Set((values || []).map((value) => String(value || "").trim()).filter(Boolean)));
}

function normalizeMetroCity(value) {
  if (typeof value === "string") return value.trim();
  if (value && typeof value === "object") {
    return String(value.name || value.city || value.label || "").trim();
  }
  return String(value || "").trim();
}

function collectMetroCities(definitions) {
  return uniqueStrings(
    (Array.isArray(definitions) ? definitions : []).flatMap((definition) => {
      if (!definition || typeof definition !== "object") return [];
      return Array.isArray(definition.cities) ? definition.cities.map(normalizeMetroCity) : [];
    })
  );
}

function extractObjectLiteral(content, variableName) {
  const token = `const ${variableName} =`;
  const tokenIndex = content.indexOf(token);
  if (tokenIndex === -1) return null;

  const start = content.indexOf("{", tokenIndex);
  if (start === -1) return null;

  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let escaped = false;

  for (let i = start; i < content.length; i += 1) {
    const char = content[i];
    const next = content[i + 1];

    if (inLineComment) {
      if (char === "\n") inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (char === "*" && next === "/") {
        inBlockComment = false;
        i += 1;
      }
      continue;
    }

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      continue;
    }

    if (!inSingle && !inDouble && !inTemplate) {
      if (char === "/" && next === "/") {
        inLineComment = true;
        i += 1;
        continue;
      }
      if (char === "/" && next === "*") {
        inBlockComment = true;
        i += 1;
        continue;
      }
    }

    if (!inDouble && !inTemplate && char === "'") {
      inSingle = !inSingle;
      continue;
    }
    if (!inSingle && !inTemplate && char === '"') {
      inDouble = !inDouble;
      continue;
    }
    if (!inSingle && !inDouble && char === "`") {
      inTemplate = !inTemplate;
      continue;
    }

    if (inSingle || inDouble || inTemplate) continue;

    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return content.slice(start, i + 1);
    }
  }

  return null;
}

function parseObjectLiteral(objectLiteral) {
  if (!objectLiteral) return null;
  try {
    return Function(`"use strict"; return (${objectLiteral});`)();
  } catch {
    return null;
  }
}

function loadLegacy() {
  try {
    const source = fs.readFileSync(legacySourcePath, "utf8");
    const regionsByCountry = parseObjectLiteral(extractObjectLiteral(source, "regionsByCountry"));
    const officialRegionCodesByCountry = parseObjectLiteral(extractObjectLiteral(source, "officialRegionCodesByCountry"));
    const metroAreasByCountryRegion = parseObjectLiteral(extractObjectLiteral(source, "metroAreasByCountryRegion"));

    return {
      regionsByCountry: regionsByCountry || {},
      officialRegionCodesByCountry: officialRegionCodesByCountry || {},
      metroAreasByCountryRegion: metroAreasByCountryRegion || {}
    };
  } catch {
    return null;
  }
}

function buildRegionsAndMetro(countries, nowIso, legacy) {
  const regions = {};
  const metroAreas = {};

  const canadaRegionProfiles = {
    AB: { latitude: 53.9333, longitude: -116.5765, shippingZone: "NA-CA-WEST", taxRegion: "NA-CA-WEST" },
    BC: { latitude: 53.7267, longitude: -127.6476, shippingZone: "NA-CA-WEST", taxRegion: "NA-CA-WEST" },
    MB: { latitude: 53.7609, longitude: -98.8139, shippingZone: "NA-CA-CENTRAL", taxRegion: "NA-CA-CENTRAL" },
    NB: { latitude: 46.5653, longitude: -66.4619, shippingZone: "NA-CA-EAST", taxRegion: "NA-CA-EAST" },
    NL: { latitude: 53.1355, longitude: -57.6604, shippingZone: "NA-CA-EAST", taxRegion: "NA-CA-EAST" },
    NS: { latitude: 44.682, longitude: -63.7443, shippingZone: "NA-CA-EAST", taxRegion: "NA-CA-EAST" },
    NT: { latitude: 64.8255, longitude: -124.8457, shippingZone: "NA-CA-NORTH", taxRegion: "NA-CA-NORTH" },
    NU: { latitude: 70.2998, longitude: -83.1076, shippingZone: "NA-CA-NORTH", taxRegion: "NA-CA-NORTH" },
    ON: { latitude: 51.2538, longitude: -85.3232, shippingZone: "NA-CA-CENTRAL", taxRegion: "NA-CA-CENTRAL" },
    PE: { latitude: 46.5107, longitude: -63.4168, shippingZone: "NA-CA-EAST", taxRegion: "NA-CA-EAST" },
    QC: { latitude: 52.9399, longitude: -73.5491, shippingZone: "NA-CA-EAST", taxRegion: "NA-CA-EAST" },
    SK: { latitude: 52.9399, longitude: -106.4509, shippingZone: "NA-CA-CENTRAL", taxRegion: "NA-CA-CENTRAL" },
    YT: { latitude: 64.2823, longitude: -135.0, shippingZone: "NA-CA-NORTH", taxRegion: "NA-CA-NORTH" }
  };

  countries.forEach((country) => {
    const regionNames = Array.isArray(legacy?.regionsByCountry?.[country.code])
      ? legacy.regionsByCountry[country.code]
      : [];
    const regionCodes = legacy?.officialRegionCodesByCountry?.[country.code] || {};
    const regionRows = [];
    const metros = [];

    regionNames.forEach((regionName, index) => {
      const code = String(regionCodes[regionName] || slugifyRegion(regionName));
      const type = index < 3 ? "state" : index < 6 ? "province" : "region";
      const normalizedName = String(regionName).trim();
      const regionSuffix = code.includes("-") ? code.split("-").pop() : code;
      const canadaProfile = country.code === "CA" ? canadaRegionProfiles[regionSuffix] || null : null;
      const regionLatitude = canadaProfile ? canadaProfile.latitude : country.latitude;
      const regionLongitude = canadaProfile ? canadaProfile.longitude : country.longitude;
      const shippingZone = canadaProfile ? canadaProfile.shippingZone : `${country.shippingZone}-${code}`;
      const taxRegion = canadaProfile ? canadaProfile.taxRegion : `${country.taxZone}-${code}`;
      const region = {
        code,
        countryCode: country.code,
        name: normalizedName,
        type,
        shippingZone,
        taxRegion,
        timezone: Array.isArray(country.timezones) && country.timezones.length ? country.timezones[0] : "UTC",
        flagUrl: `/assets/flags/regions/${code.toLowerCase()}.png`,
        flagRemoteUrl: `https://flagcdn.com/w320/${code.toLowerCase()}.png`,
        latitude: regionLatitude,
        longitude: regionLongitude,
        population: Math.max(0, Math.round(country.population / Math.max(regionNames.length, 1))),
        area: Math.max(0, Math.round(country.area / Math.max(regionNames.length, 1))),
        isRemoteArea: /island|territory|archipelago|nunavut|yukon|alaska|northwest territories|greenland/i.test(normalizedName),
        isIsland: /island|île|isles|archipelago/i.test(normalizedName),
        createdAt: nowIso,
        updatedAt: nowIso
      };

      regionRows.push(region);

      const metroDefinitions = Array.isArray(legacy?.metroAreasByCountryRegion?.[country.code]?.[regionName])
        ? legacy.metroAreasByCountryRegion[country.code][regionName]
        : [];

      if (metroDefinitions.length) {
        metroDefinitions.forEach((definition, metroIndex) => {
          const cities = collectMetroCities([definition]);
          const metro = {
            code: String(definition?.code || `${country.code}-${code}-${metroIndex + 1}`).trim(),
            countryCode: country.code,
            regionCode: code,
            name: String(definition?.name || `${country.name} ${normalizedName} Metro`).trim(),
            cities,
            center: String(definition?.center || cities[0] || normalizedName).trim(),
            latitude: regionLatitude,
            longitude: regionLongitude,
            radius: Number(definition?.radius || 40),
            population: Math.round(country.population / Math.max(metroDefinitions.length || 1, 1)),
            createdAt: nowIso,
            updatedAt: nowIso
          };

          metros.push(metro);
        });
      }
    });

    regions[country.code] = regionRows;
    metroAreas[country.code] = metros;
  });

  return { regions, metroAreas };
}

function toGeneratedModule({ countries, regions, metroAreas, metadata }) {
  return `export const worldCountries = ${JSON.stringify(countries, null, 2)};\n\nexport const worldRegions = ${JSON.stringify(regions, null, 2)};\n\nexport const worldMetroAreas = ${JSON.stringify(metroAreas, null, 2)};\n\nexport const worldMetadata = ${JSON.stringify(metadata, null, 2)};\n`;
}

function toCountryModule(country) {
  return `export const countryData = ${JSON.stringify(country, null, 2)};\nexport default countryData;\n`;
}

function toRegionModule(regions) {
  return `export const regionData = ${JSON.stringify(regions, null, 2)};\nexport default regionData;\n`;
}

function toMetroModule(metroAreas) {
  return `export const metroAreasData = ${JSON.stringify(metroAreas, null, 2)};\nexport default metroAreasData;\n`;
}

function normalizeWorldPayload(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;

  if (payload && typeof payload === "object") {
    const values = Object.values(payload).filter((entry) => entry && typeof entry === "object");
    const candidates = values.filter((entry) => {
      return entry.cca2 || (entry.name && (entry.name.common || entry.name.official));
    });
    if (candidates.length) return candidates;
  }

  return [];
}

async function main() {
  const nowIso = new Date().toISOString();
  const legacy = loadLegacy();
  const response = await fetch(WORLD_ENDPOINT);

  if (!response.ok) {
    throw new Error(`Failed to sync world data: HTTP ${response.status}`);
  }

  const payload = await response.json();
  const worldRaw = normalizeWorldPayload(payload);

  if (!Array.isArray(worldRaw) || worldRaw.length === 0) {
    throw new Error(`Unexpected world data response shape from ${response.url}`);
  }

  const countries = worldRaw
    .map((country) => mapCountry(country, nowIso))
    .filter((country) => country.code.length === 2)
    .sort((a, b) => a.code.localeCompare(b.code));

  const { regions, metroAreas } = buildRegionsAndMetro(countries, nowIso, legacy);

  const metadata = {
    source: "mledoze-countries",
    endpoint: WORLD_ENDPOINT,
    generatedAt: nowIso,
    totalCountries: countries.length,
    legacyRegionsIntegrated: Boolean(legacy),
    totalRegionCountries: Object.keys(regions).filter((code) => (regions[code] || []).length > 0).length
  };

  fs.rmSync(path.join(dataDir, "generated"), { recursive: true, force: true });
  fs.rmSync(countriesDir, { recursive: true, force: true });
  fs.rmSync(regionsDir, { recursive: true, force: true });
  fs.rmSync(metroDir, { recursive: true, force: true });

  ensureDir(dataDir);
  ensureDir(countriesDir);
  ensureDir(regionsDir);
  ensureDir(metroDir);

  countries.forEach((country) => {
    fs.writeFileSync(path.join(countriesDir, `${country.code.toLowerCase()}.js`), toCountryModule(country), "utf8");
    fs.writeFileSync(path.join(regionsDir, `${country.code.toLowerCase()}.js`), toRegionModule(regions[country.code] || []), "utf8");
    fs.writeFileSync(path.join(metroDir, `${country.code.toLowerCase()}.js`), toMetroModule(metroAreas[country.code] || []), "utf8");
  });

  fs.writeFileSync(worldPath, toGeneratedModule({ countries, regions, metroAreas, metadata }), "utf8");

  console.log(`World data synced: ${countries.length} countries.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
