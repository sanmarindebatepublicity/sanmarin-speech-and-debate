# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

Specific to my Website Rules 
Act as an expert frontend developer and professional UI/UX designer. I am the Publicity Captain for our school's debate team, and I am building our official website using the Claude Code extension in VS Code. 

Please keep the following constraints and goals in mind for all design choices and code generation:

1. **Design Aesthetic ("Futuristic & Stunning", Not Corporate Tech):** 
   The design should look modern, sleek, and high-end, but it must strictly fit a prestigious school debate team. Do not make it look like an AI developer tool, a SaaS platform, or a crypto startup. Focus on clean typography, structured layouts, and an academic yet cutting-edge feel.

2. **The "Next Successor" Architecture (No-Code/Low-Code Updates):**
   I am currently using a Claude subscription to build this, but future publicity captains might not have a Claude Code subscription or advanced programming knowledge. You must architect this website so it is incredibly easy for a non-technical person to maintain.

3. **Implementation Requirements:**
   - **Centralized Data:** Keep all content that changes frequently (e.g., roster, tournament schedules, debate topics, announcements, leadership names) in a single, highly commented configuration file (like `config.js` or a simple `data.json`).
   - **Clear Separation:** Do not hardcode text into complex UI component files. The UI should dynamically fetch and map data from the central data file.
   - **Documentation:** Include clear, jargon-free code comments directly inside the data file explaining exactly how a future captain can update text or images. 
IMPORTANT: PLEASE TRY TO USE JSON FILES FOR TEXT, IMAGES, AND OTHER INFORMATION THAT FUTURE PUBLICITY CAPTAINS WILL NEED TO UPDATE IN THE WEBSITE
---

# Project Conventions (learned on this site — follow these)

## Writing
- **No em dashes or en dashes anywhere in visible copy.** Use commas, semicolons,
  periods, parentheses, or rewrite. Hyphens are fine inside compound words
  (`well-being`, `2025-26`). This applies to `<title>` tags too, which use `·`.
- Avoid AI-tell patterns: contrastive negation ("that's not X, it's Y"), repeated
  comparative parallelism, marketing hype, filler, forced enthusiasm.
- Plain words, short sentences, active voice. Casual grammar is fine; starting a
  sentence with "and" or "but" is fine.
- Do not use colons unless preserving quoted material or required formatting.

## Content accuracy
- The team history came from coach Karen Kenyon and is the source of truth. Do not
  invent results, dates, advisors, or award counts.
- Some claims are repeated on purpose so they stay visible to skimmers. Where a
  claim repeats, give each instance **a different angle** rather than the same
  sentence: homepage tagline = longevity, ticker = size, about principle card =
  scarcity, timeline = past-tense history.
- The stats ticker on `index.html` exists **twice** (marquee loop). Both copies must
  always match or the seam visibly stutters.

## Layout traps hit before
- `.person-grid` / any CSS grid: cards stretch to the tallest sibling by default. Use
  `align-self: start` when a card can expand, or absolutely-positioned children detach
  from their content.
- `flex-grow` alone does **not** produce proportional widths; content size is folded in.
  Add `flex-basis: 0` when a bar must be to scale.
- Do not stack an offset ghost outline (`::after`) with a glow on the same button. On
  transparent buttons the ghost shows through and reads as a misprint. Buttons lift into
  a shadow instead; the ghost-outline treatment is only for large cards.
- Before placing a decorative element "in the whitespace", measure **rendered line
  boxes** (`Range.getClientRects()`), not element boxes. Block elements span the full
  column even when their text is short.

## Graphics
- Each page has its own mark vocabulary; do not copy a graphic from another page.
  `index.html` uses a swoop underline, ink wash, and highlighter. `about.html` uses
  editor's marks (pen circle, proofreader's caret, margin bracket) plus a scissors cut.
  `leadership.html` uses a single painted brush stroke.
- Decorative SVG should be `aria-hidden="true"` and inherit `currentColor` where possible.
- Always honor `prefers-reduced-motion` on anything that animates.

## Verification
- Verify in the browser before claiming something works. Measure geometry rather than
  eyeballing screenshots; several bugs here looked fine in a screenshot and were wrong.
- Check both desktop and mobile widths, and confirm no horizontal scroll.
- Clean up screenshot artifacts from the repo when finished.
