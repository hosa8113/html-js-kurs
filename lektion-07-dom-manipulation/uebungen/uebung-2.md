# Übung 2 — Karten-Builder

**Schwierigkeit:** Mittel
**Zeit:** ca. 20 Minuten

## Aufgabe

Baue eine Seite, auf der du **per Klick Karten hinzufügen** kannst — und **jede Karte einzeln löschen** kannst.

## HTML-Vorlage

```html
<main>
    <h1>Mein Karten-Board</h1>
    <button id="btn-neu">+ Neue Karte</button>
    <div id="karten" class="karten"></div>
</main>
```

## Anforderungen

- [ ] Beim Klick auf "+ Neue Karte":
  - Neue `<div class="karte">` per JS **erstellen**
  - Karte enthält: **Titel** (Text) + **Löschen**-Button
  - Karte wird **an den Container angehängt**
- [ ] Löschen-Button entfernt **nur seine eigene** Karte
- [ ] Karten werden **nummeriert** ("Karte 1", "Karte 2", ...)
- [ ] Nummerierung geht auch nach Löschen weiter (also NICHT zurückzählen)
- [ ] `console.log()` beim Hinzufügen/Löschen

## Ansatz

```javascript
const btnNeu = document.getElementById("btn-neu");
const container = document.getElementById("karten");

let counter = 0;

btnNeu.addEventListener("click", () => {
    counter = counter + 1;

    const karte = document.createElement("div");
    karte.className = "karte";

    const titel = document.createElement("h3");
    titel.textContent = "Karte " + counter;

    const loeschBtn = document.createElement("button");
    loeschBtn.textContent = "Löschen";
    loeschBtn.addEventListener("click", () => {
        karte.remove();
        console.log("Karte entfernt");
    });

    karte.append(titel, loeschBtn);
    container.append(karte);

    console.log("Karte hinzugefügt");
});
```

## CSS-Vorschlag

```css
.karten {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.karte {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    flex: 1 1 200px;
    text-align: center;
}
```

## Warum das wichtig ist

Dieses Muster — **Objekt hinzufügen + Löschen-Button pro Objekt** — ist die Grundlage von:
- To-Do-Listen (Lektion 8)
- Warenkörben
- Chat-Nachrichten
- Kommentaren
- Notiz-Apps

Genau dasselbe Prinzip. Wenn du das hier kannst, hast du 80% aller Apps im Griff.

## Bonus

- **Zufällige Hintergrundfarbe** pro Karte
- **Titel bearbeitbar**: Klick auf Titel → wird zu Input-Feld
- **Karten in beliebiger Reihenfolge**: mit `prepend` neue oben, `append` neue unten
- **"Alle löschen"-Button** — leert den ganzen Container mit `container.innerHTML = ""`

Lösung: `loesungen/uebung-2/`
