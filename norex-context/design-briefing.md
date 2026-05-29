# Norex Design-Briefing
_Aus brand_guideline.md + DESIGN.md_

## Direction: Berlin-Direct
Mood: kantig, hyper-lokal, BVG-Direktheit. Kein Silicon-Valley, kein Glassmorphism.

## Farben (Tailwind config)
```js
'norex-primary': '#0A0A0A'   // Schwarz — Flächen, Text
'norex-accent':  '#E2231A'   // BVG-Rot — CTAs, Highlights
'norex-bg-soft': '#F8F7F4'   // Off-White — alternierende Sections
'norex-ink-300': '#B8B5AB'   // Borders
'norex-ink-400': '#6B6960'   // Secondary-Text
```

## Fonts (CDN)
```html
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@600;700;800&family=Manrope:wght@400;500;700&display=swap" rel="stylesheet">
```
Display: Geist | Body: Manrope | Mono: Geist Mono

## Section-Farb-Zonen (Sub-Pages)
Hero = weiß → 1. Section = norex-primary (dunkel) → 2. Section = weiß/soft → wechselnd
Garantie-Section immer dunkel.

## AI-Slop-Gate (Pflicht vor Founder-Approval)
- [ ] Kein 3-Spalten-Icon-Grid
- [ ] Keine Icons in farbigen Containers
- [ ] Kein Glassmorphism
- [ ] Kein shadow-md / Standard-Tailwind-Boxshadow
- [ ] Kein Tailwind-Blau/Indigo
- [ ] Kein rounded-xl (Berlin = kantig)
- [ ] Kein transition-all

## Logos
- Hell: brand_assets/logo/norex_logo_primary.svg
- Dunkel: brand_assets/logo/norex_logo_mono_white.svg
- Favicon: brand_assets/logo/favicon.svg
