# Übung 3 — Eigenes Design mit Google Font

**Schwierigkeit:** Frei
**Zeit:** ca. 15 Minuten

## Aufgabe

Design deinen Steckbrief **komplett nach eigenem Geschmack** — mit einem Google Font und einem selbstgewählten Farbschema.

## Schritt 1: Farbschema wählen

Geh auf https://coolors.co/generate und drücke `Space`, bis dir eine Palette gefällt. Du brauchst ~5 Farben:

- 1× Hauptfarbe (für Überschriften, wichtige Elemente)
- 1× Akzentfarbe (für Links, Highlights)
- 1× Hintergrundfarbe (hell oder dunkel — dein Ding)
- 1× Textfarbe
- 1× Karten-/Section-Hintergrund

**Kopiere die Hex-Codes.**

## Schritt 2: Google Font wählen

Geh auf https://fonts.google.com

Empfehlungen für Anfänger:
- **Inter** — modern, sehr lesbar
- **Roboto** — Klassiker
- **Poppins** — freundlich, rund
- **JetBrains Mono** — Coder-Vibe (Monospace)
- **Bebas Neue** — starker Header-Font

**Einbinden:**

1. Font auswählen → oben rechts "Get font"
2. "Get embed code" → `<link>` kopieren
3. Ins `<head>` einfügen:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
   ```
4. In CSS verwenden:
   ```css
   body {
       font-family: 'Poppins', sans-serif;
   }
   ```

## Schritt 3: Style deinen Steckbrief

Wende deine Farben und Font auf den Steckbrief an. Sei kreativ:

- Dunkles Design (Dark Mode)?
- Bunt und verspielt?
- Minimalistisch schwarz-weiss?
- Retro-Look mit Bebas Neue?

## Anforderungen

- [ ] Google Font ist eingebunden und wird verwendet
- [ ] Mindestens 4 verschiedene Farben aus deinem Schema
- [ ] `padding` und `margin` bewusst gesetzt (keine Elemente kleben aneinander)
- [ ] Mindestens 2 verschiedene Klassen für unterschiedliche Styles
- [ ] Sieht **anders** aus als das Beispiel

## Bonus-Herausforderungen

- **Dark Mode:** Dunkler Hintergrund + helle Schrift. Sieht immer edel aus.
- **Hover-Effekte:** Links oder Karten reagieren beim Drüberfahren
- **Zwei Fonts kombinieren:** Ein Font für Überschriften, ein anderer für Text (z.B. Bebas Neue + Inter)
- **CSS-Variable nutzen:**
  ```css
  :root {
      --hauptfarbe: #ff6b6b;
      --hintergrund: #1a1a2e;
  }
  body {
      background-color: var(--hintergrund);
      color: var(--hauptfarbe);
  }
  ```
  → Farbwechsel an einer Stelle ändern.

## Kein Erwartetes Ergebnis

Deine Version soll **deine** sein. Zeig sie mir stolz nach der Übung.

Lösung in `loesungen/uebung-3/` — aber das ist nur **eine** von tausend möglichen Varianten.
