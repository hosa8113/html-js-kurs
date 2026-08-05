# Musterlösung — Übung 3

## Was hier gemacht wurde

Eine Rezept-Seite als Beispiel. Verwendet:

- `<header>`, `<main>`, `<footer>` — semantisch
- `<h1>`, `<h2>`, `<p>`, `<em>`, `<img>`, `<ul>`, `<ol>`, `<li>`, `<blockquote>`, `<a>` — 10 verschiedene Tag-Arten
- **Nummerierte Liste** (`<ol>`) für die Zubereitungsschritte — passt hier besser als `<ul>`, weil die Reihenfolge wichtig ist!

## Der Denkprozess

Vor dem Coden folgende Fragen beantworten:

1. **Was ist der Titel?** → "Spaghetti Carbonara"
2. **Welche Abschnitte hat die Seite?** → Zutaten, Zubereitung, Wichtig, Mehr Rezepte
3. **Welche Reihenfolge macht Sinn?** → Zutaten → Zubereitung → Warnungen → Weiterlesen
4. **Welche Tag-Art passt zu welchem Inhalt?**
   - Zutaten = ungeordnete Liste (`<ul>`)
   - Schritte = nummerierte Liste (`<ol>`)
   - Warnung = Zitat (`<blockquote>`)

## Was jetzt oft schiefgeht

- **Alles in `<p>` packen** — statt Listen zu benutzen. Semantisch schlecht.
- **`<ol>` und `<ul>` verwechseln** — merken: **O**rdered = nummeriert, **U**nordered = Punkte.
- **Bilder ohne `alt`** — bitte immer!
- **Links ohne `https://`** → wird als relativer Link interpretiert, führt ins Nichts.

## Andere Wege

- Statt einem `<blockquote>` könnte man auch ein `<aside>` verwenden — semantisch okay für "am Rande wichtig".
- Rezepte haben ein offizielles Schema (schema.org/Recipe) mit speziellen Attributen — kommt später bei SEO/strukturierten Daten.
