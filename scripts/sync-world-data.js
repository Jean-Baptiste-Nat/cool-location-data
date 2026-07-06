import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const generatedPath = path.join(rootDir, "src", "data", "generated", "world.generated.js");
const legacySourcePath = path.join(rootDir, "country-state-code-phone-data.js");

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
      if (depth === 0) {
        return content.slice(start, i + 1);
      }
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
    const officialRegionCodesByCountry = parseObjectLiteral(
      extractObjectLiteral(source, "officialRegionCodesByCountry")
    );
    const metroAreasByCountryRegion = parseObjectLiteral(
      extractObjectLiteral(source, "metroAreasByCountryRegion")
    );

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

  countries.forEach((country) => {
    const regionNames = Array.isArray(legacy?.regionsByCountry?.[country.code])
      ? legacy.regionsByCountry[country.code]
      : [];

    const countryLanguages = uniqueStrings(
      typeof legacy?.getCountryLanguages === "function"
        ? legacy.getCountryLanguages(country.code)
        : country.languages
    );

    const regionRows = regionNames.map((regionName, index) => {
      const code = typeof legacy?.getRegionCode === "function"
        ? legacy.getRegionCode(country.code, regionName)
        : legacy?.officialRegionCodesByCountry?.[country.code]?.[regionName] ||
          `${country.code}-${slugifyRegion(regionName).slice(0, 3) || `R${index + 1}`}`;

      const taxRegion = country.taxZone;

      const timezone = Array.isArray(country.timezones) && country.timezones.length
        ? country.timezones[0]
        : "UTC";

      const isIsland = /island|islands|ile|iles|atoll/i.test(regionName);
      const isRemoteArea = isIsland || /north|arctic|territories|nunavut|yukon|remote/i.test(regionName);

      return {
        code,
        name: regionName,
        type: "region",
        flagUrl: `/assets/flags/regions/${code.toLowerCase()}.png`,
        flagEmoji: country.flagEmoji,
        languages: countryLanguages.length ? countryLanguages : [country.primaryLanguage || "en"],
        primaryLanguage: countryLanguages[0] || country.primaryLanguage || "en",
        shippingZone: country.shippingZone,
        taxRegion,
        geographicalRegion: country.geographicalRegion,
        latitude: Number(country.latitude || 0),
        longitude: Number(country.longitude || 0),
        timezone,
        verified: true,
        isRemoteArea,
        isIsland,
        population: 0,
        area: 0,
        createdAt: nowIso,
        updatedAt: nowIso
      };
    });

    const metros = regionRows.flatMap((region) => {
      const countryMetro = legacy?.metroAreasByCountryRegion?.[country.code] || {};
      const raw = countryMetro[region.name] || countryMetro[region.code] || [];
      if (!Array.isArray(raw) || !raw.length) return [];

      return raw.map((metro, index) => {
        const cities = Array.isArray(metro.cities)
          ? metro.cities.map((city) => String(city))
          : [];

        return {
          countryCode: country.code,
          regionCode: region.code,
          code: metro.code || `${region.code}-M${index + 1}`,
          name: metro.name || `${region.name} Metro`,
          cities,
          center: metro.center || cities[0] || region.name,
          latitude: Number(metro.latitude || region.latitude || country.latitude || 0),
          longitude: Number(metro.longitude || region.longitude || country.longitude || 0),
          radius: Number(metro.radius || 40),
          population: Number(metro.population || 0)
        };
      });
    });

    regions[country.code] = regionRows;
    metroAreas[country.code] = metros;
  });

  return { regions, metroAreas };
}

function toGeneratedModule({ countries, regions, metroAreas, metadata }) {
  return `export const worldCountries = ${JSON.stringify(countries, null, 2)};\n\nexport const worldRegions = ${JSON.stringify(regions, null, 2)};\n\nexport const worldMetroAreas = ${JSON.stringify(metroAreas, null, 2)};\n\nexport const worldMetadata = ${JSON.stringify(metadata, null, 2)};\n`;
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

  ensureDir(path.dirname(generatedPath));
  const moduleCode = toGeneratedModule({ countries, regions, metroAreas, metadata });
  fs.writeFileSync(generatedPath, moduleCode, "utf8");

  console.log(`World data synced: ${countries.length} countries.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
