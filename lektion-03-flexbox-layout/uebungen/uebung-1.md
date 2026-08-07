# Übung 1 — Navigation-Bar mit Flexbox

**Schwierigkeit:** Einfach
**Zeit:** ca. 15 Minuten

## Aufgabe

Baue eine Website-Navigation, bei der:

- Links: ein Logo (Text oder Emoji)
- Rechts: 4 Navigations-Links nebeneinander

## HTML-Vorlage

Erstelle eine neue HTML-Datei mit folgendem Grundgerüst:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Navi-Übung</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">🎮 GameHub</div>
        <nav>
            <a href="#">Home</a>
            <a href="#">Games</a>
            <a href="#">News</a>
            <a href="#">Kontakt</a>
        </nav>
    </header>

    <main>
        <p>Hier kommt später Content.</p>
    </main>
</body>
</html>
```

## Anforderungen

Style den Header so, dass:

- [ ] Logo und Nav auf einer Zeile sind (nicht untereinander)
- [ ] Logo klebt am linken Rand, Nav am rechten Rand
- [ ] Beide sind **vertikal zentriert**
- [ ] Nav-Links haben `20px` Abstand zueinander (nutze `gap`, nicht `margin`!)
- [ ] Header hat dunklen Hintergrund, weisse Schrift
- [ ] Header hat `20px` Innenabstand oben/unten und `40px` links/rechts
- [ ] Nav-Links haben KEINE Unterstreichung

## Tipp — die 3 Zauberzeilen

```css
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

Diese drei Zeilen lösen 90% aller "wie kriege ich das nebeneinander" Probleme.

## Erwartetes Ergebnis

Ein professionell aussehender Website-Header, den du auf jeder Seite oben einbauen könntest.

## Stuck?

- **Nav und Logo sind untereinander?** → `display: flex` auf dem Header vergessen
- **Alles klebt links?** → `justify-content: space-between` fehlt
- **Vertikal nicht zentriert?** → `align-items: center` fehlt
- **Nav-Links kleben aneinander?** → `display: flex` auch auf `<nav>` setzen und `gap` hinzufügen

Lösung: `loesungen/uebung-1/`
