# Übung 3 — Dein eigenes Spiel oder Quiz

**Schwierigkeit:** Frei
**Zeit:** 30+ Minuten

## Aufgabe

Bau ein **eigenes kleines interaktives Ding**, das if/else und Variablen einsetzt.

## Ideen

**Spiele:**
- **Höher-Tiefer-Kartenspiel:** Zeige eine Zahl, User rät ob die nächste höher oder tiefer ist
- **BMI-Rechner:** Gewicht + Grösse eingeben → Kategorie ausgeben (Untergewicht, Normal, ...)
- **Passwort-Stärke-Checker:** Kürzer als 8 Zeichen → schwach, mit Zahl → mittel, mit Sonderzeichen → stark
- **Trinkspiel-Regel-Generator:** Klick → zeigt zufällige Regel
- **Würfel-Simulator:** Ein oder mehrere Würfel

**Quizze:**
- **3-Fragen-Quiz** zu einem Thema (Fussball, Geographie, Musik, was du willst)
- **Persönlichkeitstest** ("Welches Haustier passt zu dir?" — 3 Fragen, Auswertung)
- **Rechen-Trainer** — zufällige Rechnung, User löst, Feedback ob richtig

**Sonstiges:**
- **Zufalls-Restaurant-Wähler:** Klick → schlägt Restaurant vor
- **Motivations-Generator:** Zufälliges Kompliment / Zitat
- **Wahrsage-Kugel** (Magic 8-Ball) — Frage eingeben, zufällige Antwort

## Anforderungen

- [ ] Verwendet **mindestens 2 verschiedene Datentypen** (Number, String, Boolean, Array)
- [ ] Hat **mindestens eine if/else if/else-Kette** mit 3+ Zweigen
- [ ] Hat **mindestens einen Zufallsanteil** (`Math.random()`) oder **User-Input** (`input`, `prompt`)
- [ ] Hat **State**, der sich zwischen Aktionen ändert (z.B. Score, Runde, ...)
- [ ] Sieht **einigermassen ansprechend aus** — Farben, Padding, gut lesbar

## Herangehensweise

**Schritt 1: Design**

Bevor du irgendwas tippst, überleg:
- Was passiert auf der Seite?
- Welche Buttons/Inputs gibt es?
- Welche Variablen brauchst du?
- Welche Bedingungen gibt es?

Am besten auf Papier skizzieren.

**Schritt 2: HTML zuerst**

Bau die statische Seite fertig, so wie sie im Endzustand aussehen soll. Ohne JS.

**Schritt 3: JS Stück für Stück**

Baue **eine Funktion nach der anderen**. Nach jeder testen:
- Element holen → `console.log(element)` → funktioniert?
- Listener binden → klicken → `console.log("geklickt")` → funktioniert?
- Logik einbauen → verschiedene Fälle testen

**Kein Big Bang** — kleine Schritte, immer testen.

## Bonus-Herausforderungen

- **Nutze `switch/case`** statt langem if/else — sauberer für viele diskrete Fälle
- **Ergebnis mit Farbe hervorheben** — Klasse toggeln je nach Ergebnis
- **Animiere** das Ergebnis (`transition` in CSS)
- **Score in `localStorage` speichern** (Vorgeschmack auf Lektion 9)

## Beispiel für switch/case

```javascript
switch (stimmung) {
    case "gut":
        text = "Cool!";
        break;
    case "mittel":
        text = "Okay.";
        break;
    case "schlecht":
        text = "Oje.";
        break;
    default:
        text = "Weiss nicht.";
}
```

## Lösung

Die Musterlösung in `loesungen/uebung-3/` ist ein **Magic 8-Ball** — klassisches Beispiel mit Zufall und Nutzer-Eingabe. Aber deine Idee kann und soll komplett anders sein.
