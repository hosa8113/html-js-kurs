# Musterlösung — Übung 1

## Was hier gemacht wurde

Eine Rocket-League-Fanpage als Beispiel. Enthält alle Pflichtelemente:

- Header mit Nav und aktiv-markiertem Home-Link
- Hero-Bild mit `object-fit: cover`
- `<ul>` und `<ol>` mit sinnvollem Inhalt
- Sprungmarke zu `#kontakt`
- Externer Link mit `target="_blank" rel="noopener"`
- `mailto:`-Link
- Footer mit Copyright-Hinweis

## Wichtige Details

### `loading="lazy"` auf jedem Bild

Bilder werden erst geladen, wenn sie beim Scrollen sichtbar werden. Bei einer Fanpage mit vielen Bildern spart das enorm Ladezeit — der Nutzer sieht die Seite sofort, statt zu warten.

**Ausnahme:** Das Hero-Bild ganz oben braucht **kein** `loading="lazy"`, weil es sofort sichtbar ist. Lazy Loading wäre hier sogar kontraproduktiv (kann zu Blitzen führen). In der Praxis: `loading="eager"` für das erste Bild, `lazy` für alle anderen.

Für die Übung ist `lazy` auf allem okay — merkbarer Unterschied nur bei sehr vielen Bildern.

### `rel="noopener"` — Sicherheits-Detail

Wenn ein Link mit `target="_blank"` öffnet, kann die neue Seite technisch auf `window.opener` zugreifen und deine Seite manipulieren (Redirect-Angriffe). `rel="noopener"` blockt das.

**Merke:** `target="_blank"` bekommt **immer** auch `rel="noopener"`. In modernen Browsern ist das Verhalten mittlerweile default, aber sicher ist sicher.

### Der Hero-Bereich

Zwei gängige Muster:
1. **Bild + Text darunter** (wie in dieser Lösung) — einfach, funktioniert
2. **Bild mit Text drüber** (wie im `beispiel/`) — sieht cooler aus, braucht `position: relative` + `position: absolute`

Für die Übung tut's Variante 1.

## Häufige Fehler

- **Sprungmarke ohne `id` am Ziel** → Link führt ins Nichts
- **`<a href="hobbys">` ohne `.html`** → Browser sucht Ordner statt Datei
- **`alt=""` leer** → nur okay bei rein dekorativen Bildern (Logos, Trennlinien). Bei Content-Bildern immer Beschreibung.

## Andere Wege

- **Bilder lokal statt URL:** Ordner `bilder/` anlegen, Fotos rein, `src="bilder/foto.jpg"`. Vorteil: funktioniert offline und ist schneller.
- **Hero mit `<section class="hero">`** statt losem `<img>` — semantisch cleaner für spätere Weiterentwicklung.
