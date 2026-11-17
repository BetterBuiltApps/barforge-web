---
title: See what is moving your lifts
description: Find out which things in your own log go with your strength, what each verdict word means, and what to try for two weeks.
covers:
  - Docs/FEATURES.md#Dashboard (`Train/Dashboard/DashboardView.swift`)
  - Docs/FEATURES.md#PR tracker (`Train/PRTracker/`)
  - LiftingLab/Features/Train/StrengthDrivers/StrengthDriversHubView.swift
  - LiftingLab/Features/Train/StrengthDrivers/DriverDetailView.swift
  - LiftingLab/Features/Train/StrengthDrivers/DriverComponents.swift
  - LiftingLab/Features/Train/StrengthDrivers/StrengthDriversService.swift
  - LiftingLab/Features/Train/Dashboard/StrengthTrendTile.swift
  - LiftingLab/Features/Train/Session/DriverNudgeBanner.swift
  - LiftingLab/Domain/Progression/StrengthDrivers.swift
  - LiftingLab/Domain/Progression/StrengthDriversCopy.swift
verified_for: ""
since: "1.5"
---

The Strength tile tells you whether you are getting stronger. This guide is about the next question: what is going along with it? The app looks through your own log for things that move with your lifts, such as your bodyweight, your sleep and how many sessions you trained, and tells you which ones seem to be working for you and which against you.

## Where to find it

1. **Train tab, Strength tile.** The tile shows one verdict, the factor it is about, a line saying why, and sometimes a **Fix next** action. Free.
2. **What's moving your lifts.** Tap this button on the tile, or the same entry on the Strength card in the PR Tracker, to open the full list of what the app found.
3. **PR Tracker.** Tapping the Strength tile opens the PR Tracker, as before.

The verdict and the **Fix next** line are free. The full list, each factor's detail and the numbers behind them are Pro.

## The verdict words

Each verdict has a word, an icon and a colour. The word and icon always say it too, so colour is never the only clue.

| Verdict | What it means for your lifts |
|---|---|
| **Great** | This goes with your lifts, and you are well on the good side of your usual. |
| **Good** | This goes with your lifts, and you are about at your usual. |
| **Hurting** | This goes with your lifts, and you are on the wrong side of your usual. |
| **Explains dip** | Your strength dipped, and this is a reason you can see. |
| **Fine** | Nothing in your log links this to your lifts. |

Your usual is your own middle value across the weeks the app looked at. It is not a target, and it is not compared with anyone else.

A dip is never shown as a failure. Nothing on this screen is red.

## Lighter but stronger

Bodyweight gets its own check, and it is arithmetic rather than a guess. Suppose you dropped from 95 kg to 86 kg. The bar numbers on your Strength tile may read down about 6 percent, but per kilo you may be up about 4 percent. The app says so in plain words: "You are 9 kg lighter. Per kilo, your strength is up 4.1%." If you use pounds, it says "Per pound".

Per kilo is a simple way to compare your strength with your own weight. It does not tell you how you rank against anyone else, and it is not advice about your weight.

## What it needs

Before it can tell you anything, the app needs:

- **About 12 weeks of training** with the tracked lifts (snatch, clean and jerk, front squat, back squat and strict press). A lift counts once you have trained it in at least four different weeks in that time.
- **About eight weeks of entries** for each thing it checks. Until then, the factor says what to log, for example:
  - **Bodyweight:** "Log your weight weekly to see if it matters."
  - **Sleep and eating ratings:** "Rate sleep and food when you start a session."
  - **Fatigue:** "Add a weekly reflection."
  - **Effort:** "Log RPE on your working sets."
- **Apple Health** for sleep, resting heart rate and HRV. Turn on **Suggest readiness** under Settings, then Apple Health. If it is off, the app says: "Connect Apple Health to see if sleep and recovery matter for you." The app reads up to a year of this history, and it reads it only when that switch is on.

Until there is enough data, the tile says how many more weeks it needs.

## Why most things say Fine

The app calls something a driver only when the pattern repeats across your weeks and is strong enough that it is unlikely to be chance, given how many things it checks. That bar is high on purpose. For many lifters the answer is "No clear pattern yet." That is a normal result, and it means the app did not find anything it would stand behind.

**Fine** lists are short by design. Read "Fine: sleep, sessions" as "in your log, these do not line up with your lifts", not as a sign that they are right.

## Try this

Each **Try this** is one change, sized to two weeks. After two weeks, log as usual and look again.

The app never asks you to add sets, lift heavier or push harder than your plan. Where a suggestion is about volume or effort, it asks you to do what your plan already has.

## Patterns, not proof

Every screen says "Patterns from your own log, not proof." A pattern is two things that tend to move together in your log. It does not show that one causes the other, and it is not medical advice. If pain is involved, stay within your injury plan and log a check-in.

Everything is worked out on your phone from your own log. Nothing is sent anywhere, and nothing is saved beyond the screen you are looking at.

## The line between sets

The first time you rest in a session, you may see one line under the rest ring. It appears once per session and disappears when the rest ends. It can say:

- **Short sleep last night:** you slept under six hours, or rated your sleep 1 or 2 when you did not log hours. Keep top sets around RPE 8 today.
- **Pain is up today:** your latest check-in is higher than the one before. Stay inside your injury plan, and stop a set early if it bites.
- **Recovery is below your usual**, or you feel tired or smoked. Hit the plan and skip the extras.
- **You slept well**, and for you that goes with good lifting. Run the plan as written.

The line never changes your weights and never adds work. It is free.
