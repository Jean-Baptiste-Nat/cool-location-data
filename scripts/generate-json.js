import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  VERSION,
  BUILD,
  LAST_UPDATE,
  toPayload
} from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function createUMDBundle(payload) {
  const payloadString = JSON.stringify(payload);
  const source = `/* Cool Location Data v${VERSION} */\n(function (root, factory) {\n  if (typeof module === \"object\" && module.exports) {\n    module.exports = factory();\n  } else {\n    root.CoolLocationData = factory();\n  }\n})(typeof self !== \"undefined\" ? self : this, function () {\n  var DATA = ${payloadString};\n\n  function n(v) { return String(v || \"\").trim().toUpperCase(); }\n  function s(v) { return String(v || \"\").trim().toLowerCase(); }\n\n  function countries() { return DATA.countries.slice(); }\n  function country(v) {\n    var q = s(v);\n    return DATA.countries.find(function (c) {\n      return c.code.toLowerCase() === q || c.code3.toLowerCase() === q || c.name.toLowerCase() === q || c.officialName.toLowerCase() === q;\n    }) || null;\n  }\n  function regions(code) { return (DATA.regions[n(code)] || []).slice(); }\n  function region(code, regionValue) {\n    var q = s(regionValue);\n    return (DATA.regions[n(code)] || []).find(function (r) { return r.code.toLowerCase() === q || r.name.toLowerCase() === q; }) || null;\n  }\n  function metros(code, regionValue) {\n    var list = (DATA.metroAreas[n(code)] || []).slice();\n    if (!regionValue) return list;\n    var r = region(code, regionValue);\n    return r ? list.filter(function (m) { return m.regionCode === r.code; }) : [];\n  }\n  function haversine(a, b) {\n    var R = 6371;\n    var dLat = (b.latitude - a.latitude) * Math.PI / 180;\n    var dLon = (b.longitude - a.longitude) * Math.PI / 180;\n    var lat1 = a.latitude * Math.PI / 180;\n    var lat2 = b.latitude * Math.PI / 180;\n    var x = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);\n    var y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));\n    return Number((R * y).toFixed(2));\n  }\n\n  var api = {\n    version: \"${VERSION}\",\n    build: \"${BUILD}\",\n    lastUpdate: \"${LAST_UPDATE}\",\n    getAllCountries: countries,\n    getCountryData: country,\n    getCountryName: function (v) { var c = country(v); return c ? c.name : null; },\n    getCountryFlag: function (v) { var c = country(v); return c ? { flagEmoji: c.flagEmoji, flagUrl: c.flagUrl, flagRemoteUrl: c.flagRemoteUrl } : null; },\n    getCountryCurrency: function (v) { var c = country(v); return c ? { code: c.currency, symbol: c.currencySymbol } : null; },\n    getCountryLanguages: function (v) { var c = country(v); return c ? c.languages : []; },\n    getCountryPhoneCode: function (v) { var c = country(v); return c ? c.phoneCode : null; },\n    getCountryTimezones: function (v) { var c = country(v); return c ? c.timezones : []; },\n    getCountryCapital: function (v) { var c = country(v); return c ? c.capital : null; },\n    getRegions: regions,\n    getRegion: region,\n    getRegionName: function (c, r) { var x = region(c, r); return x ? x.name : null; },\n    getRegionCode: function (c, r) { var x = region(c, r); return x ? x.code : null; },\n    getMetroAreas: metros,\n    getShippingZone: function (c, r) { var cc = country(c); if (!cc) return null; if (!r) return cc.shippingZone; var rr = region(cc.code, r); return rr ? rr.shippingZone : cc.shippingZone; },\n    getTaxZone: function (c, r) { var cc = country(c); if (!cc) return null; if (!r) return cc.taxZone; var rr = region(cc.code, r); return rr ? rr.taxRegion : cc.taxZone; },\n    getDistanceBetweenRegions: function (c, a, b) { var ca = country(c); if (!ca) return null; var ra = region(ca.code, a); var rb = region(ca.code, b); if (!ra || !rb) return null; return { from: ra.code, to: rb.code, distanceKm: haversine(ra, rb) }; },\n    searchCountry: function (q) { var z = s(q); return DATA.countries.filter(function (c) { return c.code.toLowerCase().includes(z) || c.code3.toLowerCase().includes(z) || c.name.toLowerCase().includes(z) || c.officialName.toLowerCase().includes(z); }); },\n    searchRegion: function (q, code) { var z = s(q); var list = code ? (DATA.regions[n(code)] || []) : Object.keys(DATA.regions).flatMap(function (k) { return DATA.regions[k]; }); return list.filter(function (r) { return r.name.toLowerCase().includes(z) || r.code.toLowerCase().includes(z); }); },\n    searchCity: function (q) { var z = s(q); var out = []; Object.keys(DATA.metroAreas).forEach(function (k) { DATA.metroAreas[k].forEach(function (m) { m.cities.forEach(function (city) { if (city.toLowerCase().includes(z)) { out.push({ city: city, metroCode: m.code, metroName: m.name, countryCode: m.countryCode, regionCode: m.regionCode }); } }); }); }); return out; },\n    getApiVersion: function () { return DATA.metadata; },\n    toPayload: function () { return DATA; }\n  };\n\n  if (typeof window !== \"undefined\") {\n    window.CoolLocationData = api;\n    Object.keys(api).forEach(function (k) {\n      if (k.indexOf(\"get\") === 0 || k.indexOf(\"search\") === 0) window[k] = api[k];\n    });\n  }\n\n  return api;\n});\n`;

  return source;
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
