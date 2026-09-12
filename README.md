# M8 Guide & Reference

A collection of printable, high-density reference guides for the **Dirtywave M8 Tracker** (Firmware 6.6). This project is based on the original M8Guide by Laurent Vitalis — many design elements and the SVG button template used to generate the icons were adapted from that work. Thanks to Laurent for the excellent starting point: [LaurentVitalis / M8Guide](https://github.com/LaurentVitalis/M8Guide).

<img src="guide.jpg" width="800">

## 📄 Included Guides

### 1. M8 Shortcuts Guide (`shortcuts.html` → [`shortcuts.pdf`](shortcuts.pdf))

A single-page guide containing navigation, common actions, and context-sensitive shortcuts.

### 2. M8 EFX & Synthesis Reference (`efx.html` → [`efx.pdf`](efx.pdf))

A single-page reference for common instrument and sequencer EFX commands, per-synth parameters (Macrosynth, FM, Wavsynth, Hypersynth, Sampler), global and table commands, and TIC modes.

- **Design:** Features a vertical sidebar and flex-aligned columns for a professional reference card look.
- **Alignment:** Sections are vertically justified so that top and bottom borders line up perfectly across the page.

Both guides are laid out for **US Letter, landscape**.

---

## 🖨️ Building the PDFs

Regenerate both PDFs with headless Chrome:

```bash
bin/build-pdfs.sh            # writes shortcuts.pdf and efx.pdf to the repo root
bin/build-pdfs.sh /tmp/out   # or to another directory
```

The script defaults to Google Chrome's macOS install path; set `CHROME` to use a different browser binary. The script warns (and exits non-zero) if a guide no longer fits on one page.

### Printing from a browser

If you print the HTML directly instead, use these settings in the Print dialog:

1. **Layout:** Landscape.
2. **Margins:** Default (the CSS sets its own page margins).
3. **Scale:** **100%** (do not use "Fit to Page").
4. **Background Graphics:** **ON** (required for icons and header colors).
5. **Headers and Footers:** **OFF**.

---

## 🛠️ Customization & Technical Details

### Layout

- `css/common.css` — shared page layout (columns, section boxes, side header)
- `css/shortcuts.css`, `css/efx.css` — per-guide styles
- `fonts/` — Sofia Sans, licensed under the SIL Open Font License (`fonts/OFL.txt`)

### Shortcuts System

Shortcuts are stored as a JS array in `js/data.js` and rendered via `js/script.js` (no dependencies). Each section has a `column` (1–3) a header `color` (`gray`, `orange`, `blue`, … from `css/common.css`, shared with the EFX guide), and a header `icon` (a key of `ICONS` in `js/script.js`), and sections render in file order within their column. This makes it easy to update descriptions or reorder sections without touching complex HTML.

### Button Icon Syntax

Button icons use a single SVG template (`<template>` in `shortcuts.html`) customized via CSS classes. Each button (`left`, `right`, `up`, `down`, `option`, `edit`, `play`, `shift`) can be combined with a suffix:

- `edit` — pressed
- `edithold` — held
- `edit1st` / `edit2nd` — pressed in sequence
- `double` — double-tap (for `edit` and `up`)

For example, to illustrate `hold SHIFT + OPTION then double-tap EDIT`, use:
`"command": "shifthold option1st edit2nd double"`
