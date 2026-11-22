#!/usr/bin/env python3
"""Generate the Privacy and Terms pages from the markdown in legal/.

Same rule as the wordmark and the share card: generated, not hand-written, so
the published page cannot drift from the document of record. legal/*.md is the
source of truth. Edit that, rerun this, commit both.

    python3 tools/legal/build.py
    RELEASE=1 python3 tools/legal/build.py --check   # deploy gate, writes nothing

Writes site/privacy/index.html and site/terms/index.html. Those are Vite
multi-page entry points (see site/vite.config.js), so they build to
/privacy/ and /terms/ as real static URLs. No router, and no GitHub Pages
404.html redirect trick, both of which break deep links in ways that only show
up in production.

**The legal text is copied verbatim.** The only thing this changes is
structure. The generator that produced these documents emits <strong> for every
heading and <br> for every gap, which leaves a 15KB page with no heading
outline at all: a screen reader user gets one undifferentiated wall and no way
to jump between sections. Here the bold section titles become real <h2>s. No
wording is altered, reordered, added, or removed. Two structural extras: each
<h2> gets an id slugged from its text (so the contact form can link to
/privacy/#if-you-contact-us), and <!-- HTML comments --> in the markdown (owner
TODOs) are dropped rather than printed.

**Privacy email.** The documents write {{PRIVACY_EMAIL}} (MARKER). The website
renders it client-side from split data attributes (site/public/privacy-email.js)
so the address is never in the HTML; the apps' import scripts substitute the real
address. **Placeholder gate.** The old stand-in PLACEHOLDER must not return. Every run
looks for it in legal/*.md. With RELEASE=1 in the environment it is an error
(exit 1); otherwise a warning. `--check` runs only that gate, without writing
pages; deploy.yml runs it with RELEASE=1 so a placeholder can never go live.
"""

import html
import os
import re
import sys
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

PAGES = [
    {
        "src": "legal/privacy-policy.md",
        "out": "site/privacy/index.html",
        "slug": "privacy",
        "title": "Privacy Policy",
        "description": "How Lifting Lab handles your data, your GDPR and "
                       "CCPA rights, and how to contact the data controller.",
    },
    {
        "src": "legal/terms-and-conditions.md",
        "out": "site/terms/index.html",
        "slug": "terms",
        "title": "Terms & Conditions",
        "description": "The terms you agree to when you download or use "
                       "Lifting Lab.",
    },
]

# The old stand-in for the privacy email. Must never deploy: the documents now
# carry MARKER instead, and this gate fails if the stand-in comes back.
PLACEHOLDER = "PRIVACY_EMAIL_PLACEHOLDER"

# Where the documents say the privacy email. The website never prints the
# address (the owner does not want it scraped for spam): this becomes an empty
# <span> carrying the address in pieces, and /privacy-email.js joins them in the
# browser. The in-app copies get the real address from their own import script.
MARKER = "{{PRIVACY_EMAIL}}"
# Split so this file, which is committed, does not hold the address either.
_USER, _DOMAIN = "contact", "barforge.app"
LEAKS = (_USER + "@" + _DOMAIN, _USER + "&#64;", _USER + "&commat;", _USER + "@")
EMAIL_SPAN = (
    f'<span class="privacy-email" data-u="{_USER}" data-d="{_DOMAIN.split(".")[0]}" '
    f'data-t="{_DOMAIN.split(".")[1]}"><noscript>the email address we show when '
    f'JavaScript is on (or use the contact form)</noscript></span>'
)
COMMENT = re.compile(r"<!--.*?-->\n?", re.S)

LINK = re.compile(r"\[([^\]]+)\]\((https?://[^)]+)\)")
BOLD = re.compile(r"\*\*(.+?)\*\*")


def inline(text: str) -> str:
    """Escape, then restore the inline markup the documents actually use.

    Order matters: escape first so any stray angle bracket in the prose is
    inert, then re-introduce only the tags this generator emits itself.
    """
    out = html.escape(text, quote=False)
    out = out.replace(MARKER, EMAIL_SPAN)
    # The documents carry one raw <span> around the generator credit. It was
    # escaped a moment ago; unescape just that pair rather than allowing raw
    # HTML through generally.
    out = out.replace("&lt;span&gt;", "").replace("&lt;/span&gt;", "")
    out = LINK.sub(
        lambda m: f'<a href="{m.group(2)}" rel="noopener noreferrer" '
                  f'target="_blank">{m.group(1)}</a>',
        out)
    return BOLD.sub(r"<strong>\1</strong>", out)


def slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def check_placeholders() -> int:
    """Warn, or with RELEASE=1 fail, if a legal document still carries the
    placeholder privacy email."""
    release = os.environ.get("RELEASE") == "1"
    hits = []
    for meta in PAGES:
        for n, line in enumerate((ROOT / meta["src"]).read_text().splitlines(), 1):
            if PLACEHOLDER in line:
                hits.append(f"{meta['src']}:{n}")
    if not hits:
        return 0
    level = "error" if release else "warning"
    print(f"{level}: placeholder {PLACEHOLDER} still present (replace the privacy "
          f"email before deploy): {', '.join(hits)}", file=sys.stderr)
    return 1 if release else 0


def convert(md: str) -> str:
    """Markdown to a semantic fragment. Handles only what these files contain:
    bold-line headings, bullet lists, horizontal rules, and paragraphs."""
    blocks, buf, items = [], [], []

    def flush_para():
        if buf:
            blocks.append(f"<p>{inline(' '.join(buf))}</p>")
            buf.clear()

    def flush_list():
        if items:
            lis = "".join(f"<li>{inline(i)}</li>" for i in items)
            blocks.append(f"<ul>{lis}</ul>")
            items.clear()

    for raw in md.split("\n"):
        line = raw.rstrip()
        stripped = line.strip()

        if not stripped:
            flush_para(), flush_list()
            continue

        if stripped in ("* * *", "---", "***"):
            flush_para(), flush_list()
            blocks.append("<hr />")
            continue

        # "*   Item" is the only list form these documents use. Checked before
        # the heading rule because "**" would otherwise swallow it.
        if re.match(r"^\*\s{2,}", stripped):
            flush_para()
            items.append(re.sub(r"^\*\s+", "", stripped))
            continue

        # A whole line that is nothing but bold text is a section heading.
        whole = re.fullmatch(r"\*\*(.+?)\*\*", stripped)
        if whole:
            flush_para(), flush_list()
            text = whole.group(1).strip()
            blocks.append(f'<h2 id="{slug(text)}">{inline(text)}</h2>')
            continue

        flush_list()
        buf.append(stripped)

    flush_para(), flush_list()
    return "\n".join(blocks)


def page(body: str, meta: dict, updated: str) -> str:
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<!-- Google Analytics loads only after the visitor accepts, from /consent.js
     (Consent Mode "basic"). No gtag snippet here. Kept in sync with index.html. -->
<script src="/consent.js" defer></script>
<title>{meta['title']}: Lifting Lab</title>
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="description" content="{meta['description']}" />
<link rel="canonical" href="https://liftinglab.app/{meta['slug']}/" />
<meta name="theme-color" content="#1A1A1A" />
<link rel="icon" type="image/svg+xml" href="/assets/mark.svg" />
<link rel="icon" href="/favicon.ico" sizes="48x48" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Lifting Lab" />
<meta property="og:url" content="https://liftinglab.app/{meta['slug']}/" />
<meta property="og:title" content="{meta['title']}: Lifting Lab" />
<meta property="og:description" content="{meta['description']}" />
<meta property="og:image" content="https://liftinglab.app/assets/og.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="The Lifting Lab wordmark: a barbell through a laboratory flask." />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{meta['title']}: Lifting Lab" />
<meta name="twitter:description" content="{meta['description']}" />
<meta name="twitter:image" content="https://liftinglab.app/assets/og.png" />
<meta name="twitter:image:alt" content="The Lifting Lab wordmark: a barbell through a laboratory flask." />
<!-- Generated by tools/legal/build.py from {meta['src']}. Do not edit here. -->
<link rel="stylesheet" href="../src/legal.css" />
<script src="/privacy-email.js" defer></script>
</head>
<body>
<a class="skip" href="#doc">Skip to the document</a>
<header class="legal-head">
  <a href="/" aria-label="Lifting Lab home">
    <img src="/assets/logo.svg" alt="Lifting Lab" width="156" height="45" />
  </a>
</header>
<main id="doc" class="legal">
<h1>{meta['title']}</h1>
<p class="legal-updated">Last updated {updated}</p>
{body}
</main>
<footer class="legal-foot">
  <nav aria-label="Legal and support">
    <a href="/">Home</a>
    <a href="/privacy/">Privacy</a>
    <a href="/terms/">Terms</a>
    <a href="/#contact">Contact</a>
    <button type="button" data-cookie-settings>Cookie settings</button>
  </nav>
</footer>
</body>
</html>
"""


def main() -> int:
    status = check_placeholders()
    if status or "--check" in sys.argv[1:]:
        return status
    for meta in PAGES:
        src = ROOT / meta["src"]
        md = COMMENT.sub("", src.read_text())

        # The effective date is stated inside each document. Read it back out
        # rather than stamping today's date, so regenerating the page does not
        # silently claim the policy changed.
        found = re.search(r"effective as of (\d{4}-\d{2}-\d{2})", md)
        updated = found.group(1) if found else "on request"

        # The first bold line is the document's own title and becomes the <h1>,
        # so drop it from the body to avoid printing it twice.
        body = convert(re.sub(r"^\s*\*\*.+?\*\*\s*\n", "", md, count=1))

        out = ROOT / meta["out"]
        out.parent.mkdir(parents=True, exist_ok=True)
        text = page(body, meta, updated)
        # Last line of defence: the address must not be in the generated page.
        for leak in LEAKS:
            if leak in text:
                print(f"error: {meta['out']} would contain the privacy email "
                      f"({leak!r}); it must only be rendered client-side",
                      file=sys.stderr)
                return 1
        out.write_text(text)
        print(f"wrote {meta['out']} ({out.stat().st_size // 1024} KB, "
              f"effective {updated})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
