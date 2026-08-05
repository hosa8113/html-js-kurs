# Lektion 1 — HTML-Grundgerüst

**Dauer:** 90 Minuten
**Am Ende:** Du hast deine erste eigene Webseite — einen Steckbrief über dich.

---

## Lernziele

Nach dieser Lektion kannst du:

- Erklären, was HTML ist und wozu es dient
- Ein HTML-Dokument von Null selbst aufbauen
- Die wichtigsten Tags verwenden: `<h1>`, `<p>`, `<ul>`, `<li>`, `<a>`, `<img>`
- Eine HTML-Datei im Browser öffnen und anschauen

## Vorwissen

Keins. Nur VS Code + Browser installiert.

---

## Theorie (10 Minuten lesen)

### Was ist HTML?

HTML steht für **HyperText Markup Language**. Das ist keine Programmiersprache im engeren Sinn — es ist eine **Auszeichnungssprache**. Du sagst dem Browser damit: "Das hier ist eine Überschrift", "Das ist ein Absatz", "Das ist ein Link".

Jede Webseite im Internet beginnt mit HTML.

### Ein Tag sieht so aus:

```html
<p>Das ist ein Absatz.</p>
```

- `<p>` ist der **öffnende Tag**
- `</p>` ist der **schliessende Tag**
- Alles dazwischen ist der **Inhalt**

Manche Tags brauchen keinen Schluss (z.B. `<img>` oder `<br>`).

### Das Grundgerüst

Jedes HTML-Dokument sieht so aus:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Titel im Browser-Tab</title>
</head>
<body>
    <!-- Hier kommt der sichtbare Inhalt rein -->
</body>
</html>
```

Was macht was?

- `<!DOCTYPE html>` — "Hey Browser, das ist HTML5"
- `<html>` — der ganze Inhalt lebt hier drin
- `<head>` — Info über die Seite (Titel, Zeichensatz). Sieht der Nutzer nicht direkt.
- `<body>` — alles, was du auf der Seite siehst

### Die wichtigsten Tags für heute

| Tag | Was macht er? |
|-----|---------------|
| `<h1>` bis `<h6>` | Überschriften (h1 = grösste, h6 = kleinste) |
| `<p>` | Absatz (paragraph) |
| `<ul>` + `<li>` | Ungeordnete Liste mit Punkten |
| `<ol>` + `<li>` | Nummerierte Liste |
| `<a href="...">` | Link |
| `<img src="..." alt="...">` | Bild |
| `<br>` | Zeilenumbruch |

### Semantische Tags (wichtig für Applikationsentwickler!)

Statt alles in `<div>` zu packen, gibt es Tags, die dem Browser **sagen, was der Inhalt bedeutet**:

```html
<header>...</header>   <!-- Kopfbereich der Seite -->
<main>...</main>       <!-- Hauptinhalt -->
<section>...</section> <!-- Ein Abschnitt -->
<footer>...</footer>   <!-- Fussbereich -->
```

Das nennt man **semantisches HTML**. Screenreader für Blinde, Google und andere Tools verstehen deine Seite dadurch besser.

---

## Live-Demo (30 Minuten)

Wir bauen zusammen die Steckbrief-Seite. Schau dir `beispiel/index.html` an — genau so soll's am Ende aussehen.

**Schritte:**

1. VS Code öffnen → neuer Ordner `mein-steckbrief`
2. Neue Datei `index.html`
3. Tippe `!` und drücke `Tab` → Emmet erstellt das Grundgerüst automatisch
4. Titel im `<head>` anpassen: `<title>Steckbrief - Dein Name</title>`
5. Im `<body>`:
   - `<h1>` mit deinem Namen
   - `<p>` mit einer kurzen Vorstellung
   - `<h2>Hobbys</h2>` und eine `<ul>` mit deinen Hobbys
   - `<h2>Kontakt</h2>` und ein `<a>` auf dein Instagram/GitHub/whatever
6. Datei speichern (`Ctrl+S`)
7. Rechtsklick im VS Code → **"Open with Live Server"**
8. Browser öffnet sich → deine Seite ist da 🎉

**DevTools schon mal anschauen:** F12 drücken, "Elements" Tab. Das ist dein bester Freund.

---

## Übungen (45 Minuten)

Findest du unter `uebungen/`:

- **Übung 1:** Steckbrief nachbauen (geführt)
- **Übung 2:** Steckbrief erweitern (Skills, Bild, Sozial-Links)
- **Übung 3:** Eigene Themenseite bauen (frei)

**Lösungen sind unter `loesungen/` — aber erst reinschauen, wenn du wirklich stecken bleibst!**

---

## Bonus (für Schnelle)

Baue eine zweite HTML-Datei `hobbys.html` und verlinke sie vom Steckbrief aus mit `<a href="hobbys.html">Meine Hobbys</a>`. Zwei Seiten, die aufeinander verweisen — so funktioniert das Web.

---

## Checkliste vor der nächsten Lektion

- [ ] Ich kann ein HTML-Grundgerüst von Hand tippen (ohne Emmet)
- [ ] Ich weiss, was `<head>` und `<body>` unterscheidet
- [ ] Ich habe mindestens einmal `<h1>`, `<p>`, `<ul>`, `<a>` benutzt
- [ ] Ich habe DevTools mit F12 geöffnet und mich umgeschaut
- [ ] Meine Steckbrief-Seite läuft im Browser

**Nächste Lektion:** CSS — wir machen die Seite hübsch. 🎨
