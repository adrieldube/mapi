# City Map Poster Generator

A beautiful, minimalist **single-file web application** that generates custom city map posters with dual-tone color palettes. Built entirely client-side using **MapLibre GL JS** and **MapTiler** — no backend, no build tools, no dependencies to install.

![City Map Poster Example](https://img.shields.io/badge/style-minimalist-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **🎨 50 Dual-Tone Color Palettes** — From jade-black to sage-terracotta, carefully curated minimal color schemes
- **🗺️ Interactive Map Preview** — Real-time zoom and pan powered by MapLibre GL JS
- **📍 Smart Geocoding** — Search any city worldwide using MapTiler's geocoding API
- **📏 Live Coordinates** — Dynamic latitude/longitude display that updates as you navigate
- **🖼️ High-Resolution Export** — Generate PNG posters in 1×, 2×, or 3× quality for professional printing
- **⚡ Zero Build Step** — Single `index.html` file with embedded CSS and JavaScript
- **🌐 100% Client-Side** — No server required, runs entirely in your browser

## 🎨 Color Palettes

Choose from 50 pre-designed dual-tone palettes, each defining three colors:
- **Background/Land** — The base map color
- **Roads** — Major, minor, and local roads in varying widths
- **Water** — Rivers, lakes, and coastlines

Examples: `jade-black`, `coral-navy`, `sage-terracotta`, `forest-cream`, `ocean-sand`

## 📋 Requirements

1. A free [MapTiler Cloud](https://cloud.maptiler.com/) account
2. A MapTiler API key (free tier includes 100,000 map loads/month)
3. A modern web browser with WebGL support

## 🚀 Quick Start

### 1. Get Your MapTiler API Key

1. Sign up at [MapTiler Cloud](https://cloud.maptiler.com/)
2. Navigate to **Account → API Keys**
3. Copy your default key or create a new one

### 2. Configure the App

Open `index.html` in any text editor and replace the placeholder:

```javascript
const MAPTILER_KEY = "YOUR_MAPTILER_KEY";  // Line 385
```

With your actual key:

```javascript
const MAPTILER_KEY = "abc123xyz456";
```

### 3. Run Locally

**⚠️ Important:** Don't open `index.html` directly in your browser — you'll hit CORS issues with CDN resources.

**Recommended methods:**

#### Option A: Node.js (easiest)
```bash
npx serve .
# or
npx http-server .
```

Then open `http://localhost:3000` (or the URL shown in terminal).

#### Option B: VS Code Live Server
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → **Open with Live Server**

#### Option C: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### 4. Deploy (Optional)

Since it's a single HTML file, deploy anywhere that hosts static sites:
- **GitHub Pages** — Push to repo, enable Pages in settings
- **Netlify** — Drag and drop the folder
- **Vercel** — `vercel --prod`
- **Cloudflare Pages** — Connect your repo

## 🎯 How to Use

1. **Search for a city** — Type any city name (e.g., "Tokyo", "Paris", "Mexico City") and press Enter
2. **Adjust the view:**
   - Drag to pan around the map
   - Use the zoom slider (8-16) to control detail level
   - Lower zoom = more area, higher zoom = more street detail
3. **Choose a color palette** — Select from 50 dual-tone styles in the dropdown
4. **Set export quality:**
   - **1×** — Quick preview (~800×1200px)
   - **2×** — Print-ready (~1600×2400px)
   - **3×** — High-resolution (~2400×3600px)
5. **Download PNG** — Click the button to export your poster

### 💡 Tips for Best Results

- **For A4 printing (21×30cm):** Use 2× quality, zoom 11-13
- **For large posters (50×70cm):** Use 3× quality, zoom 10-12
- **For detailed neighborhoods:** Use zoom 14-16 with 3× quality
- **File size:** Higher quality = larger PNG (3× can be 5-10 MB)

## 🏗️ Project Structure

This is a **single-file application**. Everything lives in `index.html`:

```
index.html (681 lines)
├── <style>      (lines 16-234)   — All CSS styling
├── <body>       (lines 236-381)  — HTML structure
└── <script>     (lines 382-681)  — All JavaScript logic
    ├── MapTiler API integration
    ├── 50 color palette definitions
    ├── Custom dual-tone style builder
    ├── MapLibre GL JS initialization
    ├── Geocoding search handler
    └── PNG export with html2canvas
```

## 🛠️ Technical Details

### Dependencies (CDN-loaded)
- **MapLibre GL JS 3.5.0** — Renders interactive vector maps
- **html2canvas 1.4.1** — Captures canvas as PNG
- **MapTiler API** — Provides tiles, fonts, and geocoding

### Custom Map Styling
Unlike most MapLibre apps that use pre-made styles, this app generates a **custom dual-tone style JSON** from scratch:

```javascript
createDualToneStyle(palette) {
  return {
    version: 8,
    sources: { /* MapTiler vector tiles */ },
    layers: [
      /* Background layer */,
      /* Water layer */,
      /* 3 road layers (major/minor/other) */,
      /* Parks, landcover, buildings */
    ]
  };
}
```

This allows complete control over colors while using MapTiler's vector tile data.

### Export Configuration
The map is initialized with `preserveDrawingBuffer: true` (required for WebGL canvas capture):

```javascript
map = new maplibregl.Map({
  container: 'mapContainer',
  preserveDrawingBuffer: true,  // Critical for PNG export
  // ...
});
```

## 📐 Poster Dimensions

Default poster size: **600×900px** (2:3 ratio)

With export quality multipliers:
- 1× = 600×900px
- 2× = 1200×1800px
- 3× = 1800×2700px

To change dimensions, edit the CSS (lines 184-185):

```css
#poster {
  width: 600px;    /* Adjust width */
  height: 900px;   /* Adjust height */
}
```

Recommended ratios for printing:
- **2:3** (current) — Standard photo poster
- **5:7** — Common frame size
- **A-series** — 1:√2 (e.g., 707×1000 for A-series)

## 🎨 Adding Custom Color Palettes

Add new palettes by editing the `DUAL_TONE_PALETTES` object (lines 391-448):

```javascript
const DUAL_TONE_PALETTES = {
  'your-palette-name': {
    bg: '#FFFFFF',      // Background/land color
    roads: '#000000',   // Road color
    water: '#E0E0E0'    // Water color
  },
  // ... other palettes
};
```

Then add to the dropdown (lines 263-312):

```html
<option value="your-palette-name">Your Palette Name</option>
```

## 🖨️ Professional Printing Guide

For commercial-quality prints:

1. **Calculate required resolution:**
   - Standard print: 150 DPI minimum
   - Professional: 300 DPI recommended
   - Example: 40×60cm poster at 300 DPI = 4724×7087px

2. **Current limitations:**
   - Max practical size: ~2400×3600px (3× quality)
   - For larger sizes, consider server-side rendering with MapLibre Native

3. **Best practices:**
   - Use 3× quality for anything above 30×40cm
   - Test print at small size first
   - Keep zoom between 10-14 for city-wide views
   - Higher zoom (14-16) works for neighborhood details

## 📄 Attribution & Licensing

**Required Attribution:**
```
© OpenStreetMap contributors · Tiles © MapTiler
```

This line appears in the footer and **must remain visible** on exported posters to comply with:
- [OpenStreetMap ODbL License](https://www.openstreetmap.org/copyright)
- [MapTiler Terms of Service](https://www.maptiler.com/terms/)

**Project License:** MIT — Feel free to modify and use commercially, but maintain required map data attributions.

## 🐛 Troubleshooting

**Map not loading:**
- Verify your MapTiler API key is correct
- Check browser console for errors
- Ensure you're running via HTTP server, not `file://`

**Blank PNG export:**
- Confirm `preserveDrawingBuffer: true` is set (line 508)
- Try lower export quality (browser memory limits)
- Check browser console for canvas errors

**Geocoding not working:**
- Verify API key in both tiles AND geocoding URLs
- Check MapTiler API quota (free tier: 100k/month)
- Try simplifying city name (e.g., "Paris" not "Paris, France")

**Style not applying:**
- Palette must have exactly 3 properties: `bg`, `roads`, `water`
- Check browser console for MapLibre style errors
- Verify palette name matches dropdown `value` attribute

## 🤝 Contributing

This is a simple educational project, but improvements are welcome:

1. Fork the repository
2. Make your changes to `index.html`
3. Test locally with a server
4. Submit a pull request

Ideas for contributions:
- More color palettes
- Additional map layers (buildings, parks)
- Export to SVG/PDF
- Customizable typography
- Save/load configurations

## 📚 Resources

- [MapLibre GL JS Docs](https://maplibre.org/maplibre-gl-js-docs/)
- [MapTiler Cloud](https://cloud.maptiler.com/)
- [OpenMapTiles Schema](https://openmaptiles.org/schema/)
- [html2canvas Documentation](https://html2canvas.hertzen.com/)

## 💬 Support

- **Issues:** Open an issue on GitHub
- **MapTiler Questions:** [MapTiler Support](https://support.maptiler.com/)
- **MapLibre Questions:** [MapLibre Discussions](https://github.com/maplibre/maplibre-gl-js/discussions)

---

**Made with ❤️ for map lovers and poster enthusiasts**
