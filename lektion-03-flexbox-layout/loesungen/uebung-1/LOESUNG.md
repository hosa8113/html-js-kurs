# Musterlösung — Übung 1

## Was hier gemacht wurde

Die "3 Zauberzeilen" von Flexbox auf den Header:

```css
display: flex;
justify-content: space-between;
align-items: center;
```

Und einen zweiten Flex-Container auf `<nav>`, damit `gap: 20px` zwischen den Links funktioniert.

## Warum zwei Flex-Container?

- `header` mit Flex → Logo und Nav auf einer Zeile
- `nav` mit Flex → die Links darin nebeneinander mit gleichmässigem Abstand

Man könnte theoretisch nur den Header als Flex-Container haben und die Links mit `margin` beabstanden — aber:

- `gap` in Flexbox ist sauberer als `margin`
- `nav` sowieso als Flex zu behandeln ist konsistenter und flexibler

## `space-between` — was macht das genau?

Wenn du 2 (oder mehr) Elemente im Flex-Container hast:

- **1. Element** klebt am **Anfang**
- **letztes Element** klebt am **Ende**
- **alle anderen** verteilen sich gleichmässig dazwischen

Bei nur zwei Elementen: eins links, eins rechts, riesiger Abstand dazwischen. Genau was wir wollen.

Andere Werte:
- `flex-start` → alles klebt links
- `flex-end` → alles klebt rechts
- `center` → alles in der Mitte
- `space-around` → gleicher Abstand zwischen und ausserhalb der Items
- `space-evenly` → wirklich gleicher Abstand überall

## Häufige Fehler

- **`display: flex` vergessen** → nix passiert
- **`justify-content` und `align-items` verwechselt** → siehe Theorie: `justify` = Hauptachse, `align` = Nebenachse
- **`gap` nicht unterstützt?** → Nein, alle modernen Browser können das. Aus jedem Tutorial mit `margin-right: 20px` einfach `gap: 20px` machen.
