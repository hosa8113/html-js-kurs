# Übung 2 — To-Do-Liste mit Persistenz

**Schwierigkeit:** Mittel
**Zeit:** ca. 25 Minuten

## Aufgabe

Bau deine To-Do-Liste aus Lektion 8 um — so, dass sie im **State → Render** Pattern arbeitet und in `localStorage` gespeichert wird.

**Ziel:** Reload → alles ist noch da.

## Anforderungen

- [ ] **State-Array** `tasks` als "einzige Wahrheit"
- [ ] Jeder Task ist ein **Objekt**: `{ id, text, erledigt }`
- [ ] **`render()`-Funktion** baut das DOM komplett neu aus State
- [ ] Nach jeder Änderung: **State aktualisieren → speichern → render**
- [ ] Beim Laden: **`laden()` + `render()`**
- [ ] "Alles löschen"-Button mit Bestätigung (`confirm(...)`)

## Der refactor

**Vorher (Lektion 8):**
```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();

    // Element direkt bauen und einfügen
    const li = document.createElement("li");
    li.textContent = text;
    liste.append(li);
});
```

**Nachher (Lektion 9):**
```javascript
let tasks = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") return;

    tasks.push({
        id: Date.now(),
        text: text,
        erledigt: false
    });

    speichern();
    render();
});

function render() {
    liste.innerHTML = "";
    tasks.forEach((task) => {
        // Element bauen basierend auf task-Objekt
    });
}
```

**Wichtig:** `Date.now()` gibt eine eindeutige Zahl (Timestamp in Millisekunden) — super als schnelle **ID**.

## Warum das State-Pattern besser ist

**Ohne State-Pattern:**
- Speichern? "Ich müsste alle `<li>`-Texte durchgehen und ein Array bauen..."
- Löschen? "Element im DOM finden und entfernen"
- Filter? "CSS-Klassen manuell toggeln"

**Mit State-Pattern:**
- Speichern? `JSON.stringify(tasks)`. Fertig.
- Löschen? `tasks = tasks.filter((t) => t.id !== id)`. Dann `render()`.
- Filter? Ein `tasks.filter(...)` in `render()`.

**State bearbeiten → automatisch neu rendern.** Das ist die Essenz moderner Frontend-Architektur.

## Die 3 Kern-Funktionen

```javascript
function render() {
    // State → DOM
}

function speichern() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function laden() {
    tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
}
```

Und der Ablauf:
```javascript
// Start:
laden();
render();

// Bei Änderung:
tasks.push(...);  // oder tasks = tasks.filter(...) etc.
speichern();
render();
```

## Häufige Fehler

- **`render()` NACH `speichern()` vergessen** → Änderung ist im Speicher, aber nicht sichtbar
- **`JSON.parse(null)`** → Fehler. Immer mit Fallback: `|| "[]"`
- **Task-ID als Index verwendet** → nach Löschen verschieben sich die Indices. **Nimm `Date.now()` oder Zufalls-ID**.
- **State und DOM parallel führen** → Chaos. Immer nur State bearbeiten, `render()` erledigt den Rest.

## Bonus

- **Filter-Buttons** (Alle/Offen/Erledigt) — nur `render()` anpassen, filtert `tasks.filter(...)` vor dem Anzeigen
- **Anzahl-Zähler** aus `tasks.filter(...).length`
- **Export als JSON** — Download-Button, der `JSON.stringify(tasks)` als Datei anbietet

Lösung: `loesungen/uebung-2/`
