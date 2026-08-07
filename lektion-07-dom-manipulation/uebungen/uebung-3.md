# Übung 3 — Interaktive Liste

**Schwierigkeit:** Frei
**Zeit:** 20–30 Minuten

## Aufgabe

Bau eine **interaktive Liste** zu einem selbstgewählten Thema. Das ist der **Vorgeschmack** auf die richtige To-Do-Liste in Lektion 8.

## Themen-Ideen

- **Einkaufsliste** (Milch, Brot, Eier — abhaken erlaubt)
- **Wunschliste** (Games/Filme/Bücher)
- **Songs für die Playlist**
- **Reisezziele-Liste**
- **Freunde-Liste** mit "online" / "offline"-Toggle
- **Aufgaben-Liste** (was du diese Woche machen willst)

## Anforderungen

- [ ] **Input-Feld** und **Hinzufügen-Button**
- [ ] Neuer Eintrag wird als neues `<li>` in eine `<ul>` eingefügt
- [ ] Jeder Eintrag hat einen **Löschen-Button** (nur den eigenen Eintrag entfernen)
- [ ] Jeder Eintrag kann mit einem **Toggle** (Klick oder Checkbox) auf "erledigt" gesetzt werden
  - Optisch: durchgestrichener Text mit `classList.toggle("erledigt")`
- [ ] **Zähler**: "Du hast X Einträge" oder "3 von 7 erledigt"
- [ ] Nach Klick auf Hinzufügen: **Input leeren + Fokus zurück**
- [ ] Bei leerem Input: **kein Eintrag hinzufügen**

## Muster für einen Eintrag

**HTML-Ergebnis pro Eintrag:**
```html
<li>
    <input type="checkbox">
    <span>Text vom Eintrag</span>
    <button>Löschen</button>
</li>
```

**JavaScript, um es zu bauen:**
```javascript
const eintrag = document.createElement("li");

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.addEventListener("change", () => {
    eintrag.classList.toggle("erledigt");
});

const text = document.createElement("span");
text.textContent = inputFeld.value;

const loeschBtn = document.createElement("button");
loeschBtn.textContent = "Löschen";
loeschBtn.addEventListener("click", () => eintrag.remove());

eintrag.append(checkbox, text, loeschBtn);
liste.append(eintrag);
```

## CSS für "erledigt"

```css
.erledigt span {
    text-decoration: line-through;
    color: #999;
}
```

## Bonus

- **Anzahl-Live-Update:** Zeige oben "5 von 8 erledigt" — muss bei jeder Änderung neu berechnet werden
- **Reihenfolge ändern:** Pfeil-Buttons hoch/runter → mit `.parentElement.insertBefore(...)` oder `parentElement.insertAdjacentElement(...)`
- **Doppelklick zum Bearbeiten:** Text wird zum Input, Enter speichert
- **Speichern in `localStorage`** (Lektion 9)

## Warum das die wichtigste Übung im Kurs bis hier ist

Weil du **jedes Detail** einer echten App darin hast:
- **User Input** verarbeiten
- **Elemente dynamisch bauen**
- **State pro Element** (erledigt: ja/nein)
- **Aggregierter State** (wie viele erledigt?)
- **CRUD-artige Operationen** (Create, Read, Update, Delete)

Bevor Frameworks (React, Vue) kommen, muss dieses Muster in Vanilla JS sitzen.

Lösung: `loesungen/uebung-3/` — Einkaufsliste als Beispiel.
