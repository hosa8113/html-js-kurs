# Refactoring-Checkliste

Druck dir das aus oder speicher es als Lesezeichen. Geh es bei jedem grösseren Projekt durch.

---

## 📛 Namen

- [ ] Alle Variablen sprechend? Keine `x`, `y`, `tmp`, `data`?
- [ ] Variablen sind **Substantive** (`benutzer`, `zaehler`)?
- [ ] Funktionen sind **Verben** oder **Verb-Substantive** (`speichern`, `ladeBenutzer`)?
- [ ] Booleans starten mit **`ist-`**, **`hat-`**, **`kann-`** (`istEingeloggt`, `hatFehler`)?
- [ ] Konstanten sind **`GROSSBUCHSTABEN_MIT_UNDERSCORES`**?
- [ ] Keine Abkürzungen ausser sehr Standard (`id`, `url`, `db`)?
- [ ] Klassen-Namen im HTML/CSS sind semantisch (`benutzer-karte` statt `blaue-box`)?

## 🔧 Funktionen

- [ ] Jede Funktion macht **eine** Sache?
- [ ] Funktionen kürzer als ~15-20 Zeilen?
- [ ] Kannst du den Funktionsnamen in **einem Satz ohne "und"** erklären?
- [ ] Argumente < 4? Sonst als Objekt: `func({ a, b, c, d })`
- [ ] Keine Nebenwirkungen ohne dass der Name es andeutet? (`getWetter()` **holt** nur, sollte nichts speichern)

## 🏗️ Struktur

- [ ] **Konstanten** ganz oben (URLs, Keys, Limits)
- [ ] **DOM-Referenzen** einmal geholt, oben gesammelt
- [ ] **Funktionen nach Verantwortung** gruppiert (Storage/Rendering/Actions/Events)
- [ ] Keine `document.getElementById` mitten im Code verstreut
- [ ] Kein Code auf oberster Ebene ausser Initialisierung
- [ ] Grosse Dateien in mehrere aufgeteilt (`api.js`, `ui.js`, `main.js`)?

## 🔁 DRY (Don't Repeat Yourself)

- [ ] Kein Copy-Paste von Codeblöcken?
- [ ] Wiederkehrende Muster (Fetch + Handling) als eigene Funktion?
- [ ] Magic Numbers/Strings als Konstanten extrahiert?
- [ ] Ähnliche HTML-Templates in Bau-Funktionen?

## 💭 Kommentare

- [ ] Überflüssige Kommentare weg? (`// Counter erhöhen` bei `counter++`)
- [ ] Sinnvolle Kommentare erklären **WARUM**, nicht **WAS**?
- [ ] Alte auskommentierte Code-Blöcke gelöscht?
- [ ] JSDoc bei public API-Funktionen (optional aber gut)

## 🎯 State (falls relevant)

- [ ] State-Array als **einzige Wahrheit**?
- [ ] DOM wird aus State gerendert, nicht parallel geführt?
- [ ] Alle Änderungen laufen über **Action-Funktionen**?
- [ ] Nach jeder Änderung: **speichern + render**?

## 🎨 CSS

- [ ] Klassen-Namen semantisch (`.benutzer-karte`, nicht `.blaue-box`)?
- [ ] Farben als CSS-Variablen (`--haupt-farbe`)?
- [ ] Keine `!important` (fast nie nötig, meist Anzeichen von schlechtem CSS)
- [ ] Media Queries oder responsive Flexbox statt fixe Breiten?
- [ ] Kein doppelter CSS-Code für ähnliche Elemente?

## 🔒 Sicherheit & Robustheit

- [ ] User-Input mit `textContent` statt `innerHTML` verwendet?
- [ ] API-Keys **nicht im Frontend-Code**?
- [ ] Fehler mit `try/catch` abgefangen?
- [ ] `response.ok` bei jedem `fetch` geprüft?
- [ ] Loading-/Error-States in der UI vorhanden?

## 📄 Dokumentation

- [ ] **README.md** existiert? Erklärt was das Projekt macht?
- [ ] Beschreibung "wie starten" da (z.B. "Live Server in VS Code")?
- [ ] Screenshots oder GIF wären nice — nicht Pflicht
- [ ] Wenn du Code-Beispiele in README hast: **funktionieren die noch**?

## 🧪 Testing (im Kopf)

- [ ] **Happy Path**: Alles funktioniert bei normaler Nutzung?
- [ ] **Empty State**: Was zeigt die App bei leerem Zustand?
- [ ] **Fehlerfall**: Was passiert bei API-Fehler / kaputter Eingabe?
- [ ] **Grenzen**: Sehr lange Texte, viele Items, 0 Items?
- [ ] **Mobile**: Sieht's auf Handy-Breite noch okay aus?

## 🌳 Git (falls verwendet)

- [ ] Kleine, thematische Commits (nicht "wip" oder "fix")?
- [ ] Aussagekräftige Commit-Messages?
- [ ] `.gitignore` für nicht-versionierte Dateien (node_modules etc.)?
- [ ] `main`/`master` Branch ist immer lauffähig?

---

## Der ultimative Test

Öffne deinen Code nach dem Refactoring. Zeig ihn einem **Kollegen** oder **dir selbst in 3 Wochen**.

**Fragen:**
1. Verstehe ich, was jede Funktion tut, ohne den Code komplett lesen zu müssen?
2. Wenn ich hier eine neue Feature einbauen müsste — wüsste ich, **wo**?
3. Wenn ein Bug auftritt — wüsste ich, wo ich suchen soll?

Wenn 3× Ja → guter Code. ✅

Wenn nicht → weiter refactoren.

---

## Refactoring-Golden-Rules

1. **Kleine Schritte** — eine Änderung, dann testen
2. **Verhalten unverändert** — Refactoring ändert nur Struktur
3. **Git-Commits pro Schritt** — Backup und Nachvollziehbarkeit
4. **Namen zuerst** — 80% des Wertes kommt aus besseren Namen
5. **DRY-Falle vermeiden** — nicht zu früh abstrahieren

---

## Weiterführende Ressourcen

- **Buch:** "Clean Code" von Robert C. Martin (Klassiker, teils veraltet, aber fundamental)
- **Buch:** "Refactoring" von Martin Fowler (Bibel des Refactorings)
- **Web:** https://refactoring.guru — visuelle Erklärungen
- **YouTube:** Suche nach "clean code" — viele gute Talks

---

Diese Checkliste ist ein **lebendes Dokument**. Erweiter sie um deine eigenen Regeln, wenn du welche findest.
