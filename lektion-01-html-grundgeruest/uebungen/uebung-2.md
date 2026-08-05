# Übung 2 — Steckbrief erweitern

**Schwierigkeit:** Mittel
**Zeit:** ca. 15 Minuten

## Aufgabe

Erweitere deine Steckbrief-Seite aus Übung 1 um folgende Elemente:

1. **Ein Bild von dir** (oder ein beliebiges Bild, z.B. ein Avatar oder ein Meme)
2. **Eine Skill-Tabelle** — Was kannst du schon? Was möchtest du lernen?
3. **Sozial-Links** als Liste (Instagram, GitHub, TikTok, Discord, ...)
4. **Ein Zitat**, das dich beschreibt (nutze das Tag `<blockquote>`)

## Neue Tags, die du brauchst

### Bild einfügen

```html
<img src="mein-bild.jpg" alt="Ein Bild von mir">
```

- `src` = Dateiname oder URL des Bildes
- `alt` = Text, der angezeigt wird, wenn das Bild nicht lädt (wichtig für Barrierefreiheit!)

Lege das Bild in denselben Ordner wie deine `index.html` — oder nutze eine URL aus dem Internet.

### Tabelle bauen

```html
<table>
    <tr>
        <th>Skill</th>
        <th>Niveau</th>
    </tr>
    <tr>
        <td>HTML</td>
        <td>Anfänger</td>
    </tr>
</table>
```

- `<table>` = Tabelle
- `<tr>` = Table Row (Zeile)
- `<th>` = Table Header (Kopfzelle)
- `<td>` = Table Data (normale Zelle)

### Zitat

```html
<blockquote>
    "Der Weg ist das Ziel."
</blockquote>
```

## Anforderungen

- [ ] Mindestens 1× `<img>` mit `src` und `alt`
- [ ] Eine `<table>` mit mindestens 3 Skills
- [ ] Eine Liste von mindestens 3 Sozial-Links
- [ ] Ein `<blockquote>`
- [ ] Die Seite hat immer noch ein sauberes Grundgerüst

## Hinweise

- **Bild-Ideen:** Kein Foto von dir? Nimm einen Avatar von https://ui-avatars.com oder ein Bild aus deinem Ordner.
- **Öffne dein Bild direkt im Browser** und schau, was in der Adressleiste steht — das ist der Pfad.
- **DevTools → Elements Tab** — schau dir an, wie der Browser deine Tags interpretiert.

## Bonus

Kannst du zwei verschiedene Bild-Grössen erreichen, indem du das `width`-Attribut nutzt?

```html
<img src="bild.jpg" alt="..." width="200">
```
