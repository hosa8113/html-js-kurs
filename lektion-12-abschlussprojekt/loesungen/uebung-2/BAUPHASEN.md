# Bauphasen — Beispiel: QuickNotes

Wie ein realistisches Bauprojekt Schritt für Schritt entsteht.

Jede Phase ist **1-2 Stunden Arbeit** und endet mit einer **lauffähigen App** — nur mit weniger Features.

---

## v0.1 — "Hello Notes" (30 min)

**Ziel:** Was Sichtbares im Browser.

**Was rein kommt:**
- HTML-Grundgerüst
- Titel + statisches Formular (funktioniert noch nicht)
- Eine hartcodierte Beispiel-Notiz als HTML
- Minimales CSS

**Test:** Live Server starten → Seite lädt, sieht wie eine App aus (auch wenn nichts funktioniert).

**Commit:** `Add: HTML-Grundgerüst und Beispiel-Notiz`

---

## v0.2 — "Notiz erstellen" (1h)

**Ziel:** Formular funktioniert.

**Was rein kommt:**
- JavaScript-Grundgerüst
- Formular-Submit-Handler (mit `event.preventDefault`)
- Neue Notiz wird per `document.createElement` in den Container eingefügt
- Nach Submit: Formular leeren

**Was fehlt noch:**
- Notizen verschwinden bei Reload (kein localStorage)
- Löschen geht nicht
- Kein CSS für die Notiz-Karten

**Test:** 3 Notizen eintippen, alle erscheinen als Karten.

**Commit:** `Add: Notiz-Erstellung via Formular`

---

## v0.3 — "Persistenz" (30 min)

**Ziel:** Notizen überleben Reload.

**Was rein kommt:**
- State-Array `notizen`
- `speichern()` / `laden()` mit localStorage
- `render()` Funktion die aus State DOM baut
- Refactor: alle Actions gehen über State → speichern → render

**Test:** Notiz eintippen → Reload → Notiz ist noch da.

**Commit:** `Add: localStorage-Persistenz und render()-Pattern`

---

## v0.4 — "Löschen" (30 min)

**Ziel:** User kann Notizen entfernen.

**Was rein kommt:**
- Löschen-Button pro Notiz (im `render()` gebaut)
- Click-Handler mit `confirm(...)` Bestätigung
- Notiz per ID aus Array filtern

**Test:** Notiz löschen → verschwindet → Reload → immer noch weg.

**Commit:** `Add: Notiz löschen mit Bestätigung`

---

## v0.5 — "Kategorien" (1h)

**Ziel:** Struktur bringen.

**Was rein kommt:**
- Dropdown im Formular für Kategorie
- Badge auf jeder Notiz-Karte mit Kategorie-Namen
- Filter-Buttons oben
- `render()` respektiert den aktiven Filter

**Test:** Notizen mit verschiedenen Kategorien erstellen → Filter klicken → nur passende zeigen.

**Commit:** `Add: Kategorien mit Filter-Buttons`

---

## v0.6 — "Suche" (45 min)

**Ziel:** Bei vielen Notizen finden.

**Was rein kommt:**
- Suchfeld oben rechts
- `input`-Event auf Suchfeld
- `render()` filtert Notizen zusätzlich nach Suchbegriff
- Empty-State: "Kein Treffer"

**Test:** 10 Notizen erstellen, nach einem Wort suchen — nur passende zeigen.

**Commit:** `Add: Live-Suche über Titel und Text`

---

## v0.7 — "Polituren" (1h)

**Ziel:** Fühlt sich professionell an.

**Was rein kommt:**
- Zeitstempel-Anzeige ("vor 5 Minuten")
- Fokus-Management (Enter fokussiert wieder Input)
- Kleine Animation bei neuen Karten
- Empty-State-Design ("Noch keine Notizen — leg los!")
- Farb-Codierung nach Kategorie (border-left)
- Hover-Effekt auf Karten

**Test:** Alles fühlt sich smooth an. Vergleich mit v0.1 — Riesenunterschied.

**Commit:** `Polish: Animations, Empty-States, Farbcodierung`

---

## v1.0 — "Release" (1h)

**Ziel:** Projekt ist präsentierbar.

**Was rein kommt:**
- README.md mit Screenshot und Beschreibung
- LICENSE (optional, MIT ist einfach)
- Aufgeräumter Code (keine `console.log` mehr)
- Auf GitHub pushen
- GitHub Pages aktivieren

**Test:** Freund/Familie das Projekt zeigen → 3 Minuten intuitiv nutzen können.

**Commit:** `Release: v1.0 — README, cleanup, deploy`

---

## Bonus-Versionen (danach)

**v1.1 — Bearbeiten**
Doppelklick auf Titel/Text → wird zu Input → Enter speichert

**v1.2 — Dark Mode**
Theme-Toggle mit CSS-Variablen und localStorage-Präferenz

**v1.3 — Export**
"Export"-Button → JSON-Datei mit allen Notizen downloaden

**v2.0 — Sync**
Backend hinzufügen, mehrere Geräte, Login — aber das ist ein anderer Kurs.

---

## Warum diese Reihenfolge?

1. **Sichtbarer Fortschritt** — jede Phase ist demonstrierbar
2. **Motivation** — nach v0.1 hast du schon "was"
3. **Fail-Safe** — wenn du bei v0.4 aufhören musst, hast du **trotzdem eine funktionierende App**
4. **Testbarkeit** — pro Phase weißt du genau, was du testest

**Anti-Muster:** "Ich baue erst mal 3 Tage lang schön und dann kommt die Logik" — führt fast immer zu halb-fertigen Projekten.

**Muster:** "Rudimentär lauffähig → Feature dazu → besser → Feature dazu → besser".

---

## Diese Struktur funktioniert für JEDES Projekt

Nimm dein eigenes Projekt und teil es genauso auf:

1. Grundgerüst (statische Seite)
2. Erste funktionierende Kern-Aktion
3. Persistenz oder Daten
4. Zweite Kern-Aktion
5. Feature 1
6. Feature 2
7. Politur
8. Release

**Total: ~8 Bauphasen, jede 30-90 min.**

Bei Frust in Phase 4: Rückblick auf Phase 1 — **da ist schon was**. Neuer Anlauf.
