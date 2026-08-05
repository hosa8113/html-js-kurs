# Übung 2 — Bildergalerie mit `<figure>`

**Schwierigkeit:** Mittel
**Zeit:** ca. 15 Minuten

## Aufgabe

Baue eine **eigene HTML-Datei `galerie.html`** mit einer Bildergalerie. Diese Datei gehört zu deiner Fanpage aus Übung 1.

## Anforderungen

- [ ] Datei heisst `galerie.html` und liegt im **gleichen Ordner** wie `index.html`
- [ ] Header und Navigation aus Übung 1 wiederverwenden (kopieren okay)
- [ ] Nav-Link "Galerie" markiert als aktiv (z.B. mit Klasse `.active`)
- [ ] Mindestens **6 Bilder** — jedes verpackt in `<figure>` mit `<figcaption>`
- [ ] Bilder mit **einheitlicher Grösse** anzeigen (`object-fit: cover`)
- [ ] Galerie in **3 Spalten** auf breitem Bildschirm — nutze Flexbox mit `flex-wrap` (siehe Lektion 3)
- [ ] Link zurück zur Startseite im Footer: `<a href="index.html">← Zurück</a>`
- [ ] Jedes Bild hat sinnvolles `alt`-Attribut und `loading="lazy"`

## HTML-Snippet zur Erinnerung

```html
<div class="galerie">
    <figure>
        <img src="..." alt="..." loading="lazy">
        <figcaption>Bildunterschrift</figcaption>
    </figure>
    <!-- weitere figures -->
</div>
```

## CSS-Snippet für die Galerie

```css
.galerie {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

figure {
    flex: 1 1 280px;
    margin: 0;
}

figure img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
```

## Bild-Quellen

- **Zufällige Bilder** von https://picsum.photos:
  ```
  https://picsum.photos/id/1015/600/400
  https://picsum.photos/id/1018/600/400
  https://picsum.photos/id/1039/600/400
  ```
  (IDs 1000–1084 sind alle verfügbar)

- **Themenspezifisch:** Suche auf Unsplash, Pexels, oder nutze eigene Screenshots

## Verstehen: `object-fit: cover`

**Ohne:** Bilder werden verzerrt, wenn sie andere Proportionen haben als der Container.
**Mit `cover`:** Bild füllt den Container komplett, wird ggf. beschnitten. Wie bei Instagram-Fotos im Grid.

Andere Optionen:
- `contain` → Bild bleibt komplett sichtbar, evtl. mit Rändern
- `fill` → verzerrt (nicht schön)

## Bonus

- Hover-Effekt: `figure:hover { transform: scale(1.03); transition: transform 0.2s; }`
- Klick aufs Bild öffnet grosses Bild in neuem Tab: `<a href="grosse-version.jpg" target="_blank"><img ...></a>`

Lösung: `loesungen/uebung-2/`
