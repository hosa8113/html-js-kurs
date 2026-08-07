# Musterlösung — Übung 2

## Was hier gemacht wurde

Eine `galerie.html` mit 6 `<figure>`-Elementen, arrangiert als responsive Grid mit Flexbox.

## Der Trick mit `<figure>` und `<figcaption>`

**Warum nicht einfach `<img>` + `<p>` darunter?**

```html
<!-- Weniger gut -->
<img src="foto.jpg" alt="...">
<p>Bildunterschrift</p>

<!-- Besser -->
<figure>
    <img src="foto.jpg" alt="...">
    <figcaption>Bildunterschrift</figcaption>
</figure>
```

Semantisch sagt `<figure>`: *"Diese Elemente gehören zusammen als eine Einheit."* Vorteile:

- **Screenreader** kündigen die Figur als Ganzes an
- **CSS** kann leicht die ganze Einheit stylen
- **RSS-Feeds** und andere Parser verstehen die Beziehung

## Der Galerie-CSS-Trick

```css
.galerie {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

figure {
    flex: 1 1 280px;
}
```

Kombiniert alles aus Lektion 3:
- Flex-Container mit Wrap → responsive
- `flex: 1 1 280px` → automatisch 1, 2, 3 oder 4 Spalten je nach Breite
- `gap: 20px` → sauberer Abstand

## Wichtig: `margin: 0` auf `<figure>`

Der Browser gibt `<figure>` standardmässig **einen Margin** — sieht dann schräg aus im Flex-Layout. Immer explizit auf `0` setzen.

## `object-fit: cover` in Aktion

Die Zufalls-Bilder von picsum.photos haben unterschiedliche Original-Proportionen. Ohne `object-fit` würde jedes Bild anders aussehen — mit `cover` sehen alle einheitlich aus (beschnitten auf 100% Breite, 200px Höhe).

## Der Hover-Effekt

```css
figure:hover {
    transform: scale(1.03);
    cursor: pointer;
}
```

Bild wird beim Hover 3% grösser. Zusammen mit `overflow: hidden` auf der `<figure>` und `transition` sieht das professionell aus — wie eine echte Galerie-App.

## Häufige Fehler

- **`<figure>` ohne `margin: 0`** → chaotisches Layout
- **`object-fit` ohne feste Höhe** → funktioniert nicht (Browser weiss nicht, wie er beschneiden soll)
- **Kein `overflow: hidden` auf `<figure>`** → Hover-Zoom-Effekt geht über den Rand hinaus

## Andere Wege

- **Lightbox** (Bild-Overlay beim Klick) → braucht JavaScript, kommt später
- **CSS Grid** wäre für ein echtes Grid noch etwas cleaner — Flexbox reicht aber völlig
- **Aspect Ratio:** `aspect-ratio: 16/9;` statt `height: 200px` — Bilder behalten Proportion unabhängig von Breite (moderner Ansatz)
