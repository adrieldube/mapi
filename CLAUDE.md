# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MAPI is a client-side web application that generates printable city map posters, flight route animations, and 3D frame previews. No backend — runs entirely in the browser via CDN dependencies.

## Build Commands

```bash
npm run build          # Minify both CSS and JS
npm run build:css      # Tailwind CSS + CleanCSS minification → styles.min.css
npm run build:js       # Terser minification → app.min.js, flight.min.js, frame.min.js
npm run watch          # Watch mode for CSS and JS (concurrent)
npm run watch:css      # Tailwind watch only
npm run watch:js       # Chokidar watch for JS changes
```

After editing any source file, run `npm run build` to regenerate minified files.

**Running locally** (required due to CORS restrictions):
```bash
npx serve .
# or
python -m http.server 8000
```

## Architecture

Three separate applications share this repo:

| Entry point | Source JS | Purpose |
|---|---|---|
| `index.html` / `es/index.html` | `js/app.js` | Map poster designer |
| `flight.html` / `es/flight.html` | `js/flight.js` | Flight route animator |
| `frame.html` / `es/frame.html` | `js/frame.js` | 3D frame viewer |

`/es/` contains Spanish-localized versions of all three apps.

### app.js — Map Poster Designer

Organized into named sections (search for `// ===`):
- **CONFIGURATION** — MapTiler API key
- **COLOR PALETTES** — 120+ dual-tone themes `{ bg, roads, water, buildings, parks }`
- **TOP 150 CITIES** — lat/lon + English/Spanish subtitles
- **DOM ELEMENTS** — `elements` object caching all element references
- **STATE** — `map`, `currentStyle`, `labelsEnabled`, `isLandscape`
- **MAP STYLE** — `createMapStyle(palette)` generates MapLibre GL style JSON dynamically
- **EXPORT** — `downloadPoster()` renders at 600 DPI via html2canvas
- **3D GLOBE** — Three.js animated globe intro modal

### flight.js — Flight Simulator

- Great-circle route animation between cities
- Real-time plane animation with speed control (0.25x–2x)
- Camera modes: Follow / Overview
- Screenshot and video recording (MediaRecorder API)
- 5 flight-specific palettes (Noir, Blueprint, Emerald, Tangerine, Royal Blue)

### frame.js — 3D Frame Viewer

- Three.js scene with OrbitControls
- USDZ and GLTF exporters for AR/3D model download

## Key Conventions

### Adding New Features

1. Add UI controls to the relevant HTML file
2. Cache the DOM reference in the `elements` object at the top of the JS file
3. Add the event listener in `setupEventListeners()`
4. Mirror changes to the `/es/` localized version

### Adding New Palettes

1. Add the palette to the `PALETTES` object in `js/app.js` with keys: `bg`, `roads`, `water`, `buildings`, `parks`
2. Add the corresponding `<option>` to `<select id="styleSelect">` in `index.html` and `es/index.html`

### Naming

- CSS classes: kebab-case with prefixes (`poster-style-`, `size-`)
- Element IDs: camelCase (`posterStyleSelect`, `cityTitle`)
- Palette names: descriptive strings (`"Sage Green & Terracotta"`)

### Styling

- Tailwind utility classes in HTML for layout/spacing
- Custom component styles in `css/styles.css` (poster app) or `css/flight-styles.css` (flight app)
- Brand colors: `#440edf` (purple), `#74e5c0` (mint)

## External Dependencies (CDN)

- **MapLibre GL JS 4.7.1** — vector map rendering
- **MapTiler Cloud** — tile source + geocoding API (key hardcoded in each JS file)
- **Three.js r128** — 3D globe and frame visualization
- **html2canvas 1.4.1** — PNG export
- **Tailwind CSS 3.4.0** — utility CSS (built locally, not CDN)
- **Ionicons 8.0.13** — icons

## Poster Layout CSS Classes

| Class | Description |
|---|---|
| `.poster-style-minimal` | Centered footer |
| `.poster-style-vertical` | Side-mounted vertical text |
| `.poster-style-corner` | Corner-positioned labels |
| `.poster-style-oversized` | Large dramatic typography |

Print sizes use aspect-ratio CSS: `.size-24x36`, `.size-18x24`, `.size-a1`, etc.
