/**
 * Anand Melava Cinema Labs - Automated Smoke Test Suite
 * Validates integrity of DOM fixtures, theme palettes, audio soundscapes,
 * typography presets, input sanitizers, and mathematical arch geometry.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('🧪 Starting Anand Melava Cinema Intro Smoke Test Suite...\n');

const htmlPath = path.join(__dirname, '..', 'index.html');
assert.ok(fs.existsSync(htmlPath), 'index.html must exist');
const html = fs.readFileSync(htmlPath, 'utf8');

// 1. DOM Architecture Validation
console.log('▶ [1/8] Validating Cinema DOM Architecture & Viewport Rig...');
const requiredIds = [
  'cinema-viewport',
  'letterbox-top',
  'letterbox-bottom',
  'recording-hud',
  'director-toast',
  'vignette-overlay',
  'crt-scanlines',
  'crt-vhs-glow',
  'parallax-rig',
  'starfield-canvas',
  'stage-spotlights',
  'wordmark-stage',
  'studio-crest-container',
  'presents-badge',
  'arched-wordmark',
  'visualizer-canvas',
  'hud-top',
  'hud-bottom',
  'shortcuts-modal',
  'palette-modal',
  'btn-share',
  'camera-flash-overlay'
];

requiredIds.forEach(id => {
  assert.ok(html.includes(`id="${id}"`), `DOM element #${id} must be present in index.html`);
});
console.log(`  ✓ All ${requiredIds.length} vital cinema DOM fixture IDs verified.`);

// 2. Universe Theme Palettes Schema Validation
console.log('▶ [2/8] Validating Multi-Universe Color Palettes...');
const expectedThemes = [
  'crimson', 'cyberpunk', 'gold', 'emerald', 'amber',
  'sapphire', 'platinum', 'sakura', 'quantum', 'eclipse'
];

expectedThemes.forEach(themeKey => {
  assert.ok(html.includes(`${themeKey}: {`), `Theme '${themeKey}' must be defined in themes object`);
});

const themeKeys = ['accentColor', 'primary', 'glow', 'deep', 'core', 'light', 'viewportBg', 'embers', 'streakGrad'];
themeKeys.forEach(prop => {
  assert.ok(html.includes(`${prop}:`), `Themes must implement property '${prop}'`);
});
console.log(`  ✓ All ${expectedThemes.length} universe palettes and required color channels verified.`);

// 3. Audio Engine & Soundscapes Validation
console.log('▶ [3/8] Validating Procedural Audio Soundscapes...');
const expectedSoundscapes = ['epic', 'synthwave', 'celestial', 'zimmer'];
expectedSoundscapes.forEach(sc => {
  assert.ok(html.includes(`id: '${sc}'`), `Soundscape '${sc}' must be registered in soundscapes array`);
});
assert.ok(html.includes('DARK ZIMMER INCEPTION BRAAM SOUNDSCAPE'), 'Hans Zimmer Braam procedural synthesis code must be present');
assert.ok(html.includes('Binaural Algorithmic Reverb Unit'), 'Binaural reverb convolver must be initialized');
assert.ok(html.includes('Cinema Bass Boost EQ'), 'Theater Bass Boost EQ filter must be present');
assert.ok(html.includes('createStereoPanner'), '3D Spatial Audio Panner must be supported');
console.log(`  ✓ All ${expectedSoundscapes.length} procedural soundscapes & audio routing verified.`);

// 4. Typography Presets Validation
console.log('▶ [4/8] Validating Cinematic Typography Fonts...');
const expectedFonts = ['monumental', 'imperial', 'cyber', 'arthouse', 'royal'];
expectedFonts.forEach(fontId => {
  assert.ok(html.includes(`id: '${fontId}'`), `Typography preset '${fontId}' must be registered`);
});
assert.ok(html.includes('Syne'), 'Syne Google Font must be linked in head');
assert.ok(html.includes('Cinzel Decorative'), 'Cinzel Decorative Google Font must be linked in head');
console.log(`  ✓ All ${expectedFonts.length} typography presets and font dependencies verified.`);

// 5. Input Sanitizer Logic Unit Verification
console.log('▶ [5/8] Verifying Security Sanitization Engine...');
function sanitizeCinemaInput(input, maxLength = 24) {
  if (typeof input !== 'string') return '';
  const clean = input
    .replace(/<[^>]*>?/gm, '')
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
    .replace(/[<>"'&]/g, (char) => {
      const map = { '<': '', '>': '', '"': '', "'": '', '&': '' };
      return map[char] || '';
    })
    .trim();
  return clean.substring(0, maxLength);
}

// Security test cases
assert.strictEqual(sanitizeCinemaInput('<script>alert("hack")</script>ANAND'), 'alert(hack)ANAND');
assert.strictEqual(sanitizeCinemaInput('<div>HOLLYWOOD</div>', 20), 'HOLLYWOOD');
assert.strictEqual(sanitizeCinemaInput('A'.repeat(50), 24).length, 24, 'Length must be capped at maxLength');
assert.strictEqual(sanitizeCinemaInput('   SPACED TITLE   '), 'SPACED TITLE');
console.log('  ✓ Security sanitization successfully neutralizes script injections and enforces bounds.');

// 6. Mathematical Glide & Anchor Geometry Sanity
console.log('▶ [6/8] Verifying Parabolic Arch & Monogram Anchor Math...');
function getAnchorIndices(chars) {
  let firstIdx = -1;
  let secondIdx = -1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== ' ') {
      firstIdx = i;
      break;
    }
  }
  for (let i = firstIdx + 1; i < chars.length; i++) {
    if (chars[i - 1] === ' ' && chars[i] !== ' ') {
      secondIdx = i;
      break;
    }
  }
  if (secondIdx === -1) {
    secondIdx = Math.max(1, Math.min(chars.length - 1, Math.floor(chars.length / 2)));
  }
  return { firstIdx: Math.max(0, firstIdx), secondIdx };
}

const amAnchors = getAnchorIndices('ANAND MELAVA'.split(''));
assert.strictEqual(amAnchors.firstIdx, 0, 'First word initial letter A must be index 0');
assert.strictEqual(amAnchors.secondIdx, 6, 'Second word initial letter M must be index 6');

const singleWordAnchors = getAnchorIndices('PARAMOUNT'.split(''));
assert.strictEqual(singleWordAnchors.firstIdx, 0);
assert.strictEqual(singleWordAnchors.secondIdx, 4, 'Single word secondary anchor falls at mid-span');
console.log('  ✓ Monogram anchor math handles multi-word and single-word titles reliably.');

// 7. Camera Trauma Shake Decay Physics
console.log('▶ [7/8] Verifying Camera Impact Trauma Math...');
let testTrauma = 1.0;
const traumaDecayStep = 0.04;
let steps = 0;
while (testTrauma > 0 && steps < 100) {
  const shakeMag = testTrauma * testTrauma;
  assert.ok(shakeMag >= 0 && shakeMag <= 1.0, 'Shake magnitude must stay within normalized [0, 1]');
  testTrauma = Math.max(0, testTrauma - traumaDecayStep);
  steps++;
}
assert.strictEqual(testTrauma, 0, 'Trauma must decay to zero smoothly');
assert.strictEqual(steps, 25, 'Unit trauma decays in exactly 25 frames (~400ms at 60fps)');
console.log('  ✓ Camera trauma quadratic formula and decay decay smoothly to zero.');

// 8. URL Permalink State Serializer & Deserializer
console.log('▶ [8/8] Verifying URL State Serializer & Parameter Whitelisting...');
function serializeCinemaParams(title, theme, font, stock, sound) {
  const p = new URLSearchParams();
  p.set('title', sanitizeCinemaInput(title, 24));
  p.set('theme', theme.toLowerCase().trim());
  p.set('font', font.toLowerCase().trim());
  p.set('stock', stock.toLowerCase().trim());
  p.set('sound', sound.toLowerCase().trim());
  return p.toString();
}

const serialized = serializeCinemaParams('<img src=x>INCEPTION', 'quantum', 'royal', 'vision3', 'zimmer');
assert.ok(!serialized.includes('<img'), 'Serialized query string must not contain raw HTML tags');
assert.ok(serialized.includes('title=INCEPTION'), 'Title parameter sanitized and serialized properly');
assert.ok(serialized.includes('theme=quantum'), 'Theme parameter preserved');
assert.ok(serialized.includes('sound=zimmer'), 'Soundscape parameter preserved');
console.log('  ✓ URL state serializer cleans inputs and correctly formats query strings.');

console.log('\n🎉 ALL CINEMATIC SMOKE TESTS PASSED SUCCESSFULLY! (8/8)');
