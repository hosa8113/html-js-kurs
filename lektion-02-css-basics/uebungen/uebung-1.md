# Übung 1 — Steckbrief stylen (geführt)

**Schwierigkeit:** Einfach
**Zeit:** ca. 15 Minuten

## Aufgabe

Nimm deinen Steckbrief aus Lektion 1 und wende folgendes Styling an. Alle Werte sind vorgegeben — kopieren erlaubt, aber **verstehen was du kopierst**.

## Setup

1. Kopiere deinen Steckbrief-Ordner (oder mach eine neue Version)
2. Erstelle eine neue Datei `style.css` im gleichen Ordner
3. Verlinke sie im `<head>` deiner HTML-Datei:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
4. Speichern → Live Server sollte automatisch neu laden

## Vorgaben

Setze folgende Styles um:

### Ganze Seite
- Schriftart: `sans-serif`
- Hintergrundfarbe: `#f5f5f5` (helles Grau)
- Textfarbe: `#333` (dunkles Grau, nicht reines Schwarz)
- Innenabstand am `body`: `20px`

### Überschrift `<h1>`
- Farbe: `#2c3e50` (dunkelblau)
- Zentriert (`text-align: center`)

### Zwischenüberschriften `<h2>`
- Farbe: `#3498db` (helleres Blau)
- Unterstrichen mit `border-bottom: 2px solid #3498db`

### Links `<a>`
- Farbe: `#e74c3c` (rot)
- Ohne Unterstreichung (`text-decoration: none`)

## Anforderungen

- [ ] CSS ist eine **externe** Datei (nicht `<style>` im Head)
- [ ] Alle 4 Bereiche oben umgesetzt
- [ ] In DevTools (F12) → Tab "Elements" → Element anklicken → auf der rechten Seite siehst du deine CSS-Regeln greifen

## Erwartetes Ergebnis

Deine Seite sieht jetzt **nicht mehr aus wie 1998**. Grauer Hintergrund, dunkelblaue Überschrift, blaue Zwischenüberschriften mit Unterstrich, rote Links.

## Stuck?

- **Nichts ändert sich?** → Ist der `<link>` Tag richtig im `<head>`? Ist der Dateiname korrekt? (`style.css` vs `Style.css` — Achtung Gross/Klein!)
- **Nur manches funktioniert?** → Öffne DevTools, klick das Element an, schau ob deine Regel unter "Styles" auftaucht
- **CSS-Regel ist durchgestrichen?** → Wird von einer anderen Regel überschrieben (Spezifität — kommt später)

Lösung in `loesungen/uebung-1/`.
