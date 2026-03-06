// ═══════════════════════════════════════════════════════════════
// MAPI — 3D Frame Viewer
// Self-contained page logic: data, Three.js scene, frame, map, autocomplete
// ═══════════════════════════════════════════════════════════════

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { USDZExporter } from 'three/addons/exporters/USDZExporter.js';

// === CONFIGURATION ===
const MAPTILER_KEY = "2Q7XT8l9Iqoe1Z9gbvHw";

// === COLOR PALETTES ===
// 120+ curated color themes spanning diverse styles and aesthetics
const PALETTES = {
    // === ESSENTIALS & MONOCHROME ===
    'Pure Black & White': { bg: '#FFFFFF', roads: '#000000', water: '#E0E0E0', buildings: '#F5F5F5', parks: '#EAEAEA' },
    'Noir (Dark Mode)': { bg: '#121212', roads: '#333333', water: '#000000', buildings: '#1A1A1A', parks: '#0A0A0A' },
    'Graphite & Ivory': { bg: '#FFFFF0', roads: '#383838', water: '#E8E8E0', buildings: '#F2F2E4', parks: '#ECECE0' },
    'Warm Gray': { bg: '#F5F0EB', roads: '#6B635B', water: '#DDD5CB', buildings: '#EAE3DA', parks: '#D4CCC2' },
    'Cool Steel': { bg: '#EAEEF2', roads: '#4A5568', water: '#CBD5E0', buildings: '#E2E8F0', parks: '#D1D9E5' },
    'Charcoal Chalk': { bg: '#2D2D2D', roads: '#D4D0C8', water: '#1F1F1F', buildings: '#3A3A3A', parks: '#252525' },
    'High Contrast': { bg: '#000000', roads: '#FFFFFF', water: '#1A1A1A', buildings: '#0A0A0A', parks: '#111111' },
    'Minimalism': { bg: '#FAFAFA', roads: '#2C2C2C', water: '#E8E8E8', buildings: '#F2F2F2', parks: '#ECECEC' },

    // === PANTONE & DESIGN TRENDS ===
    'Mocha Mousse': { bg: '#FAF6F1', roads: '#A47764', water: '#D4C4B5', buildings: '#EFE7DE', parks: '#CFC0AE' },
    'Future Dusk': { bg: '#FBF8F3', roads: '#6B5B7A', water: '#E8D5B7', buildings: '#E8DFEC', parks: '#D3C4CD' },
    'Digital Lavender': { bg: '#121212', roads: '#B4A7D6', water: '#1E1E1E', buildings: '#2A2A35', parks: '#252535' },
    'Apricot Crush': { bg: '#E8F4F3', roads: '#E89B6F', water: '#B8D8D6', buildings: '#FEEFDF', parks: '#C3EBEB' },
    'Peach Fuzz': { bg: '#FFF5ED', roads: '#FFBE98', water: '#FFDAC1', buildings: '#FFF0E5', parks: '#FFD1B3' },
    'Butter Yellow': { bg: '#FFFDF5', roads: '#D4A843', water: '#F5EECC', buildings: '#FFF9E6', parks: '#EDE3A7' },
    'Quietude Blue': { bg: '#F0F5FA', roads: '#6B8FA3', water: '#C5D9E8', buildings: '#E3EDF5', parks: '#B3CEDA' },
    'Verdant Green': { bg: '#F2F7F0', roads: '#4A7C59', water: '#C8DCC0', buildings: '#E5EDE0', parks: '#A8C49B' },

    // === EARTH & NATURE ===
    'Sage & Terracotta': { bg: '#E8E5D8', roads: '#C67B5C', water: '#A8B5A0', buildings: '#D8D4C8', parks: '#98A68F' },
    'Deep Forest': { bg: '#2C3A32', roads: '#E8DFCA', water: '#1B241E', buildings: '#3B4D43', parks: '#223028' },
    'Desert Sand': { bg: '#E8E0D0', roads: '#8C6C50', water: '#C9B896', buildings: '#DCD4C4', parks: '#C2B6A2' },
    'Clay & Sage': { bg: '#E5E8E0', roads: '#9E6B55', water: '#B8C4A8', buildings: '#D2D6CB', parks: '#A4B492' },
    'Moss & Stone': { bg: '#D4CFC4', roads: '#5B6B50', water: '#8E9880', buildings: '#C4BFB4', parks: '#7A8A6D' },
    'Volcanic Ash': { bg: '#3A3535', roads: '#C8B8A0', water: '#2C2828', buildings: '#4A4545', parks: '#332F2F' },
    'Birch & Lichen': { bg: '#F0ECE3', roads: '#7A8B6F', water: '#C8D4BA', buildings: '#E4E0D6', parks: '#A8B896' },
    'Red Canyon': { bg: '#D4A574', roads: '#8B3A2A', water: '#6B8E8E', buildings: '#C49464', parks: '#9B7B52' },
    'Bamboo Grove': { bg: '#F5F2E6', roads: '#8B9B5A', water: '#B8C8A8', buildings: '#EBE8DA', parks: '#9AAC6E' },
    'Tundra': { bg: '#E0E4E8', roads: '#7B8890', water: '#B0BBC6', buildings: '#D0D4D8', parks: '#A0AAB2' },

    // === OCEANIC & COASTAL ===
    'Deep Navy': { bg: '#0A1128', roads: '#D6E4F0', water: '#000000', buildings: '#131C38', parks: '#0F1832' },
    'Mediterranean': { bg: '#F5F3ED', roads: '#2E5984', water: '#9CBDD4', buildings: '#E8E4D8', parks: '#C4D8DB' },
    'Coastal Mist': { bg: '#E8E4DC', roads: '#5C7A84', water: '#B8C8C8', buildings: '#DEDACF', parks: '#A8B8B8' },
    'Tropical Reef': { bg: '#0C2E3D', roads: '#48D1CC', water: '#062038', buildings: '#14384A', parks: '#0A2830' },
    'Arctic Ocean': { bg: '#E8F0F5', roads: '#3A6B8C', water: '#A0C4D8', buildings: '#D8E5EE', parks: '#B5D0DE' },
    'Abyssal': { bg: '#040810', roads: '#1E90FF', water: '#000408', buildings: '#0C1420', parks: '#081018' },
    'Coral Lagoon': { bg: '#F0F8F8', roads: '#E87461', water: '#7BC8C8', buildings: '#E8F0F0', parks: '#A0D8D0' },

    // === UNIQUE VISUAL STYLES ===
    'Blueprint': { bg: '#0d1c87', roads: '#FFFFFF', water: '#0d1c87', buildings: '#0d1c87', parks: '#0d1c87' },
    'Cyberpunk 2077': { bg: '#0D0E15', roads: '#FCE205', water: '#05D5FA', buildings: '#2E1A47', parks: '#FF0055' },
    'Synthwave': { bg: '#180A2D', roads: '#FF007F', water: '#4D0099', buildings: '#301350', parks: '#00F0FF' },
    'Vaporwave': { bg: '#FFB6C1', roads: '#00FFFF', water: '#8A2BE2', buildings: '#FF69B4', parks: '#9370DB' },
    'Matrix': { bg: '#000000', roads: '#00FF41', water: '#003B00', buildings: '#008F11', parks: '#005F00' },
    'Golden Hour': { bg: '#FFDFBA', roads: '#FF8C00', water: '#FFB347', buildings: '#FFC8A2', parks: '#FFA07A' },
    'Blood Moon': { bg: '#1A0505', roads: '#FF3333', water: '#400000', buildings: '#2D0A0A', parks: '#1F0000' },
    'Infrared': { bg: '#1A0A10', roads: '#FF1744', water: '#330018', buildings: '#2A1420', parks: '#200A15' },
    'X-Ray': { bg: '#000810', roads: '#00E5FF', water: '#001020', buildings: '#0A1828', parks: '#051418' },
    'Thermal Vision': { bg: '#0D0040', roads: '#FF4500', water: '#1A0060', buildings: '#FFD700', parks: '#00FF00' },
    'Satellite View': { bg: '#2A3C2A', roads: '#C8C0A8', water: '#1A3050', buildings: '#3A4A3A', parks: '#354535' },
    'Watercolor': { bg: '#FBF8F0', roads: '#7B9BAC', water: '#A8C8D8', buildings: '#F0E8D8', parks: '#B8D0A8' },
    'Ink Wash': { bg: '#F5F0E8', roads: '#2C2C2C', water: '#C8C0B0', buildings: '#E8E0D4', parks: '#D0C8B8' },
    'Risograph': { bg: '#FFF5E6', roads: '#FF5470', water: '#0074D9', buildings: '#FFE0CC', parks: '#7FDBFF' },
    'Duotone Magenta': { bg: '#1A0520', roads: '#FF00FF', water: '#0D0310', buildings: '#2A0A35', parks: '#200828' },
    'Glitch': { bg: '#0A0A0A', roads: '#00FF88', water: '#FF0066', buildings: '#1A1A1A', parks: '#0066FF' },

    // === METALLIC & LUXE ===
    'Midnight & Gold': { bg: '#1A1A2E', roads: '#D4AF37', water: '#16213E', buildings: '#242442', parks: '#202035' },
    'Silver & Obsidian': { bg: '#0F0F14', roads: '#E5E4E2', water: '#1A1A20', buildings: '#242430', parks: '#1F1F2A' },
    'Copper & Slate': { bg: '#3D4852', roads: '#B87333', water: '#4D5862', buildings: '#505E6B', parks: '#45515C' },
    'Rose Gold': { bg: '#FFF5F0', roads: '#B76E79', water: '#F0D5CC', buildings: '#FFE8E0', parks: '#E8C4BA' },
    'Platinum': { bg: '#E8E8E8', roads: '#A0A0A0', water: '#C8C8C8', buildings: '#D8D8D8', parks: '#BEBEBE' },
    'Black & Bronze': { bg: '#0A0A08', roads: '#CD7F32', water: '#141410', buildings: '#1E1E1A', parks: '#161612' },
    'Emerald & Pearl': { bg: '#F8F8F0', roads: '#2E8B57', water: '#D8E8D0', buildings: '#F0F0E5', parks: '#C0D8B0' },

    // === MINIMALIST & GLOBAL ===
    'Tokyo Night': { bg: '#1A1B26', roads: '#DECAAA', water: '#24283B', buildings: '#292E42', parks: '#6A7268' },
    'Nordic Ice': { bg: '#F0F4F8', roads: '#5B7C99', water: '#D4E0E8', buildings: '#E1E8F0', parks: '#C9D6DF' },
    'Kyoto Matcha': { bg: '#FFFEF5', roads: '#587545', water: '#D4E0C8', buildings: '#F0EFE1', parks: '#AABF9B' },
    'Havana Sunset': { bg: '#FFF0D4', roads: '#D2691E', water: '#FFD8A0', buildings: '#FFE4B8', parks: '#E8C888' },
    'Marrakech Souk': { bg: '#F4E8D0', roads: '#C75B12', water: '#D4C098', buildings: '#E8D4B0', parks: '#B8A878' },
    'Santorini': { bg: '#FFFFFF', roads: '#1E4D8C', water: '#4A90D9', buildings: '#F0F5FF', parks: '#D0E0F0' },
    'Mumbai Monsoon': { bg: '#2A3540', roads: '#C8B890', water: '#1E2830', buildings: '#354550', parks: '#2C3840' },
    'Reykjavik': { bg: '#E5EAF0', roads: '#4A5B6E', water: '#8AACCC', buildings: '#D5DAE0', parks: '#B0BBCC' },
    'Nairobi Savanna': { bg: '#E8D8B4', roads: '#8B5E3C', water: '#7AA890', buildings: '#DCC8A0', parks: '#A8B878' },
    'Seoul Neon': { bg: '#15151E', roads: '#E84393', water: '#0C0C14', buildings: '#20202C', parks: '#6C5CE7' },

    // === RETRO & VINTAGE ===
    '70s Vintage': { bg: '#FDF1D6', roads: '#D97736', water: '#487A7B', buildings: '#EACD9E', parks: '#8E9B6C' },
    'Art Deco': { bg: '#1E1E1E', roads: '#C9A227', water: '#2B2B2B', buildings: '#303030', parks: '#141414' },
    '50s Diner': { bg: '#FFF0E0', roads: '#D24D4D', water: '#87CEEB', buildings: '#FFE0CC', parks: '#98D898' },
    '80s Miami': { bg: '#1A0A2E', roads: '#FF6EC7', water: '#0044AA', buildings: '#2A1A3E', parks: '#00CED1' },
    '90s Grunge': { bg: '#2C2824', roads: '#8B7D6B', water: '#1E1C18', buildings: '#3C3834', parks: '#34302C' },
    'Victorian': { bg: '#F2E8D6', roads: '#5C3D2E', water: '#8E9E8C', buildings: '#E0D4C0', parks: '#7B8B70' },
    'Art Nouveau': { bg: '#F5EEE0', roads: '#7B6B4A', water: '#8EAAAA', buildings: '#E8DEC8', parks: '#88A870' },
    'Polaroid': { bg: '#FFF8E7', roads: '#8B7355', water: '#87ACBE', buildings: '#F5EED5', parks: '#A8B890' },
    'Sepia': { bg: '#F0E6D2', roads: '#704214', water: '#C4A882', buildings: '#E4D8C0', parks: '#B8A888' },

    // === CELESTIAL & SPACE ===
    'Nebula': { bg: '#0C0118', roads: '#E870FF', water: '#1A0330', buildings: '#18082A', parks: '#4B0082' },
    'Aurora Borealis': { bg: '#0A1628', roads: '#00FF88', water: '#061020', buildings: '#122040', parks: '#00CC66' },
    'Moonlit': { bg: '#1C1F2E', roads: '#C8C8D8', water: '#141724', buildings: '#262A3C', parks: '#1E2230' },
    'Solar Flare': { bg: '#1A0800', roads: '#FF6600', water: '#0E0400', buildings: '#2E1200', parks: '#200C00' },
    'Starfield': { bg: '#05050A', roads: '#E8E4F0', water: '#0A0A15', buildings: '#10101C', parks: '#0C0C16' },
    'Deep Space': { bg: '#000005', roads: '#4488FF', water: '#0A0A20', buildings: '#0C0C18', parks: '#080812' },

    // === PASTEL & SOFT ===
    'Cotton Candy': { bg: '#FFF0F5', roads: '#FFB6C1', water: '#E0F0FF', buildings: '#FFF5F8', parks: '#E8F8E8' },
    'Lavender Fields': { bg: '#F5F0FF', roads: '#9B8FBF', water: '#E0D8F0', buildings: '#EDE5FF', parks: '#D8D0F0' },
    'Mint Cream': { bg: '#F0FFF5', roads: '#7EB8A0', water: '#D0F0E0', buildings: '#E8FFF0', parks: '#B8E8C8' },
    'Peach Blossom': { bg: '#FFF5F0', roads: '#E88E7A', water: '#FFE0D0', buildings: '#FFEDE5', parks: '#FFD0C0' },
    'Baby Blue': { bg: '#F0F8FF', roads: '#6CA0C8', water: '#D0E8FF', buildings: '#E5F0FF', parks: '#C0D8F0' },

    // === SEASONAL ===
    'Autumn Harvest': { bg: '#F5E6D0', roads: '#B85C38', water: '#6B8E8E', buildings: '#ECDAB8', parks: '#A07848' },
    'Spring Bloom': { bg: '#F8FFF0', roads: '#6A9B50', water: '#A0D0E0', buildings: '#F0FFE5', parks: '#80C060' },
    'Summer Heat': { bg: '#FFF8E0', roads: '#E8803A', water: '#40B0D0', buildings: '#FFF0C8', parks: '#D0C060' },
    'Cherry Blossom': { bg: '#FFF5F8', roads: '#CC7B8B', water: '#D8C0C8', buildings: '#FFECF0', parks: '#FFBBC8' },
    'Monsoon': { bg: '#2C3C48', roads: '#90A8B8', water: '#1E2C38', buildings: '#3A4C5A', parks: '#2E4048' },

    // === ARTISTIC MOVEMENTS ===
    'Bauhaus': { bg: '#F5F5F0', roads: '#DD0000', water: '#0055AA', buildings: '#E8E8E2', parks: '#FFCC00' },
    'De Stijl': { bg: '#FFFFFF', roads: '#000000', water: '#003DA5', buildings: '#F0F0F0', parks: '#FFD100' },
    'Brutalist': { bg: '#C0B8A8', roads: '#585048', water: '#8C8478', buildings: '#A8A090', parks: '#908880' },
    'Impressionist': { bg: '#F0EBE0', roads: '#6B7A8E', water: '#7CABC4', buildings: '#E2D8C8', parks: '#8BAA6B' },
    'Pop Art': { bg: '#FFFF00', roads: '#FF0000', water: '#00BFFF', buildings: '#FF69B4', parks: '#00FF00' },
    'Ukiyo-e': { bg: '#F0E8D0', roads: '#2B4C7E', water: '#5B8BA0', buildings: '#E0D4B8', parks: '#6B8B5E' },
    'Gothic': { bg: '#0C0C10', roads: '#6E0A1E', water: '#080810', buildings: '#18181F', parks: '#101018' },

    // === GEMSTONE & MINERAL ===
    'Amethyst': { bg: '#1A0E28', roads: '#B48AFF', water: '#0E0818', buildings: '#261438', parks: '#1E0E30' },
    'Ruby': { bg: '#1A0A0C', roads: '#E0115F', water: '#100508', buildings: '#2A1218', parks: '#1E0C10' },
    'Sapphire': { bg: '#0A0E28', roads: '#0F52BA', water: '#060820', buildings: '#141838', parks: '#0E1230' },
    'Jade': { bg: '#0C1C14', roads: '#00A86B', water: '#081410', buildings: '#142C20', parks: '#10241A' },
    'Opal': { bg: '#F0F0F8', roads: '#A8B8D0', water: '#D0E0F0', buildings: '#E8E8F2', parks: '#C0D8E8' },
    'Tiger Eye': { bg: '#2A1E10', roads: '#C49032', water: '#1E1408', buildings: '#382A18', parks: '#302010' },
    'Turquoise': { bg: '#F0FAF8', roads: '#30D5C8', water: '#C0E8E4', buildings: '#E5F5F2', parks: '#A0D8D0' },

    // === NEON & ELECTRIC ===
    'Neon Tokyo': { bg: '#0A0014', roads: '#FF00FF', water: '#00001A', buildings: '#14082A', parks: '#00FFAA' },
    'Electric Blue': { bg: '#00080F', roads: '#00BFFF', water: '#000410', buildings: '#0A1520', parks: '#001830' },
    'Acid Green': { bg: '#0A0D00', roads: '#ADFF2F', water: '#060800', buildings: '#141A08', parks: '#0E1200' },
    'Neon Coral': { bg: '#140808', roads: '#FF6F61', water: '#0A0404', buildings: '#201010', parks: '#180C0C' },
    'UV Glow': { bg: '#08001A', roads: '#BB86FC', water: '#040010', buildings: '#120828', parks: '#0C0420' },
    'Phosphor': { bg: '#001100', roads: '#33FF33', water: '#000800', buildings: '#002200', parks: '#001800' },

    // === FOOD & BEVERAGE ===
    'Espresso': { bg: '#3C2415', roads: '#D4A574', water: '#2A1A0E', buildings: '#4E3420', parks: '#3A2818' },
    'Matcha Latte': { bg: '#F5F8F0', roads: '#7B8E5A', water: '#D8E4C8', buildings: '#EDF2E5', parks: '#B0C890' },
    'Red Wine': { bg: '#1C0A14', roads: '#722F37', water: '#10060C', buildings: '#2A1220', parks: '#200E18' },
    'Honey & Cream': { bg: '#FFF8E8', roads: '#DAA520', water: '#F5E8C8', buildings: '#FFF2D8', parks: '#E8D8A8' },
    'Dark Chocolate': { bg: '#1E1412', roads: '#8B6348', water: '#140C0A', buildings: '#2C201C', parks: '#241A16' },
    'Blueberry': { bg: '#0E0820', roads: '#4F5B93', water: '#080414', buildings: '#1A1030', parks: '#120C28' },

    // === ABSTRACT & EXPERIMENTAL ===
    'Negative Space': { bg: '#808080', roads: '#FFFFFF', water: '#606060', buildings: '#707070', parks: '#585858' },
    'Inverted Earth': { bg: '#0055AA', roads: '#FFA500', water: '#228B22', buildings: '#1A6BC4', parks: '#B8860B' },
    'Monochrome Red': { bg: '#200808', roads: '#FF4444', water: '#140404', buildings: '#300C0C', parks: '#280A0A' },
    'Monochrome Blue': { bg: '#080820', roads: '#4488FF', water: '#040414', buildings: '#0C0C30', parks: '#0A0A28' },
    'Paper & Ink': { bg: '#F5F0E0', roads: '#1A1A1A', water: '#D4CEB8', buildings: '#EBE5D0', parks: '#DDD8C4' },
    'Dreamscape': { bg: '#1A0A30', roads: '#FF88CC', water: '#100520', buildings: '#28144A', parks: '#C888FF' },
    'Phantom': { bg: '#0C0C14', roads: '#4A4A6A', water: '#06060C', buildings: '#16161E', parks: '#101018' },

    // === CRAZY & WILD ===
    'Radioactive': { bg: '#0D0D00', roads: '#39FF14', water: '#CCFF00', buildings: '#1A1A00', parks: '#FF6600' },
    'Bubblegum Explosion': { bg: '#FF69B4', roads: '#00FFFF', water: '#FF1493', buildings: '#FFD700', parks: '#7FFF00' },
    'Alien Planet': { bg: '#2B0040', roads: '#00FF99', water: '#FF00CC', buildings: '#440066', parks: '#33FFCC' },
    'Lava Flow': { bg: '#1A0000', roads: '#FF4500', water: '#FFD700', buildings: '#330000', parks: '#FF0000' },
    'Candy Crush': { bg: '#FF6FFF', roads: '#FFFF00', water: '#00FFCC', buildings: '#FF99CC', parks: '#FF3366' },
    'Toxic Waste': { bg: '#1C1C00', roads: '#BFFF00', water: '#8B008B', buildings: '#333300', parks: '#00FF00' },
    'Disco Inferno': { bg: '#1A001A', roads: '#FF00FF', water: '#FFD700', buildings: '#4B0082', parks: '#00BFFF' },
    'Arctic Aurora': { bg: '#001428', roads: '#00FFAA', water: '#002244', buildings: '#001A33', parks: '#FF00FF' },
    'Rust & Teal': { bg: '#1E1E1E', roads: '#C45226', water: '#008B8B', buildings: '#2D2D2D', parks: '#20B2AA' },
    'Sunset Strip': { bg: '#FF6347', roads: '#FFE4B5', water: '#FF8C00', buildings: '#FF4500', parks: '#FFDAB9' },
    'Electric Lime': { bg: '#0A0A0A', roads: '#CCFF00', water: '#1A1A1A', buildings: '#FF00FF', parks: '#00FFFF' },
    'Coral & Navy': { bg: '#001F3F', roads: '#FF7F50', water: '#003366', buildings: '#002B4D', parks: '#FF6347' },
    'Psychedelic': { bg: '#FF1493', roads: '#00FF00', water: '#8A2BE2', buildings: '#FF4500', parks: '#00FFFF' },
    'Ice Cream Parlor': { bg: '#FFF5EE', roads: '#C87137', water: '#FFB6C1', buildings: '#FFFACD', parks: '#98FB98' },
    'Neon Jungle': { bg: '#0B3D0B', roads: '#FF00FF', water: '#001A00', buildings: '#145214', parks: '#FFFF00' },
    'Galactic Dust': { bg: '#0A0015', roads: '#FF6EC7', water: '#1A0030', buildings: '#FFD700', parks: '#7B68EE' },
    'Burning Chrome': { bg: '#0C0C0C', roads: '#C0C0C0', water: '#FF4500', buildings: '#1C1C1C', parks: '#00CED1' },
    'Tropical Punch': { bg: '#FF3399', roads: '#00FF7F', water: '#1E90FF', buildings: '#FF6600', parks: '#FFFF00' },
    'Holographic': { bg: '#E8E8FF', roads: '#C850C0', water: '#4158D0', buildings: '#FFCC70', parks: '#00DDEB' },
    'Graffiti Wall': { bg: '#2C2C2C', roads: '#FF0055', water: '#FFD700', buildings: '#3D3D3D', parks: '#00BFFF' }
};

// === WORLD CITIES ===
const WORLD_CITIES = {
    'Tokyo': { en: 'The Land of the Rising Sun', es: 'La Tierra del Sol Naciente', lat: 35.6769, lon: 139.7639 },
    'Delhi': { en: 'The Heart of India', es: 'El Corazón de la India', lat: 28.6328, lon: 77.2198 },
    'Shanghai': { en: 'The Pearl of the Orient', es: 'La Perla de Oriente', lat: 31.2313, lon: 121.47 },
    'Beijing': { en: 'The Forbidden City', es: 'La Ciudad Prohibida', lat: 39.9057, lon: 116.3913 },
    'Mumbai': { en: 'The City of Dreams', es: 'La Ciudad de los Sueños', lat: 19.055, lon: 72.8692 },
    'Osaka': { en: "The Nation's Kitchen", es: 'La Cocina de la Nación', lat: 34.6938, lon: 135.5015 },
    'Seoul': { en: 'The Soul of Asia', es: 'El Alma de Asia', lat: 37.5667, lon: 126.9783 },
    'Singapore': { en: 'The Lion City', es: 'La Ciudad del León', lat: 1.3571, lon: 103.8195 },
    'Hong Kong': { en: 'The Pearl of the Orient', es: 'La Perla de Oriente', lat: 22.2793, lon: 114.1629 },
    'Bangkok': { en: 'The City of Angels', es: 'La Ciudad de los Ángeles', lat: 13.7525, lon: 100.4935 },
    'Dubai': { en: 'The City of Gold', es: 'La Ciudad del Oro', lat: 25.2296, lon: 55.2896 },
    'Istanbul': { en: 'Where East Meets West', es: 'Donde el Este se Encuentra con el Oeste', lat: 41.0064, lon: 28.9759 },
    'London': { en: 'The Big Smoke', es: 'La Gran Nube', lat: 51.5074, lon: -0.1278 },
    'Paris': { en: 'The City of Light', es: 'La Ciudad de la Luz', lat: 48.8535, lon: 2.3484 },
    'Berlin': { en: 'The City of Freedom', es: 'La Ciudad de la Libertad', lat: 52.5174, lon: 13.3951 },
    'Madrid': { en: 'The City That Never Sleeps', es: 'La Ciudad que Nunca Duerme', lat: 40.4168, lon: -3.7035 },
    'Rome': { en: 'The Eternal City', es: 'La Ciudad Eterna', lat: 41.8933, lon: 12.4829 },
    'Barcelona': { en: 'The City of Counts', es: 'La Ciudad de los Condes', lat: 41.3826, lon: 2.1771 },
    'Vienna': { en: 'The City of Music', es: 'La Ciudad de la Música', lat: 48.2084, lon: 16.3725 },
    'Amsterdam': { en: 'The Venice of the North', es: 'La Venecia del Norte', lat: 52.3731, lon: 4.8925 },
    'Prague': { en: 'The City of a Hundred Spires', es: 'La Ciudad de las Cien Torres', lat: 50.0875, lon: 14.4213 },
    'Lisbon': { en: 'The City of Seven Hills', es: 'La Ciudad de las Siete Colinas', lat: 38.7078, lon: -9.1366 },
    'Athens': { en: 'The Cradle of Civilization', es: 'La Cuna de la Civilización', lat: 37.9756, lon: 23.7348 },
    'Budapest': { en: 'The Pearl of the Danube', es: 'La Perla del Danubio', lat: 47.4979, lon: 19.0402 },
    'New York': { en: 'The Big Apple', es: 'La Gran Manzana', lat: 40.7127, lon: -74.006 },
    'Los Angeles': { en: 'The City of Angels', es: 'La Ciudad de los Ángeles', lat: 34.0537, lon: -118.2428 },
    'Chicago': { en: 'The Windy City', es: 'La Ciudad del Viento', lat: 41.8756, lon: -87.6244 },
    'San Francisco': { en: 'The Golden Gate City', es: 'La Ciudad del Golden Gate', lat: 37.7879, lon: -122.4075 },
    'Miami': { en: 'The Magic City', es: 'La Ciudad Mágica', lat: 25.7742, lon: -80.1936 },
    'Toronto': { en: 'The Six', es: 'El Seis', lat: 43.6535, lon: -79.3839 },
    'Mexico City': { en: 'The City of Palaces', es: 'La Ciudad de los Palacios', lat: 19.4326, lon: -99.1332 },
    'São Paulo': { en: 'The Concrete Jungle', es: 'La Jungla de Concreto', lat: -23.5507, lon: -46.6334 },
    'Rio de Janeiro': { en: 'The Marvelous City', es: 'La Ciudad Maravillosa', lat: -22.911, lon: -43.2094 },
    'Buenos Aires': { en: 'The Paris of South America', es: 'El París de Sudamérica', lat: -34.6096, lon: -58.3888 },
    'Cairo': { en: 'The City of a Thousand Minarets', es: 'La Ciudad de los Mil Minaretes', lat: 29.9839, lon: 31.6015 },
    'Cape Town': { en: 'The Mother City', es: 'La Ciudad Madre', lat: -33.9288, lon: 18.4172 },
    'Sydney': { en: 'The Harbour City', es: 'La Ciudad del Puerto', lat: -33.8698, lon: 151.2083 },
    'Melbourne': { en: 'The Garden City', es: 'La Ciudad Jardín', lat: -37.8142, lon: 144.9632 },
};

const APP_LANG = document.documentElement.lang?.toLowerCase().startsWith('es') ? 'es' : 'en';

const I18N = {
    en: {
        toggleShowAll: 'Show all',
        toggleShowLess: 'Show less',
    },
    es: {
        toggleShowAll: 'Mostrar todos',
        toggleShowLess: 'Mostrar menos',
    },
};

function t(key) {
    const dict = I18N[APP_LANG] || I18N.en;
    return dict[key] || I18N.en[key] || key;
}

// === FRAME STYLES ===
const FRAME_STYLES = {
    'slim-black': {
        name: 'Slim Black',
        frameColor: 0x111111,
        frameRoughness: 0.4,
        frameMetalness: 0.0,
        matColor: 0xffffff,
        frameDepth: 0.03,
        frameWidth: 0.04,
        matWidth: 0.06
    },
    'thin-white': {
        name: 'Thin White',
        frameColor: 0x999999,
        frameRoughness: 0.3,
        frameMetalness: 0.0,
        matColor: 0xffffff,
        frameDepth: 0.03,
        frameWidth: 0.04,
        matWidth: 0.06
    },
    'natural-oak': {
        name: 'Natural Oak',
        frameColor: 0xC49A6C,
        frameRoughness: 0.8,
        frameMetalness: 0.0,
        matColor: 0xFFFBF5,
        frameDepth: 0.04,
        frameWidth: 0.05,
        matWidth: 0.05
    },
    'walnut': {
        name: 'Walnut',
        frameColor: 0x5C3A1E,
        frameRoughness: 0.75,
        frameMetalness: 0.0,
        matColor: 0xFAF5EE,
        frameDepth: 0.04,
        frameWidth: 0.06,
        matWidth: 0.05
    },
    'brushed-silver': {
        name: 'Brushed Silver',
        frameColor: 0xB8B8B8,
        frameRoughness: 0.35,
        frameMetalness: 0.6,
        matColor: 0xFFFFFF,
        frameDepth: 0.025,
        frameWidth: 0.035,
        matWidth: 0.05
    },
    'matte-gold': {
        name: 'Matte Gold',
        frameColor: 0xC5A55A,
        frameRoughness: 0.5,
        frameMetalness: 0.4,
        matColor: 0xFFFDF5,
        frameDepth: 0.03,
        frameWidth: 0.04,
        matWidth: 0.05
    },
    'charcoal': {
        name: 'Charcoal',
        frameColor: 0x3A3A3A,
        frameRoughness: 0.6,
        frameMetalness: 0.0,
        matColor: 0xF5F5F5,
        frameDepth: 0.035,
        frameWidth: 0.05,
        matWidth: 0.06
    },
    'olive': {
        name: 'Olive',
        frameColor: 0x556B2F,
        frameRoughness: 0.8,
        frameMetalness: 0.0,
        matColor: 0xFFFDE8,
        frameDepth: 0.035,
        frameWidth: 0.05,
        matWidth: 0.05
    },
    'copper': {
        name: 'Copper',
        frameColor: 0xB87333,
        frameRoughness: 0.4,
        frameMetalness: 0.5,
        matColor: 0xFFF8F0,
        frameDepth: 0.03,
        frameWidth: 0.04,
        matWidth: 0.05
    },
    'floating': {
        name: 'Floating',
        frameColor: 0x111111,
        frameRoughness: 0.4,
        frameMetalness: 0.0,
        matColor: 0xffffff,
        frameDepth: 0.02,
        frameWidth: 0.015,
        matWidth: 0.0
    }
};

// === STATE ===
const POSTER_HEIGHT = 2.0;
const POSTER_ASPECT = 5 / 7; // 50×70 cm

let scene, camera, renderer, controls, sceneContainer;
let frameGroup = null;
let mapTexture = null;
let hiddenMap = null;
let currentFrameStyle = 'slim-black';
let currentColorTheme = 'Pure Black & White';
let currentCity = null;
let currentZoom = 12;
let maxAnisotropy = 1;

// === UTILITY ===
function parseHex(hex) {
    const h = hex.replace('#', '');
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
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

function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// === MAP STYLE (from app.js — self-contained copy) ===
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
    const buildingColor = palette.buildings ? ensureContrast(palette.buildings, 30) : null;

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
            { id: 'landcover_farmland', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['in', 'class', 'farmland', 'crop'], paint: { 'fill-color': roadsAlpha(0.04) } },
            { id: 'landcover_grass', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['in', 'class', 'grass', 'meadow', 'heath'], paint: { 'fill-color': roadsAlpha(0.06) } },
            { id: 'landcover_scrub', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['in', 'class', 'scrub', 'shrub'], paint: { 'fill-color': roadsAlpha(0.07) } },
            { id: 'landcover_sand', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['in', 'class', 'sand', 'beach', 'bare_rock', 'rock'], paint: { 'fill-color': roadsAlpha(0.08) } },
            { id: 'landcover_ice', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['in', 'class', 'ice', 'glacier', 'snow'], paint: { 'fill-color': waterAlpha(0.22) } },
            { id: 'landcover_wetland', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['in', 'class', 'wetland', 'marsh', 'swamp'], paint: { 'fill-color': waterAlpha(0.15) } },
            { id: 'landcover_wood', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover', filter: ['==', 'class', 'wood'], paint: { 'fill-color': roadsAlpha(0.10) } },
            { id: 'park', type: 'fill', source: 'openmaptiles', 'source-layer': 'park', paint: { 'fill-color': palette.parks || roadsAlpha(0.06) } },
            { id: 'landuse_residential', type: 'fill', source: 'openmaptiles', 'source-layer': 'landuse', filter: ['in', 'class', 'residential', 'suburb'], paint: { 'fill-color': roadsAlpha(0.04) } },
            { id: 'landuse_commercial', type: 'fill', source: 'openmaptiles', 'source-layer': 'landuse', filter: ['in', 'class', 'commercial', 'retail'], paint: { 'fill-color': roadsAlpha(0.07) } },
            { id: 'landuse_industrial', type: 'fill', source: 'openmaptiles', 'source-layer': 'landuse', filter: ['in', 'class', 'industrial', 'transit'], paint: { 'fill-color': roadsAlpha(0.09) } },
            { id: 'landuse_special', type: 'fill', source: 'openmaptiles', 'source-layer': 'landuse', filter: ['in', 'class', 'cemetery', 'military'], paint: { 'fill-color': roadsAlpha(0.12) } },
            { id: 'water', type: 'fill', source: 'openmaptiles', 'source-layer': 'water', paint: { 'fill-color': waterColor } },
            { id: 'water_outline', type: 'line', source: 'openmaptiles', 'source-layer': 'water', paint: { 'line-color': waterAlpha(0.55), 'line-width': 0.5 } },
            { id: 'waterway', type: 'line', source: 'openmaptiles', 'source-layer': 'waterway', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': waterColor, 'line-width': w(0, 0.3, 0.6, 1.2, 2.0, 3.0, 4.0, 5.0), 'line-opacity': 0.85 } },
            { id: 'boundary_country', type: 'line', source: 'openmaptiles', 'source-layer': 'boundary', filter: ['==', 'admin_level', 2], layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': roadsAlpha(0.55), 'line-width': ['interpolate', ['linear'], ['zoom'], 2, 0.5, 6, 0.8, 10, 1.2], 'line-dasharray': [4, 3] } },
            { id: 'boundary_state', type: 'line', source: 'openmaptiles', 'source-layer': 'boundary', filter: ['==', 'admin_level', 4], minzoom: 6, layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': roadsAlpha(0.3), 'line-width': ['interpolate', ['linear'], ['zoom'], 6, 0.4, 10, 0.7, 14, 1.0], 'line-dasharray': [3, 4] } },
            { id: 'highway_major_casing', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'motorway', 'trunk'], minzoom: 8, layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': roadsAlpha(0.18), 'line-width': w(0, 0, 2.0, 3.5, 5.5, 7.5, 10.0, 12.0) } },
            { id: 'highway_major', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'motorway', 'trunk', 'primary'], layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': palette.roads, 'line-width': w(0.1, 0.4, 0.8, 1.8, 3.0, 4.5, 6.0, 7.5) } },
            { id: 'highway_minor', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'secondary', 'tertiary'], minzoom: 7, layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': palette.roads, 'line-width': w(0, 0.2, 0.5, 1.1, 1.8, 2.8, 4.0, 5.0) } },
            { id: 'highway_other', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'minor', 'service', 'track'], minzoom: 11, layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': palette.roads, 'line-width': w(0, 0, 0.2, 0.5, 1.0, 1.6, 2.4, 3.0), 'line-opacity': 0.65 } },
            { id: 'highway_path', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'path', 'footway', 'cycleway', 'pedestrian'], minzoom: 13, layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': roadsAlpha(0.45), 'line-width': w(0, 0, 0, 0, 0.5, 0.8, 1.2, 1.6), 'line-dasharray': [2, 2] } },
            { id: 'highway_bridge', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['==', 'brunnel', 'bridge'], minzoom: 12, layout: { 'line-cap': 'butt', 'line-join': 'miter' }, paint: { 'line-color': palette.roads, 'line-width': w(0, 0, 0.5, 1.5, 2.5, 4.0, 5.5, 7.0) } },
            { id: 'ferry', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['==', 'class', 'ferry'], minzoom: 8, layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-color': waterAlpha(0.7), 'line-width': w(0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.0), 'line-dasharray': [4, 4] } },
            { id: 'railway', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'rail', 'transit'], minzoom: 8, layout: { 'line-cap': 'butt', 'line-join': 'miter' }, paint: { 'line-color': roadsAlpha(0.55), 'line-width': w(0, 0.2, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4), 'line-dasharray': [3, 2] } },
            { id: 'transit_light', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['in', 'class', 'subway', 'light_rail', 'tram', 'monorail', 'narrow_gauge'], minzoom: 11, layout: { 'line-cap': 'butt', 'line-join': 'miter' }, paint: { 'line-color': roadsAlpha(0.4), 'line-width': w(0, 0, 0, 0.5, 0.9, 1.2, 1.5, 1.8), 'line-dasharray': [2, 3] } },
            { id: 'pier', type: 'fill', source: 'openmaptiles', 'source-layer': 'transportation', filter: ['==', 'class', 'pier'], minzoom: 13, paint: { 'fill-color': roadsAlpha(0.25) } },
            { id: 'building', type: 'fill', source: 'openmaptiles', 'source-layer': 'building', minzoom: 12, paint: { 'fill-color': buildingColor || palette.roads, 'fill-opacity': buildingColor ? 1 : 0.25 } },
            { id: 'building_outline', type: 'line', source: 'openmaptiles', 'source-layer': 'building', minzoom: 14, paint: { 'line-color': buildingColor ? roadsAlpha(0.3) : roadsAlpha(0.18), 'line-width': 0.4 } }
        ]
    };
}

// ═══════════════════════════════════════════════════════════════
// THREE.JS SCENE
// ═══════════════════════════════════════════════════════════════

function initScene() {
    sceneContainer = document.getElementById('frameScene');

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    // Camera
    const rect = sceneContainer.getBoundingClientRect();
    camera = new THREE.PerspectiveCamera(40, rect.width / rect.height, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = false;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    sceneContainer.appendChild(renderer.domElement);

    // OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1.5;
    controls.maxDistance = 8;
    controls.enablePan = false;
    controls.autoRotate = false;
    controls.maxPolarAngle = Math.PI * 0.85;
    controls.minPolarAngle = Math.PI * 0.15;

    setupLighting(scene);
    setupBackground(scene);

    window.addEventListener('resize', onResize);
    animate();
}

function setupLighting(targetScene) {
    // r183 uses physically-correct light units by default.
    // Intensity values are scaled from r147 equivalents (×π for directional/ambient).
    targetScene.add(new THREE.AmbientLight(0xffffff, 2.4));

    const keyLight = new THREE.DirectionalLight(0xfff8f0, 3.0);
    keyLight.position.set(3, 4, 5);
    targetScene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xeef2ff, 1.5);
    fillLight.position.set(-2, 2, -3);
    targetScene.add(fillLight);

    const pointLight = new THREE.PointLight(0xffffff, 5.0, 10);
    pointLight.position.set(0, 0, 5);
    targetScene.add(pointLight);
}

function setupBackground(targetScene) {
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.95, metalness: 0.0 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2;
    targetScene.add(floor);

    const wallGeo = new THREE.PlaneGeometry(30, 20);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.9, metalness: 0.0 });
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.z = -3;
    wall.position.y = 5;
    targetScene.add(wall);
}

function onResize() {
    const rect = sceneContainer.getBoundingClientRect();
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
    renderer.setSize(rect.width, rect.height);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// ═══════════════════════════════════════════════════════════════
// FRAME CONSTRUCTION
// ═══════════════════════════════════════════════════════════════

function disposeGroup(group) {
    group.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
            if (child.material.map) child.material.map.dispose();
            child.material.dispose();
        }
    });
}

function buildFrameGroup(style, texture, { includeBevels = true } = {}) {
    const group = new THREE.Group();
    const config = FRAME_STYLES[style];

    const posterWidth = POSTER_HEIGHT * POSTER_ASPECT;
    const fw = config.frameWidth;
    const fd = config.frameDepth;
    const mw = config.matWidth;

    // ─── Map canvas (the poster image) ───
    const canvasGeo = new THREE.PlaneGeometry(posterWidth, POSTER_HEIGHT);
    const canvasMat = new THREE.MeshBasicMaterial({ map: texture });
    const canvasMesh = new THREE.Mesh(canvasGeo, canvasMat);
    canvasMesh.position.z = -fd * 0.4;
    group.add(canvasMesh);

    // ─── Mat / passepartout ───
    const matOuterW = posterWidth + mw * 2;
    const matOuterH = POSTER_HEIGHT + mw * 2;

    if (mw > 0) {
        const matShape = new THREE.Shape();
        matShape.moveTo(-matOuterW / 2, -matOuterH / 2);
        matShape.lineTo(matOuterW / 2, -matOuterH / 2);
        matShape.lineTo(matOuterW / 2, matOuterH / 2);
        matShape.lineTo(-matOuterW / 2, matOuterH / 2);
        matShape.lineTo(-matOuterW / 2, -matOuterH / 2);

        const hole = new THREE.Path();
        hole.moveTo(-posterWidth / 2, -POSTER_HEIGHT / 2);
        hole.lineTo(-posterWidth / 2, POSTER_HEIGHT / 2);
        hole.lineTo(posterWidth / 2, POSTER_HEIGHT / 2);
        hole.lineTo(posterWidth / 2, -POSTER_HEIGHT / 2);
        hole.lineTo(-posterWidth / 2, -POSTER_HEIGHT / 2);
        matShape.holes.push(hole);

        const matGeo = new THREE.ShapeGeometry(matShape);
        const matMaterial = new THREE.MeshStandardMaterial({ color: config.matColor, roughness: 0.95, metalness: 0.0 });
        const matMesh = new THREE.Mesh(matGeo, matMaterial);
        matMesh.position.z = -fd * 0.25;
        group.add(matMesh);
    }

    // ─── Frame border (4 box pieces) ───
    const frameMat = new THREE.MeshStandardMaterial({
        color: config.frameColor,
        roughness: config.frameRoughness,
        metalness: config.frameMetalness,
    });

    const innerW = matOuterW;
    const innerH = matOuterH;
    const outerW = innerW + fw * 2;
    const outerH = innerH + fw * 2;

    const topGeo = new THREE.BoxGeometry(outerW, fw, fd);
    const topMesh = new THREE.Mesh(topGeo, frameMat);
    topMesh.position.set(0, (innerH + fw) / 2, -fd / 2);
    group.add(topMesh);

    const bottomMesh = new THREE.Mesh(topGeo, frameMat);
    bottomMesh.position.set(0, -(innerH + fw) / 2, -fd / 2);
    group.add(bottomMesh);

    const sideGeo = new THREE.BoxGeometry(fw, outerH, fd);
    const leftMesh = new THREE.Mesh(sideGeo, frameMat);
    leftMesh.position.set(-(innerW + fw) / 2, 0, -fd / 2);
    group.add(leftMesh);

    const rightMesh = new THREE.Mesh(sideGeo, frameMat);
    rightMesh.position.set((innerW + fw) / 2, 0, -fd / 2);
    group.add(rightMesh);

    // ─── Inner bevel strips ───
    if (includeBevels) {
        const bevelDepth = fd * 0.6;
        const bevelWidth = 0.015;
        const bevelMat = new THREE.MeshStandardMaterial({
            color: config.frameColor,
            roughness: config.frameRoughness + 0.15,
            metalness: Math.max(0, config.frameMetalness - 0.1),
        });

        const bevelTopGeo = new THREE.BoxGeometry(innerW, bevelWidth, bevelDepth);
        const bevelTop = new THREE.Mesh(bevelTopGeo, bevelMat);
        bevelTop.position.set(0, innerH / 2, -bevelDepth / 2);
        bevelTop.rotation.x = Math.PI * 0.12;
        group.add(bevelTop);

        const bevelBottom = new THREE.Mesh(bevelTopGeo, bevelMat);
        bevelBottom.position.set(0, -innerH / 2, -bevelDepth / 2);
        bevelBottom.rotation.x = -Math.PI * 0.12;
        group.add(bevelBottom);

        const bevelSideGeo = new THREE.BoxGeometry(bevelWidth, innerH, bevelDepth);
        const bevelLeft = new THREE.Mesh(bevelSideGeo, bevelMat);
        bevelLeft.position.set(-innerW / 2, 0, -bevelDepth / 2);
        bevelLeft.rotation.y = -Math.PI * 0.12;
        group.add(bevelLeft);

        const bevelRight = new THREE.Mesh(bevelSideGeo, bevelMat);
        bevelRight.position.set(innerW / 2, 0, -bevelDepth / 2);
        bevelRight.rotation.y = Math.PI * 0.12;
        group.add(bevelRight);
    }

    // ─── Glass pane ───
    const glassGeo = new THREE.PlaneGeometry(posterWidth + 0.005, POSTER_HEIGHT + 0.005);
    const glassMat = new THREE.MeshStandardMaterial({
        color: 0xffffff, transparent: true, opacity: 0.03, roughness: 0.0, metalness: 0.1,
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.position.z = 0.001;
    group.add(glassMesh);

    // ─── Back panel ───
    const backGeo = new THREE.PlaneGeometry(outerW - 0.01, outerH - 0.01);
    const backMat = new THREE.MeshBasicMaterial({ color: 0x1a1a1a, side: THREE.BackSide });
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.z = -fd - 0.005;
    group.add(backMesh);

    return { group, canvasMat };
}

function buildFrame(style, texture) {
    if (frameGroup) {
        scene.remove(frameGroup);
        disposeGroup(frameGroup);
        frameGroup = null;
    }

    if (!texture) return;

    const { group } = buildFrameGroup(style, texture);
    frameGroup = group;
    scene.add(frameGroup);
}

// ═══════════════════════════════════════════════════════════════
// MAP TEXTURE PIPELINE
// ═══════════════════════════════════════════════════════════════

function showLoading(visible) {
    document.getElementById('loadingOverlay')?.classList.toggle('visible', visible);
}

function initHiddenMap(center, zoom, styleName) {
    return new Promise((resolve) => {
        if (hiddenMap) {
            hiddenMap.remove();
            hiddenMap = null;
        }

        hiddenMap = new maplibregl.Map({
            container: 'hiddenMapContainer',
            style: createMapStyle(PALETTES[styleName]),
            center: center,
            zoom: zoom,
            interactive: false,
            preserveDrawingBuffer: true,
            attributionControl: false,
        });

        let resolved = false;
        hiddenMap.once('idle', () => {
            if (resolved) return;
            resolved = true;
            setTimeout(() => {
                captureMapTexture();
                resolve();
            }, 600);
        });
    });
}

function snapshotCanvas(srcCanvas) {
    const c = document.createElement('canvas');
    c.width = srcCanvas.width;
    c.height = srcCanvas.height;
    c.getContext('2d').drawImage(srcCanvas, 0, 0);
    return c;
}

function captureMapTexture() {
    const mapCanvas = hiddenMap.getCanvas();

    // Snapshot WebGL canvas to a 2D canvas so pixels are preserved for USDZ export
    const snapshot = snapshotCanvas(mapCanvas);

    if (mapTexture) mapTexture.dispose();
    mapTexture = new THREE.CanvasTexture(snapshot);
    mapTexture.colorSpace = THREE.SRGBColorSpace;
    mapTexture.minFilter = THREE.LinearMipmapLinearFilter;
    mapTexture.magFilter = THREE.LinearFilter;
    mapTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    mapTexture.needsUpdate = true;

    buildFrame(currentFrameStyle, mapTexture);
}

async function loadCityIntoFrame(cityName, lat, lon) {
    showLoading(true);
    currentCity = { name: cityName, lat, lon };

    // Update sidebar city input
    const sidebarInput = document.getElementById('sidebarCityInput');
    if (sidebarInput) sidebarInput.value = cityName;

    try {
        await initHiddenMap([lon, lat], currentZoom, currentColorTheme);
    } catch (err) {
        console.error('Error loading city into frame:', err);
    }

    showLoading(false);
}

async function reloadCurrentCity() {
    if (!currentCity) return;
    showLoading(true);
    try {
        await initHiddenMap([currentCity.lon, currentCity.lat], currentZoom, currentColorTheme);
    } catch (err) {
        console.error('Error reloading city:', err);
    }
    showLoading(false);
}

async function applyTheme(themeName) {
    if (!hiddenMap) return;
    showLoading(true);
    try {
        const newStyle = createMapStyle(PALETTES[themeName]);
        hiddenMap.setStyle(newStyle);
        await new Promise(resolve => {
            hiddenMap.once('idle', () => {
                setTimeout(() => {
                    captureMapTexture();
                    resolve();
                }, 600);
            });
        });
    } catch (err) {
        console.error('Error applying theme:', err);
    }
    showLoading(false);
}

// ═══════════════════════════════════════════════════════════════
// CITY AUTOCOMPLETE (shared logic for intro + sidebar)
// ═══════════════════════════════════════════════════════════════

function createAutocomplete(inputId, listId, onSelect) {
    let activeIndex = -1;
    let debounceTimer = null;
    let abortController = null;

    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    if (!input || !list) return;

    function getLocalMatches(query) {
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
        return results.slice(0, 5);
    }

    async function getApiMatches(query) {
        if (abortController) abortController.abort();
        abortController = new AbortController();
        try {
            const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json?key=${MAPTILER_KEY}&language=${APP_LANG}&limit=5`;
            const res = await fetch(url, { signal: abortController.signal });
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

    function render(items) {
        if (!items.length) {
            list.innerHTML = '';
            list.classList.remove('open');
            activeIndex = -1;
            return;
        }
        list.innerHTML = items.map((item, i) => `
            <li role="option" data-index="${i}" data-name="${escapeHtml(item.name)}" data-city="${escapeHtml(item.city || item.name)}" data-lat="${item.lat}" data-lon="${item.lon}"${i === activeIndex ? ' class="active"' : ''}>
                <span class="ac-icon"><ion-icon name="location-outline"></ion-icon></span>
                <span class="ac-city">${escapeHtml(item.name)}</span>
                <span class="ac-subtitle">${escapeHtml(item.subtitle)}</span>
            </li>
        `).join('');
        list.classList.add('open');

        list.querySelectorAll('li').forEach(li => {
            li.addEventListener('mousedown', e => {
                e.preventDefault();
                selectCity(li);
            });
        });
    }

    function selectCity(li) {
        const name = li.dataset.city || li.dataset.name;
        const lat = parseFloat(li.dataset.lat);
        const lon = parseFloat(li.dataset.lon);
        input.value = name;
        close();
        onSelect(name, lat, lon);
    }

    function close() {
        list.classList.remove('open');
        list.innerHTML = '';
        activeIndex = -1;
    }

    async function handleInput() {
        const query = input.value.trim();
        if (query.length < 2) { close(); return; }

        const local = getLocalMatches(query);
        if (local.length > 0) { render(local); return; }

        list.innerHTML = '<li class="ac-loading">Searching...</li>';
        list.classList.add('open');

        const api = await getApiMatches(query);
        if (input.value.trim() === query) render(api);
    }

    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(handleInput, 200);
    });

    input.addEventListener('keydown', e => {
        const items = list.querySelectorAll('li[role="option"]');
        if (!items.length || !list.classList.contains('open')) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = Math.min(activeIndex + 1, items.length - 1);
            items.forEach((li, i) => li.classList.toggle('active', i === activeIndex));
            items[activeIndex]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = Math.max(activeIndex - 1, 0);
            items.forEach((li, i) => li.classList.toggle('active', i === activeIndex));
            items[activeIndex]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter' && activeIndex >= 0) {
            e.preventDefault();
            selectCity(items[activeIndex]);
        } else if (e.key === 'Escape') {
            close();
        }
    });

    input.addEventListener('blur', () => {
        setTimeout(close, 150);
    });
}

// ═══════════════════════════════════════════════════════════════
// INTRO MODAL
// ═══════════════════════════════════════════════════════════════

function closeIntroModal(cityName, lat, lon) {
    const modal = document.getElementById('introModal');
    if (!modal) return;

    modal.classList.add('closing');
    let fired = false;
    const onEnd = () => {
        if (fired) return;
        fired = true;
        modal.remove();
        const layout = document.getElementById('appLayout');
        if (layout) layout.style.opacity = '1';

        if (cityName && lat !== undefined && lon !== undefined) {
            loadCityIntoFrame(cityName, lat, lon);
        }
    };
    modal.addEventListener('animationend', onEnd, { once: true });
    setTimeout(onEnd, 500);
}

function initMiniMaps() {
    const cities = [
        { id: 'minimap-newyork', lat: 40.7127, lon: -74.006 },
        { id: 'minimap-paris', lat: 48.8535, lon: 2.3484 },
        { id: 'minimap-tokyo', lat: 35.6769, lon: 139.7639 },
    ];
    const palette = { bg: '#f0f0f5', roads: '#440edf', water: '#d2e823', buildings: '#e8e8f0', parks: '#e0e0ea' };
    cities.forEach(c => {
        const el = document.getElementById(c.id);
        if (!el) return;
        try {
            new maplibregl.Map({
                container: c.id,
                style: createMapStyle(palette),
                center: [c.lon, c.lat],
                zoom: 11,
                interactive: false,
                attributionControl: false,
            });
        } catch { /* ignore */ }
    });
}

function initIntroPreview() {
    const container = document.getElementById('introPreviewContainer');
    if (!container) return;

    const previewScene = new THREE.Scene();
    previewScene.background = new THREE.Color(0xf5f5f5);

    const rect = container.getBoundingClientRect();
    const previewCamera = new THREE.PerspectiveCamera(40, rect.width / rect.height, 0.1, 100);
    previewCamera.position.set(0.8, 0.3, 4.0);

    const previewRenderer = new THREE.WebGLRenderer({ antialias: true });
    previewRenderer.setSize(rect.width, rect.height);
    previewRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    previewRenderer.toneMapping = THREE.NoToneMapping;
    previewRenderer.toneMappingExposure = 1.0;
    previewRenderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(previewRenderer.domElement);

    setupLighting(previewScene);
    setupBackground(previewScene);

    // Build a preview frame with a gradient placeholder texture
    const texCanvas = document.createElement('canvas');
    texCanvas.width = 500;
    texCanvas.height = 700;
    const ctx = texCanvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 700);
    gradient.addColorStop(0, '#f0f0f5');
    gradient.addColorStop(1, '#e8e8f0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 700);

    const previewTexture = new THREE.CanvasTexture(texCanvas);
    previewTexture.colorSpace = THREE.SRGBColorSpace;

    const { group: previewGroup, canvasMat } = buildFrameGroup('slim-black', previewTexture, { includeBevels: false });
    previewScene.add(previewGroup);

    // Slow auto-rotate
    const previewControls = new OrbitControls(previewCamera, previewRenderer.domElement);
    previewControls.enableDamping = true;
    previewControls.dampingFactor = 0.05;
    previewControls.autoRotate = true;
    previewControls.autoRotateSpeed = 1.5;
    previewControls.enableZoom = false;
    previewControls.enablePan = false;
    previewControls.maxPolarAngle = Math.PI * 0.75;
    previewControls.minPolarAngle = Math.PI * 0.25;

    // Resize handler for the preview scene
    function onPreviewResize() {
        const r = container.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        previewCamera.aspect = r.width / r.height;
        previewCamera.updateProjectionMatrix();
        previewRenderer.setSize(r.width, r.height);
    }
    window.addEventListener('resize', onPreviewResize);

    let animId;
    function animatePreview() {
        animId = requestAnimationFrame(animatePreview);
        previewControls.update();
        previewRenderer.render(previewScene, previewCamera);
    }
    animatePreview();

    // Load actual map texture into the preview
    const previewMapContainer = document.createElement('div');
    previewMapContainer.style.cssText = 'position:absolute;left:-9999px;top:0;width:500px;height:700px;overflow:hidden;';
    document.body.appendChild(previewMapContainer);

    const paletteKeys = Object.keys(PALETTES);
    const mapStyle = createMapStyle(PALETTES[paletteKeys[Math.floor(Math.random() * paletteKeys.length)]]);
    try {
        const previewMap = new maplibregl.Map({
            container: previewMapContainer,
            style: mapStyle,
            center: [-74.006, 40.7127], // New York
            zoom: 12,
            interactive: false,
            preserveDrawingBuffer: true,
            attributionControl: false,
        });
        previewMap.once('idle', () => {
            setTimeout(() => {
                const mapCanvas = previewMap.getCanvas();
                const realTexture = new THREE.CanvasTexture(mapCanvas);
                realTexture.colorSpace = THREE.SRGBColorSpace;
                realTexture.needsUpdate = true;
                canvasMat.map = realTexture;
                canvasMat.needsUpdate = true;
                previewTexture.dispose();
            }, 400);
        });
    } catch { /* fallback to gradient placeholder */ }

    // Cleanup when modal closes
    const observeTarget = container.parentElement || document.body;
    const observer = new MutationObserver(() => {
        if (!document.getElementById('introPreviewContainer')) {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', onPreviewResize);
            disposeGroup(previewScene);
            previewRenderer.dispose();
            previewMapContainer.remove();
            observer.disconnect();
        }
    });
    observer.observe(observeTarget, { childList: true, subtree: true });
}

function setupIntroModal() {
    const modal = document.getElementById('introModal');
    if (!modal) return;

    // Initialize 3D preview in intro
    initIntroPreview();

    // Intro city autocomplete
    createAutocomplete('frameCityInput', 'frameCityAutocomplete', (name, lat, lon) => {
        closeIntroModal(name, lat, lon);
    });

    // Initialize mini maps for postcards
    initMiniMaps();

    // Postcard city buttons
    document.querySelectorAll('.intro-card .intro-city-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            closeIntroModal(
                btn.dataset.city,
                parseFloat(btn.dataset.lat),
                parseFloat(btn.dataset.lon)
            );
        });
    });

    // Start button (defaults to New York)
    document.getElementById('startFrameBtn')?.addEventListener('click', () => {
        closeIntroModal('New York', 40.7127, -74.006);
    });

    // Backdrop click
    document.getElementById('introBackdrop')?.addEventListener('click', () => {
        closeIntroModal('New York', 40.7127, -74.006);
    });
}

// ═══════════════════════════════════════════════════════════════
// SIDEBAR CONTROLS
// ═══════════════════════════════════════════════════════════════

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

function updateFrameThemePreview(themeName) {
    const palette = PALETTES[themeName];
    if (!palette) return;

    const swatch = document.getElementById('frameSelectedThemeSwatch');
    const nameEl = document.getElementById('frameSelectedThemeName');
    const bgDot = document.getElementById('frameSelectedBgColor');
    const roadsDot = document.getElementById('frameSelectedRoadsColor');
    const waterDot = document.getElementById('frameSelectedWaterColor');

    swatch.style.setProperty('--swatch-bg', palette.bg);
    swatch.style.setProperty('--swatch-roads', palette.roads);
    swatch.style.setProperty('--swatch-water', palette.water);
    swatch.innerHTML = '';
    const roads = document.createElement('div');
    roads.className = 'roads';
    swatch.appendChild(roads);

    nameEl.textContent = themeName;
    bgDot.style.backgroundColor = palette.bg;
    roadsDot.style.backgroundColor = palette.roads;
    waterDot.style.backgroundColor = palette.water;

    document.querySelectorAll('#frameThemesGrid .theme-swatch').forEach(s => {
        s.classList.toggle('selected', s.dataset.theme === themeName);
    });
}

function generateFrameThemesGrid() {
    const grid = document.getElementById('frameThemesGrid');
    grid.innerHTML = '';

    Object.entries(PALETTES).forEach(([name, palette]) => {
        const swatch = createThemeSwatch(name, palette);
        if (name === currentColorTheme) swatch.classList.add('selected');

        swatch.addEventListener('click', () => {
            document.getElementById('frameThemeSelect').value = name;
            currentColorTheme = name;
            applyTheme(name);
            updateFrameThemePreview(name);
        });

        grid.appendChild(swatch);
    });
}

function populateThemeDropdown() {
    const select = document.getElementById('frameThemeSelect');
    Object.keys(PALETTES).forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        if (name === currentColorTheme) opt.selected = true;
        select.appendChild(opt);
    });

    // Initialize theme preview and grid
    generateFrameThemesGrid();
    updateFrameThemePreview(currentColorTheme);
}

function setupControls() {
    // Sidebar city autocomplete
    createAutocomplete('sidebarCityInput', 'sidebarCityAutocomplete', (name, lat, lon) => {
        loadCityIntoFrame(name, lat, lon);
    });

    // Zoom controls
    const zoomInput = document.getElementById('frameZoomInput');
    const zoomValue = document.getElementById('frameZoomValue');
    let zoomDebounce = null;

    function updateZoomDisplay() {
        zoomValue.textContent = parseFloat(zoomInput.value).toFixed(1);
    }

    zoomInput.addEventListener('input', () => {
        currentZoom = parseFloat(zoomInput.value);
        updateZoomDisplay();
        clearTimeout(zoomDebounce);
        zoomDebounce = setTimeout(() => {
            reloadCurrentCity();
        }, 400);
    });

    function stepZoom(delta) {
        const val = Math.max(1, Math.min(20, parseFloat(zoomInput.value) + delta));
        zoomInput.value = val;
        currentZoom = val;
        updateZoomDisplay();
        clearTimeout(zoomDebounce);
        zoomDebounce = setTimeout(() => reloadCurrentCity(), 200);
    }

    document.getElementById('frameZoomDecrement')?.addEventListener('click', () => stepZoom(-1));
    document.getElementById('frameZoomIncrement')?.addEventListener('click', () => stepZoom(1));

    // Frame style buttons
    document.querySelectorAll('.frame-style-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFrameStyle = btn.dataset.style;
            document.querySelectorAll('.frame-style-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (mapTexture) buildFrame(currentFrameStyle, mapTexture);
        });
    });

    // Color theme dropdown
    const select = document.getElementById('frameThemeSelect');
    select.addEventListener('change', async () => {
        currentColorTheme = select.value;
        applyTheme(select.value);
        updateFrameThemePreview(select.value);
    });

    // Toggle themes grid
    const toggleBtn = document.getElementById('frameToggleThemesGrid');
    const themesGrid = document.getElementById('frameThemesGrid');
    toggleBtn.addEventListener('click', () => {
        const collapsed = themesGrid.classList.toggle('collapsed');
        toggleBtn.textContent = collapsed ? t('toggleShowAll') : t('toggleShowLess');
    });

    // Reset view
    document.getElementById('resetViewBtn')?.addEventListener('click', () => {
        camera.position.set(0, 0, 4.2);
        camera.lookAt(0, 0, 0);
        controls.reset();
    });

    // AR Quick Look — iOS check disabled for testing, always show button
    // if (isIOSDevice()) {
    const arBtn = document.getElementById('viewInARBtn');
    if (arBtn) {
        arBtn.classList.remove('hidden');
        arBtn.addEventListener('click', exportToUSDZ);
    }
    // }
}

// ═══════════════════════════════════════════════════════════════
// AR QUICK LOOK (USDZ EXPORT)
// ═══════════════════════════════════════════════════════════════

function isIOSDevice() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function prepareGroupForUSDZ(sourceGroup) {
    const clone = sourceGroup.clone(true);
    const toRemove = [];

    clone.traverse((child) => {
        if (!child.isMesh) return;

        // Clone material so we don't mutate the live scene
        child.material = child.material.clone();
        const mat = child.material;

        // Skip glass and near-invisible meshes — USDZ handles transparency poorly
        if (mat.transparent && mat.opacity < 0.1) {
            toRemove.push(child);
            return;
        }

        // USDZ doesn't support BackSide — flip geometry normals instead
        if (mat.side === THREE.BackSide) {
            mat.side = THREE.FrontSide;
            child.geometry = child.geometry.clone();
            const normals = child.geometry.attributes.normal;
            for (let i = 0; i < normals.count; i++) {
                normals.setXYZ(i,
                    -normals.getX(i),
                    -normals.getY(i),
                    -normals.getZ(i));
            }
            normals.needsUpdate = true;
        }

        // USDZExporter only supports MeshStandardMaterial
        if (mat.isMeshBasicMaterial) {
            child.material = new THREE.MeshStandardMaterial({
                map: mat.map,
                color: mat.color,
                roughness: 1.0,
                metalness: 0.0,
                side: mat.side,
                transparent: mat.transparent,
                opacity: mat.opacity,
            });
        }
    });

    toRemove.forEach((mesh) => mesh.parent && mesh.parent.remove(mesh));
    return clone;
}

async function exportToUSDZ() {
    if (!frameGroup) return;

    const arBtn = document.getElementById('viewInARBtn');
    if (arBtn) {
        arBtn.disabled = true;
        arBtn.textContent = 'Generating...';
    }

    try {
        const exportGroup = prepareGroupForUSDZ(frameGroup);

        // Scale to real-world size: poster = 50×70 cm for AR wall preview
        // USDZExporter skips the root object's transform, so we wrap in a
        // Scene and apply the scale on the inner group (a child node whose
        // local matrix IS written to the USDZ file).
        const POSTER_HEIGHT = 2.0;
        const realHeightMeters = 0.70; // poster is 70 cm tall
        const scaleFactor = realHeightMeters / POSTER_HEIGHT;
        exportGroup.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // AR Quick Look vertical placement rotates the model +90° around X
        // (tipping the floor-plane onto the wall), which points the frame's
        // front face downward.  Counter-rotate by -90° so the frame ends up
        // flush against the wall with the artwork facing outward.
        exportGroup.rotation.x = -Math.PI / 2;

        const exportScene = new THREE.Scene();
        exportScene.add(exportGroup);
        exportScene.updateMatrixWorld(true);

        const exporter = new USDZExporter();
        const arraybuffer = await exporter.parseAsync(exportScene, {
            ar: {
                anchoring: { type: 'plane' },
                planeAnchoring: { alignment: 'vertical' },
            },
            quickLookCompatible: true,
        });
        const blob = new Blob([arraybuffer], { type: 'model/vnd.usdz+zip' });
        const url = URL.createObjectURL(blob);

        const anchor = document.createElement('a');
        anchor.href = url;

        if (isIOSDevice()) {
            // AR Quick Look requires rel="ar" and a child <img>
            anchor.rel = 'ar';
            const img = document.createElement('img');
            img.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            img.style.width = '1px';
            anchor.appendChild(img);
        } else {
            // Fallback: download the USDZ file
            const cityName = currentCity ? currentCity.name.replace(/\s+/g, '_') : 'frame';
            anchor.download = `${cityName}_map.usdz`;
        }

        document.body.appendChild(anchor);
        anchor.click();

        setTimeout(() => {
            document.body.removeChild(anchor);
            URL.revokeObjectURL(url);
        }, 2000);
    } catch (err) {
        console.error('USDZ export failed:', err);
    } finally {
        if (arBtn) {
            arBtn.disabled = false;
            arBtn.innerHTML = '<ion-icon name="cube-outline" class="mr-1 align-middle" aria-hidden="true"></ion-icon> View in AR';
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    initScene();
    populateThemeDropdown();
    setupControls();
    setupIntroModal();
});
