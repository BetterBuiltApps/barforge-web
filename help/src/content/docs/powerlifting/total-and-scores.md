---
title: Your total and scores
description: How Barforge Powerlifting adds up your total and turns it into DOTS, IPF GL and Wilks scores.
draft: true
sidebar:
  order: 4
covers:
  - shared/sports/powerlifting/
  - BarforgeWeightlifting/Domain/Sport/Powerlifting/
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/sport/powerlifting/
  - BarforgeWeightlifting/Domain/Sport/RankingFormula.swift
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/sport/RankingFormula.kt
verified_for: "1.0"
---

:::caution[Not released yet]
Barforge Powerlifting has not been released. This guide describes the first version as planned, and it stays out of the published site until the app is in the App Store and Google Play.
:::

In powerlifting, your result is your total. Barforge Powerlifting also turns your total into relative scores, so you can compare yourself with lifters of a different bodyweight, or with yourself after your bodyweight has changed.

## Your total

Your total is your best squat plus your best bench press plus your best deadlift. It goes up on its own whenever you set a new best in one of the three lifts. If one of the three has no best yet, there is no total to show.

## Relative scores

A heavier lifter can usually lift more, so a raw total favours bigger lifters. A relative score adjusts the total for bodyweight. The app shows three of them.

- **DOTS** is the headline score. It weighs your total against your bodyweight with a curve built from modern competition results, with separate curves for men and women. It is widely used to compare lifters across weight classes.
- **IPF GL** is the points formula used by the International Powerlifting Federation. The app uses its parameters for classic (raw) full powerlifting, the three lifts without supportive suits, and rounds the way the federation does.
- **Wilks** is the older formula many lifters grew up with. The app uses the original version of the formula from Robert Wilks, not the later revision, so your number matches the scores most lifters remember.

Because each formula uses its own curve, the three numbers are on different scales. Compare a DOTS score with other DOTS scores, not with a Wilks score.

## What the scores need

Every score needs a bodyweight. Enter yours in your profile. Without one, the app shows your total but no scores.

At the very light and very heavy ends, each formula has its limits:

- **DOTS and Wilks** were built for a range of bodyweights. If yours is outside that range, the app works the score out as if you were at the nearest end of it.
- **IPF GL** gives no score at all below 40 kg for men or 35 kg for women.

## Keep your bodyweight current

Your score moves with your bodyweight as well as your total. If you gain or lose weight, update it so the score reflects where you are now.

:::note[Android]
The total and all three scores are worked out the same way on Android.
:::
