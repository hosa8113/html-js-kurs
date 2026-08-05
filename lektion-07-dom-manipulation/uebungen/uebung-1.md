# Übung 1 — Klick-Counter mit +/-/Reset

**Schwierigkeit:** Einfach
**Zeit:** ca. 15 Minuten

## Aufgabe

Baue einen einfachen Klick-Counter mit **3 Buttons**: +1, -1 und Reset.

## HTML-Vorlage

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Counter</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <main>
        <h1>Klick-Counter</h1>
        <p id="counter">0</p>
        <button id="btn-plus">+1</button>
        <button id="btn-minus">−1</button>
        <button id="btn-reset">Reset</button>
    </main>
</body>
</html>
```

## Anforderungen

- [ ] `+1` erhöht den Counter um 1
- [ ] `−1` verringert den Counter um 1
- [ ] `Reset` setzt den Counter auf 0
- [ ] Anzeige aktualisiert sich sofort
- [ ] Bei **positivem** Wert → Text in **grün** (per CSS-Klasse)
- [ ] Bei **negativem** Wert → Text in **rot** (per CSS-Klasse)
- [ ] Bei **0** → Standardfarbe
- [ ] `console.log(counter)` bei jeder Änderung

## Ansatz

**Struktur:**
```javascript
let counter = 0;
const counterEl = document.getElementById("counter");

function updateAnzeige() {
    counterEl.textContent = counter;

    counterEl.classList.remove("positiv", "negativ");
    if (counter > 0) counterEl.classList.add("positiv");
    if (counter < 0) counterEl.classList.add("negativ");
}
```

Und Listener, die `counter` ändern und `updateAnzeige()` aufrufen.

## CSS-Vorschlag

```css
#counter {
    font-size: 72px;
    font-weight: bold;
}

.positiv { color: green; }
.negativ { color: red; }
```

## Warum eine Update-Funktion?

Statt in jedem Listener das ganze DOM-Update zu wiederholen, machst du **einmal** die Update-Funktion. Alle Listener rufen sie auf.

**Klassisches "DRY"** (Don't Repeat Yourself) — Applikationsentwickler-Grundprinzip.

## Bonus

- Ein "-10" und "+10" Button dazu
- Bei speziellen Zahlen (42, 100, -100) einen Emoji anzeigen
- Counter startet nicht bei 0, sondern beim letzten Wert (Vorgeschmack `localStorage`)

Lösung: `loesungen/uebung-1/`
