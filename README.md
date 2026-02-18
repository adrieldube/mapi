# MAPI — City Map Poster Generator

A client-side web app that generates printable city map posters using **MapLibre GL JS** and **MapTiler**. No backend, no build step — runs entirely in the browser.

## Features

- **100+ color palettes** — curated dual-tone themes (bg, roads, water)
- **Interactive map** — real-time pan/zoom powered by MapLibre GL JS
- **City search** — geocoding via MapTiler API
- **4 poster layouts** — minimal, vertical, corner, oversized typography
- **Multiple print sizes** — 24×36, 18×24, 16×20, A1, A2, A3, 11×14
- **Portrait & landscape** orientation toggle
- **High-res PNG export** — targets 600 DPI for print quality
- **3D globe intro** — animated Three.js landing modal
- **Live coordinates** — dynamic lat/lon footer

## Quick Start

1. Get a free API key from [MapTiler Cloud](https://cloud.maptiler.com/)
2. Set it in `js/app.js`:
   ```javascript
   const MAPTILER_KEY = "your_key_here";
   ```
3. Serve locally (CORS requires HTTP):
   ```bash
   npx serve .
   ```
4. Open `http://localhost:3000`

## Project Structure

```
index.html        — App shell (controls + poster preview)
js/app.js         — All application logic (palettes, map, export)
css/styles.css    — Custom styles (swatches, poster layouts)
```

### Dependencies (CDN)

- MapLibre GL JS 5.18.0
- html2canvas 1.4.1
- Three.js r128
- Tailwind CSS
- Ionicons 8.0

## Adding Palettes

Add entries to the `PALETTES` object in `js/app.js`:

```javascript
'Your Palette Name': { bg: '#FFFFFF', roads: '#000000', water: '#E0E0E0' },
```

Then add a matching `<option>` in the `<select id="styleSelect">` in `index.html`.

## Attribution

Exported posters must include:
```
© OpenStreetMap contributors · Tiles © MapTiler
```

Per [OSM ODbL](https://www.openstreetmap.org/copyright) and [MapTiler ToS](https://www.maptiler.com/terms/).

## License

MIT
