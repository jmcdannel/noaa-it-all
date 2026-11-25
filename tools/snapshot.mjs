// Fetches the NWS forecast for the default place and writes app/snapshot.json.
// The app uses it only when it has no cached forecast and cannot reach api.weather.gov
// (for example inside a published Claude artifact, which blocks outside requests).
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const LAT = 44.682, LON = -116.162;
const H = { 'User-Agent': '(noaa-it-all forecast app)', Accept: 'application/geo+json' };
const get = async (url) => {
  for (let i = 0; i < 3; i++) {
    const r = await fetch(url, { headers: H });
    if (r.ok) return r.json();
    await new Promise((s) => setTimeout(s, 800));
  }
  throw new Error('NWS request failed: ' + url);
};

const keep = (o, keys) => Object.fromEntries(keys.map((k) => [k, o[k]]));
const pt = (await get(`https://api.weather.gov/points/${LAT},${LON}`)).properties;
const [fc, hr, grid, alerts, afd] = await Promise.all([
  get(pt.forecast), get(pt.forecastHourly), get(pt.forecastGridData),
  get(`https://api.weather.gov/alerts/active?point=${LAT},${LON}`),
  get(`https://api.weather.gov/products/types/AFD/locations/${pt.cwa}/latest`),
]);
const stations = await get(pt.observationStations);
let obs = null;
for (const f of stations.features.slice(0, 3)) {
  const o = (await get(`https://api.weather.gov/stations/${f.properties.stationIdentifier}/observations/latest`)).properties;
  if (o.temperature?.value != null) {
    obs = { station: { id: f.properties.stationIdentifier, name: f.properties.name, elevM: f.properties.elevation?.value ?? null, lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0] },
      obs: keep(o, ['timestamp', 'textDescription', 'temperature', 'windDirection', 'windSpeed', 'windGust', 'relativeHumidity', 'windChill', 'heatIndex', 'visibility']) };
    break;
  }
}
const gridKeys = ['snowfallAmount', 'windGust', 'snowLevel', 'apparentTemperature', 'dewpoint', 'skyCover', 'quantitativePrecipitation', 'iceAccumulation', 'windSpeed', 'weather'];
const snap = {
  fetchedAt: new Date().toISOString(),
  point: { properties: keep(pt, ['gridId', 'gridX', 'gridY', 'forecast', 'forecastHourly', 'forecastGridData', 'relativeLocation', 'timeZone', 'cwa', 'observationStations']) },
  forecast: { properties: keep(fc.properties, ['updateTime', 'generatedAt', 'elevation', 'periods']) },
  hourly: { properties: { updateTime: hr.properties.updateTime, periods: hr.properties.periods } },
  grid: { properties: Object.fromEntries(gridKeys.map((k) => [k, grid.properties[k]])) },
  obs,
  afd: { issuanceTime: afd.issuanceTime, productText: afd.productText },
  alerts: { features: alerts.features.map((f) => ({ properties: keep(f.properties, ['id', 'event', 'severity', 'headline', 'description', 'instruction', 'ends', 'expires', 'onset']) })) },
};
const out = fileURLToPath(new URL('../app/snapshot.json', import.meta.url));
writeFileSync(out, JSON.stringify(snap));
console.log('wrote', out, JSON.stringify(snap).length, 'bytes');
