# Übung 1 — Persistenter Counter

**Schwierigkeit:** Einfach
**Zeit:** ca. 10 Minuten

## Aufgabe

Nimm den Klick-Counter aus Lektion 7 und mach ihn **persistent** — nach Reload zeigt er den letzten Wert.

## HTML-Vorlage

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Persistenter Counter</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <main>
        <h1>Counter (mit Speicher)</h1>
        <p id="counter">0</p>
        <button id="btn-plus">+1</button>
        <button id="btn-minus">−1</button>
        <button id="btn-reset">Reset</button>
    </main>
</body>
</html>
```

## Anforderungen

- [ ] Wert wird bei jeder Änderung in `localStorage` gespeichert
- [ ] Beim Laden der Seite: gespeicherter Wert wird angezeigt
- [ ] Wenn noch nichts gespeichert war: Counter startet bei 0
- [ ] Reset setzt auf 0 UND entfernt den Wert aus dem Speicher

## Ansatz

```javascript
const KEY = "counter-wert";
let counter = 0;

function speichern() {
    localStorage.setItem(KEY, counter);
}

function laden() {
    const gespeichert = localStorage.getItem(KEY);
    if (gespeichert !== null) {
        counter = Number(gespeichert);   // Immer Number()! localStorage ist String
    }
}

function updateAnzeige() {
    counterEl.textContent = counter;
}

// Start
laden();
updateAnzeige();
```

## Warum `!== null` und nicht nur `if (gespeichert)`?

Weil `"0"` in JavaScript **truthy** ist, aber `null` **falsy**.
- `if (gespeichert)` → würde bei `"0"` falsch true, aber trotzdem "0" verwenden — Zufall
- Bei einem gespeicherten `0` wäre `if ("0")` **true** — okay
- Aber `if (0)` wäre `false` — Verwirrung möglich

**Sauberer:** `!== null` heisst "es gibt einen Wert, egal welchen".

Noch sauberer mit Fallback:
```javascript
counter = Number(localStorage.getItem(KEY) ?? 0);
```

`??` ist der **Nullish Coalescing Operator** — nimmt den rechten Wert nur wenn links `null` oder `undefined`.

## Testen

1. Klicke ein paar Mal +1
2. Reload die Seite (F5)
3. Counter sollte auf dem letzten Wert stehen
4. Öffne DevTools → Application → Local Storage → siehst du "counter-wert"?

## Bonus

- **Highscore-Modus:** speichere zusätzlich den höchsten je erreichten Wert
- **Schließen-Warnung:** `window.addEventListener("beforeunload", ...)` — Warnung wenn User Seite verlassen will
- **Multi-User:** Prompt beim Start "Wer bist du?" → speichere Counter pro User (verschiedene Keys)

Lösung: `loesungen/uebung-1/`
