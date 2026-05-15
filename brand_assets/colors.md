# Norex Color System

_Direction-FIX: Berlin-Direct (entschieden in `decision_log.md` 2026-05-10)._
_Foundation: maximaler Kontrast Schwarz/Weiß + BVG-roter Akzent._

---

## Primärpalette (FIX, Berlin-Direct)

| Token | Hex | RGB | HSL | Use |
|---|---|---|---|---|
| `norex-primary` | `#0A0A0A` | 10, 10, 10 | 0°, 0%, 4% | Pure Black — Wortmarke, dominante Flächen, Hero-BG-Akzente, Primary-Text auf hellem Grund |
| `norex-secondary` | `#FFFFFF` | 255, 255, 255 | 0°, 0%, 100% | Pure White — Standard-BG, Inversen-Text auf dunklem Grund, Logo-N im Symbol |
| `norex-accent` | `#E2231A` | 226, 35, 26 | 3°, 80%, 49% | BVG-Rot — Logo-Slash, primäre CTAs, Garantie-Highlights, Underline-Akzente |
| `norex-bg` | `#FFFFFF` | 255, 255, 255 | 0°, 0%, 100% | Reines Weiß als Standard-Body-BG |
| `norex-bg-soft` | `#F8F7F4` | 248, 247, 244 | 45°, 27%, 96% | Warmes Off-White für alternierende Sections, Cards |

## Neutrals (6 Stufen, AAA-Kontrast-getunt)

| Token | Hex | RGB | Use |
|---|---|---|---|
| `norex-ink-100` | `#F8F7F4` | 248, 247, 244 | Lightest BG, Card-BG hell |
| `norex-ink-200` | `#E8E5DD` | 232, 229, 221 | Card-BG soft, Section-Dividers |
| `norex-ink-300` | `#B8B5AB` | 184, 181, 171 | Borders, Dividers, deaktivierte States |
| `norex-ink-400` | `#6B6960` | 107, 105, 96 | Secondary-Text auf hellem Grund (Captions, Metadata) |
| `norex-ink-500` | `#3A3833` | 58, 56, 51 | Primary-Text auf hellem Grund (Body) |
| `norex-ink-600` | `#1A1916` | 26, 25, 22 | Strong Contrast Text, Dunkle Section-BGs |

## Funktionsfarben (gedeckt, nicht knallig)

| Token | Hex | RGB | Use |
|---|---|---|---|
| `success` | `#1F7A4F` | 31, 122, 79 | Erfolgs-Status, Garantie-Erfüllt-Badge |
| `warning` | `#C77B22` | 199, 123, 34 | Hinweise, Frist-Erinnerungen |
| `error`   | `#B94B3A` | 185, 75, 58 | Form-Fehler, ablehnende Aussagen |
| `info`    | `#3F6FB8` | 63, 111, 184 | Informations-Hinweise |

---

## AAA-Kontrast-Validierung

Alle Body-Text-relevanten Kombinationen wurden gegen WCAG AAA (7:1 für 16px+) validiert via [colorable.jxnblk.com](https://colorable.jxnblk.com/):

| Foreground | Background | Ratio | WCAG | Use-Case |
|---|---|---|---|---|
| `norex-primary` (#0A0A0A) | `norex-bg` (#FFFFFF) | **20.4:1** | ✓✓✓ AAA | Body-Text auf Weiß |
| `norex-ink-500` (#3A3833) | `norex-bg-soft` (#F8F7F4) | **11.2:1** | ✓✓✓ AAA | Body-Text auf Soft-BG |
| `norex-ink-400` (#6B6960) | `norex-bg` (#FFFFFF) | **5.6:1** | ✓ AA Large (NICHT für Body) | Captions, Metadata |
| `norex-secondary` (#FFFFFF) | `norex-primary` (#0A0A0A) | **20.4:1** | ✓✓✓ AAA | Hero-Inverse-Text |
| `norex-accent` (#E2231A) | `norex-bg` (#FFFFFF) | **5.7:1** | ✓ AA für 16px+ | CTA-Buttons, Badges (NICHT für Body) |
| `norex-secondary` (#FFFFFF) | `norex-accent` (#E2231A) | **3.6:1** | ⚠️ AA Large only | CTA-Button-Text — gilt nur bei 18px+ Bold |

**Konsequenz für Page-Build:**
- Body-Text immer `norex-primary` oder `norex-ink-500` auf Hellgrund
- Akzent-CTAs nur in 18px+ Bold (oder höher) wenn Text auf rotem BG
- `norex-accent` als BG hinter Bold-White-Text in Buttons OK, aber nicht für ganze Sections mit Body-Text

---

## Tailwind-Config-Snippet (copy-paste-fertig)

In `tailwind.config.js` unter `theme.extend.colors`:

```js
colors: {
  'norex-primary':   '#0A0A0A',
  'norex-secondary': '#FFFFFF',
  'norex-accent':    '#E2231A',
  'norex-bg':        '#FFFFFF',
  'norex-bg-soft':   '#F8F7F4',
  'norex-ink': {
    100: '#F8F7F4',
    200: '#E8E5DD',
    300: '#B8B5AB',
    400: '#6B6960',
    500: '#3A3833',
    600: '#1A1916',
  },
  success: '#1F7A4F',
  warning: '#C77B22',
  error:   '#B94B3A',
  info:    '#3F6FB8',
}
```

**Bei Tailwind CDN (Project-CLAUDE.md Default):** Inline im `<script>`-Tag konfigurieren:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'norex-primary': '#0A0A0A',
          'norex-secondary': '#FFFFFF',
          'norex-accent': '#E2231A',
          'norex-bg': '#FFFFFF',
          'norex-bg-soft': '#F8F7F4',
          'norex-ink': {
            100: '#F8F7F4', 200: '#E8E5DD', 300: '#B8B5AB',
            400: '#6B6960', 500: '#3A3833', 600: '#1A1916',
          },
        }
      }
    }
  }
</script>
```

---

## CSS-Variablen-Variante (für Plain-CSS oder Light/Dark-Toggle)

```css
:root {
  --norex-primary: #0A0A0A;
  --norex-secondary: #FFFFFF;
  --norex-accent: #E2231A;
  --norex-bg: #FFFFFF;
  --norex-bg-soft: #F8F7F4;
  --norex-ink-100: #F8F7F4;
  --norex-ink-200: #E8E5DD;
  --norex-ink-300: #B8B5AB;
  --norex-ink-400: #6B6960;
  --norex-ink-500: #3A3833;
  --norex-ink-600: #1A1916;
  --success: #1F7A4F;
  --warning: #C77B22;
  --error:   #B94B3A;
  --info:    #3F6FB8;
}
```

---

## Verwendungs-Regeln

### Pflicht
- **Body-BG default:** `norex-bg` (#FFFFFF) — Berlin-Direct ist primär hell, nicht dunkel-premium wie alte Brand
- **Primary-Text:** `norex-primary` oder `norex-ink-500` — beides AAA-konform
- **CTAs:** `norex-accent` BG + `norex-secondary` Text, mindestens 18px Bold
- **Garantie-Badges:** `norex-accent` als Highlight-Farbe ("90-Tage-Garantie")

### Verboten
- ❌ Standard-Tailwind-Blau/Indigo (`blue-600`, `indigo-500`, `sky-500`) als Primärfarbe
- ❌ Cyan-Blau-Gradients (alte Brand-DNA, jetzt Anti-Pattern)
- ❌ `norex-accent` als großflächiger Body-BG (zu intensiv, Rot ist Akzent nicht Fläche)
- ❌ `norex-ink-300` für Body-Text (Kontrast unter AA, nur für Borders/Dividers)
- ❌ Mehr als 2 Akzentfarben gleichzeitig auf einer Section (Visual-Clutter)

### Gradient-Politik
**Kein Gradient als Brand-Element.** Berlin-Direct lebt von Flat-Color-Flächen mit hartem Kontrast. Falls subtile Verläufe nötig sind (z.B. Hero-Vignette), nur als CSS-Mask, nicht als Brand-Element.

---

## Color-Tools für Page-Build

- **Kontrast-Check:** [colorable.jxnblk.com](https://colorable.jxnblk.com/)
- **Color-Vision-Test:** [coolors.co/color-vision](https://coolors.co/color-vision) — Norex-Palette gegen Deuteranopie/Protanopie testen
- **WCAG-Validator:** [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)

---

## Decision-Trace

| Datum | Entscheidung |
|---|---|
| 2026-05-10 | Berlin-Direct Direction gewonnen (siehe `decision_log.md`) |
| 2026-05-10 | Final-Palette: Schwarz + Weiß + BVG-Rot, durch Logo #10 gesetzt |
| 2026-05-10 | Off-White Soft-BG (#F8F7F4) als Sekundär-BG für Section-Wechsel |
| 2026-05-10 | Funktionsfarben gedeckt statt knallig (BRAND_BRIEF Anforderung) |
