# Wer ist Norex (Kern-Kontext — IMMER zuerst lesen)

> ⚠️ **Norex ist KEINE Reinigungs-/Gartenfirma.** Norex ist die **Agentur**, deren Kunden Reinigungs- und Gartenbetriebe sind. Verwechslung = falsche Keyword-/Copy-/SEO-Strategie.

- **Was:** Digitalisierungspartner für **Reinigungs- und Gartenservice-Betriebe** in Deutschland. KI-gestützt, Done-For-You, Boutique-Größe. Standort Berlin/Brandenburg.
- **Gründer:** Maurice Brehm & Noah Telo (GbR). Noah hat selbst Reinigung + Gartenservice betrieben (Insider-Edge).
- **Master-Claim:** „Mehr Aufträge. Mehr Sichtbarkeit. Wir machen das."
- **Angebot Segment A — Neukundengewinnung** (Setup 1.000 € · 500 €/Mo): Website, Local SEO, Google Business Profile, On-Page SEO, Bewertungs-Setup, Reporting. 90-Tage-Ergebnisgarantie (GBP-Impressionen +50% ODER Anrufe +5/Mo ODER Form-Submits +3/Mo).
- **Angebot Segment B — Werbeanzeigen** (Upsell nach 60–90 Tagen): LSA, Meta Ads, Google Search Ads. Ad-Spend immer direkt Kunde→Plattform.
- **ICP:** Reinigungs-/Gartenbetriebe, 1–6 MA, bis ~300k € Umsatz. **Endkunden-Keywords wie „gebäudereinigung berlin" sind die Keywords der KUNDEN, nicht von Norex.**
- **Pilot/Referenz:** JR Gebäudeservice / Julien Ranft, `premium-fensterreinigung.de` (Falkensee) — Referenzen darauf sind korrekt, nicht stale.

**Volle Strategie (Single Source of Truth):** `norex_context.md` + `docs/business_summary.md` in der **Norex Schaltzentrale** (Google Drive). Pfad ist maschinenabhängig — PC: `G:\Meine Ablage\Norex Schaltzentrale\`, Mac: `~/Library/CloudStorage/GoogleDrive-office@norexai.de/Meine Ablage/Norex Schaltzentrale/`. Bei strategischen Entscheidungen dort nachlesen (vorher `ls` zum Pfad-Check).

# CLAUDE.md — Frontend Website Regeln

@.claude/skills/copythat/CLAUDE.md

## Erste Schritte (einmalig einrichten)
Marketplace hinzufügen: `/plugin marketplace add anthropics/claude-code`
Plugin installieren: `/plugin install frontend-design@claude-code-plugins`

## Immer zuerst tun
- **Den `frontend-design` Skill aufrufen** bevor irgendein Frontend-Code geschrieben wird — jede Session, keine Ausnahmen.

## Referenzbilder
- Wenn ein Referenzbild vorhanden: Layout, Abstände, Typografie und Farben exakt übernehmen. Platzhalter-Inhalte einsetzen (Bilder via `https://placehold.co/`, generische Texte). Das Design nicht verbessern oder erweitern.
- Wenn kein Referenzbild vorhanden: Design von Grund auf mit hohem Anspruch erstellen (siehe Qualitätsvorgaben unten).
- Screenshot erstellen, mit Referenz vergleichen, Abweichungen korrigieren, erneut screenshotten. Mindestens 2 Vergleichsrunden. Erst stoppen wenn keine sichtbaren Unterschiede mehr vorhanden sind oder der User es sagt.

## Lokaler Server
- **Immer auf localhost ausführen** — niemals einen `file:///` URL screenshotten.
- Entwicklungsserver starten: `node serve.mjs` (stellt das Projekt-Root unter `http://localhost:3000` bereit)
- `serve.mjs` liegt im Projekt-Root. Vor dem ersten Screenshot im Hintergrund starten.
- Wenn der Server bereits läuft, keine zweite Instanz starten.

## Screenshot-Workflow
- Puppeteer ist über `screenshot.mjs` eingebunden (Chrome-Cache im User-Profil). Funktioniert out-of-the-box — `screenshot.mjs` unverändert nutzen.
- **Immer von localhost screenshotten:** `node screenshot.mjs http://localhost:3000`
- Screenshots werden automatisch gespeichert unter `./temporary screenshots/screenshot-N.png` (automatisch hochgezählt, nie überschrieben).
- Optionales Label: `node screenshot.mjs http://localhost:3000 label` → speichert als `screenshot-N-label.png`
- `screenshot.mjs` liegt im Projekt-Root. Unverändert verwenden.
- Nach dem Screenshot die PNG-Datei aus `temporary screenshots/` mit dem Read-Tool lesen — Claude kann das Bild direkt sehen und analysieren.
- Beim Vergleich konkret sein: „Überschrift ist 32px, Referenz zeigt ~24px", „Kartenabstand ist 16px, sollte 24px sein"
- Prüfen: Abstände/Padding, Schriftgröße/Gewicht/Zeilenhöhe, Farben (exakter Hex-Wert), Ausrichtung, border-radius, Schatten, Bildgrößen

## Standard-Ausgabe
- Einzelne `index.html`-Datei, alle Styles inline, sofern nicht anders angegeben
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Platzhalter-Bilder: `https://placehold.co/BREITExHÖHE`
- Mobile-first, responsiv

## Design-System (Norex Brand)

**Primäre Quelle: `/norex-design` Skill** — enthält alle Token, Komponenten-Specs und CSS-Snippets für das Norex-Design-System. Vor jeder Design-Arbeit aktivieren.

- **Farben, Fonts, Spacing, Radii, Motion:** → `~/.claude/skills/norex-design/references/tokens.md`
- **Button, Card, Input, Nav, FAQ Specs:** → `~/.claude/skills/norex-design/references/components.md`
- **CSS Custom Properties + Tailwind Config (copy-paste):** → `~/.claude/skills/norex-design/references/platform-mapping.md`
- **Logos, Fotos, Mood-Boards:** → `brand_assets/logo/`, `brand_assets/team/` (weiterhin aktiv)

**Nie mehr manuell in `brand_assets/colors.md` oder `brand_assets/typography.md` nachschlagen** — alles ist im Skill konsolidiert.

## Anti-Generisch-Vorgaben
- **Farben:** Nie die Standard-Tailwind-Palette verwenden (indigo-500, blue-600 etc.). Eine eigene Markenfarbe wählen und davon ableiten.
- **Schatten:** Nie flaches `shadow-md`. Mehrschichtige, farbig getönte Schatten mit niedriger Deckkraft verwenden.
- **Typografie:** Nie dieselbe Schrift für Überschriften und Fließtext. Display- oder Serifenschrift mit sauberer Sans-Serif kombinieren. Enge Laufweite (`-0.03em`) bei großen Überschriften, großzügige Zeilenhöhe (`1.7`) im Fließtext.
- **Verläufe:** Mehrere radiale Verläufe übereinanderlegen. Körnung/Textur via SVG-Noise-Filter für Tiefe hinzufügen.
- **Animationen:** Nur `transform` und `opacity` animieren. Nie `transition-all`. Federnde Easing-Kurven verwenden.
- **Interaktive Zustände:** Jedes klickbare Element braucht hover, focus-visible und active Zustand. Keine Ausnahmen.
- **Bilder:** Verlaufsüberlagerung hinzufügen (`bg-gradient-to-t from-black/60`) und eine Farb-Behandlungsebene mit `mix-blend-multiply`.
- **Abstände:** Bewusste, konsistente Abstands-Tokens verwenden — keine zufälligen Tailwind-Stufen.
- **Tiefe:** Oberflächen brauchen ein Schichtensystem (Basis → erhöht → schwebend), nicht alles auf derselben z-Ebene.

## Output-Pflicht — Approval-Gate (KRITISCH)

- **Nach jeder fertigen Page:** Browser öffnen (`Start-Process "http://localhost:3000/[pfad]"`) + Screenshot im Chat anzeigen. Kein stiller Weiterbau.
- **Browser-Open ist Pflicht:** Nach jeder neuen oder geänderten Page die URL im Standard-Browser öffnen — damit der Founder die Seite live sehen und selbst navigieren kann.
- **Approval-Gate:** Erst bei explizitem positivem Feedback ("gut", "ok", "passt", "weiter") den nächsten Schritt beginnen. Bei keiner Antwort: warten, nicht selbstständig weitermachen.
- **Was angezeigt wird:** Screenshot via `node screenshot.mjs http://localhost:3000 [label]` + Read-Tool zum Anzeigen des Bildes + Browser öffnen.
- **Higgsfield / andere generierte Bilder:** Direkt nach Download mit Read-Tool anzeigen (Quality-Check + Founder-Preview).
- **Kein stiller Modus:** Jeder Build-Schritt endet mit einem sichtbaren Ergebnis-Screenshot im Chat UND geöffnetem Browser.

## Harte Regeln
- Keine Abschnitte, Features oder Inhalte hinzufügen die nicht im Referenz vorhanden sind
- Ein Referenz-Design nicht „verbessern" — es nachbauen
- Nicht nach einem einzigen Screenshot-Durchgang aufhören
- Kein `transition-all` verwenden
- Kein Standard-Tailwind-Blau/Indigo als Primärfarbe verwenden

---

## Deploy Configuration (Stand 2026-06-03)

- **Platform:** Vercel — Static HTML + Tailwind CDN (kein Build-Step, kein Framework)
- **Live:** **https://norex-digital.de** ✅ (Custom-Domain verbunden, SSL, www→308→apex, alle Canonicals/Sitemap auf apex no-slash). Fallback: `norex-digital.vercel.app`
- **Vercel-Projekt:** **`norex-digital`** (persönlicher Hobby-Account „honigdachs1701-3151s-projects") — **NICHT** das alte Projekt „norex-website".
- **Deploy:** Push auf `main` → Vercel Auto-Deploy (~30 Sek), läuft über die **GitHub-Integration** (nicht die Vercel-CLI).
- **GitHub:** `github.com/Norex-Digital/norex-website` (Branch `main` → Production).
- **⚠️ Bekannte Diskrepanz:** `.vercel/project.json` zeigt noch auf das ALTE Projekt (`team_sK7m9…/prj_W8AD…` = „norex-website"). Für GitHub-Deploys irrelevant. Falls je die `vercel`-CLI genutzt wird: vorher `vercel link` neu auf `norex-digital` verbinden.

### Ship-Workflow (aktiv)
1. Änderungen lokal bearbeiten → verifizieren (Screenshots / curl)
2. **Nur öffentliche Dateien stagen** — KEINE internen Docs (`docs/pseo_*`, `assets/templates/`, `tasks/`)
3. `git commit` + `git push origin main` → Vercel deployed automatisch
> Das gstack-`/ship`-Skill ist PR-/Test-basiert (Feature-Branch → Eng-Review → PR) und passt **nicht** zu dieser statischen Main-Deploy-Site → **Direkt-Commit auf `main`** nutzen.

### Status (2026-06-03)
- [x] Domain `norex-digital.de` live (Vercel + DNS United Domains: A `@`→216.198.79.1, CNAME `www`→…vercel-dns-017)
- [x] Google Search Console verifiziert (sc-domain, DNS-TXT) + Sitemap eingereicht
- [x] GA4 Internal-Traffic-Filter (Maurice Home-IP) aktiv
- [x] PSEO Wissen-Silo live (17 Seiten) + Perfekt-Audit (DSGVO/Stale-Concept/Schema/A11y) live
- [ ] **GA4: `phone_call` + `form_submit_success` als Schlüsselereignisse markieren** (`generate_lead` ✓)
- [ ] **Rechtstexte (Datenschutz/Impressum) anwaltlich gegenlesen**
- [x] `hue` → `/norex-design` Skill generiert ✅
- Geflaggt/optional: Tailwind-CDN→CSS-Bundle · CSP · HSTS-preload · Strang-1 (Kunden-Location-Template) · IndexNow

---

## Multi-Maschinen-Workflow — Google Drive + Git (KRITISCH, Stand 2026-06-03)

Der Workspace liegt in **Google Drive** und wird von **mehreren Geräten** genutzt (Founder = PC, Noah = Mac). Drive bleibt (Multi-Geräte-Zugriff ist gewollt). Aber: **Git-Repo + Drive-Sync + gleichzeitiges Editieren auf zwei Geräten = Korruption.** Am 2026-06-03 passiert: ~20 Dateien auf 0 Bytes truncated + Drive legte Konflikt-Kopien „`dateiname 2.ext`" an. Recovery lief sauber (git HEAD + die „2"-Kopien als Quelle), nichts Wichtiges verloren. Damit das nicht wiederkommt:

- **GitHub ist die einzige Wahrheit.** Nicht der Drive-Ordner. Bei Zweifel/Korruption: `git restore` aus HEAD.
- **Vor jeder Arbeitssession:** `git pull`. **Nach jeder Session:** `git commit` + `git push`. Nie uncommitted über Nacht/Geräte-Wechsel liegen lassen.
- **NIE gleichzeitig** auf PC und Mac am selben Workspace arbeiten. Vorher absprechen wer dran ist. Drive braucht Zeit zum Sync — nach Geräte-Wechsel kurz warten bis Drive „aktuell" zeigt.
- **„`… 2.ext`"-Dateien = Alarmsignal** für einen Sync-Konflikt. Sofort prüfen (`find . -name "* 2.*"`), nicht ignorieren. Sicheres Aufräumen: Kopie nur löschen wenn die Base existiert + Inhalt hat.
- **0-Byte-Check** bei Verdacht: `find . -type f -size 0 -not -path "./node_modules/*" -not -path "./.git/*"`.
- **Drive-fragil (nicht in git):** `.claude/settings.local.json` (Permissions, 26 KB), `tasks/*`. Die haben kein GitHub-Backup → bei Korruption nur aus „2"-Kopie rettbar. Überlegung: wichtige interne Docs (`docs/pseo_*`) zu git hinzufügen + via `.vercelignore` vom Deploy ausschließen → Drive-Korruptions-Schutz ohne öffentlich zu werden.
- **`.env` (`KIE_AI_API_KEY`) niemals committen, niemals löschen, Wert nie ausgeben.**

---

## Arbeitsweise — Agent-Methodik (bewährt, Stand 2026-06)

Große Aufgaben (Audits, Multi-File-Fixes, PSEO-Seiten at scale) laufen über **Dynamic Workflows** (Workflow-Tool) mit parallelen Spezialisten-Agenten. Das hat sich bewährt:

1. **Audit-Workflow** — mehrere Perspektiven PARALLEL (Copy/Brand-Voice, Tech-SEO/Links/Schema, Design/CRO/A11y, Compliance/Privacy) → ein Synthese-Agent konsolidiert in EINE priorisierte Fix-Liste (P0/P1/P2 + bewusst-später).
2. **Fix-/Produktions-Workflow** — Agenten **nach Datei gruppiert** (jede Datei nur EIN Agent → keine Schreib-Konflikte), jeder wendet die Fixes/Inhalte seiner Datei(en) an.
3. **Verify-Agent** — adversarial gegenprüfen (strukturiertes Pass/Fail-Verdikt) + danach **eigene Verifikation** (Grep-Stichproben + Screenshots der Kernseiten).
4. **Ship** — nur öffentliche Dateien stagen, Direkt-Commit auf `main`, Live-Verifikation per curl.

**Prinzipien:**
- **Keine erfundenen Zahlen** — jede Statistik mit benannter Quelle + Jahr; internationale Daten als „international" kennzeichnen. Verifizierte Daten-Bank: `docs/pseo_datenbank.md`.
- **Outcome statt Vanity** — Beweis-Blöcke zeigen Ergebnisse (Ranking, Tempo, Anfragen), nicht Agentur-interne Audit-Scores.
- **Interne Docs bleiben lokal** — `docs/pseo_*`, `assets/templates/`, `tasks/` NICHT deployen (kein Playbook-Leak).
- **Approval-Gates** bei Design-/Strategie-Entscheidungen; `/brainstorming` vor kreativen Änderungen.
- **Autonom über Nacht** via Bypass-Permissions-Modus (Shift+Tab → „bypass permissions"), wenn keine Rückfragen gewünscht.

**PSEO-Strategie (zwei Stränge, Quelle: `docs/pseo_strategiebericht.md`):**
- **Strang 2 (LIVE):** eigene `/wissen`-Cluster-Seiten, Gewerk×Thema, Hub-and-Spoke — Eigenwerbung/Ranking.
- **Strang 1 (offen):** wiederverwendbares Kunden-Location-Template (Service×Ort) für Kunden-Domains — **erst bei echtem Kunden** bauen.

---

## Eigene Website-Skills

| Skill | Aufruf | Wofür |
|---|---|---|
| `norexwebsite` | `/norexwebsite` | Gezieltes Overhaul der Norex-Website nach Rebranding 27.05.2026. 3 Blöcke: Audit + Context-Vorbereitung → Produktion P0–P4 → Launch-Gate. |

Trigger: „norexwebsite", „Norex Website updaten", „Website Overhaul starten"

Skill-Dateien: `.claude/skills/norexwebsite/`

---

## Skill Routing — Norex Website

Wenn eine Aufgabe einem Skill entspricht, diesen direkt aufrufen. Nicht raten, nicht manuell lösen wenn ein Skill existiert.

**Vollständige Skill-Sequenzen (welche Skills in welcher Reihenfolge):** → [docs/skill-workflows.md](docs/skill-workflows.md)

| Aufgabe | Skill / Tool | Hinweis |
|---|---|---|
| SEO-Audit einer Seite | `superseo/page-audit` | Ersetzt `copythat/seo-audit` — googelt selbst, liest Top-3-Konkurrenten |
| Technisches Audit (Speed, Schema, Crawler) | `claude-seo/seo-technical` | Core Web Vitals, GPTBot, IndexNow |
| On-Page Copy auf Deutsch schreiben | `copythat/seo-web-copy` | Einziger Skill mit nativer Deutsch-Unterstützung + Brand Voice |
| Schema.org JSON-LD einbauen | `claude-seo/seo-schema` | LocalBusiness, Service, FAQPage |
| Keyword-Strategie / neue Landing Pages | `/plan-ceo-review` + `/research` | Strategie-Ebene — Wellen-Plan, Keyword-Priorisierung |
| GSC-Daten analysieren (Rankings, CTR) | `AminForou/mcp-gsc` | Erst aktiv wenn Domain norex-digital.de live + GSC verifiziert |
| Competitor-Keywords beobachten | `egebese/seo-research-mcp` | Ahrefs-Daten, ~5€/Monat CAPTCHA-Solver |
| Bilder / Videos generieren | Higgsfield MCP (`mcp__higgsfield__generate_image`, `generate_video`) | Für Hero-Bilder, Team-Fotos etc. |
| Commit + Deploy | `/ship` | Erstellt Commit + Push → Vercel deployed automatisch |
| Strategie / Scope-Entscheidungen | `/plan-ceo-review` | Für größere Richtungsentscheidungen zur Website |

### Design Skills (neu installiert)

| Aufgabe | Skill | Hinweis |
|---|---|---|
| Frontend-Code schreiben (allgemein) | `ui-ux-pro-max` | Auto-aktiviert bei UI-Arbeit — 67 Styles, 161 Paletten, Tailwind-nativ |
| Anti-Slop-Overlay | `taste` | Als Zusatz zu ui-ux-pro-max wenn generisches Output verhindert werden soll |
| Neues Design von Grund auf | `design-consultation` | Erstellt DESIGN.md als Design-Quelle — vor größeren Redesigns |
| Design-Varianten explorieren | `design-shotgun` | Mehrere Varianten generieren + vergleichen |
| Design-Kritik auf live Code | `design-review` | Nach dem Bauen — findet Spacing/Hierarchy/Slop-Probleme |
| Design-Plan reviewen (vor Umsetzung) | `plan-design-review` | Vor dem Bauen |
| Prototyp / Animation | `huashu-design` | HTML-Prototyping, Motion Design, GSAP-Animationen |
| Tailwind-Komponenten schnell | `shadcnblocks-skill` | 1.338 vorgefertigte Tailwind-Blöcke |
| Norex Design-System anwenden | `/norex-design` | **Primärer Design-Skill — vor jeder UI-Arbeit aktivieren** |
| Brand-Token-System neu generieren | `hue` | Nur bei größeren Brand-Änderungen nötig — `norex-design` Skill updaten |
| UI-Details polieren (Shadows, Radius, Animationen) | `boraoztunc/make-interfaces-feel-better` | Nach dem Bauen — Typography, Surfaces, Micro-Interactions |

### Content, Wording & Marketing Skills

| Aufgabe | Skill | Hinweis |
|---|---|---|
| Brand Voice extrahieren / anwenden | `copythat/brand-voice` | Vor jeder größeren Copy-Arbeit — Norex Tonalität festhalten |
| Seiten-Copy schreiben (Startseite, Leistungen, Über uns) | `copythat/seo-web-copy` | Deutsch, SEO-optimiert, Brand Voice integriert |
| Copy schreiben (Conversion-fokus, englisch-first) | `boraoztunc/copywriting` | Ergänzt copythat mit strikter Conversion-Logik — Output dann via copythat auf Deutsch |
| Headlines entwickeln | `copythat/headline-writer` | 10 Varianten mit Named Frameworks (PAS, AIDA etc.) |
| Copy nach Ogilvy-Prinzipien prüfen / schreiben | `boraoztunc/ogilvy` | Direct-Response-Philosophie: Positioning → Promise → Headline → Body |
| AI-Floskeln aus fertigem Copy entfernen | `boraoztunc/stop-slop` | Overlay nach jedem copythat-Output — entfernt Füllphrasen, Passive, Klischees |
| Copy auf Qualität prüfen | `copythat/copy-audit` | Scoring auf Klarheit, SEO, LLM-Readiness, Conversion |
| Conversion-Rate einer Seite optimieren | `boraoztunc/page-cro` | CRO-Analyse: Value Prop, CTA, Trust Signals, Friction — nach dem Bauen |
| Content-Strategie planen (Blog, Themen-Cluster) | `boraoztunc/content-strategy` | Was soll wann zu welchem Zweck erstellt werden |
| Copy für KI-Zitierbarkeit optimieren (AEO/GEO) | `copythat/llm-optimisation` | Für ChatGPT/Perplexity-Sichtbarkeit |
| Landing Page Struktur (conversion-optimiert) | `copythat/landing-page` | Struktur + Copy für neue Landing Pages |
| E-Mail-Sequenz (Onboarding, Sales, Re-engagement) | `copythat/email-sequence` | Multi-Step-Sequenzen auf Deutsch |
| Ad Copy (Google, Meta, LinkedIn) | `copythat/ad-copy` | Innerhalb Plattform-Limits, auf Deutsch |
| Komplette Landing Page (Copy + Design + Build) | `landing-page-factory` | Volle Pipeline — nutzt intern copythat + design-skills |
| Positionierung / Differenzierung definieren | `startup-positioning` | April-Dunford-Framework — für Messaging-Grundlage |
| Go-to-Market Strategie | `gtm-strategy` | Channels, Messaging, Launch-Timeline |
| Idee → Briefing (vor Copy-Arbeit) | `brainstorming` | Pflicht bevor Landing Pages oder Kampagnen gebaut werden |

**Wichtig:** `copythat/seo-audit` NICHT mehr verwenden — durch `superseo/page-audit` ersetzt.

---

## Auto-Context Rule — NON-NEGOTIABLE

Nach JEDER Antwort die substantielle Arbeit enthält (Datei geschrieben, Seite gebaut, Entscheidung getroffen):

1. `tasks/current_task.md` aktualisieren — Zeitstempel, aktiver Task, letzter Schritt, nächster konkreter Schritt
2. Wenn Phase gewechselt: auch `memory/status.md` (falls vorhanden) aktualisieren

Kein Aufschieben auf Session-Ende — nach jeder substantiellen Antwort sofort.
