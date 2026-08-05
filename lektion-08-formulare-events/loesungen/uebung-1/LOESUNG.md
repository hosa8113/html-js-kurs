# Musterlösung — Übung 1

## Was hier gemacht wurde

Eine "echte" To-Do-Liste — semantisch korrekt mit `<form>`, `submit`-Event und HTML-Validierung.

## Der wichtigste Unterschied zu Lektion 7

**Lektion 7 hatte:**
```javascript
button.addEventListener("click", () => { ... });
```

**Jetzt:**
```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();
    ...
});
```

**Was gewonnen wurde:**

1. **Enter-Taste** funktioniert automatisch — kein extra Listener nötig
2. **HTML-Validierung** greift: `minlength="2"` blockt zu kurze Einträge, `required` blockt leere
3. **Semantisch korrekt:** ein Formular sollte wie ein Formular behandelt werden
4. **Barrierefreiheit** verbessert

## `event.preventDefault()` — das wichtigste Detail

**Ohne diese Zeile:**
1. User klickt Submit
2. Browser will Formular an Server schicken
3. Da kein Server-URL → Seite lädt neu, alle Tasks weg 💀

**Mit `preventDefault()`:**
1. User klickt Submit
2. Browser wollte etwas tun → wird verhindert
3. **Unser** JS läuft, macht was wir wollen

**Merke:** Fast jeder Submit-Handler beginnt mit `event.preventDefault()`. Das ist Muskelgedächtnis.

## Warum `classList.toggle("erledigt", checkbox.checked)` mit 2 Argumenten?

```javascript
li.classList.toggle("erledigt", checkbox.checked);
```

Das zweite Argument ist die **Force-Value**:
- `true` → Klasse **wird** gesetzt (unabhängig vom aktuellen Zustand)
- `false` → Klasse **wird entfernt**

Ohne zweites Argument würde bei jedem `change` **umgeschaltet**. Das würde für die Checkbox eigentlich funktionieren (weil `change` nur bei echtem Wechsel feuert), aber mit **explizitem** `checkbox.checked` ist der Zustand garantiert synchron.

**Best Practice:** Wenn du eine Klasse an einen **bool-Wert** koppeln willst → immer mit Force-Argument.

## Der `input.trim()`-Check

```javascript
const text = input.value.trim();
if (text === "") return;
```

**Warum trotz `minlength="2"` noch prüfen?**

Weil `minlength` **Whitespace zählt**! User könnte `"  "` (2 Leerzeichen) eintippen — HTML lässt das durch. `.trim()` entfernt Whitespace, `=== ""` fängt den Fall ab.

**Sicherer immer beide** haben — HTML-Validierung UND JS-Prüfung.

## Häufige Fehler

- **`event.preventDefault()` vergessen** → Seite lädt neu, Frust
- **Listener auf Button statt Form** → funktioniert, aber Enter-Taste geht nicht
- **`input.value` ohne `.trim()`** → User kann Leerzeichen-Einträge machen
- **`checkbox.checked` als String verglichen** → Boolean, NICHT `checkbox.checked === "true"`

## Was fehlt noch für eine "richtige" App?

- **Persistenz** — nach Reload sind alle Tasks weg. Kommt in Lektion 9 mit `localStorage`
- **Undo** — versehentlich gelöschten Task wiederherstellen
- **Sortieren** — nach Datum, Alphabet, ...
- **Bearbeiten** — Doppelklick auf Text → Input → Enter speichert

Alles machbar mit dem, was du jetzt kannst. Genau das ist der Punkt: **Grundlagen sitzen, jetzt kannst du iterieren.**
