# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- San Marin High School (Novato, CA) speech and debate team members. Confirmed this session: they use the portal mostly on laptops at home, and the portal is new enough that usage habits have not formed yet.
- Team captains, who see extra captain-only material (Captain Docs link) after signing in with the captain code.
- Future publicity captains maintain the site with no coding background; frequently changing content must stay in commented JSON/JS data files (see CLAUDE.md).

## Product Purpose

Official website plus a member-gated portal for the team. The portal gives members the Training Vault (12-unit interactive Parliamentary debate curriculum), a PDF resource library by level, a Competition Toolkit (tournament resources, packing list, parent/judge info), and a Team Hub (announcements, meeting-topic suggestions, schedule, awards, by-laws).

## Operating Context

- Access is a shared team code entered on portal.html; role and timestamp live in localStorage (90-day session). No server auth.
- Static HTML/CSS/JS on Vercel; no build step. Google Calendar iframes embed the schedule. Awards load from api/awards.js; announcements from data/announcements.json.
- The Training Vault is a client-side app (vault-app.js, vault-curriculum.js, vault-exercises.js) themed by CSS variables in vault-styles.css.
- Packing list checkbox state persists in localStorage.

## Capabilities and Constraints

- Everything that changes season to season lives in data files a non-technical captain can edit; UI must keep reading from them.
- Role-gated markup relies on the `hidden` attribute actually hiding (see portal-styles.css comment).
- Copy rules: no em or en dashes in visible copy; team history facts come from coach Karen Kenyon and are never invented (see CLAUDE.md).

## Brand Commitments

- Identity: prestigious school debate team, academic and cutting-edge, never corporate tech or SaaS (user's standing instruction in CLAUDE.md).
- Site visual world (incumbent, in code): cream paper canvas #f4f3ef / #eeece8, forest greens #1b4332 / #2d6a4f, bronze gold #b8905a, dark forest #0d1a10 with SVG noise on dark sections; Cormorant Garamond display serif, Plus Jakarta Sans text, JetBrains Mono labels; pill nav; per-page editorial mark vocabulary (swoop underline, editor's marks, brush stroke).
- Assets: seal logo (brand-assets/633CD478...png), horse favicon, socrates-bust.png.
- Confirmed this session: the portal redesign spans the whole portal (login, Team Hub, Competition Toolkit, shared chrome, and a Training Vault retheme via its CSS variables) and moves to the light register of the main site, replacing the current dark glassmorphism portal theme.

## Evidence on Hand

- Real announcements (data/announcements.json), awards with photos (api/awards.js, collegephotos/, teampictures/), PDF guides (debate_resource_basics/, debate_resources_jv_and_varsity/, Speech & Debate TOURNAMENT Resources/).
- Do not invent results, dates, advisors, or award counts.

## Product Principles

- A future captain with no coding background can keep it alive: data in commented JSON, UI maps over it.
- Academic prestige over tech gloss; the portal should feel like part of the same institution as the public site.
- Preserve working behavior exactly: auth gate, role gating, search, packing-list persistence, calendar embeds, vault progress.
- Accuracy outranks polish; facts trace to the coach and captains.
