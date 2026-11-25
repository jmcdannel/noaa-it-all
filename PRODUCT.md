# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS with no build step: a web app manifest and a service worker make it an installable PWA. The same files are also published as a Claude artifact.

## Users

One person checking the weather for a handful of saved places. The first saved place is a mountain point at 44.682, -116.162 (about 6,570 ft, west of Donnelly, Idaho, near Tamarack). Other places will include home, trailheads and ski hills. They mostly check on a phone, often before a drive or a day outside, and want the answer at a glance.

## Product Purpose

A better front end for the National Weather Service point forecast (forecast.weather.gov/MapClick.php). It uses the same NWS data but is easier to read on a phone, and choosing a location is quick. It is a success if the person can open the app, see what the next day or two will be like at their spot, and switch spots or pick a new one without fighting a map.

## Positioning

It is built straight on api.weather.gov, so it reads the actual NWS forecast for the exact grid point. There is no third-party model and no ad layer. Picking a location takes one tap on a map, a search, or GPS instead of the NWS page's small, fiddly map.

## Operating Context

- Used mostly on a phone and sometimes on a desktop. It is often installed to the home screen and opened outdoors or in a car.
- Mountain spots matter. Elevation, snow amounts, wind and precipitation chance are the details that drive decisions.
- NWS data sources: `/points/{lat},{lon}` → `forecast` (12-hour periods), `forecastHourly`, `forecastGridData` (raw grids such as snowfall amount and wind gusts), and `/alerts/active?point=`. CORS is open. Coverage is US only.

## Capabilities and Constraints

- Saved places: add, rename, remove and switch. They are stored on the device.
- Location picking: tap the map to drop a pin, search by place name, or use the device location.
- Precipitation radar overlay on the map.
- Active NWS alerts for the selected point.
- Works offline with the last fetched forecast and says how old the data is.
- Place-name search needs a geocoder. NWS does not provide one, so a free public geocoder is used.
- Not decided yet: units (US customary is the default, metric is not confirmed) and notifications (not requested).

## Brand Commitments

None. The NWS look is not binding. The data and terms (period names, short forecasts, alert event names) stay as NWS publishes them.

## Evidence on Hand

Live NWS API data only. No other content, claims or testimonials exist, and none should be invented.

## Product Principles

1. Show the answer before the details. The next few hours and the next couple of days come first, and the full NWS text is one tap away.
2. Never hide NWS facts. Present them better, and do not paraphrase forecasts into something NWS did not say.
3. Changing place should feel effortless: a saved place is one tap, and a new place takes a tap, a search or GPS.
4. Thumb-first on mobile. Every control should be easy to reach and hit outdoors with cold hands.
5. Be honest about staleness and failure: show when the data was issued, and when the network or NWS is down.

## Accessibility & Inclusion

Glanceable outdoors in bright sun: readable contrast and large tap targets. Do not use colour alone to show precipitation or alert severity.
