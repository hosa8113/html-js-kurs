# Übung 2 — To-Do mit Priorität und Kategorie

**Schwierigkeit:** Mittel
**Zeit:** ca. 20 Minuten

## Aufgabe

Erweitere die To-Do-Liste um **strukturierte Felder**: jedes Task bekommt eine **Priorität** (Dropdown) und eine **Kategorie** (Radio-Buttons).

## HTML-Vorlage

```html
<form id="form">
    <input type="text" id="text" placeholder="Task..." required>

    <label>
        Priorität:
        <select id="prio">
            <option value="niedrig">🟢 Niedrig</option>
            <option value="mittel" selected>🟡 Mittel</option>
            <option value="hoch">🔴 Hoch</option>
        </select>
    </label>

    <fieldset>
        <legend>Kategorie:</legend>
        <label><input type="radio" name="kategorie" value="arbeit" checked> Arbeit</label>
        <label><input type="radio" name="kategorie" value="privat"> Privat</label>
        <label><input type="radio" name="kategorie" value="schule"> Schule</label>
    </fieldset>

    <button type="submit">Hinzufügen</button>
</form>

<ul id="liste"></ul>
```

## Anforderungen

- [ ] Jeder Task wird mit Priorität und Kategorie angezeigt
- [ ] Priorität wird visuell dargestellt (Farbe / Emoji / Badge)
- [ ] Kategorie als kleiner Tag/Chip neben dem Text
- [ ] `event.preventDefault()` am Submit
- [ ] Nach Submit: Form-Felder werden zurückgesetzt (nutze `form.reset()`)

## Werte auslesen

```javascript
const text = document.getElementById("text").value;
const prio = document.getElementById("prio").value;

// Radio: aus mehreren mit demselben name den checked finden
const kategorieRadio = document.querySelector("input[name='kategorie']:checked");
const kategorie = kategorieRadio.value;
```

**Alternative — mit `FormData`** (moderner, weniger Code):

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const text = data.get("text");
    const prio = data.get("prio");
    const kategorie = data.get("kategorie");

    // Alle Felder auf einmal — schön.
});
```

Beide funktionieren. `FormData` ist eleganter, wenn du viele Felder hast.

## Task-Element bauen

```javascript
const li = document.createElement("li");
li.classList.add("prio-" + prio);   // z.B. "prio-hoch"

const badge = document.createElement("span");
badge.className = "badge";
badge.textContent = kategorie;

const textSpan = document.createElement("span");
textSpan.className = "text";
textSpan.textContent = text;

// ...
```

## CSS für Prioritäten

```css
li.prio-niedrig { border-left: 4px solid #2ecc71; }
li.prio-mittel  { border-left: 4px solid #f39c12; }
li.prio-hoch    { border-left: 4px solid #e74c3c; }

.badge {
    background-color: #ecf0f1;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
}
```

## `form.reset()` — nach Submit alles zurücksetzen

Statt jedes Feld einzeln zu leeren:

```javascript
form.reset();
```

Setzt alle Felder auf ihre Standardwerte zurück (das im HTML markierte `selected`/`checked`).

## Bonus

- **Sortierung nach Priorität** — hoch oben, niedrig unten
- **Filter nach Kategorie** — Buttons "Alle / Arbeit / Privat / Schule"
- **Anzahl pro Kategorie** anzeigen
- **Datum-Feld** hinzufügen (`<input type="date">`)

Lösung: `loesungen/uebung-2/`
