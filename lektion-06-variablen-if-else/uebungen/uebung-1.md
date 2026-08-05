# Übung 1 — Zahlenraten-Spiel

**Schwierigkeit:** Einfach-Mittel
**Zeit:** ca. 20 Minuten

## Aufgabe

Baue dein eigenes Zahlenraten-Spiel — Schritt für Schritt.

## Setup

Neuer Ordner mit 3 Dateien:

**`index.html`:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Zahlenraten</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <main>
        <h1>Rate meine Zahl!</h1>
        <p>Ich denke an eine Zahl zwischen 1 und 100.</p>

        <input type="number" id="eingabe" min="1" max="100">
        <button id="btn-raten">Raten</button>

        <p id="feedback">Los geht's!</p>
        <p>Versuche: <span id="versuche">0</span></p>
    </main>
</body>
</html>
```

**`style.css`:** Minimal — nur damit's nicht hässlich aussieht.

**`script.js`:** Anfangs leer — du füllst.

## Anforderungen

Schreibe in `script.js`:

- [ ] Erzeuge eine **geheime Zufallszahl** zwischen 1 und 100 (nur beim Laden!)
- [ ] Eine `let`-Variable `versuche = 0`
- [ ] Beim Klick auf "Raten":
  - Zahl aus Input lesen und in eine echte Zahl umwandeln (`Number(...)`)
  - `versuche` um 1 erhöhen und im HTML anzeigen
  - Mit `if/else if/else`:
    - **Wenn geraten === geheim:** "Gewonnen!" anzeigen
    - **Wenn geraten < geheim:** "Höher!" anzeigen
    - **Wenn geraten > geheim:** "Tiefer!" anzeigen
- [ ] Nach jedem Versuch: Input leeren
- [ ] Nach Gewonnen: Button deaktivieren (`btn.disabled = true`)
- [ ] `console.log()` die geheime Zahl beim Start (fürs Debugging)

## Schritt-für-Schritt

**Schritt 1: Elemente holen**
```javascript
const eingabe = document.getElementById("eingabe");
const btnRaten = document.getElementById("btn-raten");
const feedback = document.getElementById("feedback");
const versucheAnzeige = document.getElementById("versuche");
```

**Schritt 2: Geheimzahl + Versuche**
```javascript
const geheimeZahl = Math.floor(Math.random() * 100) + 1;
let versuche = 0;
console.log("Geheime Zahl (nur fürs Testen):", geheimeZahl);
```

**Schritt 3: Klick-Listener**
```javascript
btnRaten.addEventListener("click", () => {
    const geraten = Number(eingabe.value);
    versuche = versuche + 1;
    versucheAnzeige.textContent = versuche;

    if (geraten === geheimeZahl) {
        feedback.textContent = "🎉 Gewonnen!";
        btnRaten.disabled = true;
    } else if (geraten < geheimeZahl) {
        feedback.textContent = "📈 Höher!";
    } else {
        feedback.textContent = "📉 Tiefer!";
    }

    eingabe.value = "";
});
```

## Erwartetes Ergebnis

Ein funktionierendes Rate-Spiel. Nach 5–10 Versuchen sollte man die Zahl finden können (Halbierungs-Strategie).

## Stuck?

- **Immer "Tiefer!" egal was ich eingebe?** → Vergessen, `Number(...)` zu benutzen? Strings vs. Zahlen
- **`versuche` bleibt bei 1?** → `versuche = versuche + 1;` vergessen (oder `let` statt `const`?)
- **Zahl ändert sich bei jedem Klick?** → Zeile mit `Math.random()` steht im Listener statt aussenrum

## Bonus

- Speziellen Text für "Ganz nah dran" (max. 5 Abweichung)
- Nach 10 Versuchen: "Zu viele Versuche, du hast verloren"
- Enter-Taste löst den Raten-Button aus:
  ```javascript
  eingabe.addEventListener("keydown", (e) => {
      if (e.key === "Enter") btnRaten.click();
  });
  ```

Lösung: `loesungen/uebung-1/`
