import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { VERSION, BUILD, toPayload } from "./src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname);
const publicDir = path.join(rootDir, "public");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function createUMDBundle(payload) {
  const payloadString = JSON.stringify(payload);
  const lines = [
    `/* Cool Location Data v${VERSION} */`,
    "(function (root, factory) {",
    '  if (typeof module === "object" && module.exports) {',
    "    module.exports = factory();",
    "  } else {",
    "    root.CoolLocationData = factory();",
    "  }",
    '})(typeof self !== "undefined" ? self : this, function () {',
    `  var DATA = ${payloadString};`,
    "",
    '  function n(v) { return String(v || "").trim().toUpperCase(); }',
    '  function s(v) { return String(v || "").trim().toLowerCase(); }',
    "",
    "  function countries() { return DATA.countries.slice(); }",
    "  function country(v) {",
    "    var q = s(v);",
    "    return DATA.countries.find(function (c) {",
    '      return c.code.toLowerCase() === q || c.code3.toLowerCase() === q || c.name.toLowerCase() === q || c.officialName.toLowerCase() === q;',
    "    }) || null;",
    "  }",
    '  function regions(code) { return (DATA.regions[n(code)] || []).slice(); }',
    "  function region(code, regionValue) {",
    "    var q = s(regionValue);",
    '    return (DATA.regions[n(code)] || []).find(function (r) { return r.code.toLowerCase() === q || r.name.toLowerCase() === q; }) || null;',
    "  }",
    "  function metros(code, regionValue) {",
    '    var list = (DATA.metroAreas[n(code)] || []).slice();',
    "    if (!regionValue) return list;",
    "    var r = region(code, regionValue);",
    '    return r ? list.filter(function (m) { return m.regionCode === r.code; }) : [];',
    "  }",
    "  function haversine(a, b) {",
    "    var R = 6371;",
    "    var dLat = (b.latitude - a.latitude) * Math.PI / 180;",
    "    var dLon = (b.longitude - a.longitude) * Math.PI / 180;",
    "    var lat1 = a.latitude * Math.PI / 180;",
    "    var lat2 = b.latitude * Math.PI / 180;",
    "    var x = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);",
    "    var y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));",
    "    return Number((R * y).toFixed(2));",
    "  }",
    "",
    "  var api = {",
    `    version: \"${VERSION}\",`,
    `    build: \"${BUILD}\",`,
    '    lastUpdate: DATA.generatedMetadata ? DATA.generatedMetadata.generatedAt : null,',
    "    getAllCountries: countries,",
    "    getCountryData: country,",
    "    getCountryName: function (v) { var c = country(v); return c ? c.name : null; },",
    "    getCountryFlag: function (v) { var c = country(v); return c ? c.flagUrl : null; },",
    "    getCountryCurrency: function (v) { var c = country(v); return c ? c.currency : null; },",
    "    getCountryLanguages: function (v) { var c = country(v); return c ? c.languages : []; },",
    "    getCountryPhoneCode: function (v) { var c = country(v); return c ? c.phoneCode : null; },",
    "    getCountryTimezones: function (v) { var c = country(v); return c ? c.timezones : []; },",
    "    getCountryCapital: function (v) { var c = country(v); return c ? c.capital : null; },",
    "    getRegions: regions,",
    "    getRegion: function (code, value) { return region(code, value); },",
    "    getRegionName: function (code, value) { var r = region(code, value); return r ? r.name : null; },",
    "    getRegionCode: function (code, value) { var r = region(code, value); return r ? r.code : null; },",
    "    getMetroAreas: metros,",
    "    getShippingZone: function (code, value) { var c = country(code); var r = region(code, value); return r ? r.shippingZone || (c ? c.shippingZone : null) : (c ? c.shippingZone : null); },",
    "    getTaxZone: function (code, value) { var c = country(code); var r = region(code, value); return r ? r.taxZone || (c ? c.taxZone : null) : (c ? c.taxZone : null); },",
    "    getDistanceBetweenRegions: function (aCode, aRegion, bCode, bRegion) {",
    "      var a = region(aCode, aRegion);",
    "      var b = region(bCode, bRegion);",
    "      if (!a || !b) return null;",
    '      if (typeof a.latitude !== "number" || typeof a.longitude !== "number") return null;',
    '      if (typeof b.latitude !== "number" || typeof b.longitude !== "number") return null;',
    "      return haversine(a, b);",
    "    },",
    "    searchCountry: function (query) {",
    "      var q = s(query);",
    "      if (!q) return [];",
    "      return DATA.countries.filter(function (c) {",
    "        return c.code.toLowerCase().includes(q) || c.code3.toLowerCase().includes(q) || c.name.toLowerCase().includes(q) || c.officialName.toLowerCase().includes(q);",
    "      });",
    "    },",
    "    searchRegion: function (query, code) {",
    "      var q = s(query);",
    "      if (!q) return [];",
    "      return regions(code).filter(function (r) {",
    "        return r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q);",
    "      });",
    "    },",
    "    searchCity: function (query) {",
    "      var q = s(query);",
    "      if (!q) return [];",
    "      return Object.values(DATA.metroAreas || {}).flatMap(function (list) {",
    "        return list.filter(function (metro) {",
    '          return String(metro.name || "").toLowerCase().includes(q) || String(metro.center || "").toLowerCase().includes(q);',
    "        });",
    "      });",
    "    },",
    `    getApiVersion: function () { return \"${VERSION}-${BUILD}\"; },`,
    "    toPayload: function () { return DATA; }",
    "  };",
    "",
    "  return api;",
    "});"
  ];

  return lines.join("\n");
}

async function minifyJs(source) {
  try {
    const terser = await import("terser");
    const result = await terser.minify(source, {
      compress: true,
      mangle: true,
      format: { comments: false }
    });
    return result.code || source;
  } catch {
    return source;
  }
}

async function main() {
  ensureDir(publicDir);
  const payload = toPayload();
  const jsonPath = path.join(publicDir, "location-data.json");
  const jsPath = path.join(publicDir, "location-data.js");
  const minPath = path.join(publicDir, "location-data.min.js");

  fs.writeFileSync(jsonPath, JSON.stringify(payload, null, 2), "utf8");

  const jsBundle = createUMDBundle(payload);
  fs.writeFileSync(jsPath, jsBundle, "utf8");

  const min = await minifyJs(jsBundle);
  fs.writeFileSync(minPath, min, "utf8");

  console.log("Generated location-data.json, location-data.js and location-data.min.js");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
