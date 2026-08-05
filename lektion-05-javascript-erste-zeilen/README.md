# Lektion 5 — JavaScript: Erste Zeilen

**Dauer:** 90 Minuten
**Vorher:** Lektionen 1–4 abgeschlossen
**Am Ende:** Deine erste interaktive Webseite — Buttons, die etwas machen.

---

## Lernziele

Nach dieser Lektion kannst du:

- Erklären, was JavaScript ist und was es kann (was HTML/CSS nicht können)
- JavaScript in eine HTML-Seite einbinden (mit `<script defer>`)
- `console.log()` für Debugging nutzen
- Die DevTools-Console öffnen und lesen
- Einfache Funktionen schreiben und aufrufen
- Auf Button-Klicks reagieren mit `addEventListener`
- Text auf der Seite ändern mit `textContent`

## Vorwissen

- Lektionen 1–4 (HTML, CSS, Flexbox)
- Du weisst, wie DevTools sich öffnen (F12)

---

## Theorie (20 Minuten)

### Was ist JavaScript?

- **HTML** = Struktur (was steht auf der Seite?)
- **CSS** = Aussehen (wie sieht es aus?)
- **JavaScript** = **Verhalten** (was passiert bei Interaktion?)

**JavaScript** ist eine **echte Programmiersprache**. Es kann:
- Auf Klicks, Tastendrücke, Formulare reagieren
- Elemente auf der Seite ändern, hinzufügen, löschen
- Rechnen, Daten verarbeiten
- Mit Servern kommunizieren (später mit `fetch`)
- Kleine Spiele bauen, Animationen steuern

**Wichtig zu wissen:** JavaScript läuft im **Browser**. Jede moderne Webseite verwendet JavaScript.

### JavaScript einbinden

**Immer als externe Datei** (Best Practice):

```html
<!DOCTYPE html>
<html>
<head>
    <title>Meine Seite</title>
    <script defer src="script.js"></script>
</head>
<body>
    <!-- Inhalt -->
</body>
</html>
```

**Was macht `defer`?**
Der Browser lädt das Script **im Hintergrund**, während er die Seite aufbaut, und führt es aus, **nachdem** das HTML fertig geladen ist. Genau was du willst.

Ohne `defer` würde das Script beim Laden auf das DOM losgehen — und das DOM existiert noch nicht komplett → Fehler.

### `console.log()` — dein neuer bester Freund

```javascript
console.log("Hallo Welt!");
console.log(42);
console.log("Zwei Werte:", "abc", 123);
```

**Wo sehe ich das?**
DevTools → Tab **"Console"** → dort erscheint alles.

Merke dir das: **Wenn du nicht weisst, was passiert, log es.**

### Variablen

**Zwei Arten (nur diese zwei nutzen — nicht `var`!):**

```javascript
// let = darf später geändert werden
let punkte = 0;
punkte = 10;
punkte = punkte + 5;

// const = bleibt fix, kann nicht geändert werden
const name = "Anna";
// name = "Max";  // FEHLER!
```

**Faustregel:** Standardmässig `const`. Nur `let`, wenn du den Wert wirklich ändern musst.

### Datentypen

```javascript
const zahl = 42;                    // Number
const text = "Hallo";               // String
const wahrOderFalsch = true;        // Boolean
const nichts = null;                // absichtlich leer
const nichtGesetzt = undefined;     // noch nicht gesetzt

const liste = ["Apfel", "Birne"];   // Array
const person = { name: "Anna", alter: 16 };  // Object
```

Objects und Arrays kommen später — für heute reichen Zahl, Text und Boolean.

### Funktionen

Eine Funktion ist ein **wiederverwendbarer Codeblock**.

```javascript
function begruessen() {
    console.log("Hallo!");
}

// Aufrufen (ohne Klammern läuft nichts):
begruessen();
```

**Mit Argumenten:**

```javascript
function addiere(a, b) {
    return a + b;
}

const ergebnis = addiere(5, 3);
console.log(ergebnis);  // 8
```

### Auf Klicks reagieren

**Der Weg (den wir lernen):**

```html
<button id="mein-button">Klick mich</button>
```

```javascript
const button = document.getElementById("mein-button");

button.addEventListener("click", function() {
    console.log("Ich wurde geklickt!");
});
```

**Was passiert Schritt für Schritt:**

1. `document.getElementById("mein-button")` → holt das Button-Element aus dem HTML
2. `.addEventListener("click", ...)` → sagt: *"Wenn dieser Button geklickt wird, mach folgendes."*
3. Die Funktion darin läuft bei jedem Klick

### Text auf der Seite ändern

```html
<p id="ausgabe">Noch nichts passiert.</p>
```

```javascript
const ausgabe = document.getElementById("ausgabe");
ausgabe.textContent = "Alles klar!";
```

**`textContent`** ändert den Text eines Elements. Sofort. Live.

### Der "alte" Weg — `onclick=...` im HTML

Du wirst im Internet auch das hier sehen:

```html
<button onclick="alert('Hallo')">Klick</button>
```

Funktioniert, aber:
- Mischt HTML und JS → schlecht wartbar
- Kann pro Event nur eine Funktion
- Nicht empfohlen für alles ausser Mini-Beispielen

**Wir nutzen immer `addEventListener` in `script.js`.**

### Kleine Sonderformen

**Kurze Funktion (Arrow Function):**
```javascript
button.addEventListener("click", () => {
    console.log("Geklickt!");
});
```

Macht dasselbe wie `function()`. Ist heute Standard und wirst du überall sehen.

**Alert:**
```javascript
alert("Popup-Nachricht");
```
→ nervig, aber gut für erste Tests.

**Prompt:**
```javascript
const name = prompt("Wie heisst du?");
console.log("Hallo " + name);
```
→ öffnet Popup mit Eingabefeld.

---

## Live-Demo (30 Minuten)

Wir bauen zusammen eine kleine interaktive Seite mit **3 Buttons**:

1. **Button 1:** Ändert den Titel auf der Seite
2. **Button 2:** Zeigt die aktuelle Uhrzeit an
3. **Button 3:** Wechselt zwischen Hell- und Dunkel-Modus

Schau dir `beispiel/index.html` und `beispiel/script.js` an — das ist das Ziel.

**Wichtig während der Demo:**
- DevTools-Console immer offen halten
- Nach jeder Änderung `console.log()` einbauen und schauen
- Bei Fehlern die Fehlermeldung LESEN (nicht nur wegklicken)

---

## Übungen (45 Minuten)

- **Übung 1:** Button ändert Text (geführt)
- **Übung 2:** Mehrere Buttons mit verschiedenen Aktionen (mittel)
- **Übung 3:** Mini-Mood-Tracker mit mehreren Buttons (frei)

---

## Bonus — Fehler lesen lernen

Baue absichtlich Fehler:

1. Ändere `getElementById("mein-button")` → `getElementById("mein-buton")` (Tippfehler)
2. Lade die Seite neu, öffne die Console
3. Lies die Fehlermeldung: `Cannot read properties of null (reading 'addEventListener')`
4. Was bedeutet das? → Es wurde `null` zurückgegeben, weil kein Element mit dieser ID existiert

**Fehler lesen ist die wichtigste Skill in JavaScript.**

---

## Checkliste vor der nächsten Lektion

- [ ] Ich weiss, warum `<script defer>` und nicht einfach `<script>` verwendet wird
- [ ] Ich habe `console.log()` mindestens 10× benutzt und weiss, wo die Ausgabe erscheint
- [ ] Ich kenne den Unterschied zwischen `let` und `const`
- [ ] Ich habe eine eigene Funktion geschrieben und aufgerufen
- [ ] Ich habe einen Button mit `addEventListener` verbunden
- [ ] Ich habe mindestens einen Fehler in der Console gehabt und gelöst

**Nächste Lektion:** Variablen tiefer, if/else, ein Zahlenraten-Spiel bauen. 🎯
