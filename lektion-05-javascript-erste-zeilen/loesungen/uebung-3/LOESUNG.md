# Musterlösung — Übung 3

## Was hier gemacht wurde

Ein kleiner Mood Tracker mit 6 Stimmungen. Jeder Klick:
- Zeigt Emoji + Text + Zeitstempel in einer Karte
- Passt die Hintergrundfarbe der Seite an
- Loggt in die Console

## Neue Techniken (Vorgeschmack auf spätere Lektionen)

### `querySelectorAll` + `forEach`

```javascript
const buttons = document.querySelectorAll(".stimmung");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => { ... });
});
```

Statt jeden Button einzeln mit `getElementById` zu holen und einen Listener zu binden, macht man das in einer Schleife.

- `querySelectorAll(".stimmung")` → holt **alle** Elemente mit Klasse `stimmung`
- `.forEach(...)` → geht durch jedes durch
- Innen: **derselbe Listener** wird auf jedes Element gebunden

**Genau das Pattern**, das in echten Web-Apps ständig verwendet wird. Kommt offiziell in Lektion 7 (DOM) und 8 (Formulare).

### `data-*`-Attribute

```html
<button class="stimmung" data-stimmung="glücklich">😀</button>
```

```javascript
btn.dataset.stimmung  // → "glücklich"
```

**`data-*`-Attribute** sind Custom-Attribute, in die du Metadaten packen kannst. `btn.dataset.stimmung` liest den Wert aus.

**Warum das cool ist:** Statt für jeden Button eigenen Code zu schreiben, kann **ein einziger Listener** unterschiedliches Verhalten haben — basierend auf dem `data-*`-Wert.

### Objekt als Lookup-Tabelle

```javascript
const texte = {
    glücklich: "Du fühlst dich super!",
    neutral:   "Alles chill.",
    traurig:   "Schwerer Tag?"
};

texte["glücklich"]     // → "Du fühlst dich super!"
texte.glücklich        // → dasselbe
```

**Objekt als "Wörterbuch"** — sehr Python-artig. Perfekt für Lookups.

### Template Literals mit Backticks

```javascript
ergebnis.innerHTML = `
    <p class="emoji">${emoji}</p>
    <p class="text">${text}</p>
`;
```

- **Backticks** (`` ` ``) statt Anführungszeichen
- `${variable}` fügt Variablen direkt ein
- **Mehrzeilig** ist erlaubt (in normalen Strings nicht)

Viel angenehmer als:
```javascript
"<p class=\"emoji\">" + emoji + "</p><p class=\"text\">" + text + "</p>"
```

### `.innerHTML` vs. `.textContent` (Achtung!)

Hier wurde `.innerHTML` verwendet, weil wir **HTML-Struktur** einfügen (mit `<p class="emoji">`).

**Sicherheitshinweis:** `.innerHTML` mit User-Input ist gefährlich (XSS). Hier ist es okay, weil wir nur **eigene, kontrollierte** Strings einfügen. Wenn der User `name` per `prompt()` eingäbe und wir den mit `.innerHTML` reinsteckten → **nicht sicher**.

Sichere Alternative wäre: mit `document.createElement()` Elemente bauen und `.textContent` setzen. Kommt in Lektion 7.

## Der CSS-Klassen-Wechsel

```javascript
document.body.className = "";                       // alle Klassen weg
document.body.classList.add("stimmung-" + stimmung); // neue setzen
```

Alternative mit Loop:
```javascript
document.body.classList.remove("stimmung-glücklich", "stimmung-traurig", ...);
document.body.classList.add("stimmung-" + stimmung);
```

Beide funktionieren. In echt macht man das oft eleganter mit einem "prefix"-Loop.

## Warum das für einen Applikationsentwickler wichtig ist

Diese Übung enthält **alles**, was moderne Web-Apps ausmacht:

- **Event-driven** — Code reagiert auf User-Aktionen
- **State-Management** — was ist die aktuelle Stimmung?
- **Rendering** — UI wird aus State neu aufgebaut
- **Data-driven** — Buttons haben Datenattribute, Code reagiert generisch

Das ist im Kern **das Muster jeder React/Vue/Angular-App**. Nur mit mehr Abstraktion drumrum. Wenn du das hier verstehst, verstehst du den Grundgedanken moderner Frontend-Entwicklung.
