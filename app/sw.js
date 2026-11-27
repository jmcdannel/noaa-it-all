// NOAA-It-All service worker.
// App shell: cache-first. NWS data: network-first with cached fallback. Fonts, Leaflet, map tiles: stale-while-revalidate.
const VERSION = 'fb-v11';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'vendor/leaflet.css', 'vendor/public-sans-latin.woff2', 'snapshot.json',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION + '-shell').then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

async function trim(name, max) {
  const c = await caches.open(name); const keys = await c.keys();
  for (let i = 0; i < keys.length - max; i++) await c.delete(keys[i]);
}
async function networkFirst(req, name) {
  const c = await caches.open(name);
  try {
    const res = await fetch(req);
    if (res.ok) c.put(req, res.clone());
    return res;
  } catch (err) {
    const hit = await c.match(req);
    if (hit) return hit;
    throw err;
  }
}
async function staleWhileRevalidate(req, name, max) {
  const c = await caches.open(name);
  const hit = await c.match(req);
  const net = fetch(req).then((res) => {
    if (res.ok || res.type === 'opaque') { c.put(req, res.clone()); if (max) trim(name, max); }
    return res;
  }).catch(() => hit);
  return hit || net;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (req.mode === 'navigate') { e.respondWith(networkFirst(req, VERSION + '-shell').catch(() => caches.match('index.html'))); return; }
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
    return;
  }
  if (url.hostname === 'api.weather.gov') { e.respondWith(networkFirst(req, VERSION + '-nws')); return; }
  if (/tile\.openstreetmap\.org|opentopomap\.org$/.test(url.hostname)) { e.respondWith(staleWhileRevalidate(req, VERSION + '-tiles', 400)); return; }
  if (/fonts\.(googleapis|gstatic)\.com|cdnjs\.cloudflare\.com/.test(url.hostname)) { e.respondWith(staleWhileRevalidate(req, VERSION + '-static')); return; }
});
