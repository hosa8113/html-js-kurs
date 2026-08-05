# Musterlösung — Übung 3

## Was hier gemacht wurde

Ein **Dark-Mode-Design** mit:

- 2 Fonts kombiniert: **Bebas Neue** (Headings, laut & kantig) + **Inter** (Body, ruhig & lesbar)
- **CSS-Variablen** in `:root` für alle Farben und Fonts
- **Hover-Animation** mit `transform: translateX(...)` — Karten "rutschen" beim Drüberfahren
- `letter-spacing` und `text-transform: uppercase` für den Tech-Look

## CSS-Variablen — warum lohnt sich das?

Ohne Variablen:
```css
h1 { color: #38bdf8; }
h2 { color: #fb923c; }
a  { color: #38bdf8; }
/* Farbe ändern? 20× ändern. */
```

Mit Variablen:
```css
:root {
    --accent: #38bdf8;
}
h1 { color: var(--accent); }
a  { color: var(--accent); }
/* Farbe ändern? 1× ändern. */
```

Genau der Grund, warum CSS-Variablen im echten Leben Pflicht sind — besonders bei Dark/Light-Mode-Umschaltung.

## `* { box-sizing: border-box; }` — was ist das?

Standardmässig rechnet CSS `padding` und `border` **on top** of der Breite. Mit `box-sizing: border-box` wird alles **innerhalb** der angegebenen Breite gerechnet — viel intuitiver.

**Best Practice** in jedem CSS-Projekt.

## `display: flex` in den Skill-Karten

Kleiner Vorgeschmack auf Lektion 3! `display: flex` + `justify-content: space-between` sorgt dafür, dass Label und Level am Kartenrand kleben — Label links, Level rechts.

## Was sonst noch geht

Der User könnte:
- Ein Light/Dark-Mode-Toggle bauen (mit JavaScript — kommt später)
- Custom-Cursor, animierte Hintergründe, SVG-Icons einfügen
- Mit `@media (prefers-color-scheme: dark)` automatisch auf Systemeinstellung reagieren

Aber das ist alles Kür — für Lektion 2 ist Dark Mode + zwei Fonts + Variablen mehr als genug!

## Wichtig zu wissen

- **Dark Mode** ist nicht "nur schwarz mit weisser Schrift". Guter Dark Mode nutzt sehr dunkle Blautöne (`#0f172a`), abgestufte Grautöne für Text, und akzentuiert mit Highlights.
- **Kontrast prüfen:** In Chrome DevTools kann man den Farbkontrast checken. Für Barrierefreiheit wichtig.
