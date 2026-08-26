# Portal Structural Consolidation — Design

**Date:** 2026-08-25
**Status:** Approved, not yet implemented
**Scope:** Structure only. No content edits, no visual redesign, no new features.

## Why

The member portal grew by copy-paste. Two pages render the same training
course, five pages carry their own copy of the same login check, and four
pages embed the same calendar. Nothing is broken today, but every one of
those duplicates is a place where a future maintainer fixes a bug once and
leaves it live somewhere else.

That matters more than usual here. The people who will maintain this site
are the next set of team officers, working without the tooling that built
it. The goal of this work is that the obvious edit is the only edit.

## What exists now

`vault.html` and `portal-training-vault.html` are two different shells
around one engine. Both load the same four files:

| File | Lines | Holds |
|---|---|---|
| `vault-curriculum.js` | 2,832 | All lesson and quiz content |
| `vault-styles.css` | 2,119 | Vault visual system |
| `vault-exercises.js` | 846 | Practice exercises |
| `vault-app.js` | 656 | Lesson navigation, progress tracking |

The curriculum is therefore **not** duplicated — a content fix lands once
and both surfaces get it. What is duplicated is the chrome around it.

| | `vault.html` | `portal-training-vault.html` |
|---|---|---|
| Navigation | Standalone bar | Portal sidebar + mobile tabs |
| Unique blocks | Calendar, quick stats, quote box | — |
| Inbound links | 3, all from `captain-docs.html` | 6, from portal sidebars |

Two further duplications:

- **Auth guard.** The same ~18-line `localStorage` session check is pasted
  into `vault.html`, `portal-team-hub.html`, `portal-training-vault.html`,
  `portal-competition-toolkit.html`, and `captain-docs.html`.
- **Calendar embed.** The same Google Calendar iframe appears in
  `index.html`, `vault.html`, `portal-team-hub.html`, and
  `portal-training-vault.html`. All four reference an identical calendar
  ID — verified, not assumed.

`portal-dashboard.html` is already a nine-line redirect shim pointing at
`portal-team-hub.html`. The retire-by-redirect pattern below follows a
precedent this codebase already set.

## Design

### 1. One training surface

`portal-training-vault.html` becomes canonical. It wins because it is the
page the portal navigation actually points at.

`vault.html` becomes a redirect shim matching `portal-dashboard.html`.
Existing bookmarks keep working; nothing 404s. The three `captain-docs.html`
links are repointed at the canonical page.

Before the shim replaces it, `vault.html`'s unique blocks — quick stats and
quote box — move to `portal-training-vault.html`, so retiring the shell
loses no functionality. Its calendar block is already present there.

### 2. One auth guard

Extract the session check to `portal-auth.js`, loaded by every gated page.

The guard must stay **render-blocking** — a plain `<script src>` in `<head>`
before any content, not `defer` or `async`. The current inline guards run
before the body paints, which is what stops gated content from flashing
on screen before the redirect fires. Losing that is a real regression, not
a cosmetic one.

Behavior is preserved exactly: roles `member` and `captain`, a 90-day
expiry, timestamp refreshed on each visit, redirect to `portal.html` on
failure.

Extraction is the goal; the copies are compared first and any drift between
them is reported rather than silently resolved.

### 3. One calendar embed

A single shared snippet replaces the four pasted iframes, so changing the
team calendar is a one-file edit.

## Non-goals

Explicitly untouched by this work:

- **Announcements and sponsors JSON pipelines.** These work and took real
  effort to build. Not modified.
- **Vault progress tracking.** The `localStorage` course-progress behavior
  is liked as-is. Not modified.
- **Quiz and lesson content.** Belongs to the content sub-project.
- **Palette and animations.** Belongs to the design sub-project.
- **File deletion.** Nothing is deleted; `vault.html` persists as a shim.

## Verification

Structural refactors are exactly where silent breakage hides, so each claim
below is checked by observation rather than reasoning:

1. Every route in and out of the portal is walked in a real browser, signed
   out and signed in, confirming each lands where intended.
2. The gate is confirmed to still block: visiting each gated page with no
   session redirects to `portal.html`, and gated content does not paint
   before the redirect.
3. `vault.html` is confirmed to redirect rather than 404, and all three
   former `captain-docs.html` links resolve.
4. Quick stats and quote box are confirmed present and functional on the
   canonical page.
5. Course progress saved before the change is confirmed to survive it.
6. Every page and both API endpoints are confirmed to still return 200.

## Risks

| Risk | Handling |
|---|---|
| Auth guard stops blocking before paint | Keep it render-blocking in `<head>`; verify visually, not by reading code |
| Drift between the five pasted guards hides a real difference | Diff all five before extracting; report differences rather than picking one |
| Progress data lost when the shell changes | Storage keys untouched; verify with pre-existing saved progress |
| A link is missed and dead-ends | Full route walk, not spot checks |

## Remaining sub-projects

This spec covers structure only. Six sub-projects remain, each needing its
own design pass:

1. Quiz content — answer giveaways, novice labeling, prep-time challenge,
   free-response format
2. Design — calmer palette, removal of scroll-reveal animation
3. Officer portal — AI prompts, how-to guides, maintainer documentation
4. Search — jump-to-section across vault material
5. Debate content accuracy — coach and student review
6. Pre-launch full-site audit
