# Anand Melava — Crimson Stardust & Ruby Cinematic Intro

An ultra-luxury, high-impact cinematic intro experience for **ANAND MELAVA**, featuring a rich **Crimson Red Theme**, fluid stardust particle simulation, and a seamless, mathematically aligned morph and glide transition from the **AM** Monogram to the full 3D arched wordmark.

Built with **vanilla HTML5, CSS3 3D transforms, HTML5 Canvas 2D, Web Audio API procedural synthesis**, and **Tailwind CSS**. Zero heavy runtime dependencies or pre-recorded media assets.

---

## ✨ Visual Highlights & Palette

- **Crimson & Ruby Palette**:
  - `Ruby Glow`: `#ff2a5f`
  - `Incandescent Crimson`: `#ff1e56`
  - `Deep Carmine / Wine`: `#8b0024`
  - `Velvet Obsidian Background`: `#070204`
  - `Specular Silver-Rose Highlights`: `#ffe5ec` & `#ffffff`
- **Dynamic Anamorphic Light Streak**: A luminous crimson lens streak spanning the stage horizon.
- **Floating Crimson Embers & Ruby Stardust**: 2D Canvas particle engine simulating floating glowing embers drifting with sinusoidal turbulence and glowing halos (`shadowBlur`).
- **Cinema Arch Curvature**: 3D geometric arched wordmark typography (`scaleY`, `translateY`, `rotateZ`) creating the iconic Hollywood theater marquee curve.

---

## 🎬 Cinematic Sequence & Seamless Transition

1. **Phase 1: Radiant "AM" Ruby Monogram Ignition (0.0s – 2.0s)**
   - Monolithic **A** and **M** ignite at the center of the dark obsidian cinema stage with intense ruby-red metallic bevels and an energetic core glow.
2. **Phase 2: Crimson Stardust Glide Transition (2.0s – 3.6s)**
   - An energetic shockwave ring expands outward.
   - The hero **A** and **M** execute a seamless, mathematically aligned glide outward into their destination anchor slots:
     - **A** glides to anchor `ANAND`.
     - **M** glides to anchor `MELAVA`.
   - The follower characters (`N A N D` and `E L A V A`) unfurl cleanly from behind the gliding anchors with staggered timing and micro-settling.
   - **Zero duplicate letter artifacts, zero visual clipping, and zero abrupt cuts.**
3. **Phase 3: Grand "ANAND MELAVA" Reveal (3.6s – 5.5s)**
   - The arched wordmark locks into position with high-clarity typography.
   - A chrome specular shimmer sweeps across the title.
   - Subtitle presenter badge (`An Original Cinematic Experience`) fades in with expanding letter-spacing tracking.
   - Pulsing ruby floor reflection pool casts light below the title.

---

## 🔊 Procedural Web Audio Engine

Procedural, synthesized Hollywood cinematic sound design implemented entirely via the **Web Audio API**:
- **Cinema Sub-Drop Boom**: A sine wave sweep pitching down from `115Hz` to `36Hz` delivering theater sub-bass punch.
- **Ruby Chimes**: Crystalline sine bell strikes at `523.25Hz` (C5) and `659.25Hz` (E5).
- **Stardust Transition Whoosh**: Bandpass-filtered procedural noise sweep (`280Hz` → `2600Hz` → `500Hz`) accompanying the glide of A and M into place.
- **Epic Orchestral Swell**: Voicing in D minor9 / F major (`73Hz` to `587Hz`) with detuned saw + triangle waves and sweeping low-pass filter (`320Hz` to `3400Hz`).

---

## 🎮 Interactive Director HUD & Controls

- **Replay Intro**: Seamless reset and instantaneous re-triggering of all animations and particle timers.
- **Play Cinematic Audio**: Unlocks Web Audio API context and plays the full synchronized soundscape.
- **Pause / Resume**: Freezes all animations and particles in place.
- **Speed Multiplier**: Toggle between **0.45x Slow-Mo** (for inspectable motion choreography) and **1x Normal**.
- **Cinema Mode (H)**: Hides all HUD telemetry and controls for a clean, distraction-free presentation.

### Keyboard Shortcuts
| Key | Action |
| --- | --- |
| `Space` | Replay Intro with Cinematic Audio |
| `H` | Toggle Cinema Mode (Hide/Show HUD) |
| `P` | Pause / Resume Playback |

---

## 🚀 Quick Start

Open `index.html` directly in any modern browser:
```bash
# Simply double-click index.html or open via local server
npx serve .
# or
python -m http.server 8000
```
Visit `http://localhost:8000` to preview.

---

## 📜 Repository

- **GitHub Repository**: [https://github.com/Chris-Pereira-tech/mygintro](https://github.com/Chris-Pereira-tech/mygintro)
- **Author**: Chris Pereira
