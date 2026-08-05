# Übung 2 — Klassen & IDs

**Schwierigkeit:** Mittel
**Zeit:** ca. 15 Minuten

## Aufgabe

Erweitere deinen gestylten Steckbrief aus Übung 1 mit **Klassen** und **IDs**, um bestimmte Elemente hervorzuheben.

## Anforderungen

### 1. Highlight-Box mit Klasse `.hinweis`

Füge irgendwo in deinen Steckbrief eine neue `<section class="hinweis">` ein — z.B. für einen wichtigen Hinweis, ein Ziel, was du gerade lernst.

Style die Klasse `.hinweis`:
- Gelber Hintergrund (`#fff9e6`)
- Linker Rand: `4px solid #f39c12` (Orange)
- Innenabstand: `20px`
- Abgerundete Ecken: `border-radius: 8px`

### 2. Skill-Karten mit gemeinsamer Klasse

Baue eine neue Section mit deinen Top-3-Skills, jede als eigene `<div>` mit Klasse `.skill-karte`:

```html
<section>
    <h2>Meine Skills</h2>
    <div class="skill-karte">
        <h3>HTML</h3>
        <p>Grundlagen sitzen.</p>
    </div>
    <div class="skill-karte">
        <h3>CSS</h3>
        <p>Grad am Lernen.</p>
    </div>
    <div class="skill-karte">
        <h3>Gaming</h3>
        <p>Semi-pro.</p>
    </div>
</section>
```

Style `.skill-karte`:
- Hintergrund weiss
- Rahmen: `1px solid #ddd`
- Padding: `16px`
- Margin zwischen den Karten: `10px 0`
- Abgerundete Ecken

### 3. Einzigartiges Element mit ID

Setze deinem `<header>` eine ID: `<header id="haupt-header">`

Style `#haupt-header`:
- Hintergrund: `#2c3e50` (dunkelblau)
- Textfarbe: weiss
- Padding: `40px 20px`
- Text zentriert

**Warum ID statt Klasse?** Weil es nur einen Haupt-Header pro Seite gibt.

## Anforderungen-Check

- [ ] `.hinweis`-Klasse existiert und ist sichtbar
- [ ] `.skill-karte`-Klasse wird auf mehrere Elemente angewendet
- [ ] `#haupt-header`-ID existiert und stylt den Header
- [ ] In DevTools sichtbar, welche Regel greift

## Bonus

- Nutze `:hover` für die Skill-Karten:
  ```css
  .skill-karte:hover {
      background-color: #f0f8ff;
      cursor: pointer;
  }
  ```
- Was passiert? Warum ist das cool?

Lösung in `loesungen/uebung-2/`.
