# Norex AI — Brand Guideline

## Logo
- Datei: `../website/assets/logo.PNG`
- Verwendung: Immer auf dunklem Hintergrund
- Nie strecken, verzerren oder umfärben

---

## Farben

### Primärpalette
| Name | Hex | Verwendung |
|---|---|---|
| **Hintergrund** | `#0A0A0A` | Seitenhintergrund, Sections |
| **Primär (Blau)** | `#0EA5E9` | Überschriften, Highlights, Links |
| **Cyan** | `#06B6D4` | Gradient-Start, Akzente |
| **Blau** | `#3B82F6` | Gradient-Ende, Buttons |

### Textfarben
| Name | Hex | Verwendung |
|---|---|---|
| **Weiß** | `#FFFFFF` | Haupttext, Headlines |
| **Grau** | `#9CA3AF` | Untertext, Beschreibungen, Labels |

### Gradient
```css
background: linear-gradient(135deg, #06B6D4, #3B82F6);
```
Verwendung: CTAs, Buttons, Hero-Highlights, Trennlinien

### Nie verwenden
- Standard Tailwind Blau/Indigo (indigo-500, blue-600)
- Helle Hintergründe (#FFFFFF, #F5F5F5 als Seitenhintergrund)
- Andere Primärfarben außer der definierten Palette

---

## Typografie

### Headlines
- **Schrift:** Helvetica Neue (Fallback: Arial, sans-serif)
- **Gewicht:** 700 (Bold)
- **Laufweite:** `-0.03em` (eng)
- **Farbe:** `#0EA5E9` oder `#FFFFFF`

### Body / Fließtext
- **Schrift:** Inter (Fallback: system-ui, sans-serif)
- **Gewicht:** 400 (Regular), 500 (Medium) für Betonungen
- **Zeilenhöhe:** `1.7`
- **Farbe:** `#FFFFFF` oder `#9CA3AF`

### Hierarchie
```
H1 — 48–72px · Helvetica Neue Bold · #FFFFFF oder Gradient
H2 — 32–40px · Helvetica Neue Bold · #0EA5E9
H3 — 24–28px · Helvetica Neue Bold · #FFFFFF
Body — 16–18px · Inter Regular · #9CA3AF
```

---

## Design-Stil

### Grundprinzip
Dunkles Premium-Design. Nie aufweichen. Nie auf helle Variante wechseln.

### Schatten
```css
/* Nie flaches shadow-md verwenden */
box-shadow: 0 4px 24px rgba(6, 182, 212, 0.15), 0 1px 4px rgba(0,0,0,0.4);
```

### Glasmorphismus (für Cards/Panels)
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 16px;
```

### Verläufe & Tiefe
- Mehrere radiale Verläufe übereinanderlegen
- SVG-Noise-Filter für Körnung und Textur
- Schichtensystem: Basis (`z-0`) → erhöht (`z-10`) → schwebend (`z-20`)

---

## Animationen

```css
/* Nur transform und opacity animieren — nie transition-all */
transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity 0.3s ease;
```

- Federnde Easing-Kurven (`cubic-bezier` mit Überschwinger)
- Keine `transition-all`
- Hover: leichtes `translateY(-2px)` + Schatten-Verstärkung

---

## Interaktive Zustände

Jedes klickbare Element braucht alle drei Zustände:
```css
/* Hover */
:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(6,182,212,0.25); }

/* Focus (Tastatur-Navigation) */
:focus-visible { outline: 2px solid #0EA5E9; outline-offset: 4px; }

/* Active (Klick) */
:active { transform: translateY(0); }
```

---

## Buttons

### Primär-Button
```css
background: linear-gradient(135deg, #06B6D4, #3B82F6);
color: #FFFFFF;
font-family: Inter, sans-serif;
font-weight: 600;
padding: 12px 28px;
border-radius: 8px;
border: none;
```

### Sekundär-Button
```css
background: transparent;
color: #0EA5E9;
border: 1px solid #0EA5E9;
padding: 12px 28px;
border-radius: 8px;
```

---

## Abstände (Spacing-System)

| Token | Wert | Verwendung |
|---|---|---|
| xs | 4px | Inline-Abstände |
| sm | 8px | Komponenten-intern |
| md | 16px | Standard-Gap |
| lg | 32px | Section-intern |
| xl | 64px | Zwischen Sections |
| 2xl | 128px | Hero-Bereiche |

---

## Bilder & Medien

```css
/* Immer Gradient-Overlay auf Bilder */
.image-wrapper::after {
  content: '';
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  mix-blend-mode: multiply;
}
```

---

## Tone of Voice

- **Sprache:** Deutsch (Du-Form bei Kunden, Sie-Form nur auf Anfrage)
- **Stil:** Direkt, professionell, auf Augenhöhe
- **Kernbotschaft:** Mehr Umsatz und weniger Aufwand durch KI
- **Nie:** Technisches Kauderwelsch ohne Erklärung
