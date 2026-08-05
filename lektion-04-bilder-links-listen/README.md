# Lektion 4 — Bilder, Links & Listen: Deine Fanpage

**Dauer:** 90 Minuten
**Vorher:** Lektion 1–3 abgeschlossen
**Am Ende:** Eine kleine Fanpage zu einem Thema, das dich interessiert — mit mehreren Seiten, Bildergalerie und internen Links.

---

## Lernziele

Nach dieser Lektion kannst du:

- Bilder professionell einbinden (mit `alt`, sinnvoller Grösse, `object-fit`)
- Bild + Bildunterschrift semantisch mit `<figure>` und `<figcaption>` gruppieren
- Alle Arten von Links: extern, intern, E-Mail, Telefon, Sprungmarken
- Ordentlich mit **mehreren HTML-Dateien** arbeiten
- Verschiedene Listen-Arten sinnvoll einsetzen: `<ul>`, `<ol>`, `<dl>`
- Bilder aus dem Internet einbetten oder lokal ablegen

## Vorwissen

- Lektionen 1–3 (HTML, CSS, Flexbox)

---

## Theorie (15 Minuten)

### Bilder — mehr als nur `<img src="...">`

**Volle Syntax:**

```html
<img
    src="bilder/max.jpg"
    alt="Ein Foto von Max am Berg"
    width="600"
    height="400"
    loading="lazy">
```

**Warum diese Attribute?**

| Attribut | Wozu? |
|----------|-------|
| `src` | Quelle (Pfad oder URL) |
| `alt` | **Pflicht.** Text falls Bild nicht lädt + für Screenreader |
| `width` / `height` | Verhindert "Layout-Shift" beim Laden (Text springt nicht rum) |
| `loading="lazy"` | Bild wird erst geladen, wenn es sichtbar wird → schneller |

### Bilder finden

- **Deine eigenen** (Fotos, Screenshots)
- **Kostenlose Bild-Datenbanken:**
  - https://unsplash.com — hochwertige Fotos
  - https://pexels.com — auch Videos
  - https://ui-avatars.com — Avatar-Generator
- **Emojis** funktionieren als "Bilder" ohne echte Bilder: 🎮🌍🚀

### Pfade — relativ vs. absolut

```html
<!-- Relativ: gleicher Ordner -->
<img src="foto.jpg">

<!-- Relativ: Unterordner -->
<img src="bilder/foto.jpg">

<!-- Relativ: eine Ebene hoch -->
<img src="../foto.jpg">

<!-- Absolut: aus dem Internet -->
<img src="https://images.unsplash.com/...">
```

**Best Practice:** Bilder in einen Ordner `bilder/` oder `assets/` legen.

### `<figure>` und `<figcaption>` — Bild mit Text drunter

```html
<figure>
    <img src="alpen.jpg" alt="Berge">
    <figcaption>Aussicht vom Säntis, Juli 2026</figcaption>
</figure>
```

Semantisch korrekt für "Bild gehört zu diesem Text". Ergibt sich auch in RSS, für Screenreader, in Suchmaschinen.

### `object-fit` — Bilder ohne Verzerrung

Wenn du Bilder in einem Container mit fixer Grösse anzeigst, würden sie normalerweise verzerrt werden. Mit CSS:

```css
img {
    width: 300px;
    height: 200px;
    object-fit: cover;  /* Beschneidet, füllt den Bereich */
}
```

Werte:
- `cover` — Bild füllt den Bereich, wird beschnitten (wie Instagram-Grid)
- `contain` — Bild passt komplett rein, evtl. mit Rand
- `fill` — Bild wird verzerrt (nicht schön)

### Links — mehr als nur externe Seiten

**Externe Seite:**
```html
<a href="https://github.com">GitHub</a>
```

**In neuem Tab öffnen:**
```html
<a href="https://example.com" target="_blank" rel="noopener">Link</a>
```
`rel="noopener"` ist ein Sicherheits-Tipp — die neue Seite kann nicht auf dein `window` zugreifen.

**Zu einer anderen HTML-Datei im selben Ordner:**
```html
<a href="hobbys.html">Meine Hobbys</a>
```

**Sprungmarke (Anchor) — zu einem Bereich auf derselben Seite:**

```html
<!-- Ziel -->
<h2 id="kontakt">Kontakt</h2>

<!-- Link -->
<a href="#kontakt">Nach unten zu Kontakt</a>
```

**E-Mail:**
```html
<a href="mailto:hi@example.com">Schick mir eine Mail</a>
```

**Telefonnummer (für Handys):**
```html
<a href="tel:+41791234567">079 123 45 67</a>
```

### Listen — die drei Sorten

**Ungeordnete Liste (`<ul>`) — Punkte:**
```html
<ul>
    <li>Erstes Ding</li>
    <li>Zweites Ding</li>
</ul>
```

**Geordnete Liste (`<ol>`) — Nummern:**
```html
<ol>
    <li>Erster Schritt</li>
    <li>Zweiter Schritt</li>
</ol>
```

**Beschreibungsliste (`<dl>`) — Begriff + Definition:**
```html
<dl>
    <dt>HTML</dt>
    <dd>Auszeichnungssprache für Webseiten.</dd>

    <dt>CSS</dt>
    <dd>Sprache für das Aussehen von Webseiten.</dd>
</dl>
```

`<dl>` ist perfekt für Glossare, Steckbriefe, FAQ.

**Verschachtelte Listen** funktionieren einfach:

```html
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Backend</li>
</ul>
```

### Mehrere HTML-Dateien — die richtige Struktur

Ein sauberes Fanpage-Projekt:

```
meine-fanpage/
├── index.html         (Startseite)
├── galerie.html       (Bilder-Galerie)
├── infos.html         (Details/Fakten)
├── style.css          (gemeinsame Styles)
└── bilder/
    ├── logo.png
    ├── foto1.jpg
    └── foto2.jpg
```

**Wichtig:** Jede Seite verlinkt auf die anderen (Navigation).

---

## Live-Demo (30 Minuten)

Wir bauen zusammen eine **Fanpage über Minecraft** (oder ein anderes Thema):

**Seite 1 — `index.html`:** Startseite mit Titel, grossem Bild, Kurzbeschreibung, Navigation
**Seite 2 — `galerie.html`:** Bildergalerie mit `<figure>` und `<figcaption>`
**Seite 3 — `fakten.html`:** Beschreibungsliste mit Fakten (Release-Jahr, Entwickler, Genre, ...)

Alles ist untereinander verlinkt.

Schau dir `beispiel/` an — genau so soll's aussehen.

---

## Übungen (45 Minuten)

- **Übung 1:** Fanpage-Startseite nachbauen (geführt)
- **Übung 2:** Bildergalerie mit `<figure>` (mittel)
- **Übung 3:** Multi-Seiten-Projekt mit Navigation (frei)

---

## Bonus

Nutze https://picsum.photos für Platzhalter-Bilder:
```html
<img src="https://picsum.photos/300/200" alt="Zufälliges Bild">
```

Perfekt für Prototypen, wenn du grad keine passenden Bilder hast.

---

## Checkliste vor der nächsten Lektion

- [ ] Ich weiss, warum `alt` bei jedem `<img>` Pflicht ist
- [ ] Ich habe `object-fit: cover` einmal verwendet und den Effekt gesehen
- [ ] Ich habe mehrere HTML-Dateien untereinander verlinkt
- [ ] Ich habe eine Sprungmarke (`href="#..."`) verwendet
- [ ] Ich kenne die drei Listen-Arten und weiss, wann welche passt
- [ ] Meine Fanpage funktioniert im Browser — alle Links, alle Bilder

**Nächste Lektion:** Endlich JavaScript! Wir bringen Interaktion in die Seite. 🎉
