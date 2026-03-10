// === CONFIGURATION ===
const MAPTILER_KEY = "2Q7XT8l9Iqoe1Z9gbvHw";

// === COLOR PALETTES (5 best for social media) ===
const PALETTES = {
    'Noir': { bg: '#111111', roads: '#EEEEEE', water: '#111111' },
    'Blueprint': { bg: '#0d1c87', roads: '#FFFFFF', water: '#0d1c87' },
    'Emerald': { bg: '#064e3b', roads: '#a7f3d0', water: '#064e3b' },
    'Tangerine': { bg: '#000000', roads: '#ff4b00', water: '#ffffff' },
    'Royal Blue': { bg: '#ffffff', roads: '#000000', water: '#2e22e0' },
};

const PALETTE_CATEGORIES = [
    { label: 'Themes', keys: ['Noir', 'Blueprint', 'Emerald', 'Tangerine', 'Royal Blue'] },
];

// Speed is now read directly from the slider (min 0.25, max 2, step 0.25)

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
const toRad = d => d * Math.PI / 180;
const toDeg = r => r * 180 / Math.PI;

function parseHex(hex) {
    const h = hex.replace('#', '');
    return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)];
}

function hexToRgba(hex, opacity, alphaBoost = 1) {
    const [r, g, b] = parseHex(hex);
    return `rgba(${r},${g},${b},${Math.min(opacity * alphaBoost, 1)})`;
}

function isLightColor(hexColor) {
    const [r, g, b] = parseHex(hexColor);
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
        const [br, bgr, bb] = parseHex(palette.bg);
        const [cr, cg, cb] = parseHex(color);
        const dist = Math.sqrt((br - cr) ** 2 + (bgr - cg) ** 2 + (bb - cb) ** 2);
        if (dist >= minDist) return color;
        const offset = Math.ceil(minDist / 1.73) + 1;
        return '#' + [br, bgr, bb].map(v => Math.min(255, v + offset).toString(16).padStart(2, '0')).join('');
    };

    const waterColor = ensureContrast(palette.water, 35);

    const w = (z4, z6, z8, z10, z12, z14, z16, z18) => [
        'interpolate', ['exponential', 1.4], ['zoom'],
        4, z4, 6, z6, 8, z8, 10, z10, 12, z12, 14, z14, 16, z16, 18, z18
    ];

    const roadsAlpha = (opacity) => hexToRgba(palette.roads, opacity, alphaBoost);
    const waterAlpha = (opacity) => hexToRgba(palette.water, opacity, alphaBoost);

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

            // ── Landcover (terrain texture) ───────────────────────────────
            { id: 'landcover_wood', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['==', 'class', 'wood'], paint: { 'fill-color': roadsAlpha(0.06), 'fill-opacity': 1 } },
            { id: 'landcover_grass', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['in', 'class', 'grass', 'meadow', 'heath'], paint: { 'fill-color': roadsAlpha(0.04), 'fill-opacity': 1 } },
            { id: 'landcover_sand', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['in', 'class', 'sand', 'beach', 'bare_rock', 'rock'], paint: { 'fill-color': roadsAlpha(0.05), 'fill-opacity': 1 } },
            { id: 'landcover_ice', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['in', 'class', 'ice', 'glacier', 'snow'], paint: { 'fill-color': waterAlpha(0.15), 'fill-opacity': 1 } },

            // ── Water ─────────────────────────────────────────────────────
            { id: 'water', type: 'fill', source: 'openmaptiles', 'source-layer': 'water', paint: { 'fill-color': waterColor } },
            { id: 'waterway', type: 'line', source: 'openmaptiles', 'source-layer': 'waterway', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': waterColor, 'line-width': w(0, 0.3, 0.5, 0.8, 1.2, 1.8, 2.4, 3.0), 'line-opacity': 0.85 } },

            // ── Boundaries ────────────────────────────────────────────────
            { id: 'boundary_country', type: 'line', source: 'openmaptiles', 'source-layer': 'boundary', filter: ['==', 'admin_level', 2], layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': roadsAlpha(0.35), 'line-width': ['interpolate', ['linear'], ['zoom'], 2, 0.4, 6, 0.7, 10, 1.0], 'line-dasharray': [4, 3] } },

            // ── Roads ─────────────────────────────────────────────────────
            { id: 'highway_major', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'motorway', 'trunk', 'primary'], layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': palette.roads, 'line-width': w(0.1, 0.2, 0.4, 0.8, 1.4, 2.0, 2.8, 3.4) } },
            { id: 'highway_minor', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'secondary', 'tertiary'], minzoom: 7, layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': palette.roads, 'line-width': w(0, 0.1, 0.3, 0.6, 1.0, 1.6, 2.2, 2.8) } },
            { id: 'highway_other', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'minor', 'service', 'track'], minzoom: 12, layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': palette.roads, 'line-width': w(0, 0, 0.1, 0.3, 0.6, 1.0, 1.4, 1.8), 'line-opacity': 0.5 } },
            { id: 'railway', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'rail', 'transit'], minzoom: 9, layout: { 'line-cap': 'butt', 'line-join': 'miter' }, paint: { 'line-color': roadsAlpha(0.4), 'line-width': w(0, 0.1, 0.3, 0.5, 0.8, 1.0, 1.3, 1.6), 'line-dasharray': [3, 2] } },

            // ── Buildings ─────────────────────────────────────────────────
            { id: 'building', type: 'fill', source: 'openmaptiles', 'source-layer': 'building', minzoom: 12, paint: { 'fill-color': roadsAlpha(0.12), 'fill-opacity': 1 } },
            { id: 'building_outline', type: 'line', source: 'openmaptiles', 'source-layer': 'building', minzoom: 14, paint: { 'line-color': roadsAlpha(0.15), 'line-width': 0.4 } },

            // ── Mountain peaks (dots only) ────────────────────────────
            {
                id: 'mountain_peak', type: 'circle', source: 'openmaptiles', 'source-layer': 'mountain_peak',
                minzoom: 7,
                filter: ['>', 'rank', 0],
                paint: {
                    'circle-radius': ['interpolate', ['linear'], ['zoom'], 7, 1.5, 12, 3],
                    'circle-color': roadsAlpha(0.2),
                    'circle-stroke-width': 0
                }
            }
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
    selectedThemeSwatch: document.getElementById('selectedThemeSwatch'),
    selectedThemeName: document.getElementById('selectedThemeName'),
    selectedBgColor: document.getElementById('selectedBgColor'),
    selectedRoadsColor: document.getElementById('selectedRoadsColor'),
    selectedWaterColor: document.getElementById('selectedWaterColor'),

    hudOrigin: document.getElementById('hudOrigin'),
    hudDest: document.getElementById('hudDest'),
    hudDistance: document.getElementById('hudDistance'),
    hudEta: document.getElementById('hudEta'),
    hudProgress: document.getElementById('hudProgress'),
    progressBar: document.getElementById('progressBar'),
    progressFill: document.getElementById('progressFill'),
    flightHud: document.getElementById('flightHud'),
    hudToggleBtn: document.getElementById('hudToggleBtn'),
    panelToggleBtn: document.getElementById('panelToggleBtn'),
    panelCloseBtn: document.getElementById('panelCloseBtn'),
    controls: document.getElementById('controls'),
    statusText: document.getElementById('statusText'),
    formatSelect: document.getElementById('formatSelect'),
    formatSizeText: document.getElementById('formatSizeText'),
    modeFlatBtn: document.getElementById('modeFlatBtn'),
    mode3dBtn: document.getElementById('mode3dBtn'),
    globe3dContainer: document.getElementById('globe3dContainer'),
    // Mobile toolbar
    mtFlatBtn: document.getElementById('mtFlatBtn'),
    mt3dBtn: document.getElementById('mt3dBtn'),
    mtPlayBtn: document.getElementById('mtPlayBtn'),
    mtPauseBtn: document.getElementById('mtPauseBtn'),
    mtResetBtn: document.getElementById('mtResetBtn'),
    mtCameraBtn: document.getElementById('mtCameraBtn'),
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
let viewMode = 'flat'; // 'flat' or '3d'


// === THREE.JS 3D GLOBE STATE ===
let globe3d = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    globe: null,
    globeGroup: null,
    atmosMesh: null,
    flightArcLine: null,
    traveledArcLine: null,
    planeMarker: null,
    cityMarkers: [],
    cityPulses: [],
    endpointMarkers: [],
    animId: null,
};

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
        return 0.25 + 0.75 * smootherStep(t);
    } else if (progress >= LANDING_PHASE) {
        const t = (progress - LANDING_PHASE) / (1 - LANDING_PHASE);
        return 1.0 - 0.75 * smootherStep(t);
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
        points.push([toDeg(Math.atan2(y, x)), toDeg(Math.atan2(z, Math.sqrt(x * x + y * y)))]);
    }
    return points;
}

function calculateBearing(lat1, lon1, lat2, lon2) {
    const dLon = toRad(lon2 - lon1);
    const y = Math.sin(dLon) * Math.cos(toRad(lat2));
    const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
        Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
    return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// === GeoJSON helpers ===
function lineFeature(coords) {
    return { type: 'Feature', geometry: { type: 'LineString', coordinates: coords } };
}

function pointFeature(lon, lat, props = {}) {
    return { type: 'Feature', geometry: { type: 'Point', coordinates: [lon, lat] }, properties: props };
}

function waitForLayer(layerId, cb) {
    if (map.getLayer(layerId)) { cb(); } else { setTimeout(() => waitForLayer(layerId, cb), 100); }
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

// Flight accent colors per theme — crafted to pop against each palette
const FLIGHT_ACCENT = {
    'Noir':       '#e84393',  // hot pink against monochrome — electric contrast
    'Blueprint':  '#00e5ff',  // cyan neon against deep navy — radar glow
    'Emerald':    '#ffd166',  // warm gold against deep green — jewel tone
    'Tangerine':  '#ff4b00',  // keep the orange identity — match roads
    'Royal Blue': '#ffe100',  // bright yellow against white/blue
};

function getFlightAccent() {
    return FLIGHT_ACCENT[currentStyle] || '#e84393';
}

function getPlaneIconColor() {
    return getFlightAccent();
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

    const pathColor = getFlightAccent();

    map.addSource('flight-path', {
        type: 'geojson',
        data: lineFeature([])
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
        data: lineFeature([])
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
        data: pointFeature(0, 0, { bearing: 0 })
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
            'circle-color': getFlightAccent(),
            'circle-stroke-width': 2,
            'circle-stroke-color': PALETTES[currentStyle].bg
        }
    });

    flightLayersAdded = true;
}

function updateFlightPath() {
    if (!map.getSource('flight-path')) return;
    map.getSource('flight-path').setData(lineFeature(arcCoordinates));
}

function updateEndpoints() {
    if (!map.getSource('endpoints') || !originCoords || !destCoords) return;
    map.getSource('endpoints').setData({
        type: 'FeatureCollection',
        features: [
            pointFeature(originCoords.lon, originCoords.lat),
            pointFeature(destCoords.lon, destCoords.lat)
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
    // 3D mode uses higher speed since you're viewing from far away
    // Flat mode scales speed with zoom: slower when zoomed in (takeoff/landing) for smooth tile viewing
    let modeMult;
    if (viewMode === '3d') {
        modeMult = 3.0;
    } else {
        const cruiseZoom = getCruiseZoom(flightDistance);
        const zoom = getFlightZoom(flightProgress);
        if (flightProgress <= TAKEOFF_PHASE) {
            // Departure: exponential slowdown based on zoom for smooth tile viewing
            const zoomDelta = Math.max(0, zoom - cruiseZoom);
            modeMult = Math.pow(0.7, zoomDelta);
        } else if (flightProgress >= LANDING_PHASE) {
            // Landing: gentle linear slowdown that guarantees reaching destination
            const t = (flightProgress - LANDING_PHASE) / (1 - LANDING_PHASE); // 0→1
            modeMult = 0.4 - 0.25 * t; // 0.4 → 0.15
        } else {
            modeMult = 1.0;
        }
    }
    flightProgress += flightSpeed * speedMult * phaseMult * modeMult * (deltaMs / 16.67);

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
        map.getSource('plane-point').setData(pointFeature(currentLon, currentLat, { bearing }));
    }

    // Throttle heavy GeoJSON updates (traveled path) to reduce flicker
    const shouldUpdateGeoJson = (timestamp - lastGeoJsonUpdate) >= GEOJSON_THROTTLE;
    if (shouldUpdateGeoJson) {
        lastGeoJsonUpdate = timestamp;
        const traveledCoords = arcCoordinates.slice(0, i + 1).concat([[currentLon, currentLat]]);
        if (map.getSource('flight-traveled')) {
            map.getSource('flight-traveled').setData(lineFeature(traveledCoords));
        }
    }

    // Update HUD
    const pct = Math.round(flightProgress * 100);
    el.hudProgress.textContent = `${pct}%`;
    el.progressFill.style.width = `${pct}%`;

    // Cinematic camera: instant center tracking (smooth zoom comes from easing functions)
    if (cameraFollow) {
        if (viewMode === 'flat') {
            const targetZoom = getFlightZoom(flightProgress);
            map.jumpTo({
                center: [currentLon, currentLat],
                zoom: targetZoom
            });
        }
    }

    // Update 3D view — always update plane + path (guard against destroyed globe)
    if (viewMode === '3d' && globe3d.globeGroup) {
        update3DTraveledPath(flightProgress);
        update3DPlane(flightProgress);
    }

    if (completed) {
        isPlaying = false;
        el.pauseBtn.classList.add('hidden');
        syncMobileFlight();
        setStatus(t('flightComplete'));
        if (map.getLayer('plane-layer')) {
            map.setLayoutProperty('plane-layer', 'visibility', 'none');
        }
        if (viewMode === '3d') {
            // Camera stays at fixed orbital position
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

    // Clear previous flight from both flat map and 3D globe
    clear3DFlightObjects();
    if (map.getSource('flight-traveled')) {
        map.getSource('flight-traveled').setData(lineFeature([]));
    }
    if (map.getSource('flight-path')) {
        map.getSource('flight-path').setData(lineFeature([]));
    }
    if (map.getSource('endpoints')) {
        map.getSource('endpoints').setData({ type: 'FeatureCollection', features: [] });
    }

    // Google Analytics event
    if (typeof gtag === 'function') {
        gtag('event', 'start_flight', {
            origin: originName,
            destination: destName,
            video_format: el.formatSelect.value,
            speed: parseFloat(el.speedSlider.value) || 1
        });
    }

    arcCoordinates = generateGreatCircleArc(originCoords, destCoords, 300);
    flightProgress = 0;
    lastFrameTime = 0;
    flightDistance = calculateDistance(originCoords.lat, originCoords.lon, destCoords.lat, destCoords.lon);

    // Pre-compute 3D arc for smooth animation (cache once)
    const arcAlt3d = Math.min(flightDistance / 40000, 0.15) + 0.02;
    globe3d._arcCache = generateGreatCircleArc3D(originCoords, destCoords, 300, arcAlt3d);

    setupFlightLayers();
    updateFlightPath();
    updateEndpoints();

    // Place plane at origin
    if (map.getSource('plane-point')) {
        const initBearing = calculateBearing(originCoords.lat, originCoords.lon, destCoords.lat, destCoords.lon);
        map.getSource('plane-point').setData(pointFeature(originCoords.lon, originCoords.lat, { bearing: initBearing }));
    }
    // Show plane (may not exist yet if async)
    waitForLayer('plane-layer', () => map.setLayoutProperty('plane-layer', 'visibility', 'visible'));

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
    el.hudToggleBtn.classList.remove('hidden');
    el.hudToggleBtn.classList.add('hud-active');
    el.progressBar.classList.remove('hidden');

    el.pauseBtn.textContent = t('pause');
    el.pauseBtn.classList.remove('hidden');
    el.resetBtn.classList.remove('hidden');
    syncMobileFlight();

    setStatus(t('flying'));

    // Update 3D flight path if in 3D mode
    if (viewMode === '3d') {
        // Cancel any lingering rotation animation before starting new one
        if (globe3d._rotateAnimId) {
            cancelAnimationFrame(globe3d._rotateAnimId);
            globe3d._rotateAnimId = null;
        }
        update3DFlightPath();
        update3DTraveledPath(0);
        update3DPlane(0);
        // Rotate globe to show origin city (takeoff) — trajectory unfolds as plane moves
        rotateGlobeToCoords(originCoords.lat, originCoords.lon, true);
        // Wait for globe rotation to finish before starting flight
        startFlightTimer = setTimeout(() => {
            startFlightTimer = null;
            isPlaying = true;
            lastFrameTime = 0;
            animationId = requestAnimationFrame(animateFlight);
            syncMobileFlight();
        }, 1500);
        return;
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
                syncMobileFlight();
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
    syncMobileFlight();
}

function clear3DFlightObjects() {
    if (!globe3d.globeGroup) return;
    if (globe3d.flightArcLine) {
        globe3d.globeGroup.remove(globe3d.flightArcLine);
        if (globe3d.flightArcLine.geometry) globe3d.flightArcLine.geometry.dispose();
        if (globe3d.flightArcLine.material) globe3d.flightArcLine.material.dispose();
        globe3d.flightArcLine = null;
    }
    if (globe3d.traveledArcLine) {
        globe3d.globeGroup.remove(globe3d.traveledArcLine);
        if (globe3d.traveledArcLine.geometry) globe3d.traveledArcLine.geometry.dispose();
        if (globe3d.traveledArcLine.material) globe3d.traveledArcLine.material.dispose();
        globe3d.traveledArcLine = null;
    }
    if (globe3d.planeMarker) {
        globe3d.globeGroup.remove(globe3d.planeMarker);
        if (globe3d.planeMarker.geometry) globe3d.planeMarker.geometry.dispose();
        if (globe3d.planeMarker.material) {
            if (globe3d.planeMarker.material.map) globe3d.planeMarker.material.map.dispose();
            globe3d.planeMarker.material.dispose();
        }
        globe3d.planeMarker = null;
    }
    globe3d.endpointMarkers.forEach(m => {
        globe3d.globeGroup.remove(m);
        if (m.geometry) m.geometry.dispose();
        if (m.material) m.material.dispose();
    });
    globe3d.endpointMarkers = [];
    globe3d._arcCache = null;
}

function resetFlight() {
    isPlaying = false;
    cancelAnimationFrame(animationId);
    if (startFlightTimer) { clearTimeout(startFlightTimer); startFlightTimer = null; }
    flightProgress = 0;
    lastFrameTime = 0;
    cameraFollow = true;

    if (map.getSource('flight-traveled')) {
        map.getSource('flight-traveled').setData(lineFeature([]));
    }
    if (map.getSource('plane-point')) {
        map.getSource('plane-point').setData(pointFeature(0, 0, { bearing: 0 }));
    }
    if (map.getLayer('plane-layer')) {
        map.setLayoutProperty('plane-layer', 'visibility', 'none');
    }
    if (map.getSource('flight-path')) {
        map.getSource('flight-path').setData(lineFeature([]));
    }
    if (map.getSource('endpoints')) {
        map.getSource('endpoints').setData({ type: 'FeatureCollection', features: [] });
    }

    // Clear 3D state
    clear3DFlightObjects();

    el.flightHud.classList.add('hidden');
    el.hudToggleBtn.classList.add('hidden');
    el.hudToggleBtn.classList.remove('hud-active');
    el.progressBar.classList.add('hidden');
    el.pauseBtn.classList.add('hidden');
    el.resetBtn.classList.add('hidden');
    el.progressFill.style.width = '0%';
    el.cameraModeBtn.textContent = t('follow');
    setStatus('');
    syncMobileFlight();
    el.mtCameraBtn.classList.add('mt-cam-follow');
}

function setStatus(msg) {
    if (el.statusText) el.statusText.textContent = msg || '';
}

// === AUTOCOMPLETE ===
function getLocalCityMatches(query) {
    const norm = normalize(query);
    if (!norm) return [];
    const entries = Object.entries(WORLD_CITIES);
    const scored = entries
        .map(([city, data]) => {
            const n = normalize(city);
            const priority = n.startsWith(norm) ? 0 : n.includes(norm) ? 1 : -1;
            return priority >= 0 ? { name: city, subtitle: data[APP_LANG] || data.en, lat: data.lat, lon: data.lon, priority } : null;
        })
        .filter(Boolean);

    if (APP_LANG === 'es') {
        for (const [alias, key] of Object.entries(CITY_ALIASES_ES)) {
            if (normalize(alias).includes(norm) && WORLD_CITIES[key] && !scored.some(r => r.name === key)) {
                const data = WORLD_CITIES[key];
                scored.push({ name: key, subtitle: data.es || data.en, lat: data.lat, lon: data.lon, priority: 2 });
            }
        }
    }

    return scored.sort((a, b) => a.priority - b.priority).slice(0, 5);
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

    // Refresh 3D globe if active (palette cycling is independent of flat theme)
    if (viewMode === '3d' && globe3d.renderer) {
        // 3D globe uses its own cycling palettes, no need to rebuild
    }

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
                map.getSource('flight-traveled').setData(lineFeature(traveledCoords));
            }

            // Restore plane position and visibility
            if (idx < totalPoints && map.getSource('plane-point')) {
                const bearing = calculateBearing(
                    arcCoordinates[idx][1], arcCoordinates[idx][0],
                    arcCoordinates[Math.min(idx + 1, totalPoints)][1], arcCoordinates[Math.min(idx + 1, totalPoints)][0]
                );
                map.getSource('plane-point').setData(
                    pointFeature(arcCoordinates[idx][0], arcCoordinates[idx][1], { bearing })
                );
            }

            // Plane layer is created async — restore visibility once it's ready
            if (flightProgress > 0 && flightProgress < 1.0) {
                waitForLayer('plane-layer', () => map.setLayoutProperty('plane-layer', 'visibility', 'visible'));
            }
        }
        if (wasPlaying && flightProgress < 1.0) {
            isPlaying = true;
            lastFrameTime = 0;
            animationId = requestAnimationFrame(animateFlight);
        }
    });
}

function updateSelectedThemePreview(themeName) {
    const palette = PALETTES[themeName];
    if (!palette) return;

    el.selectedThemeSwatch.style.setProperty('--swatch-bg', palette.bg);
    el.selectedThemeSwatch.style.setProperty('--swatch-roads', palette.roads);
    el.selectedThemeSwatch.style.setProperty('--swatch-water', palette.water);

    el.selectedThemeSwatch.innerHTML = '';
    const roads = document.createElement('div');
    roads.className = 'roads';
    el.selectedThemeSwatch.appendChild(roads);

    el.selectedThemeName.textContent = themeName;

    el.selectedBgColor.style.backgroundColor = palette.bg;
    el.selectedRoadsColor.style.backgroundColor = palette.roads;
    el.selectedWaterColor.style.backgroundColor = palette.water;

    document.querySelectorAll('.theme-swatch').forEach(swatch => {
        swatch.classList.toggle('selected', swatch.dataset.theme === themeName);
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
            updateSelectedThemePreview(name);
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

    // Flight info toggle
    el.hudToggleBtn.addEventListener('click', () => {
        const isHidden = el.flightHud.classList.toggle('hidden');
        el.hudToggleBtn.classList.toggle('hud-active', !isHidden);
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
        el.speedValue.textContent = `${parseFloat(el.speedSlider.value) || 1}x`;
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
        updateSelectedThemePreview(style);
    });

    el.formatSelect.addEventListener('change', () => {
        applyCanvasFormat(el.formatSelect.value);
    });

    // Mode toggle: Flat / 3D
    el.modeFlatBtn.addEventListener('click', () => {
        if (viewMode === 'flat') return;
        switchToFlat();
    });
    el.mode3dBtn.addEventListener('click', () => {
        if (viewMode === '3d') return;
        switchTo3D();
    });

    // === Mobile Toolbar ===
    el.mtFlatBtn.addEventListener('click', () => {
        if (viewMode === 'flat') return;
        switchToFlat();
    });
    el.mt3dBtn.addEventListener('click', () => {
        if (viewMode === '3d') return;
        switchTo3D();
    });

    el.mtPlayBtn.addEventListener('click', () => {
        // If paused mid-flight, resume; otherwise start a new flight
        if (arcCoordinates.length && !isPlaying && flightProgress > 0 && flightProgress < 1.0) {
            togglePause(); // resume paused flight
        } else {
            startFlight(); // start new flight (same as main Start Flight btn)
        }
    });
    el.mtPauseBtn.addEventListener('click', () => {
        togglePause();
    });
    el.mtResetBtn.addEventListener('click', () => {
        resetFlight();
    });

    el.mtCameraBtn.addEventListener('click', () => {
        el.cameraModeBtn.click(); // reuse existing logic
        el.mtCameraBtn.classList.toggle('mt-cam-follow', cameraFollow);
    });
    el.mtCameraBtn.classList.toggle('mt-cam-follow', cameraFollow);

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
    updateSelectedThemePreview(currentStyle);

    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer && typeof ResizeObserver !== 'undefined') {
        let resizeRaf;
        new ResizeObserver(() => {
            cancelAnimationFrame(resizeRaf);
            resizeRaf = requestAnimationFrame(() => { if (map) map.resize(); });
        }).observe(mapContainer);
    }
}

// === 3D GLOBE ===
const GLOBE_RADIUS = 1.0;
const EARTH_WATER_URL = 'https://unpkg.com/three-globe@2.31.1/example/img/earth-water.png';
const EARTH_TOPO_URL = 'https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png';

// Camera faces +Z → the "front" of the globe is the +Z direction.
// To show a given lat/lon, we need a quaternion that rotates that point's
// direction vector to face +Z. setFromUnitVectors handles shortest-path
// automatically, no Euler wrapping issues.
const _FRONT = typeof THREE !== 'undefined' ? new THREE.Vector3(0, 0, 1) : null;
let _dragQuatX, _dragQuatY;

function globeQuatForLatLon(lat, lon) {
    const dir = latLonToVec3(lat, lon, 1).normalize();
    return new THREE.Quaternion().setFromUnitVectors(dir, _FRONT);
}

function applyGlobeDragRotation(dx, dy) {
    if (!globe3d.globeGroup) return;
    if (!_dragQuatX) { _dragQuatX = new THREE.Quaternion(); _dragQuatY = new THREE.Quaternion(); }
    // Rotate around world Y for horizontal drag, world X for vertical drag
    _dragQuatY.setFromAxisAngle(new THREE.Vector3(0, 1, 0), dx * 0.005);
    _dragQuatX.setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * 0.005);
    globe3d.globeGroup.quaternion.premultiply(_dragQuatY).premultiply(_dragQuatX);
}

function latLonToVec3(lat, lon, radius) {
    const phi = toRad(90 - lat);
    const theta = toRad(lon + 180);
    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

function generateGreatCircleArc3D(origin, dest, numPoints, altitude) {
    const start = latLonToVec3(origin.lat, origin.lon, GLOBE_RADIUS);
    const end = latLonToVec3(dest.lat, dest.lon, GLOBE_RADIUS);
    const angle = start.angleTo(end);
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        // Proper spherical interpolation (slerp)
        const sinAngle = Math.sin(angle);
        let p;
        if (sinAngle < 0.0001) {
            p = new THREE.Vector3().copy(start).lerp(end, t).normalize();
        } else {
            const a = Math.sin((1 - t) * angle) / sinAngle;
            const b = Math.sin(t * angle) / sinAngle;
            p = new THREE.Vector3(
                start.x * a + end.x * b,
                start.y * a + end.y * b,
                start.z * a + end.z * b
            ).normalize();
        }
        // Parabolic altitude arc
        const alt = altitude * 4 * t * (1 - t);
        p.multiplyScalar(GLOBE_RADIUS + alt);
        points.push(p);
    }
    return points;
}

// Globe palettes — same cycling set as the index page for visual consistency
const GLOBE_PALETTES = [
    { name: 'Midnight Navy & Gold', land: '#D4AF37', water: '#1A1A2E' },
    { name: 'Neon Green & Black', land: '#39FF14', water: '#0D0D0D' },
    { name: 'Sage Green & Terracotta', land: '#C67B5C', water: '#A8B5A0' },
    { name: 'Pure Black & White', land: '#000000', water: '#FFFFFF' },
    { name: 'Coral Red & Navy Blue', land: '#FF6B6B', water: '#001F3F' },
    { name: 'Digital Lavender & Noir', land: '#B4A7D6', water: '#121212' },
    { name: 'Mocha Mousse & Cream', land: '#A47764', water: '#FAF6F1' },
    { name: 'Emerald Green & Bone', land: '#047857', water: '#F8F5F0' },
    { name: 'Rose Gold & Charcoal', land: '#B76E79', water: '#2C2C2C' },
    { name: 'Electric Blue & White', land: '#0066FF', water: '#FAFAFA' },
    { name: 'Sakura & Charcoal', land: '#FFB7C5', water: '#2E2E32' },
    { name: 'Art Deco Gold & Black', land: '#C9A227', water: '#0D0D0D' },
];

const GLOBE_PALETTE_DURATION = 3.0; // seconds per palette

function hexToVec3(hex) {
    const c = hex.replace('#', '');
    return {
        r: parseInt(c.substr(0, 2), 16) / 255,
        g: parseInt(c.substr(2, 2), 16) / 255,
        b: parseInt(c.substr(4, 2), 16) / 255
    };
}

function configureHDTexture(texture, renderer) {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    if (renderer) {
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    }
    texture.needsUpdate = true;
    return texture;
}

function createGlobeShaderMaterial(renderer) {
    const loader = new THREE.TextureLoader();
    const landMask = loader.load(EARTH_WATER_URL, tex => configureHDTexture(tex, renderer));
    const bumpTexture = loader.load(EARTH_TOPO_URL, tex => configureHDTexture(tex, renderer));

    const uniforms = {
        landMap: { value: landMask },
        topoMap: { value: bumpTexture },
        landColor: { value: new THREE.Color(GLOBE_PALETTES[0].land) },
        waterColor: { value: new THREE.Color(GLOBE_PALETTES[0].water) },
        targetLandColor: { value: new THREE.Color(GLOBE_PALETTES[1].land) },
        targetWaterColor: { value: new THREE.Color(GLOBE_PALETTES[1].water) },
        blendFactor: { value: 0.0 },
        displacementScale: { value: GLOBE_RADIUS * 0.08 }
    };

    return new THREE.ShaderMaterial({
        uniforms,
        vertexShader: `
            uniform sampler2D topoMap;
            uniform float displacementScale;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vWorldPos;
            varying float vElevation;

            void main() {
                vUv = uv;
                float topo = texture2D(topoMap, uv).r;
                vElevation = topo;
                // Stronger displacement with power curve for exaggerated peaks
                float displaced = pow(topo, 0.7) * displacementScale;
                vec3 displacedPos = position + normal * displaced;
                vNormal = normalize(normalMatrix * normal);
                vWorldPos = (modelMatrix * vec4(displacedPos, 1.0)).xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPos, 1.0);
            }
        `,
        fragmentShader: `
            uniform sampler2D landMap;
            uniform sampler2D topoMap;
            uniform vec3 landColor;
            uniform vec3 waterColor;
            uniform vec3 targetLandColor;
            uniform vec3 targetWaterColor;
            uniform float blendFactor;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vWorldPos;
            varying float vElevation;

            void main() {
                vec4 mask = texture2D(landMap, vUv);
                float isWater = mask.r;
                float topo = texture2D(topoMap, vUv).r;

                vec3 curLand = mix(landColor, targetLandColor, blendFactor);
                vec3 curWater = mix(waterColor, targetWaterColor, blendFactor);

                // Elevation-based shading: valleys darker, peaks lighter
                float elevFactor = pow(topo, 0.6);
                vec3 landShaded = curLand * (0.5 + 0.7 * elevFactor);
                // Water depth: deeper areas darker
                vec3 waterShaded = curWater * (0.8 + 0.2 * (1.0 - topo));

                vec3 baseColor = mix(landShaded, waterShaded, isWater);

                // Compute normal from topology for per-pixel bump lighting
                // Use finer texel for sharper bump detail
                float texel = 1.0 / 4096.0;
                float hL = texture2D(topoMap, vUv + vec2(-texel, 0.0)).r;
                float hR = texture2D(topoMap, vUv + vec2(texel, 0.0)).r;
                float hU = texture2D(topoMap, vUv + vec2(0.0, texel)).r;
                float hD = texture2D(topoMap, vUv + vec2(0.0, -texel)).r;
                vec3 bumpNormal = normalize(vNormal + vec3((hL - hR) * 3.0, (hD - hU) * 3.0, 0.0));

                // Directional lighting — subdued for realism
                vec3 lightDir = normalize(vec3(0.8, 0.4, 0.6));
                float NdotL = dot(bumpNormal, lightDir);
                float wrap = max(NdotL * 0.5 + 0.5, 0.0);

                // Subtle specular on water only
                vec3 viewDir = normalize(cameraPosition - vWorldPos);
                vec3 halfDir = normalize(lightDir + viewDir);
                float spec = pow(max(dot(bumpNormal, halfDir), 0.0), 60.0) * 0.15 * isWater;

                // Soft Fresnel rim
                float fresnel = 1.0 - max(dot(vNormal, viewDir), 0.0);
                float rim = pow(fresnel, 4.0) * 0.12;

                // Final compositing — lower ambient for moodier look
                vec3 finalColor = baseColor * (0.45 + 0.55 * wrap) + spec + rim * curLand;
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `
    });
}

// Recompute camera FOV + Z so the globe fits edge-to-edge without clipping,
// regardless of portrait/landscape/square frame.
// Strategy: adjust the vertical FOV so the globe always subtends the same
// angular size relative to the *narrower* dimension, then position camera
// at the exact tangent-grazing distance.
function fitGlobeCameraToFrame() {
    if (!globe3d.camera) return;
    const aspect = globe3d.camera.aspect;
    // Base half-angle: how large we want the globe to appear (bigger = tighter fit)
    const baseHalfAngle = toRad(26); // ~52° span → globe nearly fills the frame
    // The narrower dimension constrains the fit.
    // Convert to the vertical half-FOV the camera needs:
    let vHalfFov;
    if (aspect >= 1) {
        // Landscape/square: height is the narrow side → use base angle as vertical
        vHalfFov = baseHalfAngle;
    } else {
        // Portrait: width is the narrow side → derive vertical FOV from horizontal
        // hHalfFov = baseHalfAngle, vHalfFov = atan(tan(hHalfFov) / aspect)
        vHalfFov = Math.atan(Math.tan(baseHalfAngle) / aspect);
    }
    globe3d.camera.fov = toDeg(vHalfFov * 2);
    globe3d.camera.updateProjectionMatrix();
    // Position camera at exact tangent distance for the constraining dimension
    globe3d.camera.position.z = GLOBE_RADIUS / Math.sin(baseHalfAngle);
}

function initGlobe3D() {
    if (globe3d.renderer) return; // already initialized

    const container = el.globe3dContainer;
    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    // Scene — transparent background like index page
    const scene = new THREE.Scene();
    globe3d.scene = scene;

    // Camera — position so globe fills the frame edge-to-edge
    const aspect = rect.width / rect.height;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.01, 100);
    globe3d.camera = camera;
    fitGlobeCameraToFrame();

    // Renderer — alpha:true for transparent bg, full device pixel ratio for HD
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
    });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Handle WebGL context loss gracefully — prevent page crash
    renderer.domElement.addEventListener('webglcontextlost', e => {
        e.preventDefault();
        if (globe3d.animId) { cancelAnimationFrame(globe3d.animId); globe3d.animId = null; }
    });
    renderer.domElement.addEventListener('webglcontextrestored', () => {
        destroyGlobe3D();
        initGlobe3D();
    });
    globe3d.renderer = renderer;

    // Lighting — same as index page
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const sunLight = new THREE.DirectionalLight(0xffffff, 0.4);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // Globe group for rotation
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globe3d.globeGroup = globeGroup;

    // Palette cycling state — same as index page
    globe3d._paletteIndex = 0;
    globe3d._paletteNextIndex = 1;
    globe3d._paletteLerp = 0;

    // Globe sphere with cycling shader — matches index page exactly
    const globeGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 256, 256);
    const globeMat = createGlobeShaderMaterial(renderer);
    const globe = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globe);
    globe3d.globe = globe;

    // Atmosphere glow — matches current cycling palette
    const atmosGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.04, 128, 128);
    const atmosMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(GLOBE_PALETTES[0].land),
        transparent: true,
        opacity: 0.06,
        side: THREE.BackSide,
    });
    globe3d.atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
    globeGroup.add(globe3d.atmosMesh);

    // No city markers — only origin/destination shown during flight

    // Mouse drag rotation (same pattern as index page)
    globe3d.isDragging = false;
    globe3d.previousMouse = { x: 0, y: 0 };
    globe3d.rotationSpeed = { x: 0, y: 0 };

    renderer.domElement.addEventListener('mousedown', e => {
        globe3d.isDragging = true;
        globe3d.previousMouse = { x: e.clientX, y: e.clientY };
        globe3d.rotationSpeed = { x: 0, y: 0 };
    });
    renderer.domElement.addEventListener('mousemove', e => {
        if (!globe3d.isDragging) return;
        const dx = e.clientX - globe3d.previousMouse.x;
        const dy = e.clientY - globe3d.previousMouse.y;
        applyGlobeDragRotation(dx, dy);
        globe3d.rotationSpeed = { x: dy * 0.005, y: dx * 0.005 };
        globe3d.previousMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mouseup', () => { globe3d.isDragging = false; });

    renderer.domElement.addEventListener('touchstart', e => {
        globe3d.isDragging = true;
        globe3d.previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        globe3d.rotationSpeed = { x: 0, y: 0 };
    }, { passive: true });
    renderer.domElement.addEventListener('touchmove', e => {
        if (!globe3d.isDragging) return;
        const dx = e.touches[0].clientX - globe3d.previousMouse.x;
        const dy = e.touches[0].clientY - globe3d.previousMouse.y;
        applyGlobeDragRotation(dx, dy);
        globe3d.rotationSpeed = { x: dy * 0.005, y: dx * 0.005 };
        globe3d.previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });
    renderer.domElement.addEventListener('touchend', () => { globe3d.isDragging = false; }, { passive: true });

    // Scroll to zoom
    renderer.domElement.addEventListener('wheel', e => {
        e.preventDefault();
        camera.position.z = Math.max(1.8, Math.min(8, camera.position.z + e.deltaY * 0.003));
    }, { passive: false });

    // Handle resize — refit globe to frame on format change
    globe3d._resizeRafId = null;
    const resizeObserver = new ResizeObserver(() => {
        if (globe3d._resizeRafId) return;
        globe3d._resizeRafId = requestAnimationFrame(() => {
            globe3d._resizeRafId = null;
            const r = container.getBoundingClientRect();
            if (r.width > 0 && r.height > 0) {
                camera.aspect = r.width / r.height;
                renderer.setSize(r.width, r.height);
                fitGlobeCameraToFrame();
            }
        });
    });
    resizeObserver.observe(container);
    globe3d._resizeObserver = resizeObserver;

    // Render loop with palette cycling — matches index page
    let time = 0;
    function renderLoop() {
        if (!globe3d.renderer || !globe3d.scene) return; // destroyed — stop loop
        globe3d.animId = requestAnimationFrame(renderLoop);
        if (!globe3d.globe || !globe3d.atmosMesh) return;
        time += 0.016;

        // --- Palette cycling (same logic as index page) ---
        globe3d._paletteLerp += 0.016 / GLOBE_PALETTE_DURATION;
        if (globe3d._paletteLerp >= 1.0) {
            globe3d._paletteLerp = 0;
            globe3d._paletteIndex = globe3d._paletteNextIndex;
            globe3d._paletteNextIndex = (globe3d._paletteNextIndex + 1) % GLOBE_PALETTES.length;

            const uniforms = globe3d.globe.material.uniforms;
            uniforms.landColor.value.set(GLOBE_PALETTES[globe3d._paletteIndex].land);
            uniforms.waterColor.value.set(GLOBE_PALETTES[globe3d._paletteIndex].water);
            uniforms.targetLandColor.value.set(GLOBE_PALETTES[globe3d._paletteNextIndex].land);
            uniforms.targetWaterColor.value.set(GLOBE_PALETTES[globe3d._paletteNextIndex].water);
        }

        // Smooth easing for palette blend
        const pl = globe3d._paletteLerp;
        const ease = pl < 0.5 ? 2 * pl * pl : 1 - Math.pow(-2 * pl + 2, 2) / 2;
        globe3d.globe.material.uniforms.blendFactor.value = ease;

        // Update glow color to match current blended palette
        const curLand = hexToVec3(GLOBE_PALETTES[globe3d._paletteIndex].land);
        const nxtLand = hexToVec3(GLOBE_PALETTES[globe3d._paletteNextIndex].land);
        if (!globe3d._blendColor) globe3d._blendColor = new THREE.Color();
        globe3d._blendColor.setRGB(
            curLand.r + (nxtLand.r - curLand.r) * ease,
            curLand.g + (nxtLand.g - curLand.g) * ease,
            curLand.b + (nxtLand.b - curLand.b) * ease
        );
        globe3d.atmosMesh.material.color.copy(globe3d._blendColor);

        // Inertia rotation when not dragging (+ gentle auto-rotate when idle)
        if (!globe3d.isDragging && !isPlaying) {
            applyGlobeDragRotation(0.08, 0); // gentle auto-rotate
            if (Math.abs(globe3d.rotationSpeed.x) > 0.0001 || Math.abs(globe3d.rotationSpeed.y) > 0.0001) {
                applyGlobeDragRotation(globe3d.rotationSpeed.y / 0.005, globe3d.rotationSpeed.x / 0.005);
                globe3d.rotationSpeed.x *= 0.95;
                globe3d.rotationSpeed.y *= 0.95;
            }
        }

        // Update world matrices before camera follow reads them
        globeGroup.updateMatrixWorld(true);

        renderer.render(scene, camera);
    }
    renderLoop();
}

// Brand accent color for markers — matches index page
const GLOBE_MARKER_ACCENT = '#d2e823';

function update3DFlightPath() {
    if (!globe3d.globeGroup) return;

    // Remove old flight line and dispose resources
    if (globe3d.flightArcLine) {
        globe3d.globeGroup.remove(globe3d.flightArcLine);
        if (globe3d.flightArcLine.geometry) globe3d.flightArcLine.geometry.dispose();
        if (globe3d.flightArcLine.material) globe3d.flightArcLine.material.dispose();
        globe3d.flightArcLine = null;
    }

    if (!arcCoordinates.length) return;

    // Ensure arc cache exists
    if (!globe3d._arcCache || globe3d._arcCache.length < 2) {
        const arcAlt = Math.min(flightDistance / 40000, 0.15) + 0.02;
        globe3d._arcCache = generateGreatCircleArc3D(originCoords, destCoords, 300, arcAlt);
    }

    const points = globe3d._arcCache;

    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(GLOBE_MARKER_ACCENT),
        transparent: true,
        opacity: 0.4,
    });
    globe3d.flightArcLine = new THREE.Line(geo, mat);
    globe3d.globeGroup.add(globe3d.flightArcLine);

    // Endpoints — dispose old markers to avoid GPU memory leak
    globe3d.endpointMarkers.forEach(m => {
        globe3d.globeGroup.remove(m);
        if (m.geometry) m.geometry.dispose();
        if (m.material) m.material.dispose();
    });
    globe3d.endpointMarkers = [];

    const endGeo = new THREE.SphereGeometry(0.009, 12, 12);
    const endMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(GLOBE_MARKER_ACCENT) });

    const originPos = latLonToVec3(originCoords.lat, originCoords.lon, GLOBE_RADIUS * 1.008);
    const originMarker = new THREE.Mesh(endGeo, endMat);
    originMarker.position.copy(originPos);
    globe3d.globeGroup.add(originMarker);
    globe3d.endpointMarkers.push(originMarker);

    const destPos = latLonToVec3(destCoords.lat, destCoords.lon, GLOBE_RADIUS * 1.008);
    const destMarker = new THREE.Mesh(endGeo, endMat);
    destMarker.position.copy(destPos);
    globe3d.globeGroup.add(destMarker);
    globe3d.endpointMarkers.push(destMarker);
}

function update3DTraveledPath(progress) {
    if (!globe3d.globeGroup) return;
    if (!globe3d._arcCache || globe3d._arcCache.length < 2) return;

    const allPoints = globe3d._arcCache;
    const numTraveled = progress <= 0 ? 0 : Math.max(2, Math.floor(progress * allPoints.length));

    // Create line once with full arc geometry, then update draw range
    if (!globe3d.traveledArcLine) {
        const geo = new THREE.BufferGeometry().setFromPoints(allPoints);
        const mat = new THREE.LineBasicMaterial({
            color: new THREE.Color(GLOBE_MARKER_ACCENT),
            transparent: true,
            opacity: 0.9,
        });
        globe3d.traveledArcLine = new THREE.Line(geo, mat);
        globe3d.globeGroup.add(globe3d.traveledArcLine);
    }

    // Reveal traveled portion via draw range (no new allocations)
    globe3d.traveledArcLine.geometry.setDrawRange(0, numTraveled);
    globe3d.traveledArcLine.visible = numTraveled > 0;
}

function createPlaneBillboard(color) {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const hex = typeof color === 'string' ? color : '#' + color.getHexString();
    const svg = PLANE_SVG.replace('{COLOR}', hex);
    const img = new Image();
    const texture = new THREE.CanvasTexture(canvas);
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 128, 128);
        texture.needsUpdate = true;
    };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    const geo = new THREE.PlaneGeometry(1, 1);
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthTest: false, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 999;
    return mesh;
}

// Reusable objects to avoid per-frame GC pressure
let _planePos, _planePn, _planeTangent, _planeWorldPos, _planeWorldTangent;
let _groupWorldQuat, _groupWorldQuatInv, _camWorldQuat, _localQuat, _camRight, _camUp;
const PLANE_SCREEN_SIZE = 0.035; // fixed apparent size multiplier

function _ensurePlaneVecs() {
    if (!_planePos) {
        _planePos = new THREE.Vector3();
        _planePn = new THREE.Vector3();
        _planeTangent = new THREE.Vector3();
        _planeWorldPos = new THREE.Vector3();
        _planeWorldTangent = new THREE.Vector3();
        _groupWorldQuat = new THREE.Quaternion();
        _groupWorldQuatInv = new THREE.Quaternion();
        _camWorldQuat = new THREE.Quaternion();
        _localQuat = new THREE.Quaternion();
        _camRight = new THREE.Vector3();
        _camUp = new THREE.Vector3();
    }
}

function update3DPlane(progress) {
    if (!globe3d.globeGroup || !globe3d.camera) return;

    if (progress <= 0 || progress >= 1.0) {
        if (globe3d.planeMarker) globe3d.planeMarker.visible = false;
        return;
    }

    if (!globe3d._arcCache || globe3d._arcCache.length < 2) return;
    _ensurePlaneVecs();

    const allPoints = globe3d._arcCache;
    const totalPts = allPoints.length - 1;
    const exactIdx = progress * totalPts;
    const i0 = Math.floor(exactIdx);
    const i1 = Math.min(i0 + 1, totalPts);
    const frac = exactIdx - i0;
    const sf = frac * frac * (3 - 2 * frac);
    _planePos.lerpVectors(allPoints[i0], allPoints[i1], sf);

    if (!globe3d.planeMarker) {
        globe3d.planeMarker = createPlaneBillboard(GLOBE_MARKER_ACCENT);
        globe3d.globeGroup.add(globe3d.planeMarker);
    }

    globe3d.planeMarker.visible = true;

    // Lift above the arc surface
    _planePn.copy(_planePos).normalize();
    globe3d.planeMarker.position.copy(_planePos).addScaledVector(_planePn, 0.012);

    // --- Directional billboard: face camera + rotate nose along trajectory ---

    // Get globeGroup world quaternion
    globe3d.globeGroup.updateMatrixWorld(true);
    globe3d.globeGroup.matrixWorld.decompose(_planeWorldPos, _groupWorldQuat, _camRight /*reuse as temp scale*/);
    _groupWorldQuatInv.copy(_groupWorldQuat).invert();

    // Billboard: set mesh quaternion to camera's quaternion in globeGroup local space
    _camWorldQuat.copy(globe3d.camera.quaternion);
    _localQuat.copy(_groupWorldQuatInv).multiply(_camWorldQuat);
    globe3d.planeMarker.quaternion.copy(_localQuat);

    // Compute trajectory tangent in globe local space (wide look-ahead for smoothness)
    const lookAhead = Math.min(i0 + 8, totalPts);
    const lookBehind = Math.max(i0 - 4, 0);
    _planeTangent.subVectors(allPoints[lookAhead], allPoints[lookBehind]).normalize();

    // Transform tangent to world space
    _planeWorldTangent.copy(_planeTangent).applyQuaternion(_groupWorldQuat);

    // Project tangent onto screen plane using camera right & up vectors
    _camRight.set(1, 0, 0).applyQuaternion(_camWorldQuat);
    _camUp.set(0, 1, 0).applyQuaternion(_camWorldQuat);
    const sx = _planeWorldTangent.dot(_camRight);
    const sy = _planeWorldTangent.dot(_camUp);

    // Rotate around local Z so nose (SVG points up = +Y) aligns with trajectory screen direction
    const heading = Math.atan2(-sx, sy);
    globe3d.planeMarker.rotateZ(heading);

    // Fixed screen size: scale based on camera distance
    globe3d.planeMarker.getWorldPosition(_planeWorldPos);
    const dist = globe3d.camera.position.distanceTo(_planeWorldPos);
    const s = PLANE_SCREEN_SIZE * dist;
    globe3d.planeMarker.scale.set(s, s, 1);

    // Rotate globe so plane stays visible — quaternion slerp for shortest-path tracking
    // (no Euler wrapping issues on routes crossing the date line)
    if (isPlaying) {
        if (!globe3d._trackQuat) globe3d._trackQuat = new THREE.Quaternion();
        // Target: rotate globe so current plane position faces camera
        globe3d._trackQuat.setFromUnitVectors(_planePn, _FRONT);
        const lerpSpeed = progress < 0.05 ? 0.08 : 0.04;
        globe3d.globeGroup.quaternion.slerp(globe3d._trackQuat, lerpSpeed);
    }
}

function rotateGlobeToCoords(lat, lon, animated) {
    if (!globe3d.globeGroup) return;

    // Cancel any previous rotation animation
    if (globe3d._rotateAnimId) {
        cancelAnimationFrame(globe3d._rotateAnimId);
        globe3d._rotateAnimId = null;
    }

    const targetQuat = globeQuatForLatLon(lat, lon);

    if (animated) {
        const startQuat = globe3d.globeGroup.quaternion.clone();
        let t = 0;
        function animRotate() {
            t += 0.02;
            if (t > 1) t = 1;
            const ease = t * t * (3 - 2 * t);
            globe3d.globeGroup.quaternion.copy(startQuat).slerp(targetQuat, ease);
            if (t < 1) {
                globe3d._rotateAnimId = requestAnimationFrame(animRotate);
            } else {
                globe3d._rotateAnimId = null;
            }
        }
        animRotate();
    } else {
        globe3d.globeGroup.quaternion.copy(targetQuat);
    }
}



function destroyGlobe3D() {
    if (globe3d._rotateAnimId) {
        cancelAnimationFrame(globe3d._rotateAnimId);
        globe3d._rotateAnimId = null;
    }
    if (globe3d.animId) {
        cancelAnimationFrame(globe3d.animId);
        globe3d.animId = null;
    }
    if (globe3d._resizeRafId) {
        cancelAnimationFrame(globe3d._resizeRafId);
        globe3d._resizeRafId = null;
    }
    if (globe3d._resizeObserver) {
        globe3d._resizeObserver.disconnect();
        globe3d._resizeObserver = null;
    }
    if (globe3d.renderer) {
        globe3d.renderer.dispose();
        const canvas = globe3d.renderer.domElement;
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    }
    if (globe3d.scene) {
        globe3d.scene.traverse(obj => {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) {
                if (obj.material.map) obj.material.map.dispose();
                if (obj.material.uniforms) {
                    Object.values(obj.material.uniforms).forEach(u => {
                        if (u.value && u.value.dispose) u.value.dispose();
                    });
                }
                obj.material.dispose();
            }
        });
    }
    globe3d = {
        scene: null, camera: null, renderer: null, controls: null,
        globe: null, globeGroup: null, atmosMesh: null,
        flightArcLine: null, traveledArcLine: null,
        planeMarker: null, cityMarkers: [], cityPulses: [],
        endpointMarkers: [], animId: null,
    };
}

function syncMobileMode() {
    el.mtFlatBtn.classList.toggle('active', viewMode === 'flat');
    el.mt3dBtn.classList.toggle('active', viewMode === '3d');
}

function syncMobileFlight() {
    const hasArc = arcCoordinates.length > 0;
    const isPaused = hasArc && !isPlaying && flightProgress > 0 && flightProgress < 1.0;
    // Play btn: show when idle, paused, or completed (to restart)
    el.mtPlayBtn.classList.toggle('hidden', isPlaying);
    // Pause btn: show only while actively flying
    el.mtPauseBtn.classList.toggle('hidden', !isPlaying);
    // Reset btn: show whenever there's a flight in progress or completed
    el.mtResetBtn.classList.toggle('hidden', !hasArc);

    // Update play icon: show resume icon when paused, play when idle/complete
    const playIcon = el.mtPlayBtn.querySelector('ion-icon');
    if (playIcon) {
        playIcon.setAttribute('name', isPaused ? 'play-forward' : 'play');
    }
    // Dim the play accent when paused to hint "resume" vs "start"
    el.mtPlayBtn.classList.toggle('mt-play', !isPaused);
}

function switchTo3D() {
    viewMode = '3d';
    el.modeFlatBtn.classList.remove('active');
    el.modeFlatBtn.classList.add('opacity-50');
    el.mode3dBtn.classList.add('active');
    el.mode3dBtn.classList.remove('opacity-50');
    syncMobileMode();



    // Hide flat map, show 3D
    document.getElementById('mapContainer').style.display = 'none';
    el.globe3dContainer.classList.remove('hidden');

    initGlobe3D();

    // Ensure arc cache if flight data exists
    if (arcCoordinates.length && (!globe3d._arcCache || globe3d._arcCache.length < 2)) {
        const arcAlt = Math.min(flightDistance / 40000, 0.15) + 0.02;
        globe3d._arcCache = generateGreatCircleArc3D(originCoords, destCoords, 300, arcAlt);
    }

    // If flight is in progress, show arc on globe
    if (arcCoordinates.length) {
        update3DFlightPath();
        update3DTraveledPath(flightProgress);
        update3DPlane(flightProgress);
        if (originCoords && destCoords) {
            // If in-flight, rotate globe so current plane position faces camera
            if (flightProgress > 0 && flightProgress < 1.0 && globe3d._arcCache) {
                const idx = Math.floor(flightProgress * (globe3d._arcCache.length - 1));
                const dir = globe3d._arcCache[idx].clone().normalize();
                const targetQ = new THREE.Quaternion().setFromUnitVectors(dir, _FRONT);
                globe3d.globeGroup.quaternion.copy(targetQ);
            } else {
                rotateGlobeToCoords(originCoords.lat, originCoords.lon, true);
            }
        }
    }
}

function switchToFlat() {
    viewMode = 'flat';
    el.mode3dBtn.classList.remove('active');
    el.mode3dBtn.classList.add('opacity-50');
    el.modeFlatBtn.classList.add('active');
    el.modeFlatBtn.classList.remove('opacity-50');
    syncMobileMode();



    // Show flat map, hide 3D
    document.getElementById('mapContainer').style.display = '';
    el.globe3dContainer.classList.add('hidden');

    destroyGlobe3D();

    if (map) setTimeout(() => map.resize(), 50);
}

function refreshGlobe3DStyle() {
    // 3D globe uses its own palette cycling (independent of flat map theme)
    // Only rebuild if structure needs updating
    if (viewMode !== '3d' || !globe3d.scene) return;
}

init();
