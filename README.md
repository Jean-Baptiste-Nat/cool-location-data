# Cool Location Data

Professional global location intelligence library designed for shipping, taxes, checkout, address validation, payments, geolocation and analytics.

## Goals

- Script tag support
- ES6 module support
- npm package structure
- REST API support
- Firebase Hosting + Functions deployment
- CDN readiness

## Current rollout stage

- Stage 1: Architecture complete
- Stage 2: Canada implemented
- Next: US, MX, FR, GB, DE

## Real-time global data mode

- World countries are synced automatically from a live dataset source into `src/data/world.js` and per-country files under `src/data/countries`, `src/data/regions`, and `src/data/metro`.
- Canada remains curated and overrides generated data for production-grade regional details.
- Automated sync can run hourly via GitHub Actions schedule.
- Build output is regenerated after each sync for Hosting/API consistency.

## Project structure

- public/index.html: Main landing and docs entry point
- public/location-data.js: Browser-ready UMD bundle
- public/location-data.min.js: Minified bundle
- public/location-data.json: Full payload JSON
- public/docs/index.html: Full technical documentation
- public/assets/flags/countries: Country flags
- public/assets/flags/regions: Regional flags
- functions/index.js: Firebase Functions REST API
- generate-json.js: Build JSON + bundles
- download-flags.js: Download flags with fallback
- update-data.js: Data update report and rollout tracking
- src: Source dataset + helpers API

## Install and use

### npm

```bash
npm install cool-location-data
```

```js
import {
  getCountryData,
  getRegion,
  getShippingZone,
  getCountryCurrency
} from "cool-location-data";

const country = getCountryData("CA");
const region = getRegion("CA", "QC");
const shipping = getShippingZone("CA", "QC");
const currency = getCountryCurrency("CA");
```

### Script tag

```html
<script src="https://cool-location-data.web.app/location-data.js"></script>
<script>
  const country = getCountryData("CA");
  const region = getRegion("CA", "QC");
  const shipping = getShippingZone("CA", "QC");
  const currency = getCountryCurrency("CA");
</script>
```

### CDN

Once published to npm:

```html
<script src="https://cdn.jsdelivr.net/npm/cool-location-data@1/dist/location-data.min.js"></script>
```

or

```html
<script src="https://unpkg.com/cool-location-data/public/location-data.min.js"></script>
```

## Helpers implemented

- getAllCountries()
- getCountryData()
- getCountryName()
- getCountryFlag()
- getCountryCurrency()
- getCountryLanguages()
- getCountryPhoneCode()
- getCountryTimezones()
- getCountryCapital()
- getRegions()
- getRegion()
- getRegionName()
- getRegionCode()
- getMetroAreas()
- getShippingZone()
- getTaxZone()
- getDistanceBetweenRegions()
- searchCountry()
- searchRegion()
- searchCity()

## REST API routes

- GET /api/countries
- GET /api/countries/:country
- GET /api/countries/:country/regions
- GET /api/countries/:country/regions/:region
- GET /api/countries/:country/metro
- GET /api/search
- GET /api/languages
- GET /api/currencies
- GET /api/shipping
- GET /api/taxes
- GET /api/timezones
- GET /api/flags
- GET /api/version

## Build scripts

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

## Automated quality and delivery

- `.github/workflows/ci.yml`
  - Lint
  - Build
  - Tests (helpers + API)
- `.github/workflows/sync-assets-and-data.yml`
  - Hourly sync of world data + flags + icons
  - Auto-commit generated updates
- `.github/workflows/deploy-firebase.yml`
  - Deploy Functions + Hosting on push/manual trigger

### Required GitHub secrets

- `FIREBASE_TOKEN` for deploy workflow

## Firebase deployment

```bash
cd functions
npm install
cd ..
firebase deploy --only functions,hosting
```

API runtime endpoints include:

- `GET /api/health`
- `POST /api/admin/refresh` (requires `API_REFRESH_TOKEN` bearer token)

## Versioning exposure

`window.CoolLocationData` includes:

- version
- build
- lastUpdate

## Notes

This repository now provides a scalable architecture for continent-by-continent expansion with stable APIs and independent deployment.
