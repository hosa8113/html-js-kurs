# Musterlösung — Übung 2

## Was hier gemacht wurde

Der Steckbrief aus Übung 1 wurde erweitert um:

- **Bild** via URL (kein lokales Bild nötig)
- **Tabelle** mit Kopfzeile (`<th>`) und Datenzellen (`<td>`)
- **Sozial-Links** als `<ul>`-Liste mit `<a>` drin
- **Zitat** mit `<blockquote>`

## Andere Wege, die auch okay sind

- **Lokales Bild statt URL:** Wenn du ein Foto von dir hast, leg's neben die `index.html` und schreib `src="mein-foto.jpg"`.
- **Definition List statt Tabelle:** Für Skills könnte auch `<dl>` (Definition List) passen. Ist seltener, aber semantisch fein.
- **`<figure>` + `<figcaption>`:** Wenn dein Bild eine Bildunterschrift braucht, ist das die saubere Lösung.

## Wichtig zu wissen

- **`alt`-Attribut ist Pflicht** bei `<img>` — auch wenn's kurz ist. Ohne `alt` kriegt dein Code später Ärger von Linters und Barrierefreiheits-Tools.
- **Tabellen sind für Daten**, nicht für Layout. Nie wieder Layouts mit Tabellen bauen — dafür kommt CSS.
- **`width` als HTML-Attribut** ist okay für Anfänger — später machen wir das mit CSS.
