# Norex Photography Guide

_Direction-FIX: Berlin-Direct._
_Bildwelt: dokumentarisch, hyper-lokal Berlin, hoher Kontrast, NIEMALS Stock._

---

## Brand-Bildwelt-DNA

### Was Norex-Bilder transportieren MÜSSEN

1. **Authentizität** — wirkt wie echtes Foto, nicht inszeniert
2. **Berlin-spezifisch** — visuelle Anker zu Stadt/Region (Altbau, S-Bahn, Industrie-Architektur, Backstein)
3. **Dokumentarisch** — Reportage-Stil, ungestellt, mid-action
4. **Hoher Kontrast** — Schwarz/Weiß-Anker mit gezielten Farbakzenten passend zur Brand-Palette
5. **Handwerk-Realität** — Werkzeug, Werkbänke, Arbeitskleidung, echte Räume (KEINE Stock-Bürofotos)

### Was Norex-Bilder NIE zeigen dürfen

- ❌ "Lachende Frau mit Headset" und ähnliche Stock-Klassiker
- ❌ "Handshake aus Aktenkoffer-Heft"
- ❌ Generische "happy team meeting" mit Laptops
- ❌ KI-/Roboter-/Gehirn-/Neural-Network-Visualisierungen
- ❌ Stock-Fotos von "Geschäftsleuten im Anzug"
- ❌ Cyan-Blau-Gradients oder Glasmorphism als Bild-Overlay
- ❌ "Cooler Startup-Lounge"-Aesthetik (Tischkicker, Pizza, Hoodies)
- ❌ Smartphones/Tablets als Hero-Element (Tool-Fokus statt Outcome)
- ❌ Verschwommene Stadt-Skylines (generic-corporate)

---

## Aktuelle Brand-konforme Bilder

### Founder-Portraits (FIX, für aktuellen Use)

Located in [`brand_assets/team/`](team/):

| Datei | Use | Eigenschaften |
|---|---|---|
| `maurice_solo_portrait.jpg` | Solo-Über-uns-Page, Founder-Bios, Author-Boxes für Blog | Hell, natürliches Tageslicht, freundlicher Smile, Coworking-/Café-Setting |
| `noah_solo_portrait.jpg` | Solo-Über-uns-Page, Founder-Bios, Author-Boxes für Blog | Hell, natürliches Tageslicht, ruhiger Blick, Coworking-Setting (Pflanze sichtbar) |
| `founders_profile_studio_nologo.jpg` | Group-Hero auf Homepage, Hero-Section /ueber-uns | Neutral grau Studio-BG, beide Founder Rücken-an-Rücken, brand-neutral und polish-fähig |

**Aktuelle Use-Strategy:** Diese 3 Bilder reichen für MVP-Launch (Phase 1, 8 Pages). Hero-Bilder + Branchen-Bilder werden später in Page-Build-Phase via Higgsfield generiert.

### Pre-Pivot-Referenz (NICHT für aktuelle Brand)

Located in [`brand_assets/team/_pre_pivot_reference/`](team/_pre_pivot_reference/):

3 Bilder mit altem "NOREX Prozessautomation"-Branding oder Pre-Pivot-Dunkel-Studio-Aesthetik. Siehe dortiges README.md für Detail. Verwendung NUR als Referenz bei späterer Foto-Shooting/Regeneration für Pose/Komposition.

### Mood-Boards (Brand-Direction-Foundation)

Located in [`brand_assets/mood_boards/`](mood_boards/):

3 finale Berlin-Direct Mood-Bilder (gewinnende Direction):
- `01_berlin_altbau_team.png` — Berliner Altbau-Fassade mit Reinigungs-Team
- `02_berlin_sbahn_platform.png` — Handwerker auf Berlin Warschauer Str. S-Bahnhof
- `03_berlin_streetcorner_van.png` — Veteranenstr/Brunnenstr S/W mit roten Vans

Diese sind Brand-Foundation-Reference für Tonalität, nicht direkte Page-Bilder.

Vollständige Higgsfield-Source (9 Mood-Boards für alle 3 Directions inkl. verworfene Werkstatt-modern + Digital-Pragmatisch) in [`assets/higgsfield/mood_boards/`](../assets/higgsfield/mood_boards/) mit `_PROMPTS.md`.

---

## Bildwelt für Page-Build (Phase 2)

### Higgsfield-Prompt-Template (Berlin-Direct)

Master-Template das in allen neuen Norex-Bildern als Grundlage genutzt wird:

```
Documentary-style photograph, [SCENE DESCRIPTION].
Aesthetic reference: Magnum Photos meets Berliner Morgenpost editorial,
high contrast, slight desaturation except skin tones, real Berlin setting.
Wide-angle 28-35mm focal length. Real photography feel.
No staged poses, no stock-photo aesthetic, no logos visible.
Subtle accent of BVG-red (#E2231A) somewhere in the frame
(work-van stripe, building signage, traffic light) for brand coherence.
Natural light or warm tungsten, slight grain.
```

Pro Use-Case zusätzliche Spezifika:

#### Hero-Bild Homepage
- **Scene:** "Wide shot of a Berliner Altbau-Hof with a Mercedes Vito work-van parked, a craftsman walking out the building entrance with a small toolbox. Late afternoon golden light hits the building facade. Subtle BVG-red stripe on the van's side door."
- **Aspect Ratio:** 21:9 (Hero-Wide) oder 16:9
- **Output:** `assets/higgsfield/hero/`

#### 6 Branchen-Hero-Bilder (Phase 2)

| Branche | Scene-Prompt |
|---|---|
| Gebäudereinigung | Cleaning team in dark uniforms walking into a Berliner Altbau, Aufgang, dawn light |
| Fensterreinigung | Window cleaner with ladder on Berliner Mietshaus facade, mid-action, gentle golden hour |
| SHK | SHK craftsman installing radiator in renovated Berliner Altbau apartment, copper pipes visible |
| Elektrohandwerk | Electrician at distribution panel in Berliner workshop, focused work moment |
| Bau / Dachdecker | Roofer on Berlin rooftop with skyline (TV-Tower distant), tool belt, weather-resistant gear |
| Kfz-Werkstatt | Mechanic working on a vehicle in Berliner Hinterhof-Werkstatt, oil-stained hands, documentary feel |

Output: `assets/higgsfield/branchen/01_shk.png` etc.

#### Komplettketten-Diagramm (USP-Visualisierung)

- **Scene:** "Editorial infographic illustration showing 5 connected stages: Google search icon → WhatsApp message bubble → AI response icon → PDF document → calendar booking. Style: clean line-art with bold BVG-red connection lines on white background. Hyper-precise, no decorative elements. Sample of Berliner stairwell wall in subtle background texture."
- **Aspect Ratio:** 16:9
- **Output:** `assets/higgsfield/komplettkette/`

#### Service-Mockups (Page-Build optional)

WhatsApp-Chat-Mockup, Auto-Angebot-PDF-Mockup, Notion-CRM-Visualisierung — alle in der Style: clean flat-design, BVG-red Akzent, deutsche Texte ("AUFTRAG", "KUNDE", "ANFRAGE").

Output: `assets/higgsfield/service_mockups/`

---

## Output-Workflow (siehe `assets/higgsfield/README.md`)

1. **Generieren** mit nano_banana_2 (Higgsfield Pro) → Default-Output in `_staging/`
2. **Reviewen** via Read-Tool auf Authentizität, Brand-Konformität
3. **Verwerfen** ins `_archive/` falls "AI-fake"-Look, Stock-Klassiker, oder BG-Klischee (z.B. "DDR-Keller")
4. **Kuratieren** ins entsprechende Use-Case-Subfolder (hero/ branchen/ etc.)
5. **Dokumentieren** im jeweiligen `_PROMPTS.md` mit Prompt + Job-ID

---

## Verwendungs-Regeln

### Pflicht

- **Real-Foto-Vorrang:** Wenn echtes Foto verfügbar (z.B. zukünftige Kunden-Cases nach Pilot) → Real-Foto. Higgsfield nur wo keins existiert.
- **Brand-Akzent:** Mindestens ein subtiler BVG-roter Akzent pro Higgsfield-Bild (Logo-Slash Erkennbarkeit + Brand-Kohärenz)
- **Deutsche Sprache in Bildern:** Texte/Beschriftungen auf Deutsch (AUFTRAG, KUNDE, BERLIN, etc.)
- **Mobile-First-Crops:** Pro Hero-Bild auch 1:1 und 4:5 Crops für Mobile rendern (in Higgsfield via aspect_ratio Parameter)
- **WebP-Konversion vor Live:** Pre-Live alle Bilder von PNG zu WebP konvertieren (~70% kleiner, gleiches Visual)

### Verboten

- ❌ Stock-Foto-Plattformen (Unsplash, Pexels, Shutterstock) für Brand-Hauptbilder. Falls absolut nötig: dokumentarischer Stil + nicht generisch + nicht "happy people"
- ❌ KI-Re-Touch auf Founder-Gesichter (Authentizitäts-Guardrail aus Plan)
- ❌ Verlaufs-Overlays in Cyan/Lila/Indigo (Pre-Pivot-Brand-DNA)
- ❌ Glasmorphism-Overlays auf Bildern (Pre-Pivot-Brand-DNA)
- ❌ Heavy Color-Grading Richtung Orange/Teal (zu Hollywood, nicht dokumentarisch)
- ❌ Industrieller "DDR-Keller"-Look bei Polish-Versuchen (gelernte Lektion 2026-05-10)

---

## Alt-Text-Konventionen (für Accessibility + SEO)

Pflicht-Pattern für `<img alt="...">`:

| Bild-Typ | Alt-Text-Pattern | Beispiel |
|---|---|---|
| Founder-Solo | "[Name], Co-Founder Norex, [Setting]" | "Maurice Brehm, Co-Founder Norex, Berliner Café" |
| Founder-Group | "Maurice Brehm und Noah Telo, Founder Norex" | (gleich) |
| Hero-Stadt-Szene | "[Branche] in [Bezirk], Berlin" | "SHK-Handwerker in Friedrichshain, Berlin" |
| Branchen-Bild | "[Branchen-Beschreibung] in Berlin/Brandenburg" | "Fensterreinigung an Berliner Altbau-Fassade" |
| Diagramm | "[Inhalt-Beschreibung]" | "Komplettkette: Google-Suche bis Termin-Buchung in 5 Schritten" |
| Logo | "Norex Logo" oder "Norex Symbol" | (gleich) |

---

## Decision-Trace

| Datum | Entscheidung |
|---|---|
| 2026-05-10 | Direction-FIX Berlin-Direct → Bildwelt = dokumentarisch + hyper-lokal Berlin |
| 2026-05-10 | 3 Berlin-Direct Mood-Boards als Brand-Foundation gewählt |
| 2026-05-10 | Founder-Higgsfield-Polish verworfen ("DDR-Keller"-Effekt) — Original-Fotos behalten |
| 2026-05-10 | Pre-Pivot-Founder-Bilder ins `_pre_pivot_reference/` als Lessons-Learned (Pose-Inspiration für späteres Shooting) |
| 2026-05-10 | Master-Template für Higgsfield-Berlin-Direct-Style definiert (BVG-red Akzent + dokumentarisch + 28-35mm) |
| 2026-05-10 | Stock-Foto-Verbot für Brand-Hauptbilder (BRAND_BRIEF Anti-Pattern bestätigt) |
