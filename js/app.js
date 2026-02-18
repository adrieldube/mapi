// === CONFIGURATION ===
// Get a free key at https://cloud.maptiler.com/
const MAPTILER_KEY = "2Q7XT8l9Iqoe1Z9gbvHw";

// === COLOR PALETTES ===
// 100 curated color themes featuring 2025 design trends
const PALETTES = {
    // === CLASSIC MONOCHROME ===
    'Pure Black & White': { bg: '#FFFFFF', roads: '#000000', water: '#E0E0E0' },
    'Noir White & Black (Inverted)': { bg: '#0A0A0A', roads: '#FFFFFF', water: '#1A1A1A' },
    'Ink Black & Paper White': { bg: '#F9F7F4', roads: '#1C1C1C', water: '#E8E6E3' },
    'Warm Grey & Cream': { bg: '#FDF8F3', roads: '#5A5A5A', water: '#E0DCD4' },
    'Graphite & Ivory': { bg: '#FFFFF0', roads: '#383838', water: '#E8E8E0' },

    // === 2025 PANTONE & TREND COLORS ===
    'Mocha Mousse & Cream': { bg: '#FAF6F1', roads: '#A47764', water: '#D4C4B5' },
    'Future Dusk & Soft Gold': { bg: '#FBF8F3', roads: '#6B5B7A', water: '#E8D5B7' },
    'Romantic Pink & Charcoal': { bg: '#2D2D2D', roads: '#E8A0BF', water: '#3D3D3D' },
    'Lush Lilac & Sage': { bg: '#E8F0E3', roads: '#9B7EDE', water: '#C5D5BC' },
    'Digital Lavender & Noir': { bg: '#121212', roads: '#B4A7D6', water: '#1E1E1E' },
    'Viva Magenta & Cream': { bg: '#FFF9F5', roads: '#BB2649', water: '#FFE0E8' },
    'Apricot Crush & Teal': { bg: '#E8F4F3', roads: '#E89B6F', water: '#B8D8D6' },
    'Peach Fuzz & Navy': { bg: '#1A2744', roads: '#FFBE98', water: '#253552' },
    'Butter Yellow & Slate': { bg: '#4A5568', roads: '#F9E076', water: '#5A6578' },
    'Quiet Luxury Taupe & Gold': { bg: '#F5F0E8', roads: '#8B7355', water: '#D4B896' },

    // === EARTH & NATURE TONES ===
    'Sage Green & Terracotta': { bg: '#E8E5D8', roads: '#C67B5C', water: '#A8B5A0' },
    'Forest Green & Cream': { bg: '#F5F1E8', roads: '#2C5F4F', water: '#8BA888' },
    'Emerald Green & Bone': { bg: '#F8F5F0', roads: '#047857', water: '#6EE7B7' },
    'Olive & Sand': { bg: '#F5F0E1', roads: '#6B7B4C', water: '#D4C9A8' },
    'Moss Green & Linen': { bg: '#FAF7F2', roads: '#4A6741', water: '#C5D4BC' },
    'Eucalyptus & Warm White': { bg: '#FFFEF8', roads: '#5F8575', water: '#C9DED4' },
    'Terracotta & Slate': { bg: '#3D4550', roads: '#D2691E', water: '#4D5560' },
    'Clay & Sage': { bg: '#E5E8E0', roads: '#9E6B55', water: '#B8C4A8' },
    'Rust Red & Ivory': { bg: '#FAF8F3', roads: '#B7410E', water: '#D4A574' },
    'Ochre & Charcoal': { bg: '#2A2A2F', roads: '#CC7722', water: '#3A3A3F' },
    'Desert Sand & Cactus': { bg: '#E8E0D0', roads: '#5D7B5F', water: '#C9B896' },
    'Sandstone & Ocean': { bg: '#E8E4D8', roads: '#3D6B7D', water: '#A8C0C8' },

    // === OCEANIC & COASTAL ===
    'Deep Ocean Blue & Sand': { bg: '#F9F6F0', roads: '#2E5266', water: '#6E8898' },
    'Deep Navy Blue & Blush': { bg: '#F8E8E8', roads: '#001F3F', water: '#E0C0C8' },
    'Prussian Blue & Warm Grey': { bg: '#E8E4E0', roads: '#003153', water: '#C8C4C0' },
    'Pacific Blue & Pearl': { bg: '#FBF9F7', roads: '#1C6EA4', water: '#8CB4D8' },
    'Mediterranean Blue & Limestone': { bg: '#F5F3ED', roads: '#2E5984', water: '#9CBDD4' },
    'Aegean Blue & Terracotta': { bg: '#E8D4C4', roads: '#1E4D6B', water: '#C8A898' },
    'Teal Blue & Taupe': { bg: '#E6E1DC', roads: '#008B8B', water: '#B8A99A' },
    'Turquoise Blue & Cream': { bg: '#FFF9F5', roads: '#00CED1', water: '#B3F0F1' },
    'Aquamarine & Charcoal': { bg: '#2F3640', roads: '#7FFFD4', water: '#3F4650' },
    'Coastal Mist & Driftwood': { bg: '#E8E4DC', roads: '#5C7A84', water: '#B8C8C8' },

    // === SOPHISTICATED NEUTRALS ===
    'Midnight Navy & Gold': { bg: '#1A1A2E', roads: '#D4AF37', water: '#16213E' },
    'Cobalt Blue & Cream': { bg: '#F7F4EF', roads: '#0047AB', water: '#7B9EC6' },
    'Burgundy Red & Beige': { bg: '#EDE8E3', roads: '#800020', water: '#C19A6B' },
    'Mocha Brown & Mint Green': { bg: '#E8F5E9', roads: '#6F4E37', water: '#A5D6A7' },
    'Espresso & Cream': { bg: '#FBF8F3', roads: '#4A3728', water: '#C9B8A8' },
    'Walnut & Parchment': { bg: '#F8F4E8', roads: '#5D4037', water: '#C8B896' },
    'Caramel & Ivory': { bg: '#FFFFF5', roads: '#8B6914', water: '#E8D4A0' },
    'Cognac & Linen': { bg: '#FAF7F0', roads: '#834333', water: '#D4B8A0' },

    // === ROMANTIC & SOFT ===
    'Blush Pink & Charcoal': { bg: '#F4E4E0', roads: '#3D3D3D', water: '#E8B4B8' },
    'Lavender Purple & Slate': { bg: '#E8E4F3', roads: '#4A5568', water: '#A891D3' },
    'Royal Purple & Cream': { bg: '#FAF9F6', roads: '#4B0082', water: '#E6D7FF' },
    'Dusty Rose & Graphite': { bg: '#3A3A40', roads: '#D4A5A5', water: '#4A4A50' },
    'Mauve & Warm Grey': { bg: '#E8E4E0', roads: '#915F6D', water: '#C8B8BC' },
    'Lilac & Soft White': { bg: '#FEFCFF', roads: '#9B7BB8', water: '#E0D4EB' },
    'Plum Purple & Cream': { bg: '#FFF8F0', roads: '#8E4585', water: '#E8D4E5' },
    'Orchid Pink & Sage': { bg: '#E8EDE8', roads: '#DA70D6', water: '#C8D8C8' },
    'Wisteria & Pearl': { bg: '#FAF8FC', roads: '#8B7DB8', water: '#D8D0E8' },
    'Soft Coral & Navy': { bg: '#1C2536', roads: '#F08080', water: '#2C3546' },

    // === BOLD & VIBRANT ===
    'Electric Blue & White': { bg: '#FAFAFA', roads: '#0066FF', water: '#CCE0FF' },
    'Hot Pink & White': { bg: '#FFFFFF', roads: '#FF1493', water: '#FFB6D9' },
    'Fuchsia Pink & Black': { bg: '#0F0F0F', roads: '#FF00FF', water: '#1F1F1F' },
    'Magenta Pink & Cream': { bg: '#FFF5F0', roads: '#C71585', water: '#F8BBE0' },
    'Crimson Red & Ivory': { bg: '#FFFEF7', roads: '#8B0000', water: '#FFE5D9' },
    'Vermillion Red & Ecru': { bg: '#F5F3EF', roads: '#E34234', water: '#FFD6CC' },
    'Scarlet Red & Black': { bg: '#0D0D0D', roads: '#FF2400', water: '#1D1D1D' },
    'Raspberry Pink & Mint': { bg: '#E8F8F0', roads: '#E30B5C', water: '#C0E8D8' },
    'Rose Pink & Navy': { bg: '#1A2540', roads: '#FF007F', water: '#2A3550' },
    'Burnt Orange & White': { bg: '#FFFFFF', roads: '#CC5500', water: '#FFE4CC' },
    'Tangerine Orange & Teal': { bg: '#E0F0F0', roads: '#FF9500', water: '#B0D8D8' },
    'Sunset Orange & Indigo': { bg: '#2E2E5C', roads: '#FF4500', water: '#3E3E6C' },
    'Coral Red & Navy Blue': { bg: '#001F3F', roads: '#FF6B6B', water: '#0A2A4A' },
    'Violet Purple & Ivory': { bg: '#FAF8F5', roads: '#8B00FF', water: '#E6D4FF' },
    'Sapphire Blue & Gold': { bg: '#F8F0D8', roads: '#0F52BA', water: '#E8D8B0' },

    // === NEON & CYBER ===
    'Neon Green & Black': { bg: '#0D0D0D', roads: '#39FF14', water: '#1A331A' },
    'Neon Cyan & Purple': { bg: '#1A0A2E', roads: '#00FFFF', water: '#2A1A3E' },
    'Neon Orange & Black': { bg: '#0A0A0A', roads: '#FF6600', water: '#1A1510' },
    'Lime Yellow & Charcoal': { bg: '#2A2A2A', roads: '#CCFF00', water: '#3A3A3A' },
    'Electric Yellow & Violet': { bg: '#2D1B4E', roads: '#FFFF00', water: '#3D2B5E' },
    'Cyber Purple & Black': { bg: '#0D0D12', roads: '#BF00FF', water: '#1A1A24' },
    'Matrix Green & Black': { bg: '#050505', roads: '#00FF41', water: '#101510' },
    'Synthwave Pink & Navy': { bg: '#0F0728', roads: '#FF6EC7', water: '#1A1238' },
    'Electric Violet & Noir': { bg: '#0A0A0F', roads: '#8B5CF6', water: '#15151F' },
    'Laser Blue & Midnight': { bg: '#0C1021', roads: '#00D4FF', water: '#161A31' },

    // === METALLIC & LUXE ===
    'Amber Gold & Slate Grey': { bg: '#3A3A3A', roads: '#FFBF00', water: '#4A4A4A' },
    'Rose Gold & Charcoal': { bg: '#2C2C2C', roads: '#B76E79', water: '#3C3C3C' },
    'Champagne & Noir': { bg: '#1A1A1A', roads: '#F7E7CE', water: '#2A2A2A' },
    'Bronze & Cream': { bg: '#FBF8F3', roads: '#CD7F32', water: '#E8D4BC' },
    'Copper & Slate': { bg: '#3D4852', roads: '#B87333', water: '#4D5862' },
    'Silver & Midnight': { bg: '#121620', roads: '#C0C0C0', water: '#1C2030' },
    'Platinum & Obsidian': { bg: '#0F0F14', roads: '#E5E4E2', water: '#1A1A20' },

    // === MINIMALIST JAPANESE ===
    'Sumi Ink & Rice Paper': { bg: '#F5F3EE', roads: '#2C2C2C', water: '#D8D4C8' },
    'Indigo & Bamboo': { bg: '#E8E4D0', roads: '#264653', water: '#D0CCB8' },
    'Matcha & Ivory': { bg: '#FFFEF5', roads: '#7BA05B', water: '#D4E0C8' },
    'Sakura & Charcoal': { bg: '#2E2E32', roads: '#FFB7C5', water: '#3E3E42' },
    'Zen Stone & Mist': { bg: '#E4E8EC', roads: '#5C5C5C', water: '#C4CCD4' },

    // === SCANDINAVIAN MINIMAL ===
    'Nordic Blue & White': { bg: '#FFFFFF', roads: '#5B7C99', water: '#D4E0E8' },
    'Hygge Taupe & Cream': { bg: '#FBF9F6', roads: '#7D7167', water: '#D8D0C4' },
    'Fjord Blue & Pearl': { bg: '#FAFBFC', roads: '#4A6FA5', water: '#B8CDE0' },
    'Arctic Grey & Snow': { bg: '#FEFEFE', roads: '#6B7B8C', water: '#E0E8EC' },
    'Birch & Stone': { bg: '#F0EDE8', roads: '#5D5852', water: '#C8C4BC' },

    // === TROPICAL & WARM ===
    'Mango & Teal': { bg: '#E0F0F0', roads: '#F5A623', water: '#B0D4D4' },
    'Palm Green & Coral': { bg: '#FFEBE5', roads: '#2D5A27', water: '#FFD4CC' },
    'Papaya & Navy': { bg: '#1C2A44', roads: '#FF9966', water: '#2C3A54' },
    'Hibiscus & White': { bg: '#FFFFFF', roads: '#E03C71', water: '#FFD4E4' },
    'Ocean Breeze & Sand': { bg: '#F5EFE6', roads: '#3498DB', water: '#A8C8D8' },

    // === VINTAGE & RETRO ===
    'Retro Mustard & Brown': { bg: '#3D2B1F', roads: '#D4A73A', water: '#4D3B2F' },
    'Vintage Teal & Cream': { bg: '#FBF7F0', roads: '#367588', water: '#B8D4D8' },
    '70s Avocado & Orange': { bg: '#FF7F50', roads: '#6B8E23', water: '#E06840' },
    'Art Deco Gold & Black': { bg: '#0D0D0D', roads: '#C9A227', water: '#1D1D1D' },
    'Mid-Century Coral & Navy': { bg: '#2C3E50', roads: '#E17055', water: '#3C4E60' },

    // === SPECIAL EDITIONS ===
    'Forest Green & White': { bg: '#FFFFFF', roads: '#1B4D3E', water: '#D4E8E0' },
    'Mint Green & Chocolate Brown': { bg: '#2C1810', roads: '#98FF98', water: '#3C2820' },
    'Jade Green & Black': { bg: '#0F0F0F', roads: '#00A86B', water: '#1F1F1F' },
    'Aqua Blue & Charcoal': { bg: '#2B2B2B', roads: '#00FFBF', water: '#3B3B3B' },
    'Peach Orange & Graphite': { bg: '#3E3E3E', roads: '#FFB07C', water: '#4E4E4E' },
    'Lemon Yellow & Navy Blue': { bg: '#001529', roads: '#FFF44F', water: '#0A2539' },
    'Royal Blue & Coral Orange': { bg: '#304085', roads: '#FFFFFF', water: '#de663a' },
    'Bright Yellow & Teal Blue': { bg: '#37b4b8', roads: '#FFFFFF', water: '#eaf663' }
};

// === TOP 150 CITIES WITH SUBTITLES ===
const WORLD_CITIES = {
    // Asia
    'Tokyo': 'The Land of the Rising Sun',
    'Delhi': 'The Heart of India',
    'Shanghai': 'The Pearl of the Orient',
    'Beijing': 'The Forbidden City',
    'Mumbai': 'The City of Dreams',
    'Osaka': 'The Nation\'s Kitchen',
    'Dhaka': 'The City of Mosques',
    'Karachi': 'The City of Lights',
    'Kolkata': 'The City of Joy',
    'Chengdu': 'The Land of Abundance',
    'Guangzhou': 'The City of Flowers',
    'Shenzhen': 'China\'s Silicon Valley',
    'Jakarta': 'The Big Durian',
    'Bangkok': 'The City of Angels',
    'Seoul': 'The Soul of Asia',
    'Ho Chi Minh City': 'The Pearl of the Far East',
    'Singapore': 'The Lion City',
    'Hong Kong': 'The Pearl of the Orient',
    'Taipei': 'The Beautiful Island Capital',
    'Manila': 'The Pearl of the Orient Seas',
    'Kuala Lumpur': 'The Garden City of Lights',
    'Hanoi': 'The City of the Rising Dragon',
    'Riyadh': 'The Gardens of the Desert',
    'Dubai': 'The City of Gold',
    'Abu Dhabi': 'The Garden City',
    'Doha': 'The Pearl of the Gulf',
    'Tel Aviv': 'The White City',
    'Jerusalem': 'The Holy City',
    'Amman': 'The White City',
    'Beirut': 'The Paris of the Middle East',
    'Chennai': 'The Gateway to South India',
    'Bangalore': 'The Silicon Valley of India',
    'Hyderabad': 'The City of Pearls',
    'Pune': 'The Oxford of the East',
    'Jaipur': 'The Pink City',
    'Ahmedabad': 'The Manchester of India',
    'Kyoto': 'The Cultural Heart of Japan',
    'Nagoya': 'The Heart of Japan',
    'Fukuoka': 'The Gateway to Asia',
    'Busan': 'The Maritime Capital',
    'Yangon': 'The Garden City of the East',

    // Europe
    'London': 'The Big Smoke',
    'Paris': 'The City of Light',
    'Berlin': 'The City of Freedom',
    'Madrid': 'The City That Never Sleeps',
    'Rome': 'The Eternal City',
    'Barcelona': 'The City of Counts',
    'Vienna': 'The City of Music',
    'Amsterdam': 'The Venice of the North',
    'Prague': 'The City of a Hundred Spires',
    'Brussels': 'The Capital of Europe',
    'Munich': 'The Heart of Bavaria',
    'Milan': 'The Fashion Capital',
    'Dublin': 'The Fair City',
    'Lisbon': 'The City of Seven Hills',
    'Athens': 'The Cradle of Civilization',
    'Stockholm': 'The Venice of the North',
    'Copenhagen': 'The City of Spires',
    'Oslo': 'The Tiger City',
    'Helsinki': 'The Daughter of the Baltic',
    'Zurich': 'The Little Big City',
    'Geneva': 'The Peace Capital',
    'Budapest': 'The Pearl of the Danube',
    'Warsaw': 'The Phoenix City',
    'Krakow': 'The Cultural Capital',
    'Venice': 'The Floating City',
    'Florence': 'The Cradle of the Renaissance',
    'Naples': 'The City of the Sun',
    'Edinburgh': 'The Athens of the North',
    'Manchester': 'The Rainy City',
    'Liverpool': 'The Pool of Life',
    'Glasgow': 'The Dear Green Place',
    'Marseille': 'The Gateway to the South',
    'Lyon': 'The Capital of Gastronomy',
    'Nice': 'The Queen of the Riviera',
    'Seville': 'The Pearl of Andalusia',
    'Valencia': 'The City of Arts and Sciences',
    'Bilbao': 'The Botxo',
    'Porto': 'The Unvanquished City',
    'Hamburg': 'The Gateway to the World',
    'Frankfurt': 'The Mainhattan',
    'Cologne': 'The Cathedral City',
    'Düsseldorf': 'The Little Paris',
    'Rotterdam': 'The Gateway to Europe',
    'Antwerp': 'The Diamond City',
    'Moscow': 'The Third Rome',
    'St. Petersburg': 'The Venice of the North',
    'Istanbul': 'Where East Meets West',

    // North America
    'New York': 'The Big Apple',
    'Los Angeles': 'The City of Angels',
    'Chicago': 'The Windy City',
    'Houston': 'Space City',
    'Phoenix': 'The Valley of the Sun',
    'Philadelphia': 'The City of Brotherly Love',
    'San Antonio': 'The Alamo City',
    'San Diego': 'America\'s Finest City',
    'Dallas': 'The Big D',
    'San Francisco': 'The Golden Gate City',
    'Seattle': 'The Emerald City',
    'Denver': 'The Mile High City',
    'Boston': 'The Cradle of Liberty',
    'Austin': 'The Live Music Capital',
    'Nashville': 'Music City',
    'Portland': 'The City of Roses',
    'Las Vegas': 'Sin City',
    'Miami': 'The Magic City',
    'Atlanta': 'The City Too Busy to Hate',
    'New Orleans': 'The Big Easy',
    'Washington': 'The Nation\'s Capital',
    'Detroit': 'The Motor City',
    'Minneapolis': 'The City of Lakes',
    'San Jose': 'The Capital of Silicon Valley',
    'Baltimore': 'Charm City',
    'Toronto': 'The Six',
    'Montreal': 'The City of Saints',
    'Vancouver': 'The Hollywood of the North',
    'Calgary': 'The Stampede City',
    'Ottawa': 'The Capital of Canada',
    'Quebec City': 'The Gibraltar of America',
    'Mexico City': 'The City of Palaces',
    'Guadalajara': 'The Pearl of the West',
    'Monterrey': 'The Sultana del Norte',
    'Tijuana': 'The Gateway to Mexico',
    'Cancun': 'The Mexican Caribbean',

    // South America
    'São Paulo': 'The Concrete Jungle',
    'Rio de Janeiro': 'The Marvelous City',
    'Buenos Aires': 'The Paris of South America',
    'Lima': 'The City of Kings',
    'Bogotá': 'The Athens of South America',
    'Santiago': 'The Jewel of the Andes',
    'Caracas': 'The Sultana of the Avila',
    'Medellín': 'The City of Eternal Spring',
    'Quito': 'The Light of America',
    'Montevideo': 'The Switzerland of America',
    'Cartagena': 'The Heroic City',
    'Cusco': 'The Navel of the World',
    'Havana': 'The Pearl of the Antilles',
    'San Juan': 'The Walled City',

    // Africa
    'Cairo': 'The City of a Thousand Minarets',
    'Lagos': 'The Giant of Africa',
    'Johannesburg': 'The City of Gold',
    'Cape Town': 'The Mother City',
    'Nairobi': 'The Green City in the Sun',
    'Casablanca': 'The White City',
    'Marrakech': 'The Red City',
    'Addis Ababa': 'The New Flower',
    'Accra': 'The Gateway to West Africa',
    'Dar es Salaam': 'The Haven of Peace',
    'Tunis': 'The Olive Tree Capital',
    'Algiers': 'The White City',
    'Kigali': 'The Land of a Thousand Hills',
    'Dakar': 'The Gateway to Africa',
    'Abuja': 'The Centre of Unity',

    // Oceania
    'Sydney': 'The Harbour City',
    'Melbourne': 'The Garden City',
    'Brisbane': 'The River City',
    'Perth': 'The City of Light',
    'Auckland': 'The City of Sails',
    'Wellington': 'The Windy City',
    'Adelaide': 'The City of Churches',
    'Gold Coast': 'The Surfers Paradise',
    'Canberra': 'The Bush Capital',
    'Christchurch': 'The Garden City'
};

const DEFAULT_SUBTITLE = 'A Beautiful Place to Explore';

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
const INITIAL_CENTER = [139.6503, 35.6762]; // Tokyo
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
    selectedWaterColor: document.getElementById("selectedWaterColor"),
    labelColorInput: document.getElementById("labelColorInput"),
    labelColorHex: document.getElementById("labelColorHex"),
    labelColorAuto: document.getElementById("labelColorAuto")
};

// === STATE ===
let map;
let currentStyle = 'Pure Black & White';
let labelsEnabled = true;
let isLandscape = false;
let labelColorAuto = true;
let customLabelColor = null;
let isDownloading = false;

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
            { id: 'landcover', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['==', 'class', 'wood'], paint: { 'fill-color': palette.bg, 'fill-opacity': 0.4 } },
            { id: 'park', type: 'fill', source: 'openmaptiles', 'source-layer': 'park', paint: { 'fill-color': palette.bg, 'fill-opacity': 0.3 } },
            { id: 'water', type: 'fill', source: 'openmaptiles', 'source-layer': 'water', paint: { 'fill-color': palette.water } },
            { id: 'highway_major', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'motorway', 'trunk', 'primary'], paint: { 'line-color': palette.roads, 'line-width': 3 } },
            { id: 'highway_minor', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'secondary', 'tertiary'], paint: { 'line-color': palette.roads, 'line-width': 2 } },
            { id: 'highway_other', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'minor', 'service', 'track'], paint: { 'line-color': palette.roads, 'line-width': 1, 'line-opacity': 0.6 } },
            { id: 'railway', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['==', 'class', 'rail'], paint: { 'line-color': palette.roads, 'line-width': 1, 'line-opacity': 0.4 } },
            { id: 'building', type: 'fill', source: 'openmaptiles', 'source-layer': 'building', paint: { 'fill-color': palette.roads, 'fill-opacity': 0.3 } }
        ]
    };
}

// === POSTER FUNCTIONS ===
function applyTextColor(color) {
    elements.poster.style.color = color;
    if (elements.posterFooter) elements.posterFooter.style.color = color;
    elements.labelColorInput.value = color;
    elements.labelColorHex.value = color.toUpperCase();
}

function updatePosterColors(palette) {
    const autoColor = isLightColor(palette.bg) ? '#000000' : '#FFFFFF';
    elements.poster.style.backgroundColor = palette.bg;
    if (elements.posterFooter) elements.posterFooter.style.backgroundColor = 'transparent';
    applyTextColor(labelColorAuto ? autoColor : customLabelColor);
}

function updateLabelColor(color) {
    customLabelColor = color;
    labelColorAuto = false;
    applyTextColor(color);
    elements.labelColorAuto.classList.replace('text-[#440edf]', 'text-[#666]');
}

function setLabelColorAuto() {
    labelColorAuto = true;
    customLabelColor = null;
    updatePosterColors(PALETTES[currentStyle]);
    elements.labelColorAuto.classList.replace('text-[#666]', 'text-[#440edf]');
}

function updateFooter(lat, lon) {
    if (!elements.taglineInput.value.trim()) {
        elements.coordinates.textContent = formatCoordinates(lat, lon);
    }
}

function renderCityTitle(text) {
    const titleEl = elements.cityTitle;
    if (!titleEl) return;

    const content = text || "";
    const isVertical = elements.poster.classList.contains('poster-style-vertical');
    const needsUpdate = titleEl.dataset.layout !== (isVertical ? 'vertical' : 'default') || titleEl.dataset.renderedText !== content;

    if (!content) {
        titleEl.innerHTML = '';
        titleEl.style.display = 'none';
    } else if (isVertical) {
        if (needsUpdate) {
            titleEl.innerHTML = [...content].map(c => `<span>${c === ' ' ? '\u00A0' : c}</span>`).join('');
        }
        titleEl.style.display = 'flex';
    } else {
        if (needsUpdate) titleEl.textContent = content;
        titleEl.style.display = 'block';
    }
    titleEl.dataset.layout = isVertical ? 'vertical' : 'default';
    titleEl.dataset.renderedText = content;
}

function updateLabels() {
    const titleText = (elements.titleInput.value || "").trim().toUpperCase();
    const subtitleText = (elements.subtitleInput.value || "").trim();
    const taglineText = (elements.taglineInput.value || "").trim();

    if (labelsEnabled) {
        renderCityTitle(titleText);

        elements.citySubtitle.textContent = subtitleText;
        elements.citySubtitle.style.display = subtitleText ? 'block' : 'none';

        if (taglineText) {
            elements.coordinates.textContent = taglineText;
        }

        const hasCoordinates = Boolean(elements.coordinates.textContent);
        elements.coordinates.style.display = hasCoordinates ? 'block' : 'none';
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

function syncZoomUI() {
    const zoom = map.getZoom().toFixed(1);
    elements.zoomInput.value = zoom;
    elements.zoomValue.textContent = zoom;
}

function onMapUpdate() {
    syncZoomUI();
    const { lat, lng } = map.getCenter();
    updateFooter(lat, lng);
    updateRoadVisibility();
}

function setupMapEvents() {
    map.on("load", () => {
        onMapUpdate();
        updatePosterColors(PALETTES[currentStyle]);
    });
    map.on("moveend", onMapUpdate);
}

function changeMapStyle(styleKey) {
    const { lng, lat } = map.getCenter();
    const zoom = map.getZoom();
    map.remove();
    currentStyle = styleKey;
    map = initMap([lng, lat], zoom, styleKey);
    setupMapEvents();
    map.once("load", () => setStatus("Map style updated."));
}

// === GEOCODING ===
function getCitySubtitle(cityName) {
    const lowerName = cityName.toLowerCase();

    // First pass: exact match
    for (const [city, subtitle] of Object.entries(WORLD_CITIES)) {
        if (city.toLowerCase() === lowerName) return subtitle;
    }

    // Second pass: input contains a full city name (e.g. "New York City" → "New York")
    // Sort by name length descending so longer (more specific) names match first
    const sortedEntries = Object.entries(WORLD_CITIES).sort((a, b) => b[0].length - a[0].length);
    for (const [city, subtitle] of sortedEntries) {
        if (lowerName.includes(city.toLowerCase())) return subtitle;
    }

    return DEFAULT_SUBTITLE;
}

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

        // Update title and subtitle
        const cityName = name.trim();
        elements.titleInput.value = cityName.toUpperCase();
        elements.subtitleInput.value = getCitySubtitle(cityName);

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
    if (isDownloading) return;
    isDownloading = true;

    setStatus("Rendering high-resolution poster… this may take a moment.");

    try {
        await document.fonts.ready;
        const selectedSize = elements.sizeSelect.value;
        const printSize = PRINT_SIZES[selectedSize];
        const { offsetWidth: w, offsetHeight: h } = elements.poster;

        let scale = 3;
        if (printSize) {
            const [tw, th] = isLandscape ? [printSize.height, printSize.width] : [printSize.width, printSize.height];
            scale = Math.min(Math.max(tw * TARGET_DPI / w, th * TARGET_DPI / h), 16384 / Math.max(w, h), 12);
        }

        await new Promise(r => setTimeout(r, 100));

        // Temporary image replacement for WebGL context to fix html2canvas issues
        const mapCanvas = map.getCanvas();
        const tempImg = document.createElement("img");
        tempImg.src = mapCanvas.toDataURL();
        Object.assign(tempImg.style, {
            position: "absolute", left: "0", top: "0", width: "100%", height: "100%", zIndex: "0"
        });

        const mapContainer = document.getElementById("mapContainer");
        mapContainer.appendChild(tempImg);
        mapCanvas.style.visibility = "hidden";

        const canvas = await html2canvas(elements.poster, {
            useCORS: true, scale, logging: false, backgroundColor: null,
            imageTimeout: 15000, width: w, height: h
        });

        // Cleanup
        mapContainer.removeChild(tempImg);
        mapCanvas.style.visibility = "visible";

        if (!canvas?.width || !canvas?.height) throw new Error("Canvas rendering failed");

        const blob = await new Promise((res, rej) => canvas.toBlob(b => b ? res(b) : rej(new Error("Failed to create image")), "image/png", 1.0));
        const url = URL.createObjectURL(blob);
        const cityName = elements.cityTitle.textContent.replace(/\s+/g, "_").toLowerCase() || "city";

        Object.assign(document.createElement("a"), { href: url, download: `${cityName}_${selectedSize}_600dpi_${Date.now()}.png` }).click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);

        const sizeMB = (blob.size / 1048576).toFixed(1);
        const effectiveWidth = isLandscape ? (printSize?.height || 36) : (printSize?.width || 24);
        const dpi = Math.round(canvas.width / effectiveWidth);
        setStatus(`Poster downloaded (${canvas.width} × ${canvas.height} px @ ~${dpi} DPI, ${sizeMB}MB).`);
    } catch (err) {
        console.error("Download error:", err);
        setStatus(`Error: ${err.message}. Try a smaller size or refresh.`, true);
    } finally {
        isDownloading = false;
    }
}

// === EVENT LISTENERS ===
function setZoom(zoom) {
    zoom = Math.max(1, Math.min(20, zoom));
    elements.zoomInput.value = zoom;
    elements.zoomValue.textContent = zoom.toFixed(1);
    map.setZoom(zoom);
}

function setupEventListeners() {
    elements.zoomInput.addEventListener("input", () => setZoom(parseFloat(elements.zoomInput.value)));
    elements.zoomIncrement.addEventListener("click", () => setZoom(parseFloat(elements.zoomInput.value) + 0.5));
    elements.zoomDecrement.addEventListener("click", () => setZoom(parseFloat(elements.zoomInput.value) - 0.5));

    elements.styleSelect.addEventListener("change", () => {
        setStatus("Updating map style…");
        const style = elements.styleSelect.value;
        changeMapStyle(style);
        updateSelectedThemePreview(style);
    });

    elements.toggleThemesGrid.addEventListener("click", () => {
        const collapsed = elements.themesGrid.classList.toggle('collapsed');
        elements.toggleThemesGrid.textContent = collapsed ? 'Show all' : 'Show less';
    });

    elements.posterStyleSelect.addEventListener("change", () => {
        elements.poster.className = elements.poster.className.replace(/poster-style-\w+/g, `poster-style-${elements.posterStyleSelect.value}`);
        updateLabels();
        setTimeout(() => map.resize(), 350);
    });

    elements.sizeSelect.addEventListener("change", () => {
        elements.poster.className = elements.poster.className.replace(/size-\S+/g, '').trim();
        if (elements.sizeSelect.value !== 'default') elements.poster.classList.add(`size-${elements.sizeSelect.value}`);
        setTimeout(() => map.resize(), 350);
    });

    elements.cityInput.addEventListener("keydown", e => e.key === "Enter" && searchCity(elements.cityInput.value.trim()));
    elements.downloadBtn.addEventListener("click", downloadPoster);

    elements.orientationToggle.addEventListener("click", () => {
        isLandscape = !isLandscape;
        elements.orientationToggle.classList.toggle("active", isLandscape);
        elements.poster.classList.toggle("landscape", isLandscape);
        setTimeout(() => map.resize(), 350);
    });

    elements.labelsToggle.addEventListener("click", () => {
        labelsEnabled = !labelsEnabled;
        elements.labelsToggle.classList.toggle("active", labelsEnabled);
        updateLabels();
    });

    [elements.titleInput, elements.subtitleInput].forEach(el => el.addEventListener("input", updateLabels));
    elements.taglineInput.addEventListener("input", () => {
        updateLabels();
        if (!elements.taglineInput.value.trim()) {
            const { lat, lng } = map.getCenter();
            updateFooter(lat, lng);
        }
    });

    elements.labelColorInput.addEventListener("input", e => updateLabelColor(e.target.value));
    elements.labelColorHex.addEventListener("input", e => {
        const val = e.target.value.startsWith('#') ? e.target.value : '#' + e.target.value;
        if (/^#[0-9A-Fa-f]{6}$/.test(val)) updateLabelColor(val);
    });
    elements.labelColorHex.addEventListener("blur", e => {
        const val = e.target.value.startsWith('#') ? e.target.value : '#' + e.target.value;
        if (!/^#[0-9A-Fa-f]{6}$/.test(val)) e.target.value = elements.labelColorInput.value.toUpperCase();
    });
    elements.labelColorAuto.addEventListener("click", setLabelColorAuto);
}

// === 3D GLOBE ===
function initGlobe() {
    const container = document.getElementById('globeContainer');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const radius = Math.min(width, height) * 0.4;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    camera.position.z = radius * 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // --- Lighting ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const sunLight = new THREE.DirectionalLight(0xffffff, 0.4);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // --- Palette cycling for dual-tone globe ---
    const globePalettes = [
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

    let currentPaletteIndex = 0;
    let nextPaletteIndex = 1;
    let paletteLerp = 0;
    const PALETTE_DURATION = 3.0; // seconds per palette

    function hexToVec3(hex) {
        const c = hex.replace('#', '');
        return {
            r: parseInt(c.substr(0, 2), 16) / 255,
            g: parseInt(c.substr(2, 2), 16) / 255,
            b: parseInt(c.substr(4, 2), 16) / 255
        };
    }

    // --- Custom shader material for dual-tone globe ---
    const landMask = new THREE.TextureLoader().load(
        'https://unpkg.com/three-globe@2.31.1/example/img/earth-water.png'
    );
    const bumpTexture = new THREE.TextureLoader().load(
        'https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png'
    );

    const globeUniforms = {
        landMap: { value: landMask },
        topoMap: { value: bumpTexture },
        landColor: { value: new THREE.Color(globePalettes[0].land) },
        waterColor: { value: new THREE.Color(globePalettes[0].water) },
        targetLandColor: { value: new THREE.Color(globePalettes[1].land) },
        targetWaterColor: { value: new THREE.Color(globePalettes[1].water) },
        blendFactor: { value: 0.0 },
        displacementScale: { value: radius * 0.08 }
    };

    const earthGeo = new THREE.SphereGeometry(radius, 200, 200);
    const earthMat = new THREE.ShaderMaterial({
        uniforms: globeUniforms,
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

                // Elevation-based shading: valleys are darker, peaks are lighter
                float elevFactor = pow(topo, 0.6);
                vec3 landShaded = curLand * (0.5 + 0.7 * elevFactor);
                // Water depth: deeper areas darker
                vec3 waterShaded = curWater * (0.8 + 0.2 * (1.0 - topo));

                vec3 baseColor = mix(landShaded, waterShaded, isWater);

                // Compute normal from topology for per-pixel bump lighting
                float texel = 1.0 / 2048.0;
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
    const earth = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earth);

    // --- Glowing atmosphere that matches current palette ---
    const glowGeo = new THREE.SphereGeometry(radius * 1.04, 64, 64);
    const glowMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(globePalettes[0].land),
        transparent: true,
        opacity: 0.06,
        side: THREE.BackSide
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    globeGroup.add(glowMesh);

    // --- City markers ---
    const cities = [
        { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
        { name: 'Paris', lat: 48.8566, lon: 2.3522 },
        { name: 'New York', lat: 40.7128, lon: -74.006 }
    ];

    const markerGroup = new THREE.Group();
    globeGroup.add(markerGroup);
    const MARKER_ACCENT = '#d2e823';

    cities.forEach(city => {
        const phi = (90 - city.lat) * Math.PI / 180;
        const theta = (city.lon + 180) * Math.PI / 180;
        const x = -(radius * 1.01) * Math.sin(phi) * Math.cos(theta);
        const y = (radius * 1.01) * Math.cos(phi);
        const z = (radius * 1.01) * Math.sin(phi) * Math.sin(theta);

        const markerGeo = new THREE.SphereGeometry(3, 12, 12);
        const markerMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(MARKER_ACCENT) });
        const marker = new THREE.Mesh(markerGeo, markerMat);
        marker.position.set(x, y, z);
        markerGroup.add(marker);

        const pulseGeo = new THREE.RingGeometry(4.5, 6, 24);
        const pulseMat = new THREE.MeshBasicMaterial({
            color: new THREE.Color(MARKER_ACCENT),
            transparent: true,
            opacity: 0.5,
            side: THREE.DoubleSide
        });
        const pulse = new THREE.Mesh(pulseGeo, pulseMat);
        pulse.position.set(x, y, z);
        pulse.lookAt(0, 0, 0);
        pulse.userData = { baseScale: 1 };
        markerGroup.add(pulse);
    });

    // --- Mouse interaction ---
    let isDragging = false;
    let previousMouse = { x: 0, y: 0 };
    let rotationSpeed = { x: 0, y: 0 };

    container.addEventListener('mousedown', e => {
        isDragging = true;
        previousMouse = { x: e.clientX, y: e.clientY };
        rotationSpeed = { x: 0, y: 0 };
    });

    container.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const dx = e.clientX - previousMouse.x;
        const dy = e.clientY - previousMouse.y;
        globeGroup.rotation.y += dx * 0.005;
        globeGroup.rotation.x += dy * 0.005;
        rotationSpeed = { x: dy * 0.005, y: dx * 0.005 };
        previousMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    container.addEventListener('touchstart', e => {
        isDragging = true;
        previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        rotationSpeed = { x: 0, y: 0 };
    }, { passive: true });

    container.addEventListener('touchmove', e => {
        if (!isDragging) return;
        const dx = e.touches[0].clientX - previousMouse.x;
        const dy = e.touches[0].clientY - previousMouse.y;
        globeGroup.rotation.y += dx * 0.005;
        globeGroup.rotation.x += dy * 0.005;
        rotationSpeed = { x: dy * 0.005, y: dx * 0.005 };
        previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    container.addEventListener('touchend', () => { isDragging = false; }, { passive: true });

    // --- Animation loop ---
    let time = 0;
    let animId;

    function animate() {
        animId = requestAnimationFrame(animate);
        time += 0.016;

        // --- Palette transition ---
        paletteLerp += 0.016 / PALETTE_DURATION;
        if (paletteLerp >= 1.0) {
            paletteLerp = 0;
            currentPaletteIndex = nextPaletteIndex;
            nextPaletteIndex = (nextPaletteIndex + 1) % globePalettes.length;

            globeUniforms.landColor.value.set(globePalettes[currentPaletteIndex].land);
            globeUniforms.waterColor.value.set(globePalettes[currentPaletteIndex].water);
            globeUniforms.targetLandColor.value.set(globePalettes[nextPaletteIndex].land);
            globeUniforms.targetWaterColor.value.set(globePalettes[nextPaletteIndex].water);
        }

        // Smooth easing for blend
        const ease = paletteLerp < 0.5
            ? 2 * paletteLerp * paletteLerp
            : 1 - Math.pow(-2 * paletteLerp + 2, 2) / 2;
        globeUniforms.blendFactor.value = ease;

        // Update glow + marker colors to match current blend
        const curLand = hexToVec3(globePalettes[currentPaletteIndex].land);
        const nxtLand = hexToVec3(globePalettes[nextPaletteIndex].land);
        const blendedR = curLand.r + (nxtLand.r - curLand.r) * ease;
        const blendedG = curLand.g + (nxtLand.g - curLand.g) * ease;
        const blendedB = curLand.b + (nxtLand.b - curLand.b) * ease;
        const blendedColor = new THREE.Color(blendedR, blendedG, blendedB);

        glowMat.color.copy(blendedColor);

        if (!isDragging) {
            globeGroup.rotation.y += 0.002;
            if (Math.abs(rotationSpeed.x) > 0.0001 || Math.abs(rotationSpeed.y) > 0.0001) {
                globeGroup.rotation.x += rotationSpeed.x;
                globeGroup.rotation.y += rotationSpeed.y;
                rotationSpeed.x *= 0.95;
                rotationSpeed.y *= 0.95;
            }
        }

        // Pulse city markers
        markerGroup.children.forEach((child, i) => {
            if (child.userData.baseScale !== undefined) {
                const scale = 1 + 0.3 * Math.sin(time * 2 + i);
                child.scale.set(scale, scale, scale);
                child.material.opacity = 0.3 + 0.4 * Math.abs(Math.sin(time * 2 + i));
            }
        });

        renderer.render(scene, camera);
    }

    animate();

    // --- Responsive resize handling ---
    let resizeTimeout;
    const resizeObserver = new ResizeObserver(entries => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const entry = entries[0];
            if (!entry) return;
            const newWidth = entry.contentRect.width;
            const newHeight = entry.contentRect.height;
            if (newWidth === 0 || newHeight === 0) return;

            const newRadius = Math.min(newWidth, newHeight) * 0.4;

            // Update renderer
            renderer.setSize(newWidth, newHeight);

            // Update camera
            camera.aspect = newWidth / newHeight;
            camera.position.z = newRadius * 3;
            camera.updateProjectionMatrix();

            // Rebuild earth geometry with new radius
            earth.geometry.dispose();
            earth.geometry = new THREE.SphereGeometry(newRadius, 200, 200);
            globeUniforms.displacementScale.value = newRadius * 0.08;

            // Rebuild glow geometry
            glowMesh.geometry.dispose();
            glowMesh.geometry = new THREE.SphereGeometry(newRadius * 1.04, 64, 64);

            // Reposition city markers
            let markerIdx = 0;
            cities.forEach(city => {
                const phi = (90 - city.lat) * Math.PI / 180;
                const theta = (city.lon + 180) * Math.PI / 180;
                const x = -(newRadius * 1.01) * Math.sin(phi) * Math.cos(theta);
                const y = (newRadius * 1.01) * Math.cos(phi);
                const z = (newRadius * 1.01) * Math.sin(phi) * Math.sin(theta);

                // Dot marker
                const dot = markerGroup.children[markerIdx];
                if (dot) {
                    dot.geometry.dispose();
                    dot.geometry = new THREE.SphereGeometry(Math.max(2, newRadius * 0.025), 12, 12);
                    dot.position.set(x, y, z);
                }
                markerIdx++;

                // Pulse ring
                const ring = markerGroup.children[markerIdx];
                if (ring) {
                    ring.geometry.dispose();
                    const ringInner = Math.max(3, newRadius * 0.037);
                    const ringOuter = Math.max(4, newRadius * 0.05);
                    ring.geometry = new THREE.RingGeometry(ringInner, ringOuter, 24);
                    ring.position.set(x, y, z);
                    ring.lookAt(0, 0, 0);
                }
                markerIdx++;
            });
        }, 100); // debounce 100ms
    });
    resizeObserver.observe(container);

    // Cleanup function
    return () => {
        cancelAnimationFrame(animId);
        resizeObserver.disconnect();
        clearTimeout(resizeTimeout);
        renderer.dispose();
        container.innerHTML = '';
    };
}

// === INTRO MODAL ===
function setupIntroModal() {
    const modal = document.getElementById('introModal');
    if (!modal) return;

    const cleanupGlobe = initGlobe();

    // Render mini MapLibre maps in each postcard
    const miniMaps = [];
    const miniMapConfigs = [
        { id: 'minimap-tokyo', lon: 139.6503, lat: 35.6762 },
        { id: 'minimap-paris', lon: 2.3522, lat: 48.8566 },
        { id: 'minimap-newyork', lon: -74.0060, lat: 40.7128 }
    ];
    const miniPalette = { bg: '#f0f0f5', roads: '#440edf', water: '#d2e823' };
    miniMapConfigs.forEach(cfg => {
        const container = document.getElementById(cfg.id);
        if (!container) return;
        const m = new maplibregl.Map({
            container: cfg.id,
            style: createMapStyle(miniPalette),
            center: [cfg.lon, cfg.lat],
            zoom: 11,
            interactive: false,
            attributionControl: false
        });
        miniMaps.push(m);
    });

    function closeModal(cityName, lat, lon) {
        modal.classList.add('closing');
        modal.addEventListener('animationend', () => {
            modal.remove();
            if (cleanupGlobe) cleanupGlobe();
            miniMaps.forEach(m => m.remove());

            if (cityName && lat !== undefined && lon !== undefined) {
                map.flyTo({ center: [lon, lat], zoom: 12 });
                elements.cityInput.value = cityName;
                elements.titleInput.value = cityName.toUpperCase();
                elements.subtitleInput.value = getCitySubtitle(cityName);
                updateLabels();
                updateFooter(lat, lon);
                setStatus('Location updated.');
            }
        }, { once: true });
    }

    // City buttons
    document.querySelectorAll('.intro-city-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const city = btn.dataset.city;
            const lat = parseFloat(btn.dataset.lat);
            const lon = parseFloat(btn.dataset.lon);
            closeModal(city, lat, lon);
        });
    });

    // Skip / Explore freely button
    document.getElementById('skipIntro')?.addEventListener('click', () => closeModal());

    // Click backdrop to close
    document.getElementById('introBackdrop')?.addEventListener('click', () => closeModal());
}

// === INITIALIZATION ===
const getQueryParam = param => new URLSearchParams(window.location.search).get(param);

function initializeApp(center, zoom, cityName) {
    map = initMap(center, zoom, currentStyle);
    setupMapEvents();
    setupEventListeners();
    elements.cityInput.value = cityName;
    elements.titleInput.value = cityName.toUpperCase();
    elements.subtitleInput.value = getCitySubtitle(cityName);
    updateLabels();
    generateThemesGrid();
    updateSelectedThemePreview(currentStyle);
    setupIntroModal();
}

async function init() {
    const cityParam = getQueryParam('city');

    if (cityParam) {
        try {
            setStatus("Loading city location…");
            const res = await fetch(`https://api.maptiler.com/geocoding/${encodeURIComponent(cityParam)}.json?key=${MAPTILER_KEY}`);
            if (res.ok) {
                const data = await res.json();
                if (data.features?.length) {
                    initializeApp(data.features[0].center, 12, cityParam);
                    map.once('load', () => setStatus("City loaded."));
                    return;
                }
            }
        } catch (err) {
            console.error("Error loading city:", err);
            setStatus("Error loading city, using default location.", true);
        }
    }

    initializeApp(INITIAL_CENTER, INITIAL_ZOOM, "Tokyo");
}

// Start the app
init();
