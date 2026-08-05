# Übung 1 — Button ändert Text

**Schwierigkeit:** Einfach
**Zeit:** ca. 15 Minuten

## Aufgabe

Baue eine Seite mit einem **einzigen Button**. Wenn du ihn klickst, ändert sich ein Text auf der Seite.

## HTML-Vorlage

Erstelle 3 Dateien in einem neuen Ordner:

**`index.html`:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Mein erster Button</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <main>
        <h1>Klick mich!</h1>
        <p id="text">Ich bin ein normaler Text.</p>
        <button id="mein-button">Los!</button>
    </main>
</body>
</html>
```

**`style.css`:** Minimal — irgendein Styling, dass es nicht hässlich aussieht.

**`script.js`:** Anfangs leer — hier kommt dein Code rein.

## Anforderungen

Schreibe in `script.js`:

- [ ] Hol dir den Button mit `document.getElementById("mein-button")`
- [ ] Hol dir das `<p>` mit `document.getElementById("text")`
- [ ] Füge einen Click-Listener zum Button hinzu
- [ ] Beim Klick: **ändere den Text** im `<p>` zu was Neuem
- [ ] Logge mit `console.log()`, dass der Button geklickt wurde
- [ ] Öffne die DevTools-Console (F12) und schau dir die Ausgabe an

## Erwartetes Ergebnis

1. Seite lädt → Console zeigt keine Fehler
2. Button klicken → Text im `<p>` ändert sich
3. Nochmal klicken → immer noch derselbe neue Text (Button ändert immer zum selben Wert)
4. Console zeigt bei jedem Klick eine Nachricht

## Tipp — die 3-Zeilen-Struktur

```javascript
const button = document.getElementById("mein-button");
button.addEventListener("click", () => {
    // Was soll bei einem Klick passieren?
});
```

**Diese Struktur wirst du 10'000× schreiben in deinem Leben.** Merke sie dir.

## Stuck?

- **"Cannot read properties of null"?** → ID im HTML und JS gleich geschrieben? Gross-/Kleinschreibung beachten
- **Nix passiert beim Klick?** → Console prüfen. Kommt `console.log` an? Nein → Listener falsch gebunden
- **Fehler ohne dass ich klicke, sofort beim Laden?** → `defer` im `<script>` vergessen? Script läuft, bevor der Button existiert

Lösung: `loesungen/uebung-1/`
