# Musterlösung — Übung 1

## Vergleich: Vorher vs. Nachher

|                    | Vorher | Nachher |
|--------------------|--------|---------|
| Zeilen JavaScript  | ~45    | ~55     |
| Duplizierte Blöcke | 2 (im Plus/Minus)   | 0       |
| Magic Numbers      | 3 (999, -999, 0)  | 0 (alle als Konstanten) |
| DOM-Zugriffe pro Klick | 4-5   | 1 (referenz oben)   |
| Verständlich in 30 Sek? | Nein | Ja |

Interessant: **Der Nachher-Code ist sogar länger.** Aber viel klarer.

**Kürzer ≠ besser.** Das Ziel ist immer Lesbarkeit, nicht Zeichen sparen.

## Die grössten Verbesserungen

### 1. `var` → `const`/`let`

**Vorher:**
```javascript
var x = localStorage.getItem("c");
```

**Nachher:**
```javascript
let counter = laden();
```

**Warum?** `var` ist veraltet und hat komische Regeln (Scope). Immer `let` (veränderbar) oder `const` (fix).

### 2. Kryptische Namen → sprechende Namen

**Vorher:**
```javascript
var x = ...;
"a", "b", "c", "p" als IDs
```

**Nachher:**
```javascript
let counter = ...;
btn-plus, btn-minus, btn-reset, anzeige
```

Wenn du in 3 Monaten wiederkommst — welchen Code verstehst du sofort?

### 3. Duplizierte Blöcke → Update-Funktion

**Vorher:**
```javascript
// im plus button
if (x > 999) x = 999;
document.getElementById("p").innerHTML = x;
if (x > 0) ... else if (x < 0) ... else ...
localStorage.setItem("c", x);

// im minus button
if (x < -999) x = -999;
document.getElementById("p").innerHTML = x;
if (x > 0) ... else if (x < 0) ... else ...  // <- IDENTISCH!
localStorage.setItem("c", x);
```

**Nachher:**
```javascript
function aendere(delta) {
    counter = Math.max(MIN, Math.min(MAX, counter + delta));
    speichern();
    render();
}

btnPlus.addEventListener("click", () => aendere(1));
btnMinus.addEventListener("click", () => aendere(-1));
```

Kein Copy-Paste. Änderungen an einer Stelle → wirken überall.

### 4. Magic Numbers → Konstanten

**Vorher:**
```javascript
if (x > 999) x = 999;
if (x < -999) x = -999;
localStorage.setItem("c", x);
```

**Nachher:**
```javascript
const MIN = -999;
const MAX = 999;
const SPEICHER_KEY = "counter-wert";
```

Wenn du das Limit später auf 10000 hebst → ein Wert oben ändern, nicht 4× im Code suchen.

### 5. `Math.max(MIN, Math.min(MAX, wert))` — der Clamp-Trick

**Vorher:**
```javascript
if (x > 999) x = 999;
```

Reicht das? Nein — brauchst du für Min UND Max, also 2 if-Statements.

**Nachher:**
```javascript
Math.max(MIN, Math.min(MAX, counter + delta))
```

- `Math.min(MAX, wert)` → gibt kleineren zurück → begrenzt nach oben
- `Math.max(MIN, ...)` → gibt grösseren zurück → begrenzt nach unten
- Zusammen: **"Clamp"** zwischen MIN und MAX

**Ein Ausdruck** statt 2 if-Statements. Idiomatisch.

### 6. DOM-Zugriffe zusammenfassen

**Vorher:** `document.getElementById(...)` **12 Mal** aufgerufen.

**Nachher:** DOM-Referenzen **einmal** oben geholt, dann als Variable verwendet.

Vorteil: **Schneller** und **klarer**, wo was liegt.

### 7. Klasse statt Inline-Style

**Vorher:**
```javascript
document.getElementById("p").style.color = "green";
```

**Nachher:**
```javascript
anzeige.classList.add("positiv");
```

+ passendes CSS:
```css
#anzeige.positiv { color: #27ae60; }
```

**Warum besser?**
- Styling gehört ins CSS
- Farbschema an einer Stelle änderbar
- Kein hartcodiertes "#27ae60" im JS

### 8. `??` (Nullish Coalescing) — moderner Fallback

**Vorher:**
```javascript
var x = localStorage.getItem("c");
if (x == null) x = 0;
x = Number(x);
```

**Nachher:**
```javascript
return Number(localStorage.getItem(SPEICHER_KEY) ?? 0);
```

Eine Zeile statt drei. Sauber, sofort lesbar.

## Refactoring-Take-Aways

- **Konstanten oben** — alles Wichtige auf einen Blick
- **DOM-Referenzen einmal** — schneller und übersichtlicher
- **State-Actions-Render** — die 3 klassischen Bereiche
- **Duplikate zu Funktionen** — DRY
- **Klassen statt Inline-Styles** — Trennung von Concerns

## Häufige Fehler beim Refactoring

- **Zu grosser Schritt** → wenn was kaputt geht, weisst du nicht warum
- **Verhalten geändert** — Refactoring ändert **nur Struktur**, nicht Funktionalität
- **Kommentare mit refactored** — überflüssige Kommentare beim Umbau gleich mitlöschen
- **Nicht getestet zwischendurch** — nach jeder Änderung: App im Browser testen
