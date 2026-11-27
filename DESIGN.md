---
name: NOAA-It-All
description: National Weather Service point forecasts for saved places, kept like a yellow all-weather field book.
colors:
  cover: "#E9B300"
  cover-ink: "#22262A"
  label: "#FFFFFF"
  page: "#F4F7F1"
  page-2: "#E8EEE6"
  ink: "#22262A"
  ink-2: "#3E5246"
  rule: "#2F6B4F"
  rule-soft: "rgba(47,107,79,.28)"
  now: "#C2410C"
  hi: "#B93E0A"
  lo: "#1D5AA6"
  warn: "#A61B1B"
  scrim: "rgba(20,24,26,.48)"
  cover-night: "#D19E0B"
  cover-ink-night: "#121517"
  label-night: "#1B2023"
  page-night: "#121517"
  page-2-night: "#1B2023"
  ink-night: "#E4EAE3"
  ink-2-night: "#AFC2B5"
  rule-night: "#6FA88A"
  rule-soft-night: "rgba(111,168,138,.28)"
  now-night: "#F07A3A"
  hi-night: "#FF8F52"
  lo-night: "#7DB3FF"
  warn-night: "#FF8A80"
  scrim-night: "rgba(0,0,0,.6)"
  aval-1-low: "#50B848"
  aval-2-moderate: "#FFF200"
  aval-3-considerable: "#F7941E"
  aval-4-high: "#ED1C24"
  aval-5-extreme: "#231F20"
  radar-05dbz: "#04e9e7"
  radar-10dbz: "#019ff4"
  radar-20dbz: "#02fd02"
  radar-25dbz: "#01c501"
  radar-35dbz: "#fdf802"
  radar-45dbz: "#fd9500"
  radar-50dbz: "#fd0000"
  radar-60dbz: "#bc0000"
  radar-65dbz: "#f800fd"
typography:
  stat:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  stat-small:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  period-temp:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  lead:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.35
  figure:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 800
    fontFeature: "tnum"
  title:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.2
  title-sheet:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 800
  title-list:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 600
  body:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "tnum"
  body-long:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  body-compact:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "tnum"
  body-small:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.12em"
  period-name:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.1em"
  chart-axis:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "10px"
    fontWeight: 500
    fontFeature: "tnum"
rounded:
  none: "0px"
  dot: "50%"
spacing:
  hair: "4px"
  xs: "8px"
  sm: "12px"
  gutter: "16px"
  md: "20px"
  lg: "24px"
  section: "30px"
components:
  cover-band:
    backgroundColor: "{colors.cover}"
    textColor: "{colors.cover-ink}"
    rounded: "{rounded.none}"
    padding: "20px 16px 14px"
  label-box:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
    height: "60px"
  section-head:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    padding: "0 0 12px"
  tab-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "52px"
  tab-button-active:
    backgroundColor: "{colors.cover}"
    textColor: "{colors.cover-ink}"
  cover-nav-button:
    backgroundColor: "transparent"
    textColor: "{colors.cover-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "62px"
  cover-nav-button-hover:
    backgroundColor: "{colors.cover-ink}"
    textColor: "{colors.cover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.page}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-yellow:
    backgroundColor: "{colors.cover}"
    textColor: "{colors.cover-ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  map-tool:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 10px"
    height: "44px"
  map-tool-pressed:
    backgroundColor: "{colors.cover}"
    textColor: "{colors.cover-ink}"
  sheet-header:
    backgroundColor: "{colors.cover}"
    textColor: "{colors.cover-ink}"
    typography: "{typography.title-sheet}"
    padding: "14px 16px 12px"
  sheet-body:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    width: "min(640px, 100%)"
  period-card:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 10px 16px"
    width: "128px"
  period-card-night:
    backgroundColor: "{colors.page-2}"
  period-card-hover:
    backgroundColor: "color-mix(in srgb, #E9B300 22%, #F4F7F1)"
  period-high:
    textColor: "{colors.hi}"
    typography: "{typography.period-temp}"
  period-low:
    textColor: "{colors.lo}"
    typography: "{typography.period-temp}"
  stat-value:
    textColor: "{colors.ink}"
    typography: "{typography.stat}"
  step-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    width: "36px"
    height: "32px"
  step-button-hover:
    backgroundColor: "{colors.cover}"
    textColor: "{colors.cover-ink}"
  text-field:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "48px"
  stake-flag:
    backgroundColor: "{colors.cover}"
    textColor: "{colors.cover-ink}"
    padding: "6px 9px"
  radar-panel:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  toast:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.page}"
    typography: "{typography.body-compact}"
    padding: "10px 14px"
  glance-lead:
    textColor: "{colors.ink}"
    typography: "{typography.lead}"
    width: "40ch"
  totals-figure:
    textColor: "{colors.ink}"
    typography: "{typography.figure}"
    padding: "10px 8px"
  timeline-band:
    backgroundColor: "{colors.page}"
    rounded: "{rounded.none}"
    height: "30px"
  stat-value-small:
    textColor: "{colors.ink}"
    typography: "{typography.stat-small}"
  aval-badge-1:
    backgroundColor: "{colors.aval-1-low}"
    textColor: "#111111"
    rounded: "{rounded.none}"
    padding: "6px"
    width: "96px"
    height: "64px"
  aval-badge-2:
    backgroundColor: "{colors.aval-2-moderate}"
    textColor: "#111111"
  aval-badge-3:
    backgroundColor: "{colors.aval-3-considerable}"
    textColor: "#111111"
  aval-badge-4:
    backgroundColor: "{colors.aval-4-high}"
    textColor: "#111111"
  aval-badge-5:
    backgroundColor: "{colors.aval-5-extreme}"
    textColor: "#FFFFFF"
  aval-badge-unrated:
    backgroundColor: "{colors.page-2}"
    textColor: "{colors.ink}"
  hours-sheet:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    width: "min(980px, 100%)"
    height: "94dvh"
  hour-table:
    textColor: "{colors.ink}"
    typography: "{typography.body-compact}"
    width: "520px"
---

# Design System: NOAA-It-All

## Overview

**Creative North Star: "The All-Weather Field Book"**

Each saved place is one page in a yellow survey field book kept in a jacket pocket. The forecast is entered in ruled columns and graphed in pencil. A yellow cover band carries a white label box with the place written on it; below it, a cool green-white page is ruled in survey green at one device pixel, and everything is written in graphite. One rust mark, and only one meaning, is reserved for "now". The only other color on the page is a warm/cool pair that says whether a temperature is a High or a Low.

The system is dense and printed rather than layered. Depth comes from rules and boxed outlines, not from shadows. Corners are square throughout. Numbers are set in tabular figures so columns hold still from card to card and day to day. Each section opens with a heavy sentence-case title ruled off in survey green, like a heading entered by hand at the top of a field-book page; the small tracked uppercase heads are kept for the labels over a column or a figure. At night the book is read under a headlamp: the page turns graphite, the band dims to a deeper yellow, and the rules lift to a pale green.

Places sit one swipe apart on a horizontal book with a hard snap. Each page opens with a one-sentence lead entry for the next three days and the sun and moon for today. Forecast periods run sideways as a ruled strip of columns, so the day and night ahead read across like a page of entries; tapping a column turns to an hour-by-hour sheet of stacked, ruled graphs. The only flourish is the pencil trace drawing itself once, left to right, when a page first loads.

**Key Characteristics:**
- Yellow cover band, green-white page, survey-green hairline rules, graphite ink.
- One rust mark, used only for "now"; one warm/cool pair, used only for High and Low.
- Square corners and 1px outlines everywhere; the page dots, the survey-stake marker, the drawn sun and moon, and chart dots are the only round forms.
- Tabular numerals on every figure; 22px/800 section titles over a survey-green rule; small tracked uppercase heads over columns and figures.
- Flat: no shadows on page or sheets. A scrim separates sheets; a page-2 tint marks night.
- Short exponential ease-out; native scroll-snap for page turns.

## Colors

Three printed inks on a pale page (cover yellow, survey green, graphite), one rust mark for "now", a fenced warm/cool pair for High and Low, and two borrowed standard scales kept inside the components that own them. The night set is a separate palette, not an inversion.

### Primary
- **Survey Yellow** (cover): the cover band, every sheet header, the pressed map tool, the tab-bar press state, the step-button hover, the period-card hover (a 22% tint on the page), the stake flag, the sun fill in weather icons, the lit part of the moon-phase icon, text selection, and the PWA theme color. It marks the book itself and anything that acts as a cover. Night: **Headlamp Yellow** (cover-night).
- **Cover Graphite** (cover-ink): text, outlines and the label-box double rule on yellow. Night: cover-ink-night.

### Secondary
- **Survey Green** (rule): the 1px rule beneath every section title, rules between period cards, the precip strip and precip-chance bars, snow hatching (trace, meteogram, timeline, snowpack bars), the dashed dew-point line, the cloud-cover outline, chart axis figures, stat, column and table-head labels, list numbers, link underlines, the strip scrollbar, the map-scrubber track ticks and day labels. Night: rule-night.
- **Faint Survey Green** (rule-soft): the chart's degree grid, the cloud-cover fill, fog lines in the timeline, the status-line, alerts-line and sun-row overrules, the rule closing the stats grid, dividers between detailed-forecast, totals, hourly-table and station rows, skeleton bars. Night: rule-soft-night.

### Tertiary
- **Rust Now Mark** (now): the vertical "now" line on the 24-hour trace and the hollow dot where the trace starts. Nothing else. Night: **Ember** (now-night).
- **Warm High** (hi): the "High N°" figure in a day period card; a 30% tint on the page for Thunderstorms segments in the precipitation-type timeline. Night: hi-night.
- **Cool Low** (lo): the "Low N°" figure in a night period card; a 35% tint for Rain and a 30% tint under the snow hatch for Rain and snow in the precipitation-type timeline. Night: lo-night.

### Neutral
- **Green-White Page** (page): the page ground, sheet bodies, map tools, the radar panel, the moon fill in weather icons, and the hollow fill of the now dot. Night: page-night.
- **Pressed Page** (page-2): night period cards, alert boxes, the map backdrop while tiles load. Night: page-2-night.
- **Label White** (label): the label box, text fields, and the cloud fill in weather icons; the one surface whiter than the page. Night: label-night.
- **Graphite** (ink): all text, the pencil trace, weather-icon line work, 1px outlines on buttons, the period strip, sheets, map frame and tab bar. Night: ink-night.
- **Soft Graphite** (ink-2): secondary text (section notes, captions, short forecasts, precip %, units, issue times). Night: ink-2-night.
- **Alert Red** (warn): only the triangle glyph on Severe and Extreme NWS alerts. The triangle shape carries the severity; the color repeats it. Night: warn-night.
- **Scrim** (scrim): the backdrop behind open sheets. Night: scrim-night.

### Borrowed Scales
Two standard scales are copied exactly from their owners and never re-tinted for night. They are the data's own key, not part of the palette.
- **North American Avalanche Danger Scale** (aval-1-low through aval-5-extreme): fills the avalanche badge only. Levels 1 to 3 carry near-black text (#111111), levels 4 and 5 white; Extreme adds a 2px aval-4-high border so it separates from a dark page. The level number and its name always appear in the badge; an unrated day uses Pressed Page with a dash and "No rating".
- **NWS NEXRAD reflectivity** (radar-05dbz through radar-65dbz): radar tiles and the 120px legend gradient in the radar panel, in that order, Light to Heavy.

### Named Rules
**The Three Inks Rule.** Every mark on a page is cover yellow, survey green, or graphite (and their tints). A new element picks one of the three; it never introduces a fourth hue. The fenced exceptions below are the only ones.

**The One Rust Mark Rule.** Rust means "now" and nothing else: the now line and the now dot on the trace. Never use rust for emphasis, links, alerts, selection, weather, or brand.

**The High and Low Exception.** Warm High and Cool Low are the one user-approved semantic pair. They color the High or Low figure in a period card, and the figure always carries the word "High" or "Low", so the word, not the hue, holds the meaning. Their only other use is as page tints in the precipitation-type timeline: cool for liquid (Rain, Rain and snow), warm for Thunderstorms, each segment labeled with its word and its time span. Warm High sits close to rust in hue, so it never appears on the 24-hour trace or anywhere "now" is drawn; and neither color spreads to observed temperatures, chart lines, other backgrounds, or icons.

**The Borrowed Color Exception.** Three more non-ink color sets are allowed and stay fenced: Alert Red on the severe-alert glyph, always paired with the triangle shape; the NWS radar reflectivity scale, only in radar tiles and the radar legend; and the avalanche danger scale, only in the avalanche badge, always with the level number and name. Each is the data's own published key; none is reused elsewhere, and no new element borrows from them.

## Typography

**Display Font:** Public Sans (self-hosted variable woff2, weights 400 to 800; ui-sans-serif, system-ui fallback)
**Body Font:** Public Sans
**Label/Mono Font:** Public Sans, uppercase and tracked

**Character:** One sturdy civic grotesque set with tabular numerals throughout (on body). The voice comes from weight contrast: 800 for the titles and figures you read at a glance, 600 to 700 for labels and values, 400 for NWS prose.

### Hierarchy
- **Stat** (800, 36px, line-height 1, -0.02em): observed values in Current conditions. The unit follows at 15px/600 in soft graphite.
- **Small stat** (800, 24px, 1, -0.02em): figures in the smaller stat grids (normals and records, snowpack), a nearby station's current temperature, and the avalanche level number. Units drop to 13px.
- **Headline** (800, 22px, 1.1 to 1.15, -0.01em): the place name in the label box (balanced wrap) and every section title.
- **Period temperature** (800, 24px, 1, -0.02em): "High N°" or "Low N°" in a period card, in Warm High or Cool Low.
- **Lead** (600, 20px, 1.35, capped at 40ch, pretty wrap): the one at-a-glance sentence at the top of each page. One per page.
- **Figure** (800, 20px): precipitation totals in the 24/48/72-hour table.
- **Title** (700, 19px, 1.2): empty and error-state heads. Sheet headers use 800 at 17px; sun-row values and the map pick name 17px/700.
- **List title** (600, 16px): place and search-result names, discussion section titles. Text inputs are also 16px so phones don't zoom on focus.
- **Body** (400, 15px, 1.4): default text. Detailed-forecast period names and totals-table row heads are 15px/800 and 15px/700; NWS detailed and discussion text and avalanche travel advice are 15px at 1.5 to 1.55, capped at 60 to 68ch.
- **Compact** (400, 14px, 1.4): dense reading text: the hourly table, scrub readouts, the alerts line and alert bodies, external links (600), the Save chip, notes and toasts.
- **Small** (400, 12 to 13px): section notes, captions, short forecasts, precip %, the mountain status line (13px/600 in graphite), block heads inside Mountain conditions (13px/700); secondary lines under a value (daylight change, moon % lit, station elevation, "rain + melted snow"), status line and footers at 12px.
- **Period name** (700, 12px, 0.1em, uppercase, ink, centered, balanced wrap): the head of each period card.
- **Label** (600, 11px, 0.12em, uppercase, rule green): stat labels, the "Add a place" head, alert subheads; tab and cover-nav button labels (in ink). The running head on the cover band is the same size at 0.14em in cover ink.
- **Chart** (10px; axis 500 in rule green, day marks 800 in ink at 0.08em uppercase, meteogram panel labels 700 in ink at 0.04em, legend keys in soft graphite; peak notes and timeline segment words 11px/700; snowpack day letters 10px).

### Named Rules
**The Fixed Column Rule.** Every figure is tabular. Temperatures, percentages, snow amounts, times and coordinates must line up down a column and across a strip; never switch a numeric context to proportional figures.

**The Printed Head Rule.** Uppercase tracking is for heads printed over a column or a figure (period names, stat labels), the running head and nav-button labels. A short NWS name or sky word may be uppercased only in that head role. Section titles, place names, forecasts and NWS sentences are never uppercased.

**The Titled Section Rule.** Every page section opens the same way: a 22px/800 sentence-case title on the left, an optional 13px soft-graphite note, a link, a 13px/600 graphite status line, or a two-button area toggle on the right, baseline-aligned, and a 1px survey-green rule beneath with 12px above it. Context that belongs to the whole section (the snow level, the source office) goes in that note, not in a separate line. The at-a-glance lead is the one untitled block: it is the page's first entry, not a section.

## Layout

A horizontal book of full-width pages, one per saved place, with mandatory scroll-snap and `scroll-snap-stop: always`, so a swipe turns exactly one page. Each page scrolls vertically on its own. The body is a two-row grid: the book, then the bottom tab bar.

Content sits in a 1100px column with a 16px gutter that grows to the safe-area insets. Sections stack in one column at every width: cover band, status line, alerts line, at-a-glance lead and sun row, Forecast periods, Precipitation ahead, Current conditions (with today's normals), Next 24 hours, Mountain conditions, Detailed forecast, Map and radar, Forecast maps, Forecast discussion, footer. Nothing on the page is collapsed: every section shows all its data, so scrolling is the only gesture needed to read it. Each titled section starts 30px below the one before; captions sit 10px under their content.

- **Period strip:** a horizontally scrolling grid of 128 to 140px columns, each card spanning six subgrid rows (name, icon, short forecast, temperature, precip, snow) so every row lines up across the strip whatever the text length. Proximity snap to card starts; a thin rule-green scrollbar. On fine pointers, step buttons scroll by 80% of the strip.
- **Stats:** an auto-fill grid of 140px-minimum cells with 16px row and 20px column gaps (two per row on a phone, up to six on desktop). The small variant uses 110px-minimum cells and no closing rule.
- **Sun row:** an auto-fit grid of 130px-minimum cells (10px by 18px gaps) under a faint rule, 14px below the lead.
- **Precipitation ahead:** a full-width right-aligned table (row heads left), then a 30px timeline band across 72 hours with weekday ticks at each midnight beneath it.
- **Detailed forecast:** one column on phones; at 720px and up, a 200px name column and a 24px gap.
- **Mountain conditions:** blocks padded 16px and divided by faint rules. At 720px and up, the snowpack stats sit beside a 260px bar chart, and each station row becomes three columns (name, 110px current, 180px sparkline over its range).
- **Hour-by-hour sheet:** a taller bottom sheet, up to 980px wide and 94dvh tall. The meteogram fills the width; the hourly table keeps a 520px minimum and scrolls sideways inside its own box below that.
- **Desktop:** at 900px and wider the map becomes a framed 1px box (up to 600px or 68dvh tall) instead of bleeding to the screen edges, and discussion sections cap at 860px. On desktops with hover, the tab bar is removed and Places, Map and Search move onto the cover band beside the label box; previous and next page buttons appear beside the page dots.

## Elevation & Depth

Flat. Depth is drawn with lines: 1px rules, 1px graphite outlines, the label box's double rule (a 1px border plus a 1px outline 2px outside it), and 2px graphite borders on the two flag-like markers (the stake flag and the avalanche badge). Sheets rise over a scrim with a graphite top and side edge, not a shadow. The page-2 tint marks a night period card or a boxed alert; that is the only tonal layering.

### Shadow Vocabulary
- **Stake halo** (`box-shadow: 0 0 0 2px var(--page)`): a 2px page-colored ring that lifts the survey stake off busy map tiles. It is a ring, not a cast shadow.

### Named Rules
**The Ruled Not Raised Rule.** Separate things with a 1px rule or a 1px outline. Never use a drop shadow on page content, cards, buttons or sheets.

**The Device-Pixel Rule.** Rules in the chart are drawn with crisp edges on half-pixel coordinates so every hairline renders at exactly one device pixel.

## Shapes

Square corners everywhere: label box, buttons, step buttons, the period strip and its cards, tab bar, sheets, inputs, map frame, radar panel, Leaflet zoom controls (forced to 0 radius). The only round forms are the 8px page dots (hollow, filled when current), the survey-stake ring on the map, the sun and moon drawn inside weather icons, the 18px moon-phase disc in the sun row, and small chart dots (the now dot, the scrub dot, gust dots). Chart precip columns and snowpack bars are square-ended. Snow is always 45-degree survey-green hatching, never a fill: 1.2px strokes on a 5px pitch at 55 to 60% opacity in the SVG charts, 1.5px strokes on a 5 to 6px pitch in CSS bands and bars; in icons it is dots under a cloud. Fog is horizontal faint rules on a 5px pitch.

## Components

### Cover Band and Label Box
The book's cover: Survey Yellow, 20px plus the top safe area above, 14px below, a 1px cover-ink rule underneath.
- **Label box:** a white field label, full width, at least 60px tall, with a double rule (1px border plus 1px outline offset 2px). It holds the place name (headline), a 13px soft-graphite subtitle (elevation and nearest town), and a chevron. The whole box is the button that opens Places. An unsaved preview drops the chevron and adds a cover-ink Save chip beside it.
- **Running head:** a row under a 1px cover-ink rule: "FIELD BOOK · NWS POINT FORECAST · {office} {grid}" in 11px/600 at 0.14em uppercase (the middle phrase hides under 480px), then the page dots, then "p. n of N".
- **Page dots:** 8px hollow rings in 24px tap targets; the current page is filled.

### Section Head
The opening of every page section (see The Titled Section Rule): a 22px/800 title, and on the right either a 13px soft-graphite note (with any key figure in graphite bold), the 12px underlined "Open full map" link, or a 14px/600 external link with an 11px arrow. In Forecast periods the right side also carries the step buttons on fine pointers. A 1px survey-green rule closes the head 12px below the title.

### Alerts Line
Always present directly under the status line. With no alerts it is a single 14px soft-graphite sentence, "No active watches, warnings or advisories for this point.", closed by a faint survey-green rule. With alerts it becomes a stack of graphite-outlined page-2 boxes: triangle glyph in Alert Red for Severe/Extreme, circle-i for others; event name 15px bold; an "Until" time in soft graphite; the NWS text always shown below, with 11px label-style subheads.

### At a Glance
The page's lead entry, 18px under the alerts line, with no section title.
- **Lead:** one 20px/600 sentence summarizing the next 72 hours, composed from the forecast by fixed rules, capped at 40ch.
- **Sun row:** under a faint rule, rule-green 11px labels (Sunrise, Sunset, Daylight, Moon) over 17px/700 graphite values, with a 12px soft-graphite line for the day-over-day daylight change and the moon's percent lit.
- **Moon-phase icon:** an 18px disc drawn from the phase: unlit part Pressed Page with a 1.2px graphite outline, lit part Survey Yellow with no stroke. It always sits beside the phase name.

### Forecast Period Strip
The signature summary of the forecast: every NWS period as a column in one ruled strip, framed by a 1px graphite outline, with 1px survey-green rules between cards. Each card is a button that opens the hour-by-hour sheet for that period, with the whole entry as its accessible name. Each card is centered and padded 14px 10px 16px:
- **Name:** the period name in the period-name style (12px/700, 0.1em, uppercase, ink).
- **Icon:** a drawn weather icon (see below).
- **Short forecast:** 13px soft graphite.
- **Temperature:** "High N°" in Warm High on day cards, "Low N°" in Cool Low on night cards (24px/800).
- **Precip:** "N% precip" in 13px soft graphite.
- **Snow:** "N.N″ snow" in 13px/700 graphite when 0.1″ or more; the row stays reserved when empty.
Night cards sit on Pressed Page. Hover tints a card Survey Yellow at 22% over the page (0.2s); focus is a 2px graphite outline inset 3px so it stays inside the strip. Below the strip, a 13px caption gives the point, elevation, office and issue time, and says a period can be tapped.
- **Step buttons:** 36 by 32px square outlined graphite buttons with a chevron, shown only on hover-capable fine pointers; hover fills Survey Yellow with a cover-ink outline.

### Weather Icons
Drawn line icons on a 48-unit grid, rendered at 52px: graphite strokes at 1.8 with round caps and joins. Clouds fill Label White, the sun fills Survey Yellow with eight short rays, the moon fills page. Rain is short slanted strokes, snow is heavy dots, fog is stacked rules. Icons always carry the short forecast as their accessible label.

### Precipitation Ahead
A titled section directly after the period strip.
- **Totals table:** columns Next 24 hr, 48 hr, 72 hr under rule-green 11px tracked heads; rows Snow, Water (with a 12px "rain + melted snow" line) and Ice (only when there is any), heads 15px/700. Amounts are 20px/800 tabular figures, right-aligned; zero shows as an em dash. Rows are divided by faint rules. With nothing measurable, a caption says so.
- **Type timeline:** a 30px band with a 1px graphite outline spanning 72 hours, cut into segments by type with faint rules between: Dry (plain page, 500 soft-graphite word), Snow (survey-green hatch), Rain (Cool Low tint), Rain and snow (hatch over the cool tint), Thunderstorms (Warm High tint), Fog (horizontal faint rules). Segments 9% wide or more carry their word in an 11px/700 boxed page-colored label; every segment carries its type and time span as a title. Weekday ticks (10px/800 uppercase, 1px graphite left rule) mark each midnight. A key under the band (.tl-key) repeats each type present as a 22×12 swatch beside its word, so segments too narrow for a label still read without color.

### Current Conditions
A definition grid of observed values from the nearest NWS station. Each cell is a rule-green 11px label (the sky word labels the temperature; then Wind, Gusts, Humidity, Wind chill or Heat index, Visibility) over a 36px/800 figure with its unit at 15px/600 in soft graphite. Cells are omitted when the station has no value. A faint rule closes the grid, then a 13px caption names the station, its elevation, distance and bearing, and the observation time, with "(over 3 hours old)" in graphite bold when stale.
- **Normals:** below the caption, a small stat grid (24px/800 figures, 13px units) of Normal high, Normal low, Record high and Record low for today, with the record year after the degree. A caption names the date, the climate station and NOAA climate records, and warns when that station sits well below this spot.

### 24-Hour Pencil Trace
A section head (with the snow-level note when the grid supplies one), a readout line (min 44px, under a soft rule) that shows the outlook and, while scrubbing, the hour, temperature, precip and wind. Below, an SVG chart:
- **Grid:** soft survey-green degree lines with 10px rule-green axis labels; midnight drawn as a full survey-green rule with the weekday in 800 uppercase.
- **Pencil:** a 2.2px graphite polyline with round joins. High and low are annotated in 11px/700 ("33° 1pm").
- **Now:** a 1.5px rust vertical at the first hour through the plot and precip strip, and a 4px hollow rust dot on the line.
- **Precip strip:** a 32px band between two survey-green rules, labeled 100%, 50, 0, with a dotted midline. Hourly chance is drawn as solid survey-green columns.
- **Snow:** hatched survey-green blocks behind the precip strip across the hours of each snowfall period, labeled above in 10px/700 ("0.4″ snow").
- **Scrub:** pointer or arrow keys move a dotted graphite cursor and a 3.5px graphite dot.

### Mountain Conditions
An open section. Its head is the section title with a 13px/600 graphite status line (avalanche danger and snow depth, joined by a middot). Nearby station readings load as the section nears the screen. Inside, blocks are headed in 13px/700 and divided by faint rules; each ends with a caption naming its source (avalanche.org and USDA SNOTEL are named as not NOAA).
- **Avalanche danger badge:** a 96 by 64px minimum square block with a 2px graphite border, filled with the level's standard color: the level number at 24px/800 over its name at 12px/700. Beside it, the center's travel advice at 15px/1.5, capped at 60ch.
- **Snowpack:** a small stat grid (Snow depth, Change in a day with a true minus, Snow water) and an 8-day bar chart 70px tall: hatched survey-green bars with a 1px survey-green outline open at the base, standing on a graphite baseline, with 10px day letters.
- **Nearby stations:** rows divided by faint rules: name (15px bold) with a 12px detail line, the current temperature at 24px/800 with wind in 12px, a 36px graphite sparkline (1.6px, non-scaling) of the last 24 hours, and the range in 11px soft graphite. Stations load when the section opens.

### Hour-by-Hour Sheet
Opened from a period card. A tall bottom sheet whose yellow header carries the period name, a 13px subtitle with its time span, and 44px previous-period, next-period and close buttons (previous and next fade to 30% at the ends).
- **Readout:** the trace's readout line, showing the scrubbed hour's temperature, dew point, sky, precip, wind, cloud cover and snow level.
- **Meteogram:** stacked panels sharing one time axis, each labeled above its left edge in 10px/700 ink with a soft-graphite key at the right, closed by a survey-green rule, with midnight rules and weekday marks through all panels: Temperature (graphite pencil, dashed survey-green dew point at 1.6px, 4 3 dash); Precipitation chance and snow (survey-green chance bars over hatched snow blocks labeled with amounts); Wind (1.8px graphite line, 2.2px graphite gust dots); Cloud cover (faint-green area with a survey-green edge); and, when the grid has it, Snow level vs this spot. One dotted graphite cursor and a 3.5px graphite dot move across every panel together by pointer or arrow keys.
- **Snow level panel:** the snow level is a 2.2px survey-green line and this spot's elevation a 1.2px dashed graphite line labeled "this spot N ft". Both stay inside the three inks.
- **Hourly table:** 14px, one row per hour (hour 600 nowrap, temperature bold, sky, precip, wind with gusts in a 12px second line, clouds), faint-ruled. The rule-green 11px tracked header is sticky on the page color; under 520px the table scrolls sideways. The period's NWS text closes the sheet as a caption.

### Detailed Forecast
A definition list of every period: the name in 15px/800 and the full NWS text in 15px at 1.55, capped at 68ch, each row padded 14px and divided by a faint survey-green rule. Two columns (200px name, text) at 720px and up.

### Bottom Sheets
Places and Search open as bottom sheets up to 640px wide and 88dvh tall: a page-colored body with graphite outline on top and sides, over the scrim. The header is a Survey Yellow band (17px/800 title, 44px close button) ruled off in cover ink. Places lists numbered rows (rule-green 800 numbers) at least 60px tall with 44px icon tools, then an "Add a place" row of outlined buttons. Search has a sticky 48px white field with a graphite outline and an outlined locate button. Results are 56px rows divided by survey-green rules.

### Map, Survey Stake and Radar Loop
Maps use grayscale OpenTopoMap tiles (inverted for night) so only the inks carry color. The map frame, zoom controls and tools are square with 1px graphite outlines. The section closes with a 13px caption of coordinates and elevation.
- **Map tools:** 44px page-colored outlined buttons; pressed toggles (Topo/Streets, Radar) turn Survey Yellow. Segmented pairs share a border.
- **Survey stake:** a 26px yellow ring with a 3px graphite border and a 6px graphite center, the 2px page halo, a 3px graphite stem, and a Survey Yellow flag (13px/700, 2px graphite border) carrying the place name. A slow 2.4s graphite ring pulses outward. A candidate pick uses a dashed, page-filled ring and a graphite flag with no pulse.
- **Radar loop panel:** a square page-colored box, outlined in graphite, at the lower left. A 44px play/pause square is divided off by a rule, then the frame clock (bold time plus "n min ago" or "latest") and a 120px NWS intensity legend (Light to Heavy). Six frames 10 minutes apart; radar tiles at 85% opacity. The legend is a 6px graphite-outlined gradient through the nine NEXRAD reflectivity colors.
- **Full map:** a full-screen dialog with the yellow header, a hint box, and a page-colored pick panel that rises from the bottom with the picked spot and actions.

### Forecast Discussion
A section head with the office as its note, a soft-graphite intro line, then every AFD section in full between survey-green rules: a 16px/700 title with a 12px soft-graphite subtitle. Bodies are 15px at 1.55, capped at 68ch, with rule-green list markers.

### Buttons
- **Shape:** square, 1px graphite outline, at least 44px tall, 16px side padding, 15px/600.
- **Outline:** transparent fill (the default).
- **Solid:** graphite fill with page text, for the one primary action in a state (Try again).
- **Yellow:** Survey Yellow with cover-ink outline, for cover-colored actions.
- **Focus:** 2px graphite outline at 2px offset (cover ink at 3px on the label box). **Disabled:** 45% opacity.
- **Text link:** underlined with a 1px survey-green underline at 3px offset.

### Navigation
- **Bottom bar (mobile and touch):** three equal 52px outlined buttons (Places, Map, Search) with a 20px 1.6px-stroke line icon over an 11px/600 tracked uppercase label, on the page color under a graphite rule, padded for the home indicator. Press fills Survey Yellow.
- **Cover nav (900px+ with hover):** the same three on the cover band, 62px tall to match the label box, outlined in cover ink; hover inverts to a cover-ink fill with yellow text.

### Status and Toast
- **Status line:** 12px soft graphite: NWS issue time, check age, Refresh link; "Offline." and saved-copy notices in graphite 600. Closed by a faint survey-green rule.
- **Toast:** graphite block with page text, 14px, sitting above the bottom bar.
- **Save chip:** a cover-ink block with yellow 14px/600 text on the cover band, for an unsaved preview.

### Motion
Short exponential ease-out (cubic-bezier(.16,1,.3,1)) for everything. The pencil draws once per page load (1.1s stroke-dashoffset). Sheets and the pick panel rise 24px while fading in (0.32s / 0.28s). Tab, cover-nav and period-card hover fills change in 0.2s. The hour-by-hour sheet rises like the other sheets. Step buttons smooth-scroll the period strip. The page turn is native scroll-snap. The radar holds each frame 650ms and the latest frame 1600ms. With reduced motion, the pencil appears drawn, the radar starts paused on the latest frame, step buttons and page turns jump, and all animations collapse.

## Do's and Don'ts

### Do:
- **Do** draw every new mark in one of the three inks: Survey Yellow, Survey Green, or Graphite.
- **Do** reserve rust for "now": the now line and the now dot on the trace.
- **Do** color a period temperature Warm High or Cool Low only with the word "High" or "Low" beside it.
- **Do** open every page section with a 22px/800 title, a right-side note or link, and a 1px survey-green rule beneath.
- **Do** separate cards and sections with a 1px survey-green rule and box controls with a 1px graphite outline.
- **Do** set every figure in tabular numerals and line figures up across cards and down columns.
- **Do** keep heads over columns and figures at 11 to 12px, tracked and uppercase.
- **Do** use a Survey Yellow band for anything that acts as a cover: the page top, sheet headers, the pressed state of a toggle.
- **Do** show snow as survey-green hatching and precip as solid survey-green columns, so the two read apart without relying on color.
- **Do** key precipitation type by pattern first (hatch for snow, horizontal rules for fog) and use the Cool Low or Warm High tint only for liquid and thunder in the type timeline, with the type's word on the segment.
- **Do** show the avalanche level number and its name together on the standard scale color, and name avalanche.org and SNOTEL as non-NOAA sources.
- **Do** make a summary element that leads to more detail a whole button (a period card opens its hours), with a Survey Yellow tint on hover.
- **Do** keep touch targets at 44px or larger, and 52px or more in the bottom bar.
- **Do** keep map tiles grayscale so only the inks and the radar carry color.

### Don't:
- **Don't** use rust for anything but now: not for alerts, emphasis, links, selection, weather icons, or brand.
- **Don't** spread Warm High or Cool Low beyond the period-card figure and the type-timeline tints: not to the trace, chart lines, observed temperatures, other backgrounds, or icons.
- **Don't** add drop shadows, rounded corners, gradients, or translucent frosted panels to page content, controls, or sheets.
- **Don't** introduce another hue. Alert Red stays on the severe-alert glyph, the radar scale stays in the radar layer and its legend, the avalanche scale stays in its badge, and High/Low stay on their figures and the type timeline.
- **Don't** uppercase section titles, place names, forecasts, or NWS sentences.
- **Don't** use proportional figures in any numeric column, card or readout.
- **Don't** use a sky-gradient hero or weather-photo background; the page is paper.

### Forecast maps

NWS National Digital Forecast Database images from graphical.weather.gov, shown as they are (the maps carry NWS's own colour scales, so none of the page inks recolour them). The section head holds a two-button area toggle (the region, such as Pacific Northwest, and the place's state), and the choice is remembered. Two figures: Weather and High temperature, side by side from 1000px and stacked below that. Each has a 16px/800 title, with the frame's local time in 15px/700 on the right and a soft-graphite relative note ("now", "in 6 hr", or the date). Frames are full-bleed on phones and outlined in graphite from 720px; tapping a frame opens the full-size PNG. Weather steps through 52 three-hour frames with 44px step buttons and a scrubber: a 1px graphite track, a survey-yellow square thumb, survey-green day ticks, and a 2px rust mark at the current time. High temperature uses a 7-button day row in the segmented style. While a frame loads, a small outlined "Loading map…" tag sits top-left and the previous frame stays visible.
