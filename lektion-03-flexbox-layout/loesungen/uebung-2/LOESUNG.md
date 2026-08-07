# Musterlösung — Übung 2

## Der Kern-Trick

```css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.karte {
    flex: 1 1 300px;
}
```

**Was passiert Schritt für Schritt:**

1. **Bildschirm > 940px** (ca. 3 × 300px + Gaps): 3 Karten pro Zeile
2. **Bildschirm zwischen 620px und 940px**: 2 Karten pro Zeile (dritte bricht um)
3. **Bildschirm < 620px**: 1 Karte pro Zeile

Die Umbruch-Punkte ergeben sich **automatisch** aus der `300px` Basis-Breite — ohne Media Queries! Ein wichtiger Vorteil von Flexbox für einfache responsive Layouts.

## Warum `flex: 1 1 300px` und nicht nur `width: 300px`?

Mit fester `width: 300px`:
- Karten sind **immer** 300px breit
- Bleibt Platz übrig → hässliche Lücke rechts
- Passt nichts mehr → Karten quetschen sich oder überlaufen

Mit `flex: 1 1 300px`:
- Karten sind **mindestens** 300px
- **Wachsen** in freien Platz rein → füllen die Zeile
- **Schrumpfen** wenn nötig → bevor sie überlaufen, brechen sie um

Deutlich intelligenter.

## Der Hover-Effekt

```css
transition: transform 0.2s, box-shadow 0.2s;
```

**Wichtig:** `transition` gehört auf den **Normal-Zustand**, nicht auf `:hover`. Sonst animiert nur "rein", "raus" ist hart.

```css
transform: translateY(-4px);
```

Verschiebt die Karte 4px nach oben — sieht aus wie "abheben". Klassischer UI-Trick.

## Was ist eigentlich der Unterschied zu CSS Grid?

- **Flexbox** = 1-dimensional (Zeile ODER Spalte)
- **Grid** = 2-dimensional (Zeilen UND Spalten gleichzeitig planen)

Für ein Card-Grid könnte man auch CSS Grid nehmen, aber Flexbox mit `flex-wrap` reicht völlig für den Einstieg. CSS Grid kommt in einem späteren Kurs.

## Bonus: Was macht `box-sizing: border-box`?

Ohne (default `content-box`):
- `width: 300px` = **nur der Inhalt** ist 300px
- Padding und Border kommen **oben drauf**
- Tatsächliche Breite = 300px + 2 × 24px + 2 × 1px = 350px 🤯

Mit `border-box`:
- `width: 300px` = **inklusive Padding und Border**
- Tatsächliche Breite = 300px. Wie erwartet.

**Deshalb** wird `box-sizing: border-box` in jedem modernen CSS-Projekt global gesetzt.
