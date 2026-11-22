---
title: Your profile, progress and settings
description: Where to find your profile, XP and badges, settings, Apple Health and subscription in the Locker tab.
covers:
  - Docs/FEATURES.md#Tab 4, Locker
  - LiftingLab/Features/Me/SettingsView.swift
  - LiftingLab/Features/Me/Progress/PlayerProgressView.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/SettingsScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/PlayerProgressScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/LockerHomeScreen.kt
  - LiftingLab/Features/Me/TrainingSettingsView.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/TrainingSettingsScreen.kt
verified_for: "1.6"
---

The Locker tab is about you: who you are as a lifter, how you are progressing, and how the app behaves.

![The Locker tab: your profile card, level and XP, Sinclair, Total and ratio tiles, then My Gyms, Body, Profile and Settings.](../../../assets/screens/locker.png)

<video controls playsinline preload="none" poster="/help/videos/v2/K4-poster.webp" width="300" aria-describedby="K4-desc">
  <source src="/help/videos/v2/K4.mp4" type="video/mp4">
  <track kind="captions" src="/help/videos/v2/K4.vtt" srclang="en" label="English" default>
</video>

<p id="K4-desc"><em>Video, 22 seconds, with narration and captions. 275 / 900 XP to level 4. Records, lifts analyzed, sessions and more. Tracked on the same screen.</em></p>

## Your profile and numbers

The top of the Locker shows your photo, age category, bodyweight and experience, plus your level, XP and streak. Three stats sit underneath: Sinclair, your total, and your clean and jerk to snatch ratio. Tap any of them to open the tool that works it out. That includes a stat showing a dash, where the tool will tell you what is missing.

Open your profile to set your name, coach's name, date of birth, bodyweight, weight class, photo and height.<!-- since 1.5 --> A Technique section walks you through finding your grip, squat stance, lead leg and dip depth.<!-- /since --><!-- since 1.6 --> On iPhone, **Use Health value** under bodyweight takes your latest weigh-in from Apple Health. That reading stays on this iPhone and is not synced to iCloud, and the row says so. A bodyweight you type in yourself syncs to your other devices as before.<!-- /since -->

Other sections in the Locker:

- **My Gyms**: your home, club and competition gyms, each with its own bar and plates. Workouts and tools use your default gym.
- **Body**: log an area you are training around, check in with a pain rating, and see how the app adjusts. It changes your training, not your treatment.

## Progress, XP and badges

Tap the level strip to see your level, an XP breakdown, your streak and your badges. Each badge shows how close you are, and you can share a progress card as an image.<!-- since 1.5 --> Further down, Training Volume shows how your logged sets split between the lifts, pulls and squats (see [Read your training volume](/help/train/training-volume/)). The Train dashboard also has a Gains tile for the last four weeks, and tapping it opens this screen.<!-- /since -->

## Settings

Open Settings from the Locker. The main rows are:

- **Training**: rest timer, bar choice, your warm-up ramp, and how custom workouts pick exercises.<!-- since 1.6 --> It also holds **Drift heads-up before heavy singles**, the note a set card shows before a heavy single when today's filmed reps show the bar drifting forward. The note is Pro, and the switch is on until you turn it off.<!-- /since -->
- **Reset Your Numbers**: coming back from illness or injury? Enter what you can lift now and workouts load from that. Your records stay untouched.
- **Apple Health** (Health Connect on Android): four switches for adapting rest, suggesting readiness, saving workouts and syncing bodyweight.
- **Film Room**: the grading level for technique grades. It changes the technique grade only.
<!-- since 1.6 -->

- **Session Coaching**: **Hold to verify**, off until you turn it on. On technique sets of a lift with a catch, the set card reminds you to hold the receiving position for a slow two or three count before you recover. It never stops you logging the set and times nothing.

<!-- /since -->

- **Sounds**, and **Units** for kilograms or pounds.
- **Data & Privacy**: clip storage<!-- since 1.5 -->, exporting your data as CSV files and importing a training history from one (see [Import your training history from a CSV](/help/start/import-from-csv/)). On Android those two rows sit under **Data** in Settings itself<!-- /since -->, and the Privacy Policy and Terms are under **About**.

## Accessibility

<!-- since 1.5 -->

In Settings, the Accessibility section has four switches:

- **Spoken rest cues**: says when 30 seconds remain, then when rest is over and what is next.
- **Show charts as tables**: opens a table of the same numbers under every chart.
- **Accessibility view**: draws your next set very large with bigger Made and Miss buttons and clear edges on controls.

<!-- /since -->

- **Reduce celebrations**: skips confetti, haptics and sounds. You still earn XP and badges.

## Subscription

The Subscription section shows your plan and lets you view Pro. **Restore Purchases** brings back a subscription after reinstalling or moving to a new phone. If you have a subscription, **Manage Subscription** opens your Apple settings.

<!-- since 1.5 -->

## Help and support

Help now lives in Settings. **Quick Start** works offline. **How-to Guides** opens these articles and needs an internet connection. **Contact Support** opens the support page.

<!-- /since -->

:::tip
Switching to a new iPhone? Tap Restore Purchases once you have signed in with the same Apple ID.
:::

:::note[Android]
On Android, Pro is billed to your Google Play account.<!-- since 1.5 --> While you are on Free, the Subscription screen lists what Pro includes above the plan buttons. If prices cannot load there is a Try Again button, and if a purchase does not go through, a line under the buttons says so. If you pay with a slower method such as cash or a bank transfer, the screen says the payment is pending, and Pro unlocks as soon as Google Play confirms it. Buying again does not speed it up.<!-- /since --> Once you have Pro, the screen has a Manage in Google Play button to change or cancel it. There is no Restore Purchases button: the app checks Google Play for your subscription itself, so a new phone signed in with the same Google account gets Pro back.<!-- since 1.6 --> If Google Play cannot be reached when the app opens, Pro stays on from the last time Google Play confirmed it, for up to seven days.<!-- /since -->
:::
