// Builds artifact/forecast.html from app/index.html: the Claude artifact publisher supplies
// its own <html>/<head>/<body>, blocks outside stylesheets, and has no service worker or manifest.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
const root = new URL('..', import.meta.url);
const src = readFileSync(new URL('app/index.html', root), 'utf8');
const leaflet = readFileSync(new URL('app/vendor/leaflet.css', root), 'utf8');
const font = readFileSync(new URL('app/vendor/public-sans-latin.woff2', root)).toString('base64');
const head = src.split('<head>')[1].split('</head>')[0]
  .replace(/<!--PWA-HEAD-->[\s\S]*?<!--\/PWA-HEAD-->/, '<title>NOAA-It-All</title>')
  .replace(/<meta charset[^>]*>\s*/, '').replace(/<meta name="viewport"[^>]*>\s*/, '')
  .replace('<style>', '<style>\n' + leaflet + '\n')
  .replace('url("vendor/public-sans-latin.woff2")', 'url("data:font/woff2;base64,' + font + '")');
const body = src.split(/<body[^>]*>/)[1].split('</body>')[0];
mkdirSync(new URL('artifact/', root), { recursive: true });
writeFileSync(new URL('artifact/forecast.html', root), head.trim() + '\n' + body.trim() + '\n');
copyFileSync(new URL('app/snapshot.json', root), new URL('artifact/snapshot.json', root));
console.log('built artifact/forecast.html');
