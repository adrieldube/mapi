// === CONFIGURATION ===
// Get a free key at https://cloud.maptiler.com/
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

const PALETTE_CATEGORIES = [
    { label: 'Essentials & Monochrome', keys: ['Pure Black & White', 'Noir (Dark Mode)', 'Graphite & Ivory', 'Warm Gray', 'Cool Steel', 'Charcoal Chalk', 'High Contrast', 'Minimalism'] },
    { label: 'Pantone & Design Trends', keys: ['Mocha Mousse', 'Future Dusk', 'Digital Lavender', 'Apricot Crush', 'Peach Fuzz', 'Butter Yellow', 'Quietude Blue', 'Verdant Green'] },
    { label: 'Earth & Nature', keys: ['Sage & Terracotta', 'Deep Forest', 'Desert Sand', 'Clay & Sage', 'Moss & Stone', 'Volcanic Ash', 'Birch & Lichen', 'Red Canyon', 'Bamboo Grove', 'Tundra'] },
    { label: 'Oceanic & Coastal', keys: ['Deep Navy', 'Mediterranean', 'Coastal Mist', 'Tropical Reef', 'Arctic Ocean', 'Abyssal', 'Coral Lagoon'] },
    { label: 'Unique Visual Styles', keys: ['Blueprint', 'Cyberpunk 2077', 'Synthwave', 'Vaporwave', 'Matrix', 'Golden Hour', 'Blood Moon', 'Infrared', 'X-Ray', 'Thermal Vision', 'Satellite View', 'Watercolor', 'Ink Wash', 'Risograph', 'Duotone Magenta', 'Glitch'] },
    { label: 'Metallic & Luxe', keys: ['Midnight & Gold', 'Silver & Obsidian', 'Copper & Slate', 'Rose Gold', 'Platinum', 'Black & Bronze', 'Emerald & Pearl'] },
    { label: 'Minimalist & Global', keys: ['Tokyo Night', 'Nordic Ice', 'Kyoto Matcha', 'Havana Sunset', 'Marrakech Souk', 'Santorini', 'Mumbai Monsoon', 'Reykjavik', 'Nairobi Savanna', 'Seoul Neon'] },
    { label: 'Retro & Vintage', keys: ['70s Vintage', 'Art Deco', '50s Diner', '80s Miami', '90s Grunge', 'Victorian', 'Art Nouveau', 'Polaroid', 'Sepia'] },
    { label: 'Celestial & Space', keys: ['Nebula', 'Aurora Borealis', 'Moonlit', 'Solar Flare', 'Starfield', 'Deep Space'] },
    { label: 'Pastel & Soft', keys: ['Cotton Candy', 'Lavender Fields', 'Mint Cream', 'Peach Blossom', 'Baby Blue'] },
    { label: 'Seasonal', keys: ['Autumn Harvest', 'Spring Bloom', 'Summer Heat', 'Cherry Blossom', 'Monsoon'] },
    { label: 'Artistic Movements', keys: ['Bauhaus', 'De Stijl', 'Brutalist', 'Impressionist', 'Pop Art', 'Ukiyo-e', 'Gothic'] },
    { label: 'Gemstone & Mineral', keys: ['Amethyst', 'Ruby', 'Sapphire', 'Jade', 'Opal', 'Tiger Eye', 'Turquoise'] },
    { label: 'Neon & Electric', keys: ['Neon Tokyo', 'Electric Blue', 'Acid Green', 'Neon Coral', 'UV Glow', 'Phosphor'] },
    { label: 'Food & Beverage', keys: ['Espresso', 'Matcha Latte', 'Red Wine', 'Honey & Cream', 'Dark Chocolate', 'Blueberry'] },
    { label: 'Abstract & Experimental', keys: ['Negative Space', 'Inverted Earth', 'Monochrome Red', 'Monochrome Blue', 'Paper & Ink', 'Dreamscape', 'Phantom'] },
    { label: 'Crazy & Wild', keys: ['Radioactive', 'Bubblegum Explosion', 'Alien Planet', 'Lava Flow', 'Candy Crush', 'Toxic Waste', 'Disco Inferno', 'Arctic Aurora', 'Rust & Teal', 'Sunset Strip', 'Electric Lime', 'Coral & Navy', 'Psychedelic', 'Ice Cream Parlor', 'Neon Jungle', 'Galactic Dust', 'Burning Chrome', 'Tropical Punch', 'Holographic', 'Graffiti Wall'] },
];

// === TOP 150 CITIES WITH SUBTITLES ===
const WORLD_CITIES = {
    // Asia
    'Tokyo': { en: 'The Land of the Rising Sun', es: 'La Tierra del Sol Naciente', lat: 35.6769, lon: 139.7639 },
    'Delhi': { en: 'The Heart of India', es: 'El Corazón de la India', lat: 28.6328, lon: 77.2198 },
    'Shanghai': { en: 'The Pearl of the Orient', es: 'La Perla de Oriente', lat: 31.2313, lon: 121.47 },
    'Beijing': { en: 'The Forbidden City', es: 'La Ciudad Prohibida', lat: 39.9057, lon: 116.3913 },
    'Mumbai': { en: 'The City of Dreams', es: 'La Ciudad de los Sueños', lat: 19.055, lon: 72.8692 },
    'Osaka': { en: 'The Nation\'s Kitchen', es: 'La Cocina de la Nación', lat: 34.6938, lon: 135.5015 },
    'Dhaka': { en: 'The City of Mosques', es: 'La Ciudad de las Mezquitas', lat: 23.7644, lon: 90.389 },
    'Karachi': { en: 'The City of Lights', es: 'La Ciudad de las Luces', lat: 24.8547, lon: 67.0207 },
    'Kolkata': { en: 'The City of Joy', es: 'La Ciudad de la Alegría', lat: 22.5726, lon: 88.3639 },
    'Chengdu': { en: 'The Land of Abundance', es: 'La Tierra de la Abundancia', lat: 30.6599, lon: 104.0633 },
    'Guangzhou': { en: 'The City of Flowers', es: 'La Ciudad de las Flores', lat: 23.1288, lon: 113.259 },
    'Shenzhen': { en: 'China\'s Silicon Valley', es: 'El Silicon Valley de China', lat: 22.5446, lon: 114.0545 },
    'Jakarta': { en: 'The Big Durian', es: 'El Gran Durián', lat: -6.1754, lon: 106.8272 },
    'Bangkok': { en: 'The City of Angels', es: 'La Ciudad de los Ángeles', lat: 13.7525, lon: 100.4935 },
    'Seoul': { en: 'The Soul of Asia', es: 'El Alma de Asia', lat: 37.5667, lon: 126.9783 },
    'Ho Chi Minh City': { en: 'The Pearl of the Far East', es: 'La Perla del Lejano Oriente', lat: 10.7755, lon: 106.7021 },
    'Singapore': { en: 'The Lion City', es: 'La Ciudad del León', lat: 1.3571, lon: 103.8195 },
    'Hong Kong': { en: 'The Pearl of the Orient', es: 'La Perla de Oriente', lat: 22.2793, lon: 114.1629 },
    'Taipei': { en: 'The Beautiful Island Capital', es: 'La Capital de la Bella Isla', lat: 25.0375, lon: 121.5637 },
    'Manila': { en: 'The Pearl of the Orient Seas', es: 'La Perla de los Mares de Oriente', lat: 14.5904, lon: 120.9804 },
    'Kuala Lumpur': { en: 'The Garden City of Lights', es: 'La Ciudad Jardín de las Luces', lat: 3.1517, lon: 101.6942 },
    'Hanoi': { en: 'The City of the Rising Dragon', es: 'La Ciudad del Dragón Naciente', lat: 21.0283, lon: 105.854 },
    'Riyadh': { en: 'The Gardens of the Desert', es: 'Los Jardines del Desierto', lat: 24.6389, lon: 46.716 },
    'Dubai': { en: 'The City of Gold', es: 'La Ciudad del Oro', lat: 25.2296, lon: 55.2896 },
    'Abu Dhabi': { en: 'The Garden City', es: 'La Ciudad Jardín', lat: 24.4538, lon: 54.3774 },
    'Doha': { en: 'The Pearl of the Gulf', es: 'La Perla del Golfo', lat: 25.2856, lon: 51.5264 },
    'Tel Aviv': { en: 'The White City', es: 'La Ciudad Blanca', lat: 32.0853, lon: 34.7818 },
    'Jerusalem': { en: 'The Holy City', es: 'La Ciudad Santa', lat: 31.7788, lon: 35.2258 },
    'Amman': { en: 'The White City', es: 'La Ciudad Blanca', lat: 31.9516, lon: 35.924 },
    'Beirut': { en: 'The Paris of the Middle East', es: 'El París de Oriente Medio', lat: 33.8959, lon: 35.4784 },
    'Chennai': { en: 'The Gateway to South India', es: 'La Puerta al Sur de la India', lat: 13.0837, lon: 80.2702 },
    'Bangalore': { en: 'The Silicon Valley of India', es: 'El Silicon Valley de la India', lat: 12.9768, lon: 77.5901 },
    'Hyderabad': { en: 'The City of Pearls', es: 'La Ciudad de las Perlas', lat: 17.3606, lon: 78.4741 },
    'Pune': { en: 'The Oxford of the East', es: 'El Oxford de Oriente', lat: 18.5214, lon: 73.8545 },
    'Jaipur': { en: 'The Pink City', es: 'La Ciudad Rosa', lat: 26.9155, lon: 75.819 },
    'Ahmedabad': { en: 'The Manchester of India', es: 'El Mánchester de la India', lat: 23.0215, lon: 72.5801 },
    'Kyoto': { en: 'The Cultural Heart of Japan', es: 'El Corazón Cultural de Japón', lat: 35.0116, lon: 135.7681 },
    'Nagoya': { en: 'The Heart of Japan', es: 'El Corazón de Japón', lat: 35.1851, lon: 136.8998 },
    'Fukuoka': { en: 'The Gateway to Asia', es: 'La Puerta a Asia', lat: 33.5899, lon: 130.4018 },
    'Busan': { en: 'The Maritime Capital', es: 'La Capital Marítima', lat: 35.18, lon: 129.0752 },
    'Yangon': { en: 'The Garden City of the East', es: 'La Ciudad Jardín de Oriente', lat: 16.7967, lon: 96.161 },

    // Europe
    'London': { en: 'The Big Smoke', es: 'La Gran Nube', lat: 51.5074, lon: -0.1278 },
    'Paris': { en: 'The City of Light', es: 'La Ciudad de la Luz', lat: 48.8535, lon: 2.3484 },
    'Berlin': { en: 'The City of Freedom', es: 'La Ciudad de la Libertad', lat: 52.5174, lon: 13.3951 },
    'Madrid': { en: 'The City That Never Sleeps', es: 'La Ciudad que Nunca Duerme', lat: 40.4168, lon: -3.7035 },
    'Rome': { en: 'The Eternal City', es: 'La Ciudad Eterna', lat: 41.8933, lon: 12.4829 },
    'Barcelona': { en: 'The City of Counts', es: 'La Ciudad de los Condes', lat: 41.3826, lon: 2.1771 },
    'Vienna': { en: 'The City of Music', es: 'La Ciudad de la Música', lat: 48.2084, lon: 16.3725 },
    'Amsterdam': { en: 'The Venice of the North', es: 'La Venecia del Norte', lat: 52.3731, lon: 4.8925 },
    'Prague': { en: 'The City of a Hundred Spires', es: 'La Ciudad de las Cien Torres', lat: 50.0875, lon: 14.4213 },
    'Brussels': { en: 'The Capital of Europe', es: 'La Capital de Europa', lat: 50.8467, lon: 4.3525 },
    'Munich': { en: 'The Heart of Bavaria', es: 'El Corazón de Baviera', lat: 48.1371, lon: 11.5754 },
    'Milan': { en: 'The Fashion Capital', es: 'La Capital de la Moda', lat: 45.4642, lon: 9.1896 },
    'Dublin': { en: 'The Fair City', es: 'La Ciudad Justa', lat: 53.3494, lon: -6.2606 },
    'Lisbon': { en: 'The City of Seven Hills', es: 'La Ciudad de las Siete Colinas', lat: 38.7078, lon: -9.1366 },
    'Athens': { en: 'The Cradle of Civilization', es: 'La Cuna de la Civilización', lat: 37.9756, lon: 23.7348 },
    'Stockholm': { en: 'The Venice of the North', es: 'La Venecia del Norte', lat: 59.3251, lon: 18.0711 },
    'Copenhagen': { en: 'The City of Spires', es: 'La Ciudad de las Torres', lat: 55.6867, lon: 12.5701 },
    'Oslo': { en: 'The Tiger City', es: 'La Ciudad del Tigre', lat: 59.9133, lon: 10.739 },
    'Helsinki': { en: 'The Daughter of the Baltic', es: 'La Hija del Báltico', lat: 60.1666, lon: 24.9435 },
    'Zurich': { en: 'The Little Big City', es: 'La Pequeña Gran Ciudad', lat: 47.3744, lon: 8.541 },
    'Geneva': { en: 'The Peace Capital', es: 'La Capital de la Paz', lat: 46.2018, lon: 6.1466 },
    'Budapest': { en: 'The Pearl of the Danube', es: 'La Perla del Danubio', lat: 47.4979, lon: 19.0402 },
    'Warsaw': { en: 'The Phoenix City', es: 'La Ciudad Fénix', lat: 52.232, lon: 21.0067 },
    'Krakow': { en: 'The Cultural Capital', es: 'La Capital Cultural', lat: 50.0619, lon: 19.9369 },
    'Venice': { en: 'The Floating City', es: 'La Ciudad Flotante', lat: 45.4372, lon: 12.3346 },
    'Florence': { en: 'The Cradle of the Renaissance', es: 'La Cuna del Renacimiento', lat: 43.7698, lon: 11.2556 },
    'Naples': { en: 'The City of the Sun', es: 'La Ciudad del Sol', lat: 40.8359, lon: 14.2488 },
    'Edinburgh': { en: 'The Athens of the North', es: 'La Atenas del Norte', lat: 55.9533, lon: -3.1884 },
    'Manchester': { en: 'The Rainy City', es: 'La Ciudad Lluviosa', lat: 53.4795, lon: -2.2451 },
    'Liverpool': { en: 'The Pool of Life', es: 'El Charco de la Vida', lat: 53.4072, lon: -2.9917 },
    'Glasgow': { en: 'The Dear Green Place', es: 'El Querido Lugar Verde', lat: 55.8612, lon: -4.2502 },
    'Marseille': { en: 'The Gateway to the South', es: 'La Puerta al Sur', lat: 43.2962, lon: 5.37 },
    'Lyon': { en: 'The Capital of Gastronomy', es: 'La Capital de la Gastronomía', lat: 45.7578, lon: 4.832 },
    'Nice': { en: 'The Queen of the Riviera', es: 'La Reina de la Riviera', lat: 43.7009, lon: 7.2684 },
    'Seville': { en: 'The Pearl of Andalusia', es: 'La Perla de Andalucía', lat: 37.3886, lon: -5.9953 },
    'Valencia': { en: 'The City of Arts and Sciences', es: 'La Ciudad de las Artes y las Ciencias', lat: 39.4697, lon: -0.3763 },
    'Bilbao': { en: 'The Botxo', es: 'El Botxo', lat: 43.2630, lon: -2.9350 },
    'Porto': { en: 'The Unvanquished City', es: 'La Ciudad Invicta', lat: 41.1502, lon: -8.6103 },
    'Hamburg': { en: 'The Gateway to the World', es: 'La Puerta al Mundo', lat: 53.5503, lon: 10.0007 },
    'Frankfurt': { en: 'The Mainhattan', es: 'El Mainhattan', lat: 50.1106, lon: 8.6821 },
    'Cologne': { en: 'The Cathedral City', es: 'La Ciudad de la Catedral', lat: 50.9384, lon: 6.96 },
    'Düsseldorf': { en: 'The Little Paris', es: 'El Pequeño París', lat: 51.2254, lon: 6.7763 },
    'Rotterdam': { en: 'The Gateway to Europe', es: 'La Puerta a Europa', lat: 51.9244, lon: 4.4777 },
    'Antwerp': { en: 'The Diamond City', es: 'La Ciudad del Diamante', lat: 51.2211, lon: 4.3997 },
    'Moscow': { en: 'The Third Rome', es: 'La Tercera Roma', lat: 55.6256, lon: 37.6064 },
    'St. Petersburg': { en: 'The Venice of the North', es: 'La Venecia del Norte', lat: 59.9607, lon: 30.1587 },
    'Istanbul': { en: 'Where East Meets West', es: 'Donde el Este se Encuentra con el Oeste', lat: 41.0064, lon: 28.9759 },

    // North America
    'New York': { en: 'The Big Apple', es: 'La Gran Manzana', lat: 40.7127, lon: -74.006 },
    'Los Angeles': { en: 'The City of Angels', es: 'La Ciudad de los Ángeles', lat: 34.0537, lon: -118.2428 },
    'Chicago': { en: 'The Windy City', es: 'La Ciudad del Viento', lat: 41.8756, lon: -87.6244 },
    'Houston': { en: 'Space City', es: 'La Ciudad del Espacio', lat: 29.7589, lon: -95.3677 },
    'Phoenix': { en: 'The Valley of the Sun', es: 'El Valle del Sol', lat: 33.4484, lon: -112.0741 },
    'Philadelphia': { en: 'The City of Brotherly Love', es: 'La Ciudad del Amor Fraternal', lat: 39.9527, lon: -75.1635 },
    'San Antonio': { en: 'The Alamo City', es: 'La Ciudad del Álamo', lat: 29.4246, lon: -98.4951 },
    'San Diego': { en: 'America\'s Finest City', es: 'La Ciudad más Fina de América', lat: 32.7174, lon: -117.1628 },
    'Dallas': { en: 'The Big D', es: 'La Gran D', lat: 32.7763, lon: -96.7969 },
    'San Francisco': { en: 'The Golden Gate City', es: 'La Ciudad del Golden Gate', lat: 37.7879, lon: -122.4075 },
    'Seattle': { en: 'The Emerald City', es: 'La Ciudad Esmeralda', lat: 47.6038, lon: -122.3301 },
    'Denver': { en: 'The Mile High City', es: 'La Ciudad a una Milla de Altura', lat: 39.7392, lon: -104.9849 },
    'Boston': { en: 'The Cradle of Liberty', es: 'La Cuna de la Libertad', lat: 42.3588, lon: -71.0578 },
    'Austin': { en: 'The Live Music Capital', es: 'La Capital Mundial de la Música en Vivo', lat: 30.2711, lon: -97.7437 },
    'Nashville': { en: 'Music City', es: 'La Ciudad de la Música', lat: 36.1623, lon: -86.7743 },
    'Portland': { en: 'The City of Roses', es: 'La Ciudad de las Rosas', lat: 45.5202, lon: -122.6742 },
    'Las Vegas': { en: 'Sin City', es: 'La Ciudad del Pecado', lat: 36.1674, lon: -115.1484 },
    'Miami': { en: 'The Magic City', es: 'La Ciudad Mágica', lat: 25.7742, lon: -80.1936 },
    'Atlanta': { en: 'The City Too Busy to Hate', es: 'La Ciudad Demasiado Ocupada para Odiar', lat: 33.7545, lon: -84.3898 },
    'New Orleans': { en: 'The Big Easy', es: 'La Gran Facilidad', lat: 29.9561, lon: -90.0734 },
    'Washington': { en: 'The Nation\'s Capital', es: 'La Capital de la Nación', lat: 38.895, lon: -77.0365 },
    'Detroit': { en: 'The Motor City', es: 'La Ciudad del Motor', lat: 42.3316, lon: -83.0466 },
    'Minneapolis': { en: 'The City of Lakes', es: 'La Ciudad de los Lagos', lat: 44.9773, lon: -93.2655 },
    'San Jose': { en: 'The Capital of Silicon Valley', es: 'La Capital del Silicon Valley', lat: 37.3362, lon: -121.8906 },
    'Baltimore': { en: 'Charm City', es: 'La Ciudad con Encanto', lat: 39.2909, lon: -76.6108 },
    'Toronto': { en: 'The Six', es: 'El Seis', lat: 43.6535, lon: -79.3839 },
    'Montreal': { en: 'The City of Saints', es: 'La Ciudad de los Santos', lat: 45.5032, lon: -73.5698 },
    'Vancouver': { en: 'The Hollywood of the North', es: 'El Hollywood del Norte', lat: 49.2609, lon: -123.114 },
    'Calgary': { en: 'The Stampede City', es: 'La Ciudad del Rodeo', lat: 51.0456, lon: -114.0575 },
    'Ottawa': { en: 'The Capital of Canada', es: 'La Capital de Canadá', lat: 45.4209, lon: -75.6901 },
    'Quebec City': { en: 'The Gibraltar of America', es: 'El Gibraltar de América', lat: 46.8137, lon: -71.2084 },
    'Mexico City': { en: 'The City of Palaces', es: 'La Ciudad de los Palacios', lat: 19.4326, lon: -99.1332 },
    'Guadalajara': { en: 'The Pearl of the West', es: 'La Perla del Occidente', lat: 20.672, lon: -103.3384 },
    'Monterrey': { en: 'The Sultana del Norte', es: 'La Sultana del Norte', lat: 25.6802, lon: -100.3153 },
    'Tijuana': { en: 'The Gateway to Mexico', es: 'La Puerta a México', lat: 32.5317, lon: -117.0195 },
    'Cancun': { en: 'The Mexican Caribbean', es: 'El Caribe Mexicano', lat: 21.1527, lon: -86.8426 },

    // South America
    'São Paulo': { en: 'The Concrete Jungle', es: 'La Jungla de Concreto', lat: -23.5507, lon: -46.6334 },
    'Rio de Janeiro': { en: 'The Marvelous City', es: 'La Ciudad Maravillosa', lat: -22.911, lon: -43.2094 },
    'Buenos Aires': { en: 'The Paris of South America', es: 'El París de Sudamérica', lat: -34.6096, lon: -58.3888 },
    'Lima': { en: 'The City of Kings', es: 'La Ciudad de los Reyes', lat: -12.046, lon: -77.0306 },
    'Bogotá': { en: 'The Athens of South America', es: 'La Atenas de Sudamérica', lat: 4.6534, lon: -74.0836 },
    'Santiago': { en: 'The Jewel of the Andes', es: 'La Joya de los Andes', lat: -33.4378, lon: -70.6505 },
    'Caracas': { en: 'The Sultana of the Avila', es: 'La Sultana del Ávila', lat: 10.5061, lon: -66.9146 },
    'Medellín': { en: 'The City of Eternal Spring', es: 'La Ciudad de la Eterna Primavera', lat: 6.2443, lon: -75.5736 },
    'Quito': { en: 'The Light of America', es: 'La Luz de América', lat: -0.2202, lon: -78.5123 },
    'Montevideo': { en: 'The Switzerland of America', es: 'La Suiza de América', lat: -34.9059, lon: -56.1913 },
    'Cartagena': { en: 'The Heroic City', es: 'La Ciudad Heroica', lat: 10.4266, lon: -75.5442 },
    'Cusco': { en: 'The Navel of the World', es: 'El Ombligo del Mundo', lat: -12.5, lon: -72.5 },
    'Havana': { en: 'The Pearl of the Antilles', es: 'La Perla de las Antillas', lat: 23.1353, lon: -82.359 },
    'San Juan': { en: 'The Walled City', es: 'La Ciudad Amurallada', lat: 18.4653, lon: -66.1167 },

    // Africa
    'Cairo': { en: 'The City of a Thousand Minarets', es: 'La Ciudad de los Mil Minaretes', lat: 29.9839, lon: 31.6015 },
    'Lagos': { en: 'The Giant of Africa', es: 'El Gigante de África', lat: 6.4551, lon: 3.3942 },
    'Johannesburg': { en: 'The City of Gold', es: 'La Ciudad del Oro', lat: -26.205, lon: 28.0497 },
    'Cape Town': { en: 'The Mother City', es: 'La Ciudad Madre', lat: -33.9288, lon: 18.4172 },
    'Nairobi': { en: 'The Green City in the Sun', es: 'La Ciudad Verde bajo el Sol', lat: -1.289, lon: 36.8173 },
    'Casablanca': { en: 'The White City', es: 'La Ciudad Blanca', lat: 33.5945, lon: -7.62 },
    'Marrakech': { en: 'The Red City', es: 'La Ciudad Roja', lat: 31.6258, lon: -7.9892 },
    'Addis Ababa': { en: 'The New Flower', es: 'La Flor Nueva', lat: 9, lon: 38.75 },
    'Accra': { en: 'The Gateway to West Africa', es: 'La Puerta a África Occidental', lat: 5.5571, lon: -0.2012 },
    'Dar es Salaam': { en: 'The Haven of Peace', es: 'El Puerto de la Paz', lat: -6.8161, lon: 39.2804 },
    'Tunis': { en: 'The Olive Tree Capital', es: 'La Capital del Olivo', lat: 33.8439, lon: 9.4001 },
    'Algiers': { en: 'The White City', es: 'La Ciudad Blanca', lat: 36.7729, lon: 3.0588 },
    'Kigali': { en: 'The Land of a Thousand Hills', es: 'La Tierra de las Mil Colinas', lat: -1.9534, lon: 30.114 },
    'Dakar': { en: 'The Gateway to Africa', es: 'La Puerta a África', lat: 14.6934, lon: -17.4479 },
    'Abuja': { en: 'The Centre of Unity', es: 'El Centro de la Unidad', lat: 9.0643, lon: 7.4893 },

    // Oceania
    'Sydney': { en: 'The Harbour City', es: 'La Ciudad del Puerto', lat: -33.8698, lon: 151.2083 },
    'Melbourne': { en: 'The Garden City', es: 'La Ciudad Jardín', lat: -37.8142, lon: 144.9632 },
    'Brisbane': { en: 'The River City', es: 'La Ciudad del Río', lat: -27.469, lon: 153.0235 },
    'Perth': { en: 'The City of Light', es: 'La Ciudad de la Luz', lat: -31.9559, lon: 115.8606 },
    'Auckland': { en: 'The City of Sails', es: 'La Ciudad de las Velas', lat: -36.8521, lon: 174.7632 },
    'Wellington': { en: 'The Windy City', es: 'La Ciudad Ventosa', lat: -41.2888, lon: 174.7772 },
    'Adelaide': { en: 'The City of Churches', es: 'La Ciudad de las Iglesias', lat: -34.9282, lon: 138.5999 },
    'Gold Coast': { en: 'The Surfers Paradise', es: 'El Paraíso de los Surfistas', lat: -28.0024, lon: 153.4146 },
    'Canberra': { en: 'The Bush Capital', es: 'La Capital del Monte', lat: -35.2976, lon: 149.1013 },
    'Christchurch': { en: 'The Garden City', es: 'La Ciudad Jardín', lat: -43.531, lon: 172.6364 }
};

// Maps lowercase Spanish city names → WORLD_CITIES key (for cities whose Spanish name differs from English)
const CITY_ALIASES_ES = {
    // Asia
    'tokio': 'Tokyo',
    'pekín': 'Beijing', 'pekin': 'Beijing',
    'seúl': 'Seoul', 'seul': 'Seoul',
    'singapur': 'Singapore',
    'taipéi': 'Taipei',
    'hanói': 'Hanoi',
    'rangún': 'Yangon', 'rangun': 'Yangon',
    'ciudad ho chi minh': 'Ho Chi Minh City',
    'doha': 'Doha',
    'jerusalén': 'Jerusalem', 'jerusalen': 'Jerusalem',
    // Europe
    'roma': 'Rome',
    'florencia': 'Florence',
    'venecia': 'Venice',
    'viena': 'Vienna',
    'lisboa': 'Lisbon',
    'atenas': 'Athens',
    'praga': 'Prague',
    'bruselas': 'Brussels',
    'ginebra': 'Geneva',
    'copenhague': 'Copenhagen',
    'varsovia': 'Warsaw',
    'cracovia': 'Krakow',
    'moscú': 'Moscow', 'moscu': 'Moscow',
    'san petersburgo': 'St. Petersburg',
    'estambul': 'Istanbul',
    'nápoles': 'Naples', 'napoles': 'Naples',
    'edimburgo': 'Edinburgh',
    'colonia': 'Cologne',
    'hamburgo': 'Hamburg',
    'múnich': 'Munich',
    'el cairo': 'Cairo',
    // North America
    'nueva york': 'New York',
    'nueva orleans': 'New Orleans',
    'ciudad de méxico': 'Mexico City', 'ciudad de mexico': 'Mexico City',
    'ciudad de quebec': 'Quebec City',
    'la habana': 'Havana', 'habana': 'Havana',
    // South America
    'río de janeiro': 'Rio de Janeiro', 'rio de janeiro': 'Rio de Janeiro',
    // Africa
    'ciudad del cabo': 'Cape Town',
};

const APP_LANG = document.documentElement.lang?.toLowerCase().startsWith('es') ? 'es' : 'en';
const I18N = {
    en: {
        defaultSubtitle: 'A Beautiful Place to Explore',
        statusUpdatingMapStyle: 'Updating map style…',
        statusMapStyleUpdated: 'Map style updated.',
        statusSearchingCity: 'Searching city…',
        statusNoResults: 'No results found for that place.',
        statusLocationUpdated: 'Location updated.',
        statusSearchCityError: 'Error searching city.',
        statusRenderingPoster: 'Rendering high-resolution poster… this may take a moment.',
        statusPosterDownloaded: 'Poster downloaded ({width} × {height} px @ ~{dpi} DPI, {sizeMB}MB).',
        statusDownloadError: 'Error: {message}. Try a smaller size or refresh.',
        statusLoadingCity: 'Loading city location…',
        statusCityLoaded: 'City loaded.',
        statusLoadCityError: 'Error loading city, using default location.',
        toggleShowAll: 'Show all',
        toggleShowLess: 'Show less',
        statusRenderingPreview: 'Rendering preview…',
        statusPreviewReady: 'Preview ready.',
        errGeocodingFailed: 'Geocoding failed',
        errCanvasRenderingFailed: 'Canvas rendering failed',
        errCreateImageFailed: 'Failed to create image'
    },
    es: {
        defaultSubtitle: 'Un lugar hermoso para explorar',
        statusUpdatingMapStyle: 'Actualizando estilo del mapa…',
        statusMapStyleUpdated: 'Estilo del mapa actualizado.',
        statusSearchingCity: 'Buscando ciudad…',
        statusNoResults: 'No se encontraron resultados para ese lugar.',
        statusLocationUpdated: 'Ubicación actualizada.',
        statusSearchCityError: 'Error al buscar la ciudad.',
        statusRenderingPoster: 'Renderizando póster en alta resolución… esto puede tardar un momento.',
        statusPosterDownloaded: 'Póster descargado ({width} × {height} px a ~{dpi} DPI, {sizeMB}MB).',
        statusDownloadError: 'Error: {message}. Prueba un tamaño menor o recarga la página.',
        statusLoadingCity: 'Cargando ubicación de la ciudad…',
        statusCityLoaded: 'Ciudad cargada.',
        statusLoadCityError: 'Error al cargar la ciudad; se usará la ubicación predeterminada.',
        toggleShowAll: 'Mostrar todos',
        toggleShowLess: 'Mostrar menos',
        statusRenderingPreview: 'Generando vista previa…',
        statusPreviewReady: 'Vista previa lista.',
        errGeocodingFailed: 'Falló la geocodificación',
        errCanvasRenderingFailed: 'Falló el renderizado del lienzo',
        errCreateImageFailed: 'No se pudo crear la imagen'
    }
};

function t(key, vars = {}) {
    const dict = I18N[APP_LANG] || I18N.en;
    const template = dict[key] || I18N.en[key] || key;
    return template.replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? `{${name}}`));
}

const DEFAULT_SUBTITLE = t('defaultSubtitle');

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

// Social media export sizes in pixels
const SOCIAL_SIZES = {
    'ig-story': { label: 'IG Story / Reel — 1080 × 1920', width: 1080, height: 1920 },
    'ig-post': { label: 'IG Post — 1080 × 1080', width: 1080, height: 1080 },
    'pinterest': { label: 'Pinterest Pin — 1000 × 1500', width: 1000, height: 1500 },
    'twitter-header': { label: 'Twitter Header — 1500 × 500', width: 1500, height: 500 },
    'phone-wallpaper': { label: 'Phone Wallpaper — 1170 × 2532', width: 1170, height: 2532 },
    'desktop-wallpaper': { label: 'Desktop Wallpaper — 2560 × 1440', width: 2560, height: 1440 },
};

const TARGET_DPI = 300;
const INITIAL_CENTER = [139.7639, 35.6769]; // Tokyo
const INITIAL_ZOOM = 13;
const GLOBE_CITY_COORDS_CACHE_KEY = 'mapi_globe_city_coords_v1';
const GLOBE_COORD_BATCH_SIZE = 8;
const GLOBE_MARKER_SEED_CITIES = [
    { name: 'Tokyo', lat: 35.6769, lon: 139.7639 },
    { name: 'Paris', lat: 48.8535, lon: 2.3484 },
    { name: 'New York', lat: 40.7127, lon: -74.006 }
];

function readGlobeCityCoordsCache() {
    try {
        const raw = localStorage.getItem(GLOBE_CITY_COORDS_CACHE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
        return {};
    }
}

function writeGlobeCityCoordsCache(cache) {
    try {
        localStorage.setItem(GLOBE_CITY_COORDS_CACHE_KEY, JSON.stringify(cache));
    } catch {
        // Ignore storage write failures (quota/private mode).
    }
}

async function geocodeCityCoordinate(cityName) {
    try {
        const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(cityName)}.json?key=${MAPTILER_KEY}&limit=1&language=${APP_LANG}`;
        const res = await fetch(url);
        if (!res.ok) return null;
        const data = await res.json();
        const first = data?.features?.[0];
        if (!first?.center || first.center.length < 2) return null;

        const lon = Number(first.center[0]);
        const lat = Number(first.center[1]);
        if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;

        return { lat, lon };
    } catch {
        return null;
    }
}

async function loadGlobeCityCoordinates() {
    const cityNames = Object.keys(WORLD_CITIES);
    const cityOrder = new Map(cityNames.map((name, idx) => [name, idx]));
    const cache = readGlobeCityCoordsCache();

    const resolved = [];
    const missing = [];
    cityNames.forEach(name => {
        const cityData = WORLD_CITIES[name];
        // Use built-in coordinates when available — no API call needed
        if (Number.isFinite(cityData.lat) && Number.isFinite(cityData.lon)) {
            resolved.push({ name, lat: cityData.lat, lon: cityData.lon });
            return;
        }
        const coords = cache[name];
        if (coords && Number.isFinite(coords.lat) && Number.isFinite(coords.lon)) {
            resolved.push({ name, lat: coords.lat, lon: coords.lon });
        } else {
            missing.push(name);
        }
    });

    if (missing.length > 0) {
        let cursor = 0;
        const workerCount = Math.min(GLOBE_COORD_BATCH_SIZE, missing.length);
        const workers = Array.from({ length: workerCount }, async () => {
            while (cursor < missing.length) {
                const cityName = missing[cursor++];
                const coords = await geocodeCityCoordinate(cityName);
                if (!coords) continue;
                cache[cityName] = coords;
                resolved.push({ name: cityName, lat: coords.lat, lon: coords.lon });
            }
        });
        await Promise.all(workers);
        writeGlobeCityCoordsCache(cache);
    }

    return resolved.sort((a, b) => cityOrder.get(a.name) - cityOrder.get(b.name));
}

// === DOM ELEMENTS ===
const elements = {
    status: document.getElementById("status"),
    zoomInput: document.getElementById("zoomInput"),
    zoomValue: document.getElementById("zoomValue"),
    zoomIncrement: document.getElementById("zoomIncrement"),
    zoomDecrement: document.getElementById("zoomDecrement"),
    cityInput: document.getElementById("cityInput"),
    citySearchBtn: document.getElementById("citySearchBtn"),
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
    previewBtn: document.getElementById("previewBtn"),
    previewModal: document.getElementById("previewModal"),
    previewImg: document.getElementById("previewImg"),
    previewClose: document.getElementById("previewClose"),
    themesGrid: document.getElementById("themesGrid"),
    toggleThemesGrid: document.getElementById("toggleThemesGrid"),
    selectedThemeSwatch: document.getElementById("selectedThemeSwatch"),
    selectedThemeName: document.getElementById("selectedThemeName"),
    selectedBgColor: document.getElementById("selectedBgColor"),
    selectedRoadsColor: document.getElementById("selectedRoadsColor"),
    selectedWaterColor: document.getElementById("selectedWaterColor"),
    labelColorInput: document.getElementById("labelColorInput"),
    labelColorHex: document.getElementById("labelColorHex"),
    labelColorAuto: document.getElementById("labelColorAuto"),
    panelToggleBtn: document.getElementById("panelToggleBtn"),
    panelCloseBtn: document.getElementById("panelCloseBtn"),
    controls: document.getElementById("controls"),
    canvasSizeDisplay: document.getElementById("canvasSizeDisplay"),
    cityAutocomplete: document.getElementById("cityAutocomplete"),
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

function updateCanvasSizeDisplay() {
    const el = elements.canvasSizeDisplay;
    if (!el || !elements.poster) return;
    const { offsetWidth: w, offsetHeight: h } = elements.poster;
    el.textContent = `Canvas: ${w} × ${h} px`;
}

// === TOAST NOTIFICATION ===
let _toastTimer = null;

function showToast(msg, isError = false) {
    const toast = document.getElementById('downloadToast');
    const msgEl = document.getElementById('downloadToastMsg');
    const icon = document.getElementById('downloadToastIcon');
    const dismiss = document.getElementById('downloadToastDismiss');
    if (!toast || !msgEl) return;

    msgEl.textContent = msg;
    icon.setAttribute('name', isError ? 'alert-circle-outline' : 'checkmark-circle-outline');
    toast.className = isError ? 'toast-error visible' : 'toast-success visible';

    clearTimeout(_toastTimer);
    dismiss.onclick = hideToast;

    if (!isError) {
        _toastTimer = setTimeout(hideToast, 6000);
    }
}

function hideToast() {
    const toast = document.getElementById('downloadToast');
    if (!toast) return;
    toast.classList.remove('visible');
    clearTimeout(_toastTimer);
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
            localStorage.setItem('mapi_color_theme', name);
            setStatus(t('statusUpdatingMapStyle'));
            changeMapStyle(name);
            updateSelectedThemePreview(name);
        });

        elements.themesGrid.appendChild(swatch);
    });
}

function populateStyleSelect() {
    elements.styleSelect.innerHTML = '';
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
        elements.styleSelect.appendChild(group);
    });
}

function formatCoordinates(lat, lon) {
    const latDir = lat >= 0 ? "N" : "S";
    const lonDir = lon >= 0 ? "E" : "W";
    return `${Math.abs(lat).toFixed(3)}° ${latDir} — ${Math.abs(lon).toFixed(3)}° ${lonDir}`;
}

// === MAP STYLE ===
function createMapStyle(palette) {
    const isDark = !isLightColor(palette.bg);
    // On dark backgrounds, subtle alpha overlays are invisible — boost them
    const alphaBoost = isDark ? 3.0 : 1.0;

    // Ensure minimum contrast between bg and water/buildings on dark themes
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
        // Lighten from bg by adding a uniform offset that guarantees minDist
        const offset = Math.ceil(minDist / 1.73) + 1;
        const nr = Math.min(255, br + offset);
        const ng = Math.min(255, bgr + offset);
        const nb = Math.min(255, bb + offset);
        return '#' + [nr, ng, nb].map(v => v.toString(16).padStart(2, '0')).join('');
    };

    const waterColor = ensureContrast(palette.water, 35);
    const buildingColor = palette.buildings ? ensureContrast(palette.buildings, 30) : null;

    // Zoom-interpolated line width helper — covers z4 through z18 for full detail range
    const w = (z4, z6, z8, z10, z12, z14, z16, z18) => [
        'interpolate', ['exponential', 1.4], ['zoom'],
        4, z4, 6, z6, 8, z8, 10, z10, 12, z12, 14, z14, 16, z16, 18, z18
    ];

    // Derive extra palette shades from existing palette colors
    // Semi-transparent road color for casings / landuse fills
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
            // ── Background ────────────────────────────────────────────────
            { id: 'background', type: 'background', paint: { 'background-color': palette.bg } },

            // ── Landcover (broad area fills) ──────────────────────────────
            // Farmland / crop fields — very subtle tint, visible at z6+
            {
                id: 'landcover_farmland', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover',
                filter: ['in', 'class', 'farmland', 'crop'],
                paint: { 'fill-color': roadsAlpha(0.04), 'fill-opacity': 1 }
            },
            // Grass / meadow / heath
            {
                id: 'landcover_grass', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover',
                filter: ['in', 'class', 'grass', 'meadow', 'heath'],
                paint: { 'fill-color': roadsAlpha(0.06), 'fill-opacity': 1 }
            },
            // Scrub / shrub
            {
                id: 'landcover_scrub', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover',
                filter: ['in', 'class', 'scrub', 'shrub'],
                paint: { 'fill-color': roadsAlpha(0.07), 'fill-opacity': 1 }
            },
            // Sand / beach / bare rock
            {
                id: 'landcover_sand', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover',
                filter: ['in', 'class', 'sand', 'beach', 'bare_rock', 'rock'],
                paint: { 'fill-color': roadsAlpha(0.08), 'fill-opacity': 1 }
            },
            // Ice / glacier
            {
                id: 'landcover_ice', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover',
                filter: ['in', 'class', 'ice', 'glacier', 'snow'],
                paint: { 'fill-color': waterAlpha(0.22), 'fill-opacity': 1 }
            },
            // Wetland / marsh
            {
                id: 'landcover_wetland', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover',
                filter: ['in', 'class', 'wetland', 'marsh', 'swamp'],
                paint: { 'fill-color': waterAlpha(0.15), 'fill-opacity': 1 }
            },
            // Wood / forest
            {
                id: 'landcover_wood', type: 'fill', source: 'openmaptiles', 'source-layer': 'landcover',
                filter: ['==', 'class', 'wood'],
                paint: { 'fill-color': roadsAlpha(0.10), 'fill-opacity': 1 }
            },

            // ── Landuse (human activity zones) ───────────────────────────
            // Parks & greenery
            { id: 'park', type: 'fill', source: 'openmaptiles', 'source-layer': 'park', paint: { 'fill-color': palette.parks || roadsAlpha(0.06), 'fill-opacity': 1 } },
            // Residential areas — very faint, adds texture at mid zoom
            {
                id: 'landuse_residential', type: 'fill', source: 'openmaptiles', 'source-layer': 'landuse',
                filter: ['in', 'class', 'residential', 'suburb'],
                paint: { 'fill-color': roadsAlpha(0.04), 'fill-opacity': 1 }
            },
            // Commercial / retail
            {
                id: 'landuse_commercial', type: 'fill', source: 'openmaptiles', 'source-layer': 'landuse',
                filter: ['in', 'class', 'commercial', 'retail'],
                paint: { 'fill-color': roadsAlpha(0.07), 'fill-opacity': 1 }
            },
            // Industrial / transit
            {
                id: 'landuse_industrial', type: 'fill', source: 'openmaptiles', 'source-layer': 'landuse',
                filter: ['in', 'class', 'industrial', 'transit'],
                paint: { 'fill-color': roadsAlpha(0.09), 'fill-opacity': 1 }
            },
            // Cemetery / military
            {
                id: 'landuse_special', type: 'fill', source: 'openmaptiles', 'source-layer': 'landuse',
                filter: ['in', 'class', 'cemetery', 'military'],
                paint: { 'fill-color': roadsAlpha(0.12), 'fill-opacity': 1 }
            },

            // ── Water ─────────────────────────────────────────────────────
            { id: 'water', type: 'fill', source: 'openmaptiles', 'source-layer': 'water', paint: { 'fill-color': waterColor } },
            // Water outline for crisp shorelines
            {
                id: 'water_outline', type: 'line', source: 'openmaptiles', 'source-layer': 'water',
                paint: { 'line-color': waterAlpha(0.55), 'line-width': 0.5 }
            },
            // Rivers & canals
            {
                id: 'waterway', type: 'line', source: 'openmaptiles', 'source-layer': 'waterway',
                layout: { 'line-cap': 'round', 'line-join': 'round' },
                paint: { 'line-color': waterColor, 'line-width': w(0, 0.3, 0.6, 1.2, 2.0, 3.0, 4.0, 5.0), 'line-opacity': 0.85 }
            },

            // ── Administrative boundaries ─────────────────────────────────
            // Country borders — visible at all zoom levels
            {
                id: 'boundary_country', type: 'line', source: 'openmaptiles', 'source-layer': 'boundary',
                filter: ['==', 'admin_level', 2],
                layout: { 'line-cap': 'round', 'line-join': 'round' },
                paint: {
                    'line-color': roadsAlpha(0.55),
                    'line-width': ['interpolate', ['linear'], ['zoom'], 2, 0.5, 6, 0.8, 10, 1.2],
                    'line-dasharray': [4, 3]
                }
            },
            // State / province borders — appear at z6+
            {
                id: 'boundary_state', type: 'line', source: 'openmaptiles', 'source-layer': 'boundary',
                filter: ['==', 'admin_level', 4],
                minzoom: 6,
                layout: { 'line-cap': 'round', 'line-join': 'round' },
                paint: {
                    'line-color': roadsAlpha(0.3),
                    'line-width': ['interpolate', ['linear'], ['zoom'], 6, 0.4, 10, 0.7, 14, 1.0],
                    'line-dasharray': [3, 4]
                }
            },
            // ── Roads ─────────────────────────────────────────────────────
            // Road casings (outer stroke) for motorways — gives embossed depth effect
            {
                id: 'highway_major_casing', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
                filter: ['in', 'class', 'motorway', 'trunk'],
                minzoom: 8,
                layout: { 'line-cap': 'round', 'line-join': 'round' },
                paint: { 'line-color': roadsAlpha(0.18), 'line-width': w(0, 0, 2.0, 3.5, 5.5, 7.5, 10.0, 12.0), 'line-gap-width': 0 }
            },
            // Motorways / trunks / primary — thickest, most prominent
            {
                id: 'highway_major', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
                filter: ['in', 'class', 'motorway', 'trunk', 'primary'],
                layout: { 'line-cap': 'round', 'line-join': 'round' },
                paint: { 'line-color': palette.roads, 'line-width': w(0.1, 0.4, 0.8, 1.8, 3.0, 4.5, 6.0, 7.5) }
            },
            // Secondary / tertiary — medium weight
            {
                id: 'highway_minor', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
                filter: ['in', 'class', 'secondary', 'tertiary'],
                minzoom: 7,
                layout: { 'line-cap': 'round', 'line-join': 'round' },
                paint: { 'line-color': palette.roads, 'line-width': w(0, 0.2, 0.5, 1.1, 1.8, 2.8, 4.0, 5.0) }
            },
            // Minor / service / tracks — hairline at low zoom, readable at street level
            {
                id: 'highway_other', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
                filter: ['in', 'class', 'minor', 'service', 'track'],
                minzoom: 11,
                layout: { 'line-cap': 'round', 'line-join': 'round' },
                paint: { 'line-color': palette.roads, 'line-width': w(0, 0, 0.2, 0.5, 1.0, 1.6, 2.4, 3.0), 'line-opacity': 0.65 }
            },
            // Paths / footways / cycleways — show at high zoom for walkable detail
            {
                id: 'highway_path', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
                filter: ['in', 'class', 'path', 'footway', 'cycleway', 'pedestrian'],
                minzoom: 13,
                layout: { 'line-cap': 'round', 'line-join': 'round' },
                paint: { 'line-color': roadsAlpha(0.45), 'line-width': w(0, 0, 0, 0, 0.5, 0.8, 1.2, 1.6), 'line-dasharray': [2, 2] }
            },
            // Bridges — slight emphasis to distinguish from regular roads
            {
                id: 'highway_bridge', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
                filter: ['==', 'brunnel', 'bridge'],
                minzoom: 12,
                layout: { 'line-cap': 'butt', 'line-join': 'miter' },
                paint: { 'line-color': palette.roads, 'line-width': w(0, 0, 0.5, 1.5, 2.5, 4.0, 5.5, 7.0) }
            },
            // Ferry routes — dashed blue-ish line over water
            {
                id: 'ferry', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
                filter: ['==', 'class', 'ferry'],
                minzoom: 8,
                layout: { 'line-cap': 'round', 'line-join': 'round' },
                paint: { 'line-color': waterAlpha(0.7), 'line-width': w(0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.0), 'line-dasharray': [4, 4] }
            },
            // Rail — dashed appearance via dash-array; scales independently
            {
                id: 'railway', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
                filter: ['in', 'class', 'rail', 'transit'],
                minzoom: 8,
                layout: { 'line-cap': 'butt', 'line-join': 'miter' },
                paint: { 'line-color': roadsAlpha(0.55), 'line-width': w(0, 0.2, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4), 'line-dasharray': [3, 2] }
            },
            // Subway / light rail / tram — thinner dash
            {
                id: 'transit_light', type: 'line', source: 'openmaptiles', 'source-layer': 'transportation',
                filter: ['in', 'class', 'subway', 'light_rail', 'tram', 'monorail', 'narrow_gauge'],
                minzoom: 11,
                layout: { 'line-cap': 'butt', 'line-join': 'miter' },
                paint: { 'line-color': roadsAlpha(0.4), 'line-width': w(0, 0, 0, 0.5, 0.9, 1.2, 1.5, 1.8), 'line-dasharray': [2, 3] }
            },

            // ── Piers & structures ────────────────────────────────────────
            {
                id: 'pier', type: 'fill', source: 'openmaptiles', 'source-layer': 'transportation',
                filter: ['==', 'class', 'pier'],
                minzoom: 13,
                paint: { 'fill-color': roadsAlpha(0.25) }
            },

            // ── Buildings ─────────────────────────────────────────────────
            { id: 'building', type: 'fill', source: 'openmaptiles', 'source-layer': 'building', minzoom: 12, paint: { 'fill-color': buildingColor || palette.roads, 'fill-opacity': buildingColor ? 1 : 0.25 } },
            {
                id: 'building_outline', type: 'line', source: 'openmaptiles', 'source-layer': 'building',
                minzoom: 14,
                paint: { 'line-color': buildingColor ? roadsAlpha(0.3) : roadsAlpha(0.18), 'line-width': 0.4 }
            }
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
    localStorage.setItem('mapi_label_color_auto', 'false');
    localStorage.setItem('mapi_custom_label_color', color);
}

function setLabelColorAuto() {
    labelColorAuto = true;
    customLabelColor = null;
    updatePosterColors(PALETTES[currentStyle]);
    elements.labelColorAuto.classList.replace('text-[#666]', 'text-[#440edf]');
    localStorage.setItem('mapi_label_color_auto', 'true');
    localStorage.removeItem('mapi_custom_label_color');
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

    // Layers visible from zoom 6 (major roads and boundaries)
    const z6Layers = ['highway_major', 'highway_major_casing', 'boundary_country', 'boundary_state', 'ferry'];
    // Layers visible from zoom 7 (secondary roads)
    const z7Layers = ['highway_minor'];
    // Layers visible from zoom 8 (waterways, railway, aeroway)
    const z8Layers = ['railway', 'aeroway_fill', 'aeroway_runway'];
    // Layers visible from zoom 11 (minor roads, transit, taxiway)
    const z11Layers = ['highway_other', 'transit_light', 'aeroway_taxiway'];
    // Layers visible from zoom 12 (buildings, bridges)
    const z12Layers = ['building', 'highway_bridge'];
    // Layers visible from zoom 13 (paths, piers)
    const z13Layers = ['highway_path', 'pier'];
    // Layers visible from zoom 14 (building outlines)
    const z14Layers = ['building_outline'];

    const layerGroups = [
        [z6Layers, 6], [z7Layers, 7], [z8Layers, 8],
        [z11Layers, 11], [z12Layers, 12], [z13Layers, 13], [z14Layers, 14]
    ];

    layerGroups.forEach(([layers, minZoom]) => {
        const visibility = zoom >= minZoom ? 'visible' : 'none';
        layers.forEach(layerId => {
            if (map.getLayer(layerId)) {
                map.setLayoutProperty(layerId, 'visibility', visibility);
            }
        });
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

function saveStateToStorage(cityName, center) {
    if (cityName) localStorage.setItem('mapi_city', cityName);
    if (center) localStorage.setItem('mapi_city_center', JSON.stringify(center));
}

function setupMapEvents() {
    map.on("load", () => {
        onMapUpdate();
        updatePosterColors(PALETTES[currentStyle]);
        map.resize();
    });
    map.on("moveend", onMapUpdate);
    map.on("zoomend", () => {
        localStorage.setItem('mapi_zoom', map.getZoom());
    });
}

function changeMapStyle(styleKey) {
    const { lng, lat } = map.getCenter();
    const zoom = map.getZoom();
    map.remove();
    currentStyle = styleKey;
    map = initMap([lng, lat], zoom, styleKey);
    setupMapEvents();
    map.once("load", () => setStatus(t('statusMapStyleUpdated')));
}

// === GEOCODING ===
function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function getCitySubtitle(cityName) {
    const normName = normalize(cityName);

    const getSubtitle = (entry) => entry[APP_LANG] || entry.en;

    // Spanish alias check: resolve Spanish name → English WORLD_CITIES key
    // Uses normalized comparison so accented inputs (e.g. "París", "Múnich") match too
    if (APP_LANG === 'es') {
        const sortedAliases = Object.keys(CITY_ALIASES_ES).sort((a, b) => b.length - a.length);
        for (const alias of sortedAliases) {
            if (normName === normalize(alias) || normName.includes(normalize(alias))) {
                const key = CITY_ALIASES_ES[alias];
                if (WORLD_CITIES[key]) return getSubtitle(WORLD_CITIES[key]);
            }
        }
    }

    // First pass: exact match (accent-insensitive)
    for (const [city, subtitle] of Object.entries(WORLD_CITIES)) {
        if (normalize(city) === normName) return getSubtitle(subtitle);
    }

    // Second pass: input contains a full city name (e.g. "New York City" → "New York")
    // Sort by name length descending so longer (more specific) names match first
    const sortedEntries = Object.entries(WORLD_CITIES).sort((a, b) => b[0].length - a[0].length);
    for (const [city, subtitle] of sortedEntries) {
        if (normName.includes(normalize(city))) return getSubtitle(subtitle);
    }

    return DEFAULT_SUBTITLE;
}

// === CITY AUTOCOMPLETE ===
let acActiveIndex = -1;
let acDebounceTimer = null;
let acAbortController = null;

function getLocalCityMatches(query) {
    const norm = normalize(query);
    if (!norm) return [];
    const results = [];
    for (const [city, data] of Object.entries(WORLD_CITIES)) {
        if (normalize(city).startsWith(norm)) {
            results.push({ name: city, subtitle: data[APP_LANG] || data.en, lat: data.lat, lon: data.lon, source: 'local' });
        }
    }
    // Also check contains (but prioritize startsWith)
    if (results.length < 5) {
        for (const [city, data] of Object.entries(WORLD_CITIES)) {
            if (!normalize(city).startsWith(norm) && normalize(city).includes(norm)) {
                results.push({ name: city, subtitle: data[APP_LANG] || data.en, lat: data.lat, lon: data.lon, source: 'local' });
            }
            if (results.length >= 5) break;
        }
    }
    // Also check Spanish aliases
    if (APP_LANG === 'es') {
        for (const [alias, key] of Object.entries(CITY_ALIASES_ES)) {
            if (normalize(alias).includes(norm) && WORLD_CITIES[key] && !results.some(r => r.name === key)) {
                const data = WORLD_CITIES[key];
                results.push({ name: key, subtitle: data.es || data.en, lat: data.lat, lon: data.lon, source: 'local' });
            }
            if (results.length >= 5) break;
        }
    }
    return results.slice(0, 5);
}

async function getApiCityMatches(query) {
    if (acAbortController) acAbortController.abort();
    acAbortController = new AbortController();
    try {
        const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json?key=${MAPTILER_KEY}&language=${APP_LANG}&limit=5`;
        const res = await fetch(url, { signal: acAbortController.signal });
        if (!res.ok) return [];
        const data = await res.json();
        if (!data.features?.length) return [];
        return data.features.map(f => ({
            name: f.place_name || f.text || query,
            city: f.text || query,
            subtitle: f.place_type?.[0] || '',
            lat: f.center[1],
            lon: f.center[0],
            source: 'api'
        }));
    } catch {
        return [];
    }
}

function renderAutocomplete(items) {
    const list = elements.cityAutocomplete;
    if (!items.length) {
        list.innerHTML = '';
        list.classList.remove('open');
        acActiveIndex = -1;
        return;
    }
    list.innerHTML = items.map((item, i) => `
        <li role="option" data-index="${i}" data-name="${item.name.replace(/"/g, '&quot;')}" data-city="${(item.city || item.name).replace(/"/g, '&quot;')}" data-lat="${item.lat}" data-lon="${item.lon}"${i === acActiveIndex ? ' class="active"' : ''}>
            <span class="ac-icon"><ion-icon name="location-outline"></ion-icon></span>
            <span class="ac-city">${item.name}</span>
            <span class="ac-subtitle">${item.subtitle}</span>
        </li>
    `).join('');
    list.classList.add('open');

    list.querySelectorAll('li').forEach(li => {
        li.addEventListener('mousedown', e => {
            e.preventDefault();
            selectAutocompleteItem(li);
        });
    });
}

function selectAutocompleteItem(li) {
    const name = li.dataset.name;
    const cityName = li.dataset.city || name;
    const lat = parseFloat(li.dataset.lat);
    const lon = parseFloat(li.dataset.lon);
    elements.cityInput.value = name;
    closeAutocomplete();

    map.flyTo({ center: [lon, lat], zoom: 12 });
    elements.titleInput.value = cityName.toUpperCase();
    elements.subtitleInput.value = getCitySubtitle(cityName);
    saveStateToStorage(name, [lon, lat]);
    updateLabels();
    updateFooter(lat, lon);
    setStatus(t('statusLocationUpdated'));
}

function closeAutocomplete() {
    elements.cityAutocomplete.classList.remove('open');
    elements.cityAutocomplete.innerHTML = '';
    acActiveIndex = -1;
}

async function handleAutocompleteInput() {
    const query = elements.cityInput.value.trim();
    if (query.length < 2) {
        closeAutocomplete();
        return;
    }

    // First try local matches
    const localMatches = getLocalCityMatches(query);
    if (localMatches.length > 0) {
        renderAutocomplete(localMatches);
        return;
    }

    // No local matches — show loading then fetch from API
    elements.cityAutocomplete.innerHTML = '<li class="ac-loading">Searching...</li>';
    elements.cityAutocomplete.classList.add('open');

    const apiMatches = await getApiCityMatches(query);
    // Only render if input hasn't changed while waiting
    if (elements.cityInput.value.trim() === query) {
        renderAutocomplete(apiMatches);
    }
}

function initAutocomplete() {
    elements.cityInput.addEventListener('input', () => {
        clearTimeout(acDebounceTimer);
        acDebounceTimer = setTimeout(handleAutocompleteInput, 200);
    });

    elements.cityInput.addEventListener('keydown', e => {
        const list = elements.cityAutocomplete;
        const items = list.querySelectorAll('li[role="option"]');
        if (!items.length || !list.classList.contains('open')) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            acActiveIndex = Math.min(acActiveIndex + 1, items.length - 1);
            items.forEach((li, i) => li.classList.toggle('active', i === acActiveIndex));
            items[acActiveIndex]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            acActiveIndex = Math.max(acActiveIndex - 1, 0);
            items.forEach((li, i) => li.classList.toggle('active', i === acActiveIndex));
            items[acActiveIndex]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter' && acActiveIndex >= 0) {
            e.preventDefault();
            e.stopImmediatePropagation();
            selectAutocompleteItem(items[acActiveIndex]);
        } else if (e.key === 'Escape') {
            closeAutocomplete();
        }
    });

    elements.cityInput.addEventListener('blur', () => {
        // Small delay so mousedown on list item fires first
        setTimeout(closeAutocomplete, 150);
    });
}

async function searchCity(name) {
    if (!name) return;

    try {
        setStatus(t('statusSearchingCity'));
        const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(name)}.json?key=${MAPTILER_KEY}&language=${APP_LANG}`;
        const res = await fetch(url);

        if (!res.ok) throw new Error(t('errGeocodingFailed'));

        const data = await res.json();
        if (!data.features?.length) {
            setStatus(t('statusNoResults'), true);
            return;
        }

        const [lon, lat] = data.features[0].center;
        map.flyTo({ center: [lon, lat], zoom: 12 });

        // Update title and subtitle
        const cityName = name.trim();
        elements.titleInput.value = cityName.toUpperCase();
        elements.subtitleInput.value = getCitySubtitle(cityName);

        saveStateToStorage(cityName, [lon, lat]);
        updateLabels();
        updateFooter(lat, lon);
        setStatus(t('statusLocationUpdated'));
    } catch (err) {
        console.error(err);
        setStatus(t('statusSearchCityError'), true);
    }
}

// === EXPORT ===
async function downloadPoster() {
    if (isDownloading) return;
    isDownloading = true;

    setStatus(t('statusRenderingPoster'));

    try {
        const canvas = await renderPosterImage();
        const selectedSize = elements.sizeSelect.value;
        const printSize = PRINT_SIZES[selectedSize];

        const blob = await new Promise((res, rej) => canvas.toBlob(b => b ? res(b) : rej(new Error(t('errCreateImageFailed'))), "image/png", 1.0));
        const url = URL.createObjectURL(blob);
        const cityName = elements.cityTitle?.textContent?.replace(/\s+/g, "_").toLowerCase() || "city";

        Object.assign(document.createElement("a"), { href: url, download: `${cityName}_${selectedSize}_${Date.now()}.png` }).click();

        // Show preview after download
        const previewUrl = canvas.toDataURL('image/png');
        showPreview(previewUrl);

        setTimeout(() => URL.revokeObjectURL(url), 1000);

        const sizeMB = (blob.size / 1048576).toFixed(1);
        const socialSize = SOCIAL_SIZES[selectedSize];
        const effectiveWidth = isLandscape ? (printSize?.height || 36) : (printSize?.width || 24);
        const dpi = socialSize ? 0 : Math.round(canvas.width / effectiveWidth);
        const successMsg = socialSize
            ? t('statusPosterDownloaded', { width: canvas.width, height: canvas.height, dpi: 'N/A', sizeMB })
            : t('statusPosterDownloaded', { width: canvas.width, height: canvas.height, dpi, sizeMB });
        setStatus(successMsg);
        showToast(successMsg);

        if (typeof gtag === 'function') {
            gtag('event', 'download', {
                event_category: 'download-image',
                event_label: cityName,
                print_size: selectedSize,
                color_theme: elements.styleSelect.value,
                poster_layout: elements.posterStyleSelect.value,
                orientation: isLandscape ? 'landscape' : 'portrait',
                resolution: `${canvas.width}x${canvas.height}`,
                file_size_mb: sizeMB
            });
        }
    } catch (err) {
        console.error("Download error:", err);
        const errorMsg = t('statusDownloadError', { message: err.message });
        setStatus(errorMsg, true);
        showToast(errorMsg, true);
    } finally {
        isDownloading = false;
    }
}

// === PREVIEW MODAL ===
function showPreview(imgSrc) {
    const { previewModal, previewImg } = elements;
    if (!previewModal || !previewImg) return;
    previewImg.src = imgSrc;
    previewModal.classList.remove('hidden', 'closing');
    previewModal.style.display = 'flex';
}

function hidePreview() {
    const { previewModal, previewImg } = elements;
    if (!previewModal) return;
    previewModal.classList.add('closing');
    previewModal.addEventListener('animationend', () => {
        previewModal.style.display = 'none';
        previewModal.classList.add('hidden');
        previewModal.classList.remove('closing');
        previewImg.src = '';
    }, { once: true });
}

async function renderPosterImage() {
    await document.fonts.ready;
    const selectedSize = elements.sizeSelect.value;
    const printSize = PRINT_SIZES[selectedSize];
    const socialSize = SOCIAL_SIZES[selectedSize];
    const { offsetWidth: w, offsetHeight: h } = elements.poster;

    let scale = 3;
    if (socialSize) {
        // For social sizes, scale to exact pixel dimensions
        scale = Math.min(Math.max(socialSize.width / w, socialSize.height / h), 16384 / Math.max(w, h));
    } else if (printSize) {
        const [tw, th] = isLandscape ? [printSize.height, printSize.width] : [printSize.width, printSize.height];
        scale = Math.min(Math.max(tw * TARGET_DPI / w, th * TARGET_DPI / h), 16384 / Math.max(w, h));
    }

    await new Promise(r => setTimeout(r, 100));

    const mapCanvas = map.getCanvas();
    const tempImg = document.createElement("img");
    tempImg.src = mapCanvas.toDataURL();
    Object.assign(tempImg.style, {
        position: "absolute", left: "0", top: "0", width: "100%", height: "100%", zIndex: "0"
    });

    const mapContainer = document.getElementById("mapContainer");
    mapContainer.appendChild(tempImg);
    mapCanvas.style.visibility = "hidden";

    let canvas;
    try {
        canvas = await html2canvas(elements.poster, {
            useCORS: true, scale, logging: false, backgroundColor: null,
            imageTimeout: 15000, width: w, height: h
        });
    } finally {
        mapContainer.removeChild(tempImg);
        mapCanvas.style.visibility = "visible";
    }

    if (!canvas?.width || !canvas?.height) throw new Error(t('errCanvasRenderingFailed'));

    // Add watermark
    const ctx = canvas.getContext('2d');
    const wmText = 'Made with MAPI  ·  streetmap-designer.pages.dev';
    const wmFontSize = Math.max(12, Math.round(canvas.width * 0.012));
    ctx.font = `${wmFontSize}px sans-serif`;
    ctx.globalAlpha = 0.45;
    ctx.fillStyle = '#888888';
    ctx.textAlign = 'center';
    ctx.fillText(wmText, canvas.width / 2, canvas.height - wmFontSize * 0.8);
    ctx.globalAlpha = 1;

    return canvas;
}

async function previewPoster() {
    if (isDownloading) return;
    isDownloading = true;
    setStatus(t('statusRenderingPreview'));
    try {
        const canvas = await renderPosterImage();
        const url = canvas.toDataURL('image/png');
        showPreview(url);
        setStatus(t('statusPreviewReady'));
    } catch (err) {
        console.error("Preview error:", err);
        const errorMsg = t('statusDownloadError', { message: err.message });
        setStatus(errorMsg, true);
        showToast(errorMsg, true);
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
        setStatus(t('statusUpdatingMapStyle'));
        const style = elements.styleSelect.value;
        localStorage.setItem('mapi_color_theme', style);
        changeMapStyle(style);
        updateSelectedThemePreview(style);
    });

    elements.toggleThemesGrid.textContent = t('toggleShowAll');
    elements.toggleThemesGrid.addEventListener("click", () => {
        const collapsed = elements.themesGrid.classList.toggle('collapsed');
        elements.toggleThemesGrid.textContent = collapsed ? t('toggleShowAll') : t('toggleShowLess');
    });

    elements.posterStyleSelect.addEventListener("change", () => {
        elements.poster.className = elements.poster.className.replace(/poster-style-\w+/g, `poster-style-${elements.posterStyleSelect.value}`);
        updateLabels();
        // Force reflow then resize
        elements.poster.offsetHeight;
        requestAnimationFrame(() => { map.resize(); updateCanvasSizeDisplay(); });
    });

    elements.sizeSelect.addEventListener("change", () => {
        elements.poster.className = elements.poster.className.replace(/size-\S+/g, '').trim();
        if (elements.sizeSelect.value !== 'default') elements.poster.classList.add(`size-${elements.sizeSelect.value}`);
        // Force reflow then resize
        elements.poster.offsetHeight;
        requestAnimationFrame(() => { map.resize(); updateCanvasSizeDisplay(); });
    });

    const triggerCitySearch = () => { closeAutocomplete(); searchCity(elements.cityInput.value.trim()); };
    elements.cityInput.addEventListener("keydown", e => {
        if (e.key === "Enter" && acActiveIndex < 0) triggerCitySearch();
    });
    elements.citySearchBtn?.addEventListener("click", triggerCitySearch);
    initAutocomplete();
    elements.downloadBtn.addEventListener("click", downloadPoster);
    elements.previewBtn?.addEventListener("click", previewPoster);
    elements.previewClose?.addEventListener("click", hidePreview);
    elements.previewModal?.addEventListener("click", (e) => {
        if (e.target === elements.previewModal) hidePreview();
    });

    elements.orientationToggle.addEventListener("click", () => {
        isLandscape = !isLandscape;
        elements.orientationToggle.classList.toggle("active", isLandscape);
        // Skip CSS transition so container dimensions are correct immediately
        elements.poster.style.transition = 'none';
        elements.poster.classList.toggle("landscape", isLandscape);
        elements.poster.offsetHeight; // force reflow
        elements.poster.style.transition = '';
        document.getElementById("posterWrapper").classList.toggle("landscape-scroll", isLandscape);
        localStorage.setItem('mapi_landscape', isLandscape);
        // Resize immediately now that layout is settled
        map.resize();
        updateCanvasSizeDisplay();
    });

    elements.labelsToggle.addEventListener("click", () => {
        labelsEnabled = !labelsEnabled;
        elements.labelsToggle.classList.toggle("active", labelsEnabled);
        localStorage.setItem('mapi_labels_enabled', labelsEnabled);
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

    window.addEventListener("resize", updateCanvasSizeDisplay);
}

function setupPanelToggle() {
    const mobileQuery = window.matchMedia("(max-width: 900px)");
    const container = document.getElementById("container");
    if (!elements.controls || !elements.panelToggleBtn || !elements.panelCloseBtn) return;

    const syncPanelState = () => {
        const isHidden = elements.controls.classList.contains("panel-hidden");
        elements.panelToggleBtn.setAttribute("aria-expanded", String(!isHidden));
        if (container) container.classList.toggle("panel-collapsed", isHidden);
    };

    elements.panelToggleBtn.addEventListener("click", () => {
        elements.controls.classList.toggle("panel-hidden");
        syncPanelState();
        setTimeout(() => map.resize(), 310);
    });

    elements.panelCloseBtn.addEventListener("click", () => {
        elements.controls.classList.add("panel-hidden");
        syncPanelState();
        setTimeout(() => map.resize(), 310);
    });

    mobileQuery.addEventListener("change", () => {
        if (mobileQuery.matches) {
            elements.controls.classList.add("panel-hidden");
        }
        syncPanelState();
        setTimeout(() => map.resize(), 310);
    });

    if (mobileQuery.matches) {
        elements.controls.classList.add("panel-hidden");
    }
    syncPanelState();
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
    const markerGroup = new THREE.Group();
    globeGroup.add(markerGroup);
    const MARKER_ACCENT = '#d2e823';
    const markerColor = new THREE.Color(MARKER_ACCENT);
    const clickableDots = [];
    const markerEntries = [];
    const markerByCity = new Map();
    let globeRadius = radius;

    function getCityPosition(city, currentRadius) {
        const phi = (90 - city.lat) * Math.PI / 180;
        const theta = (city.lon + 180) * Math.PI / 180;
        return {
            x: -(currentRadius * 1.01) * Math.sin(phi) * Math.cos(theta),
            y: (currentRadius * 1.01) * Math.cos(phi),
            z: (currentRadius * 1.01) * Math.sin(phi) * Math.sin(theta)
        };
    }

    function resizeCityMarker(entry, currentRadius) {
        const { city, dot, pulse } = entry;
        const { x, y, z } = getCityPosition(city, currentRadius);

        dot.geometry.dispose();
        dot.geometry = new THREE.SphereGeometry(Math.max(2, currentRadius * 0.012), 12, 12);
        dot.position.set(x, y, z);

        pulse.geometry.dispose();
        const ringInner = Math.max(3, currentRadius * 0.02);
        const ringOuter = Math.max(4, currentRadius * 0.027);
        pulse.geometry = new THREE.RingGeometry(ringInner, ringOuter, 24);
        pulse.position.set(x, y, z);
        pulse.lookAt(0, 0, 0);
    }

    function addCityMarker(city) {
        if (!city || markerByCity.has(city.name)) return;

        const dot = new THREE.Mesh(
            new THREE.SphereGeometry(Math.max(2, globeRadius * 0.012), 12, 12),
            new THREE.MeshBasicMaterial({ color: markerColor })
        );
        dot.userData = {
            cityName: city.name,
            lat: city.lat,
            lon: city.lon
        };
        markerGroup.add(dot);
        clickableDots.push(dot);

        const pulse = new THREE.Mesh(
            new THREE.RingGeometry(Math.max(3, globeRadius * 0.02), Math.max(4, globeRadius * 0.027), 24),
            new THREE.MeshBasicMaterial({
                color: markerColor,
                transparent: true,
                opacity: 0.5,
                side: THREE.DoubleSide
            })
        );
        pulse.userData = { baseScale: 1 };
        markerGroup.add(pulse);

        const entry = { city, dot, pulse };
        markerEntries.push(entry);
        markerByCity.set(city.name, entry);
        resizeCityMarker(entry, globeRadius);
    }

    function resizeAllCityMarkers(currentRadius) {
        markerEntries.forEach(entry => resizeCityMarker(entry, currentRadius));
    }

    // Seed immediately so the globe is interactive before full geocoding completes.
    GLOBE_MARKER_SEED_CITIES.forEach(addCityMarker);

    loadGlobeCityCoordinates()
        .then(cities => {
            cities.forEach(addCityMarker);
        })
        .catch(err => {
            console.warn('Failed to load full globe city set:', err);
        });

    // --- Mouse interaction ---
    let isDragging = false;
    let previousMouse = { x: 0, y: 0 };
    let rotationSpeed = { x: 0, y: 0 };
    let hasMovedDuringDrag = false;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const dragThreshold = 3;

    const getPointerFromEvent = evt => {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((evt.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((evt.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const getCityFromEvent = evt => {
        getPointerFromEvent(evt);
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(clickableDots, false);
        return intersects.length ? intersects[0].object.userData : null;
    };

    let onCitySelect = null;
    const setCitySelectHandler = handler => {
        onCitySelect = handler;
    };

    container.addEventListener('mousedown', e => {
        isDragging = true;
        hasMovedDuringDrag = false;
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
        if (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold) {
            hasMovedDuringDrag = true;
        }
        previousMouse = { x: e.clientX, y: e.clientY };
    });

    const onWindowMouseUp = () => { isDragging = false; };
    window.addEventListener('mouseup', onWindowMouseUp);

    container.addEventListener('touchstart', e => {
        isDragging = true;
        hasMovedDuringDrag = false;
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
        if (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold) {
            hasMovedDuringDrag = true;
        }
        previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    container.addEventListener('touchend', () => { isDragging = false; }, { passive: true });

    const onDotClick = e => {
        if (hasMovedDuringDrag || !onCitySelect) return;
        const city = getCityFromEvent(e);
        if (!city) return;
        onCitySelect(city.cityName, city.lat, city.lon);
    };
    renderer.domElement.addEventListener('click', onDotClick);

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
        markerEntries.forEach((entry, i) => {
            const pulse = entry.pulse;
            const scale = 1 + 0.3 * Math.sin(time * 2 + i);
            pulse.scale.set(scale, scale, scale);
            pulse.material.opacity = 0.3 + 0.4 * Math.abs(Math.sin(time * 2 + i));
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
            globeRadius = newRadius;

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

            resizeAllCityMarkers(newRadius);
        }, 100); // debounce 100ms
    });
    resizeObserver.observe(container);

    // Cleanup function
    return {
        setCitySelectHandler,
        destroy: () => {
            cancelAnimationFrame(animId);
            resizeObserver.disconnect();
            clearTimeout(resizeTimeout);
            window.removeEventListener('mouseup', onWindowMouseUp);
            renderer.domElement.removeEventListener('click', onDotClick);
            markerEntries.forEach(entry => {
                entry.dot.geometry.dispose();
                entry.dot.material.dispose();
                entry.pulse.geometry.dispose();
                entry.pulse.material.dispose();
            });
            earth.geometry.dispose();
            earth.material.dispose();
            glowMesh.geometry.dispose();
            glowMesh.material.dispose();
            renderer.dispose();
            container.innerHTML = '';
        }
    };
}

// === INTRO MODAL ===
function setupIntroModal() {
    const modal = document.getElementById('introModal');
    if (!modal) return;

    const globe = initGlobe();

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
            globe?.destroy?.();
            miniMaps.forEach(m => m.remove());

            if (cityName && lat !== undefined && lon !== undefined) {
                map.flyTo({ center: [lon, lat], zoom: 12 });
                elements.cityInput.value = cityName;
                elements.titleInput.value = cityName.toUpperCase();
                elements.subtitleInput.value = getCitySubtitle(cityName);
                saveStateToStorage(cityName, [lon, lat]);
                updateLabels();
                updateFooter(lat, lon);
                setStatus(t('statusLocationUpdated'));
            }
        }, { once: true });
    }

    globe?.setCitySelectHandler?.((cityName, lat, lon) => {
        closeModal(cityName, lat, lon);
    });

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

// === SHARE URL ===
const getQueryParam = param => new URLSearchParams(window.location.search).get(param);

function generateShareURL() {
    const params = new URLSearchParams();
    const cityName = elements.cityInput.value.trim();
    if (cityName) params.set('city', cityName);
    if (currentStyle) params.set('theme', currentStyle);
    params.set('layout', elements.posterStyleSelect.value);
    params.set('size', elements.sizeSelect.value);
    params.set('zoom', parseFloat(elements.zoomInput.value).toFixed(1));
    if (isLandscape) params.set('orientation', 'landscape');
    const title = elements.titleInput.value.trim();
    if (title) params.set('title', title);
    const subtitle = elements.subtitleInput.value.trim();
    if (subtitle) params.set('subtitle', subtitle);
    const tagline = elements.taglineInput.value.trim();
    if (tagline) params.set('tagline', tagline);
    if (!labelsEnabled) params.set('labels', '0');
    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
}

function applyURLParams() {
    const theme = getQueryParam('theme');
    if (theme && PALETTES[theme]) {
        currentStyle = theme;
        elements.styleSelect.value = theme;
        changeMapStyle(theme);
        updateSelectedThemePreview(theme);
    }
    const layout = getQueryParam('layout');
    if (layout) {
        elements.posterStyleSelect.value = layout;
        elements.poster.className = elements.poster.className.replace(/poster-style-\w+/g, `poster-style-${layout}`);
    }
    const size = getQueryParam('size');
    if (size) {
        elements.sizeSelect.value = size;
        elements.poster.className = elements.poster.className.replace(/size-\S+/g, '').trim();
        if (size !== 'default') elements.poster.classList.add(`size-${size}`);
    }
    const zoom = getQueryParam('zoom');
    if (zoom) setZoom(parseFloat(zoom));
    const orientation = getQueryParam('orientation');
    if (orientation === 'landscape' && !isLandscape) {
        isLandscape = true;
        elements.orientationToggle.classList.add('active');
        elements.poster.style.transition = 'none';
        elements.poster.classList.add('landscape');
        elements.poster.offsetHeight;
        elements.poster.style.transition = '';
        document.getElementById('posterWrapper').classList.add('landscape-scroll');
    }
    const title = getQueryParam('title');
    if (title) { elements.titleInput.value = title; }
    const subtitle = getQueryParam('subtitle');
    if (subtitle) { elements.subtitleInput.value = subtitle; }
    const tagline = getQueryParam('tagline');
    if (tagline) { elements.taglineInput.value = tagline; }
    const labels = getQueryParam('labels');
    if (labels === '0') {
        labelsEnabled = false;
        elements.labelsToggle.classList.remove('active');
    }
    updateLabels();
}

// === SURPRISE ME ===
function surpriseMe() {
    const cityKeys = Object.keys(WORLD_CITIES);
    const paletteKeys = Object.keys(PALETTES);
    const randomCity = cityKeys[Math.floor(Math.random() * cityKeys.length)];
    const randomPalette = paletteKeys[Math.floor(Math.random() * paletteKeys.length)];

    const cityData = WORLD_CITIES[randomCity];
    const lon = cityData.lon;
    const lat = cityData.lat;

    // Apply theme first (changeMapStyle destroys and recreates the map)
    currentStyle = randomPalette;
    elements.styleSelect.value = randomPalette;
    localStorage.setItem('mapi_color_theme', randomPalette);
    changeMapStyle(randomPalette);
    updateSelectedThemePreview(randomPalette);

    // Now fly to the city on the new map instance
    map.flyTo({ center: [lon, lat], zoom: 12 });

    elements.cityInput.value = randomCity;
    elements.titleInput.value = randomCity.toUpperCase();
    elements.subtitleInput.value = cityData[APP_LANG] || cityData.en;
    saveStateToStorage(randomCity, [lon, lat]);
    updateLabels();
    updateFooter(lat, lon);

    setStatus(APP_LANG === 'es' ? `${randomCity} con tema ${randomPalette}` : `${randomCity} with ${randomPalette} theme`);
}

// === SHARE ACTIONS ===
function shareDesign() {
    const url = generateShareURL();
    const cityName = elements.cityInput.value.trim() || 'my city';
    const text = APP_LANG === 'es'
        ? `Mira este póster de mapa de ${cityName} que diseñé con MAPI`
        : `Check out this ${cityName} map poster I designed with MAPI`;

    if (navigator.share) {
        navigator.share({ title: 'MAPI — StreetMap Designer', text, url }).catch(() => {});
    } else {
        copyShareLink(url);
    }
}

function copyShareLink(url) {
    const shareUrl = url || generateShareURL();
    navigator.clipboard.writeText(shareUrl).then(() => {
        showToast(APP_LANG === 'es' ? 'Enlace copiado al portapapeles' : 'Link copied to clipboard');
    }).catch(() => {
        // Fallback
        const input = document.createElement('input');
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showToast(APP_LANG === 'es' ? 'Enlace copiado al portapapeles' : 'Link copied to clipboard');
    });
}

function shareToTwitter() {
    const url = generateShareURL();
    const cityName = elements.cityInput.value.trim() || 'my city';
    const text = encodeURIComponent(`Check out this ${cityName} map poster I designed with MAPI ✨🗺️`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
}

function shareToPinterest() {
    const url = generateShareURL();
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent('Custom map poster designed with MAPI')}`, '_blank', 'width=600,height=400');
}

function shareToWhatsApp() {
    const url = generateShareURL();
    const cityName = elements.cityInput.value.trim() || 'my city';
    const text = encodeURIComponent(`Check out this ${cityName} map poster I designed with MAPI: ${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareToFacebook() {
    const url = generateShareURL();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
}

// === INITIALIZATION ===

function initializeApp(center, zoom, cityName) {
    const savedTheme = localStorage.getItem('mapi_color_theme');
    if (savedTheme && PALETTES[savedTheme]) {
        currentStyle = savedTheme;
        elements.styleSelect.value = savedTheme;
    }

    // Restore labels toggle
    const savedLabels = localStorage.getItem('mapi_labels_enabled');
    if (savedLabels !== null) {
        labelsEnabled = savedLabels === 'true';
        elements.labelsToggle.classList.toggle("active", labelsEnabled);
    }

    // Restore landscape/orientation
    const savedLandscape = localStorage.getItem('mapi_landscape');
    if (savedLandscape !== null) {
        isLandscape = savedLandscape === 'true';
        elements.orientationToggle.classList.toggle("active", isLandscape);
        if (isLandscape) {
            // Suppress transition so poster snaps to landscape dimensions instantly;
            // otherwise the map initialises mid-animation with wrong container size.
            elements.poster.style.transition = 'none';
            elements.poster.classList.add('landscape');
            elements.poster.offsetHeight; // force reflow
            elements.poster.style.transition = '';
        }
        document.getElementById("posterWrapper").classList.toggle("landscape-scroll", isLandscape);
    }

    // Restore label color
    const savedLabelColorAuto = localStorage.getItem('mapi_label_color_auto');
    const savedCustomLabelColor = localStorage.getItem('mapi_custom_label_color');
    if (savedLabelColorAuto === 'false' && savedCustomLabelColor) {
        customLabelColor = savedCustomLabelColor;
        labelColorAuto = false;
        elements.labelColorAuto.classList.replace('text-[#440edf]', 'text-[#666]');
    }

    // Apply initial print size class so poster matches the selected size on load
    const initialSize = elements.sizeSelect.value;
    if (initialSize !== 'default') elements.poster.classList.add(`size-${initialSize}`);

    map = initMap(center, zoom, currentStyle);
    setupMapEvents();
    setupEventListeners();
    setupPanelToggle();

    // ResizeObserver reliably calls map.resize() whenever the container
    // dimensions change (orientation toggle, size change, panel toggle, etc.)
    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer && typeof ResizeObserver !== 'undefined') {
        let resizeRaf;
        new ResizeObserver(() => {
            cancelAnimationFrame(resizeRaf);
            resizeRaf = requestAnimationFrame(() => {
                if (map) { map.resize(); updateCanvasSizeDisplay(); }
            });
        }).observe(mapContainer);
    }
    elements.cityInput.value = cityName;
    elements.titleInput.value = cityName.toUpperCase();
    elements.subtitleInput.value = getCitySubtitle(cityName);
    updateLabels();
    populateStyleSelect();
    generateThemesGrid();
    updateSelectedThemePreview(currentStyle);
    setupIntroModal();
    setTimeout(updateCanvasSizeDisplay, 400);
}

async function init() {
    const cityParam = getQueryParam('city');
    const hasURLParams = cityParam || getQueryParam('theme') || getQueryParam('layout');

    if (cityParam) {
        try {
            setStatus(t('statusLoadingCity'));
            const res = await fetch(`https://api.maptiler.com/geocoding/${encodeURIComponent(cityParam)}.json?key=${MAPTILER_KEY}&language=${APP_LANG}`);
            if (res.ok) {
                const data = await res.json();
                if (data.features?.length) {
                    initializeApp(data.features[0].center, 12, cityParam);
                    if (hasURLParams) map.once('load', () => applyURLParams());
                    map.once('load', () => setStatus(t('statusCityLoaded')));
                    setupExtraButtons();
                    return;
                }
            }
        } catch (err) {
            console.error("Error loading city:", err);
            setStatus(t('statusLoadCityError'), true);
        }
    }

    // Restore last session state from localStorage
    const savedCity = localStorage.getItem('mapi_city');
    const savedCenter = localStorage.getItem('mapi_city_center');
    const savedZoom = localStorage.getItem('mapi_zoom');

    if (savedCity && savedCenter) {
        try {
            const center = JSON.parse(savedCenter);
            const zoom = savedZoom ? parseFloat(savedZoom) : INITIAL_ZOOM;
            initializeApp(center, zoom, savedCity);
            if (hasURLParams) map.once('load', () => applyURLParams());
            setupExtraButtons();
            return;
        } catch {
            // Ignore malformed saved state and fall through to default
        }
    }

    const defaultCity = APP_LANG === 'es' ? 'Tokio' : 'Tokyo';

    initializeApp(INITIAL_CENTER, INITIAL_ZOOM, defaultCity);
    if (hasURLParams) map.once('load', () => applyURLParams());
    setupExtraButtons();
}

function setupExtraButtons() {
    const shareBtn = document.getElementById('shareBtn');
    const sharePopover = document.getElementById('sharePopover');

    if (shareBtn && sharePopover) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                shareDesign();
            } else {
                sharePopover.classList.toggle('hidden');
            }
        });
        // Close popover when clicking outside
        document.addEventListener('click', (e) => {
            if (!shareBtn.contains(e.target) && !sharePopover.contains(e.target)) {
                sharePopover.classList.add('hidden');
            }
        });
        // Close popover after clicking an action
        sharePopover.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => sharePopover.classList.add('hidden'));
        });
    }

    document.getElementById('shareCopyLink')?.addEventListener('click', () => copyShareLink());
    document.getElementById('shareTwitter')?.addEventListener('click', shareToTwitter);
    document.getElementById('sharePinterest')?.addEventListener('click', shareToPinterest);
    document.getElementById('shareWhatsApp')?.addEventListener('click', shareToWhatsApp);
    document.getElementById('shareFacebook')?.addEventListener('click', shareToFacebook);
    document.getElementById('surpriseMeBtn')?.addEventListener('click', surpriseMe);
}

// Start the app
init();
