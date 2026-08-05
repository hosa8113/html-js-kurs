# Musterlösung — Übung 2

## Was hier gemacht wurde

Die vollständige To-Do-Liste — refaktoriert auf das State → Render Pattern.

Enthält alles was du für eine "richtige" App brauchst:
- **State-Array** als Wahrheit
- **`render()`** baut UI aus State
- **`speichern()` / `laden()`** über `localStorage`
- **Filter** (Alle / Offen / Erledigt)
- **Empty-State** für leere Liste
- **Bestätigungs-Dialog** vor "Alle löschen"

## Der Code-Aufbau

**Struktur, die sich für JEDE State-basierte App eignet:**

```javascript
// 1. Konstanten & State
const SPEICHER_KEY = "...";
let tasks = [];

// 2. Storage
function speichern() { ... }
function laden() { ... }

// 3. Render
function render() { ... }
function updateStatus() { ... }

// 4. Actions (State-Änderungen)
function neuerTask(text) { ... }
function toggleTask(id) { ... }
function loescheTask(id) { ... }

// 5. Event Listener
form.addEventListener(...);
btnClear.addEventListener(...);

// 6. Start
laden();
render();
```

**Diese Struktur** ist im Kern das, was Frameworks (React, Vue) mit Komponenten und Hooks abstrahieren. Solange du sie im Kopf hast, kannst du auch ohne Framework saubere Apps bauen.

## Warum `Date.now()` als ID?

```javascript
tasks.push({
    id: Date.now(),   // ← z.B. 1725184623456
    text: text,
    erledigt: false
});
```

- **Eindeutig**: Millisekunden-Timestamp, praktisch nie zwei gleiche
- **Sortierbar**: nach ID = nach Erstellungszeit
- **Kein extra Counter** nötig

**Alternative:** `crypto.randomUUID()` für "richtige" UUIDs. Overkill für lokale To-Dos.

## Warum nicht Index als ID?

**Klassischer Bug-Fänger:**

```javascript
// SCHLECHT
tasks.forEach((task, index) => {
    loesch.addEventListener("click", () => {
        tasks.splice(index, 1);   // benutzt Index!
    });
});
```

**Was passiert:**
- Task 3 löschen → Array ist neu → Indices verschieben sich
- Aber der Event-Listener von Task 4 kennt noch seinen alten Index → löscht falsches Element

**Mit ID:**
```javascript
loesch.addEventListener("click", () => loescheTask(task.id));

function loescheTask(id) {
    tasks = tasks.filter((t) => t.id !== id);
    // ...
}
```

Egal wie sich das Array ändert — die ID gehört zu **einem** Task und bleibt.

## `find` vs `filter` — kurz erklärt

```javascript
tasks.find((t) => t.id === 5);       // → das eine Objekt (oder undefined)
tasks.filter((t) => t.id === 5);     // → Array (evtl. leer)
tasks.filter((t) => t.id !== 5);     // → Array ohne dieses eine → super zum "Löschen"
```

Merke:
- `find` = suche das **erste passende Element**
- `filter` = suche **alle passenden Elemente**
- `filter(!== ...)` = alle **ausser** — perfekt zum Entfernen

## Der Filter-Trick in `render()`

```javascript
let sichtbar = tasks;
if (aktiverFilter === "offen")   sichtbar = tasks.filter((t) => !t.erledigt);
if (aktiverFilter === "erledigt") sichtbar = tasks.filter((t) => t.erledigt);
```

**State bleibt komplett** — `tasks` enthält immer alle. Wir zeigen nur eine **View** davon.

Wenn der User "Alle" klickt, sind alle Tasks wieder da — nichts verloren.

## Empty States sind wichtig

```javascript
if (sichtbar.length === 0) {
    // Zeige "Keine Tasks in dieser Ansicht"
}
```

**Warum wichtig?** Wenn die Liste leer ist und du nichts anzeigst, denkt der User: "Ist die App kaputt?"

**Immer** einen Empty-State haben:
- Bei komplett leerem State: "Fang an!"
- Bei Filter ohne Ergebnisse: "Nichts hier"
- Bei API-Fehler: "Konnte nicht laden"

## Der Reload-Test

1. Ein paar Tasks eingeben
2. Ein paar abhaken
3. Filter "Offen" wählen
4. **F5 drücken** (Reload)
5. Sollte alles noch da sein — inklusive Filter

Falls **nicht:**
- Filter-State wird nicht gespeichert (bewusste Design-Entscheidung — man will nach Reload meist "Alle" sehen)
- Wenn du willst, dass auch der Filter überlebt: `localStorage.setItem("filter", aktiverFilter)`

## Häufige Fehler

- **`speichern()` vergessen** → nur im RAM, nach Reload weg
- **`render()` vergessen** → State ist geändert, aber UI zeigt alten Stand
- **Nicht als Objekte gespeichert**, sondern nur Texte → Können später keine zusätzlichen Felder (`erledigt`, `datum`) haben
- **State und DOM parallel führen** → früher oder später inkonsistent

## Was fehlt noch für eine "professionelle" App?

- **Server-Sync** — mehrere Geräte, mehrere User → kommt mit `fetch` in Lektion 10
- **Konflikte** wenn zwei Geräte gleichzeitig ändern
- **Undo/Redo**
- **Kategorien / Labels**
- **Drag & Drop** zum Umsortieren
- **Suche** in Tasks
- **Erinnerungen / Deadlines**

Alles machbar auf diesem Fundament — jetzt ist die Reise Feature-Level, nicht mehr Grundlagen.
