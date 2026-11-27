---
title: Log a powerlifting session
description: Start a workout, log each set, use the rest timer and warm-ups, and finish, in Barforge Powerlifting.
draft: true
sidebar:
  order: 2
covers:
  - shared/sports/powerlifting/
  - BarforgeWeightlifting/Domain/Sport/Powerlifting/
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/sport/powerlifting/
  - BarforgeWeightlifting/Features/Train/Session/ActiveSessionView.swift
  - BarforgeWeightlifting/Domain/WarmUpEngine.swift
  - BarforgeWeightlifting/Domain/PlateSolver.swift
  - apps/weightlifting-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/session/ActiveSessionScreen.kt
  - apps/weightlifting-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/PlateSolver.kt
verified_for: "1.0"
---

:::caution[Not released yet]
Barforge Powerlifting has not been released. This guide describes the first version as planned, and it stays out of the published site until the app is in the App Store and Google Play.
:::

Logging a session in Barforge Powerlifting works the same way as in Barforge Weightlifting: one set at a time, with the weight in large type, the plates drawn on the bar, and a rest timer between sets. If you know that app, you already know this screen.

## Start a session

Open the **Train** tab.

- **Today's program day.** If you are following a program, start today's session from the top of the tab. See [Built-in programs](/help/powerlifting/programs/).
- **A session you left open.** It waits near the top. Tap it to go back in. Leaving a session pauses it, and every set you logged is already saved.
- **Something new.** Tap **Build**, the plus in the middle of the tab bar, to put a workout together yourself.

## Log a set

The set card shows the exercise, the weight, the target reps and a picture of the bar with the plates on each side.

1. Check the weight. Tap the number to type a new one, or use the minus and plus buttons to step to the next weight your plates can build.
2. Check **Reps done**. It counts the full target if you make the set. Change it if you did more or fewer.
3. Tap **Made** or **Miss**.

If you change the weight of a set and make it, the sets still to come for that exercise move by the same amount.

## Warm-ups

The squat, bench press, deadlift and their heavier variations open with warm-up sets, starting with the empty bar and climbing toward your first working set. Warm-up sets are labelled as warm-ups and do not count as training. You can see and change the warm-up steps in **Settings**.

## Rest timer

The rest timer starts when you log a set. By default it counts up, so you can see how long you have rested. You can switch it to a countdown in **Settings**, and it keeps running if you leave the session and come back.

## Finish

When every set is done, tap **Finish Session**. You can end early with **Cut It Short**, which saves what you logged. A summary shows any new records. A new best squat, bench press or deadlift also raises your total. See [Your total and scores](/help/powerlifting/total-and-scores/).

:::note[Android]
The session screen, warm-ups, plate math and rest timer work the same way on Android. A finished workout can be written to Health Connect instead of Apple Health, if you allow it.
:::
