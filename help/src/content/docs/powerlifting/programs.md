---
title: Built-in programs
description: The percentage-based blocks and the RPE block in Barforge Powerlifting, and how each one picks your weights.
draft: true
sidebar:
  order: 3
covers:
  - shared/sports/powerlifting/
  - BarforgeWeightlifting/Domain/Sport/Powerlifting/
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/sport/powerlifting/
  - BarforgeWeightlifting/Domain/Sport/ProgramTemplateProvider.swift
  - BarforgeWeightlifting/Features/Train/Programs/ProgramDetailView.swift
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/sport/ProgramTemplateProvider.kt
  - apps/weightlifting-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/programs/ProgramDetailScreen.kt
verified_for: "1.0"
---

:::caution[Not released yet]
Barforge Powerlifting has not been released. This guide describes the first version as planned, and it stays out of the published site until the app is in the App Store and Google Play.
:::

A program lays out every session for several weeks, so you do not have to decide each day what to lift. Barforge Powerlifting comes with two kinds: programs that work from percentages of your best lifts, and a program that works from how hard each set should feel.

## The programs

| Program | Kind | Shape |
|---|---|---|
| Foundation block | Percentage | 4 weeks, free |
| Strength block | Percentage | 4 training days a week **(Pro)** |
| Meet peak | Percentage | 4 weeks **(Pro)** |
| RPE block | RPE | 3 training days a week **(Pro)** |

## Percentage-based programs

Each working set is written as a share of your best lift, for example 75% of your squat. The app turns that into a weight from your current best squat, bench press or deadlift, rounded to a weight your plates can build.

Before you start one of these programs, enter your bests for the three lifts in your records. If a best is missing, the app cannot work out that lift's weights. When you set a new best, later sessions are worked out from the new number.

- **Foundation block.** Four weeks of steady work on the three lifts. A good place to start, and free.
- **Strength block.** Four training days a week, built to raise your top-end strength.
- **Meet peak.** Four weeks that bring the volume down and the intensity up, so you arrive at a test day or a meet fresh and strong.

## The RPE-based program

RPE stands for rating of perceived exertion. It is a scale of how hard a set felt, where 10 means you could not have done another rep, 9 means one more rep was left, 8 means two more, and so on.

In the **RPE block**, each set gives you reps and a target RPE instead of a weight. You pick the load:

1. Choose a weight you think will land at the target RPE.
2. Do the set and judge how many more reps you had left.
3. If it felt harder than the target, take a little off the next set. If it felt easier, add a little.

Because you choose the load each day, this block adjusts itself to good days and bad days, and it leans less on your bests being up to date.

## Which kind to pick

- Pick a **percentage** program if you know your current bests and like having every weight decided in advance.
- Pick the **RPE** program if your bests are out of date, or if you would rather let the day decide.

:::note[Android]
The programs and the way they work out weights are the same on Android.
:::
