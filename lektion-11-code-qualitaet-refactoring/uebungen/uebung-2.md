# Übung 2 — Chaotische To-Do-Liste refactoren

**Schwierigkeit:** Mittel
**Zeit:** ca. 25 Minuten

## Aufgabe

Refactor die To-Do-Liste in `loesungen/uebung-2/vorher/` — komplex und chaotisch.

## Was ist alles falsch?

Der Code in `vorher/script.js` hat:

- [ ] **Grosse Funktionen** (submit-Handler macht 15 verschiedene Dinge)
- [ ] **State + DOM parallel** verwaltet (Bug-Quelle!)
- [ ] **`innerHTML +=`** überall (Sicherheit + Performance)
- [ ] **Magic Strings** ("todo-items", "erledigt", ...)
- [ ] **Kein Fehler-Handling**
- [ ] **Copy-Paste-Code** für Löschen und Toggle

## Refactoring-Ziele

- [ ] **State-Array als Wahrheit** (aus Lektion 9)
- [ ] **`render()`-Funktion** baut DOM aus State
- [ ] **Actions** (`neuerTask`, `loescheTask`, `toggleTask`) als eigene Funktionen
- [ ] **`speichern()` / `laden()`** getrennt
- [ ] **Konstanten** für Storage-Key
- [ ] **DRY** — Element-Bau in einer Funktion
- [ ] **Alle Funktionen** haben klare, einzelne Verantwortung

## Struktur, die du anstreben solltest

```javascript
// Konstanten
const SPEICHER_KEY = "...";

// DOM-Referenzen
const form = ...;

// State
let tasks = [];

// Storage
function speichern() { ... }
function laden() { ... }

// Render
function render() { ... }
function baueTaskElement(task) { ... }

// Actions
function neuerTask(text) { ... }
function loescheTask(id) { ... }
function toggleTask(id) { ... }

// Events
form.addEventListener(...);

// Start
laden();
render();
```

## Refactoring-Ablauf

1. **Erst verstehen**: Lies den alten Code, führ ihn im Browser aus, was macht er?
2. **Struktur planen**: Welche Funktionen sollten existieren?
3. **Neuen Code parallel** schreiben — nicht direkt löschen
4. **Umbau** in kleinen Schritten
5. **Testen** nach jedem Schritt

## Wichtig

**Das Verhalten muss identisch bleiben.** User merkt nichts vom Refactoring — nur du und die nächsten Entwickler.

Wenn nach dem Refactoring plötzlich was anders funktioniert → **Bug eingebaut**, nicht refactort.

Lösung: `loesungen/uebung-2/nachher/`
