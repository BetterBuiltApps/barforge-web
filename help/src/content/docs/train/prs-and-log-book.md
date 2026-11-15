---
title: Track PRs and review your Log Book
description: See whether you are getting stronger, how records are saved, how to review past sessions, and how to import bar-speed data.
covers:
  - Docs/FEATURES.md#PR tracker (`Train/PRTracker/`)
  - Docs/FEATURES.md#Log Book (`Train/History/`)
  - Docs/FEATURES.md#VBT import (`Train/History/VBTImport/`)
  - LiftingLab/Features/Train/PRTracker/PRTrackerView.swift
  - LiftingLab/Features/Train/History/LogBookView.swift
  - LiftingLab/Features/Train/History/SessionDetailView.swift
  - LiftingLab/Domain/Complex/ComplexHistory.swift
  - LiftingLab/App/SessionDeletion.swift
  - LiftingLab/Features/Train/History/VBTImport/VBTImporter.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/prtracker/PRTrackerScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/logbook/LogBookScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/interop/vbt/VBTImportScreen.kt
  - LiftingLab/Domain/LoadVelocityProfile.swift
  - LiftingLab/Features/Train/Dashboard/StrengthTrendTile.swift
  - LiftingLab/Features/Train/PRTracker/StrengthTrendChart.swift
  - LiftingLab/Domain/Progression/StrengthTrend.swift
  - LiftingLab/Domain/Progression/StrengthTrendDisplay.swift
  - LiftingLab/Domain/PRRules.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/prtracker/PRTrackerViewModel.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/StrengthTrendTile.kt
verified_for: "1.5"
---

The PR Tracker holds your records. The Log Book holds everything you have trained.

<video controls playsinline preload="none" poster="/help/videos/v2/G1-poster.webp" width="300" aria-describedby="G1-desc">
  <source src="/help/videos/v2/G1.mp4" type="video/mp4">
  <track kind="captions" src="/help/videos/v2/G1.vtt" srclang="en" label="English" default>
</video>

<p id="G1-desc"><em>Video, 18 seconds, with narration and captions. Snatch plus clean and jerk. Primary and secondary lifts. Your current best, over time.</em></p>

## The PR Tracker

The tracker shows<!-- since 1.5 --> your strength trend,<!-- /since --> your Total (calculated for you), your main lifts, your secondary lifts, and a history for each lift with a progress line. A summary of your strength ratios links to the full ratios screen.

To add a record by hand, use the new PR button, enter the weight, and set the reps. One rep is a 1RM (the heaviest single you can lift).

<!-- since 1.5 -->

## Are you getting stronger?

You do not need to test a 1RM to see progress. The **Strength** tile on the Train tab, just under the start of your workout, shows your overall trend over the last 12 weeks, such as **+6% getting stronger**, **holding steady** or **down a little**. Tap it to open the PR Tracker.

The trend comes from your best sets of 1 to 5 reps in the snatch, clean and jerk, front squat, back squat and strict press. The app estimates the single each of those sets suggests and follows the best one for each lift, week by week. Warm-ups, misses, complexes and dumbbell work are left out. Each lift is compared with its own first week in that period, and the trend is the average across your lifts. A lift counts at its best from the last four weeks, so one light or deload week does not read as lost strength. A lift joins the trend once you have trained it in two different weeks, and it is left out if you have not trained it in the last four weeks. If your first week in the period was unusually light for a lift, its gain will look bigger than it is. The result is an estimate, and it is never saved as a record.

It needs a few weeks of training before it shows a number. Until then, and whenever you have not trained any of those lifts in the last four weeks, the tile says **Log a few more sets to see your trend.**

At the top of the PR Tracker, the **Strength** chart shows the same trend larger. Choose **12 weeks**, **6 months** or **All** under it.

If a lift has no 1RM yet, its row shows your best rep record instead, such as **2RM 117.5 kg**, with **Best set of 2** and the date under the name. It is labelled with its reps so it is never mistaken for a single, and it does not count toward your Total. A lift with no records at all shows a dash and **No records yet**.

<!-- /since -->

## How records are saved

Your 1RM is always a single. When you make a heavier set during a session, the app notices and celebrates it.

<!-- since 1.5 -->

The **NEW PR** banner and the **Recent PRs** strip on the Train tab only show a real record: a single heavier than your best on the day it was set. If you add an older or lighter single by hand, it goes into the lift's history but is not celebrated and does not appear as a recent PR.

A record follows the set that earned it. If you step back to a set you just logged and correct the weight or the reps, or log it again as a miss, the record the session saved for it is corrected or removed to match. A record from an earlier session, or one you added by hand, is never touched. A corrected record is dated from the moment you made the correction, so it stays matched to its set.

A heavier set of 2 to 5 reps is saved as a **rep record**, such as a 2RM or 3RM. Rep records appear under **Rep records** on the lift's history. They never change your 1RM, your Total, or the weights the app prescribes.

You do not need a 1RM on file for rep records. Any set of 2 to 5 reps that is heavier than your best for those reps is saved. Whether it is also celebrated depends on whether the lift has a 1RM:

- **With a 1RM on file**, a rep record is celebrated only when it is close to your max: a weight that would leave you about one rep short of failure, which for a double is about 94% of your 1RM. An ordinary working double or triple is saved quietly, even when it beats your best from an earlier session.
- **With no 1RM yet**, the first set at a rep count is saved quietly as your starting point. After that, beating your best from an earlier session is celebrated. Beating a set from earlier in the same workout is saved quietly, so a session of climbing doubles is not one celebration after another.

Because quiet records are saved too, your lift history and the rep records export list more sets than before.

<!-- /since -->

:::note
If you reset your numbers in Settings, the board and Total still show your true records. Strength ratios use your current strength, and a line at the top tells you when a reset is active.
:::

<!-- since 1.5 -->

A lift done inside a complex never counts as a record for that lift, because the weight was chosen to suit the complex's weakest part. Each complex keeps its own **Complex best** instead. A session's detail shows it, along with **Save as complex** to keep that complex in your library. See [Build and log a complex](/help/train/complexes/).

## Make rate

Each lift's history includes **Make rate by intensity**. It shows one bar for each weight band you have attempted (as a share of your best), with the share you made and the number of sets. Bands with fewer than five sets are drawn faint, because a few sets say little. The headline names the heaviest band you make at least four times in five.

Below it you may see **Effort at the same weight**, which shows whether the same loads are feeling harder or easier lately, and **Load and bar speed**, which plots how fast the bar moves at each weight. It only comments on your last session when the line is a good fit and your weights sit inside the range it covers, so a PR heavier than anything on the line is not called slow. Camera peak speed is a rough measure, so a slow day there is a hint, not proof of fatigue.

<!-- /since -->

## The Log Book

The Log Book is a newest-first timeline grouped by month. It holds your sessions and your written reflections.

- Tap a session to see summary numbers and every set grouped by exercise. Filmed sets link to their bar path. Warm-up sets stay in the list, labelled in words such as **Warm-up 2**, so you can read back how you worked up to the bar.
- Switch between **List** and **Calendar** to see trained days in a month view.
- Use the notes button to write a reflection. After 28 days the app suggests taking stock.
- To delete a workout, press and hold its row, or use the menu on its detail screen. You are asked to confirm. A PR you set in that session, your Apple Health workout and any bar-path clip are kept.<!-- since 1.5 --> If the workout belonged to a program, that day goes back on your schedule so you can train or skip it. If it was the last day of a finished program, the program opens again to take it.<!-- /since -->

:::note[Android]
Press and hold works the same on Android: the menu on a Log Book row offers share and export, and Delete Workout.
:::

<!-- since 1.5 -->

Use the menu at the top to export your history, or your PRs, stats and history, as CSV files.

<!-- /since -->

![The Log Book: a List and Calendar switch, a Trends row, and your sessions newest first with sets completed, time and total weight.](../../../assets/screens/log-book.png)

## Import bar-speed data (Pro)

If you use a separate bar-speed device, you can bring its CSV file in.

1. Open the Log Book and tap the <!-- since 1.5 -->export and <!-- /since -->import menu.
2. Tap **Import Velocity Data (CSV)**.
3. Choose the file.

If the app does not recognize the layout, it asks you to match each column to what it holds (such as weight or speed), choose units, and check a preview before importing.

<!-- since 1.5 -->

A date given as a plain number is accepted only if it falls between the years 2000 and 2100. Anything else, such as a column of other large numbers, is reported as a date the app could not read, and those rows import without a time, as standalone readings instead of being matched to a logged set.

Units printed in the column headings, such as "Mean Velocity (cm/s)" or "Weight (lb)", are always used, and speeds in m/s, cm/s and mm/s are all converted. A rep that would still read faster than 5 m/s is skipped with a note to check the speed unit, because no bar moves that fast.

<!-- /since -->
