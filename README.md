# Becoming: Be. Do. Have.

A daily habit and identity tracker built on the **Becoming** blueprint by Nkwetakem Tabo Bruno.

Tick your six daily habits, follow each day's Becoming theme, watch your weekly progress bar fill, and review past weeks. Works on phone and desktop, installs to the home screen, and opens offline.

## Features

- **Building tab:** Volume III, the dream and the master plan: goal card, dream life and family, then Parts 01–10 (skills, where I am now, business decisions, Plan A, the December launch calendar, the ad message, Plan B with its gates and savings target, the rules, the tracker, open decisions) and the AI brief as an appendix.
- **Today pulls the plan into the day:** each habit shows only what to do today. Affirmations: the goal card. Create: one specific writing or shooting task (from `DAY_PLAN`, otherwise the default for a shoot or copy day). Sell: today's launch steps by group, any dated plan task, the Sunday review and the month review. The launch calendar builds itself: December follows the brochure, later months spread their launch count (`LAUNCHES_PER_MONTH`: 12 in January, 15 from February) evenly and keep rotating Groups A, B and C. Add dated tasks to `DAY_PLAN` in index.html.
- **Today's selection:** on each day, every scheduled Becoming section recommends two of its channels (not videos), shown on the Today tab and highlighted in the section on the Becoming tab. Each section rotates through its whole list in order, two at a time, one step each time it comes up on the schedule, whether or not you watched; no channel repeats until the rest have had a turn. The selection is worked out from the date, so it stays the same all day and on every device, and new channels join the rotation automatically. Film & Series follows a series rule: films only until January 2027; from then on, one series at a time (the first in the Series list) until it is finished and removed. On Art days it also names two of the three music genres (classical, jazz, blues), rotating the same way.
- **Goals:** a Goals button at the top opens your goals: at most two for the month and two for the week. Tap Edit to write them, then Save. Turn on *Show my goals every time I open the app* and they pop up whenever you open the app, with only a Close button (also after it has been in the background for 10 minutes); only the goals you wrote are shown. Tick a goal when you hit it. Goals sync with your weeks.
- **Today tab (opens first):** only today's habits in time order, today's progress bar, a link to the full week; ticks sync both ways with the Week grid. The day's habits in time order, big tick buttons, "Up next", today's Becoming theme and a box for your pick
- **The week:** habits × days grid, score per habit, today's column highlighted
- **Weekly progress bar:** targets add up to 40 ticks; hitting every target is 100%, extra ticks count as bonus
- **Clear week** with confirmation and undo
- **Past weeks** with their score; a fresh week starts every Monday
- **Sounds:** click on tick, chime when the day is complete, celebration at 100% (can be switched off)
- **Key wins** and **one strategy** notes for each week
- **Becoming tab:** the full Becoming brochure inside the app (12 sections, A–L; sources by format, action steps, the rules), with a letter bar to jump straight to any section
- **Doing tab:** Volume II as a practice floor, not a reading list. Seven skills, in launch order: **Master** (go deep: one daily drill, one weekly drill) 01 Content Creation, 02 Copywriting (Email Marketing), 03 Public Speaking, 04 Sales Closing; **Sharpen** (keep sharp by using them) 05 Offer Creation (Product Development), 06 Funnel Building, 07 Media Buying. Each skill has its drills, a number to track and practice material; then the swipe vault, numbers, feedback loop, market and Seller's Code. Psychology runs through all seven. On Today, Create carries content (shoot days: Mon, Wed, Sat) or copywriting (Tue, Thu, Fri, Sun), and Sell carries sales closing (Mon, Wed, Fri, Sun) or public speaking (Tue, Thu, Sat). Each day shows the skill, today's resource (a TikTok source, a classic ad, a speaker: Obama, Vusi Thembekwayo or Malcolm X, or a closing tool) and the exact drill. Each skill steps through its drills and resources every time it comes up, so the weeks don't repeat exactly. Building's skill list shows the same seven.
- **Theme links:** tap a section on today's Becoming theme to open it in the Blueprint

## Daily schedule

No clock times: do the habits in this order, whenever your day starts. Each habit shows two jobs, one for today and one for tomorrow.

| Order | Habit | Target |
|-------|-------|--------|
| 1 | Affirmations | 7/7 |
| 2 | Bible Study | 7/7 |
| 3 | Read Book | 6/7 |
| 4 | Create (shoot Mon · Wed · Sat, copywriting other days) | 7/7 |
| 5 | Sell | 7/7 |
| 6 | Becoming | 6/7 |
| All day | Abstain | 7/7 |

## Becoming themes

Mon People & Lives · Tue Design & World · Wed Style & World · Thu History & Money · Fri Art & Craft · Sat Film & Series · Sun Speech & Presence

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
