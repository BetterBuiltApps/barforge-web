---
title: Plates and bars
description: The bars and plates Barforge Powerlifting starts with, change plates, and how plate math loads the bar.
draft: true
sidebar:
  order: 5
covers:
  - shared/sports/powerlifting/
  - BarforgeWeightlifting/Domain/Sport/Powerlifting/
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/sport/powerlifting/
  - BarforgeWeightlifting/Domain/Sport/PlateRules.swift
  - BarforgeWeightlifting/Domain/Plates.swift
  - BarforgeWeightlifting/Domain/PlateSolver.swift
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/sport/PlateRules.kt
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/Plates.kt
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/PlateSolver.kt
verified_for: "1.0"
---

:::caution[Not released yet]
Barforge Powerlifting has not been released. This guide describes the first version as planned, and it stays out of the published site until the app is in the App Store and Google Play.
:::

Every weight the app suggests is a weight you can actually load. To do that it needs to know your bar and the plates in your gym.

## Bars

- **Kilograms:** a 20 kg power bar.
- **Pounds:** a 45 lb bar.

The bar follows the units you chose when you set up the app. You can change your units later in Settings.

## Plates

A new gym in kilograms starts with the standard plates plus a pair of 0.25 kg change plates. The change plates let you add as little as 0.5 kg to the bar, which helps with small jumps on the bench press.

If your gym has different plates, edit the gym in **Settings** to match what is on the rack. Weights the app works out are rounded to what those plates can build.

## Plate math

On the set card, the bar is drawn with the plates on each side, so you can load it without doing the sums. When you change a weight with the minus and plus buttons, it steps to the next weight your plates can build.

:::note[Android]
Bars, plates and plate math work the same way on Android.
:::
