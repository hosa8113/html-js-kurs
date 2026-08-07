# Musterlösung — Übung 2

## Was hier gemacht wurde

- **ID `#haupt-header`** stylt den einen Header
- **Klasse `.hinweis`** könnte man mehrfach verwenden
- **Klasse `.skill-karte`** wird 3× verwendet — alle Karten sehen gleich aus, ohne dass man den Style dreimal schreibt
- **`:hover`** macht die Karten interaktiv

## Wann Klasse, wann ID?

**Faustregel:**
- Element gibt's genau **einmal** pro Seite? → **ID**
- Element gibt's **mehrfach**, oder könnte mehrfach vorkommen? → **Klasse**

**In der Praxis:** Man nutzt viel öfter Klassen als IDs. IDs bringt man vor allem für Anchor-Links (`#section1`) und für JavaScript (`document.getElementById(...)`).

## Der `:hover`-Trick

`.skill-karte:hover` heisst: *"Wenn die Maus über der Karte ist, mach folgendes."*

Das ist eine **Pseudo-Klasse**. Es gibt viele davon:
- `:hover` — Maus drüber
- `:focus` — Element hat Fokus (z.B. Input-Feld)
- `:active` — wird grad geklickt
- `:first-child` — erstes Kind-Element

Mit `transition: background-color 0.2s;` wird der Farbwechsel **weich** animiert statt hart.

## Häufige Fehler

- **ID zweimal vergeben** — HTML ist dann formal ungültig
- **Punkt bei ID-Selektor** (`.haupt-header` statt `#haupt-header`) — greift nicht
- **Vergessen, `class="..."` im HTML zu setzen** — dann nützt die schönste CSS-Regel nix

## Andere Wege

- **`.skill-karte` als `<article>`:** Semantisch könnte man statt `<div class="skill-karte">` auch `<article class="skill-karte">` schreiben — jede Karte ist ja ein eigenständiges Stück Info.
- **Gemeinsame Basisklasse + Modifikator:** Bei grösseren Projekten wird oft eine Namenskonvention wie BEM verwendet (`skill-karte--wichtig`). Kommt später.
