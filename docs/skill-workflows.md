# Skill Workflows — Norex Website
_Stand: 2026-05-16_

Welche Skills in welcher Reihenfolge bei welchem Task. Nicht alle Schritte sind immer nötig — je nach Aufwand überspringen was keinen Mehrwert bringt.

---

## 1. Neue Landing Page bauen

**Ziel:** Neue Seite von Null — z.B. `/neukundengewinnung-handwerk`

```
1. /plan-ceo-review + /research  → Keywords, Suchvolumen, Wellen-Plan — BEVOR Copy geschrieben wird
2. brainstorming                 → Idee → Briefing (Ziel, Zielgruppe, Haupt-CTA klären)
3. startup-positioning           → (nur wenn neue Positionierung) Messaging-Grundlage
4. copythat/brand-voice          → Norex-Tonalität laden (einmalig pro Session)
5. boraoztunc/ogilvy             → Positioning → Promise → Headline-Logik festlegen
6. copythat/landing-page         → Volle LP-Struktur generieren
7. copythat/headline-writer      → 10 Headline-Varianten, beste auswählen
8. copythat/seo-web-copy         → SEO-optimierte Deutsch-Copy für alle Sektionen
9. boraoztunc/stop-slop          → AI-Floskeln aus fertigem Copy entfernen
10. plan-design-review           → Design-Plan reviewen vor Umsetzung
11. frontend-design              → HTML/Tailwind-Implementierung
    + ui-ux-pro-max              → Overlay für Stil/Typografie
    + taste                      → Anti-generic Check
12. boraoztunc/make-interfaces-feel-better → UI-Details polieren
13. design-review                → Visuelles QA
14. claude-seo/seo-schema        → Schema.org JSON-LD (LocalBusiness, Service, FAQPage)
15. boraoztunc/page-cro          → Conversion-Check vor Launch
16. superseo/page-audit          → SEO-Check vor Launch
17. /ship                        → Commit + Push → Vercel deployed automatisch
```

---

## 2. Bestehende Seite optimieren

**Ziel:** Copy oder Design einer vorhandenen Seite verbessern

### Nur Copy:
```
1. copythat/copy-audit       → Aktuellen Stand auf 4 Dimensionen bewerten
2. boraoztunc/page-cro       → Conversion-Schwachstellen identifizieren
3. copythat/seo-web-copy     → Verbesserte Copy auf Deutsch
4. boraoztunc/stop-slop      → Floskeln entfernen
5. superseo/page-audit       → SEO nach Copy-Update prüfen
6. /ship                     → Deploy
```

### Nur Design:
```
1. design-review             → Aktuelle Probleme identifizieren
2. plan-design-review        → Design-Plan für Überarbeitung reviewen
3. ui-ux-pro-max             → Überarbeitung mit Stil-Regeln
   + taste                   → Anti-generic Overlay
4. boraoztunc/make-interfaces-feel-better → Details polieren
5. design-review             → Nochmal prüfen
6. /ship                     → Deploy
```

### Copy + Design:
```
Copy-Workflow oben → dann Design-Workflow oben (ohne erneuten design-review am Anfang)
```

---

## 3. SEO-Audit + Verbesserung

**Ziel:** Seite für besseres Ranking optimieren

```
1. superseo/page-audit         → Scorecard, Top-5 Quick Wins, Competitor-Gaps
2. claude-seo/seo-technical    → Speed, Schema, Crawler-Config
3. copythat/seo-web-copy       → Title, Meta, H1/H2, FAQ auf Deutsch
4. claude-seo/seo-schema       → Schema.org JSON-LD (LocalBusiness, Service, FAQPage)
5. copythat/llm-optimisation   → (optional) AEO/GEO für KI-Zitierbarkeit
6. boraoztunc/stop-slop        → Floskeln aus neuem Copy entfernen
7. /ship                       → Deploy
```

---

## 4. Neue Leistungsseite (SEO + Content + Design)

**Ziel:** Vollständige Service-Seite — z.B. `/leistungen/anfragen-automatisieren`

```
1. /plan-ceo-review + /research → Keywords, Suchvolumen, Wellen-Plan
2. brainstorming                → Seiten-Briefing
3. copythat/brand-voice         → Tonalität sichern
4. copythat/seo-web-copy        → SEO-Copy: Title, H1, Meta, FAQ auf Deutsch
5. claude-seo/seo-schema        → Schema.org
6. boraoztunc/stop-slop         → Floskeln entfernen
7. plan-design-review           → Design-Plan reviewen
8. frontend-design + ui-ux-pro-max + taste → Implementierung mit Anti-generic Overlay
9. boraoztunc/make-interfaces-feel-better  → UI-Details polieren
10. design-review               → QA
11. boraoztunc/page-cro         → Conversion-Check
12. superseo/page-audit         → Finaler SEO-Check
13. /ship                       → Deploy
```

---

## 5. E-Mail-Kampagne oder Sequenz

**Ziel:** Welcome-Sequenz, Sales-Sequenz, oder Einzel-Mail

```
1. brainstorming            → Ziel, Empfänger, gewünschte Aktion klären
2. copythat/email-sequence  → Sequenz-Struktur + Copy auf Deutsch
3. boraoztunc/stop-slop     → Floskeln entfernen
4. copythat/copy-audit      → Qualitäts-Check
```

---

## 6. Ad Copy (Google / Meta)

**Ziel:** Anzeigen-Texte für bezahlte Kampagnen

```
1. boraoztunc/ogilvy       → Promise + Positionierung festlegen
2. copythat/ad-copy        → Plattform-spezifische Texte (Zeichenlimits etc.)
3. boraoztunc/stop-slop    → Floskeln entfernen
4. copythat/copy-audit     → Qualitäts-Check
```

---

## 7. Monatlicher SEO-Check (laufend)

**Ziel:** Rankings prüfen, Seiten nachoptimieren

```
1. AminForou/mcp-gsc            → Rankings, CTR, Keywords aus GSC (nach Domain-Live)
2. egebese/seo-research-mcp     → Competitor-Keywords beobachten
3. superseo/page-audit          → Schwache Seiten nachjustieren
4. claude-seo/seo-technical     → (quartalsweise) Technisches Audit
5. /ship                        → Deploy wenn Änderungen gemacht
```

---

## 8. Bilder / Videos generieren

**Ziel:** Hero-Bilder, Team-Fotos, Marketing-Videos

```
1. mcp__higgsfield__generate_image  → Bilder generieren
   oder mcp__higgsfield__generate_video → Videos generieren
2. Read-Tool                        → Sofort im Chat anzeigen (Quality-Check)
```

---

## 9. Strategische Richtungsentscheidung

**Ziel:** Messaging-Pivot, neues Segment, neue Leistung

```
1. brainstorming-ceo      → Prämissen hinterfragen, echte Frage identifizieren (Deutsch)
2. startup-positioning    → Positionierung formal definieren (April Dunford)
3. gtm-strategy           → Channel + Launch-Plan
4. → dann Workflow 1 oder 4 für Umsetzung
```

---

## 10. Deploy (Änderungen live schalten)

**Ziel:** Lokale Änderungen auf norex-digital.vercel.app deployen

```
1. /ship   → Erstellt Commit + Push zu GitHub main
            → Vercel deployed automatisch (~30 Sek)
```

Vorher sicherstellen:
- Alle Seiten lokal auf localhost geprüft
- `boraoztunc/page-cro` + `superseo/page-audit` für neue/geänderte Seiten gelaufen

---

## 11. Design-Exploration / Neues Design-System

**Ziel:** Neue Design-Richtung finden oder komplettes Design-System aufbauen

### Varianten explorieren (Richtung unklar):
```
1. brainstorming          → Design-Briefing klären
2. design-shotgun         → Mehrere Varianten generieren + vergleichen
3. plan-design-review     → Beste Variante formal reviewen
4. frontend-design + ui-ux-pro-max + taste → Gewählte Variante umsetzen
5. design-review          → QA
```

### Komplettes Design-System aufbauen (Redesign / Rebranding):
```
1. design-consultation    → Erstellt DESIGN.md: Farben, Typo, Spacing, Komponenten, Motion
2. hue                    → (einmalig) Brand-Token-System aus norex-digital.vercel.app generieren
                            → in brand_assets/ ablegen
3. plan-design-review     → Design-System reviewen
4. frontend-design + ui-ux-pro-max + taste → Umsetzung
5. boraoztunc/make-interfaces-feel-better → UI-Details polieren
6. design-review          → QA
```

---

## 12. Blog / Content-Planung

**Ziel:** Entscheiden was wann zu welchem Zweck erstellt wird

```
1. boraoztunc/content-strategy  → Themen-Cluster, Prioritäten, Content-Kalender
2. /plan-ceo-review + /research → Keyword-Potenzial pro Thema prüfen
3. brainstorming                → Einzelnen Artikel oder Content-Stück briefen
4. copythat/seo-web-copy        → Text schreiben (Deutsch, SEO-optimiert)
5. boraoztunc/stop-slop         → Floskeln entfernen
6. copythat/copy-audit          → Qualitäts-Check
7. copythat/llm-optimisation    → (optional) AEO/GEO für KI-Zitierbarkeit
8. /ship                        → Deploy
```

---

## 13. Schnell-Komponenten mit Tailwind-Blöcken

**Ziel:** Bestehende Seite schnell um Komponenten erweitern (Preistabelle, FAQ, CTA-Block etc.)

```
1. shadcnblocks-skill     → Passenden Block aus 1.338 Komponenten auswählen
2. ui-ux-pro-max + taste  → An Norex-Stil anpassen
3. boraoztunc/make-interfaces-feel-better → Details polieren
4. design-review          → QA
5. /ship                  → Deploy
```

---

## Schnell-Referenz: Was immer läuft

| Nach diesem Output | Immer noch dazu |
|---|---|
| Jeder Copy-Output | `boraoztunc/stop-slop` |
| Jeder neuer HTML-Block | `boraoztunc/make-interfaces-feel-better` |
| Vor jedem Launch | `boraoztunc/page-cro` + `superseo/page-audit` |
| Nach größerem Copy-Update | `copythat/copy-audit` |
| Letzter Schritt vor Go-Live | `/ship` |
