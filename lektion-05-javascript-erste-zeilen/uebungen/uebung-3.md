# Übung 3 — Mini Mood Tracker

**Schwierigkeit:** Frei
**Zeit:** ca. 15–30 Minuten

## Aufgabe

Baue einen **Mini Mood Tracker** — eine kleine Seite, auf der du deinen aktuellen Zustand per Button-Klick anzeigst.

## Was das Ding können soll

- Mehrere Buttons mit Stimmungen (z.B. 😀 😐 😢 😴 🔥 🥶)
- Wenn du auf einen klickst, zeigt die Seite:
  - Deine aktuelle Stimmung (gross)
  - Einen passenden Text ("Du fühlst dich super!" / "Zeit für 'nen Kaffee." / ...)
  - Die Uhrzeit, wann du geklickt hast
  - Optional: passende Hintergrundfarbe

## Beispiel-Ergebnis

```
Wie geht's dir?

[😀] [😐] [😢] [😴] [🔥]

Deine Stimmung: 😀
"Du fühlst dich super — nutze den Tag!"
Notiert um 09:47
```

## Anforderungen

- [ ] Mindestens **4 Stimmungs-Buttons**
- [ ] Jede Stimmung hat einen **eigenen Text**
- [ ] Uhrzeit wird angezeigt
- [ ] Optional: Hintergrundfarbe passt zur Stimmung
- [ ] Console loggt jede Auswahl
- [ ] Sauberes CSS — sieht gut aus

## Vorschlag zur Struktur

**HTML:**
```html
<main>
    <h1>Wie geht's dir?</h1>
    <div class="stimmungen">
        <button class="stimmung" data-stimmung="glücklich">😀</button>
        <button class="stimmung" data-stimmung="neutral">😐</button>
        <button class="stimmung" data-stimmung="traurig">😢</button>
        <button class="stimmung" data-stimmung="müde">😴</button>
    </div>
    <div id="ergebnis">
        <p>Klick eine Stimmung.</p>
    </div>
</main>
```

**JS-Idee:**
```javascript
const buttons = document.querySelectorAll(".stimmung");
const ergebnis = document.getElementById("ergebnis");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const emoji = btn.textContent;
        const stimmung = btn.dataset.stimmung;
        // ... Text bauen und in ergebnis anzeigen
    });
});
```

**Wichtig:** `querySelectorAll` und `.forEach` sind neu. Sie holen **mehrere Elemente** auf einmal und lassen dich über sie iterieren. Kommt in Lektion 7 offiziell — hier schon als Vorgeschmack.

Alternativ mit einzelnen `getElementById`s wenn dir das zu viel ist!

## Bonus-Herausforderungen

- **Speichere die letzte Stimmung** in `localStorage` — nach Reload ist sie noch da (kommt offiziell in Lektion 9)
- **Zähle die Klicks** pro Stimmung — "Du warst heute 3× glücklich"
- **Zeige eine Verlaufs-Liste** — jede Stimmung mit Uhrzeit
- **Animiere** die Buttons beim Klick (z.B. `transform: scale(1.2)` mit `transition`)

## Warum das ne gute Übung ist

Weil dieses kleine Ding schon **alles** enthält, was du für eine echte Web-App brauchst:
- Interaktive Buttons
- State (aktuelle Stimmung)
- DOM-Manipulation
- Zeitstempel

Und wenn du willst: Speicherung, Verlauf, Analyse. Aus diesem Mood Tracker könnte theoretisch eine ganze App werden.

Lösung: `loesungen/uebung-3/`
