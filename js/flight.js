// === CONFIGURATION ===
const MAPTILER_KEY = "2Q7XT8l9Iqoe1Z9gbvHw";

// === COLOR PALETTES (5 best for social media) ===
const PALETTES = {
    'Noir': { bg: '#111111', roads: '#EEEEEE', water: '#111111', buildings: '#111111', parks: '#111111' },
    'Blueprint': { bg: '#0d1c87', roads: '#FFFFFF', water: '#0d1c87', buildings: '#0d1c87', parks: '#0d1c87' },
    'Emerald': { bg: '#064e3b', roads: '#a7f3d0', water: '#064e3b', buildings: '#064e3b', parks: '#064e3b' },
    'Rose': { bg: '#4c0519', roads: '#fda4af', water: '#4c0519', buildings: '#4c0519', parks: '#4c0519' },
    'Minimal': { bg: '#ffffff', roads: '#222222', water: '#dce6f0', buildings: '#ffffff', parks: '#ffffff' },
};

const PALETTE_CATEGORIES = [
    { label: 'Themes', keys: ['Noir', 'Blueprint', 'Emerald', 'Rose', 'Minimal'] },
];

// Extra pixels around the visible frame to preload tiles and prevent flickering
const MAP_OVERFLOW = 200;

// === TOP 150 CITIES ===
const WORLD_CITIES = {
    'Tokyo': { en: 'The Land of the Rising Sun', es: 'La Tierra del Sol Naciente', lat: 35.6769, lon: 139.7639 },
    'Delhi': { en: 'The Heart of India', es: 'El Corazon de la India', lat: 28.6328, lon: 77.2198 },
    'Shanghai': { en: 'The Pearl of the Orient', es: 'La Perla de Oriente', lat: 31.2313, lon: 121.47 },
    'Beijing': { en: 'The Forbidden City', es: 'La Ciudad Prohibida', lat: 39.9057, lon: 116.3913 },
    'Mumbai': { en: 'The City of Dreams', es: 'La Ciudad de los Suenos', lat: 19.055, lon: 72.8692 },
    'Osaka': { en: 'The Nation\'s Kitchen', es: 'La Cocina de la Nacion', lat: 34.6938, lon: 135.5015 },
    'Seoul': { en: 'The Soul of Asia', es: 'El Alma de Asia', lat: 37.5667, lon: 126.9783 },
    'Singapore': { en: 'The Lion City', es: 'La Ciudad del Leon', lat: 1.3571, lon: 103.8195 },
    'Hong Kong': { en: 'The Pearl of the Orient', es: 'La Perla de Oriente', lat: 22.2793, lon: 114.1629 },
    'Bangkok': { en: 'The City of Angels', es: 'La Ciudad de los Angeles', lat: 13.7525, lon: 100.4935 },
    'Dubai': { en: 'The City of Gold', es: 'La Ciudad del Oro', lat: 25.2296, lon: 55.2896 },
    'Istanbul': { en: 'Where East Meets West', es: 'Donde el Este se Encuentra con el Oeste', lat: 41.0064, lon: 28.9759 },
    'London': { en: 'The Big Smoke', es: 'La Gran Nube', lat: 51.5074, lon: -0.1278 },
    'Paris': { en: 'The City of Light', es: 'La Ciudad de la Luz', lat: 48.8535, lon: 2.3484 },
    'Berlin': { en: 'The City of Freedom', es: 'La Ciudad de la Libertad', lat: 52.5174, lon: 13.3951 },
    'Madrid': { en: 'The City That Never Sleeps', es: 'La Ciudad que Nunca Duerme', lat: 40.4168, lon: -3.7035 },
    'Rome': { en: 'The Eternal City', es: 'La Ciudad Eterna', lat: 41.8933, lon: 12.4829 },
    'Barcelona': { en: 'The City of Counts', es: 'La Ciudad de los Condes', lat: 41.3826, lon: 2.1771 },
    'Amsterdam': { en: 'The Venice of the North', es: 'La Venecia del Norte', lat: 52.3731, lon: 4.8925 },
    'Vienna': { en: 'The City of Music', es: 'La Ciudad de la Musica', lat: 48.2084, lon: 16.3725 },
    'Prague': { en: 'The City of a Hundred Spires', es: 'La Ciudad de las Cien Torres', lat: 50.0875, lon: 14.4213 },
    'Lisbon': { en: 'The City of Seven Hills', es: 'La Ciudad de las Siete Colinas', lat: 38.7078, lon: -9.1366 },
    'Athens': { en: 'The Cradle of Civilization', es: 'La Cuna de la Civilizacion', lat: 37.9756, lon: 23.7348 },
    'New York': { en: 'The Big Apple', es: 'La Gran Manzana', lat: 40.7127, lon: -74.006 },
    'Los Angeles': { en: 'The City of Angels', es: 'La Ciudad de los Angeles', lat: 34.0537, lon: -118.2428 },
    'Chicago': { en: 'The Windy City', es: 'La Ciudad del Viento', lat: 41.8756, lon: -87.6244 },
    'San Francisco': { en: 'The Golden Gate City', es: 'La Ciudad del Golden Gate', lat: 37.7879, lon: -122.4075 },
    'Miami': { en: 'The Magic City', es: 'La Ciudad Magica', lat: 25.7742, lon: -80.1936 },
    'Toronto': { en: 'The Six', es: 'El Seis', lat: 43.6535, lon: -79.3839 },
    'Mexico City': { en: 'The City of Palaces', es: 'La Ciudad de los Palacios', lat: 19.4326, lon: -99.1332 },
    'Sao Paulo': { en: 'The Concrete Jungle', es: 'La Jungla de Concreto', lat: -23.5507, lon: -46.6334 },
    'Rio de Janeiro': { en: 'The Marvelous City', es: 'La Ciudad Maravillosa', lat: -22.911, lon: -43.2094 },
    'Buenos Aires': { en: 'The Paris of South America', es: 'El Paris de Sudamerica', lat: -34.6096, lon: -58.3888 },
    'Lima': { en: 'The City of Kings', es: 'La Ciudad de los Reyes', lat: -12.046, lon: -77.0306 },
    'Bogota': { en: 'The Athens of South America', es: 'La Atenas de Sudamerica', lat: 4.6534, lon: -74.0836 },
    'Santiago': { en: 'The Jewel of the Andes', es: 'La Joya de los Andes', lat: -33.4378, lon: -70.6505 },
    'Cairo': { en: 'The City of a Thousand Minarets', es: 'La Ciudad de los Mil Minaretes', lat: 29.9839, lon: 31.6015 },
    'Cape Town': { en: 'The Mother City', es: 'La Ciudad Madre', lat: -33.9288, lon: 18.4172 },
    'Sydney': { en: 'The Harbour City', es: 'La Ciudad del Puerto', lat: -33.8698, lon: 151.2083 },
    'Melbourne': { en: 'The Garden City', es: 'La Ciudad Jardin', lat: -37.8142, lon: 144.9632 },
    'Auckland': { en: 'The City of Sails', es: 'La Ciudad de las Velas', lat: -36.8521, lon: 174.7632 },
};

const CITY_ALIASES_ES = {
    'tokio': 'Tokyo', 'seul': 'Seoul', 'singapur': 'Singapore',
    'roma': 'Rome', 'viena': 'Vienna', 'lisboa': 'Lisbon', 'atenas': 'Athens',
    'praga': 'Prague', 'estambul': 'Istanbul', 'nueva york': 'New York',
    'ciudad de mexico': 'Mexico City', 'el cairo': 'Cairo',
    'ciudad del cabo': 'Cape Town', 'rio de janeiro': 'Rio de Janeiro',
};

// === I18N ===
const APP_LANG = document.documentElement.lang?.toLowerCase().startsWith('es') ? 'es' : 'en';
const I18N = {
    en: {
        origin: 'Origin',
        destination: 'Destination',
        startFlight: 'Start Flight',
        pause: 'Pause',
        resume: 'Resume',
        reset: 'Reset',
        speed: 'Speed',
        cameraMode: 'Camera',
        follow: 'Follow',
        overview: 'Overview',
        theme: 'Theme',
        flightInfo: 'Flight Info',
        distance: 'Distance',
        eta: 'ETA',
        progress: 'Progress',
        selectCities: 'Select origin and destination cities',
        flying: 'Flying...',
        flightComplete: 'Flight complete!',
        searching: 'Searching...',
        toggleShowAll: 'Show all',
        toggleShowLess: 'Show less',
    },
    es: {
        origin: 'Origen',
        destination: 'Destino',
        startFlight: 'Iniciar Vuelo',
        pause: 'Pausar',
        resume: 'Reanudar',
        reset: 'Reiniciar',
        speed: 'Velocidad',
        cameraMode: 'Camara',
        follow: 'Seguir',
        overview: 'General',
        theme: 'Tema',
        flightInfo: 'Info de Vuelo',
        distance: 'Distancia',
        eta: 'Tiempo Est.',
        progress: 'Progreso',
        selectCities: 'Selecciona ciudades de origen y destino',
        flying: 'Volando...',
        flightComplete: 'Vuelo completado!',
        searching: 'Buscando...',
        toggleShowAll: 'Mostrar todos',
        toggleShowLess: 'Mostrar menos',
    }
};

function t(key) {
    return (I18N[APP_LANG] || I18N.en)[key] || I18N.en[key] || key;
}

// === UTILITY FUNCTIONS ===
function isLightColor(hexColor) {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return ((r * 299) + (g * 587) + (b * 114)) / 1000 > 155;
}

function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// === MAP STYLE ===
function createMapStyle(palette) {
    const isDark = !isLightColor(palette.bg);
    const alphaBoost = isDark ? 3.0 : 1.0;

    const ensureContrast = (color, minDist) => {
        if (!isDark) return color;
        const parse = (hex) => {
            const h = hex.replace('#', '');
            return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)];
        };
        const [br, bgr, bb] = parse(palette.bg);
        const [cr, cg, cb] = parse(color);
        const dist = Math.sqrt((br - cr) ** 2 + (bgr - cg) ** 2 + (bb - cb) ** 2);
        if (dist >= minDist) return color;
        const offset = Math.ceil(minDist / 1.73) + 1;
        const nr = Math.min(255, br + offset);
        const ng = Math.min(255, bgr + offset);
        const nb = Math.min(255, bb + offset);
        return '#' + [nr, ng, nb].map(v => v.toString(16).padStart(2, '0')).join('');
    };

    const waterColor = ensureContrast(palette.water, 35);
    const buildingColor = palette.buildings ? ensureContrast(palette.buildings, 30) : null;

    const w = (z4, z6, z8, z10, z12, z14, z16, z18) => [
        'interpolate', ['exponential', 1.4], ['zoom'],
        4, z4, 6, z6, 8, z8, 10, z10, 12, z12, 14, z14, 16, z16, 18, z18
    ];

    const roadsAlpha = (opacity) => {
        const hex = palette.roads.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        return `rgba(${r},${g},${b},${Math.min(opacity * alphaBoost, 1)})`;
    };
    const waterAlpha = (opacity) => {
        const hex = palette.water.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        return `rgba(${r},${g},${b},${Math.min(opacity * alphaBoost, 1)})`;
    };

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
            { id: 'water', type: 'fill', source: 'openmaptiles', 'source-layer': 'water', paint: { 'fill-color': waterColor } },
            { id: 'waterway', type: 'line', source: 'openmaptiles', 'source-layer': 'waterway', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': waterColor, 'line-width': w(0, 0.3, 0.5, 0.8, 1.2, 1.8, 2.4, 3.0), 'line-opacity': 0.85 } },
            { id: 'highway_major', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'motorway', 'trunk', 'primary'], layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': palette.roads, 'line-width': w(0.1, 0.2, 0.4, 0.8, 1.4, 2.0, 2.8, 3.4) } },
            { id: 'highway_minor', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'secondary', 'tertiary'], minzoom: 7, layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': palette.roads, 'line-width': w(0, 0.1, 0.3, 0.6, 1.0, 1.6, 2.2, 2.8) } },
            { id: 'highway_other', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'minor', 'service', 'track'], minzoom: 12, layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': palette.roads, 'line-width': w(0, 0, 0.1, 0.3, 0.6, 1.0, 1.4, 1.8), 'line-opacity': 0.5 } },
            { id: 'railway', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'rail', 'transit'], minzoom: 9, layout: { 'line-cap': 'butt', 'line-join': 'miter' }, paint: { 'line-color': roadsAlpha(0.4), 'line-width': w(0, 0.1, 0.3, 0.5, 0.8, 1.0, 1.3, 1.6), 'line-dasharray': [3, 2] } }
        ]
    };
}

// === DOM ELEMENTS ===
const el = {
    originInput: document.getElementById('originInput'),
    destInput: document.getElementById('destInput'),
    originAutocomplete: document.getElementById('originAutocomplete'),
    destAutocomplete: document.getElementById('destAutocomplete'),
    startBtn: document.getElementById('startFlightBtn'),
    pauseBtn: document.getElementById('pauseBtn'),
    resetBtn: document.getElementById('resetBtn'),
    speedSlider: document.getElementById('speedSlider'),
    speedValue: document.getElementById('speedValue'),
    cameraModeBtn: document.getElementById('cameraModeBtn'),
    styleSelect: document.getElementById('styleSelect'),
    themesGrid: document.getElementById('themesGrid'),

    hudOrigin: document.getElementById('hudOrigin'),
    hudDest: document.getElementById('hudDest'),
    hudDistance: document.getElementById('hudDistance'),
    hudEta: document.getElementById('hudEta'),
    hudProgress: document.getElementById('hudProgress'),
    progressBar: document.getElementById('progressBar'),
    progressFill: document.getElementById('progressFill'),
    flightHud: document.getElementById('flightHud'),
    panelToggleBtn: document.getElementById('panelToggleBtn'),
    panelCloseBtn: document.getElementById('panelCloseBtn'),
    controls: document.getElementById('controls'),
    statusText: document.getElementById('statusText'),
    formatSelect: document.getElementById('formatSelect'),
    formatSizeText: document.getElementById('formatSizeText'),
};

// === STATE ===
let map;
let currentStyle = 'Noir';
let animationId = null;
let flightProgress = 0;
let flightSpeed = 0.0008;
let isPlaying = false;
let cameraFollow = true;
let arcCoordinates = [];
let originCoords = { lat: 40.7128, lon: -74.0060 };
let destCoords = { lat: 48.8566, lon: 2.3522 };
let originName = 'New York';
let destName = 'Paris';
let flightLayersAdded = false;
let flightDistance = 0; // km
let canvasFormat = 'free'; // 'free', 'reel', 'feed', 'square', 'landscape'

// Social media video formats (CSS px — renders at 2× on Retina for native upload resolution)
const CANVAS_FORMATS = {
    free: { label: 'Free', width: null, height: null },
    reel: { label: 'Reel / TikTok 9:16', width: 540, height: 960 },
    feed: { label: 'Feed Post 4:5', width: 540, height: 675 },
    square: { label: 'Square 1:1', width: 540, height: 540 },
    landscape: { label: 'Landscape 16:9', width: 960, height: 540 },
};

// Zoom config for cinematic flight
const STREET_ZOOM = 13.5;     // city-level detail at origin/destination
const TAKEOFF_PHASE = 0.20;   // 0-20% = takeoff (zoom out)
const LANDING_PHASE = 0.70;   // 70-100% = landing (zoom in)

function getCruiseZoom(distKm) {
    if (distKm < 200) return 10;
    if (distKm < 500) return 8.5;
    if (distKm < 1500) return 7;
    if (distKm < 4000) return 5.5;
    if (distKm < 8000) return 4.5;
    return 3.5;
}

// Easing curves
function smootherStep(t) {
    return t * t * (3 - 2 * t);
}

function getFlightZoom(progress) {
    const cruiseZoom = getCruiseZoom(flightDistance);

    if (progress <= TAKEOFF_PHASE) {
        const t = progress / TAKEOFF_PHASE;
        return STREET_ZOOM + (cruiseZoom - STREET_ZOOM) * smootherStep(t);
    } else if (progress >= LANDING_PHASE) {
        const t = (progress - LANDING_PHASE) / (1 - LANDING_PHASE);
        return cruiseZoom + (STREET_ZOOM - cruiseZoom) * smootherStep(t);
    } else {
        return cruiseZoom;
    }
}

// Speed multiplier: slow during takeoff/landing for cinematic detail
function getPhaseSpeedMult(progress) {
    if (progress <= TAKEOFF_PHASE) {
        const t = progress / TAKEOFF_PHASE;
        return 0.05 + 0.95 * smootherStep(t);
    } else if (progress >= LANDING_PHASE) {
        const t = (progress - LANDING_PHASE) / (1 - LANDING_PHASE);
        return 1.0 - 0.95 * smootherStep(t);
    }
    return 1.0;
}

function applyCanvasFormat(format) {
    canvasFormat = format;
    const mapArea = document.getElementById('mapArea');
    const mapContainer = document.getElementById('mapContainer');
    const spec = CANVAS_FORMATS[format];

    if (!spec || !spec.width) {
        // Free mode: fill available space, no overflow trick needed
        mapArea.style.width = '100%';
        mapArea.style.height = '100%';
        mapArea.style.maxWidth = '';
        mapArea.style.maxHeight = '';
        mapContainer.style.position = 'relative';
        mapContainer.style.width = '100%';
        mapContainer.style.height = '100%';
        mapContainer.style.top = '0';
        mapContainer.style.left = '0';
        if (el.formatSizeText) el.formatSizeText.textContent = '';
    } else {
        // Fixed frame: mapArea = visible frame, mapContainer = larger canvas for tile preloading
        mapArea.style.width = spec.width + 'px';
        mapArea.style.height = spec.height + 'px';
        mapArea.style.maxWidth = '100%';
        mapArea.style.maxHeight = '100%';

        // Map canvas extends beyond frame by MAP_OVERFLOW on each side
        mapContainer.style.position = 'absolute';
        mapContainer.style.width = (spec.width + MAP_OVERFLOW * 2) + 'px';
        mapContainer.style.height = (spec.height + MAP_OVERFLOW * 2) + 'px';
        mapContainer.style.top = -MAP_OVERFLOW + 'px';
        mapContainer.style.left = -MAP_OVERFLOW + 'px';
        if (el.formatSizeText) el.formatSizeText.textContent = `${spec.width} × ${spec.height} px`;
    }

    if (map) {
        setTimeout(() => map.resize(), 50);
    }
}

// === PLANE ICON SVG (realistic top-down airliner) ===
const PLANE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <g fill="{COLOR}" transform="translate(64,64)">
    <path d="M0-56 C-4-56-6-52-6-48 L-6-16 L-40 8 C-42 9-44 12-44 15 L-44 18 L-6 10 L-6 32 L-14 40 L-14 46 L0 42 L14 46 L14 40 L6 32 L6 10 L44 18 L44 15 C44 12 42 9 40 8 L6-16 L6-48 C6-52 4-56 0-56Z"/>
  </g>
</svg>`;

// === GREAT CIRCLE ARC ===
function generateGreatCircleArc(origin, destination, numPoints = 200) {
    const toRad = d => d * Math.PI / 180;
    const toDeg = r => r * 180 / Math.PI;

    const lat1 = toRad(origin.lat), lon1 = toRad(origin.lon);
    const lat2 = toRad(destination.lat), lon2 = toRad(destination.lon);

    const d = 2 * Math.asin(Math.sqrt(
        Math.sin((lat2 - lat1) / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2
    ));

    if (d < 0.0001) {
        return [
            [origin.lon, origin.lat],
            [destination.lon, destination.lat]
        ];
    }

    const points = [];
    for (let i = 0; i <= numPoints; i++) {
        const f = i / numPoints;
        const A = Math.sin((1 - f) * d) / Math.sin(d);
        const B = Math.sin(f * d) / Math.sin(d);
        const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
        const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
        const z = A * Math.sin(lat1) + B * Math.sin(lat2);
        const lat = toDeg(Math.atan2(z, Math.sqrt(x * x + y * y)));
        const lon = toDeg(Math.atan2(y, x));
        points.push([lon, lat]);
    }
    return points;
}

function calculateBearing(lat1, lon1, lat2, lon2) {
    const toRad = d => d * Math.PI / 180;
    const toDeg = r => r * 180 / Math.PI;
    const dLon = toRad(lon2 - lon1);
    const y = Math.sin(dLon) * Math.cos(toRad(lat2));
    const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
        Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
    return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// === MAP FUNCTIONS ===
function initMap(center, zoom, style) {
    return new maplibregl.Map({
        container: 'mapContainer',
        style: createMapStyle(PALETTES[style]),
        center,
        zoom,
        interactive: true,
        preserveDrawingBuffer: true,
        attributionControl: false,
        fadeDuration: 300
    });
}

function getPlaneIconColor() {
    const palette = PALETTES[currentStyle];
    return isLightColor(palette.bg) ? '#000000' : '#FFFFFF';
}

function createPlaneImage() {
    return new Promise((resolve) => {
        const color = getPlaneIconColor();
        const svg = PLANE_SVG.replace('{COLOR}', color);
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, 128, 128);
            resolve(ctx.getImageData(0, 0, 128, 128));
        };
        img.onerror = () => {
            // Fallback: draw a simple triangle plane on canvas
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(32, 4);
            ctx.lineTo(12, 54);
            ctx.lineTo(32, 44);
            ctx.lineTo(52, 54);
            ctx.closePath();
            ctx.fill();
            resolve(ctx.getImageData(0, 0, 64, 64));
        };
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
}

function setupFlightLayers() {
    if (flightLayersAdded) return;

    const palette = PALETTES[currentStyle];
    const pathColor = palette.roads;

    map.addSource('flight-path', {
        type: 'geojson',
        data: { type: 'Feature', geometry: { type: 'LineString', coordinates: [] } }
    });

    map.addLayer({
        id: 'flight-path-line',
        type: 'line',
        source: 'flight-path',
        paint: {
            'line-color': pathColor,
            'line-width': 2.5,
            'line-dasharray': [4, 4],
            'line-opacity': 0.5
        }
    });

    map.addSource('flight-traveled', {
        type: 'geojson',
        data: { type: 'Feature', geometry: { type: 'LineString', coordinates: [] } }
    });

    map.addLayer({
        id: 'flight-traveled-line',
        type: 'line',
        source: 'flight-traveled',
        paint: {
            'line-color': pathColor,
            'line-width': 3,
            'line-opacity': 0.9
        }
    });

    map.addSource('plane-point', {
        type: 'geojson',
        data: { type: 'Feature', geometry: { type: 'Point', coordinates: [0, 0] }, properties: { bearing: 0 } }
    });

    createPlaneImage().then(imageData => {
        if (map.hasImage('plane-icon')) map.removeImage('plane-icon');
        map.addImage('plane-icon', imageData, { sdf: false });

        map.addLayer({
            id: 'plane-layer',
            type: 'symbol',
            source: 'plane-point',
            layout: {
                'icon-image': 'plane-icon',
                'icon-size': [
                    'interpolate', ['linear'], ['zoom'],
                    2, 0.3,
                    6, 0.4,
                    10, 0.5,
                    14, 0.6
                ],
                'icon-rotate': ['get', 'bearing'],
                'icon-rotation-alignment': 'map',
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
                'visibility': 'none'
            }
        });
    });

    // Origin/destination markers
    map.addSource('endpoints', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] }
    });

    map.addLayer({
        id: 'endpoints-layer',
        type: 'circle',
        source: 'endpoints',
        paint: {
            'circle-radius': 6,
            'circle-color': palette.roads,
            'circle-stroke-width': 2,
            'circle-stroke-color': palette.bg
        }
    });

    flightLayersAdded = true;
}

function updateFlightPath() {
    if (!map.getSource('flight-path')) return;
    map.getSource('flight-path').setData({
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: arcCoordinates }
    });
}

function updateEndpoints() {
    if (!map.getSource('endpoints') || !originCoords || !destCoords) return;
    map.getSource('endpoints').setData({
        type: 'FeatureCollection',
        features: [
            { type: 'Feature', geometry: { type: 'Point', coordinates: [originCoords.lon, originCoords.lat] } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [destCoords.lon, destCoords.lat] } }
        ]
    });
}

// === ANIMATION ===
let lastFrameTime = 0;
let lastGeoJsonUpdate = 0;
const GEOJSON_THROTTLE = 80; // ms between heavy GeoJSON updates

function animateFlight(timestamp) {
    if (!isPlaying) return;

    // Time-based animation — never pause for tiles, let fadeDuration handle tile appearance
    if (!lastFrameTime) lastFrameTime = timestamp;
    const deltaMs = Math.min(timestamp - lastFrameTime, 50); // cap at 50ms to avoid jumps
    lastFrameTime = timestamp;

    const speedMult = parseFloat(el.speedSlider.value) || 1;
    const phaseMult = getPhaseSpeedMult(flightProgress);
    flightProgress += flightSpeed * speedMult * phaseMult * (deltaMs / 16.67);

    const completed = flightProgress >= 1.0;
    if (completed) flightProgress = 1.0;

    const totalPoints = arcCoordinates.length - 1;
    const exactIndex = flightProgress * totalPoints;
    const i = Math.min(Math.floor(exactIndex), totalPoints - 1);
    const frac = exactIndex - i;
    const j = Math.min(i + 1, totalPoints);

    const currentLon = arcCoordinates[i][0] + frac * (arcCoordinates[j][0] - arcCoordinates[i][0]);
    const currentLat = arcCoordinates[i][1] + frac * (arcCoordinates[j][1] - arcCoordinates[i][1]);

    const bearing = calculateBearing(
        arcCoordinates[i][1], arcCoordinates[i][0],
        arcCoordinates[j][1], arcCoordinates[j][0]
    );

    if (map.getSource('plane-point')) {
        map.getSource('plane-point').setData({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [currentLon, currentLat] },
            properties: { bearing: bearing }
        });
    }

    // Throttle heavy GeoJSON updates (traveled path) to reduce flicker
    const shouldUpdateGeoJson = (timestamp - lastGeoJsonUpdate) >= GEOJSON_THROTTLE;
    if (shouldUpdateGeoJson) {
        lastGeoJsonUpdate = timestamp;
        const traveledCoords = arcCoordinates.slice(0, i + 1).concat([[currentLon, currentLat]]);
        if (map.getSource('flight-traveled')) {
            map.getSource('flight-traveled').setData({
                type: 'Feature',
                geometry: { type: 'LineString', coordinates: traveledCoords }
            });
        }
    }

    // Update HUD
    const pct = Math.round(flightProgress * 100);
    el.hudProgress.textContent = `${pct}%`;
    el.progressFill.style.width = `${pct}%`;

    // Cinematic camera: instant center tracking (smooth zoom comes from easing functions)
    if (cameraFollow) {
        const targetZoom = getFlightZoom(flightProgress);
        map.jumpTo({
            center: [currentLon, currentLat],
            zoom: targetZoom
        });
    }

    if (completed) {
        isPlaying = false;
        el.pauseBtn.classList.add('hidden');
        setStatus(t('flightComplete'));
        if (map.getLayer('plane-layer')) {
            map.setLayoutProperty('plane-layer', 'visibility', 'none');
        }
        return;
    }

    animationId = requestAnimationFrame(animateFlight);
}

let startFlightTimer = null;

function startFlight() {
    if (!originCoords || !destCoords) {
        setStatus(t('selectCities'));
        return;
    }

    // Cancel any in-progress flight start
    isPlaying = false;
    cancelAnimationFrame(animationId);
    if (startFlightTimer) { clearTimeout(startFlightTimer); startFlightTimer = null; }

    arcCoordinates = generateGreatCircleArc(originCoords, destCoords, 300);
    flightProgress = 0;
    lastFrameTime = 0;
    flightDistance = calculateDistance(originCoords.lat, originCoords.lon, destCoords.lat, destCoords.lon);

    setupFlightLayers();
    updateFlightPath();
    updateEndpoints();

    // Clear traveled path
    if (map.getSource('flight-traveled')) {
        map.getSource('flight-traveled').setData({
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [] }
        });
    }

    // Place plane at origin
    if (map.getSource('plane-point')) {
        const initBearing = calculateBearing(originCoords.lat, originCoords.lon, destCoords.lat, destCoords.lon);
        map.getSource('plane-point').setData({
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [originCoords.lon, originCoords.lat] },
            properties: { bearing: initBearing }
        });
    }
    // Show plane (may not exist yet if async — showPlaneWhenReady handles it)
    showPlaneWhenReady();

    // Update HUD
    const etaHours = flightDistance / 900;
    const etaH = Math.floor(etaHours);
    const etaM = Math.round((etaHours - etaH) * 60);
    el.hudOrigin.textContent = originName;
    el.hudDest.textContent = destName;
    el.hudDistance.textContent = `${Math.round(flightDistance).toLocaleString()} km`;
    el.hudEta.textContent = `${etaH}h ${etaM}m`;
    el.hudProgress.textContent = '0%';
    el.progressFill.style.width = '0%';
    el.flightHud.classList.remove('hidden');
    el.progressBar.classList.remove('hidden');

    el.pauseBtn.textContent = t('pause');
    el.pauseBtn.classList.remove('hidden');
    el.resetBtn.classList.remove('hidden');

    setStatus(t('flying'));

    function showPlaneWhenReady() {
        if (map.getLayer('plane-layer')) {
            map.setLayoutProperty('plane-layer', 'visibility', 'visible');
        } else {
            // Plane layer created async — retry shortly
            setTimeout(showPlaneWhenReady, 100);
        }
    }

    // Cinematic start: fly to origin city at street level, then begin animation
    cameraFollow = true;
    const targetCenter = [originCoords.lon, originCoords.lat];
    const currentCenter = map.getCenter();
    const currentZoom = map.getZoom();
    const dist = Math.abs(currentCenter.lng - targetCenter[0]) + Math.abs(currentCenter.lat - targetCenter[1]);
    const zoomDiff = Math.abs(currentZoom - STREET_ZOOM);

    function beginAnimation() {
        // Wait for tiles to load then start immediately
        function startWhenReady() {
            if (!map.areTilesLoaded()) {
                map.once('idle', startWhenReady);
                return;
            }
            startFlightTimer = setTimeout(() => {
                startFlightTimer = null;
                isPlaying = true;
                lastFrameTime = 0;
                animationId = requestAnimationFrame(animateFlight);
            }, 150);
        }
        startWhenReady();
    }

    // If already at origin, skip flyTo (moveend won't fire)
    if (dist < 0.001 && zoomDiff < 0.5) {
        beginAnimation();
    } else {
        map.flyTo({
            center: targetCenter,
            zoom: STREET_ZOOM,
            speed: 1.2,
            curve: 1.4,
            essential: true
        });
        map.once('moveend', beginAnimation);
    }
}

function togglePause() {
    if (!arcCoordinates.length) return;
    if (isPlaying) {
        isPlaying = false;
        cancelAnimationFrame(animationId);
        el.pauseBtn.textContent = t('resume');
    } else {
        if (flightProgress >= 1.0) return;
        isPlaying = true;
        lastFrameTime = 0; // reset so delta doesn't spike
        el.pauseBtn.textContent = t('pause');
        animationId = requestAnimationFrame(animateFlight);
        setStatus(t('flying'));
    }
}

function resetFlight() {
    isPlaying = false;
    cancelAnimationFrame(animationId);
    if (startFlightTimer) { clearTimeout(startFlightTimer); startFlightTimer = null; }
    flightProgress = 0;
    lastFrameTime = 0;
    cameraFollow = true;

    if (map.getSource('flight-traveled')) {
        map.getSource('flight-traveled').setData({
            type: 'Feature', geometry: { type: 'LineString', coordinates: [] }
        });
    }
    if (map.getSource('plane-point')) {
        map.getSource('plane-point').setData({
            type: 'Feature', geometry: { type: 'Point', coordinates: [0, 0] }, properties: { bearing: 0 }
        });
    }
    if (map.getLayer('plane-layer')) {
        map.setLayoutProperty('plane-layer', 'visibility', 'none');
    }
    if (map.getSource('flight-path')) {
        map.getSource('flight-path').setData({
            type: 'Feature', geometry: { type: 'LineString', coordinates: [] }
        });
    }
    if (map.getSource('endpoints')) {
        map.getSource('endpoints').setData({ type: 'FeatureCollection', features: [] });
    }

    el.flightHud.classList.add('hidden');
    el.progressBar.classList.add('hidden');
    el.pauseBtn.classList.add('hidden');
    el.resetBtn.classList.add('hidden');
    el.progressFill.style.width = '0%';
    el.cameraModeBtn.textContent = t('follow');
    setStatus('');
}

function setStatus(msg) {
    if (el.statusText) el.statusText.textContent = msg || '';
}

// === AUTOCOMPLETE ===
function getLocalCityMatches(query) {
    const norm = normalize(query);
    if (!norm) return [];
    const results = [];
    for (const [city, data] of Object.entries(WORLD_CITIES)) {
        if (normalize(city).startsWith(norm)) {
            results.push({ name: city, subtitle: data[APP_LANG] || data.en, lat: data.lat, lon: data.lon });
        }
    }
    if (results.length < 5) {
        for (const [city, data] of Object.entries(WORLD_CITIES)) {
            if (!normalize(city).startsWith(norm) && normalize(city).includes(norm)) {
                results.push({ name: city, subtitle: data[APP_LANG] || data.en, lat: data.lat, lon: data.lon });
            }
            if (results.length >= 5) break;
        }
    }
    if (APP_LANG === 'es') {
        for (const [alias, key] of Object.entries(CITY_ALIASES_ES)) {
            if (normalize(alias).includes(norm) && WORLD_CITIES[key] && !results.some(r => r.name === key)) {
                const data = WORLD_CITIES[key];
                results.push({ name: key, subtitle: data.es || data.en, lat: data.lat, lon: data.lon });
            }
            if (results.length >= 5) break;
        }
    }
    return results.slice(0, 5);
}

async function getApiCityMatches(query, abortSignal) {
    try {
        const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json?key=${MAPTILER_KEY}&language=${APP_LANG}&limit=5`;
        const res = await fetch(url, { signal: abortSignal });
        if (!res.ok) return [];
        const data = await res.json();
        if (!data.features?.length) return [];
        return data.features.map(f => ({
            name: f.place_name || f.text || query,
            city: f.text || query,
            subtitle: f.place_type?.[0] || '',
            lat: f.center[1],
            lon: f.center[0],
        }));
    } catch {
        return [];
    }
}

function initDualAutocomplete(inputEl, listEl, onSelect) {
    let activeIndex = -1;
    let debounceTimer = null;
    let abortController = null;

    function renderList(items) {
        if (!items.length) {
            listEl.innerHTML = '';
            listEl.classList.remove('open');
            activeIndex = -1;
            return;
        }
        listEl.innerHTML = items.map((item, i) => `
            <li role="option" data-index="${i}" data-name="${item.name.replace(/"/g, '&quot;')}" data-city="${(item.city || item.name).replace(/"/g, '&quot;')}" data-lat="${item.lat}" data-lon="${item.lon}"${i === activeIndex ? ' class="active"' : ''}>
                <span class="ac-icon"><ion-icon name="location-outline"></ion-icon></span>
                <span class="ac-city">${item.name}</span>
                <span class="ac-subtitle">${item.subtitle}</span>
            </li>
        `).join('');
        listEl.classList.add('open');

        listEl.querySelectorAll('li').forEach(li => {
            li.addEventListener('mousedown', e => {
                e.preventDefault();
                selectItem(li);
            });
        });
    }

    function selectItem(li) {
        const name = li.dataset.city || li.dataset.name;
        const lat = parseFloat(li.dataset.lat);
        const lon = parseFloat(li.dataset.lon);
        inputEl.value = name;
        closeList();
        onSelect(name, { lat, lon });
    }

    function closeList() {
        listEl.classList.remove('open');
        listEl.innerHTML = '';
        activeIndex = -1;
    }

    async function handleInput() {
        const query = inputEl.value.trim();
        if (query.length < 2) { closeList(); return; }

        const localMatches = getLocalCityMatches(query);
        if (localMatches.length > 0) { renderList(localMatches); return; }

        listEl.innerHTML = `<li class="ac-loading">${t('searching')}</li>`;
        listEl.classList.add('open');

        if (abortController) abortController.abort();
        abortController = new AbortController();
        const apiMatches = await getApiCityMatches(query, abortController.signal);
        if (inputEl.value.trim() === query) renderList(apiMatches);
    }

    inputEl.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(handleInput, 200);
    });

    inputEl.addEventListener('keydown', e => {
        const items = listEl.querySelectorAll('li[role="option"]');
        if (!items.length || !listEl.classList.contains('open')) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = Math.min(activeIndex + 1, items.length - 1);
            items.forEach((li, i) => li.classList.toggle('active', i === activeIndex));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = Math.max(activeIndex - 1, 0);
            items.forEach((li, i) => li.classList.toggle('active', i === activeIndex));
        } else if (e.key === 'Enter' && activeIndex >= 0) {
            e.preventDefault();
            selectItem(items[activeIndex]);
        } else if (e.key === 'Escape') {
            closeList();
        }
    });

    inputEl.addEventListener('blur', () => setTimeout(closeList, 150));
}

// === THEME ===
function changeMapStyle(styleKey) {
    const { lng, lat } = map.getCenter();
    const zoom = map.getZoom();
    const wasPlaying = isPlaying;
    if (isPlaying) {
        isPlaying = false;
        cancelAnimationFrame(animationId);
    }

    map.remove();
    currentStyle = styleKey;
    localStorage.setItem('mapi_flight_theme', styleKey);
    flightLayersAdded = false;
    map = initMap([lng, lat], zoom, styleKey);

    map.on('load', () => {
        setupFlightLayers();
        if (arcCoordinates.length) {
            updateFlightPath();
            updateEndpoints();

            // Restore traveled path up to current progress
            const totalPoints = arcCoordinates.length - 1;
            const idx = Math.floor(flightProgress * totalPoints);
            const traveledCoords = arcCoordinates.slice(0, idx + 1);
            if (map.getSource('flight-traveled')) {
                map.getSource('flight-traveled').setData({
                    type: 'Feature',
                    geometry: { type: 'LineString', coordinates: traveledCoords }
                });
            }

            // Restore plane position
            if (idx < totalPoints && map.getSource('plane-point')) {
                const bearing = calculateBearing(
                    arcCoordinates[idx][1], arcCoordinates[idx][0],
                    arcCoordinates[Math.min(idx + 1, totalPoints)][1], arcCoordinates[Math.min(idx + 1, totalPoints)][0]
                );
                map.getSource('plane-point').setData({
                    type: 'Feature',
                    geometry: { type: 'Point', coordinates: arcCoordinates[idx] },
                    properties: { bearing }
                });
            }
        }
        if (wasPlaying && flightProgress < 1.0) {
            isPlaying = true;
            lastFrameTime = 0;
            animationId = requestAnimationFrame(animateFlight);
        }
    });
}

function generateThemesGrid() {
    el.themesGrid.innerHTML = '';
    Object.entries(PALETTES).forEach(([name, palette]) => {
        const swatch = document.createElement('div');
        swatch.className = 'theme-swatch';
        if (name === currentStyle) swatch.classList.add('selected');
        swatch.style.setProperty('--swatch-bg', palette.bg);
        swatch.style.setProperty('--swatch-roads', palette.roads);
        swatch.style.setProperty('--swatch-water', palette.water);
        swatch.dataset.theme = name;
        swatch.title = name;

        const roads = document.createElement('div');
        roads.className = 'roads';
        swatch.appendChild(roads);

        swatch.addEventListener('click', () => {
            el.styleSelect.value = name;
            changeMapStyle(name);
            document.querySelectorAll('.theme-swatch').forEach(s => s.classList.toggle('selected', s.dataset.theme === name));
        });

        el.themesGrid.appendChild(swatch);
    });
}

function populateStyleSelect() {
    el.styleSelect.innerHTML = '';
    PALETTE_CATEGORIES.forEach(({ label, keys }) => {
        const group = document.createElement('optgroup');
        group.label = label;
        keys.forEach(name => {
            if (!PALETTES[name]) return;
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            if (name === currentStyle) option.selected = true;
            group.appendChild(option);
        });
        el.styleSelect.appendChild(group);
    });
}

// === PANEL TOGGLE ===
function setupPanelToggle() {
    const mobileQuery = window.matchMedia('(max-width: 900px)');
    const container = document.getElementById('container');

    const syncPanelState = () => {
        const isHidden = el.controls.classList.contains('panel-hidden');
        el.panelToggleBtn.setAttribute('aria-expanded', String(!isHidden));
        if (container) container.classList.toggle('panel-collapsed', isHidden);
    };

    el.panelToggleBtn.addEventListener('click', () => {
        el.controls.classList.toggle('panel-hidden');
        syncPanelState();
        setTimeout(() => map.resize(), 310);
    });

    el.panelCloseBtn.addEventListener('click', () => {
        el.controls.classList.add('panel-hidden');
        syncPanelState();
        setTimeout(() => map.resize(), 310);
    });

    mobileQuery.addEventListener('change', () => {
        if (mobileQuery.matches) el.controls.classList.add('panel-hidden');
        syncPanelState();
        setTimeout(() => map.resize(), 310);
    });

    if (mobileQuery.matches) el.controls.classList.add('panel-hidden');
    syncPanelState();
}

// === EVENT LISTENERS ===
function setupEventListeners() {
    el.startBtn.addEventListener('click', startFlight);
    el.pauseBtn.addEventListener('click', togglePause);
    el.resetBtn.addEventListener('click', resetFlight);

    el.speedSlider.addEventListener('input', () => {
        el.speedValue.textContent = `${el.speedSlider.value}x`;
    });

    el.cameraModeBtn.addEventListener('click', () => {
        cameraFollow = !cameraFollow;
        el.cameraModeBtn.textContent = cameraFollow ? t('follow') : t('overview');
        if (!cameraFollow && arcCoordinates.length) {
            // Switch to overview: show full route
            const bounds = arcCoordinates.reduce(
                (b, coord) => b.extend(coord),
                new maplibregl.LngLatBounds(arcCoordinates[0], arcCoordinates[0])
            );
            // Add MAP_OVERFLOW to padding so the route fits within the visible mapArea,
            // not the larger mapContainer that extends beyond the frame
            const spec = CANVAS_FORMATS[canvasFormat];
            const overflowPad = (spec && spec.width) ? MAP_OVERFLOW : 0;
            map.fitBounds(bounds, { padding: 80 + overflowPad, duration: 800 });
        } else if (cameraFollow && arcCoordinates.length && flightProgress > 0) {
            // Switch back to follow: snap to current plane position with cinematic zoom
            const totalPoints = arcCoordinates.length - 1;
            const idx = Math.min(Math.floor(flightProgress * totalPoints), totalPoints);
            map.flyTo({
                center: arcCoordinates[idx],
                zoom: getFlightZoom(flightProgress),
                duration: 800
            });
        }
    });

    el.styleSelect.addEventListener('change', () => {
        const style = el.styleSelect.value;
        changeMapStyle(style);
        document.querySelectorAll('.theme-swatch').forEach(s => s.classList.toggle('selected', s.dataset.theme === style));
    });

    el.formatSelect.addEventListener('change', () => {
        applyCanvasFormat(el.formatSelect.value);
    });



    initDualAutocomplete(el.originInput, el.originAutocomplete, (name, coords) => {
        originName = name;
        originCoords = coords;
    });

    initDualAutocomplete(el.destInput, el.destAutocomplete, (name, coords) => {
        destName = name;
        destCoords = coords;
    });

    // Pre-fill inputs with default cities
    el.originInput.value = originName;
    el.destInput.value = destName;
}

// === INIT ===
function init() {
    const savedTheme = localStorage.getItem('mapi_flight_theme');
    if (savedTheme && PALETTES[savedTheme]) currentStyle = savedTheme;

    // Apply initial canvas format (default: reel for Instagram)
    const initialFormat = el.formatSelect?.value || 'reel';
    applyCanvasFormat(initialFormat);

    map = initMap([originCoords.lon, originCoords.lat], STREET_ZOOM, currentStyle);
    map.on('load', () => {
        setupFlightLayers();
        map.resize();
    });

    setupEventListeners();
    setupPanelToggle();
    populateStyleSelect();
    generateThemesGrid();

    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer && typeof ResizeObserver !== 'undefined') {
        let resizeRaf;
        new ResizeObserver(() => {
            cancelAnimationFrame(resizeRaf);
            resizeRaf = requestAnimationFrame(() => { if (map) map.resize(); });
        }).observe(mapContainer);
    }
}

init();
