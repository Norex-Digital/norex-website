# Anti-Patterns aus Pre-Pivot-Brand (Norex AI)

_Erstellt: 2026-05-10 als Input für /design-consultation + /design-shotgun + Founder-Entscheidung._
_Basis: Analyse von `logo.PNG` (alt) + `brand_guideline.md` (alt) im selben Ordner._

> **Zweck:** Dokumentiert was die alte Brand ausmachte und warum sie nicht mehr passt zur neuen Positionierung "Digitalisierungspartner für Handwerks- und Reinigungsbetriebe". Gibt der neuen Design-Phase klare Negativ-Beispiele.

---

## Was die alte Brand transportiert hat

| Element | Alter Wert | Wirkung |
|---|---|---|
| Brand-Name | "Norex AI" | KI-Buzzword im Namen — passt nicht mehr zur Positionierung |
| Logo-Symbol | Stilisiertes "N" mit Pfeil/Aufstieg-Glyph | Generisches B2B-SaaS-Wachstums-Symbol, kein Handwerk-Code |
| Tagline | "Prozessautomation" | Tech-jargon, kein Outcome |
| Primärfarben | Cyan→Blau-Gradient (#06B6D4 → #3B82F6) | Standard-Tech-Startup-Look |
| Hintergrund | Dunkles Premium (#0A0A0A) Pflicht | Kalt-corporate für Handwerker 35-60 |
| Effekte | Glasmorphism, radiale Verläufe, Noise-Filter | Pure Tech-Aesthetik |
| Typografie | Helvetica Neue Bold + Inter | Standard-B2B-SaaS-Pairing, ohne Differenzierung |
| Tonalität | "Du als Default, Sie auf Anfrage" | Falsch für Zielgruppe 35-60 |

---

## Direkte Konflikte mit BRAND_BRIEF.md (Schaltzentrale)

**BRAND_BRIEF Anti-Patterns die im alten Logo verletzt sind:**

- ❌ "KI-Buzzword-Optik" → "Norex AI" trägt das im Namen
- ❌ "Tech-Startup-Vibes (lila Gradients, glitzerndes Glas-Morphismus)" → exakt was die alte Brand vorschreibt
- ❌ "Computer/Laptop-Icons überall" → Aufstiegspfeil ist äquivalente Tech-Symbolik
- ❌ "Standard Tailwind Blau/Indigo als Primärfarbe" → #0EA5E9 ist exakt sky-500 von Tailwind
- ❌ "Lachende Frau mit Headset" / Stock-Look → wird in voice_guidelines erweitert

**BRAND_BRIEF Anforderungen die das alte Logo nicht erfüllt:**

- ❌ "Bodenständigkeit — die verstehen mich" → Premium-Dunkelheit ist Hürde
- ❌ "Spezialisierung sichtbar — auf den ersten Blick FÜR Handwerk + Reinigung gebaut" → komplett unspezifisch
- ❌ "Insider-Glaubwürdigkeit (Noah's Reinigungs-Vergangenheit sichtbar)" → keine Brand-DNA für Handwerk
- ❌ "Funktioniert quadratisch in 32px lesbar" → mit Pfeil-Symbol + Wortmarke wahrscheinlich problematisch in 32px

---

## Was die NEUE Brand machen MUSS (positive Anforderungen)

1. **Wortmarke pur "Norex"** — kein "AI"-Suffix, kein "GbR" (das ist Impressum-Sache)
2. **Symbol darf KEIN Pfeil/Aufstieg sein** — stattdessen: Werkzeug-Code, Berliner Bezug, Spezialisierungs-Hinweis, oder bewusst typografische Letterform
3. **Eigene Markenfarbe statt Tailwind-Default** — Industrial-Blau / Werkstatt-Grün / Berlin-Rot (siehe BRAND_BRIEF Directions 1-3)
4. **Helle UND dunkle Anwendung möglich** — nicht "dunkel-only" wie alt; hellgrund-fähig für Briefkopf, Visitenkarten, GBP
5. **Kein Glasmorphism, keine Noise-Layer im Logo selbst** — Effekte nur im Web-Layout sparsam, nie in der Marke
6. **2 Sans-Serif Fonts (Display + Body)** — nicht 1 Font wie Helvetica Neue Bold doppelt nutzen
7. **Symbol+Wortmarke-Constraint** — Symbol isolierbar als 32×32px GBP-Avatar nutzbar
8. **Sie-Form als Default** in voice_guidelines.md (Versionsverwaltung dokumentiert)

---

## Empfohlener Mind-Shift für /design-shotgun

| Alte Wahrnehmung | Neue Wahrnehmung |
|---|---|
| "Premium Tech-SaaS" | "Werkzeug für Macher" |
| "Wachstum/Aufstieg" | "Mehr Aufträge / weniger Papierkram" |
| "Innovation" | "Insider-Praxis" |
| "Disruption" | "Komplettkette aus einer Hand" |
| "Universal anwendbar" | "Speziell für Handwerk + Reinigung" |
| "Sky-Blau, Cyan, Glanz" | "Industrial, Werkstatt-Robust, Berlin-Direct" |

---

_Diese Datei bleibt im `_archiv_alt_logo/` Ordner als Lessons-Learned-Reference. Nicht löschen._
