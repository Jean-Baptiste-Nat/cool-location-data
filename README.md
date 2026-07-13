# Cool Location Data

Global location intelligence library for shipping, taxes, checkout, address validation, payments, geolocation, and analytics.

## What This Project Provides

- JavaScript helpers for country, region, metro, and search lookups
- Generated world dataset with country, region, and metro files
- Browser bundle (`public/location-data.js` and `public/location-data.min.js`)
- JSON payload (`public/location-data.json`)
- REST API via Firebase Functions (`functions/index.js`)
- Documentation UI in `public/docs/index.html`

## Install

```bash
npm install cool-location-data
```

## Quick Start (ESM)

```js
import {
  getCountryData,
  getRegion,
  getCountryLanguages,
  searchCity
} from "cool-location-data";

const country = getCountryData("CA");
const region = getRegion("CA", "QC");
const languages = getCountryLanguages("CA");
const cityMatches = searchCity("montreal");
```

## Quick Start (Script Tag)

```html
<script src="https://cool-location-data.web.app/location-data.js"></script>
<script>
  const country = getCountryData("CA");
  const region = getRegion("CA", "QC");
  const cityMatches = searchCity("montreal");
</script>
```

## Region Code Behavior

Region outputs are normalized for display:

- `code`: short code (example: `QC`)
- `fullCode`: canonical full code (example: `CA-QC`)

This applies to helpers and REST responses for regions.

## Language Behavior

- Language keys are ISO-style language codes (for example `fra`, `eng`)
- `/api/languages` returns countries per language
- French (`fra`) now prioritizes `FR` as reference country

## Search Behavior

Search is accent-insensitive:

- `montreal` matches `Montréal`
- `quebec` matches `Québec`

## JavaScript Helpers

- `getAllCountries()`
- `getCountryData(countryCodeOrName)`
- `getCountryName(countryCodeOrName)`
- `getCountryFlag(countryCodeOrName)`
- `getCountryCurrency(countryCodeOrName)`
- `getCountryLanguages(countryCodeOrName)`
- `getCountryPhoneCode(countryCodeOrName)`
- `getCountryTimezones(countryCodeOrName)`
- `getCountryCapital(countryCodeOrName)`
- `getRegions(countryCodeOrName)`
- `getRegion(countryCodeOrName, regionCodeOrName)`
- `getRegionName(countryCodeOrName, regionCodeOrName)`
- `getRegionCode(countryCodeOrName, regionCodeOrName)`
- `getMetroAreas(countryCodeOrName, regionCodeOrName)`
- `getShippingZone(countryCodeOrName, regionCodeOrName)`
- `getTaxZone(countryCodeOrName, regionCodeOrName)`
- `getDistanceBetweenRegions(countryCodeOrName, regionA, regionB)`
- `searchCountry(query)`
- `searchRegion(query, countryCodeOrName)`
- `searchCity(query)`
- `getApiVersion()`
- `toPayload()`

## REST API

Base path: `/api`

- `GET /api/countries`
- `GET /api/countries/:country`
- `GET /api/countries/:country/regions`
- `GET /api/countries/:country/regions/:region`
- `GET /api/countries/:country/metro`
- `GET /api/search?q=montreal`
- `GET /api/languages`
- `GET /api/currencies`
- `GET /api/shipping`
- `GET /api/taxes`
- `GET /api/timezones`
- `GET /api/flags`
- `GET /api/version`
- `GET /api/health`
- `POST /api/admin/refresh` (requires `API_REFRESH_TOKEN`)

## Build And Data Commands

```bash
npm run sync:world
npm run sync:assets
npm run update:data
npm run build:data
npm run download:flags
npm run download:icons
npm run build
npm run lint
npm test
```

## Firebase Deploy

```bash
cd functions
npm install
cd ..
firebase deploy --only functions,hosting
```

## Notes For Beginners

- Start with `public/docs/index.html` to test requests quickly.
- Use country code first (example `CA`), then region short code (example `QC`).
- If you need exact region identity for storage, use `fullCode`.
- Re-run `npm run build:data` after data syncs to refresh `public/location-data.json`.
