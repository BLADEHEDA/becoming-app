# Becoming: Be. Do. Have.

A daily habit and identity tracker built on the **Becoming** blueprint by Nkwetakem Tabo Bruno.

Tick your six daily habits, follow each day's Becoming theme, watch your weekly progress bar fill, and review past weeks. Works on phone and desktop, installs to the home screen, and opens offline.

## Features

- **Today tab (opens first):** only today's habits in time order, today's progress bar, a link to the full week; ticks sync both ways with the Week grid. The day's habits in time order, big tick buttons, "Up next", today's Becoming theme and a box for your pick
- **The week:** habits × days grid, score per habit, today's column highlighted
- **Weekly progress bar:** targets add up to 34 ticks; hitting every target is 100%, extra ticks count as bonus
- **Clear week** with confirmation and undo
- **Past weeks** with their score; a fresh week starts every Monday
- **Sounds:** click on tick, chime when the day is complete, celebration at 100% (can be switched off)
- **Key wins** and **one strategy** notes for each week
- **Becoming tab:** the full Becoming brochure inside the app (sections A–R, sources by format, action steps, the rules), with a letter bar to jump straight to any section
- **Doing tab:** Volume II inside the app: the skill stack (00 Foundation to 06 Media Buying), sources by format, Hall of Fame, action steps with rep targets, and the machinery (Swipe Vault, Numbers, Reps, Feedback, Seasons, Market, Seller's Code), with its own jump bar
- **Theme links:** tap a section on today's Becoming theme to open it in the Blueprint

## Daily schedule

| Time  | Habit          | Target |
|-------|----------------|--------|
| 06:00 | Affirmations   | 7/7    |
| 06:15 | Bible Study    | 7/7    |
| 09:00 | Create Content | 3/7 (shoot days: Mon, Wed, Sat) |
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

## Data and sync

Progress is saved on each device first, so the app works offline. Sign in on the Today tab with your email (a sign-in link is sent by Supabase) and your weeks sync across phone and laptop: every change is uploaded, and the app pulls the latest data when it opens or comes back into view. The database (Supabase project `becoming-app`) only lets each account read and write its own rows.

© 2026 Nkwetakem Tabo Bruno. All rights reserved.
