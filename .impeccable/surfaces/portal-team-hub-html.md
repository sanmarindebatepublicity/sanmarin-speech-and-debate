---
version: 1
slug: "portal-team-hub-html"
primary_target: "portal-team-hub.html"
related_targets: ["portal.html","portal-competition-toolkit.html","portal-training-vault.html","portal-styles.css","vault-styles.css"]
---

# Member Portal — surface brief

Scope: the member portal surface: portal.html (public login), portal-team-hub.html, portal-competition-toolkit.html, portal-training-vault.html, shared chrome (portal-styles.css), and the vault app theme (vault-styles.css plus style strings in vault-curriculum.js / vault-exercises.js / vault-app.js).

Visitor mode: Operate. Members (laptops at home, habits still forming) complete tasks: read announcements, check the schedule, work vault units, pull tournament resources, tick the packing list. portal.html's job is orientation plus login.

Audience and job: team members and captains behind a shared access code; future non-technical captains maintain content through JSON/JS data files, so generated class names must keep working.

Chosen direction: The Course Catalog (seed 53ddd366, surface roll, user-locked, code-led). Light register matching the main site, replacing the former dark glassmorphism theme. Ruled listings instead of cards; serif display (Cormorant Garamond), Plus Jakarta Sans text, JetBrains Mono registrar labels; one 1px hairline system; square corners with pill buttons reserved for primary actions; bronze stamps mark completed state (packing list All Packed stamp, completed vault units).

Memorable moment: the stamp; the login page's contents plates, where the Training Vault plate opens its whole twelve unit index on the page.

Raises carried: stamped states (from jet-age ticket wallet), single hairline grid discipline (from design annual plate section).

Constraints: preserve auth gate, role gating via hidden attribute, portal search hooks (.hub-section-title, .hub-section-eyebrow, .pdf-name, etc.), packing-list persistence, calendar embeds, vault progress. No em/en dashes in visible copy.

Unresolved: award photos come from expiring Facebook CDN URLs in the data (broken images predate this redesign); consider local photo files.
