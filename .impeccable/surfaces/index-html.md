---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

Scope: the whole forecast PWA (index.html): one screen per saved place, plus the Places, Map and Search sheets. Visitor mode: Operate.

Audience and job: one person glancing at the NWS forecast for a few saved mountain and home spots, mostly on a phone outdoors. Task: see now, the next 24 hours, and 7 days; switch places; add a place by tapping the map, searching, or GPS; check radar and alerts.

## Direction contract

THESIS: Each saved place is a page in the yellow all-weather field book kept in a jacket pocket. The forecast is entered in ruled columns and graphed in pencil. This replaces the category default of a sky-gradient hero with frosted cards.

OWN-WORLD: survey-yellow cover band; cool green-white page ground; survey-green hairline rules at one device pixel; graphite ink; one rust mark reserved for "now". Three inks only. A sturdy grotesque with tabular numerals and small tracked uppercase column heads, printed like a field-book header. Square corners, no shadows except on sheets. Dark theme: the book at night under a headlamp, with a graphite page and a dimmer yellow band.

STORY: Open the app, read now and the next hours in one glance, scan the week down fixed columns, swipe to the next place, and tap the cover label to manage places or open the map.

FIRST VIEWPORT: Yellow cover band (about 150px) with a white label box: place name, elevation, town, and a chevron. Page dots for places. Below it, the current temperature at about 88px with the sky word, wind and gust, and the issue time. Then a ruled 24-hour grid with a pencil polyline, a rust "now" tick, and snow amounts as hatched columns. Then the 7-day ruled table: DAY | SKY | HI / LO | PRECIP (bar plus number) | SNOW. A bottom bar in thumb reach holds Places, Map and Search.

FORM: All-Weather Field Book, position 7 on the ordered grounded list (assigned). seed:87675e1367b0da4f. Raises: fixed columns (split-flap), three inks and one-pixel rules (centre-rail), places one swipe apart with hard snap (vertical feed), nothing labeled twice (catalog sleeve).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Signature interaction: the pencil trace draws itself left to right once when a page first loads (stroke-dashoffset), and scrubbing along the grid reads out the hour, temperature, precipitation and wind. Motion grammar: short exponential ease-out; the place swipe is a native scroll-snap.

Unresolved: metric units (not confirmed); notifications (not requested).
