---
title: Import your training history
description: Bring a log from a spreadsheet, another app or the template into your Log Book, review it, and undo it if it is wrong.
covers:
  - LiftingLab/Features/Me/DataPrivacySettingsView.swift
  - LiftingLab/Features/Me/HistoryImportView.swift
  - LiftingLab/Features/Me/HistoryImporter.swift
  - LiftingLab/Domain/Import/HistoryImport.swift
  - LiftingLab/Domain/Import/HistoryImportTemplate.swift
  - LiftingLab/Domain/Import/ImportedPRCandidates.swift
  - LiftingLab/Domain/Import/ExerciseNameAliases.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/interop/history/HistoryImportScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/interop/history/HistoryImporter.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/interop/ImportCoordinator.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/locker/SettingsScreen.kt
verified_for: "1.6"
since: "1.6"
---

Go to **Settings**, then **Data & Privacy**, then **Import Training History (CSV)**. Free for everyone. Nothing
leaves your phone, and nothing is saved until you tap **Import**.

## Three ways in

- **Choose File**: a CSV, TSV or text file. Excel and Numbers files themselves are not
  read: export as CSV, or copy the cells and paste.
- **Paste from Spreadsheet**: in Google Sheets, Excel or Numbers, select the cells
  including the header row, copy, then tap Paste. A title line above the header is fine.
- **Get the Template**: a CSV with the columns the app reads best (Date, Session,
  Exercise, Set, Reps, Weight, Unit, Result, RPE, Kind) and three example rows.

## What it reads

| Your sheet looks like | Example |
|---|---|
| One row per set | `2026-03-14, Snatch, 2 reps, 80` |
| One row per exercise, with a Sets column | `Snatch, Sets 5, Reps 2, 80` becomes five sets. Reps can be a list: `3,3,2` |
| The work written in one cell | `80x2x3`, `85x1m` (missed), `3x5 @ 100`, `100kg x 2` |
| The app's own export, Hevy, Strong | as exported |

A date written once per day and left blank below is carried down in the last two layouts,
and the review says so. When nothing in a shorthand sheet shows whether `5x3x4` means
weight, reps, sets or sets, reps, weight, it reads weight first and asks you.

## Exercise names: nothing is guessed

Exact names and certain spellings (`Clean and Jerk`, `C+J`, `Back Squats`, `Hang Sn`) are
read straight away. Anything else appears in **Match Exercises** with a few offers: pick
one, choose from the library, or skip those rows. Your choices are remembered on this
phone for the next import. A plain "Squat" is never read as a back squat on its own, and a
dumbbell or machine movement is not offered a barbell lift.

## Already in your log

A set is skipped when your log already has one on the same day, for the same lift, at the
same set number. Importing a file twice adds nothing, and importing it again after matching
more names adds just those rows. Changing kg or lb and importing again does not rewrite
sets already imported: use Undo.

## Undo and PRs

The done screen has **Undo This Import** while it is open; it removes exactly what was
added. After you leave, delete imported sessions one at a time in the Log Book.

It also offers **Set your PRs from this history?**: the heaviest made single per lift that
beats your current PR. Every row starts off; switch on only the ones that are real.

## What is not read

Program plans (a column per day or week, percentages), complexes written with `+`, timed,
distance and bodyweight work, notes and body measurements. Each skipped row is listed with
its reason, and **Share Skipped Rows** gives you the list as a CSV to fix in the sheet.

:::note[Android]
The **Import Training History (CSV)** row is in the **Data** section of **Settings**, next to Export, not under Data & Privacy. The file picker is the system document picker. The results are the same as on iPhone.

A workout file (**.liftinglabworkout**) or program file shared to Lifting Lab from another app shows what is in it first. Nothing is saved until you tap **Save**, and **Cancel** saves nothing.
:::
