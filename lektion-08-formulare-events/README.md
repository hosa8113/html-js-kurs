# Lektion 8 — Formulare & Events: die richtige To-Do-Liste

**Dauer:** 90 Minuten
**Vorher:** Lektionen 5–7 abgeschlossen
**Am Ende:** Eine echte, saubere To-Do-Liste — bauen wie es die Profis machen.

---

## Lernziele

Nach dieser Lektion kannst du:

- Formulare mit `<form>`, `<input>`, `<textarea>`, `<select>` bauen
- Verschiedene Input-Typen einsetzen (text, email, number, checkbox, radio, date)
- Formulare per JavaScript verarbeiten (`submit`-Event)
- Verstehen, warum `event.preventDefault()` wichtig ist
- Das Event-Objekt nutzen (`event.target`, `event.key`, `event.preventDefault`)
- Verschiedene Events verstehen: `click`, `submit`, `input`, `change`, `focus`, `blur`, `keydown`
- HTML-basierte Formular-Validierung nutzen (`required`, `min`, `pattern`)

## Vorwissen

- Lektionen 5–7 (JS-Basics, DOM-Manipulation)

---

## Theorie (25 Minuten)

### Warum überhaupt Formulare?

Bis jetzt haben wir Inputs direkt mit `<input>` + `<button>` gebaut. Funktioniert. Aber:

- Formulare gruppieren Felder logisch
- **Enter-Taste** löst automatisch Submit aus
- Browser bietet **Validierung** gratis (`required`, `min`, `max`, `pattern`)
- **Barrierefreiheit** (Screenreader verstehen Formulare)
- Standard-Muster, das jeder Entwickler kennt

### Das `<form>`-Element

```html
<form id="mein-form">
    <label for="name">Dein Name:</label>
    <input type="text" id="name" name="name" required>

    <button type="submit">Absenden</button>
</form>
```

**Wichtig:**
- `<label for="id">` verbindet Label mit Input — Klick aufs Label fokussiert das Input
- `name`-Attribut brauchst du später (bei Server-Übermittlung); für reines JS reicht `id`
- `type="submit"` macht den Button zum "Absenden-Button" — Enter im Formular löst ihn aus

### Der `submit`-Event

```javascript
const form = document.getElementById("mein-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();   // WICHTIG!

    const name = document.getElementById("name").value;
    console.log("Name:", name);
});
```

**Warum `event.preventDefault()`?**

Standardmässig lädt der Browser die Seite beim Submit **neu** (aus historischen Gründen — früher gingen Formulare an einen Server). `preventDefault()` verhindert das.

Ohne diese Zeile funktioniert dein JS **nicht** — die Seite lädt neu, dein State ist weg.

### Das `event`-Objekt

Jeder Event-Listener bekommt automatisch ein `event`-Objekt. Es enthält:

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();          // Standard-Verhalten stoppen
    event.target;                    // Das Element, das das Event ausgelöst hat
    event.type;                      // "submit"
});

input.addEventListener("keydown", (event) => {
    event.key;                       // "Enter", "a", "ArrowUp", ...
    event.shiftKey;                  // true, wenn Shift gehalten wird
});
```

### Die wichtigsten Input-Typen

```html
<input type="text">        <!-- normaler Text -->
<input type="email">       <!-- E-Mail, mit Validierung -->
<input type="password">    <!-- versteckter Text -->
<input type="number">      <!-- nur Zahlen, mit min/max -->
<input type="date">        <!-- Datum-Picker -->
<input type="checkbox">    <!-- Häkchen -->
<input type="radio">       <!-- Auswahl-Kreis (in Gruppe) -->
<input type="range">       <!-- Slider -->
<input type="color">       <!-- Farbwähler -->
<input type="file">        <!-- Datei-Upload -->

<textarea></textarea>      <!-- mehrzeiliger Text -->

<select>                   <!-- Dropdown -->
    <option value="a">A</option>
    <option value="b">B</option>
</select>
```

### Werte auslesen

```javascript
input.value              // Text-Input, Textarea, Number, Date
checkbox.checked         // Checkbox: true/false
radio.checked            // Radio: true/false
select.value             // Ausgewählter Wert im Dropdown
```

### HTML-Validierung — gratis!

```html
<input type="email" required>                    <!-- muss ausgefüllt sein -->
<input type="text" minlength="3" maxlength="20"> <!-- Länge -->
<input type="number" min="1" max="100">          <!-- Zahlen-Range -->
<input type="text" pattern="[A-Z][a-z]+">        <!-- Regex -->
```

Der Browser blockt das Submit automatisch, wenn was nicht stimmt, und zeigt eine Fehlermeldung.

**Vorteil:** Kein JS nötig für Basis-Validierung.
**Nachteil:** Aussehen der Fehlermeldung ist Browser-abhängig.

### Weitere wichtige Events

```javascript
input.addEventListener("input", (e) => { ... });   // bei jedem Tippen
input.addEventListener("change", (e) => { ... });  // wenn Fokus verlassen wird (bei Checkbox: sofort)
input.addEventListener("focus", (e) => { ... });   // wenn User reinklickt
input.addEventListener("blur", (e) => { ... });    // wenn User rausklickt
button.addEventListener("dblclick", (e) => { ... }); // Doppelklick
document.addEventListener("keydown", (e) => { ... }); // Tastendruck irgendwo
```

### Event Delegation — der Trick für dynamische Listen

**Problem:** Du hast 100 Löschen-Buttons in einer Liste. Musst du 100 Listener binden?

**Nein.** Nutze **Event Delegation**:

```javascript
// Ein Listener auf dem Container
liste.addEventListener("click", (event) => {
    if (event.target.classList.contains("loesch-btn")) {
        event.target.closest("li").remove();
    }
});
```

**Wie das funktioniert:**
- Ein Klick auf einen Button "sprudelt" durch den DOM-Baum nach oben
- Der Listener auf dem Container fängt ihn ab
- Wir prüfen, ob das Event von einem Löschen-Button kam

**Vorteil:** Funktioniert auch für Buttons, die **später** dazukommen. Weniger Speicher.

**Nachteil:** Etwas komplexer. Für den Anfang: direkte Listener auf dem Element sind okay.

---

## Live-Demo (30 Minuten)

Wir bauen eine **echte To-Do-Liste** mit:

- `<form>` mit `<input>` + `<button type="submit">`
- Submit-Event mit `preventDefault`
- Neuer Task → in Liste einfügen (aus Lektion 7)
- Checkbox pro Task → Toggle "erledigt"
- Löschen-Button pro Task
- Filter: "Alle / Offen / Erledigt"
- Zähler unten: "3 von 8 offen"

Beispiel liegt unter `beispiel/`.

---

## Übungen (45 Minuten)

- **Übung 1:** Echte To-Do-Liste mit `<form>` (geführt)
- **Übung 2:** Task mit Priorität und Kategorie (mittel)
- **Übung 3:** Registrierungs-/Kontakt-Formular mit Validierung (frei)

---

## Bonus — Custom Validierung

Statt HTML-`required` selbst validieren:

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();

    if (text.length < 3) {
        alert("Zu kurz! Mindestens 3 Zeichen.");
        input.focus();
        return;
    }

    // OK, weitermachen
});
```

Vorteil: eigene Fehlermeldungen, eigenes Design, komplexere Regeln.

---

## Checkliste vor der nächsten Lektion

- [ ] Ich weiss, warum `event.preventDefault()` bei `submit` wichtig ist
- [ ] Ich habe ein `<form>` mit `<input>` + `<button type="submit">` gebaut
- [ ] Ich kenne mindestens 5 Input-Typen
- [ ] Ich habe `.value`, `.checked` und `.textContent` in verschiedenen Kontexten benutzt
- [ ] Ich kenne den Unterschied zwischen `input` und `change` Event
- [ ] Meine To-Do-Liste funktioniert vollständig

**Nächste Lektion:** `localStorage` — deine To-Do-Liste bleibt auch nach Reload da. 💾
