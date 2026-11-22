---
title: Start a session with Siri or a shortcut
description: Ask Siri or use the Shortcuts app to open today's session, your Log Book, your PRs or the days to your meet.
covers:
  - LiftingLab/App/Intents/LiftingLabIntents.swift
  - LiftingLab/App/Intents/IntentRouting.swift
  - LiftingLab/App/Intents/SpokenLiftEnum.swift
  - LiftingLab/Domain/Competition/SiriAnswers.swift
  - LiftingLab/Domain/Competition/MeetCountdown.swift
  - lifting-lab-android/app/src/main/res/xml/shortcuts.xml
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/shortcuts/ShortcutRequests.kt
  - lifting-lab-android/domain/src/main/kotlin/com/betterbuiltapps/liftinglab/domain/shortcuts/AppShortcuts.kt
verified_for: "1.6"
since: "1.5"
---

Siri and the Shortcuts app can take you straight to the part of Lifting Lab you use most, without you finding it first. This is free.

## What you can ask for

- **Start My Session**: opens today's session so you can start it. With nothing scheduled, it says so and starts nothing. If a workout is already open and nothing is scheduled, Siri also leaves you in the workout.
- **Open My Log Book**: opens your Log Book. If a workout is open on screen, Siri leaves you in it and tells you to finish or leave it first.
- **Show My Next Meet Countdown**: Siri answers out loud with the days left, for example "12 days to NAME." It names the next meet that is today or still to come, so once a meet has passed it moves on to the next one in your season under **Later meets**. If every meet has passed, it says how many days ago the last one was and that no upcoming meet is planned. With no meet at all, it says there is no meet planned. The Meet Planner is **Pro**, so on the free plan Siri tells you the countdown is part of Pro.

<!-- since 1.6 -->

- **What's My PR**: Siri says your best for a lift out loud, for example your snatch PR. Say the lift in the request, or Siri asks "Which lift?".
- **What's My Next Session**: Siri tells you what is scheduled next and when, without opening the app.
- **Log a PR**: Siri asks for the weight, then opens the new PR sheet with the lift and weight filled in. **Nothing is saved until you tap Save**, so check the number first.

The lifts Siri knows are snatch, clean and jerk, clean, back squat, front squat and power snatch. PR and next-session answers are free.

Siri speaks these answers on your phone, and that includes when it is locked, so anyone nearby can hear your PR. Nothing is sent to Lifting Lab.

<!-- /since -->

## Ask Siri

Say one of these, using the app's name at the end:

- "Start my session in Lifting Lab"
- "Open my Log Book in Lifting Lab"
- "How long until my meet in Lifting Lab"
<!-- since 1.6 -->
- "What's my snatch PR in Lifting Lab"
- "What's my next session in Lifting Lab"
- "Log a snatch PR in Lifting Lab"
<!-- /since -->

On iPhone, a request made before first-time setup is finished waits until you finish it.

## Use the Shortcuts app

1. Open the **Shortcuts** app.
2. Tap the plus button to make a new shortcut, then tap **Add Action**.
3. Search for **Lifting Lab** and pick **Start My Session**, **Open My Log Book** or **Show My Next Meet Countdown**<!-- since 1.6 -->, or **What's My PR**, **What's My Next Session** or **Log a PR**<!-- /since -->.
4. Tap **Done**.

:::note[Android]
Android has no spoken phrases yet. Instead, touch and hold the Lifting Lab icon to see three shortcuts: **Start my session**, **Log Book** and **Next meet**. Drag any of them onto your home screen to keep it there.

**Next meet** opens the Meet Planner. A shortcut tapped while a set is in progress or the camera is open does not interrupt it. A short message, **Finish or leave this workout first**, tells you it was skipped. A shortcut tapped before first-time setup is finished does nothing.
<!-- since 1.6 -->

Touch and hold the icon and you also see a fourth shortcut, **Log a PR**. It opens the new PR sheet with the weight empty, and nothing is saved until you tap Save. There is still no voice command on Android.

<!-- /since -->
:::
