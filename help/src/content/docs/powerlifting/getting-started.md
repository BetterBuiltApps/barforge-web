---
title: Get started with Barforge Powerlifting
description: What the app is, how it relates to Barforge Weightlifting, and what to set up first.
draft: true
sidebar:
  order: 1
covers:
  - shared/sports/powerlifting/
  - BarforgeWeightlifting/Domain/Sport/Powerlifting/
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/sport/powerlifting/
  - BarforgeWeightlifting/Features/Onboarding/OnboardingFlowView.swift
  - BarforgeWeightlifting/App/RootTabView.swift
  - apps/weightlifting-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/onboarding/OnboardingFlowScreen.kt
  - apps/weightlifting-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/RootTabView.kt
verified_for: "1.0"
---

:::caution[Not released yet]
Barforge Powerlifting has not been released. This guide describes the first version as planned, and it stays out of the published site until the app is in the App Store and Google Play.
:::

Barforge Powerlifting is a training log and program app for the three competition lifts: the squat, the bench press and the deadlift. You plan a session or follow a program, log every set, and watch your total grow.

These guides cover Barforge Powerlifting on iPhone and on Android. Where the two differ, a note says so.

## A separate app from Barforge Weightlifting

Barforge Powerlifting and Barforge Weightlifting come from the same team and share a lot of their design, but they are two separate apps:

- **They install side by side.** You can have both on the same phone.
- **Your data is not shared.** Each app keeps its own training log, records and programs. A session you log in one does not appear in the other.
- **Purchases are separate.** Pro in one app does not unlock Pro in the other. See [Pro and purchases](/help/powerlifting/pro-and-purchases/).

## Your first launch

The first time you open the app, a short setup asks a few questions. You can change every answer later in Settings.

1. **Units.** Choose kilograms or pounds.
2. **Your bar.** A 20 kg power bar, or a 45 lb bar if you train in pounds. See [Plates and bars](/help/powerlifting/plates-and-bars/).
3. **Bodyweight (optional).** Your bodyweight is what lets the app work out your relative scores. See [Your total and scores](/help/powerlifting/total-and-scores/).
4. **Current bests (optional).** Enter your best squat, bench press and deadlift if you know them. The percentage-based programs work out your weights from these, and your total is their sum. Skip any you are unsure of and add them later.

## Exercises

The exercise library is built around the three lifts:

- **Competition lifts.** Squat, bench press and deadlift.
- **Variations.** Pause, tempo, pin, box, high-bar, front and safety-bar squats; pause and close-grip bench, Spoto press, Larsen press, board press and incline bench; sumo and conventional deadlifts, pause and deficit deadlifts, block pulls, Romanian and stiff-leg deadlifts.
- **Accessories.** Rows, pull-ups, dips, overhead press, good mornings, back extensions, leg press, split squats and more.

## Your data

On iPhone, your training data is kept on your phone and synced through your own private iCloud account when iCloud is available, the same way Barforge Weightlifting does it. It is not synced with Barforge Weightlifting's data.

:::note[Android]
On Android your data stays on your phone. There is no cloud sync between devices. Health features use Health Connect instead of Apple Health.
:::

## Not in this version

The first version focuses on training. Meet-day tools, attempt planning, weight-class tools and filming your lifts are not part of it yet.

:::tip
Your first session is a good time to read [Log a session](/help/powerlifting/log-a-session/).
:::
