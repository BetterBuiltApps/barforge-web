---
title: Log a session
description: Start a workout from the Train tab, log each set with Made or Miss, use the rest timer, and finish.
covers:
  - Docs/FEATURES.md#Dashboard
  - Docs/FEATURES.md#Active session
  - Docs/FEATURES.md#Pre-session
  - LiftingLab/Features/Train/Session/ActiveSessionView.swift
  - LiftingLab/Features/Train/Complex/ComplexSequenceRow.swift
  - LiftingLab/Features/Train/Complex/ComplexDemoView.swift
  - LiftingLab/Domain/WarmUpEngine.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/TrainDashboardScreen.kt
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/session/ActiveSessionScreen.kt
  - LiftingLab/Features/Train/Session/SetQuantityControl.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/session/SetQuantityControl.kt
  - LiftingLab/App/LaunchReconciler.swift
  - LiftingLab/Features/Train/Session/ActiveSessionModel.swift
  - LiftingLab/Features/Train/Session/MissRiskHeadsUpBanner.swift
  - LiftingLab/Domain/Coaching/MissRiskCopy.swift
  - lifting-lab-android/app/src/main/java/com/betterbuiltapps/liftinglab/features/train/session/SessionSetFocusCard.kt
verified_for: "1.6"
---

<video controls playsinline preload="none" poster="/help/videos/v2/B2-poster.webp" width="300" aria-describedby="B2-desc">
  <source src="/help/videos/v2/B2.mp4" type="video/mp4">
  <track kind="captions" src="/help/videos/v2/B2.vtt" srclang="en" label="English" default>
</video>

<p id="B2-desc"><em>Video, 23 seconds, with narration and captions. The next set loads. Rest starts. 6 easy to 10 all out. Tag how it failed, or skip the tag.</em></p>

## Start a session

Open the **Train** tab. Whatever is waiting for you sits near the top.

- **Today's program day.** If you are following a program, a button starts today's session. You first see a quick check-in where you tap how you feel. Feeling below normal eases the day's fixed weights a little. One tap starts the session.
- **A session you left open.** It appears as a row saying which workout, how far in you were, and how long ago. Tap it to go back in.
- **Something new.** Tap **Build** (the plus in the middle of the tab bar), then **Build My Workout** for a session made around how you feel today.

![The Check In sheet: Fresh, Normal, Tired and Smoked, with Tired easing today's weights by 5 percent and Smoked by 10 percent.](../../../assets/screens/check-in.png)

![The Train tab with a paused session: a Back Under the Bar row showing the workout and how many sets are logged.](../../../assets/screens/resume-session.png)

<!-- since 1.5 -->

On the Train tab, under the start of your workout, the **Strength** tile shows whether you are getting stronger, from your best sets of 1 to 5 reps. Tap it to open the PR Tracker. See [Are you getting stronger?](/help/train/prs-and-log-book/#are-you-getting-stronger).

<!-- /since -->

Leaving a session never loses a set. Backing out just pauses it, and every set you logged is already saved.

<!-- since 1.5 -->

On iPhone, leave the session with the **Back** arrow (a chevron) at the top left of the exercise list. Swiping from the edge of the screen no longer leaves it. On recent versions of iOS that swipe could start anywhere, so a sideways brush of the thumb in the middle of a set could slide the whole session away. Inside an exercise, **Exercises** at the top left takes you up to the list.

:::note[Android]
Android's back gesture starts at the screen edge, so a brush across the card never leaves the session. The back arrow at the top left of the exercise list and the system back gesture both pause the session, as before.
:::

<!-- /since -->

<!-- since 1.5 -->

To end a paused session without going back in, press and hold its row. **Finish It** closes the session at the last set you logged, so it shows in your Log Book as the short session it was, and a program day counts as done. **Discard** deletes the workout after asking. If a program day has nothing logged yet, only **Discard** is offered, which puts the day back on your schedule instead of marking a session you never did as complete.

:::note[Android]
On Android, tap the three dots at the end of the row instead of pressing and holding.
:::

A program day you started late and carried past midnight stays open, so the app does not close it for you in the middle of your workout. A day you stopped more than 12 hours ago is closed with the sets you logged, or put back on your schedule if you had logged none.

<!-- /since -->

## The set card

The session shows one set at a time. You see the exercise, the weight in large type, the target reps, and a picture of the bar with the plates on each side. The classic lifts, squats, pulls and presses open with warm-up sets first, starting with the empty bar. These are labelled as warm-ups and are not counted as training.<!-- since 1.5 --> When the same lift comes back later in the session, such as back-off sets after a heavy top set, it has no second warm-up: you are already warm from the first.<!-- /since -->

<!-- since 1.6 -->

You always get fewer warm-up sets than working sets, so four working sets come with three warm-ups at most. When the app has to drop warm-ups, it drops repeated weights and the lightest steps first, and keeps the heaviest ones, so the jump to your first working set stays small. For example, four doubles at 72 kg warm up with the bar, 50 and 61. Pulls, presses and squats always keep at least one warm-up.

Every warm-up is lighter than your first working set. When your working sets climb, for example four doubles from 44 kg up to 52 kg, the warm-ups lead up to the 44 kg opener, and the working sets take you the rest of the way.

Heavy singles are the exception. When every working set is a single, you get at least the empty bar and the two heaviest warm-up steps, even for one working set. A squat single also gets a step at 85%, so a 180 kg single warms up with the bar, 126 and 153.

You can see and change your warm-up steps in **Settings > Training > Warm-Up Ramp**. The preview there shows what you get before a few working sets and before a single.

:::note[Android]
Android uses the same rule and gives the same warm-up weights.
:::

<!-- /since -->

<!-- since 1.6 -->

A lift in a program you wrote yourself can carry a **tempo**, such as 3-1-X-1. The set card shows it under the weight and spells out what it means: three seconds down, one second still at the bottom, drive up fast, one second at the top. Nothing is timed for you. See [Write your own program](/help/train/program-builder/).

If you turn on **Hold to verify** in **Settings**, under **Session Coaching**, technique sets of a lift with a catch show a reminder under the weight: hold the receiving position for a slow two or three count before you recover. It is only a reminder. Made and Miss work as usual.

**Pro:** before a heavy single, at 85% of your best or more, a short note can appear above the set card when the reps you filmed of that lift today show the bar drifting further forward through the pull. It never changes the weight or stops the set. Close it with the cross, or turn it off in **Settings > Training** under **Drift heads-up before heavy singles**.

:::note[Android]
Android shows the tempo, the hold reminder and the drift note the same way.
:::

<!-- /since -->

To log a set:

1. Check the weight. Tap the number to type a new one, or use the minus and plus buttons to step to the next weight your plates can build.
2. Check **Reps done**. Left alone, it counts the full target if you make the lift and zero if you miss. Nudge it if you did more or fewer.<!-- since 1.5 --> The count stops at 50.<!-- /since -->
3. Tap **Made** or **Miss**.
4. If you miss, you can tag what went wrong. The app then suggests causes, drills and cues for that fault.<!-- since 1.5 --> Tagged misses also count in [Technique Doctor](/help/train/technique-doctor/).<!-- /since -->

Some sets ask how hard it felt. Pick the answer that fits, from easy to all out.<!-- since 1.5 --> Rating a working set as all out holds the next sets at that weight instead of climbing.<!-- /since -->

<!-- since 1.5 -->

When you tap **Made**, one question comes up first: **How hard was that set?** Pick one of the five answers, from easy to all out, or tap **Skip** to log the set without a rating. Nothing is logged, the rest timer does not start and the card does not move on until you answer or skip, and the question cannot be swiped away. A set that already has a rating, such as one you log again after stepping back, is logged straight away.

:::note[Android]
Android asks the same question the same way when you tap Made. On the exercise list, the dots for a long warm-up ramp are easier to see and wrap onto a second line instead of running off the card. A warm-up set you have not done yet is a dashed circle and a working set you have not done yet is a solid circle, with a thin line between the two groups.
:::

<!-- /since -->

<!-- since 1.6 -->

That question is the only place to rate a set, on iPhone and Android. There is no effort row on the set screen, so a set you skip stays unrated, a rating cannot be changed once given, and a missed set is not rated.

<!-- /since -->

Not every set is a weight. A bodyweight movement such as a pull-up shows the rep count as the big number, with no bar and no plates. A timed hold, such as a plank or an L-sit, shows a clock instead: tap **Start**, then **Pause** or **Resume**, and **Reset** clears it. You can also tap the time to type the seconds. A distance piece shows the distance in kilometers or miles to match your kg or lb setting, with buttons to step it or a tap to type it.<!-- since 1.5 --> Android has the same controls.<!-- /since -->

If you change a weight and make the lift, the remaining sets of that exercise move by the same amount, so you do not have to retype it each time.

<!-- since 1.5 -->

A complex (several lifts on one bar) is one set with its lifts listed in order. If you miss one, the app asks **Where did it go?** so you can tap the lift that failed. Complexes cannot be filmed yet.<!-- since 1.6 --> The picture button at the top of the session, and the info button on the exercise, show every lift in the complex in order, with its reps and cues.<!-- /since --> See [Build and log a complex](/help/train/complexes/).

<!-- /since -->

<!-- since 1.5 -->

A set that asks you to go by feel, with no weight written, can open on what you lifted last time. The line under the weight says where the number came from. It names the reps that weight was made for, for example "From 100 kg for 1 last time, adjusted for 3 this set", because a weight you made for a single is not a weight to carry unchanged into a triple. If it has been more than four weeks since you did that lift, the weight opens a little lower, by about 2% for each further week and never below 85% of what you made, so you are not reopened on the weight you left. The line still says what you actually lifted. Type your own number and the line goes away.

## Swap an exercise mid-session

In a workout you built yourself, tap the circled dots beside the exercise name and choose **Swap exercise** for as long as one of its working sets is still ahead. Sets you have already logged stay under the lift you did them as, and the sets still to come, and any warm-up sets you have not done, move to the new lift. If the new weight is lighter than the old one, a line under the weight says which lift it is now for. Program days cannot be swapped.

<!-- /since -->

## Rest timer

Once you log a set, the rest timer starts. By default it counts up so you can see how long you have rested. In **Settings > Training** you can turn on the countdown timer, which signals when rest is up even if your phone is locked. It keeps running if you leave the session and come back<!-- since 1.5 -->, and adding an exercise from the session list does not restart it<!-- /since -->.

<!-- since 1.6 -->

On a built-in program, the rest starts at what suits the program's phase, and a line under the timer gives the range and why. With the Meet Planner (Pro), it tightens to two to three minutes in the last three weeks before a planned A or B meet. A rest written on the set always wins, and once you change the default rest in **Settings > Training**, your number is always kept. A program you wrote yourself has no phase, so it keeps your default.

<!-- /since -->

<!-- since 1.5 -->

If you turn on **Spoken rest cues** in **Settings > Accessibility**, the phone says when 30 seconds remain on the countdown and when rest is over. At the end of a rest it names the set you are about to do, numbered the way the card shows it (a warm-up as a warm-up set), at the weight on the bar. After the last set of an exercise it just says rest is over.

<!-- /since -->

<!-- since 1.5 -->

## The Accessibility view

If you prop your phone on the floor, or you simply want bigger controls, turn on the Accessibility view. Tap the **A** in the session's top corner, or go to **Settings > Accessibility**. The weight, reps and set label become very large, white on black. **Made** and **Miss** grow into huge buttons, and gray controls get a clear outline. You can still type or step the weight and set the reps.

:::tip
Switching the view on and off mid-session never changes your logged sets.
:::

<!-- /since -->

## Finish

When every set is done, tap **Finish Session**. You can end early with **Cut It Short**, which saves what you have logged.<!-- since 1.5 --> In a workout you built yourself, on iPhone, these buttons stay pinned to the bottom of the screen, including while you are inside an exercise. In a program day they sit at the end of the exercise list.<!-- /since --><!-- since 1.5 --> If you have not logged a single set, there is nothing to save, so the same button reads **Discard** and removes the workout instead of counting it as done. A program day you discard goes back on your schedule.<!-- /since --> A celebration screen shows any new records. From there, tap **Done** to leave, **Log the Damage** to add a note (it reads **Edit your note** once you have written one), or **Share Workout**. The note is optional and stays available from the Log Book.

Changed your mind about a workout? The finish menu also offers **Discard Workout**, which asks before deleting.

<!-- since 1.5 -->

A set of 2 to 5 reps that is heavier than your best for those reps is saved as a rep record as soon as you make it. Most are saved quietly. If the lift has a 1RM on file, a rep record is celebrated only when the weight is close to your max. If it has no 1RM yet, the first one at each rep count is the mark to beat, and a rep record is celebrated when it beats your best from an earlier session. See [How records are saved](/help/train/prs-and-log-book/#how-records-are-saved).

<!-- /since -->

<!-- since 1.5 -->

If you paused a session and finished it hours later, it ends at your last logged set, plus up to half an hour for a long rest or a note. The Log Book duration, the shared card and the workout saved to Apple Health (Health Connect on Android) then show the time you trained, not the time the session sat open.

<!-- /since -->

![The set card: the exercise name, the weight in large type with the reps, a bar loading diagram, a Reps done stepper, and Made and Miss buttons.](../../../assets/screens/set-card.png)

<video controls muted playsinline preload="metadata" poster="/help/videos/log-a-set-poster.png" width="300" aria-describedby="log-a-set-desc">
  <source src="/help/videos/log-a-set.mp4" type="video/mp4">
</video>

<p id="log-a-set-desc"><em>Video, 12 seconds, no sound: from the session list, open an exercise and tap Made. The rest timer starts and the next warm-up set loads.</em></p>
