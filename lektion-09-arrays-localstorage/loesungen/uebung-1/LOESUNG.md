# Musterlösung — Übung 1

## Was hier gemacht wurde

Ein Counter mit Persistenz — Wert überlebt Reload und Browser-Neustart.

## Die 3 Kernpunkte

**1. Speichern nach jeder Änderung:**
```javascript
counter++;
speichern();
render();
```

**2. Laden beim Start:**
```javascript
laden();
render();
```

**3. Reset löscht auch aus dem Speicher:**
```javascript
btnReset.addEventListener("click", () => {
    counter = 0;
    localStorage.removeItem(KEY);
    render();
});
```

Wichtig: Nicht nur die Variable auf 0 setzen, sondern **auch aus `localStorage` entfernen**. Sonst könnte ein Bug später den alten Wert wieder laden.

## `localStorage` speichert IMMER Strings

```javascript
localStorage.setItem("wert", 42);
localStorage.getItem("wert");     // "42" (String!)
Number(localStorage.getItem("wert"));  // 42 (Number)
```

Bei Zahlen einfach `Number(...)`, bei Objekten/Arrays `JSON.parse(...)`.

**Wenn du das vergisst:** `counter = "5"` und `counter++` gibt `NaN` oder `"51"` — beides falsch.

## `!== null` vs `if (gespeichert)` — nochmal

```javascript
const gespeichert = localStorage.getItem(KEY);
```

Möglichkeiten:
- Noch nie gespeichert → `null`
- Gespeicherter Wert `"0"` → String `"0"` (truthy!)
- Gespeicherter Wert `"5"` → String `"5"`

**`if (gespeichert)` würde `"0"` als truthy erkennen** (weil nicht-leerer String). Also **funktioniert** es hier zufällig. Aber semantisch klarer:

```javascript
if (gespeichert !== null) {
    counter = Number(gespeichert);
}
```

Bedeutet: "Es gibt einen Wert."

**Noch moderner mit `??`:**
```javascript
counter = Number(localStorage.getItem(KEY) ?? 0);
```

`??` nimmt den rechten Wert nur wenn links `null` oder `undefined` ist. Kürzer.

## DevTools-Trick

Öffne **DevTools → Application → Local Storage**. Da siehst du:

```
Key           | Value
counter-wert  | 5
```

Du kannst:
- **Live ändern** (doppelklick auf Wert)
- **Löschen** (rechtsklick)
- **Alles löschen** ("Clear All"-Icon)

Perfekt zum Testen, was passiert wenn du **manuell** was änderst — deine App sollte robust genug sein, damit sie das übersteht.

## Häufige Fehler

- **Nicht speichern** → Wert existiert nur im JS, verschwindet bei Reload
- **Nicht laden** → gespeicherter Wert bleibt im Storage liegen, aber Counter startet immer bei 0
- **`Number()` vergessen** → Wert ist String, Rechnungen gehen schief
- **`removeItem` vergessen beim Reset** → alter Wert kommt beim nächsten Laden wieder

## Bonus umgesetzt

Um einen **Highscore** zu tracken:
```javascript
const HIGHSCORE_KEY = "counter-highscore";
let highscore = Number(localStorage.getItem(HIGHSCORE_KEY) ?? 0);

function updateHighscore() {
    if (counter > highscore) {
        highscore = counter;
        localStorage.setItem(HIGHSCORE_KEY, highscore);
    }
}

// Nach jedem +1:
updateHighscore();
```

Einfach zwei Werte im Storage — bei jeder Änderung prüfen und ggf. updaten.
