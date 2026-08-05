# Übung 1 — Echte To-Do-Liste mit Form

**Schwierigkeit:** Einfach-Mittel
**Zeit:** ca. 20 Minuten

## Aufgabe

Baue die klassische To-Do-Liste — aber diesmal mit einem echten `<form>`.

## HTML-Vorlage

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>To-Do</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <main>
        <h1>Meine Tasks</h1>

        <form id="form">
            <input type="text" id="input" placeholder="Neuer Task..." required minlength="2">
            <button type="submit">Hinzufügen</button>
        </form>

        <ul id="liste"></ul>

        <p id="status">Keine Tasks.</p>
    </main>
</body>
</html>
```

## Anforderungen

- [ ] `<form>` wird per `submit`-Event abgefangen (NICHT per Click auf Button!)
- [ ] `event.preventDefault()` verhindert den Standard-Reload
- [ ] Bei Submit: neuer `<li>`-Eintrag mit Checkbox + Text + Löschen-Button
- [ ] Checkbox toggelt die Klasse `erledigt` auf dem `<li>`
- [ ] "Löschen" entfernt den Eintrag
- [ ] `status`-Text zeigt: "X von Y erledigt" (oder "Keine Tasks", wenn leer)
- [ ] `minlength="2"` im HTML — leere und einbuchstabige Einträge werden vom Browser blockiert
- [ ] Nach Submit: Input leeren, Fokus zurück

## Der Unterschied zu Lektion 7

**Vorher:**
```javascript
button.addEventListener("click", () => {
    // Task hinzufügen
});
```

**Jetzt:**
```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Task hinzufügen
});
```

**Warum ist "submit" besser?**
- ✅ Enter-Taste funktioniert automatisch
- ✅ HTML-Validierung (`required`, `minlength`) greift
- ✅ Semantisch korrekter (Formular = Formular)
- ✅ Barrierefreier (Screenreader kündigen "Formular" an)

## CSS-Basis

```css
li.erledigt .text {
    text-decoration: line-through;
    color: #999;
}
```

## Bonus

- **Zwei Enter-Tasten-Level:** Enter im Input = Submit. Enter auf einem Task = Toggle erledigt
- **Doppelklick zum Bearbeiten:** doppelklick auf Text → wird zu einem Input
- **Zeitstempel** — jeder Eintrag hat einen "hinzugefügt um XX:XX"

Lösung: `loesungen/uebung-1/`
