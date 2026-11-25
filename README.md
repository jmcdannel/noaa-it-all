# Field Book Forecast

A National Weather Service point forecast for your saved places, built as an installable PWA. It replaces the forecast.weather.gov MapClick page.

## What's here

- `app/` is the PWA. It is static files with no build step: `index.html`, `sw.js`, `manifest.webmanifest`, `icons/` and `vendor/`.
- `app/snapshot.json` is a saved forecast for the default place. The app uses it only when it has never loaded live data and cannot reach api.weather.gov.
- `artifact/forecast.html` is the same app packaged for a Claude artifact. Artifacts block outside requests, so this copy shows the labeled snapshot, and its map tiles, search and GPS don't work.
- `tools/snapshot.mjs` refreshes the snapshot: `node tools/snapshot.mjs`.
- `tools/build-artifact.mjs` rebuilds the artifact copy from `app/index.html`: `node tools/build-artifact.mjs`.

## Run locally

```bash
python3 -m http.server 8787 --directory app
```

Then open http://localhost:8787.

## Install on a phone

Install needs HTTPS. Put the `app/` folder on any static host, such as Vercel, Netlify, GitHub Pages or Cloudflare Pages. Then:

- **iPhone:** open the site in Safari, tap Share, then Add to Home Screen.
- **Android or desktop Chrome:** open Places and tap Install app, or use the browser's install button.

## Data sources

- Forecasts, hourly data, grid data (snowfall, gusts, snow level, feels-like) and alerts: api.weather.gov.
- Place search: Photon (photon.komoot.io), which uses OpenStreetMap data. Results are filtered to the US.
- Maps: OpenTopoMap and OpenStreetMap tiles.
- Radar: the NWS NEXRAD composite, served by the Iowa Environmental Mesonet.

## Updating

When you change `app/index.html` or any file cached by `sw.js`, bump `VERSION` in `app/sw.js` so installed copies pick up the change.
