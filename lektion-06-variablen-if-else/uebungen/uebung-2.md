# Übung 2 — Schere, Stein, Papier

**Schwierigkeit:** Mittel
**Zeit:** ca. 20 Minuten

## Aufgabe

Baue "Schere, Stein, Papier" — du gegen den Computer.

## Spielregeln

- Schere schlägt Papier
- Papier schlägt Stein
- Stein schlägt Schere
- Gleiche = Unentschieden

## HTML-Vorlage

```html
<main>
    <h1>Schere, Stein, Papier</h1>
    <p>Wähle deinen Zug:</p>

    <div class="wahl-buttons">
        <button class="wahl" data-wahl="schere">✂️ Schere</button>
        <button class="wahl" data-wahl="stein">🪨 Stein</button>
        <button class="wahl" data-wahl="papier">📄 Papier</button>
    </div>

    <div id="ergebnis">
        <p>Wähle einen Zug oben.</p>
    </div>

    <p class="statistik">
        Siege: <span id="siege">0</span> ·
        Niederlagen: <span id="niederlagen">0</span> ·
        Unentschieden: <span id="unentschieden">0</span>
    </p>
</main>
```

## Anforderungen

- [ ] Beim Klick auf eine Wahl:
  - Computer wählt **zufällig** eine der drei Optionen
  - Ergebnis wird berechnet (Sieg/Niederlage/Unentschieden)
  - Ergebnis wird angezeigt: "Du: ✂️ vs Computer: 🪨 → Verloren"
  - Statistik wird aktualisiert
- [ ] Statistik-Zähler (Siege, Niederlagen, Unentschieden) werden **über mehrere Runden** hoch gezählt
- [ ] Sauberes if/else if/else oder ein "Sieger-Check"

## Ansatz

**Computer-Wahl:**
```javascript
const optionen = ["schere", "stein", "papier"];
const computerWahl = optionen[Math.floor(Math.random() * optionen.length)];
```

**Wer gewinnt?**

Möglichkeit A — mit if/else:
```javascript
if (userWahl === computerWahl) {
    ergebnis = "unentschieden";
} else if (
    (userWahl === "schere" && computerWahl === "papier") ||
    (userWahl === "stein" && computerWahl === "schere") ||
    (userWahl === "papier" && computerWahl === "stein")
) {
    ergebnis = "sieg";
} else {
    ergebnis = "niederlage";
}
```

Möglichkeit B — mit einem Lookup-Objekt (fortgeschritten, sauberer):
```javascript
const schlaegt = {
    schere: "papier",
    stein: "schere",
    papier: "stein"
};

if (userWahl === computerWahl) {
    ergebnis = "unentschieden";
} else if (schlaegt[userWahl] === computerWahl) {
    ergebnis = "sieg";
} else {
    ergebnis = "niederlage";
}
```

Wähle den Weg, der dir logischer erscheint.

## Bonus

- **"Best of 5":** Erste Partei mit 3 Siegen gewinnt insgesamt
- **Emoji-Ergebnis-Reaktion:** 🎉 bei Sieg, 😢 bei Niederlage, 🤝 bei Unentschieden
- **"Streak"-Counter:** wie viele in Folge gewonnen?
- **Reset-Button** für die Statistik

Lösung: `loesungen/uebung-2/`
