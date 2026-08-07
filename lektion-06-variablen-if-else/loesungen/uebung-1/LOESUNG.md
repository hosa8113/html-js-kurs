# Musterlösung — Übung 1

## Was hier gemacht wurde

Ein einfaches, funktionierendes Zahlenraten-Spiel. Kern:

- **`const geheimeZahl`** — wird beim Laden **einmal** gesetzt und bleibt gleich
- **`let versuche = 0`** — wächst mit jedem Klick
- **if/else if/else** — drei Fälle: richtig, tief, hoch

## Warum `const geheimeZahl` und nicht `let`?

Die geheime Zahl wird **einmal generiert** und bleibt für die ganze Partie gleich. `const` passt perfekt.

**Alternative** (für "Nochmal spielen"): dann bräuchtest du `let`, damit du eine neue Zahl setzen kannst. Siehe Live-Demo im `beispiel/`.

## Warum `Number(eingabe.value)` — und nicht `eingabe.value` direkt?

```javascript
"5" === 5     // false! (String vs Number)
Number("5")   // 5
5 === 5       // true
```

Ohne die Umwandlung wäre `if (geraten === geheimeZahl)` **immer false**, weil du einen String mit einer Zahl vergleichst.

**Merke:** Alles, was aus `<input>`-Feldern kommt, ist ein **String**. Immer konvertieren, wenn du rechnen willst.

Alternative Wege:
- `Number(eingabe.value)` — mein Favorit, klar was passiert
- `parseInt(eingabe.value)` — konvertiert nur Ganzzahlen
- `+eingabe.value` — funktioniert auch (unary plus), aber kryptisch
- `eingabe.valueAsNumber` — direkter Number-Zugriff auf `<input type="number">` (elegant!)

## Der Console-Log der Geheimzahl

```javascript
console.log("Geheime Zahl (nur fürs Testen):", geheimeZahl);
```

Absichtlich drin gelassen — beim **Entwickeln** super hilfreich. Vor dem Deploy löschen oder in ein Debug-Flag verpacken.

## `input.focus()` — kleine UX-Verbesserung

Nach jedem Rate-Versuch:
- Input wird geleert (`eingabe.value = ""`)
- Cursor springt zurück ins Input (`eingabe.focus()`)

User kann sofort weiter tippen, ohne klicken zu müssen. Kleine Sache, riesiger Unterschied im Feeling.

## Enter-Taste

```javascript
eingabe.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnRaten.click();
});
```

Das `e`-Objekt enthält Info zum Event — u.a. welche Taste gedrückt wurde. `.key === "Enter"` prüft, ob's die Enter-Taste war.

**Neu für dich:** Event-Objekte kommen in Lektion 8 (Formulare) offiziell dran.

## Häufige Fehler

- **`Math.random()` im Listener** → geheime Zahl ändert sich bei jedem Klick, Spiel wird unmöglich
- **`===` vergessen, nur `=`** → das ist Zuweisung, nicht Vergleich → dauerhaft true
- **`versuche` als `const`** → `TypeError: Assignment to constant`
- **`Number(...)` vergessen** → String-Vergleich schlägt immer fehl

## Ambitionierter machen

Für die Bonus-Punkte oder als Selbst-Herausforderung:

- Zeige **min/max-Hinweise** an ("Zwischen 34 und 71") — dazu musst du bei jedem Rateversuch Min/Max nachziehen
- **Zeitmessung:** wie schnell hast du gewonnen?
- **Highscore:** speichere beste Versuchsanzahl (Vorgeschmack `localStorage`)
