# Übung 1 — Fanpage-Startseite

**Schwierigkeit:** Einfach
**Zeit:** ca. 15 Minuten

## Aufgabe

Baue eine **Startseite** deiner eigenen Fanpage. Thema wählst du selbst:

- Ein Game (Minecraft, Rocket League, was auch immer)
- Ein Sport (Fussball, Klettern, Boxen)
- Eine Serie / ein Film
- Eine Band / ein Musiker
- Ein Auto, ein Ort, ein Tier — irgendwas

## Anforderungen

Deine `index.html` muss enthalten:

- [ ] **Header** mit Logo (Text + Emoji) und Navigation (Home, Galerie, Kontakt)
- [ ] **Hero-Bild** — grosses Bild oben, das das Thema zeigt
- [ ] **Überschrift + Kurzbeschreibung** unter dem Hero
- [ ] **Eine `<ul>`** mit mindestens 3 Punkten ("Warum ist X cool")
- [ ] **Eine `<ol>`** mit mindestens 3 Punkten ("Meine Top 3 …")
- [ ] **Sprungmarke:** irgendwo eine `<section id="kontakt">` und im Header ein Link `href="#kontakt"`
- [ ] **Externer Link** mit `target="_blank" rel="noopener"`
- [ ] **E-Mail-Link** mit `mailto:`
- [ ] **Footer**
- [ ] Alle Bilder haben `alt` und `loading="lazy"`

## Bild-Tipp

Für Platzhalter oder wenn du keine passenden Bilder hast:

```html
<img src="https://picsum.photos/1200/400" alt="Zufälliges Bild" loading="lazy">
```

Für Themen-spezifische Bilder:
- https://unsplash.com (suchen + rechts klicken → Bild-Adresse kopieren)
- Vorsicht: Für Bilder aus Google-Suche gilt Copyright!

## Erwartetes Ergebnis

Eine funktionierende Startseite, die im Browser vollständig läuft. Kein CSS zwingend nötig — aber falls du willst: gerne. Der Fokus liegt auf **korrektem, semantischem HTML**.

## Stuck?

- **Sprungmarke funktioniert nicht?** → ID im Ziel-Element gesetzt? Genau derselbe Name im Link mit `#`?
- **Bild lädt nicht?** → Pfad korrekt? Rechte URL kopiert? Achte auf `https://`
- **Link öffnet nicht im neuen Tab?** → `target="_blank"` gesetzt?

Lösung: `loesungen/uebung-1/`
