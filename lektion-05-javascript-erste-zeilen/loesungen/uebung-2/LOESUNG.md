# Musterlösung — Übung 2

## Was hier gemacht wurde

5 Buttons mit verschiedenen Aktionen:

1. **Farbe wechseln** — Zufällige Hintergrundfarbe aus Array
2. **Zufallszahl** — `Math.random()` + `Math.floor()`
3. **Zufalls-Emoji** — Array + Zufallsindex
4. **Klick-Counter** — `let`-Variable, wird bei jedem Klick +1
5. **Reset** — Setzt alles zurück

## `Math.random()` verstehen

```javascript
Math.random()          // → 0.7431... (irgendeine Zahl zwischen 0 und 1)
Math.random() * 100    // → 74.31...  (zwischen 0 und 100)
Math.floor(...)        // → 74        (abrunden auf ganze Zahl)
Math.floor(...) + 1    // → 75        (zwischen 1 und 100)
```

**Zufalls-Element aus Array:**
```javascript
const arr = ["a", "b", "c"];
arr[Math.floor(Math.random() * arr.length)]
```

Merke dir dieses Pattern — brauchst du ständig.

## `const` vs. `let` in Aktion

```javascript
const emojis = [...];    // const: Array wird nie überschrieben
let klicks = 0;          // let: wird bei jedem Klick geändert
```

**Wichtig:** `const` verhindert nur die **Neuzuweisung** der Variablen selbst. Ein `const`-Array darf man **mit `.push()` erweitern** — nur `arr = neuesArray` geht nicht.

## `document.body.style.backgroundColor`

Direktes Styling per JS. **Funktioniert**, aber:

- **Bevorzugter Weg:** eine CSS-Klasse toggeln (`classList.toggle`)
- **Warum?** Sauberer, alle Styling-Regeln bleiben in CSS

Für Zufalls-Farben aus einem Array direkt zu setzen ist okay — für Dark Mode / Themes lieber Klassen.

## Der Reset-Trick

```javascript
const startFarbe = document.body.style.backgroundColor;
```

Zu Beginn des Scripts wird die **Ausgangsfarbe gespeichert**. Reset setzt sie zurück.

**Achtung:** Wenn du die Hintergrundfarbe nur in CSS setzt (nicht inline), gibt `document.body.style.backgroundColor` einen leeren String zurück. Bei diesem Beispiel ist das okay, weil "leerer String" bedeutet: "kein Inline-Style" → CSS-Regel greift.

## Häufige Fehler

- **Counter als `const`** → `TypeError: Assignment to constant variable`
- **Vergessen, `.length` beim Array-Zufall** → `undefined` als Ergebnis
- **`Math.random()` gibt komische Kommazahlen** → mit `Math.floor()` runden

## Bonus-Ideen umgesetzt

Wenn du willst, mach:

- **Zufalls-Zitat** aus einem Array von Weisheiten
- **Emoji-Regen** — beim Klick fliegen 10 Emojis über den Bildschirm
- **Fake-Login** — Button "Login" → prompt("Name?") → `"Willkommen, " + name`
