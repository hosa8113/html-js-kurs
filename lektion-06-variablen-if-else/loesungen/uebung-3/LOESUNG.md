# Musterlösung — Übung 3

## Was hier gemacht wurde

Ein **Magic 8-Ball** — klassisches Zufalls-Orakel:
- User stellt eine Frage
- Kugel wählt zufällig eine von 3 Kategorien (positiv/neutral/negativ)
- Aus der Kategorie kommt eine zufällige Antwort
- Antwort wird farblich passend angezeigt

## Warum das eine gute Übung ist

Trotz einfacher Idee steckt viel drin:

- **Datenstruktur:** Objekt mit Arrays drin (kein Array of Arrays!)
- **Zweistufiger Zufall:** erst Kategorie, dann Antwort
- **Input-Validierung:** leere Frage abfangen
- **State:** Fragen-Counter
- **CSS-Kopplung:** Klasse ändern basierend auf Ergebnis

## Der zweistufige Zufalls-Trick

**Naive Variante:** Alle Antworten in ein Array, zufällig rausziehen. Aber dann kannst du nicht mit **Wahrscheinlichkeiten** arbeiten.

**Bessere Variante hier:**
```javascript
if (zufall < 0.4) kategorie = "positiv";   // 40% positiv
else if (zufall < 0.7) kategorie = "negativ"; // 30% negativ
else kategorie = "neutral";                    // 30% neutral
```

Da `Math.random()` gleichverteilt zwischen 0 und 1 ist:
- 0.0–0.4 → positiv (40%)
- 0.4–0.7 → negativ (30%)
- 0.7–1.0 → neutral (30%)

Kannst die Prozente ändern, wie du willst — z.B. für ein "pessimistisches" Orakel mehr Negativ.

## `.trim()` — Whitespace am Anfang und Ende weg

```javascript
const frage = frageInput.value.trim();
```

Wenn User Leerzeichen tippt, wird das als "keine Frage" behandelt. Kleine UX-Verbesserung.

## Objekt mit Arrays

```javascript
const antworten = {
    positiv: ["Ja!", "Absolut!", "Sicher!"],
    neutral: ["Vielleicht.", "Frag nochmal."],
    negativ: ["Nein.", "Zweifelhaft."]
};

antworten[kategorie]           // → das ganze Array
antworten[kategorie][0]        // → erste Antwort
```

Kombination aus zwei Datenstrukturen. Sehr häufig in echtem Code.

## `return` in einem Listener

```javascript
if (frage === "") {
    // Fehler zeigen
    return;
}

// Rest des Codes läuft nur, wenn frage NICHT leer war
```

**`return`** verlässt die Funktion sofort. Praktisch für **Early Exits** — verschachtelte if/else werden vermieden.

**Alternative** wäre:
```javascript
if (frage === "") {
    // Fehler zeigen
} else {
    // Rest des Codes
}
```

Beide funktionieren. Early Exit ist oft lesbarer, wenn viel Code danach kommt.

## Warum die Farb-Codierung wichtig ist

Antworten in **Grün / Gelb / Rot** = sofort visuell verständlich. Bessere UX als "der Text ist immer weiss".

CSS-Trick:
```css
.antwort.positiv { color: #86efac; }
.antwort.negativ { color: #fca5a5; }
```

JS setzt beide Klassen:
```javascript
antwortBox.className = "antwort " + kategorie;
```

## Erweiterungs-Ideen

- **Sound-Effekte** — beim Klick "Kugel schütteln"-Sound
- **Animation** — Antwort erscheint mit `opacity`-Fade oder Shake
- **Historie** — letzte 5 Fragen mit Antworten anzeigen
- **Cheat-Mode** — bei bestimmten Fragen (z.B. "42") immer positive Antwort
- **Multiplayer** — 2 Spieler, wechseln sich ab

## Was du mit dieser Übung bewiesen hast

Du kannst jetzt:
- Datenstrukturen (Objekt + Array) verwenden
- Zufall mehrstufig einsetzen
- Input validieren
- State managen
- CSS aus JavaScript heraus steuern

Das ist **die Grundlage jeder interaktiven Web-App**. Egal ob Chat-App, Spiel, Formular oder Dashboard — die Prinzipien sind dieselben.
