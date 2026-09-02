---
name: San Marin Speech & Debate
description: A printed-paper academic world for a high school debate team, public pages and member portal in one system.
colors:
  paper: "#f4f3ef"
  paper-rail: "#eeece6"
  sheet: "#fbfaf6"
  forest-ink: "#1b4332"
  forest-mid: "#2d6a4f"
  forest-pale: "#74b49b"
  ink-soft: "#4e6b56"
  ink-faint: "#7c8f81"
  bronze: "#b8905a"
  bronze-deep: "#7d5f31"
  madder: "#a03d2d"
  rule: "#d8d3c8"
  rule-strong: "#b9b2a2"
  dark-forest: "#0d1a10"
  dark-hairline: "#1e3020"
  dark-text: "#f0ede6"
  dark-text-soft: "#9cad9a"
  success: "#1e7a45"
  success-text: "#1e6b45"
  info: "#2f5f8f"
  white: "#ffffff"
  placeholder-ground: "#e9e6de"
  scrollbar-thumb: "#c9c3b4"
typography:
  cover:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "76px"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "54px"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  display-lg:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "-0.015em"
  display-md:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "44px"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  page-title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  display-sm:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  display-xs:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "31px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  section:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  stat:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.005em"
  panel-title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.005em"
  subtitle:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.005em"
  brand:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  lede-sm:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "-0.005em"
  lede:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  caption:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  button:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
  label:
    fontFamily: "JetBrains Mono, SF Mono, Menlo, monospace"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.2em"
  label-sm:
    fontFamily: "JetBrains Mono, SF Mono, Menlo, monospace"
    fontSize: "9.5px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.16em"
rounded:
  hairline: "2px"
  sheet: "3px"
  thumb: "4px"
  chrome-sm: "6px"
  chrome: "8px"
  soft: "12px"
  pill: "100px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "26px"
  xl: "46px"
  section: "68px"
components:
  button-primary:
    backgroundColor: "{colors.forest-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "13px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.forest-mid}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.pill}"
    padding: "13px 28px"
  button-secondary-hover:
    backgroundColor: "rgba(27,67,50,0.05)"
    textColor: "{colors.forest-ink}"
  input-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.square}"
    height: "46px"
    padding: "0 44px 0 14px"
  sheet-panel:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.sheet}"
    padding: "34px 32px"
  stamp:
    backgroundColor: "transparent"
    textColor: "{colors.bronze-deep}"
    rounded: "{rounded.square}"
    padding: "3px 9px"
    typography: "{typography.label}"
  rail-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.sheet}"
    padding: "9px 10px"
  rail-item-active:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.forest-ink}"
---

# Design System: San Marin Speech & Debate

## Overview

**Creative North Star: "The Course Catalog"**

This is a printed institution rendered for screen. The site behaves like a school's own publications: the public pages are the prospectus, the member portal is the course catalog, and every surface is set on the same cream stock in the same forest ink. Nothing floats. Structure comes from ruled divisions and typographic weight, the way it does on paper, and the interface admits it is made of type and rules rather than pretending to be glass or light.

The register is academic but not antique. Cormorant Garamond carries display at large sizes with tight tracking, Plus Jakarta Sans handles reading at generous line height, and JetBrains Mono does the registrar's work: dates, counts, section tags, course codes. The pairing is what keeps the world from reading either as a corporate dashboard or as a period pastiche. Color is restrained by strategy: neutrals plus forest ink, with bronze reserved for the marks that record status.

The portal deliberately rejects the SaaS dashboard vocabulary it replaced. There is no glassmorphism, no backdrop blur, no radial glow, no grid of same-size icon-heading-text cards. Listings are ruled rows; completion is stamped rather than hidden; the reading column is bounded like a page.

**Key Characteristics:**
- Cream paper ground with forest ink; bronze appears only as a mark of status.
- One 1px hairline system carries every division, on public pages and in the portal alike.
- Serif display, sans body, mono registrar labels: three faces, three jobs, never interchanged.
- Square sheets (2-3px) with pill buttons reserved for primary actions.
- Flat at rest; depth is a hairline or a change of ground, not a shadow.

## Colors

A cream-and-forest neutral field with two accents: bronze for status and madder for destructive or error states.

### Primary
- **Forest Ink** (`#1b4332`): every heading, every body-adjacent element, filled primary buttons, and the dark chrome of the public footer. It is the text color first and a fill color second. It also grounds the homepage's Join band, the one place it fills a full-width section; there it takes Forest Mid hairlines, and the primary button inverts to a paper fill with forest text because a forest fill would disappear into it.
- **Forest Mid** (`#2d6a4f`): the interactive forest. Link underlines, focus rings, progress fills, filled-button hover, and success states in the vault.

### Secondary
- **Bronze** (`#b8905a`) and **Bronze Deep** (`#7d5f31`): the status metal. Bronze draws the stamp border and large marks; Bronze Deep is its text-contrast counterpart and carries every mono registrar label. On light ground, small bronze text must always be Bronze Deep.

### Tertiary
- **Madder** (`#a03d2d`): errors, destructive affordances (sign out on hover), and the single red margin line ruled down the packing-list sheet. Never decorative.

### Neutral
- **Paper** (`#f4f3ef`): the ground of the entire site and portal.
- **Paper Rail** (`#eeece6`): one shade deeper, for the portal's index rail, the mobile tab bar, and alternating bands.
- **Sheet** (`#fbfaf6`): the panel ground that sits on paper: login panel, listing plates, vault unit cards, checklists.
- **Rule** (`#d8d3c8`) and **Rule Strong** (`#b9b2a2`): the hairline system. Rule divides; Rule Strong bounds a panel or marks a stronger edge.
- **Ink Soft** (`#4e6b56`) and **Ink Faint** (`#7c8f81`): secondary and tertiary text. Ink Faint is for large or inactive text only; body copy never uses it.
- **Dark Forest** (`#0d1a10`) with **Dark Hairline** (`#1e3020`) and **Dark Text** (`#f0ede6`): the public site's footer and dark bands, the inverted region of the system. Two dark bands never run back to back; the homepage's Join band sits on Forest Ink between Sponsors and the footer so the end of the page does not read as one slab.

### Named Rules
**The Bronze Reserve Rule.** Bronze marks status and metadata only: stamps, registrar labels, section tags, completion. It never fills a surface, never becomes a button, and never carries body copy.

**The Two-Ink Rule.** Secondary text is a lighter forest (`#4e6b56`), never gray. Tinting from the foreground hue is what keeps the cream ground warm.

## Typography

**Display Font:** Cormorant Garamond (with Georgia, serif)
**Body Font:** Plus Jakarta Sans (with system-ui, sans-serif)
**Label/Mono Font:** JetBrains Mono (with SF Mono, Menlo, monospace)

**Character:** A high-contrast bookish serif over a warm geometric sans, with a mono that reads as institutional record-keeping rather than as code. The serif supplies the prestige, the sans supplies the readability, and the mono supplies the paperwork.

### Hierarchy
- **Display** (600, 76px, 0.98, -0.015em): the login page cover title only. One per page, at cover scale.
- **Headline** (600, 54px desktop / 36px at 768px / 31px at 480px, 1.02): portal page title blocks, set directly under a 3px rule.
- **Title** (600, 27-30px, 1.1, -0.01em): section heads and the login page's contents heading.
- **Subtitle** (600, 20-24px, 1.15): listing item titles, announcement titles, card names, by-laws and resource titles.
- **Body** (400, 13.5-15.5px, 1.6-1.7): all reading copy, capped at 58-66ch.
- **Label** (600, 9.5-10.5px, 0.16-0.24em, uppercase): mono registrar furniture. Dates, counts, course codes, section tags, button text at 11px in the sans.

### Named Rules
**The Registrar Label Rule.** Mono uppercase labels are furniture: dates, counts, codes, section tags, statuses. They sit beside a heading on a shared baseline or below it inside rules, never stacked above it as a kicker, and never carry a sentence.

**The Measure Rule.** Reading copy is bounded by `ch`, not by pixels: 58ch for standfirsts, 66ch for body columns.

**The Principal Step Rule.** New work uses a step recorded in the frontmatter ramp and adds no new intermediate sizes. The serif runs 76 / 54 / 48 / 44 / 40 / 36 / 34 / 31 / 30 / 28 / 26 / 24 / 22 / 20 / 18 / 17, most of which are responsive step-downs of the tier above rather than independent roles; the sans runs 15.5 / 14 / 13 / 12.5 / 11, and the mono runs 10 / 9.5. The older public pages still carry a few inherited off-ramp sizes (11.5, 12, 13.5, 15, 16px); snap them to a recorded step when those pages are next touched.

## Layout

The portal is a two-column application shell: a 228px index rail (sticky, full height, collapsible to zero with a fixed reopen tab) beside a content column padded `46px 56px 96px` and capped at 1060px. The rail carries brand, page search, section links, and sign out; it disappears entirely below 768px and is replaced by a three-item fixed bottom tab bar.

Public pages use a centered container (1200-1280px) with a sticky pill navigation bar. Both share the same page rhythm: a heavy 3px top rule, the serif title, a mono dateline ruled top and bottom, then the standfirst.

Spacing is sectional rather than uniform. Sections separate by 68px; a section head is a title row plus a 14px gap down to its 1px rule; ruled listing rows breathe at 20-26px vertically; sheets pad at 26-34px. More space always sits above a heading than below it.

Breakpoints in use: 1100px (award grid reflow), 1024px (padding and title step-down), 860px, 768px (rail to tab bar, single column), 720px, 640px, 560px, 540px, 480px. No surface may scroll horizontally at any of them.

## Elevation & Depth

The system is flat by conviction. Depth is expressed by ground change (paper to rail to sheet) and by hairlines, not by shadow. Three shadows exist in the whole system, all forest-tinted, all with real offset and blur, and each has a specific job.

### Shadow Vocabulary
- **Panel lift** (`box-shadow: 0 10px 30px rgba(27,67,50,0.08)`): the login panel only, the one object that should feel handed to you.
- **Popover** (`box-shadow: 0 10px 28px rgba(27,67,50,0.16)`): the portal search results list and other transient overlays.
- **Hover lift** (`box-shadow: 0 6px 16px rgba(27,67,50,0.2)` up to `0 10px 24px rgba(27,67,50,0.26)`): filled primary buttons only, paired with the public site's `translateY(-2px)`.

### Named Rules
**The Flat Sheet Rule.** Sheets and listing rows do not lift. Their hover state changes ink: border color, background tint, or underline. Only buttons and true overlays cast a shadow.

**The Ink-on-Paper Motion Rule.** Motion is settling ink, not floating glass. Transitions are 0.18-0.22s ease on color, border, and background; each view gets at most one authored entrance (a 0.4s exponential ease-out settle from an already-visible default). No glows, no infinite loops, no scattered hover animations, and every animation is disabled under `prefers-reduced-motion`.

## Shapes

Two corner registers, deliberately split by role. Portal surfaces are square catalog stock: 2px on chips, stamps, and inputs; 3px on sheets, panels, and rail items. Public marketing pages keep a softer 12px card and the pill navigation bar they were built with. Across both, the pill (`100px`) is reserved for buttons that take an action.

Borders do the structural work: 1px `#d8d3c8` for divisions, 1px `#b9b2a2` for a panel's own edge, 1.5px for a button's stroke and for the stamp, and a single 3px rule at the top of a page title block. Colored left borders on cards, callouts, and alerts are not part of this system; the one exception is the red margin rule ruled down the packing-list sheet, which is a page furniture element rather than a card decoration.

## Components

### Buttons
- **Shape:** fully rounded pill (`100px`), the only rounded shape in the portal.
- **Primary:** forest ink fill (`#1b4332`) with paper text, 1.5px matching border, `13px 28px` padding, 11px/700 uppercase at 0.08-0.1em tracking in Plus Jakarta Sans.
- **Hover / Focus:** background steps to Forest Mid (`#2d6a4f`) with the hover-lift shadow; active drops the shadow. Focus-visible draws a 2px Forest Mid ring at 2px offset.
- **Secondary:** transparent with a 1.5px `rgba(27,67,50,0.32)` stroke and forest text; hover fills to `rgba(27,67,50,0.05)` and darkens the stroke to full forest.
- **Text action:** in dense listings, actions are mono uppercase underlined links (View, Download) at 3px underline offset rather than buttons.

### Listing Rows
The portal's primary structure, replacing cards. A row is a flex or grid line with 20-26px vertical padding and a single `1px #d8d3c8` bottom border; the last row in a group drops its border. Hover tints the ground `rgba(27,67,50,0.025)`. Announcements use a 128px mono date column beside the text; resources put title and description left, actions right; the vault's reserve shelf runs two ruled columns with mono index numbers.

### Section Heads
A title row with the serif title on the left and the mono registrar tag on the right, sharing a baseline, followed by a subtitle and closed by a `1px` rule at 14px. Sections whose content is a sheet rather than a ruled list add 24px below the rule.

### Cards / Plates
- **Corner Style:** 3px.
- **Background:** Sheet (`#fbfaf6`) on the paper ground.
- **Border:** `1px #d8d3c8`, strengthening to `#b9b2a2` on hover.
- **Shadow Strategy:** none at rest, none on hover (see The Flat Sheet Rule).
- **Internal Padding:** 26-34px for panels, 16-18px for award plate bodies.

### Inputs / Fields
- **Style:** white or sheet ground, `1px #b9b2a2` stroke, 2px radius, 46px tall for the access code field, 8-10px padding for the rail search.
- **Hover:** stroke darkens to Ink Soft.
- **Focus:** stroke becomes Forest Mid with a 3px `rgba(45,106,79,0.12)` halo.
- **Error:** stroke becomes Madder with a 3px `rgba(160,61,45,0.12)` halo, reverting after 1.8s.
- **Checkbox:** 18px square, 2px radius, `1.5px #b9b2a2` stroke, filling Forest Mid with a white tick that scales in over 0.25s; the checked label strikes through in bronze.

### Navigation
- **Index rail:** 228px on Paper Rail with a `1px` right border. Items are 13px/600 Ink Soft at 3px radius; hover tints `rgba(27,67,50,0.05)`; the active item takes the Sheet ground with a rule border, full forest ink, 700 weight, and a bronze icon.
- **Mobile tab bar:** fixed 56px on Paper Rail, three items, the active one marked by a 2px bronze bar across the top of its cell.
- **Public pill nav:** sticky bar with a centered pill group; the active link inverts to forest fill with paper text.

### The Stamp
The system's signature component. A mono uppercase label (10px, 0.16em) in Bronze Deep inside a 1.5px bronze border at 2px radius, rotated -2deg, scaling in from 1.25 over 0.3s exponential ease-out. It records a completed state in place rather than removing or graying the thing it marks: the packing list stamps "All Packed" at 14 of 14, the vault stamps a completed unit's course-code block, and the lesson completion overlay leads with it.

### Contents Plate
The login page's listing device. A sheet plate at 3px with a `1px #d8d3c8` edge and 26px padding, holding a serif title with its mono registrar count on the same baseline, a body description, then a hairline and the plate's own contents. The three plates sit in a two-column grid at 14px where the lead entry spans the full measure, so the block reads as one large entry with two supporting ones rather than as three equal cards. The lead plate lists its twelve units in two columns with mono course numbers; the supporting plates run their sections on one wrapped line divided by middots, the divider hanging off the end of the item it follows so it can never start a line. The grid drops to one column at 640px and the unit index to one column with it.

## Do's and Don'ts

### Do:
- **Do** divide with a single `1px #d8d3c8` hairline and let ruled rows carry structure instead of cards.
- **Do** keep three faces in three jobs: Cormorant for display, Plus Jakarta Sans for reading, JetBrains Mono for registrar labels.
- **Do** reserve the pill (`100px`) for buttons that take an action, and keep every other surface square (2-3px).
- **Do** stamp completed states with the bronze stamp so finished things stay visible.
- **Do** tint secondary text from the forest hue (`#4e6b56`), and use Bronze Deep (`#7d5f31`) for any bronze text below 14px.
- **Do** theme browser surfaces from the palette: selection is `rgba(184,144,90,0.35)`, focus rings are Forest Mid, scrollbars are `#c9c3b4` on transparent, and tabular figures are used for dates, counts, and phone numbers.
- **Do** honor `prefers-reduced-motion` on anything that animates.
- **Do** write visible copy without em or en dashes; separate with a middot in titles and rewrite elsewhere.

### Don't:
- **Don't** reintroduce glassmorphism: no `backdrop-filter`, no translucent card ground, no radial glow behind a surface.
- **Don't** float a sheet or a listing row on hover; change ink, not elevation.
- **Don't** build a page from same-size cards of icon plus heading plus text.
- **Don't** stack a mono label above a heading as a kicker; it belongs beside the heading or below it inside rules.
- **Don't** use a colored left border above 1px on cards, callouts, or alerts.
- **Don't** substitute emoji or unicode glyphs for icons; icons are authored SVG at 1.8-2 stroke, `aria-hidden`, inheriting `currentColor`.
- **Don't** let bronze fill a surface or carry body copy.
- **Don't** copy one page's decorative mark vocabulary onto another; the public pages each own their marks (swoop underline and ink wash on the homepage, editor's marks on about, a painted stroke on leadership), and the portal owns the stamp.
