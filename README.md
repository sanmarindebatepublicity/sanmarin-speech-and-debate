# San Marin Speech & Debate

The official website for the San Marin High School Speech & Debate team — a public-facing
site for prospective members, parents, and the community, plus a gated member portal that
holds the team's competition and training resources.

Built as a static site with a small set of serverless functions, deployed on Vercel.

---

## What's in it

### Public site

| Page | What it does |
|---|---|
| [`index.html`](index.html) | Homepage — team introduction, program highlights, alumni outcomes, calls to join |
| [`about.html`](about.html) | Program history and the awards wall (pulls live records from Notion) |
| [`events.html`](events.html) | Events calendar and media gallery (photos served from Google Drive) |
| [`leadership.html`](leadership.html) | Captain and officer profiles with portraits |
| [`contact.html`](contact.html) | Contact details and inquiry information |

### Member portal

The portal sits behind a team access code and is organized into three sections:

| Page | What it does |
|---|---|
| [`portal.html`](portal.html) | Access-code gate and portal landing page |
| [`portal-team-hub.html`](portal-team-hub.html) | Team Hub — announcements, schedule, roster-facing info |
| [`portal-competition-toolkit.html`](portal-competition-toolkit.html) | Competition Toolkit — tournament prep material, flowsheets, judging guides |
| [`portal-training-vault.html`](portal-training-vault.html) | Training Vault — the structured curriculum |
| [`captain-docs.html`](captain-docs.html) | Captain-level operational documentation |

The Training Vault is the largest piece of the portal. Its curriculum lives in
[`vault-curriculum.js`](vault-curriculum.js) as structured data, with
[`vault-exercises.js`](vault-exercises.js) supplying drills and
[`vault-app.js`](vault-app.js) rendering and tracking progress through it. Keeping the
content as data rather than hand-written markup means new lessons are added by editing one
array instead of duplicating pages.

Alongside the interactive curriculum, the repo carries the team's reference PDFs:

- [`debate_resource_basics/`](debate_resource_basics/) — fundamentals (case construction, the flow, speaker duties, counterplans)
- [`debate_resources_jv_and_varsity/`](debate_resources_jv_and_varsity/) — advanced material (impact calculus, theory arguments, fallacies)
- [`Speech & Debate TOURNAMENT Resources/`](Speech%20&%20Debate%20TOURNAMENT%20Resources/) — day-of tournament sheets, including parent judging guidelines

### Serverless API

Two Vercel functions back the dynamic parts of the site:

- [`api/get-photos.js`](api/get-photos.js) — lists team photos from a Google Drive folder, grouped by season, using a service account with read-only scope
- [`api/awards.js`](api/awards.js) — reads the Awards & Recognition database from Notion so the awards wall updates without a code change

Both read their credentials from environment variables and return an explicit error when
those aren't configured — nothing is hardcoded.

---

## Tech notes

**No framework, deliberately.** The site is hand-written HTML, CSS, and vanilla JavaScript.
For a site of this size, maintained by students who may not have a build toolchain set up,
a page you can open and edit directly is worth more than a component abstraction. There is
no build step — what's in the repo is what ships.

**Routing and headers** are configured in [`vercel.json`](vercel.json), which maps clean
paths (`/portal/team-hub`) onto the underlying files and sets security headers on every
response: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, HSTS, and a
`Permissions-Policy` that denies camera, microphone, and geolocation.

**The portal gate is client-side.** Access codes are compared as hashes rather than stored
in plaintext, but because this is a static site, the gate is a convenience for members —
not a security boundary. Nothing behind it is sensitive; it exists to keep team-internal
material from being the first thing a search engine indexes. Anything genuinely private
belongs in a service with real authentication, not here.

**Local development** uses [`serve.mjs`](serve.mjs), a small Node server that serves the
static files *and* runs the `/api/*` routes, so the photo gallery and awards wall behave
locally the way they do in production.

---

## Running it locally

Requires [Node.js](https://nodejs.org) (LTS).

```bash
npm install
npm start
```

Then open <http://localhost:3000>.

The site loads without any configuration — only the photo gallery and awards wall need
credentials. To enable those, create a `.env` file:

```bash
NOTION_AWARDS_API_KEY=...        # Notion integration token for the awards database
GOOGLE_SERVICE_ACCOUNT_JSON=...  # Service account JSON, as a single-line string
GDRIVE_PARENT_FOLDER_ID=...      # Drive folder holding the season subfolders
```

`.env` is gitignored and must stay that way. In production these are set as Vercel
environment variables.

Opening the HTML files directly via `file://` will work for most pages, but browsers block
the local API requests, so the gallery and awards wall will stay empty. Use `npm start`.

See [`HOW-TO-RUN.md`](HOW-TO-RUN.md) for a step-by-step version of this written for
non-technical team members taking over the site.

---

## Repository layout

```
index.html, about.html, …      Public pages
portal*.html, vault*.js/css    Member portal and training curriculum
api/                           Vercel serverless functions
brand-assets/                  Logos and brand guidelines
teampictures/, collegephotos/  Site imagery
leadershipphotos/,
  Leadershipsortraits/         Officer portraits
Mockupimages/                  Design mockups the build was matched against
debate_resource_*/             Reference PDFs served through the portal
serve.mjs                      Local dev server (static + API routes)
vercel.json                    Routing and security headers
```

---

## Status

Actively maintained. The site is deployed and in use by the team; content and pages are
updated as each season progresses.
