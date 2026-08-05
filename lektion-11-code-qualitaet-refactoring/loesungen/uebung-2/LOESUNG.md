# Musterlösung — Übung 2

## Der grosse Refactor

Der Vorher-Code hatte fundamentale Probleme:

### Problem 1: State + DOM parallel

**Vorher:**
- `items`-Array **und** DOM werden **getrennt** aktualisiert
- Bei jedem Klick: Array ändern, dann DOM manuell neu bauen
- 3 fast identische Bau-Blöcke (`for`-Schleifen mit `innerHTML +=`)

**Nachher:**
- `tasks`-Array ist **einzige Wahrheit**
- `render()` baut DOM **jedes Mal komplett neu** aus State
- **Ein Ort** für DOM-Bau, keine Duplikate

### Problem 2: `innerHTML +=` überall

**Vorher:**
```javascript
document.getElementById("l").innerHTML +=
    '<li class="' + (items[i].e ? 'done' : '') + '">' +
    '<input type="checkbox" ' + (items[i].e ? 'checked' : '') + ' onchange="tog(' + i + ')">' +
    ...
```

**Probleme:**
- **XSS-Gefahr**: User könnte `<script>` als Task eingeben
- **`onchange="tog(...)"`** → globale Funktion nötig, verbindet HTML mit JS-Namen
- **Bei jedem Aufruf** wird das ganze DOM neu geparst → langsam

**Nachher:**
```javascript
const li = document.createElement("li");
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.addEventListener("change", () => toggleTask(task.id));
// ...
```

- **Sicher**: `textContent` statt `innerHTML` bei User-Input
- **Kein globaler Scope**: Listener direkt gebunden
- **Klar strukturiert**: eine Zeile pro Aktion

### Problem 3: Kryptische Feldnamen

**Vorher:**
```javascript
items.push({ t: t, e: false });   // was ist t? was ist e?
```

**Nachher:**
```javascript
tasks.push({
    id: Date.now(),
    text: text,
    erledigt: false
});
```

**Regel:** In `localStorage` gespeicherte Objektfelder sollten die **`SPEICHER_KEY-v2`**-Notation nutzen — wenn du das Format änderst, kannst du sauber migrieren.

### Problem 4: Index als ID

**Vorher:** `onchange="tog(0)"`, `onchange="tog(1)"`, ...

Wenn du Task 1 löschst → alle nachfolgenden verschieben sich → die alten Indizes stimmen nicht mehr.

**Nachher:** `Date.now()` als ID → jede Task hat ihre **stabile ID** unabhängig von Position.

### Problem 5: Kein `<form>`

**Vorher:** `<input>` + `<button>`, Enter-Taste macht nichts.

**Nachher:** `<form>` mit `submit`-Event — Enter-Taste funktioniert, HTML-Validierung greift.

## Metriken

|                     | Vorher | Nachher |
|---------------------|--------|---------|
| Zeilen JS           | ~85    | ~95     |
| DOM-Bau-Blöcke      | 3 (dupliziert) | 1 (Funktion) |
| Globale Funktionen  | 2 (tog, del) | 0 |
| `innerHTML +=`      | 3× | 0 |
| Testbare Funktionen | ~2 | ~7 |

**Nachher ist minimal länger** — aber jede Funktion tut **eine Sache**, ist wartbar und erweiterbar.

## Was jetzt trivial zu erweitern ist

**Filter (Alle/Offen/Erledigt):**
```javascript
function render() {
    let sichtbar = tasks;
    if (aktiverFilter === "offen") sichtbar = tasks.filter((t) => !t.erledigt);
    // ...
    sichtbar.forEach((t) => liste.append(baueTaskElement(t)));
}
```

**Task bearbeiten (Doppelklick):**
```javascript
textSpan.addEventListener("dblclick", () => {
    // Text-Span durch Input ersetzen
});
```

**Sortieren:**
```javascript
tasks.sort((a, b) => a.erledigt - b.erledigt);
```

Alle diese Features gehen **ohne den grundlegenden Code zu ändern**. Beim Vorher-Code müsste jedes Feature den DOM-Bau-Block modifizieren, an 3 Stellen.

## Der wichtigste Lernpunkt

**Refactoring ist Investition.**

Der refactored Code ist **jetzt** nicht spektakulär anders. Aber:
- **Bugs finden** ist 10× einfacher
- **Features hinzufügen** geht mit einer Zeile statt einer halben Stunde
- **Andere lesen** deinen Code und verstehen ihn sofort
- **Du selbst** kannst nach 3 Monaten weitermachen

**Die Zeit, die du beim Refactoring "verlierst"** sparst du 10× beim nächsten Feature.
