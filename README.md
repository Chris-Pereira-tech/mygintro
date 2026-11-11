# Anand Melava — Crimson Stardust & Ruby Cinematic Studio Intro

An ultra-luxury, Hollywood-grade cinematic intro sequence for **ANAND MELAVA**, featuring a modular 3D perspective stage, fluid stardust particle simulation, procedural Web Audio synthesis with spatial panning, multi-universe cinema color presets, and a seamless mathematically aligned morph and glide transition from the **AM** Monogram to the full 3D arched wordmark.

Built with **pure vanilla HTML5, CSS3 3D transforms, HTML5 Canvas 2D, Web Audio API procedural synthesis**, and **Tailwind CSS**. Zero heavy runtime dependencies or pre-recorded media assets.

---

## ✨ Features & Cinematic Capabilities

### 🎥 1. Dynamic 3D Perspective Rig & Mouse/Gyro Parallax
- **3D Tilt Engine**: Smooth lerped exponential decay tracking mouse cursor coordinates on desktop and device orientation (gyroscope) on mobile.
- **Multi-Plane Stereoscopic Depth**: Letters, background nebula flares, optical ghosts, and starfield canvas translate with multi-plane Z-depth (`translateZ`).
- **Interactive Toggle (`T`)**: Instant enable/disable of 3D parallax tilt.

### 🌟 2. Optical Lens Flare & Aperture Ghosts
- **Physical Lens Optics**: Hexagonal lens ghosts and aperture rings track dynamically across the optical axis opposite to the camera focal point.
- **Anamorphic Beam**: Horizon-spanning anamorphic ruby laser streak with specular silver center.
- **Pulsing Solar Corona**: Central radial focal burst synchronized with monogram ignition and transition shockwave.

### 🎆 3. Kinetic Stardust Shockwaves & Comet Trails
- **Retina High-DPI Canvas**: Automatically scales with `window.devicePixelRatio` for pristine sharpness on 4K/Retina displays.
- **Phase 2 Shockwave Burst**: 95+ high-velocity radial sparks exploding on monogram transition with trailing comets and air friction decay.
- **Interactive Particle Emitter**: Tap or click anywhere on the cinema stage to spawn localized stardust ember fireworks.

### 🎵 4. Real-time Audio Visualizer Spectrum Ribbon
- **Web Audio AnalyserNode**: 64-band frequency spectrum analyser extracted in real-time.
- **Dynamic Neon Wave Ribbon**: 28 rounded frequency bars dancing with glowing gradients to the sub-bass drops, bell chimes, whoosh, and orchestral swell.
- **Ambient Idle Breathing**: Smooth sinusoidal motion keeps the visualizer alive even before audio playback starts.

### 🔊 5. Procedural Hollywood Sound Design & Spatial Audio
- **Cinema Sub-Drop Boom**: Sine sweep pitching from `115Hz` down to `36Hz` delivering theater sub-bass punch.
- **Crystal Bell Chimes**: Harmonic strikes at `523.25Hz` (C5) and `659.25Hz` (E5).
- **Spatial Stereo Panning Whoosh**: Procedural white-noise bandpass sweep (`280Hz` → `2600Hz` → `500Hz`) panned from left to right across headphones (`StereoPannerNode`).
- **Orchestral D-minor9 Swell**: Warm 8-voice chord (`73Hz` to `587Hz`) with sweeping lowpass filter (`320Hz` to `3400Hz`).
- **Metallic Lock Impact Transient**: Heavy metallic hit transient (`triangle` + `square` FM combo) synchronized to the wordmark docking into final place.
- **Master Volume Slider & Quick Mute (`M`)**: Seamless volume control slider and mute toggle in the director bar.

### 🎨 6. Multi-Universe Cinema Studio Themes
Switch between 4 high-concept cinematic color universes in real-time without interrupting playback:
1. **Crimson Stardust & Ruby** (Key `1`): Signature incandescent crimson `#ff1e56`, ruby glow `#ff2a5f`, and deep wine carmine `#8b0024`.
2. **Cyberpunk Neon** (Key `2`): Blade Runner-inspired ultraviolet `#7209b7`, electric violet `#f72585`, and neon cyan `#4cc9f0`.
3. **Paramount Gold** (Key `3`): Oscars prestige 24K gold `#ffd700`, champagne `#fff3b0`, and obsidian bronze `#583101`.
4. **Emerald Matrix** (Key `4`): Interstellar deep jade `#064e3b`, neon mint `#34d399`, and cyber emerald `#10b981`.

### 📹 7. Director Camera Angle Presets
Instant theatrical camera angles via the camera button or shortcut `C`:
- **Center**: Standard theatrical front stage.
- **Low IMAX**: Monumental upward dramatic tilt (`rotateX: 13deg, translateY: 24px, scale: 1.1x`).
- **Horizon Pan**: Anamorphic ultra-wide view (`rotateY: -14deg, scale: 0.95x`).
- **Isometric 3D**: High-angle perspective showing the 3D depth of every arched letter.

### 📸 8. 4K Cinema Wallpaper Snapshot Exporter (`S`)
- Click **4K Snapshot** or press `S` to trigger a simulated camera shutter flash.
- Generates an ultra high-resolution **3840×2160 (4K UHD)** composite wallpaper of the current scene, including active theme gradients, embers, anamorphic flares, wordmark, presenter badge, and official studio production metadata watermark (`ANAND MELAVA CINEMA LABS // 4K MASTER // CHRIS PEREIRA`).
- Automatically triggers a PNG download to your device.

### 🎞️ 9. 35mm Film Grain & Customizable Presenter Tagline
- **Celluloid Texture**: Procedural SVG fractal noise overlay (`feTurbulence`) gives authentic 35mm Hollywood celluloid grain.
- **Interactive Director Tagline**: Click directly on the subtitle badge ("An Original Cinematic Experience") to type your own custom film tagline. Updates persist and render directly onto 4K exported wallpapers!

---

## 🎬 Cinematic Timeline & Phase Breakdown

| Time (1x) | Phase | Visual Choreography | Audio Soundscape |
| --- | --- | --- | --- |
| **0.0s – 2.0s** | **Phase 1: AM Ignition** | Monolithic **A** and **M** ignite at stage center with deep ruby bevels and central corona pulse | Sub-bass drop sweep (`115Hz` → `36Hz`) & crystal C5/E5 chimes |
| **2.0s – 3.6s** | **Phase 2: Stardust Glide** | Shockwave ring fires outward; 95+ kinetic sparks burst; **A** and **M** glide outward into their destination slots while follower letters unfurl | Stereo-panned bandpass noise whoosh gliding across left & right channels |
| **3.6s – 5.5s** | **Phase 3: Grand Reveal** | Arched wordmark locks with chrome light sweep; floor glow illuminates; customizable presenter badge fades in | Orchestral chord swell (D-min9) + metallic impact slam transient |

---

## ⌨️ Director Suite Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| `Space` | Replay Intro with Full Cinematic Audio |
| `1` | Switch to **Crimson Ruby** Theme |
| `2` | Switch to **Cyberpunk Neon** Theme |
| `3` | Switch to **Paramount Gold** Theme |
| `4` | Switch to **Emerald Matrix** Theme |
| `C` | Cycle Director Camera Angles (Center / Low IMAX / Horizon / Iso) |
| `S` | Capture & Download **4K UHD Wallpaper** (3840x2160) |
| `T` | Toggle 3D Mouse & Gyroscope Parallax Tilt |
| `M` | Toggle Audio Mute / Unmute |
| `P` | Pause / Resume Intro Animation |
| `H` | Toggle Cinema Mode (Hide/Show all HUD controls) |
| `?` | Open Interactive Director Shortcuts Cheatsheet Modal |

---

## 🚀 Quick Start

Open `index.html` directly in any modern browser:
```bash
# Double-click index.html or run local dev server:
npx serve .
# or
python -m http.server 8000
```
Navigate to `http://localhost:8000` to enjoy the full experience.

---

## 📜 Repository Information

- **GitHub Repository**: [https://github.com/Chris-Pereira-tech/mygintro](https://github.com/Chris-Pereira-tech/mygintro)
- **Author**: Chris Pereira
