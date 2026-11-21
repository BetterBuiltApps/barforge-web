/* Analytics consent banner and Google Analytics loader. Built in-house: no
   third-party CMP, no dependency.

   Google Consent Mode "basic": nothing from Google loads until the visitor
   accepts. The pages carry no inline gtag snippet and no googletagmanager.com
   <script> tag; this file is the only place GA is started. On Accept (a click
   now, or a stored Accept found on page load) it defines gtag, sets consent,
   runs config and injects gtag.js. On Decline nothing is loaded, and any _ga*
   cookies left from an earlier Accept are deleted. Before a choice, Google
   receives nothing at all, not even cookieless pings.

   Served as a plain file from site/public/ (not bundled) so the React homepage
   and the static Privacy/Terms pages share one copy. Loaded with `defer`.

   The choice lives in localStorage under STORE_KEY ('granted' | 'denied').
   Every access is wrapped: storage can throw (private mode, blocked site
   data), and then the banner simply shows again next visit.

   Reopen it from any element with a data-cookie-settings attribute (the
   "Cookie settings" link in each footer). */
(function () {
  'use strict';

  var STORE_KEY = 'll-analytics-consent';
  var ID = 'll-consent';
  // GA4 property "Lifting Lab" (separate from toonandtails-web so traffic
  // never mixes).
  var GA_ID = 'G-KQ7CEKMPMJ';
  var gaLoaded = false;

  // The build's prerender (site/scripts/prerender.mjs) snapshots the homepage
  // in headless Chrome. Do nothing there: never bake the banner, or a
  // googletagmanager.com <script>, into the shipped HTML.
  if (navigator.webdriver) {
    window.llConsent = { get: function () { return null; }, granted: function () { return false; },
      loaded: function () { return false; }, open: function () {} };
    return;
  }

  function read() {
    try { return window.localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function write(value) {
    try { window.localStorage.setItem(STORE_KEY, value); } catch (e) { /* not persisted */ }
  }
  function gtag() {
    if (gaLoaded) window.gtag.apply(null, arguments);
  }

  // Runs only after an Accept. Consent is set to granted before config, ad
  // signals stay denied, and gtag.js is requested only now.
  function loadAnalytics() {
    if (gaLoaded) return;
    gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    });
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  // On decline, clear any GA cookies left from an earlier "Accept". If GA was
  // started earlier on this page, the consent update also stops it reading or
  // writing them; on later pages it is never loaded at all.
  function clearGaCookies() {
    var host = location.hostname;
    var domains = ['', host, '.' + host, '.' + host.split('.').slice(-2).join('.')];
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name !== '_ga' && name.indexOf('_ga_') !== 0) return;
      domains.forEach(function (d) {
        document.cookie = name + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '');
      });
    });
  }

  function choose(value) {
    write(value);
    if (value === 'granted') {
      if (gaLoaded) gtag('consent', 'update', { analytics_storage: 'granted' });
      else loadAnalytics();
    } else {
      gtag('consent', 'update', { analytics_storage: 'denied' });
      clearGaCookies();
    }
    close(true);
  }

  var lastFocus = null;

  function css() {
    if (document.getElementById(ID + '-style')) return;
    var s = document.createElement('style');
    s.id = ID + '-style';
    // Tokens come from tokens/colors.css etc., loaded on every page; the
    // fallbacks are the same values so the banner never renders unstyled.
    s.textContent = [
      '#' + ID + '{position:fixed;z-index:1000;left:16px;right:16px;bottom:16px;margin:0 auto;max-width:560px;',
      'box-sizing:border-box;padding:18px 20px;background:var(--surface-elevated,#2c2c2e);color:var(--text-secondary,rgba(255,255,255,.6));',
      'border:1px solid var(--hairline,rgba(255,255,255,.08));border-radius:16px;box-shadow:0 18px 48px rgba(0,0,0,.5);',
      'font:var(--type-caption,14px/1.45 system-ui,sans-serif);}',
      '#' + ID + ' h2{margin:0 0 6px;font:inherit;font-weight:700;color:var(--text-primary,#fff);}',
      '#' + ID + ' p{margin:0 0 14px;}',
      '#' + ID + ' a{color:var(--amber,#f5a623);text-decoration:underline;text-underline-offset:3px;}',
      '#' + ID + ' .ll-consent-actions{display:flex;flex-wrap:wrap;gap:10px;}',
      '#' + ID + ' button{flex:1 1 120px;min-height:44px;padding:0 18px;border-radius:12px;cursor:pointer;',
      'font:inherit;font-weight:700;border:1px solid var(--hairline,rgba(255,255,255,.08));}',
      // Accept and Decline are deliberately identical: same size, colour and
      // border, so neither answer is the visually suggested one.
      '#' + ID + ' button{background:transparent;color:var(--text-primary,#fff);border-color:rgba(255,255,255,.3);}',
      '#' + ID + ' button:hover{border-color:var(--text-primary,#fff);}',
      '#' + ID + ' button:focus-visible,#' + ID + ' a:focus-visible{outline:2px solid var(--amber,#f5a623);outline-offset:3px;}',
      // Footer "Cookie settings" control: a <button> that reads like the links beside it.
      '[data-cookie-settings]{background:none;border:0;padding:0;margin:0;cursor:pointer;font:inherit;color:inherit;}',
      '[data-cookie-settings]:hover{color:var(--amber,#f5a623);}',
      '[data-cookie-settings]:focus-visible{outline:2px solid var(--amber,#f5a623);outline-offset:3px;border-radius:4px;}',
    ].join('');
    document.head.appendChild(s);
  }

  function open(fromSettings) {
    css();
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement('section');
      el.id = ID;
      el.setAttribute('role', 'region');
      el.setAttribute('aria-labelledby', ID + '-title');
      el.setAttribute('tabindex', '-1');
      el.innerHTML =
        '<h2 id="' + ID + '-title">Analytics cookies</h2>' +
        '<p>May we use Google Analytics to see which pages and demo videos people view? ' +
        'If you accept, Google receives your visit data and sets cookies. If you decline, ' +
        'nothing from Google loads. You can change this any time from ' +
        '&ldquo;Cookie settings&rdquo; in the footer. <a href="/privacy/#our-website">Privacy policy</a></p>' +
        '<div class="ll-consent-actions">' +
        '<button type="button" class="ll-decline">Decline</button>' +
        '<button type="button" class="ll-accept">Accept</button>' +
        '</div>';
      el.querySelector('.ll-accept').addEventListener('click', function () { choose('granted'); });
      el.querySelector('.ll-decline').addEventListener('click', function () { choose('denied'); });
      el.addEventListener('keydown', function (e) {
        // Escape only dismisses once a choice exists; the first visit needs an answer.
        if (e.key === 'Escape' && read()) close(true);
      });
      document.body.appendChild(el);
    }
    // Keep the page's last lines reachable above the banner.
    document.body.style.paddingBottom = (el.offsetHeight + 32) + 'px';
    if (fromSettings) {
      lastFocus = document.activeElement;
      // Focus the banner itself, not either button, so neither answer is
      // pre-selected for a keyboard user.
      el.focus();
    }
  }

  function close(restoreFocus) {
    var el = document.getElementById(ID);
    if (el) el.remove();
    document.body.style.paddingBottom = '';
    if (restoreFocus && lastFocus && document.contains(lastFocus)) lastFocus.focus();
    lastFocus = null;
  }

  window.llConsent = {
    get: read,
    granted: function () { return read() === 'granted'; },
    // True only once gtag.js has been requested after an Accept.
    loaded: function () { return gaLoaded; },
    open: function () { open(true); },
  };

  // Delegated, so it also catches the React footer's button after re-renders.
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-cookie-settings]');
    if (t) { e.preventDefault(); open(true); }
  });

  // A returning visitor who accepted before: start GA straight away.
  if (read() === 'granted') loadAnalytics();

  function boot() {
    css();
    if (!read()) open(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
