# Norex Typography System

_Direction-FIX: Berlin-Direct._
_Type-Pairing: 2 Sans-Serif Fonts (Display + Body), beide Google Fonts, Open-Source._

---

## Font-Pairing (FIX)

### Display-Font: **Geist Sans**

- **Designer:** Vercel (Open-Source, Apache-2.0)
- **Google Fonts:** [fonts.google.com/specimen/Geist](https://fonts.google.com/specimen/Geist)
- **Charakter:** Kantig, präzise, modern aber nicht Silicon-Valley-glänzend. Funktioniert perfekt für Berlin-Direct BVG-Plakat-Vibe.
- **Gewichte verfügbar:** 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Used Weights für Norex:** 600 (Semibold), 700 (Bold), 800 (Extrabold für Hero H1)
- **Umlaut-Test:** ä ö ü ß — gerendert sauber, klare Punkt-Akzente
- **€-Test:** ✓ Standard-Symbol korrekt gerendert
- **Use:** H1-H4 Headlines, Hero-Claim, Section-Titles, Pricing-Zahlen (Bold)

### Body-Font: **Manrope**

- **Designer:** Mikhail Sharanda (Open-Source, OFL)
- **Google Fonts:** [fonts.google.com/specimen/Manrope](https://fonts.google.com/specimen/Manrope)
- **Charakter:** Body-optimiert, hohe Lesbarkeit ab 14px, freundlich aber professionell. NICHT der "AI-default-Look" von Inter.
- **Gewichte verfügbar:** 200, 300, 400, 500, 600, 700, 800
- **Used Weights für Norex:** 400 (Regular), 500 (Medium für Betonung), 700 (Bold für UI-Labels)
- **Umlaut-Test:** ä ö ü ß — sauber, gute Punkt-Höhe für Lesbarkeit
- **€-Test:** ✓
- **Use:** Body-Text, Lead-Paragraphs, FAQ-Antworten, Form-Labels, alles unter H4

### Mono-Font (optional, für Pricing-Zahlen falls gewünscht): **Geist Mono**

- **Google Fonts:** [fonts.google.com/specimen/Geist+Mono](https://fonts.google.com/specimen/Geist+Mono)
- **Use:** Tabular-Numerals in Pricing-Karten (500€, 1.000€) — sorgt für sauberes Vertikal-Alignment
- **Alternative:** Geist Sans mit `font-variant-numeric: tabular-nums` reicht meist

---

## Type-Scale (FIX, mobile-first, rem-basiert)

Skala basiert auf 16px Body. Display ist `clamp()` für responsive Skalierung.

| Token | Mobile (px) | Desktop (px) | rem | Line-Height | Letter-Spacing | Font + Weight |
|---|---|---|---|---|---|---|
| **Display-XL** | 48 | 64 | 3.0 / 4.0 | 1.05 | -0.025em | Geist 800 |
| **Display-L** | 36 | 48 | 2.25 / 3.0 | 1.1 | -0.02em | Geist 700 |
| **Display-M** | 28 | 32 | 1.75 / 2.0 | 1.15 | -0.015em | Geist 700 |
| **Display-S** | 22 | 24 | 1.375 / 1.5 | 1.2 | -0.01em | Geist 600 |
| **Body-L** | 18 | 18 | 1.125 | 1.7 | 0 | Manrope 400 |
| **Body** | 16 | 16 | 1.0 | 1.7 | 0 | Manrope 400 |
| **Body-S** | 14 | 14 | 0.875 | 1.6 | 0 | Manrope 400 |
| **UI-Label** | 14 | 14 | 0.875 | 1.4 | 0.01em | Manrope 600 |
| **Caption** | 12 | 12 | 0.75 | 1.5 | 0.02em | Manrope 500 |
| **Mono-Tabular** | 16 | 16 | 1.0 | 1.2 | 0 | Geist Mono 500 |

**Display-XL als Hero-Claim:**

```css
.hero-claim {
  font-family: 'Geist', system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(3rem, 8vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--norex-primary);
}
```

---

## Loading Strategy (Google Fonts CDN)

### Mit `<link>` Tags (Pflicht-Setup im `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@600;700;800&family=Manrope:wght@400;500;700&display=swap" rel="stylesheet">
```

**Erklärung:**
- `preconnect` zu fonts.googleapis.com + fonts.gstatic.com → schneller DNS-Lookup
- `family=Geist:wght@600;700;800` → nur 3 Gewichte laden (~30KB statt 200KB Full-Family)
- `family=Manrope:wght@400;500;700` → nur 3 Gewichte
- `display=swap` → Fallback-Font sofort zeigen, dann austauschen sobald Custom-Font geladen (verhindert FOIT)

### Mit Mono (optional, falls Pricing-Tabularnums extern):

```html
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@600;700;800&family=Geist+Mono:wght@500&family=Manrope:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## Tailwind-Config-Snippet (copy-paste-fertig)

In `tailwind.config.js` unter `theme.extend`:

```js
fontFamily: {
  display: ['"Geist"', 'system-ui', 'sans-serif'],
  sans:    ['"Manrope"', 'system-ui', 'sans-serif'],
  mono:    ['"Geist Mono"', 'ui-monospace', 'monospace'],
},
fontSize: {
  'display-xl': ['clamp(3rem, 8vw, 4rem)',   { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '800' }],
  'display-l':  ['clamp(2.25rem, 6vw, 3rem)', { lineHeight: '1.1',  letterSpacing: '-0.02em',  fontWeight: '700' }],
  'display-m':  ['clamp(1.75rem, 4vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
  'display-s':  ['clamp(1.375rem, 3vw, 1.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
  'body-l':     ['1.125rem', { lineHeight: '1.7' }],
  'body':       ['1rem',      { lineHeight: '1.7' }],
  'body-s':     ['0.875rem',  { lineHeight: '1.6' }],
  'ui-label':   ['0.875rem',  { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '600' }],
  'caption':    ['0.75rem',   { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '500' }],
},
```

### Bei Tailwind CDN (Project-CLAUDE.md Default):

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          display: ['"Geist"', 'system-ui', 'sans-serif'],
          sans:    ['"Manrope"', 'system-ui', 'sans-serif'],
          mono:    ['"Geist Mono"', 'ui-monospace', 'monospace'],
        },
        fontSize: {
          'display-xl': ['clamp(3rem, 8vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
          'display-l':  ['clamp(2.25rem, 6vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
          'body':       ['1rem', { lineHeight: '1.7' }],
        }
      }
    }
  }
</script>
```

---

## Verwendungs-Regeln

### Display (Geist)
- Verwenden für: H1, H2, H3, H4, Hero-Claim, Section-Titles, Pricing-Zahlen, Garantie-Headline
- NICHT verwenden für: Body-Text, Lead-Paragraphs, FAQ-Antworten (zu kantig auf Lesbarkeit-Größen)
- Letter-Spacing immer leicht negativ (-0.01 bis -0.025em je nach Größe)

### Body (Manrope)
- Verwenden für: alles unter H4, Lead-Paragraphs, FAQ-Antworten, Form-Labels, Captions
- Line-Height 1.7 für lange Reading-Passages (FAQ, Über-uns-Bios) — Body-Komfort für 35-60-Zielgruppe
- Bold (700) nur für Inline-Betonung in Body, nicht für Headlines (dafür Display)

### Gemeinsame Regeln
- **Min Font-Size Body:** 14px (Caption) — niemals unter 12px außer für Legal-Footer
- **Min Touch-Target:** Buttons mit Body-Font 16px+ Bold (Mobile: 17px für iOS-Standard)
- **Max Line-Length:** 65-75 Zeichen für optimale Lesbarkeit — bei `max-w-prose` (~65ch in Tailwind)

---

## Umlaut + €-Validierung

Manueller Test in Browser bei verschiedenen Größen (Browser-DevTools → Computed):

| Symbol | Geist (Display-XL 64px) | Manrope (Body 16px) | Status |
|---|---|---|---|
| ä | sauber, klare Umlaut-Punkte | klar lesbar, gute Höhe | ✓ |
| ö | sauber | klar | ✓ |
| ü | sauber | klar | ✓ |
| ß | korrekt gerendert (Eszett mit Sharp-Top in Bold) | korrekt | ✓ |
| € | proper Euro-Glyph | proper | ✓ |
| – (En-Dash) | korrekt | korrekt | ✓ |
| — (Em-Dash) | korrekt | korrekt | ✓ |
| „ "" (German quotes) | korrekt | korrekt | ✓ |

**Test-Page-Snippet (HTML):**

```html
<p style="font-family: 'Geist'; font-size: 64px; font-weight: 800;">
  Aufträge — Geschäft führen für 1.000€ pro Monat. Übergreifend ä ö ü ß.
</p>
<p style="font-family: 'Manrope'; font-size: 16px;">
  Wir bringen Ihren Handwerksbetrieb auf Google — und beantworten jede Anfrage automatisch.
  Für Berlin und Brandenburg. Garantie: messbar mehr in 90 Tagen.
  „Sprachstil" mit deutschen Anführungszeichen, Umlaute (ä ö ü ß), €-Symbol.
</p>
```

---

## Fallback-Stack

Falls Geist/Manrope nicht laden (z.B. Privacy-Mode blockt Google Fonts):

```css
font-family: 'Geist', 'Helvetica Neue', 'Helvetica', 'Arial', system-ui, sans-serif;
font-family: 'Manrope', 'Helvetica Neue', 'Arial', system-ui, sans-serif;
```

Helvetica Neue ist Apple-System-Stack-konform, Arial fallback für Windows. Beide haben ähnliche Proportionen wie Geist/Manrope (Sans-Serif Grotesk).

---

## Decision-Trace

| Datum | Entscheidung |
|---|---|
| 2026-05-10 | User-Entscheidung: 2 Fonts (Display + Body) statt 1 Font |
| 2026-05-10 | Inter ausgeschlossen (Anti-AI-Slop Regel, "AI-default-Look") |
| 2026-05-10 | Space Grotesk ausgeschlossen (Convergence-Trap als "Safe-Inter-Alternative") |
| 2026-05-10 | Geist gewählt: kantig + präzise, passt zu Berlin-Direct |
| 2026-05-10 | Manrope gewählt: nicht der AI-default-Look, gute Body-Lesbarkeit für 35-60 Zielgruppe |
| 2026-05-10 | Type-Scale: mobile-first mit clamp() für responsive Hero |
| 2026-05-10 | Line-Height Body 1.7 (großzügig, Reading-Komfort für ältere Zielgruppe) |
