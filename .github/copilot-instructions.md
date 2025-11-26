# MAPI - City Map Poster Generator

## Project Overview

A client-side web application that generates printable city map posters using MapLibre GL JS and MapTiler APIs. No backend, no build step—runs entirely in the browser.

## Architecture

### File Structure

```
index.html      # Main app entry point (controls + poster preview)
landing.html    # Marketing landing page (separate, self-contained)
js/app.js       # All application logic (map, palettes, export)
css/styles.css  # Custom styles (theme swatches, poster layouts)
```

### External Dependencies (CDN)

- **MapLibre GL JS** (v3.5.0) - Vector map rendering
- **MapTiler** - Tile source + geocoding API (requires API key)
- **html2canvas** (v1.4.1) - PNG export
- **Tailwind CSS** (CDN) - Utility classes
- **Ionicons** (v7.1.0) - Icons

### Key Configuration

The MapTiler API key is defined at the top of `js/app.js`:

```javascript
const MAPTILER_KEY = "YOUR_KEY"; // Line 3
```

## Core Patterns

### Color Palettes

All 52 color themes are defined in `js/app.js` as the `PALETTES` object. Each palette has three colors:

```javascript
{ bg: '#FFFFFF', roads: '#000000', water: '#E0E0E0' }
```

When adding new palettes, also update the `<select id="styleSelect">` options in `index.html`.

### Map Style Generation

The `createMapStyle(palette)` function dynamically generates MapLibre style JSON. Layers include: background, water, landcover, park, roads (3 levels), railway, and buildings.

### Poster Layouts

Four layout variants controlled via CSS classes on `#poster`:

- `.poster-style-minimal` - Centered footer
- `.poster-style-vertical` - Side-mounted vertical text
- `.poster-style-corner` - Corner-positioned labels
- `.poster-style-oversized` - Large dramatic typography

Print sizes use aspect-ratio CSS (e.g., `.size-24x36`, `.size-a1`).

### Export System

High-resolution PNG export targets **600 DPI** for print quality. The `downloadPoster()` function:

1. Calculates scale based on selected print size
2. Uses html2canvas with `preserveDrawingBuffer: true`
3. Generates blob and triggers download

## Development

### Running Locally

Must use a local server (CORS restrictions):

```bash
npx serve .           # or
python -m http.server 8000
```

### State Management

Global state in `js/app.js`:

- `map` - MapLibre instance
- `currentStyle` - Active palette name
- `labelsEnabled` - Footer visibility toggle
- `isLandscape` - Orientation toggle

### DOM Elements

All element references cached in `elements` object at the top of `js/app.js`. Update this when adding new controls.

## Conventions

### Styling

- Use Tailwind utility classes in HTML for layout/spacing
- Custom component styles go in `css/styles.css`
- Brand colors: `#440edf` (purple), `#74e5c0` (mint)

### Adding Features

1. Add UI controls to the appropriate section in `index.html`
2. Cache DOM reference in `elements` object
3. Add event listener in `setupEventListeners()`
4. Keep `landing.html` self-contained (has its own inline styles)

### Naming

- Palette names are descriptive: `"Sage Green & Terracotta"`
- CSS classes use kebab-case with prefixes: `poster-style-`, `size-`
- Element IDs are camelCase: `posterStyleSelect`, `cityTitle`
