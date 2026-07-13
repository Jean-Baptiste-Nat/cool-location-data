import test from "node:test";
import assert from "node:assert/strict";

import {
  getAllCountries,
  getCountryData,
  getCountryCurrency,
  getCountryFlag,
  getRegions,
  getRegion,
  getShippingZone,
  searchCountry,
  searchCity,
  getDistanceBetweenRegions
} from "../src/index.js";

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

test("getAllCountries returns a non-empty world dataset", () => {
  const countries = getAllCountries();
  assert.ok(Array.isArray(countries));
  assert.ok(countries.length >= 200);
});

test("country lookup works with code and name", () => {
  const byCode = getCountryData("CA");
  const byName = getCountryData("Canada");

  assert.equal(byCode?.code, "CA");
  assert.equal(byName?.code, "CA");
  assert.equal(getCountryCurrency("CA")?.code, "CAD");
  assert.ok(getCountryFlag("CA")?.flagUrl.includes("/assets/flags/countries/ca.png"));
});

test("region and shipping helpers work for Canada", () => {
  const regions = getRegions("CA");
  assert.ok(regions.length >= 13);
  assert.equal(regions.find((region) => region.fullCode === "CA-QC")?.code, "QC");

  const qc = getRegion("CA", "QC");
  assert.equal(qc?.code, "QC");
  assert.equal(qc?.fullCode, "CA-QC");
  assert.equal(getShippingZone("CA", "QC"), "NA-CA-EAST");
});

test("search helpers return expected matches", () => {
  const countries = searchCountry("can");
  assert.ok(countries.some((country) => country.code === "CA"));

  const cities = searchCity("montreal");
  assert.ok(cities.some((item) => normalizeText(item.city) === "montreal"));
});

test("distance helper returns a positive value", () => {
  const distance = getDistanceBetweenRegions("CA", "QC", "ON");
  assert.ok(distance);
  assert.equal(distance.from, "QC");
  assert.equal(distance.to, "ON");
  assert.equal(distance.fromFullCode, "CA-QC");
  assert.equal(distance.toFullCode, "CA-ON");
  assert.ok(distance.distanceKm > 0);
});
