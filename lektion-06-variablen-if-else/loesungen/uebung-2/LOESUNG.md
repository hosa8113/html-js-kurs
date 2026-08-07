# Musterlösung — Übung 2

## Was hier gemacht wurde

Schere-Stein-Papier mit persistenter Statistik. Die "elegante" Variante mit Lookup-Objekt (statt langer if-Kette).

## Der Trick: `schlaegt`-Objekt

```javascript
const schlaegt = {
    schere: "papier",   // Schere schlägt Papier
    stein: "schere",    // Stein schlägt Schere
    papier: "stein"     // Papier schlägt Stein
};

if (schlaegt[userWahl] === computerWahl) {
    // User gewinnt
}
```

**Was passiert:** `schlaegt[userWahl]` liest den Wert aus dem Objekt. Wenn User "schere" gewählt hat, gibt das "papier" — und dann wird geprüft, ob Computer "papier" hatte.

**Warum das schön ist:**
- **Kürzer** als die if/ODER-Variante
- **Erweiterbar** — für "Schere-Stein-Papier-Echse-Spock" (Big Bang Theory) einfach mehr Einträge
- **Lesbar** — auf einen Blick klar, was was schlägt

**Alternative (weniger elegant, aber ok):**
```javascript
if (
    (userWahl === "schere" && computerWahl === "papier") ||
    (userWahl === "stein"  && computerWahl === "schere") ||
    (userWahl === "papier" && computerWahl === "stein")
) {
    // User gewinnt
}
```

Beides funktioniert. Bei 3 Optionen okay, bei 5+ Optionen wird das if/ODER unlesbar.

## Warum drei einzelne `let`-Variablen für die Statistik?

```javascript
let siege = 0;
let niederlagen = 0;
let unentschieden = 0;
```

Statt einem Objekt oder Array. Für die Übungslevel-Skills reicht das.

**"Erwachsener" wäre:**
```javascript
const statistik = {
    siege: 0,
    niederlagen: 0,
    unentschieden: 0
};

statistik.siege = statistik.siege + 1;
```

Vorteil: alles gruppiert, leichter zu erweitern. Aber für die Übung: nicht nötig.

## `data-*` in Aktion (aus Lektion 5)

Jeder Button hat `data-wahl="schere"` (bzw. stein, papier). Statt drei einzelne Listener zu bauen, geht **eine Schleife**:

```javascript
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const userWahl = btn.dataset.wahl;
        // ...
    });
});
```

Ein Listener-Code für 3 Buttons. Skalierbar auf 100 Buttons ohne Änderung.

## CSS-Klassen für Ergebnisse

```javascript
ergebnis.className = "ergebnis " + status;
```

Setzt beide Klassen (Basis + Status). Dann in CSS:
```css
.ergebnis.sieg       { background-color: #d1fae5; }
.ergebnis.niederlage { background-color: #fecaca; }
```

**Wichtig:** `.className = "..."` **überschreibt** alle bestehenden Klassen. `.classList.add(...)` und `.classList.remove(...)` sind flexibler, wenn du Klassen einzeln steuern willst.

## Häufige Fehler

- **Vergessen, `computerWahl` bei jedem Klick neu zu würfeln** → Computer wählt immer dasselbe
- **`Math.random()` ausserhalb des Listeners** → wird nur einmal ausgeführt, Computer statisch
- **Statistik-Variablen als `const`** → `TypeError`
- **`btn.dataset.wahl` liefert `undefined`** → `data-wahl` im HTML falsch geschrieben (z.B. `data-Wahl` oder `dataWahl`)

## Bonus-Ideen

- **Best of 5:** neue Variable `let ziel = 3`. Wenn siege ≥ 3 → Match gewonnen
- **Sound:** `new Audio("...").play()` bei Sieg
- **Animation:** `.ergebnis` kurz vergrössern beim Erscheinen
- **Statistik in `localStorage`** speichern (Lektion 9)
