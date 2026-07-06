const express = require("express");
const cors = require("cors");
const { onRequest } = require("firebase-functions/v2/https");
const data = require("../public/location-data.json");

const app = express();
app.use(cors({ origin: true }));

function normalize(value) {
  return String(value || "").trim().toUpperCase();
}

function findCountry(input) {
  const query = String(input || "").trim().toLowerCase();
  if (!query) return null;

  return (
    data.countries.find((country) => {
      return (
        country.code.toLowerCase() === query ||
        country.code3.toLowerCase() === query ||
        country.name.toLowerCase() === query ||
        country.officialName.toLowerCase() === query
      );
    }) || null
  );
}

function findRegion(countryCode, regionValue) {
  const list = data.regions[normalize(countryCode)] || [];
  const query = String(regionValue || "").trim().toLowerCase();
  if (!query) return null;

  const countryPrefix = `${normalize(countryCode).toLowerCase()}-`;
  const shortCode = query.includes("-") ? query : `${countryPrefix}${query}`;

  return (
    list.find((region) => region.code.toLowerCase() === query) ||
    list.find((region) => region.code.toLowerCase() === shortCode) ||
    list.find((region) => region.name.toLowerCase() === query) ||
    null
  );
}

let lastRuntimeRefresh = new Date().toISOString();

app.get("/api/countries", (_req, res) => {
  res.json(data.countries);
});

app.get("/api/countries/:country", (req, res) => {
  const country = findCountry(req.params.country);
  if (!country) return res.status(404).json({ error: "Country not found" });
  return res.json(country);
});

app.get("/api/countries/:country/regions", (req, res) => {
  const country = findCountry(req.params.country);
  if (!country) return res.status(404).json({ error: "Country not found" });
  return res.json(data.regions[country.code] || []);
});

app.get("/api/countries/:country/regions/:region", (req, res) => {
  const country = findCountry(req.params.country);
  if (!country) return res.status(404).json({ error: "Country not found" });

  const region = findRegion(country.code, req.params.region);
  if (!region) return res.status(404).json({ error: "Region not found" });
  return res.json(region);
});

app.get("/api/countries/:country/metro", (req, res) => {
  const country = findCountry(req.params.country);
  if (!country) return res.status(404).json({ error: "Country not found" });

  const list = data.metroAreas[country.code] || [];
  return res.json(list);
});

app.get("/api/search", (req, res) => {
  const query = String(req.query.q || "").trim().toLowerCase();
  if (!query) return res.json({ countries: [], regions: [], cities: [] });

  const countries = data.countries.filter((country) => {
    return (
      country.code.toLowerCase().includes(query) ||
      country.code3.toLowerCase().includes(query) ||
      country.name.toLowerCase().includes(query) ||
      country.officialName.toLowerCase().includes(query)
    );
  });

  const regions = Object.keys(data.regions).flatMap((countryCode) => {
    return data.regions[countryCode].filter((region) => {
      return region.name.toLowerCase().includes(query) || region.code.toLowerCase().includes(query);
    });
  });

  const cities = Object.keys(data.metroAreas).flatMap((countryCode) => {
    return data.metroAreas[countryCode].flatMap((metro) => {
      return metro.cities
        .filter((city) => city.toLowerCase().includes(query))
        .map((city) => ({
          city,
          metroCode: metro.code,
          metroName: metro.name,
          countryCode: metro.countryCode,
          regionCode: metro.regionCode
        }));
    });
  });

  return res.json({ countries, regions, cities });
});

app.get("/api/languages", (_req, res) => {
  const map = new Map();
  data.countries.forEach((country) => {
    country.languages.forEach((lang) => {
      if (!map.has(lang)) map.set(lang, []);
      map.get(lang).push(country.code);
    });
  });
  res.json(Object.fromEntries(map.entries()));
});

app.get("/api/currencies", (_req, res) => {
  const map = new Map();
  data.countries.forEach((country) => {
    const key = country.currency;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(country.code);
  });
  res.json(Object.fromEntries(map.entries()));
});

app.get("/api/shipping", (_req, res) => {
  const zones = data.countries.map((country) => ({
    countryCode: country.code,
    shippingZone: country.shippingZone
  }));
  res.json(zones);
});

app.get("/api/taxes", (_req, res) => {
  const taxes = data.countries.map((country) => ({
    countryCode: country.code,
    taxZone: country.taxZone
  }));
  res.json(taxes);
});

app.get("/api/timezones", (_req, res) => {
  const timezones = data.countries.map((country) => ({
    countryCode: country.code,
    timezones: country.timezones
  }));
  res.json(timezones);
});

app.get("/api/flags", (_req, res) => {
  const flags = data.countries.map((country) => ({
    countryCode: country.code,
    flagUrl: country.flagUrl,
    flagRemoteUrl: country.flagRemoteUrl
  }));
  res.json(flags);
});

app.get("/api/version", (_req, res) => {
  res.json(data.metadata);
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    countries: data.countries.length,
    lastBuildUpdate: data.metadata.lastUpdate,
    lastRuntimeRefresh
  });
});

app.post("/api/admin/refresh", (req, res) => {
  const authHeader = String(req.headers.authorization || "");
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  const expectedToken = String(process.env.API_REFRESH_TOKEN || "").trim();

  if (!expectedToken || token !== expectedToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  lastRuntimeRefresh = new Date().toISOString();
  return res.json({
    refreshed: true,
    lastRuntimeRefresh,
    note: "Static payload is rebuilt by CI sync workflow and deployed through Firebase Hosting/Functions."
  });
});

exports.api = onRequest(
  {
    cors: true,
    region: "us-central1"
  },
  app
);

module.exports.app = app;
