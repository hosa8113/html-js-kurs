# Übung 3 — Komplettes Website-Layout

**Schwierigkeit:** Frei
**Zeit:** ca. 15 Minuten

## Aufgabe

Baue ein **komplettes Website-Layout** mit Flexbox — das klassische "Header + Sidebar + Content + Footer"-Layout, das du auf 90% aller Websites siehst.

## Ziel-Struktur

```
┌──────────────────────────────────────┐
│              Header                   │
├──────────┬───────────────────────────┤
│          │                            │
│ Sidebar  │        Content             │
│          │                            │
│          │                            │
├──────────┴───────────────────────────┤
│              Footer                   │
└──────────────────────────────────────┘
```

## HTML-Vorgabe

```html
<body>
    <header>...</header>
    <div class="body-wrap">
        <aside class="sidebar">...</aside>
        <main class="content">...</main>
    </div>
    <footer>...</footer>
</body>
```

## Inhalt — dein Ding

Wähle ein Thema:
- Blog (Sidebar: Kategorien, Content: Artikel)
- Dashboard (Sidebar: Menü, Content: Zahlen/Grafiken als Platzhalter)
- Shop (Sidebar: Filter, Content: Produkte)
- Doku-Seite (Sidebar: Navigation, Content: Text)

## Anforderungen

- [ ] Header und Footer erstrecken sich über die **volle Breite**
- [ ] Der mittlere Bereich (`.body-wrap`) ist ein **Flexbox-Container** mit Sidebar links und Content rechts
- [ ] Sidebar hat eine **feste Breite** (z.B. `250px`) — nutze `flex: 0 0 250px`
- [ ] Content nimmt den **restlichen Platz** ein — nutze `flex: 1`
- [ ] Body hat `min-height: 100vh` und der Footer ist unten
- [ ] Es sieht **gut aus** — Farben, Padding, Fonts sind bewusst gewählt

## Verstehen: `flex: 0 0 250px` vs `flex: 1`

- `flex: 0 0 250px` = *"Wachse nicht, schrumpfe nicht, bleib genau 250px."* → Sidebar
- `flex: 1` = *"Nimm allen restlichen Platz."* → Content

Zusammen ergibt: Sidebar fix, Content flexibel.

## Bonus-Herausforderungen

- **Sticky Sidebar:** `position: sticky; top: 0;` — Sidebar bleibt beim Scrollen sichtbar
- **Sidebar-Menü mit Icons:** Nutze Emojis oder eine Icon-Library wie [Lucide Icons](https://lucide.dev)
- **Content mit Cards:** Kombiniere mit Übung 2 — im Content einen Card-Grid mit `flex-wrap`
- **"Sticky Footer"-Trick:** Damit der Footer immer unten klebt, auch bei wenig Content:
  ```css
  body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
  }
  .body-wrap {
      flex: 1;
  }
  ```

## Erwartetes Ergebnis

Eine Seite, die aussieht wie eine echte Web-App oder ein echtes Blog. Kein "Bastel-Look" mehr.

Lösung: `loesungen/uebung-3/` — Dashboard-Style als Beispiel.
