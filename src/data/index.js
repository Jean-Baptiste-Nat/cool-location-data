import canada from "./countries/ca.js";
import canadaRegions from "./regions/ca.js";
import canadaMetroAreas from "./metro/ca.js";
import {
  worldCountries,
  worldRegions,
  worldMetroAreas,
  worldMetadata
} from "./world.js";

const countriesMap = new Map(worldCountries.map((country) => [country.code, country]));
countriesMap.set(canada.code, canada);

export const countries = Array.from(countriesMap.values()).sort((a, b) => {
  return a.code.localeCompare(b.code);
});

export const regions = {
  ...worldRegions,
  CA: canadaRegions
};

export const metroAreas = {
  ...worldMetroAreas,
  CA: canadaMetroAreas
};

export const generatedMetadata = worldMetadata;
