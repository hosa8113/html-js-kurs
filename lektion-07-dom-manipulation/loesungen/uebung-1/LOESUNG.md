# Musterlösung — Übung 1

## Was hier gemacht wurde

Ein einfacher Counter mit 3 Buttons. Der **Trick** ist die `updateAnzeige()`-Funktion — sie kapselt alles, was bei einer Zustandsänderung passieren soll.

## Warum eine Update-Funktion?

**Ohne Update-Funktion (schlecht):**
```javascript
btnPlus.addEventListener("click", () => {
    counter = counter + 1;
    counterEl.textContent = counter;
    counterEl.classList.remove("positiv", "negativ");
    if (counter > 0) counterEl.classList.add("positiv");
    if (counter < 0) counterEl.classList.add("negativ");
});

btnMinus.addEventListener("click", () => {
    counter = counter - 1;
    counterEl.textContent = counter;   // dieselbe Zeile
    counterEl.classList.remove("positiv", "negativ");   // wieder
    if (counter > 0) counterEl.classList.add("positiv"); // wieder
    if (counter < 0) counterEl.classList.add("negativ"); // wieder
});
```

**Mit Update-Funktion (gut):**
```javascript
function updateAnzeige() {
    // Alles, was bei jeder Änderung passieren soll
}

btnPlus.addEventListener("click", () => {
    counter++;
    updateAnzeige();
});
```

Änderung im Update? Nur an einer Stelle. Fehler? Nur an einer Stelle. **DRY** (Don't Repeat Yourself) in Aktion.

## `classList.remove("positiv", "negativ")` — beide auf einmal

Praktisch: `remove()` und `add()` akzeptieren **mehrere Klassen** als Argumente.

```javascript
element.classList.remove("a", "b", "c");
element.classList.add("d", "e");
```

## Warum `let counter` und nicht `const`?

Weil `counter` sich ändert. `const` würde `TypeError` werfen.

**Merke:** `const` = Referenz bleibt fix, aber der Inhalt eines Objekts/Arrays darf sich ändern. Primitive Werte (Number, String, Boolean) mit `const` können **gar nicht** überschrieben werden.

## `counter = counter + 1` vs. `counter++`

Beides funktioniert. `counter++` ist die Kurzform, sehr üblich.

```javascript
counter = counter + 1;   // klar
counter += 1;            // Kurzform
counter++;               // noch kürzer
```

Analog: `counter--`, `counter -= 5`, `counter *= 2`, ...

Für Anfänger ist `counter = counter + 1` klarer. Später kommt automatisch `counter++`.

## Bonus umgesetzt

Erweiterungen wären einfach zu bauen:

**+10/-10:**
```javascript
btnPlus10.addEventListener("click", () => { counter += 10; updateAnzeige(); });
```

**Spezielle Nummern:**
```javascript
function updateAnzeige() {
    counterEl.textContent = counter;

    if (counter === 42) alert("The answer!");
    if (counter === 100) alert("🎉 Hundert!");

    // Klassen wie gehabt
}
```

Für 42 und 100 nur einmal auslösen (nicht bei jedem Erreichen mehrfach) → separate Logik nötig. Aber Grundprinzip: Update-Funktion ist der zentrale Ort für alles.
