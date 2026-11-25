// Regenerates the site's favicon set from tools/icons/icon-source.svg (the app icon: charcoal B on amber, full bleed).
// Usage: node tools/icons/make-icons.mjs   (needs playwright + ImageMagick `convert`)
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');

const here = dirname(fileURLToPath(import.meta.url));
const pub = resolve(here, '../../site/public');
const src = readFileSync(resolve(here, 'icon-source.svg'), 'utf8');
const B = src.match(/<path[^>]*\/>/)[0];
const wrap = (size, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="${size}" height="${size}">${body}</svg>`;
const tile = '<rect width="1024" height="1024" fill="#F5A623"/>';
const full = (s) => wrap(s, tile + B);
const rounded = (s) => wrap(s, `<defs><clipPath id="r"><rect width="1024" height="1024" rx="230"/></clipPath></defs><g clip-path="url(#r)">${tile}${B}</g>`);
// Maskable: B shrunk into the central safe zone so a circular mask never clips it.
const maskable = (s) => wrap(s, tile + B.replace('scale(13.5929)', 'scale(11.5)'));

const jobs = [
  ['favicon-16x16.png', 16, rounded],
  ['favicon-32x32.png', 32, rounded],
  ['favicon-48x48.png', 48, rounded],
  ['apple-touch-icon.png', 180, full],
  ['assets/icon-192.png', 192, full],
  ['assets/icon-512.png', 512, full],
  ['assets/icon-maskable-512.png', 512, maskable],
  ['assets/mstile-150.png', 150, full],
];

const browser = await chromium.launch();
const page = await browser.newPage();
for (const [file, size, make] of jobs) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<body style="margin:0;background:transparent">${make(size)}</body>`);
  await page.screenshot({ path: resolve(pub, file), omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
}
await browser.close();
execFileSync('convert', ['favicon-16x16.png', 'favicon-32x32.png', 'favicon-48x48.png'].map((f) => resolve(pub, f)).concat(resolve(pub, 'favicon.ico')));
