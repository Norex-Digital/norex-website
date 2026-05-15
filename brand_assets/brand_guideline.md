# Norex Brand Guideline — Master-Index

```yaml
version: 1.0
date: 2026-05-10
direction: Berlin-Direct
status: Brand-Foundation komplett, bereit für Page-Build
reviewer: Maurice Brehm + Noah Telo
```

> **Zweck:** Dieses File ist die Single-Source-of-Truth für die Norex-Brand. Es enthält Quick-Reference auf alle Brand-Assets + Links zu den Detail-Files in diesem Ordner.

---

## Brand in einem Satz

**Norex ist Digitalisierungspartner für Handwerks- und Reinigungsbetriebe in Berlin und Brandenburg.** Komplettkette aus einer Hand — von Website und Google-Sichtbarkeit bis zur automatischen Anfragen-Bearbeitung. Mit messbarer Erfolgs-Garantie.

**Memorable-Thing:** "Komplettkette aus einer Hand."
**Master-Claim:** "Mehr Aufträge, weniger Papierkram."
**Visual-Direction:** Berlin-Direct — kantig, hyper-lokal, BVG-direkt, dokumentarisch.

---

## Logo

**Konstrukt:** Symbol + Wortmarke (Symbol isolierbar als 32×32 GBP-Avatar nutzbar).
**Symbol:** Schwarzer Rounded-Square (border-radius 6%) mit weißem "N" + diagonalem BVG-roten Slash oben rechts.
**Wortmarke:** "NOREX" UPPERCASE in Geist Sans Bold, schwarz.

### Logo-Files (in [`logo/`](logo/))

| Datei | Format | Use |
|---|---|---|
| [`norex_logo_primary.svg`](logo/norex_logo_primary.svg) | SVG 460×120 | Hauptvariante (Symbol + Wortmarke), Website-Header |
| [`norex_logo_horizontal.svg`](logo/norex_logo_horizontal.svg) | SVG 540×96 | Briefkopf, Email-Header |
| [`norex_logo_square.svg`](logo/norex_logo_square.svg) | SVG 200×200 | GBP-Avatar, Social-Media-Profile, App-Icon |
| [`norex_logo_symbol.svg`](logo/norex_logo_symbol.svg) | SVG 100×100 | Symbol-only freigestellt, Favicon-Quelle, kleine Anwendungen |
| [`norex_logo_mono_black.svg`](logo/norex_logo_mono_black.svg) | SVG | 1c Schwarz Lockup für Stempel/1c-Druck |
| [`norex_logo_mono_white.svg`](logo/norex_logo_mono_white.svg) | SVG | 1c Weiß Lockup für dunkle Hintergründe |
| [`favicon.svg`](logo/favicon.svg) | SVG | Browser-Tab-Favicon (moderne Browser, identisch zu symbol.svg) |

### Logo-Regeln

- ✅ Symbol isolierbar für GBP-Avatar (32px+)
- ✅ Mindest-Größe Lockup: 80px Breite
- ✅ Clear-Space: mind. 50% der Symbol-Höhe um das Logo herum
- ❌ Niemals strecken, verzerren, umfärben (außer Mono-Black / Mono-White Varianten)
- ❌ Niemals auf busy oder kontrastarmem Hintergrund (mind. 4.5:1 Kontrast zum BG)

---

## Color Palette

Detail-Dokumentation: **[`colors.md`](colors.md)**

| Token | Hex | Use |
|---|---|---|
| `norex-primary` | `#0A0A0A` | Pure Black — Wortmarke, dominante Flächen, Primary-Text |
| `norex-secondary` | `#FFFFFF` | Pure White — Standard-BG, Inversen-Text, Logo-N |
| `norex-accent` | `#E2231A` | BVG-Rot — Logo-Slash, primäre CTAs, Garantie-Highlights |
| `norex-bg-soft` | `#F8F7F4` | Warmes Off-White für alternierende Sections |

**Plus:** 6 Neutrals (`ink-100` bis `ink-600`) + 4 Funktionsfarben (success/warning/error/info).

**AAA-Kontrast:** `norex-primary` auf `norex-bg` = 20.4:1 ✓

**Tailwind-Config-Snippet copy-paste-fertig in [`colors.md`](colors.md).**

---

## Typography

Detail-Dokumentation: **[`typography.md`](typography.md)**

**Display-Font:** **Geist Sans** (Google Fonts, Open-Source)
**Body-Font:** **Manrope** (Google Fonts, Open-Source)

Beide Open-Source, Umlaut+€-getestet, mind. 3 Schriftgewichte pro Font.

### Type-Scale (Mobile / Desktop)

- Display-XL: 48px / 64px (Hero-Claim) — Geist 800
- Display-L: 36px / 48px (Section-Headlines) — Geist 700
- Body: 16px (Standard) — Manrope 400
- Body-L: 18px (Lead-Paragraphs) — Manrope 400

### Google Fonts CDN-Load

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@600;700;800&family=Manrope:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## Voice & Tone

Detail-Dokumentation: **[`voice_guidelines.md`](voice_guidelines.md)**

**Tonalität:** "Sie" als Versionsverwalteter Default. Re-Evaluation nach 5 Sales-Calls.

**Sprachstil:**
- Direkt, kein Konjunktiv-Geschwurbel
- Konkrete Zahlen statt Behauptungen
- Branchen-Sprache: "Auftrag" / "Anfrage" / "Werkstatt" / "Betrieb"
- "Wir" als Norex (klein, Founder-led)

**Brand-Story-Narrativ:** 3 Längen (1 Satz / 3 Sätze / Voll-Absatz) wiederverwendbar in Pitches, Press, Sales. Siehe [`voice_guidelines.md`](voice_guidelines.md).

**Beispielsätze (8 OK / Nicht-OK Pärchen):** Siehe [`voice_guidelines.md`](voice_guidelines.md).

---

## Photography & Visuals

Detail-Dokumentation: **[`photography_guide.md`](photography_guide.md)**

**Bildwelt:** Dokumentarisch, hyper-lokal Berlin, hoher Kontrast, niemals Stock.

### Aktuelle Founder-Bilder (in [`team/`](team/))

- [`maurice_solo_portrait.jpg`](team/maurice_solo_portrait.jpg) — Solo-Use
- [`noah_solo_portrait.jpg`](team/noah_solo_portrait.jpg) — Solo-Use
- [`founders_profile_studio_nologo.jpg`](team/founders_profile_studio_nologo.jpg) — Group-Use

Pre-Pivot-Referenz: [`team/_pre_pivot_reference/`](team/_pre_pivot_reference/) (NICHT für aktuelle Brand verwenden).

### Mood-Boards (Brand-Foundation-Reference)

3 finale Berlin-Direct Mood-Bilder in [`mood_boards/`](mood_boards/).
Vollständige 9-Higgsfield-Source in [`../assets/higgsfield/mood_boards/`](../assets/higgsfield/mood_boards/) mit Prompts.

### Higgsfield-Workflow für neue Bilder

Master-Template + Use-Case-spezifische Prompts in [`photography_guide.md`](photography_guide.md). Output-Workflow in [`../assets/higgsfield/README.md`](../assets/higgsfield/README.md).

---

## Email-Signaturen

Detail in **[`email_signature/`](email_signature/)**

- [`maurice.html`](email_signature/maurice.html) — HTML-Signatur Maurice
- [`noah.html`](email_signature/noah.html) — HTML-Signatur Noah
- [`plain.txt`](email_signature/plain.txt) — Plain-Text-Fallback
- [`README.md`](email_signature/README.md) — Gmail/Outlook/Apple-Mail-Setup-Anleitung

**Pflicht VOR Setup:** Platzhalter (Telefon, WhatsApp-Link, Calendly) durch echte Werte ersetzen.

---

## Spacing & Layout (Foundation)

Detail-Dokumentation: **[`../DESIGN.md`](../DESIGN.md)** im Workspace-Root.

**Spacing-Tokens** (4px-Base):
- `2xs` 4px · `xs` 8px · `sm` 12px · `md` 16px · `lg` 24px · `xl` 32px
- `2xl` 48px · `3xl` 64px · `4xl` 96px · `5xl` 128px

**Density:** spacious — BRAND_BRIEF Anforderung "klar, lesbar, kein Design-Geschwurbel".

**Border-Radius-Skala:** `sm` 4px, `md` 12px, `lg` 16px, `xl` 24px, `full` 9999px.

---

## Motion

**Prinzipien:**
- Nur `transform` + `opacity` animieren — niemals `transition-all`
- Federnde Easing-Kurven statt linear
- Reduced-motion respektieren

**Easing-Tokens:**

```css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-in: cubic-bezier(0.5, 0, 0.75, 0);
```

**Duration-Skala:**
- `motion-fast` 150ms (Hover, Focus)
- `motion-base` 250ms (Card-Hover, Toggle)
- `motion-slow` 400ms (Section-Reveal)
- `motion-deliberate` 700ms (Komplettketten-Diagramm-Reveal)

---

## Brand-Anti-Patterns (zu vermeiden)

- ❌ Standard-Tailwind-Blau/Indigo (`blue-600`, `sky-500`, `indigo-500`) als Primärfarbe
- ❌ Inter als Body-Font ("AI-default-Look")
- ❌ Cyan-Blau-Gradients (Pre-Pivot-Brand-DNA)
- ❌ Glasmorphism, Noise-Overlays, radiale Verläufe (Pre-Pivot)
- ❌ Stock-Foto "happy team meeting"-Aesthetic
- ❌ KI-Re-Touch auf Founder-Gesichter
- ❌ DDR-Keller-Look bei Higgsfield-Polish (Lessons Learned 2026-05-10)
- ❌ "Norex AI" als Brand-Name (Pre-Pivot)
- ❌ "Prozessautomation" Sub-Tagline (Pre-Pivot)
- ❌ "KI-Lösungen / Innovation / Disruption / Synergie"-Buzzwords im Marketing-Text
- ❌ 3D-Effekte im Logo

Vollständige Anti-Pattern-Dokumentation:
- [`_archiv_alt_logo/ANTI_PATTERNS.md`](_archiv_alt_logo/ANTI_PATTERNS.md) — Pre-Pivot-Anti-Patterns mit konkreten Beispielen aus der alten Brand

---

## Brand-Foundation Status

| Element | Status | File |
|---|---|---|
| Direction-FIX | ✅ | Berlin-Direct |
| Logo (7 Files) | ✅ | [`logo/`](logo/) |
| Favicon | ✅ | [`logo/favicon.svg`](logo/favicon.svg) |
| Color-System | ✅ | [`colors.md`](colors.md) |
| Typography-System | ✅ | [`typography.md`](typography.md) |
| Voice-Guidelines | ✅ | [`voice_guidelines.md`](voice_guidelines.md) |
| Photography-Guide | ✅ | [`photography_guide.md`](photography_guide.md) |
| Email-Signaturen | ✅ | [`email_signature/`](email_signature/) |
| Master-Index (dieses File) | ✅ | [`brand_guideline.md`](brand_guideline.md) |
| Decision-Log | ✅ | [`decision_log.md`](decision_log.md) |
| Mood-Boards (3 Berlin-Direct) | ✅ | [`mood_boards/`](mood_boards/) |
| Pre-Pivot archiviert | ✅ | [`_archiv_alt_logo/`](_archiv_alt_logo/) |
| Founder-Bilder (3 brand-konform) | ✅ | [`team/`](team/) |

**Status: BRAND-FOUNDATION KOMPLETT — bereit für Page-Build (Plan 2).**

---

## Linked Documents

### Im Workspace
- [`../DESIGN.md`](../DESIGN.md) — Full Design-System mit Direction-FIX, Type-Scale, Spacing, Motion, Tailwind-Snippets
- [`../BRAND_FOUNDATION_PLAN.md`](../BRAND_FOUNDATION_PLAN.md) — Vollständiger Pre-Plan mit allen 9 Steps (Step 0-8)
- [`../assets/higgsfield/README.md`](../assets/higgsfield/README.md) — Higgsfield-Workflow für neue Bild-Generationen
- [`../assets/higgsfield/logos_shotgun/`](../assets/higgsfield/logos_shotgun/) — 10 Logo-Varianten aus 2 Generation-Runden + Backup

### Schaltzentrale (Strategic)
- `../../Norex Schaltzentrale/docs/business_summary_2026-05-07.md` — Strategie + Pricing + Garantie
- `../../Norex Schaltzentrale/docs/positioning_validation_2026-05-10.md` — Positioning-Statements
- `../../Norex Schaltzentrale/docs/BRAND_BRIEF.md` — Original Brand-Brief (Anforderungen)
- `../../Norex Schaltzentrale/docs/HANDOFF_NOREX_WEBSITE.md` — Handoff-Doc für Page-Build
- `../../Norex Schaltzentrale/docs/WEBSITE_RESEARCH_BRIEFING.md` — Skills + Konkurrenz + SEO-Research
- `../../Norex Schaltzentrale/docs/BRAND_FOUNDATION_PLAN.md` — Plan-Persistierung

---

## Next Steps (Plan 2 — Page-Build)

Brand-Foundation ist abgeschlossen. Plan 2 wird in einer separaten Session aufgesetzt mit:

1. **Sitemap-Implementierung** (8 MVP-Pages: Home + 3 Leistungs + Garantie + Über-uns + Kontakt + Sichtbarkeitscheck)
2. **Komplettketten-Diagramm** als USP-Visualisierung direkt nach Hero
3. **Pricing-Karten** (3 Cards: A / B / Kombi)
4. **ROI-Rechner** + **Branchen-Quiz** als Lücken-Chance-Komponenten
5. **Schema.org JSON-LD** auf allen Pages
6. **Multi-Dial-Button** (Telefon + WhatsApp + Calendly)
7. **Tally-Integration** für Sichtbarkeitscheck-Form
8. **Higgsfield-Bilder** für Hero + Komplettkette + 6 Branchen (Phase 2)
9. **QA + Vercel-Staging + Live**

Siehe **[`../BRAND_FOUNDATION_PLAN.md`](../BRAND_FOUNDATION_PLAN.md)** Sektion "Open Decisions" für vorgemerkte Entscheidungen.

---

## Versionierung

| Version | Datum | Änderung |
|---|---|---|
| 1.0 | 2026-05-10 | Initial Brand-Foundation komplett (Steps 0-8) |
| 0.x | — | — Tonalitäts-Re-Evaluation nach 5 Sales-Calls geplant → wird Version 1.1 oder 2.0 |
