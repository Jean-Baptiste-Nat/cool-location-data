import { countries, regions, metroAreas, generatedMetadata } from "../data/index.js";
import { haversineDistanceKm } from "./distance.js";
import { VERSION, BUILD, LAST_UPDATE } from "../version.js";

const countryMap = new Map(countries.map((country) => [country.code.toUpperCase(), country]));

function normalizeCode(value) {
  return String(value || "").trim().toUpperCase();
}

function normalizeSearch(value) {
  return String(value || "").trim().toLowerCase();
}

function regionList(countryCode) {
  return regions[normalizeCode(countryCode)] || [];
}

function metroList(countryCode) {
  return metroAreas[normalizeCode(countryCode)] || [];
}

function findCountry(countryCodeOrName) {
  const search = normalizeSearch(countryCodeOrName);
  if (!search) return null;

  if (search.length <= 3) {
    const byCode = countryMap.get(search.toUpperCase());
    if (byCode) return byCode;
  }

  for (const country of countries) {
    if (
      country.name.toLowerCase() === search ||
      country.officialName.toLowerCase() === search ||
      country.code3.toLowerCase() === search
    ) {
      return country;
    }
  }

  return null;
}

function findRegion(countryCode, regionCodeOrName) {
  const list = regionList(countryCode);
  const search = normalizeSearch(regionCodeOrName);
  if (!search) return null;

  const countryPrefix = `${normalizeCode(countryCode).toLowerCase()}-`;
  const shortCode = search.includes("-") ? search : `${countryPrefix}${search}`;

  return (
    list.find((region) => region.code.toLowerCase() === search) ||
    list.find((region) => region.code.toLowerCase() === shortCode) ||
    list.find((region) => region.name.toLowerCase() === search) ||
    null
  );
}

function findCity(searchText) {
  const search = normalizeSearch(searchText);
  if (!search) return null;

  for (const countryCode of Object.keys(metroAreas)) {
    const metros = metroList(countryCode);
    for (const metro of metros) {
      const city = metro.cities.find((item) => item.toLowerCase() === search);
      if (city) {
        return {
          city,
          metroCode: metro.code,
          metroName: metro.name,
          regionCode: metro.regionCode,
          countryCode: metro.countryCode
        };
      }
    }
  }

  return null;
}

export function getAllCountries() {
  return [...countries];
}

export function getCountryData(countryCodeOrName) {
  return findCountry(countryCodeOrName);
}

export function getCountryName(countryCodeOrName) {
  const country = findCountry(countryCodeOrName);
  return country ? country.name : null;
}

export function getCountryFlag(countryCodeOrName) {
  const country = findCountry(countryCodeOrName);
  return country
    ? {
        flagEmoji: country.flagEmoji,
        flagUrl: country.flagUrl,
        flagRemoteUrl: country.flagRemoteUrl
      }
    : null;
}

export function getCountryCurrency(countryCodeOrName) {
  const country = findCountry(countryCodeOrName);
  return country
    ? {
        code: country.currency,
        symbol: country.currencySymbol
      }
    : null;
}

export function getCountryLanguages(countryCodeOrName) {
  const country = findCountry(countryCodeOrName);
  return country ? country.languages : [];
}

export function getCountryPhoneCode(countryCodeOrName) {
  const country = findCountry(countryCodeOrName);
  return country ? country.phoneCode : null;
}

export function getCountryTimezones(countryCodeOrName) {
  const country = findCountry(countryCodeOrName);
  return country ? country.timezones : [];
}

export function getCountryCapital(countryCodeOrName) {
  const country = findCountry(countryCodeOrName);
  return country ? country.capital : null;
}

export function getRegions(countryCodeOrName) {
  const country = findCountry(countryCodeOrName);
  if (!country) return [];
  return [...regionList(country.code)];
}

export function getRegion(countryCodeOrName, regionCodeOrName) {
  const country = findCountry(countryCodeOrName);
  if (!country) return null;
  return findRegion(country.code, regionCodeOrName);
}

export function getRegionName(countryCodeOrName, regionCodeOrName) {
  const region = getRegion(countryCodeOrName, regionCodeOrName);
  return region ? region.name : null;
}

export function getRegionCode(countryCodeOrName, regionCodeOrName) {
  const region = getRegion(countryCodeOrName, regionCodeOrName);
  return region ? region.code : null;
}

export function getMetroAreas(countryCodeOrName, regionCodeOrName = null) {
  const country = findCountry(countryCodeOrName);
  if (!country) return [];

  const list = metroList(country.code);
  if (!regionCodeOrName) return [...list];

  const region = findRegion(country.code, regionCodeOrName);
  if (!region) return [];

  return list.filter((metro) => metro.regionCode === region.code);
}

export function getShippingZone(countryCodeOrName, regionCodeOrName = null) {
  const country = findCountry(countryCodeOrName);
  if (!country) return null;

  if (!regionCodeOrName) return country.shippingZone;

  const region = findRegion(country.code, regionCodeOrName);
  return region ? region.shippingZone : country.shippingZone;
}

export function getTaxZone(countryCodeOrName, regionCodeOrName = null) {
  const country = findCountry(countryCodeOrName);
  if (!country) return null;

  if (!regionCodeOrName) return country.taxZone;

  const region = findRegion(country.code, regionCodeOrName);
  return region ? region.taxRegion : country.taxZone;
}

export function getDistanceBetweenRegions(
  countryCodeOrName,
  regionCodeOrNameA,
  regionCodeOrNameB
) {
  const country = findCountry(countryCodeOrName);
  if (!country) return null;

  const regionA = findRegion(country.code, regionCodeOrNameA);
  const regionB = findRegion(country.code, regionCodeOrNameB);
  if (!regionA || !regionB) return null;

  return {
    from: regionA.code,
    to: regionB.code,
    distanceKm: Number(
      haversineDistanceKm(
        regionA.latitude,
        regionA.longitude,
        regionB.latitude,
        regionB.longitude
      ).toFixed(2)
    )
  };
}

export function searchCountry(query) {
  const search = normalizeSearch(query);
  if (!search) return [];

  return countries.filter((country) => {
    return (
      country.code.toLowerCase().includes(search) ||
      country.code3.toLowerCase().includes(search) ||
      country.name.toLowerCase().includes(search) ||
      country.officialName.toLowerCase().includes(search)
    );
  });
}

export function searchRegion(query, countryCodeOrName = null) {
  const search = normalizeSearch(query);
  if (!search) return [];

  if (countryCodeOrName) {
    const country = findCountry(countryCodeOrName);
    if (!country) return [];
    return regionList(country.code).filter((region) =>
      region.name.toLowerCase().includes(search) || region.code.toLowerCase().includes(search)
    );
  }

  return Object.keys(regions).flatMap((code) => {
    return regionList(code).filter((region) => {
      return region.name.toLowerCase().includes(search) || region.code.toLowerCase().includes(search);
    });
  });
}

export function searchCity(query) {
  const search = normalizeSearch(query);
  if (!search) return [];

  return Object.keys(metroAreas).flatMap((countryCode) => {
    return metroList(countryCode).flatMap((metro) => {
      return metro.cities
        .filter((city) => city.toLowerCase().includes(search))
        .map((city) => ({
          city,
          metroCode: metro.code,
          metroName: metro.name,
          countryCode: metro.countryCode,
          regionCode: metro.regionCode
        }));
    });
  });
}

export function getApiVersion() {
  return {
    version: VERSION,
    build: BUILD,
    lastUpdate: generatedMetadata?.generatedAt || LAST_UPDATE,
    dataSource: generatedMetadata?.source || "unknown",
    totalCountries: generatedMetadata?.totalCountries || countries.length,
    totalRegionCountries: generatedMetadata?.totalRegionCountries || 0
  };
}

export function toPayload() {
  return {
    metadata: getApiVersion(),
    countries,
    regions,
    metroAreas
  };
}

export const __internal = {
  findCity
};
