# Musterlösung — Übung 3

## Was hier gemacht wurde

Ein Dashboard-Layout mit:
- **Header** (voll breit)
- **Sidebar** links (fest 240px)
- **Content** rechts (flexibel)
- **Footer** (voll breit, klebt unten dank Sticky-Footer-Trick)

Im Content:
- **Stats-Reihe** mit 3 Karten (auch Flexbox mit `flex-wrap`)
- **Hauptinhalt-Sektion** mit Liste

## Der Sticky-Footer-Trick

Das ist ein klassisches Layout-Problem: *"Wie krieg ich den Footer immer nach unten, auch wenn der Content kurz ist?"*

Die Lösung mit Flexbox:

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

**Was passiert:**
1. `body` ist mindestens so hoch wie das Fenster
2. `body` ist Flex-Container mit **Spalten-Richtung** (Header, Body, Footer untereinander)
3. `.body-wrap` bekommt `flex: 1` → nimmt allen restlichen Platz zwischen Header und Footer
4. Footer klebt automatisch ganz unten

Kein `position: fixed`, keine Berechnungen — einfach Flexbox.

## Verschachtelte Flex-Container

In dieser Lösung sind mehrere Flex-Container ineinander:

1. `body` → vertikal: Header, Body-Wrap, Footer
2. `.body-wrap` → horizontal: Sidebar, Content
3. `header` → horizontal: Logo, User
4. `.sidebar nav` → vertikal: Menü-Links
5. `.stats` → horizontal: Stat-Karten

**Wichtige Erkenntnis:** Flexbox verschachtelt sich problemlos. Jeder Container hat sein eigenes Flex-Verhalten. Das ist die Superkraft.

## `flex: 0 0 240px` — was macht das?

- `flex-grow: 0` → wächst nicht
- `flex-shrink: 0` → schrumpft nicht
- `flex-basis: 240px` → Basis-Breite 240px

Ergebnis: **Sidebar bleibt immer genau 240px**, egal was passiert. Perfekt für Navigation.

## `flex: 1` auf `.content` — was macht das?

Kurzform von `flex: 1 1 0`. Bedeutet: *"Wachse, schrumpfe, starte bei 0."*

Weil die Sidebar fix ist, bleibt der Rest für Content → nimmt genau diesen Rest.

## Farb-Ideen für Dashboards

- **Dunkler Header + dunkle Sidebar** → wirkt hochwertig
- **Weisser Content** → gute Lesbarkeit für Zahlen und Text
- **Ein Highlight-Farbton** (hier `#3498db`) für aktive Menüpunkte und wichtige Zahlen

Das sind Konventionen, die du in echten Web-Apps (Notion, Linear, Slack) überall siehst.

## Was jetzt fehlt (für später)

- **Mobile Menu** — auf Handy wäre die Sidebar zu breit. Man würde sie ausblenden und über einen Hamburger-Button einblenden. Kommt mit JavaScript.
- **Media Queries** — für gezielte Anpassungen ab bestimmten Breiten. Auch für später.

## Häufige Fehler

- **`min-height: 100vh` auf `body` vergessen** → Sticky Footer funktioniert nicht bei kurzem Content
- **`flex-direction: column` beim body vergessen** → alles wird horizontal, chaos pur
- **Sidebar bekommt `width: 240px` statt `flex: 0 0 240px`** → funktioniert, aber unsauber
