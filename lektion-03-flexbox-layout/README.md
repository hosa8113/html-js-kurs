# Lektion 3 — Flexbox & Layout

**Dauer:** 90 Minuten
**Vorher:** Lektion 1 & 2 abgeschlossen
**Am Ende:** Ein sauberes Portfolio-Layout mit Header, Navigation, Karten-Reihe und Footer.

---

## Lernziele

Nach dieser Lektion kannst du:

- Erklären, warum Flexbox existiert (und wie man früher gelitten hat)
- Elemente **nebeneinander** statt untereinander anordnen
- Flexbox-Container mit `display: flex` aktivieren
- Die wichtigsten Flexbox-Eigenschaften nutzen: `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap`
- Elemente flexibel wachsen/schrumpfen lassen mit `flex: 1`
- Eine Navigation, Card-Reihen und ein Mehrspalten-Layout bauen

## Vorwissen

- Lektion 1 (HTML)
- Lektion 2 (CSS-Basics, Selektoren, Box-Modell)

---

## Theorie (15 Minuten)

### Warum Flexbox?

Standardmässig stapelt HTML alles untereinander (Block-Elemente wie `<div>`, `<section>`, `<p>`) oder nebeneinander in einer Zeile (Inline-Elemente wie `<span>`, `<a>`).

Sobald du **komplexe Layouts** willst — Navigation mit Logo links und Links rechts, Karten in mehreren Spalten, ein Element vertikal zentriert — wird es ohne Hilfe qualvoll.

**Flexbox** ist die moderne Lösung dafür. Ein Konzept, unzählige Layouts.

### Die Grundidee

Du hast einen **Container** (Eltern-Element) und **Items** (Kinder). Sobald du dem Container `display: flex` gibst, werden alle direkten Kinder zu Flex-Items — und du kannst sie beliebig anordnen.

```html
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
```

```css
.container {
    display: flex;
}
```

Ergebnis: A B C nebeneinander statt untereinander.

### Die 5 wichtigsten Eigenschaften

**Auf dem Container:**

| Eigenschaft | Was macht sie? | Beispielwerte |
|-------------|----------------|---------------|
| `display: flex` | Aktiviert Flexbox | — |
| `flex-direction` | Richtung der Items | `row` (default), `column`, `row-reverse` |
| `justify-content` | Ausrichtung entlang der Hauptachse | `flex-start`, `center`, `flex-end`, `space-between`, `space-around` |
| `align-items` | Ausrichtung entlang der Nebenachse | `stretch` (default), `center`, `flex-start`, `flex-end` |
| `gap` | Abstand zwischen Items | `10px`, `20px`, ... |
| `flex-wrap` | Umbruch bei Platzmangel | `nowrap` (default), `wrap` |

**Auf den Items:**

| Eigenschaft | Was macht sie? | Beispiel |
|-------------|----------------|----------|
| `flex: 1` | Item wächst und teilt Platz gleichmässig | `flex: 1` |
| `flex: 2` | Item nimmt doppelt so viel Platz wie ein `flex: 1` | `flex: 2` |
| `align-self` | Überschreibt `align-items` für dieses eine Item | `align-self: flex-end` |

### Die Achsen — wichtig zu verstehen!

Flexbox hat zwei Achsen:

- **Hauptachse (Main axis):** die Richtung, in der die Items angeordnet sind
- **Nebenachse (Cross axis):** senkrecht dazu

Bei `flex-direction: row` (default):
```
  Nebenachse
      ↑
      │
      │   [A] [B] [C]   →  Hauptachse
      │
```

Bei `flex-direction: column`:
```
      [A]
      [B]   →  Hauptachse (jetzt vertikal!)
      [C]
        →  Nebenachse (jetzt horizontal!)
```

**`justify-content`** wirkt immer entlang der **Hauptachse**.
**`align-items`** wirkt immer entlang der **Nebenachse**.

Wenn du `flex-direction` änderst, tauschen die beiden ihre Wirkung — das ist am Anfang verwirrend, mit Übung total logisch.

### Der "Zentrieren"-Trick

Ein Element horizontal UND vertikal zentrieren — das war früher der grösste Schmerz. Heute:

```css
.container {
    display: flex;
    justify-content: center;   /* horizontal */
    align-items: center;       /* vertikal */
    height: 100vh;             /* volle Bildschirmhöhe */
}
```

**Fertig.** Vergiss nie, wie einfach das ist.

### `gap` — der einfachste Weg für Abstände

Früher: `margin-right` auf allen Items ausser dem letzten. Umständlich.
Heute: `gap: 20px` auf dem Container. Alle Items haben 20px Abstand zueinander. Done.

### `flex-wrap` — Umbruch bei Platzmangel

Ohne Wrap: Items quetschen sich zusammen oder überlaufen.
Mit `flex-wrap: wrap`: Items brechen in die nächste Zeile um, wenn's zu eng wird.

```css
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

Wichtig für responsive Layouts (Handy vs. Desktop).

---

## Live-Demo (30 Minuten)

Wir bauen zusammen eine **Portfolio-Seite** mit:
- Header oben mit Logo links, Navigation rechts (`justify-content: space-between`)
- Main-Bereich mit 3 gleich grossen Karten nebeneinander
- Footer unten

Schau dir `beispiel/index.html` und `beispiel/style.css` an — das ist das Ziel.

**Schritte:**

1. HTML-Grundgerüst mit `<header>`, `<main>`, `<footer>`
2. Im Header: `<div class="logo">` und `<nav>` mit Links
3. Header stylen mit `display: flex; justify-content: space-between; align-items: center`
4. Im Main: 3 `<div class="karte">` Elemente
5. Main stylen mit `display: flex; gap: 20px`
6. Jede `.karte` bekommt `flex: 1` → gleiche Breite
7. `flex-wrap: wrap` hinzufügen → auf schmalen Bildschirmen brechen die Karten um

**Wichtig:** DevTools → Element anklicken → in Chrome siehst du oben rechts einen kleinen "flex"-Badge. Klick drauf und spiel mit den Werten live!

---

## Übungen (45 Minuten)

- **Übung 1:** Navigation-Bar mit Flexbox (geführt)
- **Übung 2:** Card-Grid mit `flex-wrap` (mittel)
- **Übung 3:** Komplettes Website-Layout — Header, Sidebar, Content, Footer (frei)

---

## Bonus

Geh auf https://flexboxfroggy.com und spiele die 24 Levels durch. Bestes Flexbox-Tutorial im Netz. Sollte in 30 Minuten machbar sein und macht Flexbox intuitiv.

---

## Checkliste vor der nächsten Lektion

- [ ] Ich weiss, was `display: flex` auf einem Container macht
- [ ] Ich kann Elemente horizontal UND vertikal zentrieren
- [ ] Ich verstehe den Unterschied zwischen `justify-content` und `align-items`
- [ ] Ich habe `flex: 1` verwendet, um Elemente den Platz teilen zu lassen
- [ ] Ich habe `gap` statt `margin` für Abstände verwendet
- [ ] Ich habe in den DevTools den Flex-Inspektor geöffnet und ausprobiert

**Nächste Lektion:** Bilder, Links, Listen — eine kleine Fanpage bauen. 🖼️
