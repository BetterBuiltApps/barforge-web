---
title: Add the Lifting Lab widget
description: Put your next session, this week's tonnage, your best lifts, your latest PR and the days to your meet on your home screen.
covers:
  - LiftingLabWidgets/LiftingLabSummaryWidget.swift
  - LiftingLabWidgets/A4Widgets.swift
  - LiftingLabWidgets/WidgetContentViews.swift
  - LiftingLabWidgets/WidgetSnapshotMirror.swift
  - LiftingLab/App/WidgetSnapshotWriter.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/widget/LiftingLabSummaryWidget.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/widget/A4Widgets.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/widget/WidgetRefresher.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/widget/WidgetSnapshotLoader.kt
verified_for: "1.6"
since: "1.5"
---

The Lifting Lab widget puts the numbers you check most on your home screen, so you can see them without opening the app. It is free.

<!-- since 1.6 -->

There are four widgets: **Training Summary** (the one described below), **Next Session**, **Best Lifts** and **Meet Countdown**. Tap any of them to go straight to that screen in the app.

<!-- /since -->

## What it shows

- **Next session**: your next scheduled session. With nothing scheduled it reads **No session scheduled**.
- **This week**: the tonnage you have lifted this week. A new week starts it again from zero.
- **Latest PR**: the personal record you set most recently. With none logged it reads **No PRs yet**.
- **Meet**: the days left to your meet. This tile only appears when a meet is planned in the Meet Planner, which is **Pro**. Without a planned meet, the widget shows the other tiles and no meet tile. When a meet's date has passed and you listed another under **Later meets**, the tile counts down to that one.

It comes in two sizes, small and medium.

<!-- since 1.6 -->

## The other three widgets

- **Next Session**: the session you will do next and when. When it is tall enough it also shows how many of this week's sessions you have done. Tap it to start the session.
- **Best Lifts**: your snatch, clean and jerk and total, in your unit. A lift you have not logged shows a dash, and the total appears once both lifts are logged. Tap it to open your PRs.
- **Meet Countdown**: the days to your next planned meet. Tap it to open the Meet Planner. The Meet Planner is **Pro**, so without Pro the widget shows a lock and **Meet Planner is Pro** instead of a number.

<!-- /since -->

## Add it to your home screen

1. Touch and hold an empty spot on your home screen.
2. Tap the plus button in the top corner.
3. Search for **Lifting Lab** and pick the widget.
4. Choose small or medium, then tap **Add Widget**.

<!-- since 1.6 -->

## Add one to your Lock Screen (iPhone)

Touch and hold the Lock Screen, tap **Customize**, then tap the widget area and choose Lifting Lab. Lock Screen widgets can be seen without unlocking your phone. To hide what they show until you unlock it, go to **Settings**, then **Face ID & Passcode**, and turn off widgets under **Allow access when locked**.

<!-- /since -->

## When it updates

On iPhone the widget refreshes when you open the app, leave it, finish a session<!-- since 1.6 -->, save a PR<!-- /since -->, or your Pro status changes. Today and Tomorrow flip at midnight on their own.<!-- since 1.6 --> Next Session and the meet countdown also move on at midnight by themselves.<!-- /since --> If the numbers come from an earlier day, the widget says **As of** with that date, so you know how old they are. Open Lifting Lab to bring it up to date.

:::note[Android]
To add it, touch and hold an empty spot on your home screen, tap **Widgets**, then find **Lifting Lab**.

The Android widget reads your log directly instead of a saved copy, and it refreshes shortly after a session, a set, a PR or a program change is saved, or after your Pro status changes. With no PR logged, the tile reads **No PR logged**. If it cannot read your log it says so and asks you to open Lifting Lab.
<!-- since 1.6 -->

There are no Lock Screen widgets on Android. The three new widgets are on the home screen only, under **Widgets** in the same list. They read your log the same way and refresh when a session, set, PR or program change is saved, or your Pro status changes. Next Session and Meet Countdown are short and wide, and Best Lifts is square.

<!-- /since -->
:::
