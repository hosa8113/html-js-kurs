# Musterlösung — Übung 3

## Was hier gemacht wurde

Eine 3-Seiten-Fanpage zum Thema **Sennentuntschi** (Schweizer Alpsage) mit:

- `index.html` — Startseite mit Story-Zusammenfassung
- `galerie.html` — Bildergalerie mit `<figure>` + `<figcaption>`
- `fakten.html` — Fakten mit `<dl>`, Inhaltsverzeichnis mit Sprungmarken, verschachtelte Listen
- `style.css` — gemeinsame Styles im Sepia/Braun-Ton (passend zum Thema)

## Warum genau dieses Thema als Beispiel?

Absichtlich **kein 08/15-Gaming-Thema**. Zwei Vorteile:

1. Zeigt, dass Fanpages zu **allem** funktionieren — nicht nur Pop-Culture
2. Die Sepia-Farbwelt zeigt: **CSS-Farbwahl transportiert Stimmung**

Ein Rocket-League-Fan-Style wäre neon-blau/orange. Eine Sagen-Seite ist warm, gedeckt, "buchig". Beides ist okay — Hauptsache **bewusst gewählt**.

## Wichtige Techniken in dieser Lösung

### 1. Konsistenter Header auf allen Seiten

Header und Nav sind auf allen 3 HTML-Dateien **identisch** — nur die `.active`-Klasse wandert.

**Nachteil dieses Ansatzes:** Änderungen musst du an 3 Stellen machen. Bei kleinen Projekten okay, bei grossen problematisch. Lösung dafür (später): Templating oder Static Site Generators.

### 2. Verschachtelte Listen

```html
<ul>
    <li>Zentralschweizer Alpen
        <ul>
            <li>Uri</li>
            <li>Graubünden</li>
        </ul>
    </li>
</ul>
```

Und CSS:
```css
li ul {
    font-size: 14px;
    color: #6b4226;
}
```

→ Unter-Listen sind kleiner und dunkler. Zeigt visuelle Hierarchie.

### 3. Sprungmarken für Inhaltsverzeichnis

Auf `fakten.html`:
```html
<ul>
    <li><a href="#geschichte">Geschichte</a></li>
    <li><a href="#versionen">Versionen</a></li>
</ul>

...

<section id="geschichte">...</section>
<section id="versionen">...</section>
```

**Bonus:** Der Browser scrollt automatisch weich zur Sektion, wenn du folgendes CSS setzt:
```css
html {
    scroll-behavior: smooth;
}
```

### 4. `filter: sepia(0.2)` auf Bildern

Ein kleiner Sepia-Filter auf allen Bildern lässt die Galerie kohärent aussehen — auch wenn die Bilder von unterschiedlichen Quellen kommen. Farbliche Klammer für die ganze Seite.

## Was NICHT gemacht wurde (bewusst)

- **Keine Media Queries** — die Seite funktioniert responsive dank Flexbox
- **Kein Framework** — reines HTML/CSS
- **Kein JavaScript** — kommt in Lektion 5

## Häufige Fehler beim Multi-Page-Projekt

- **Style-Änderungen nur auf einer Seite** → alle Seiten müssen `<link rel="stylesheet" href="style.css">` haben
- **Falscher Pfad im Nav-Link** → `href="galerie.html"` funktioniert nur, wenn die Dateien im gleichen Ordner liegen
- **Bilder in Unterordner, Pfad falsch** → `src="bilder/foto.jpg"` — nicht `/bilder/` (absoluter Pfad, funktioniert lokal oft nicht)
- **`.active`-Klasse vergessen umzuhängen** → alle Nav-Links sehen gleich aus

## Next Steps

Wenn du diese Seite jetzt richtig cool machen willst:

- **GitHub Pages** — Seite kostenlos ins Internet stellen (kommt in Lektion 6 mit Git)
- **Own Domain** — für ~15 CHF/Jahr
- **JavaScript** — Bilder-Slider, Lightbox, animierte Elemente (Lektion 5+)

Aber erst mal: **das ist eine echte, funktionierende Website**. Zeig sie stolz her.
