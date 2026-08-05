# Musterlösung — Übung 2

## Was hier gemacht wurde

Task-Manager mit Priorität (Dropdown) + Kategorie (Radio-Gruppe). Jedes Task wird visuell nach Priorität eingefärbt (linke Border) und mit Kategorie-Badge angezeigt.

## Der `FormData`-Trick

**Statt jedes Feld einzeln zu holen:**
```javascript
const text = document.getElementById("text").value;
const prio = document.getElementById("prio").value;
const kategorie = document.querySelector("input[name='kategorie']:checked").value;
```

**Alles auf einmal mit FormData:**
```javascript
const data = new FormData(form);
const text = data.get("text");
const prio = data.get("prio");
const kategorie = data.get("kategorie");
```

**Vorteile:**
- Kürzer, lesbarer
- Funktioniert mit **allen** Input-Typen (auch Radio-Gruppen, Checkboxen, Files)
- Wenn du später an einen Server sendest: `fetch(url, { body: data })` — direkt einsetzbar

**Wichtig:** Die `name`-Attribute im HTML müssen gesetzt sein (`name="text"`, nicht nur `id="text"`).

## Radio-Buttons — die Falle

Bei Radio-Buttons ist es **nicht** so wie bei Text-Inputs:

```javascript
// FALSCH — kriegt nur den ERSTEN Radio-Button
document.getElementById("kategorie").value;

// RICHTIG
document.querySelector("input[name='kategorie']:checked").value;

// AM BESTEN — mit FormData
new FormData(form).get("kategorie");
```

Alle Radios in einer Gruppe teilen sich denselben `name`. Nur der **:checked** hat den Wert, den du willst.

## `form.reset()` — der Zauberbefehl

Statt jedes Feld einzeln zu leeren:

```javascript
form.reset();
```

Setzt **alle** Formularfelder auf ihre HTML-Standardwerte zurück:
- Text-Inputs → leer
- Select → auf `<option selected>` gesetzt
- Radios → auf `<input checked>` gesetzt
- Checkboxen → auf `<input checked>` (oder off)

**Beachte:** Reset setzt auf **Standard**, nicht auf leer. Wenn "Mittel" im HTML `selected` ist, springt Prio bei jedem Reset zurück auf "Mittel" — was wir hier auch wollen.

## `fieldset` und `legend` — semantisch cool

```html
<fieldset>
    <legend>Kategorie</legend>
    <label><input type="radio" ...> Arbeit</label>
    ...
</fieldset>
```

`<fieldset>` gruppiert Formular-Felder, `<legend>` gibt der Gruppe einen Titel. **Perfekt** für Radio-/Checkbox-Gruppen. Sieht browser-standardmässig etwas eckig aus, aber gut stylbar.

**Barrierefreiheit:** Screenreader lesen "Kategorie: Arbeit oder Privat oder Schule" — ohne fieldset würde nur einzeln "Arbeit" gelesen.

## CSS-Trick: linker Border nach Priorität

```css
li.prio-niedrig { border-left: 4px solid #2ecc71; }
li.prio-mittel  { border-left: 4px solid #f39c12; }
li.prio-hoch    { border-left: 4px solid #e74c3c; }
```

JavaScript setzt die Klasse:
```javascript
li.classList.add("prio-" + prio);   // "prio-hoch" etc.
```

**Skaliert:** Neue Priorität hinzufügen? Nur CSS-Regel + Dropdown-Option ändern, kein JS-Change nötig.

## Warum das ein gutes Muster ist

**Trennung:**
- **HTML** definiert Struktur und Standardwerte
- **CSS** definiert Aussehen (auch abhängig von Klassen)
- **JavaScript** verwaltet nur Zustand & Klassen

Diese Trennung ist die Basis moderner Frontend-Architektur. Später mit Frameworks wird sie zu State-Management (React) oder Datenbindung (Vue) — Prinzip bleibt.

## Erweiterungsideen

- **Sortierung** nach Priorität mit `Array.sort` — kommt in JS-Fortgeschritten
- **Filter** nach Kategorie mit Button-Reihe (wie im Live-Demo)
- **Zähler pro Kategorie**: `liste.querySelectorAll(".badge").length`
- **Drag & Drop** zum Umsortieren — HTML5-Drag-API

## Häufige Fehler

- **`name`-Attribute vergessen** → FormData liefert nichts
- **Radio-Gruppe ohne gemeinsamen `name`** → jeder Radio ist einzeln, keine Gruppierung
- **`form.reset()` löst Events aus?** — nein, `reset` löst kein `change`-Event aus. Wenn du willst, dass Handler laufen, musst du manuell auslösen.
