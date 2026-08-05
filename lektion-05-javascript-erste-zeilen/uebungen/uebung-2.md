# Übung 2 — Mehrere Buttons mit verschiedenen Aktionen

**Schwierigkeit:** Mittel
**Zeit:** ca. 15 Minuten

## Aufgabe

Baue eine Seite mit **mindestens 4 Buttons**, jeder macht was Anderes.

## Ideen für Aktionen

Wähle 4 aus (oder erfind eigene):

- 🎨 **Hintergrundfarbe ändern** — `document.body.style.backgroundColor = "hotpink"`
- 🎲 **Zufallszahl anzeigen** — `Math.floor(Math.random() * 100)`
- 🕒 **Aktuelle Zeit anzeigen** — `new Date().toLocaleTimeString()`
- 😃 **Zufälliges Emoji anzeigen** — Array mit Emojis, zufälliges auswählen
- 💬 **Zufälliger Witz oder Zitat** — Array mit Texten
- 📸 **Ein Bild einblenden/ausblenden** — mit `classList.toggle`
- 🔢 **Klick-Zähler** — jeder Klick +1 (Achtung: braucht `let`, nicht `const`)
- 🌗 **Dark Mode toggeln** — wie im Beispiel

## Anforderungen

- [ ] Mindestens **4 Buttons**
- [ ] Jeder Button hat eine **eigene, andere** Aktion
- [ ] Jeder Button hat einen **eigenen `addEventListener`**
- [ ] Mindestens einer der Buttons ändert **Text auf der Seite** (nicht nur `alert`)
- [ ] Mindestens einer der Buttons verwendet **`Math.random()`** oder ein Array
- [ ] Alle Aktionen loggen was in die Console

## HTML-Grundgerüst

```html
<main>
    <h1>Button-Party</h1>
    <div class="buttons">
        <button id="btn-1">Aktion 1</button>
        <button id="btn-2">Aktion 2</button>
        <button id="btn-3">Aktion 3</button>
        <button id="btn-4">Aktion 4</button>
    </div>
    <div id="ausgabe"></div>
</main>
```

## Schnelle Snippets zum Verwenden

**Zufälliges Element aus Array:**
```javascript
const emojis = ["😀", "😎", "🤖", "🚀", "🎮"];
const zufall = emojis[Math.floor(Math.random() * emojis.length)];
```

**Klick-Counter:**
```javascript
let anzahl = 0;

btn.addEventListener("click", () => {
    anzahl = anzahl + 1;
    ausgabe.textContent = "Du hast " + anzahl + "× geklickt";
});
```

**Hintergrundfarbe zufällig:**
```javascript
const farben = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12"];
const zufall = farben[Math.floor(Math.random() * farben.length)];
document.body.style.backgroundColor = zufall;
```

## Bonus

- Ein Button, der **einen Sound** abspielt:
  ```javascript
  const audio = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.wav");
  audio.play();
  ```
- Ein "Reset"-Button, der alle Änderungen rückgängig macht

Lösung: `loesungen/uebung-2/`
