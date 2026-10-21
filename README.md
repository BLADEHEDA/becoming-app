# Becoming: Be. Do. Have.

A daily habit and identity tracker built on the **Becoming** blueprint by Nkwetakem Tabo Bruno.

Tick your six daily habits, follow each day's Becoming theme, watch your weekly progress bar fill, and review past weeks. Works on phone and desktop, installs to the home screen, and opens offline.

## Features

- **Today:** the day's six habits in time order, big tick buttons, "Up next", today's Becoming theme and a box for your pick
- **The week:** habits × days grid, score per habit, today's column highlighted
- **Weekly progress bar:** targets add up to 36 ticks; hitting every target is 100%, extra ticks count as bonus
- **Clear week** with confirmation and undo
- **Past weeks** with their score; a fresh week starts every Monday
- **Sounds:** click on tick, chime when the day is complete, celebration at 100% (can be switched off)
- **Key wins** and **one strategy** notes for each week
- **Blueprint tab:** the full Becoming brochure inside the app (sections A–R, sources by format, action steps, the rules), with a letter bar to jump straight to any section
- **Theme links:** tap a section on today's Becoming theme to open it in the Blueprint

## Daily schedule

| Time  | Habit          | Target |
|-------|----------------|--------|
| 06:00 | Affirmations   | 7/7    |
| 06:15 | Bible Study    | 7/7    |
| 09:00 | Create Content | 5/7    |
| 11:00 | Sell Products  | 5/7    |
| 20:00 | Read Book      | 6/7    |
| 20:45 | Becoming       | 6/7    |

## Becoming themes

Mon People & Lives · Tue Design & World · Wed Speech & Style · Thu History & Money · Fri Art & Craft · Sat Film & Music · Sun Manners & Presence

## Files

| File | Purpose |
|------|---------|
| `index.html` | The whole app |
| `fonts/` | Headline fonts, bundled for offline use |
| `manifest.webmanifest`, `icon*.png`, `icon.svg` | Home-screen install and icons |
| `sw.js` | Offline support; always loads the latest version when online |

## Hosting

Static site, no build step. On Netlify: import this repository, leave the build command empty and the publish directory as the root. Every commit to `main` republishes the site.

## Data

Progress is saved in the browser of each device (local storage). Clearing browser data erases it. Syncing between devices is planned.

© 2026 Nkwetakem Tabo Bruno. All rights reserved.
