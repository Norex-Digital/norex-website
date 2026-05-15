# Higgsfield-Output Workflow

_Zentrale Organisation aller Higgsfield-Pro-Generationen für Norex._
_Erstellt: 2026-05-10 — pflegen bei jedem Higgsfield-Run._

---

## Zweck

Alle mit Higgsfield (KI-Image-Generation) erzeugten Visuals landen hier zentral. Sortiert nach Use-Case, mit Staging/Archiv-Ordner für Iteration.

---

## Ordnerstruktur

```
assets/higgsfield/
├── README.md                    # Dieses Dokument
├── _staging/                    # Frisch generiert, noch nicht kuratiert (Default-Output)
├── _archive/                    # Verworfene oder veraltete Generationen
├── mood_boards/                 # Brand-Foundation-Mood-Boards (Phase 1 Brand-Direction)
├── hero/                        # Homepage Hero-Bilder + Variationen
├── branchen/                    # 6 Branchen-spezifische Header-Bilder (SHK, Elektro, Bau, Reinigung, Kfz, Fenster)
├── komplettkette/               # USP-Diagramm-Visualisierungen
├── founder_polish/              # Polished Versionen der bestehenden Founder-Fotos
└── service_mockups/             # WhatsApp-Chat / PDF-Angebot / CRM Visuals (Page-Build)
```

---

## Workflow

1. **Generieren**: `mcp__higgsfield__generate_image` mit Output-Default in `_staging/`
2. **Reviewen**: Bilder im Staging visuell prüfen via Read-Tool
3. **Kuratieren**: Erfolgreiche Bilder nach Use-Case-Ordner verschieben (`mv _staging/foo.png hero/`)
4. **Verwerfen**: Failed Generations nach `_archive/` (nicht löschen, lessons learned)
5. **Dokumentieren**: Jeder Use-Case-Ordner sollte eine kurze `_PROMPTS.md` enthalten mit den Original-Prompts (für spätere Reproduktion)

---

## Naming-Konvention

`{NN}_{use_case}_{variant}_{kurzbeschreibung}.png`

Beispiele:
- `01_mood_werkstatt_modern_a_shk_workshop.png`
- `02_hero_homepage_v1_workshop_overview.png`
- `01_branche_shk_workshop_detail.png`

NN = laufende Nummer, immer vorangestellt für Sortierreihenfolge.

---

## Beziehung zu brand_assets/

`brand_assets/mood_boards/` enthält die FINALEN, kuratierten Mood-Bilder die in der Brand-Phase als Founder-Entscheidung-Input gewinkt wurden. Higgsfield-Source-Material kommt zuerst hier in `assets/higgsfield/mood_boards/` und wird dann nach `brand_assets/mood_boards/` kuratiert wenn final.

**Aktueller Stand 2026-05-10:** Die ersten 9 Mood-Bilder liegen direkt in `brand_assets/mood_boards/` (vor Erstellung dieses Workflows generiert). Future Generations: zuerst hier, dann kuratieren.

---

## Credits-Tracking

Higgsfield Pro Plus Plan: ~988 Credits zum Start (10.05.2026).
Pro 2k-Image-Gen: ~10-25 Credits (model-abhängig).
Bei `mcp__higgsfield__balance` regelmäßig prüfen.

---

## Wichtig

- **Personen-Gesichter NIE re-touchen** (Authentizitäts-Guardrail aus Plan)
- **Stilkonsistenz zur gewinnenden Brand-Direction** halten
- **Deutsche Beschriftungen** in Prompts wenn möglich (z.B. "AUFTRÄGE", "KUNDEN" statt "JOBS", "CUSTOMERS")
- **Keine Stock-Fotos-Optik** — dokumentarisch, ehrliche Reportage-Aesthetik
