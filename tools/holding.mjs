// Holding mode: turns a finished build (site/dist) into a minimal, unbranded site while the product is renamed.
// Run from the repo root after the site build and instead of copying help/ into dist. Enabled in deploy.yml by the
// repository variable HOLDING=1.
//
// What stays: /privacy/ and /terms/ (the live apps, both store listings and Health Connect link to them; a dead privacy URL
// is itself a store and GDPR problem), plus a plain notice page at / that also carries #contact for the policy's contact links.
// What goes: the marketing page, /get/, /help/, release snapshots, store badges, videos, stills, images, logo and og art,
// sitemap, llms.txt, web manifest, and Google Analytics (consent.js) from every page, so nothing new is published under the old name.
// The legal text itself is not edited here: it stays accurate for the apps that are live today.
import { existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'site/dist');
if (!existsSync(out)) throw new Error('site/dist is missing: run the site build first');

const KEEP = new Set(['privacy', 'terms', 'assets', 'privacy-email.js', 'CNAME', 'favicon.ico']);
// Inside assets/ only the built JS/CSS/fonts the legal pages need survive; every brand image folder and file is removed.
const DROP_ASSETS = [
  'app-store-badge-black.svg', 'app-store-badge-white.svg', 'google-play-badge.png', 'works-with-apple-health-badge.svg',
  'backgrounds', 'demo', 'screens', 'social', 'stills', 'video', 'logo.svg', 'mark.svg', 'og.png', 'og.svg', 'icon-192.png', 'icon-512.png',
];

for (const name of readdirSync(out)) {
  if (!KEEP.has(name)) rmSync(join(out, name), { recursive: true, force: true });
}
for (const name of DROP_ASSETS) rmSync(join(out, 'assets', name), { recursive: true, force: true });
// The React landing page and the /get/ smart link bundles (hashed names) are marketing code.
for (const name of readdirSync(join(out, 'assets'))) {
  if (/^(main|get|device)-.*\.(js|css)$/.test(name)) rmSync(join(out, 'assets', name), { force: true });
}
// The old favicon is the flask mark: replaced by nothing until the new mark exists.
rmSync(join(out, 'favicon.ico'), { force: true });

const NOINDEX = '<meta name="robots" content="noindex, nofollow" />';

// Strip brand imagery, analytics and marketing metadata from a built legal page.
const clean = (html) => html
  .replace(/<!-- Google Analytics[\s\S]*?-->\s*/g, '')
  .replace(/<script[^>]*src="\/consent\.js"[^>]*><\/script>\s*/g, '')
  .replace(/<link[^>]*rel="(?:icon|apple-touch-icon)"[^>]*>\s*/g, '')
  .replace(/<meta (?:property|name)="(?:og|twitter):[^"]*"[^>]*>\s*/g, '')
  .replace(/<img[^>]*src="\/assets\/(?:logo|mark)\.svg"[^>]*>\s*/g, '')
  .replace(/<button[^>]*data-cookie-settings[^>]*>.*?<\/button>\s*/g, '')
  .replace(/<a href="\/">Home<\/a>\s*/g, '')
  .replace('</head>', `${NOINDEX}\n</head>`);

for (const page of ['privacy', 'terms']) {
  const file = join(out, page, 'index.html');
  if (!existsSync(file)) throw new Error(`${page}/index.html missing from the build`);
  writeFileSync(file, clean(readFileSync(file, 'utf8')));
}

// The policy links to /#contact; the form is gone, so the notice page carries the email, assembled in the browser
// by privacy-email.js so the address never appears in the page source (same rule as the privacy policy).
writeFileSync(join(out, 'index.html'), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Back soon</title>
<meta name="viewport" content="width=device-width,initial-scale=1" />
${NOINDEX}
<meta name="theme-color" content="#1A1A1A" />
<style>
  html { background: #1A1A1A; color: #F2F2F2; font: 18px/1.5 -apple-system, system-ui, "Segoe UI", sans-serif; }
  body { max-width: 34rem; margin: 0 auto; padding: 18vh 24px 48px; }
  h1 { font-size: 1.6rem; margin: 0 0 12px; }
  p { margin: 0 0 16px; color: #BDBDBD; }
  a { color: #F5A623; }
  nav a { margin-right: 20px; }
</style>
</head>
<body>
<h1>We are updating this site</h1>
<p>The apps keep working as usual. The privacy policy and terms below remain in force.</p>
<nav aria-label="Legal"><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav>
<p id="contact" style="margin-top:32px">Questions or privacy requests (start the subject with "Privacy request"): <span class="privacy-email" data-u="contact" data-d="barforge" data-t="app"><noscript>please try again with JavaScript enabled</noscript></span></p>
<script src="/privacy-email.js" defer></script>
</body>
</html>
`);
writeFileSync(join(out, '404.html'), readFileSync(join(out, 'index.html'), 'utf8'));

// No sitemap, no AI-crawler welcome: the whole site is noindex.
writeFileSync(join(out, 'robots.txt'), 'User-agent: *\nAllow: /\n');

// Self-check: fail the deploy if brand imagery or analytics survived.
const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
const problems = [];
for (const f of walk(out)) {
  const rel = f.slice(out.length + 1);
  if (/\.(mp4|webm|mov|png|jpe?g|webp|ico)$/i.test(f)) problems.push(`image or video left in holding build: ${rel}`);
  if (/\.html$/.test(f)) {
    const t = readFileSync(f, 'utf8');
    if (/consent\.js|googletagmanager|gtag\(/.test(t)) problems.push(`analytics reference in ${rel}`);
    if (!t.includes('noindex')) problems.push(`no noindex in ${rel}`);
  }
}
if (problems.length) { console.error(problems.join('\n')); process.exit(1); }
console.log(`holding build ok: ${walk(out).length} files`);
