# Releasing the website and the guides with an app release

One switch controls what barforgeweightlifting.com and barforgeweightlifting.com/help say: the repository variable **`APP_RELEASE`**.

| Value | What the site and guides show |
|---|---|
| unset or `1.2` | What is live in the App Store today. Unreleased content is **not in the build at all** (not just hidden). |
| `1.5` | Everything tagged "since 1.5": the guide text, the full video summaries and 1.5 videos, the CSV line, the Complexes guide. |
| `1.6` | Everything tagged "since 1.5" and "since 1.6", and nothing tagged "until 1.6". iOS goes straight from 1.2 to 1.6 (1.5 was never submitted on iOS), so this one value releases both. This is the value for the 1.6 launch. |

The deploy fails (`tools/release-guard.mjs`) if anything for a release that has not been reached is still in the output.

## Release day (1.6)

1. **Look first (optional, any time):** `tools/preview-release.sh 1.6`, then open http://localhost:4173/. This builds both sites for 1.6 and serves them locally. Nothing is deployed.
2. **Flip it, at the moment the apps go live.** Either:
   - **Merge the release commit** (branch `site/1.6`, last commit "Release: the site and guides describe Barforge Weightlifting 1.6"). It sets `DEFAULT_RELEASE` to `'1.6'`, so the push to `main` deploys 1.6 by itself (`tools/**` is in the deploy's paths). Leave the `APP_RELEASE` variable unset, or it overrides the default.
   - **Or without merging:** `gh variable set APP_RELEASE --body 1.6 -R BetterBuiltApps/lifting-lab-website && gh workflow run deploy.yml -R BetterBuiltApps/lifting-lab-website`. This leaves `llms.txt` describing 1.2, so merge the release commit afterwards and delete the variable.
   The deploy takes about one to two minutes. Tip: set the App Store release to manual, so you press it and the deploy within the same minute.
3. **Check:** the workflow summary says `Built for APP_RELEASE=1.6` (or `default (live)` after a merge, which is now 1.6); open barforgeweightlifting.com and barforgeweightlifting.com/help, and the What's new guide.
4. **To undo:** set the `APP_RELEASE` variable to `1.2` and run the workflow again (the variable wins over the default).

## After the release is out
- In `tools/release.mjs` set `DEFAULT_RELEASE` to `'1.5'` and delete the `APP_RELEASE` variable, so a plain push keeps showing 1.5.
- Four Help descriptions (`units-and-data`, `programs`, `prs-and-log-book`, `locker`) were made neutral because frontmatter cannot be gated. Restore the CSV, cycle report, rep records and help wording if you want it.
- Re-check the items listed under "Needs a decision" below.

## How content is tagged (for the next release too)
- **Guide text:** wrap it in `<!-- since 1.5 -->` and `<!-- /since -->` (block: own line, blank line around; or inline in a paragraph). Whole page: `since: "1.5"` in the frontmatter. See `help/src/plugins/remark-since.mjs`. Alt text cannot hold markers, so wrap the whole image.
- **Guide text a release removes:** wrap it in `<!-- until 1.6 -->` and `<!-- /until -->`. It is kept while the flag is below 1.6 and dropped from 1.6 on. Pair it with a `since 1.6` block to replace a passage on release day. Same placement rules; the guard fails the deploy if either kind of marker is left in the output.
- **Site copy:** `import { released } from '../lib/release'`, then `released('1.5') ? ... : ...` (see the Technique fact in `Engine.jsx`). A video whose subject a release removed is listed in `RETIRED` in `Watch.jsx` and leaves the gallery at that release.
- **Static files** in `site/public/` (`llms.txt`, `sitemap.xml`) cannot be gated: they change in the release commit itself.
- **Page images:** the home page uses stills from the videos, never app screenshots: `still('F3', 1)` from `site/src/lib/stills.js` renders through `StillShot` (`Chrome.jsx`). The data is `site/src/data/stills.<release>.json`, written by `scripts/v2/web-export.mjs` (`STILL_ONLY` lists items that need stills but no video). A missing still throws at build time, so a slot can never render empty. The page order is Hero (overview video and a still), proof strip, Watch, Arc, Engine, Record, Pricing, FAQ, Contact, with a download row after Watch and after Record.
- **Videos and stills:** the gallery lives in `site/src/sections/Watch.jsx` and is fed by `site/src/data/videos.<release>.json`, written by the video project (`scripts/v2/web-export.mjs`: tab layout, `since`, `replaces`). Files for a later release are staged in `site/release/<v>/` and `help/release/<v>/` (they mirror the root of the build output) and are copied into the build only when the flag reaches that version (`tools/release-assets.mjs`). Re-run the export after changing videos, and commit the result.
- **A new release (say 1.6):** add it to `RELEASES` in `tools/release.mjs` and to the list in `web-export.mjs`, then tag content "since 1.6". Releases that were never submitted (1.3, 1.4) are not tagged: use the release that ships the feature.
- **Local builds:** `APP_RELEASE=1.5 npm run build` in `site/` and in `help/`. The Help build clears the Astro cache every time, because Astro caches rendered Markdown by file content and would otherwise reuse the old release's pages.

## Needs a decision (not gated yet)
- The home page and guides already sell **Technique Doctor** and **Strength ratios**, which the release notes list as 1.5 additions (earlier versions may have had a smaller form).
- Guide items the release notes do not settle: Classic Systems, "How this session was built" cards, Save as routine, Exercise variety, Reset Your Numbers, Film Room grading level, the order of lights and grade in Film a lift, and the Terms tick on Skip in getting started.
- Screenshots in the guides (tools hub, locker, workout builder, log book) may show 1.5 screens.
