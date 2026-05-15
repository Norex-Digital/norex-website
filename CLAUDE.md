@../Norex Schaltzentrale/norex_context.md

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
- Puppeteer ist installiert unter `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome-Cache unter `C:/Users/nateh/.cache/puppeteer/`.
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

## Marken-Assets
- Vor dem Design immer den `brand_assets/`-Ordner prüfen. Dort können Logos, Farbpaletten, Style Guides oder Bilder liegen.
- Vorhandene Assets verwenden. Keine Platzhalter wenn echte Assets verfügbar sind.
- Logo vorhanden → verwenden. Farbpalette definiert → exakt diese Werte nutzen, keine eigenen Farben erfinden.

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

## Deploy Configuration (Stand 2026-05-15)

- **Platform:** Vercel
- **Vercel-Projekt-ID:** `prj_W8ADfFRtg4BhfgNySfnJSJNyYbj5` (bestätigt in `.vercel/project.json`)
- **Vercel-Org-ID:** `team_sK7m9kRhrP5QCZEFOjt0qPLk`
- **Produktions-URL:** norex-digital.de _(Domain noch nicht verbunden)_
- **Projekt-Typ:** Static HTML + Tailwind CDN (kein Build-Step, kein Framework)
- **Git-Repo:** ⚠️ noch nicht initialisiert — kein `.git` vorhanden
- **GitHub:** ⚠️ noch nicht verbunden — Auto-Deploy noch nicht aktiv

### Nächste Schritte für vollständiges Deploy-Setup
1. `git init` im Projekt-Root
2. GitHub-Repo anlegen: `github.com/[org]/norex-website`
3. `git remote add origin https://github.com/[org]/norex-website.git`
4. Vercel im Dashboard mit GitHub-Repo verbinden
5. Domain norex-digital.de in Vercel verbinden

### Geplante Branch-Strategie (nach Git-Setup)

| Branch | Zweck | Vercel |
|---|---|---|
| `main` | Live / Production | → Production Deploy |
| `dev` | Aktive Entwicklung, Staging | → Preview-URL |
| `feature/*` | Einzelne größere Features | → Preview-URL |

**Workflow nach Setup:**
1. Änderungen in `dev` pushen → Vercel Preview-URL
2. Preview abnehmen → PR `dev` → `main` → Production live

---

## Auto-Context Rule — NON-NEGOTIABLE

Nach JEDER Antwort die substantielle Arbeit enthält (Datei geschrieben, Seite gebaut, Entscheidung getroffen):

1. `tasks/current_task.md` aktualisieren — Zeitstempel, aktiver Task, letzter Schritt, nächster konkreter Schritt
2. Wenn Phase gewechselt: auch `memory/status.md` (falls vorhanden) aktualisieren

Kein Aufschieben auf Session-Ende — nach jeder substantiellen Antwort sofort.
