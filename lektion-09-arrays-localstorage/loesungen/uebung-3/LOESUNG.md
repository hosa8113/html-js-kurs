# Musterlösung — Übung 3

## Was hier gemacht wurde

Ein vollständiger **Bookmark-Manager** mit:
- Bookmarks mit Titel, URL, Kategorie speichern
- Live-Suche in Titel + Kategorie
- Grid-Layout mit Karten
- **Dark Mode** mit gespeicherter Präferenz
- Empty States (leer / keine Suchtreffer)
- Bestätigung vor "Alle löschen"
- Alles persistent

## Zwei separate `localStorage`-Keys

```javascript
const SPEICHER_KEY = "bookmarks-v1";
const THEME_KEY = "bookmark-theme";
```

**Warum zwei Keys?**
- Trennung von Concerns: **Daten** ≠ **Präferenzen**
- Wenn User "Alle Bookmarks löschen" klickt, soll Theme bleiben

**Warum das `-v1`?**
- Wenn du später das Datenformat änderst, kannst du auf `-v2` gehen ohne alte Daten zu zerstören
- Migration möglich: alte Version laden → konvertieren → als neue speichern

## Das Suchmuster

```javascript
sucheInput.addEventListener("input", () => {
    suche = sucheInput.value;
    render();
});

// Und in render():
const gefiltert = bookmarks.filter((b) => {
    const term = suche.toLowerCase();
    return b.titel.toLowerCase().includes(term) ||
           b.kategorie.toLowerCase().includes(term);
});
```

**Live-Filter** — bei jedem Buchstaben neu filtern und rendern. Bei 1000+ Items würde man **debouncen** (nicht bei jedem Tastendruck, sondern nach kurzer Pause), aber für ein paar Bookmarks ist das overkill.

## Dark Mode mit CSS-Variablen

```css
:root {
    --bg: #f5f7fa;
    --card: #ffffff;
    /* ... */
}

body.dark {
    --bg: #0f172a;
    --card: #1e293b;
    /* ... */
}

body {
    background-color: var(--bg);
}
```

**Der Trick:** CSS-Variablen. Body-Klasse `.dark` überschreibt alle Farben — jede Regel, die `var(--bg)` verwendet, wird automatisch dunkel.

**Extrem elegant.** So machen es alle modernen Web-Apps (VS Code, Notion, GitHub).

## Der Theme-Toggle

```javascript
btnTheme.addEventListener("click", () => {
    const neu = document.body.classList.contains("dark") ? "light" : "dark";
    themeAnwenden(neu);
    localStorage.setItem(THEME_KEY, neu);
});
```

1. Prüfen: bin ich grad im Dark Mode?
2. Neuen Wert bestimmen (umgekehrter)
3. Anwenden (Klasse setzen, Icon ändern)
4. Speichern

Beim Start: `themeAnwenden(localStorage.getItem(THEME_KEY) || "light")` — geladen wird das, was gespeichert war, sonst Default "light".

## `input.rel = "noopener"` bei externen Links

```javascript
url.target = "_blank";
url.rel = "noopener";
```

Erinnerung aus Lektion 4: Bei externen Links, die in neuen Tabs öffnen, immer `rel="noopener"` — Sicherheit.

## Warum das eine "Vollständige-App"-Übung ist

Diese Übung kombiniert **alles** aus Lektionen 1–9:

- Semantisches HTML mit Form ✅
- CSS mit Variablen ✅
- Flexbox + Grid ✅
- Bilder (Emojis als Icons) ✅
- Interaktion mit JS ✅
- Variablen, Bedingungen ✅
- DOM-Manipulation ✅
- Formulare mit Validierung ✅
- Arrays und Objekte ✅
- localStorage-Persistenz ✅
- State → Render Pattern ✅

**Wenn du das gebaut hast, kannst du eine echte kleine Web-App bauen.** Ohne Framework.

## Was fehlt für "wirklich professionell"?

- **Server-Backend** — mehrere Nutzer, geräteübergreifend → Lektion 10 (`fetch`)
- **Import/Export** von Bookmarks (JSON-Datei)
- **Drag & Drop** zum Umsortieren
- **Tags** (mehrere pro Bookmark) statt einzelner Kategorie
- **Screenshot-Preview** der Website
- **Duplikate-Erkennung** (URL schon vorhanden?)

Alles machbar, aber Feature-Kür statt Basics.

## Wichtigster Take-Away

**Der Kern jeder Web-App ist erstaunlich simpel:**

1. **State** (Daten in Variablen)
2. **Render** (State → UI)
3. **Actions** (User macht was → State ändert sich)
4. **Loop** (Action → State → Render → Action → ...)

Jedes Framework (React, Vue, Svelte, ...) macht genau das — nur mit mehr Automatismen. Aber wenn du das **Prinzip** verstanden hast, ist der Umstieg auf ein Framework nur noch Syntax lernen.

**Gratulation** — du bist jetzt eigentlich schon Frontend-Entwickler. 🎉
