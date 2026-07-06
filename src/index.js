import {
  getAllCountries,
  getCountryData,
  getCountryName,
  getCountryFlag,
  getCountryCurrency,
  getCountryLanguages,
  getCountryPhoneCode,
  getCountryTimezones,
  getCountryCapital,
  getRegions,
  getRegion,
  getRegionName,
  getRegionCode,
  getMetroAreas,
  getShippingZone,
  getTaxZone,
  getDistanceBetweenRegions,
  searchCountry,
  searchRegion,
  searchCity,
  getApiVersion,
  toPayload
} from "./helpers/core.js";
import { VERSION, BUILD, LAST_UPDATE } from "./version.js";

const api = {
  version: VERSION,
  build: BUILD,
  lastUpdate: LAST_UPDATE,
  getAllCountries,
  getCountryData,
  getCountryName,
  getCountryFlag,
  getCountryCurrency,
  getCountryLanguages,
  getCountryPhoneCode,
  getCountryTimezones,
  getCountryCapital,
  getRegions,
  getRegion,
  getRegionName,
  getRegionCode,
  getMetroAreas,
  getShippingZone,
  getTaxZone,
  getDistanceBetweenRegions,
  searchCountry,
  searchRegion,
  searchCity,
  getApiVersion,
  toPayload
};

if (typeof window !== "undefined") {
  window.CoolLocationData = api;
  window.getAllCountries = getAllCountries;
  window.getCountryData = getCountryData;
  window.getCountryName = getCountryName;
  window.getCountryFlag = getCountryFlag;
  window.getCountryCurrency = getCountryCurrency;
  window.getCountryLanguages = getCountryLanguages;
  window.getCountryPhoneCode = getCountryPhoneCode;
  window.getCountryTimezones = getCountryTimezones;
  window.getCountryCapital = getCountryCapital;
  window.getRegions = getRegions;
  window.getRegion = getRegion;
  window.getRegionName = getRegionName;
  window.getRegionCode = getRegionCode;
  window.getMetroAreas = getMetroAreas;
  window.getShippingZone = getShippingZone;
  window.getTaxZone = getTaxZone;
  window.getDistanceBetweenRegions = getDistanceBetweenRegions;
  window.searchCountry = searchCountry;
  window.searchRegion = searchRegion;
  window.searchCity = searchCity;
}

export {
  VERSION,
  BUILD,
  LAST_UPDATE,
  getAllCountries,
  getCountryData,
  getCountryName,
  getCountryFlag,
  getCountryCurrency,
  getCountryLanguages,
  getCountryPhoneCode,
  getCountryTimezones,
  getCountryCapital,
  getRegions,
  getRegion,
  getRegionName,
  getRegionCode,
  getMetroAreas,
  getShippingZone,
  getTaxZone,
  getDistanceBetweenRegions,
  searchCountry,
  searchRegion,
  searchCity,
  getApiVersion,
  toPayload
};

export default api;
