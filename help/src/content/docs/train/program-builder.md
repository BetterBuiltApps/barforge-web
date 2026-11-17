---
title: Write your own program
description: Build a multi-week program in Program Builder, set each day's lifts and loads, then run it, print it or send it.
covers:
  - Docs/FEATURES.md#Program Builder (`Features/Coach/`)
  - LiftingLab/Features/Coach/CoachProgramsView.swift
  - LiftingLab/Features/Coach/ProgramEditorView.swift
  - LiftingLab/Features/Coach/DayEditorView.swift
  - LiftingLab/Domain/Builder/BuilderQuantityEditor.swift
  - LiftingLab/Features/Train/Programs/MyProgramsView.swift
  - LiftingLab/Features/Train/Sharing/WorkoutSharing.swift
  - LiftingLab/Domain/Sharing/WorkoutShareCodec.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/coach/CoachProgramsScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/coach/ProgramEditorScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/programs/MyProgramsScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/interop/ImportCoordinator.kt
  - lifting-lab-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/sharing/WorkoutShareCodec.kt
verified_for: "1.5"
---

Program Builder is for writing your own multi-week plan, week by week and day by day, instead of picking one from the library. Writing a program is **Pro**. Without Pro you keep, edit, print, send and run anything you have already written or been sent.

## Open Program Builder

1. Tap the **Build** button, then **Start a Program**.
2. Scroll to **Build Your Own** and tap **Program Builder**. A Pro lock on the row means you can open it but not start a new program.

## Make a program

1. Tap **New program** (the plus). A Free account sees a lock instead and is taken to what Pro adds.
2. Under **Program**, set the name, author, a short summary and the **Days per week**.
3. Each week has a **Phase label** and a **Deload week** switch. Tap **Add week** for another one. A new week starts as a copy of the one before it, so write one good week and adjust.
4. Tap **Add day** inside a week, then tap the day to edit it.
5. Everything saves as you go. To remove a week or a day, use its bin and confirm.

## Edit a day

In a day, give it a name and a **Weekday offset**, which places it in the week from 0 to 6 days after the week starts. Tap **Add exercise** to pick a lift from the full exercise list. Each exercise has:

- **Sets** (1 to 10) and **Reps**.<!-- since 1.5 --> A counted lift goes from 1 to 50 reps. A timed hold such as a plank shows **Time** instead, set in seconds from 5 to 600 (ten minutes) in 5 second steps, and cardio such as a row or a run shows **Minutes**, from 5 to 60 in steps of 5. A complex shows **Rounds**, from 1 to 3. A new hold starts at 40 seconds.<!-- /since -->
- **Load**, which is one of:
  - **% of PR**: a percentage of your record for a lift you choose under **Reference PR**. Weights are worked out when you start the day, so the program follows your records.
  - **Fixed kg**: one weight.
  - **RPE**: a target effort from 5 to 10.
  - **Bodyweight**: no load.
- **Rest** for that exercise, from 30 to 600 seconds in 15 second steps.
- **Accessory**, to mark it as supporting work, and **Notes** for yourself or the lifter.
- **Swap**, which keeps the sets, reps, rest and note and changes the movement, and **Remove**.<!-- since 1.5 --> If the new movement is measured differently, such as a squat swapped for a plank, the amount starts from the new movement's usual one instead of carrying 5 reps over as 5 seconds.<!-- /since -->

You can drag exercises to reorder them. The app asks before it deletes anything you wrote.

<!-- since 1.5 -->

For back-off sets, choose **% of top set** as the Load. Put a top set of the same exercise before it, and these sets take their weight from it.

<!-- /since -->

<!-- since 1.5 -->

The exercise list also shows complexes beside single lifts. A complex row is written as a percentage of the contest lift it belongs to. See [Build and log a complex](/help/train/complexes/).

:::note[Android]
On Android, an exercise row also offers **Make it a complex**, and a day offers **Add complex**.
:::

<!-- /since -->

## Run it, print it or send it

Your programs appear under **Custom and Imported** on the Programs screen, where you open one and tap **Start This Program** like any other. Your own programs are never locked behind Pro to run.

The **Export** menu on a program offers **Print Program**, **Save as PDF** and **Send to Another Athlete (.liftinglab)**, a file anyone with Lifting Lab can open. To add a program someone sent you, tap **Add a Program You Were Sent** at the foot of the Programs screen and choose the file.

<!-- since 1.5 -->

Each set keeps the range of its own unit when a program is imported. A counted lift is held to 50 reps, a timed hold such as a plank to 60 minutes (3,600 seconds), and a distance to 10,000 meters, so a 60 second plank or a 3000 meter run arrives as your friend wrote it. A value above its limit is brought down to the limit, and a value below 1 is raised to 1, with a warning in both cases.

<!-- /since -->

:::caution
If you delete a program that is running, the running copy ends with it. Sessions you already finished stay in your Log Book.
:::

:::note[Android]
On Android the **Export** menu offers the same three choices, and the Programs screen has the same **Add a Program You Were Sent** button. Sets, Reps and Rest have the same ranges.<!-- since 1.5 --> An imported program is held to the same limits of 50 reps, 3,600 seconds and 10,000 meters. A swap on Android keeps the number whatever the new movement is, and a new row starts at 3.<!-- /since -->
:::

## Share a workout

<!-- since 1.5 -->

Long-press a routine on the Programs screen and choose **Share (.liftinglabworkout)**. Lifting Lab makes a small file you can send by AirDrop, Messages, email or Files. Your friend taps it to open it in Lifting Lab, and it appears under their Routines. If they already have a routine with the same name, theirs is kept and the new one becomes "Name (2)".

The file holds the exercises, sets, reps and percentages or effort levels, so loads are worked out from your friend's own maxes. It does not include your records or your weight history. The one exception is a row you set to a fixed weight: that row keeps the weight you typed.

A file from a newer version of Lifting Lab, or one that uses an exercise your friend's version does not have, is not imported, and the app asks them to update. A routine that cannot be read has no Share option.

:::note[Android]
Long-press the routine card in the same way. The menu item has the same name, and the file goes out through Android's share sheet, so the apps offered are the ones on your phone (AirDrop is iPhone only). Tapping a received file in Files, a chat or an email opens it in Lifting Lab. Workout files work between iPhone and Android in both directions.
:::

<!-- /since -->
