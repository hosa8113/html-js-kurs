# Lektion 9 — Arrays & localStorage

**Dauer:** 90 Minuten
**Vorher:** Lektionen 5–8 abgeschlossen
**Am Ende:** Deine To-Do-Liste bleibt nach dem Reload da — der "Aha!"-Moment.

---

## Lernziele

Nach dieser Lektion kannst du:

- Arrays sicher verwenden und die wichtigsten Methoden anwenden
- Objekte in Arrays speichern (List of Objects — das Standard-Pattern)
- Mit `localStorage` Daten im Browser speichern und laden
- Objekte/Arrays mit `JSON.stringify` / `JSON.parse` konvertieren
- Das **State → Render**-Pattern verstehen und anwenden
- Alle bisherigen Lektionen zu einer echten Web-App zusammenführen

## Vorwissen

- Lektionen 5–8

---

## Theorie (25 Minuten)

### Arrays — Vertiefung

```javascript
const zahlen = [1, 2, 3, 4, 5];

// Zugriff
zahlen[0]              // 1
zahlen[zahlen.length - 1]  // 5

// Ändern
zahlen[0] = 99;

// Länge
zahlen.length          // 5
```

### Die wichtigsten Array-Methoden

**Hinzufügen / Entfernen:**
```javascript
const arr = [1, 2, 3];

arr.push(4);           // [1, 2, 3, 4]  (ans Ende)
arr.pop();             // [1, 2, 3]     (letztes weg)
arr.unshift(0);        // [0, 1, 2, 3]  (an den Anfang)
arr.shift();           // [1, 2, 3]     (erstes weg)
```

**Iterieren:**
```javascript
arr.forEach((element) => {
    console.log(element);
});

// mit Index:
arr.forEach((element, index) => {
    console.log(index, element);
});
```

**Filtern (neues Array mit passenden Elementen):**
```javascript
const grosseZahlen = zahlen.filter((z) => z > 3);
// [4, 5]
```

**Mappen (neues Array mit transformierten Elementen):**
```javascript
const verdoppelt = zahlen.map((z) => z * 2);
// [2, 4, 6, 8, 10]
```

**Suchen:**
```javascript
const erste = zahlen.find((z) => z > 3);       // 4
const index = zahlen.findIndex((z) => z > 3);  // 3
const gibts = zahlen.includes(3);              // true
```

**Entfernen an Position (mutiert das Array!):**
```javascript
zahlen.splice(2, 1);   // entfernt 1 Element ab Index 2
```

### Arrays von Objekten — das Standard-Pattern

Statt einzelne Werte in einem Array zu speichern, meistens speichert man **Objekte**:

```javascript
const tasks = [
    { id: 1, text: "Einkaufen", erledigt: false },
    { id: 2, text: "Mail schreiben", erledigt: true },
    { id: 3, text: "Sport machen", erledigt: false }
];

// Alle offenen Tasks finden
const offene = tasks.filter((t) => !t.erledigt);

// Einen Task per ID finden
const task = tasks.find((t) => t.id === 2);

// Einen Task per ID entfernen
const neueTasks = tasks.filter((t) => t.id !== 2);

// Einen Task per ID togglen (neues Array)
const getoggelt = tasks.map((t) =>
    t.id === 2 ? { ...t, erledigt: !t.erledigt } : t
);
```

Das `{ ...t, erledigt: !t.erledigt }` ist der **Spread-Operator** — kopiert das Objekt und überschreibt ein Feld. Gewöhnt man sich schnell an.

### `localStorage` — Daten im Browser speichern

`localStorage` ist ein kleiner Speicher im Browser, der:
- **pro Domain** funktioniert
- **auch nach Reload / Schliessen** bleibt
- max. **5–10 MB** Platz hat
- **nur Strings** speichern kann

```javascript
localStorage.setItem("name", "Anna");     // speichern
localStorage.getItem("name");             // "Anna"
localStorage.removeItem("name");          // löschen
localStorage.clear();                     // alles löschen
```

**Immer als String.** Deshalb müssen Objekte und Arrays konvertiert werden.

### `JSON.stringify` und `JSON.parse`

**JSON** = **J**ava**S**cript **O**bject **N**otation. Text-Format für Daten.

```javascript
const tasks = [{ id: 1, text: "Kaufen" }];

// Objekt → String
const text = JSON.stringify(tasks);
// '[{"id":1,"text":"Kaufen"}]'

// String → Objekt
const wieder = JSON.parse(text);
// [{ id: 1, text: "Kaufen" }]
```

**Speichern:**
```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

**Laden:**
```javascript
const geladen = JSON.parse(localStorage.getItem("tasks") || "[]");
```

Der `|| "[]"` fängt den Fall ab, dass noch nichts gespeichert war → dann parsed er einen leeren Array-String und wir kriegen ein leeres Array statt Fehler.

### Das State → Render Pattern

**Bis jetzt** hast du oft direkt am DOM gearbeitet:
```javascript
btnHinzu.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;
    liste.append(li);
});
```

**Das Problem:** Wenn du Speichern/Laden dazu willst, wird's chaotisch — was ist die "Wahrheit"? Die Liste im DOM? Ein separates Array?

**Besser: State als "Source of Truth"**

```javascript
let tasks = [];

function render() {
    liste.innerHTML = "";     // DOM leeren
    tasks.forEach((task) => {
        // Element bauen und einfügen
    });
}

btnHinzu.addEventListener("click", () => {
    tasks.push({ text: input.value, erledigt: false });
    speichern();
    render();
});

function speichern() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function laden() {
    tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    render();
}

laden();
```

**Vorteile:**
- **Ein Array** ist die Wahrheit — das DOM wird daraus gebaut
- **Speichern/Laden** ist trivial
- **Neu-Rendern** ist eine Zeile
- **State-Änderungen** sind klar (nur das `tasks`-Array wird verändert)

Das ist **exakt** die Idee hinter React & Co. — nur ohne Framework.

---

## Live-Demo (30 Minuten)

Wir refaktorieren die To-Do-Liste aus Lektion 8 zu einer richtigen App:

- **State-Array** als Wahrheit
- **`render()`-Funktion** baut das DOM aus State
- **`speichern()`** schreibt in `localStorage`
- **`laden()`** holt aus `localStorage`
- Nach jeder Änderung: `speichern()` + `render()`

Beim Reload: alles wieder da. **Magic.**

Beispiel unter `beispiel/`.

---

## Übungen (45 Minuten)

- **Übung 1:** Persistenter Counter (geführt, einfach)
- **Übung 2:** To-Do-Liste mit Persistenz (mittel)
- **Übung 3:** Bookmark-Manager oder Notiz-App (frei)

---

## Bonus — DevTools für `localStorage`

DevTools → Tab **"Application"** (oder "Storage" in Firefox) → **Local Storage** → deine Domain.

Da siehst du **alle** gespeicherten Werte, kannst sie **live ändern** oder **löschen**. Perfekt zum Debuggen.

---

## Checkliste vor der nächsten Lektion

- [ ] Ich kenne `push`, `pop`, `filter`, `map`, `forEach`, `find`
- [ ] Ich verstehe den Unterschied zwischen "Array mutieren" (`push`) und "neues Array" (`filter`, `map`)
- [ ] Ich kann Objekte in einem Array speichern und darauf zugreifen
- [ ] Ich habe `localStorage.setItem` und `localStorage.getItem` verwendet
- [ ] Ich weiss, warum ich `JSON.stringify` / `JSON.parse` brauche
- [ ] Ich verstehe das State → Render Pattern
- [ ] Meine App bleibt nach Reload erhalten

**Nächste Lektion:** `fetch()` — endlich Daten aus dem Internet holen. 🌍
