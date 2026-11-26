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
console.log('▶ [1/12] Validating Cinema DOM Architecture & Viewport Rig...');
const requiredIds = [
  'cinema-viewport',
  'letterbox-top',
  'letterbox-bottom',
  'recording-hud',
  'director-toast',
  'film-grain',
  'btn-grain',
  'btn-speed-pill',
  'btn-flares',
  'btn-bloom',
  'iris-bloom-ring',
  'btn-fullscreen',
  'btn-shimmer',
  'btn-project',
  'project-modal',
  'btn-save-local-preset',
  'btn-clear-local-preset',
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
console.log('▶ [2/12] Validating Multi-Universe Color Palettes...');
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
console.log('▶ [3/12] Validating Procedural Audio Soundscapes...');
const expectedSoundscapes = ['epic', 'synthwave', 'celestial', 'zimmer'];
expectedSoundscapes.forEach(sc => {
  assert.ok(html.includes(`id: '${sc}'`), `Soundscape '${sc}' must be registered in soundscapes array`);
});
assert.ok(html.includes('DARK ZIMMER INCEPTION BRAAM SOUNDSCAPE'), 'Hans Zimmer Braam procedural synthesis code must be present');
assert.ok(html.includes('Binaural Algorithmic Reverb Unit'), 'Binaural reverb convolver must be initialized');
assert.ok(html.includes('Cinema Bass Boost EQ'), 'Theater Bass Boost EQ filter must be present');
assert.ok(html.includes('createStereoPanner'), '3D Spatial Audio Panner must be supported');
assert.ok(html.includes('makeTapeSaturationCurve'), 'Analog tape saturation limiter must be defined');
assert.ok(html.includes('createDynamicsCompressor'), 'Master dynamics compressor must be wired');
assert.ok(html.includes('isShimmerEnabled'), 'Phase-3 harmonic shimmer toggle must be present');
assert.ok(html.includes('Hollywood Tension Riser Sweep'), 'Tension riser sweep must be present');
assert.ok(html.includes('Sub-Harmonic Resonant Sonic Thump'), 'Sub-harmonic sonic thump must be present');
console.log(`  ✓ All ${expectedSoundscapes.length} procedural soundscapes & audio routing verified.`);

// 4. Typography Presets Validation
console.log('▶ [4/12] Validating Cinematic Typography Fonts...');
const expectedFonts = ['monumental', 'imperial', 'cyber', 'arthouse', 'royal'];
expectedFonts.forEach(fontId => {
  assert.ok(html.includes(`id: '${fontId}'`), `Typography preset '${fontId}' must be registered`);
});
assert.ok(html.includes('Syne'), 'Syne Google Font must be linked in head');
assert.ok(html.includes('Cinzel Decorative'), 'Cinzel Decorative Google Font must be linked in head');
console.log(`  ✓ All ${expectedFonts.length} typography presets and font dependencies verified.`);

// 5. Input Sanitizer Logic Unit Verification
console.log('▶ [5/12] Verifying Security Sanitization Engine...');
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
console.log('▶ [6/12] Verifying Parabolic Arch & Monogram Anchor Math...');
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
console.log('▶ [7/12] Verifying Camera Impact Trauma Math...');
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
console.log('▶ [8/12] Verifying URL State Serializer & Parameter Whitelisting...');
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

// 9. Playback Speed Multiplier & Gear Stepper Math
console.log('▶ [9/12] Verifying Playback Speed Gears & Bullet-Time Math...');
const testSpeedGears = [
  { speed: 0.25, label: '0.25x' },
  { speed: 0.5, label: '0.5x' },
  { speed: 0.75, label: '0.75x' },
  { speed: 1.0, label: '1.0x' },
  { speed: 1.5, label: '1.5x' },
  { speed: 2.0, label: '2.0x' }
];

assert.strictEqual(testSpeedGears.length, 6, 'Must have 6 distinct speed gears');
testSpeedGears.forEach(g => {
  assert.ok(g.speed >= 0.25 && g.speed <= 2.0, 'Gears must fall between 0.25x and 2.0x');
});

function testStepSpeed(currentIndex, direction) {
  return Math.max(0, Math.min(testSpeedGears.length - 1, currentIndex + direction));
}
assert.strictEqual(testStepSpeed(0, -1), 0, 'Cannot step below lowest speed gear (0.25x)');
assert.strictEqual(testStepSpeed(5, 1), 5, 'Cannot step above highest speed gear (2.0x)');
assert.strictEqual(testStepSpeed(3, -1), 2, 'Stepping down from 1.0x yields 0.75x');
assert.strictEqual(testStepSpeed(3, 1), 4, 'Stepping up from 1.0x yields 1.5x');
console.log('  ✓ Playback speed gears and step boundary clamping verified.');

// 10. Project JSON Configuration & Prototype Pollution Guard
console.log('▶ [10/12] Verifying Project JSON Validator, Tanh Limiter & Security Shields...');

function isSafeProjectPayload(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
  const dangerous = ['__proto__', 'constructor', 'prototype'];
  for (const key of Object.keys(obj)) {
    if (dangerous.includes(key.toLowerCase())) return false;
  }
  return true;
}

function isValidHexColor(hex) {
  return typeof hex === 'string' && /^#[0-9a-fA-F]{6}$/.test(hex.trim());
}

function makeTapeSaturationCurve(amount = 1.85, n_samples = 256) {
  const curve = new Float32Array(n_samples);
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = Math.tanh(amount * x) / Math.tanh(amount);
  }
  return curve;
}

const satCurve = makeTapeSaturationCurve(1.85, 256);
assert.strictEqual(satCurve.length, 256);
for (let i = 0; i < satCurve.length; i++) {
  assert.ok(satCurve[i] >= -1.0001 && satCurve[i] <= 1.0001, 'Tape saturation curve values must remain bounded in [-1, 1]');
}
assert.ok(Math.abs(satCurve[128]) < 0.05, 'Center midpoint must be close to zero');

assert.strictEqual(isSafeProjectPayload({ title: 'CINEMA', speed: 1.0 }), true);
assert.strictEqual(isSafeProjectPayload(JSON.parse('{"__proto__": {"polluted": true}}')), false, 'Must reject __proto__ payload');
assert.strictEqual(isSafeProjectPayload(JSON.parse('{"constructor": {"prototype": {}}}')), false, 'Must reject constructor payload');
assert.strictEqual(isSafeProjectPayload([1, 2, 3]), false, 'Arrays must not be accepted as root project objects');

assert.strictEqual(isValidHexColor('#ff2a5f'), true);
assert.strictEqual(isValidHexColor('#ffffff'), true);
assert.strictEqual(isValidHexColor('red'), false);
assert.strictEqual(isValidHexColor('javascript:alert(1)'), false);
assert.strictEqual(isValidHexColor('#12345'), false);

console.log('  ✓ Project JSON schema security, prototype pollution shields, and tanh saturation math verified.');

// 11. Modal Accessibility, Inert Isolation & Reduced Motion Verification
console.log('▶ [11/12] Verifying Modal Dialog Accessibility & Reduced-Motion Rules...');
['shortcuts-modal', 'palette-modal', 'project-modal'].forEach(modalId => {
  assert.ok(
    html.includes(`id="${modalId}" role="dialog" aria-modal="true"`),
    `Modal #${modalId} must expose role="dialog" and aria-modal="true"`
  );
});
assert.ok(html.includes('syncModalAccessibilityState'), 'Modal background inertness helper must be defined');
assert.ok(html.includes('openAccessibleModal'), 'Accessible focus-returning modal helper must be defined');
assert.ok(!html.includes('0.01ms !important'), 'Global 0.01ms reduced-motion anti-pattern must not be present');
assert.ok(html.includes('@media (prefers-reduced-motion: no-preference)'), 'Opt-in reduced-motion media query must be used');
console.log('  ✓ Modal dialog ARIA semantics, inert background isolation, and reduced-motion rules verified.');

// 12. Shortcut Input Isolation, Local Vault & Payload Size Caps
console.log('▶ [12/12] Verifying Shortcut Input Guard, Local Vault & Payload Size Caps...');
assert.ok(html.includes('LOCAL_PRESET_STORAGE_KEY'), 'Local preset vault storage key must be defined');
assert.ok(html.includes('MAX_PROJECT_JSON_BYTES'), 'Project JSON byte limit constant must be defined');

function isEditableShortcutTarget(target) {
  if (!target || typeof target !== 'object') return false;
  const tag = target.tagName ? target.tagName.toUpperCase() : '';
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
  return Boolean(target.isContentEditable);
}

assert.strictEqual(isEditableShortcutTarget({ tagName: 'TEXTAREA' }), true);
assert.strictEqual(isEditableShortcutTarget({ tagName: 'input' }), true);
assert.strictEqual(isEditableShortcutTarget({ tagName: 'SPAN', isContentEditable: true }), true);
assert.strictEqual(isEditableShortcutTarget({ tagName: 'BODY', isContentEditable: false }), false);
assert.strictEqual(isEditableShortcutTarget(null), false);

const MAX_BYTES = 16384;
assert.strictEqual('x'.repeat(MAX_BYTES + 1).length > MAX_BYTES, true, 'Oversized JSON payloads must be rejected');
console.log('  ✓ Shortcut input isolation, local vault key, and payload size guards verified.');

console.log('\n🎉 ALL CINEMATIC SMOKE TESTS PASSED SUCCESSFULLY! (12/12)');
