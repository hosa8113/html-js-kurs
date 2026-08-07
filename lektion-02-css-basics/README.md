# Lektion 2 — CSS Basics: Farben & Schrift

**Dauer:** 90 Minuten
**Vorher:** Lektion 1 abgeschlossen (HTML-Grundgerüst)
**Am Ende:** Dein Steckbrief aus Lektion 1 sieht endlich gut aus.

---

## Lernziele

Nach dieser Lektion kannst du:

- Erklären, was CSS ist und wie es HTML verändert
- CSS in eine HTML-Seite einbinden (extern via `<link>`)
- Selektoren nutzen: Tag, Klasse, ID
- Die wichtigsten Eigenschaften anwenden: `color`, `background-color`, `font-family`, `font-size`, `padding`, `margin`, `border`
- Farben mit Hex-Codes und Namen setzen
- Fonts von Google Fonts einbinden

## Vorwissen

- Lektion 1 (HTML-Grundgerüst)
- Deine Steckbrief-Seite von Lektion 1 sollte griffbereit sein

---

## Theorie (15 Minuten)

### Was ist CSS?

**CSS** = **C**ascading **S**tyle **S**heets. Die Sprache, mit der du Webseiten stylst — Farben, Schriften, Abstände, Layout.

Merkregel:
- **HTML** = die Struktur (was ist auf der Seite?)
- **CSS** = das Aussehen (wie sieht es aus?)
- **JavaScript** = das Verhalten (was passiert bei Interaktion?)

### CSS einbinden — drei Wege

**1. Inline (schlecht, nicht machen):**
```html
<p style="color: red;">Text</p>
```

**2. Im `<head>` mit `<style>` (okay für Mini-Projekte):**
```html
<head>
    <style>
        p { color: red; }
    </style>
</head>
```

**3. Externe Datei (Best Practice — machen wir!):**
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

### CSS-Syntax

```css
selektor {
    eigenschaft: wert;
    eigenschaft: wert;
}
```

Beispiel:
```css
h1 {
    color: blue;
    font-size: 32px;
}
```

Das heisst: *"Alle `<h1>` bekommen blaue Schrift mit 32 Pixel Grösse."*

### Selektoren — wie sprichst du Elemente an?

| Selektor | Bedeutung | Beispiel |
|----------|-----------|----------|
| `p` | Alle `<p>`-Tags | `p { color: gray; }` |
| `.klassenname` | Alle Elemente mit `class="klassenname"` | `.wichtig { color: red; }` |
| `#idname` | Das Element mit `id="idname"` | `#header { background: black; }` |
| `h1, h2, h3` | Mehrere gleichzeitig | `h1, h2 { font-family: Arial; }` |

**HTML dazu:**
```html
<p class="wichtig">Roter Text</p>
<div id="header">Schwarzer Hintergrund</div>
```

**Merke:**
- **Klassen** (`.`) darfst du mehrfach verwenden
- **IDs** (`#`) sollten nur einmal pro Seite vorkommen

### Farben — vier Wege

```css
color: red;                    /* Name */
color: #ff0000;                /* Hex */
color: rgb(255, 0, 0);         /* RGB */
color: rgba(255, 0, 0, 0.5);   /* RGB mit Transparenz */
```

Für den Anfang: Namen und Hex reichen. Hex-Codes findest du z.B. auf https://coolors.co

### Die wichtigsten Eigenschaften

| Eigenschaft | Was macht sie? | Beispiel |
|-------------|----------------|----------|
| `color` | Textfarbe | `color: #333;` |
| `background-color` | Hintergrundfarbe | `background-color: #f0f0f0;` |
| `font-family` | Schriftart | `font-family: Arial, sans-serif;` |
| `font-size` | Schriftgrösse | `font-size: 18px;` |
| `font-weight` | Fett/normal | `font-weight: bold;` |
| `text-align` | Textausrichtung | `text-align: center;` |
| `padding` | Innenabstand | `padding: 20px;` |
| `margin` | Aussenabstand | `margin: 10px;` |
| `border` | Rahmen | `border: 1px solid black;` |
| `border-radius` | Abgerundete Ecken | `border-radius: 8px;` |

### Das Box-Modell (wichtig!)

Jedes HTML-Element ist im Grunde ein Kasten mit vier Schichten:

```
┌─────────────────────────────┐
│         margin              │  <- Abstand nach aussen
│  ┌───────────────────────┐  │
│  │        border         │  │  <- Rahmen
│  │  ┌─────────────────┐  │  │
│  │  │     padding     │  │  │  <- Abstand nach innen
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  Inhalt   │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

**Öffne die DevTools** (F12), klick auf ein Element, dann rechts auf "Computed" oder "Layout" — du siehst genau dieses Modell live.

### Google Fonts einbinden

Willst du eine coole Schriftart? Google Fonts hat gratis Fonts. So:

1. Auf https://fonts.google.com eine Schrift wählen
2. "Get font" → "Get embed code"
3. Den `<link>` Tag ins `<head>` kopieren
4. In CSS nutzen: `font-family: 'Roboto', sans-serif;`

---

## Live-Demo (30 Minuten)

Wir nehmen deinen Steckbrief aus Lektion 1 und stylen ihn Schritt für Schritt.

**Schritte:**

1. Kopiere deinen Steckbrief-Ordner → `mein-steckbrief-v2`
2. Neue Datei `style.css` im gleichen Ordner
3. Im `<head>` einbinden: `<link rel="stylesheet" href="style.css">`
4. Datei speichern → Live Server läuft weiter
5. In `style.css`:
   - `body { font-family: sans-serif; }` → Schrift ändert sich
   - `body { background-color: #f5f5f5; }` → Hintergrund grau
   - `h1 { color: #2c3e50; }` → Überschrift wird dunkelblau
   - `main { padding: 40px; max-width: 800px; margin: 0 auto; }` → zentriert und mit Abstand

Schau nach jedem Schritt in den Browser — DevTools mit F12 immer offen halten.

**Beispiel-Endergebnis** liegt unter `beispiel/`.

---

## Übungen (45 Minuten)

- **Übung 1:** Steckbrief stylen (geführt, mit vorgegebenem Farbschema)
- **Übung 2:** Klassen & IDs (Skill-Karten, Highlight-Boxen)
- **Übung 3:** Google Font + eigenes Farbschema (frei)

---

## Bonus

Öffne https://coolors.co/generate und generiere ein 5-Farben-Schema. Wende es auf deinen Steckbrief an. Ergebnis: professionell aussehende Seite in 5 Minuten.

---

## Checkliste vor der nächsten Lektion

- [ ] Ich kann CSS als externe Datei einbinden
- [ ] Ich verstehe den Unterschied zwischen Tag-, Klassen- und ID-Selektor
- [ ] Ich habe das Box-Modell in den DevTools gesehen und verstanden
- [ ] Ich habe mindestens einmal einen Google Font eingebunden
- [ ] Meine Steckbrief-Seite sieht *anders* aus als vorher

**Nächste Lektion:** Flexbox — endlich Sachen nebeneinander statt untereinander. 📐
