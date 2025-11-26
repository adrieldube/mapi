// === CONFIGURATION ===
// Get a free key at https://cloud.maptiler.com/
const MAPTILER_KEY = "2Q7XT8l9Iqoe1Z9gbvHw";

// === COLOR PALETTES ===
const PALETTES = {
    'Sage Green & Terracotta': { bg: '#E8E5D8', roads: '#C67B5C', water: '#A8B5A0' },
    'Midnight Navy & Gold': { bg: '#1A1A2E', roads: '#D4AF37', water: '#16213E' },
    'Blush Pink & Charcoal': { bg: '#F4E4E0', roads: '#3D3D3D', water: '#E8B4B8' },
    'Forest Green & Cream': { bg: '#F5F1E8', roads: '#2C5F4F', water: '#8BA888' },
    'Deep Ocean Blue & Sand': { bg: '#F9F6F0', roads: '#2E5266', water: '#6E8898' },
    'Rust Red & Ivory': { bg: '#FAF8F3', roads: '#B7410E', water: '#D4A574' },
    'Lavender Purple & Slate': { bg: '#E8E4F3', roads: '#4A5568', water: '#A891D3' },
    'Emerald Green & Bone': { bg: '#F8F5F0', roads: '#047857', water: '#6EE7B7' },
    'Burgundy Red & Beige': { bg: '#EDE8E3', roads: '#800020', water: '#C19A6B' },
    'Teal Blue & Taupe': { bg: '#E6E1DC', roads: '#008B8B', water: '#B8A99A' },
    'Cobalt Blue & Cream': { bg: '#F7F4EF', roads: '#0047AB', water: '#7B9EC6' },
    'Mocha Brown & Mint Green': { bg: '#E8F5E9', roads: '#6F4E37', water: '#A5D6A7' },
    'Pure Black & White': { bg: '#FFFFFF', roads: '#000000', water: '#E0E0E0' },
    'Noir White & Black (Inverted)': { bg: '#0A0A0A', roads: '#FFFFFF', water: '#1A1A1A' },
    'Deep Navy Blue & White': { bg: '#FFFFFF', roads: '#001F3F', water: '#B8D4E8' },
    'Crimson Red & Ivory': { bg: '#FFFEF7', roads: '#8B0000', water: '#FFE5D9' },
    'Electric Blue & White': { bg: '#FAFAFA', roads: '#0066FF', water: '#CCE0FF' },
    'Forest Green & White': { bg: '#FFFFFF', roads: '#1B4D3E', water: '#D4E8E0' },
    'Charcoal Grey & Snow White': { bg: '#F8F8F8', roads: '#2C2C2C', water: '#D9D9D9' },
    'Royal Purple & Cream': { bg: '#FAF9F6', roads: '#4B0082', water: '#E6D7FF' },
    'Burnt Orange & White': { bg: '#FFFFFF', roads: '#CC5500', water: '#FFE4CC' },
    'Prussian Blue & White': { bg: '#FFFFFF', roads: '#003153', water: '#B3D9E8' },
    'Vermillion Red & Ecru': { bg: '#F5F3EF', roads: '#E34234', water: '#FFD6CC' },
    'Ink Black & Paper White': { bg: '#F9F7F4', roads: '#1C1C1C', water: '#E8E6E3' },
    'Hot Pink & White': { bg: '#FFFFFF', roads: '#FF1493', water: '#FFB6D9' },
    'Fuchsia Pink & Cream': { bg: '#FFF8F5', roads: '#FF00FF', water: '#FFD4FF' },
    'Neon Green & Black': { bg: '#0D0D0D', roads: '#39FF14', water: '#1A331A' },
    'Neon Cyan & Black': { bg: '#0A0A0A', roads: '#00FFFF', water: '#003333' },
    'Magenta Pink & White': { bg: '#FFFFFF', roads: '#C71585', water: '#F8BBE0' },
    'Lime Yellow & Charcoal': { bg: '#2A2A2A', roads: '#CCFF00', water: '#3A3A3A' },
    'Tangerine Orange & White': { bg: '#FFFFFF', roads: '#FF9500', water: '#FFE0B3' },
    'Violet Purple & Ivory': { bg: '#FAF8F5', roads: '#8B00FF', water: '#E6D4FF' },
    'Coral Red & Navy Blue': { bg: '#001F3F', roads: '#FF6B6B', water: '#0A2A4A' },
    'Turquoise Blue & Cream': { bg: '#FFF9F5', roads: '#00CED1', water: '#B3F0F1' },
    'Raspberry Pink & White': { bg: '#FFFFFF', roads: '#E30B5C', water: '#FFCCE0' },
    'Chartreuse Yellow & Black': { bg: '#0E0E0E', roads: '#DFFF00', water: '#1E1E1E' },
    'Amber Gold & Slate Grey': { bg: '#3A3A3A', roads: '#FFBF00', water: '#4A4A4A' },
    'Orchid Pink & White': { bg: '#FFFFFF', roads: '#DA70D6', water: '#F5D9F5' },
    'Cyan Blue & Black': { bg: '#000000', roads: '#00FFFF', water: '#0A1A1A' },
    'Scarlet Red & Beige': { bg: '#F5F1E8', roads: '#FF2400', water: '#FFD1C7' },
    'Mint Green & Chocolate Brown': { bg: '#2C1810', roads: '#98FF98', water: '#3C2820' },
    'Sapphire Blue & White': { bg: '#FFFFFF', roads: '#0F52BA', water: '#C7D9F5' },
    'Peach Orange & Graphite': { bg: '#3E3E3E', roads: '#FFB07C', water: '#4E4E4E' },
    'Aqua Blue & Charcoal': { bg: '#2B2B2B', roads: '#00FFBF', water: '#3B3B3B' },
    'Rose Pink & White': { bg: '#FFFFFF', roads: '#FF007F', water: '#FFCCEB' },
    'Lemon Yellow & Navy Blue': { bg: '#001529', roads: '#FFF44F', water: '#0A2539' },
    'Plum Purple & Cream': { bg: '#FFF8F0', roads: '#8E4585', water: '#E8D4E5' },
    'Jade Green & Black': { bg: '#0F0F0F', roads: '#00A86B', water: '#1F1F1F' },
    'Sunset Orange & White': { bg: '#FFFFFF', roads: '#FF4500', water: '#FFD4BF' },
    'Royal Blue & Coral Orange': { bg: '#304085', roads: '#FFFFFF', water: '#de663a' },
    'Bright Yellow & Teal Blue': { bg: '#37b4b8', roads: '#FFFFFF', water: '#eaf663' }
};

// Print sizes in inches for DPI calculation
const PRINT_SIZES = {
    '24x36': { width: 24, height: 36 },
    'a1': { width: 23.4, height: 33.1 },
    '18x24': { width: 18, height: 24 },
    '16x20': { width: 16, height: 20 },
    'a2': { width: 16.5, height: 23.4 },
    'a3': { width: 11.7, height: 16.5 },
    '11x14': { width: 11, height: 14 }
};

const TARGET_DPI = 600;
const INITIAL_CENTER = [-82.3666, 23.1136]; // Havana
const INITIAL_ZOOM = 13;

// === DOM ELEMENTS ===
const elements = {
    status: document.getElementById("status"),
    zoomInput: document.getElementById("zoomInput"),
    zoomValue: document.getElementById("zoomValue"),
    zoomIncrement: document.getElementById("zoomIncrement"),
    zoomDecrement: document.getElementById("zoomDecrement"),
    cityInput: document.getElementById("cityInput"),
    styleSelect: document.getElementById("styleSelect"),
    posterStyleSelect: document.getElementById("posterStyleSelect"),
    sizeSelect: document.getElementById("sizeSelect"),
    poster: document.getElementById("poster"),
    titleInput: document.getElementById("titleInput"),
    subtitleInput: document.getElementById("subtitleInput"),
    taglineInput: document.getElementById("taglineInput"),
    labelsToggle: document.getElementById("labelsToggle"),
    orientationToggle: document.getElementById("orientationToggle"),
    cityTitle: document.getElementById("cityTitle"),
    citySubtitle: document.getElementById("citySubtitle"),
    coordinates: document.getElementById("coordinates"),
    posterFooter: document.getElementById("posterFooter"),
    downloadBtn: document.getElementById("downloadBtn"),
    themesGrid: document.getElementById("themesGrid"),
    toggleThemesGrid: document.getElementById("toggleThemesGrid"),
    selectedThemeSwatch: document.getElementById("selectedThemeSwatch"),
    selectedThemeName: document.getElementById("selectedThemeName"),
    selectedBgColor: document.getElementById("selectedBgColor"),
    selectedRoadsColor: document.getElementById("selectedRoadsColor"),
    selectedWaterColor: document.getElementById("selectedWaterColor")
};

// === STATE ===
let map;
let currentStyle = 'Pure Black & White';
let labelsEnabled = true;
let isLandscape = false;

// === UTILITY FUNCTIONS ===
function isLightColor(hexColor) {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return ((r * 299) + (g * 587) + (b * 114)) / 1000 > 155;
}

function setStatus(msg, isError = false) {
    elements.status.textContent = msg || "";
    elements.status.style.color = isError ? "#b00020" : "#111";
}

// === THEME PREVIEW FUNCTIONS ===
function createThemeSwatch(themeName, palette, isLarge = false) {
    const swatch = document.createElement('div');
    swatch.className = isLarge ? 'theme-swatch-large' : 'theme-swatch';
    swatch.style.setProperty('--swatch-bg', palette.bg);
    swatch.style.setProperty('--swatch-roads', palette.roads);
    swatch.style.setProperty('--swatch-water', palette.water);

    const roads = document.createElement('div');
    roads.className = 'roads';
    swatch.appendChild(roads);

    if (!isLarge) {
        swatch.dataset.theme = themeName;
        swatch.title = themeName;
    }

    return swatch;
}

function updateSelectedThemePreview(themeName) {
    const palette = PALETTES[themeName];
    if (!palette) return;

    // Update large swatch
    elements.selectedThemeSwatch.style.setProperty('--swatch-bg', palette.bg);
    elements.selectedThemeSwatch.style.setProperty('--swatch-roads', palette.roads);
    elements.selectedThemeSwatch.style.setProperty('--swatch-water', palette.water);

    // Clear and add roads element
    elements.selectedThemeSwatch.innerHTML = '';
    const roads = document.createElement('div');
    roads.className = 'roads';
    elements.selectedThemeSwatch.appendChild(roads);

    // Update theme name
    elements.selectedThemeName.textContent = themeName;

    // Update color dots
    elements.selectedBgColor.style.backgroundColor = palette.bg;
    elements.selectedRoadsColor.style.backgroundColor = palette.roads;
    elements.selectedWaterColor.style.backgroundColor = palette.water;

    // Update selected state in grid
    document.querySelectorAll('.theme-swatch').forEach(swatch => {
        swatch.classList.toggle('selected', swatch.dataset.theme === themeName);
    });
}

function generateThemesGrid() {
    elements.themesGrid.innerHTML = '';

    Object.entries(PALETTES).forEach(([name, palette]) => {
        const swatch = createThemeSwatch(name, palette);

        if (name === currentStyle) {
            swatch.classList.add('selected');
        }

        swatch.addEventListener('click', () => {
            elements.styleSelect.value = name;
            setStatus("Updating map style…");
            changeMapStyle(name);
            updateSelectedThemePreview(name);
        });

        elements.themesGrid.appendChild(swatch);
    });
}

function formatCoordinates(lat, lon) {
    const latDir = lat >= 0 ? "N" : "S";
    const lonDir = lon >= 0 ? "E" : "W";
    return `${Math.abs(lat).toFixed(3)}° ${latDir} — ${Math.abs(lon).toFixed(3)}° ${lonDir}`;
}

// === MAP STYLE ===
function createMapStyle(palette) {
    return {
        version: 8,
        sources: {
            openmaptiles: {
                type: 'vector',
                url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_KEY}`
            }
        },
        glyphs: `https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=${MAPTILER_KEY}`,
        layers: [
            { id: 'background', type: 'background', paint: { 'background-color': palette.bg } },
            { id: 'water', type: 'fill', source: 'openmaptiles', 'source-layer': 'water', paint: { 'fill-color': palette.water } },
            { id: 'landcover', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['==', 'class', 'wood'], paint: { 'fill-color': palette.bg, 'fill-opacity': 0.4 } },
            { id: 'park', type: 'fill', source: 'openmaptiles', 'source-layer': 'park', paint: { 'fill-color': palette.bg, 'fill-opacity': 0.3 } },
            { id: 'highway_major', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'motorway', 'trunk', 'primary'], paint: { 'line-color': palette.roads, 'line-width': 3 } },
            { id: 'highway_minor', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'secondary', 'tertiary'], paint: { 'line-color': palette.roads, 'line-width': 2 } },
            { id: 'highway_other', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'minor', 'service', 'track'], paint: { 'line-color': palette.roads, 'line-width': 1, 'line-opacity': 0.6 } },
            { id: 'railway', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['==', 'class', 'rail'], paint: { 'line-color': palette.roads, 'line-width': 1, 'line-opacity': 0.4 } },
            { id: 'building', type: 'fill', source: 'openmaptiles', 'source-layer': 'building', paint: { 'fill-color': palette.roads, 'fill-opacity': 0.3 } }
        ]
    };
}

// === POSTER FUNCTIONS ===
function updatePosterColors(palette) {
    const textColor = isLightColor(palette.bg) ? '#000000' : '#FFFFFF';
    elements.poster.style.backgroundColor = palette.bg;
    elements.poster.style.color = textColor;
    if (elements.posterFooter) {
        elements.posterFooter.style.backgroundColor = 'transparent';
        elements.posterFooter.style.color = textColor;
    }
}

function updateFooter(lat, lon) {
    if (!elements.taglineInput.value.trim()) {
        elements.coordinates.textContent = formatCoordinates(lat, lon);
    }
}

function updateLabels() {
    if (labelsEnabled) {
        elements.cityTitle.textContent = elements.titleInput.value.toUpperCase() || "";
        elements.citySubtitle.textContent = elements.subtitleInput.value || "";

        if (elements.taglineInput.value.trim()) {
            elements.coordinates.textContent = elements.taglineInput.value;
        }

        elements.cityTitle.style.display = elements.titleInput.value ? 'block' : 'none';
        elements.citySubtitle.style.display = elements.subtitleInput.value ? 'block' : 'none';
        elements.coordinates.style.display = (elements.taglineInput.value || elements.coordinates.textContent) ? 'block' : 'none';
        if (elements.posterFooter) elements.posterFooter.style.display = 'block';
    } else {
        elements.cityTitle.style.display = 'none';
        elements.citySubtitle.style.display = 'none';
        elements.coordinates.style.display = 'none';
        if (elements.posterFooter) elements.posterFooter.style.display = 'none';
    }
}

// === MAP FUNCTIONS ===
function updateRoadVisibility() {
    const zoom = map.getZoom();
    const visibility = zoom <= 9 ? 'none' : 'visible';
    const roadLayers = ['highway_major', 'highway_minor', 'highway_other', 'railway'];

    roadLayers.forEach(layerId => {
        if (map.getLayer(layerId)) {
            map.setLayoutProperty(layerId, 'visibility', visibility);
        }
    });
}

function initMap(center, zoom, style) {
    return new maplibregl.Map({
        container: "mapContainer",
        style: createMapStyle(PALETTES[style]),
        center,
        zoom,
        interactive: true,
        preserveDrawingBuffer: true,
        attributionControl: false
    });
}

function setupMapEvents() {
    map.on("load", () => {
        const zoom = map.getZoom().toFixed(1);
        elements.zoomInput.value = zoom;
        elements.zoomValue.textContent = zoom;
        updateFooter(INITIAL_CENTER[1], INITIAL_CENTER[0]);
        updatePosterColors(PALETTES[currentStyle]);
        updateRoadVisibility();
    });

    map.on("moveend", () => {
        const zoom = map.getZoom().toFixed(1);
        elements.zoomInput.value = zoom;
        elements.zoomValue.textContent = zoom;
        const center = map.getCenter();
        updateFooter(center.lat, center.lng);
        updateRoadVisibility();
    });
}

function changeMapStyle(styleKey) {
    const center = map.getCenter();
    const zoom = map.getZoom();

    map.remove();
    currentStyle = styleKey;
    map = initMap([center.lng, center.lat], zoom, styleKey);

    map.on("load", () => {
        setStatus("Map style updated.");
        const c = map.getCenter();
        updateFooter(c.lat, c.lng);
        updatePosterColors(PALETTES[styleKey]);
        updateRoadVisibility();
    });

    map.on("moveend", () => {
        elements.zoomInput.value = map.getZoom().toFixed(1);
        const c = map.getCenter();
        updateFooter(c.lat, c.lng);
        updateRoadVisibility();
    });
}

// === GEOCODING ===
async function searchCity(name) {
    if (!name) return;

    try {
        setStatus("Searching city…");
        const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(name)}.json?key=${MAPTILER_KEY}`;
        const res = await fetch(url);

        if (!res.ok) throw new Error("Geocoding failed");

        const data = await res.json();
        if (!data.features?.length) {
            setStatus("No results found for that place.", true);
            return;
        }

        const [lon, lat] = data.features[0].center;
        map.flyTo({ center: [lon, lat], zoom: 12 });
        elements.titleInput.value = name.toUpperCase();
        updateLabels();
        updateFooter(lat, lon);
        setStatus("Location updated.");
    } catch (err) {
        console.error(err);
        setStatus("Error searching city.", true);
    }
}

// === EXPORT ===
async function downloadPoster() {
    setStatus("Rendering high-resolution poster… this may take a moment.");

    try {
        const selectedSize = elements.sizeSelect.value;
        let scale = 3;

        if (PRINT_SIZES[selectedSize]) {
            const printSize = PRINT_SIZES[selectedSize];
            const currentWidth = elements.poster.offsetWidth;
            const currentHeight = elements.poster.offsetHeight;

            const targetWidth = isLandscape ? printSize.height * TARGET_DPI : printSize.width * TARGET_DPI;
            const targetHeight = isLandscape ? printSize.width * TARGET_DPI : printSize.height * TARGET_DPI;

            const scaleX = targetWidth / currentWidth;
            const scaleY = targetHeight / currentHeight;
            scale = Math.max(scaleX, scaleY);

            const maxDim = 16384;
            const maxScale = Math.min(maxDim / currentWidth, maxDim / currentHeight);
            scale = Math.min(scale, maxScale, 12);
        }

        await new Promise(resolve => setTimeout(resolve, 100));

        const canvas = await html2canvas(elements.poster, {
            useCORS: true,
            scale,
            logging: false,
            backgroundColor: null,
            allowTaint: true,
            imageTimeout: 15000,
            width: elements.poster.offsetWidth,
            height: elements.poster.offsetHeight
        });

        if (!canvas || canvas.width === 0 || canvas.height === 0) {
            throw new Error("Canvas rendering failed");
        }

        const blob = await new Promise((resolve, reject) => {
            canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("Failed to create image")), "image/png", 1.0);
        });

        const dataUrl = URL.createObjectURL(blob);
        const cityName = elements.cityTitle.textContent.replace(/\s+/g, "_").toLowerCase() || "city";
        const timestamp = Date.now();

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${cityName}_${selectedSize}_600dpi_${timestamp}.png`;
        link.click();

        setTimeout(() => URL.revokeObjectURL(dataUrl), 1000);

        const sizeMB = (blob.size / 1024 / 1024).toFixed(1);
        const dpi = Math.round(canvas.width / (PRINT_SIZES[selectedSize]?.width || 24));
        setStatus(`Poster downloaded (${canvas.width} × ${canvas.height} px @ ~${dpi} DPI, ${sizeMB}MB).`);
    } catch (err) {
        console.error("Download error:", err);
        setStatus(`Error: ${err.message}. Try a smaller size or refresh.`, true);
    }
}

// === EVENT LISTENERS ===
function setupEventListeners() {
    // Zoom slider
    elements.zoomInput.addEventListener("input", () => {
        const zoom = parseFloat(elements.zoomInput.value);
        elements.zoomValue.textContent = zoom.toFixed(1);
        map.setZoom(zoom);
    });

    // Zoom increment button
    elements.zoomIncrement.addEventListener("click", () => {
        const currentZoom = parseFloat(elements.zoomInput.value);
        const newZoom = Math.min(20, currentZoom + 0.5);
        elements.zoomInput.value = newZoom;
        elements.zoomValue.textContent = newZoom.toFixed(1);
        map.setZoom(newZoom);
    });

    // Zoom decrement button
    elements.zoomDecrement.addEventListener("click", () => {
        const currentZoom = parseFloat(elements.zoomInput.value);
        const newZoom = Math.max(1, currentZoom - 0.5);
        elements.zoomInput.value = newZoom;
        elements.zoomValue.textContent = newZoom.toFixed(1);
        map.setZoom(newZoom);
    });

    // Style select
    elements.styleSelect.addEventListener("change", () => {
        setStatus("Updating map style…");
        changeMapStyle(elements.styleSelect.value);
        updateSelectedThemePreview(elements.styleSelect.value);
    });

    // Theme grid toggle
    elements.toggleThemesGrid.addEventListener("click", () => {
        const isCollapsed = elements.themesGrid.classList.toggle('collapsed');
        elements.toggleThemesGrid.textContent = isCollapsed ? 'Show all' : 'Show less';
    });

    // Poster layout style
    elements.posterStyleSelect.addEventListener("change", () => {
        elements.poster.className = elements.poster.className.replace(/poster-style-\w+/g, '').trim();
        elements.poster.classList.add(`poster-style-${elements.posterStyleSelect.value}`);
    });

    // Print size
    elements.sizeSelect.addEventListener("change", () => {
        elements.poster.className = elements.poster.className.replace(/size-\S+/g, '').trim();
        const size = elements.sizeSelect.value;
        if (size !== 'default') {
            elements.poster.classList.add(`size-${size}`);
        }
    });

    // City search
    elements.cityInput.addEventListener("keydown", e => {
        if (e.key === "Enter") searchCity(elements.cityInput.value.trim());
    });

    // Download
    elements.downloadBtn.addEventListener("click", downloadPoster);

    // Orientation toggle
    elements.orientationToggle.addEventListener("click", () => {
        isLandscape = !isLandscape;
        elements.orientationToggle.classList.toggle("active", isLandscape);
        elements.poster.classList.toggle("landscape", isLandscape);
    });

    // Labels toggle
    elements.labelsToggle.addEventListener("click", () => {
        labelsEnabled = !labelsEnabled;
        elements.labelsToggle.classList.toggle("active", labelsEnabled);
        updateLabels();
    });

    // Label inputs
    elements.titleInput.addEventListener("input", updateLabels);
    elements.subtitleInput.addEventListener("input", updateLabels);
    elements.taglineInput.addEventListener("input", () => {
        updateLabels();
        if (!elements.taglineInput.value.trim()) {
            const center = map.getCenter();
            updateFooter(center.lat, center.lng);
        }
    });
}

// === INITIALIZATION ===
function init() {
    map = initMap(INITIAL_CENTER, INITIAL_ZOOM, currentStyle);
    setupMapEvents();
    setupEventListeners();

    elements.cityInput.value = "Havana";
    updateLabels();

    // Initialize theme previews
    generateThemesGrid();
    updateSelectedThemePreview(currentStyle);
}

// Start the app
init();
