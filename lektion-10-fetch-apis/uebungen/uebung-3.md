# Übung 3 — Eigene API-App

**Schwierigkeit:** Frei
**Zeit:** 30–60 Minuten

## Aufgabe

Bau eine **App mit einer öffentlichen API deiner Wahl**. Zeig, was du kannst.

## API-Vorschläge (alle kostenlos, kein Key)

| Thema | API | URL |
|-------|-----|-----|
| Pokémon | PokéAPI | `https://pokeapi.co/api/v2/pokemon/pikachu` |
| Katzen-Fotos | Cataas | `https://cataas.com/cat?json=true` |
| Hunde-Fotos | Dog CEO | `https://dog.ceo/api/breeds/image/random` |
| Länder | REST Countries | `https://restcountries.com/v3.1/name/germany` |
| Zitate | Quotable | `https://api.quotable.io/random` |
| SpaceX Launches | SpaceX API | `https://api.spacexdata.com/v5/launches/latest` |
| Universitäten | Hipolabs | `http://universities.hipolabs.com/search?country=Switzerland` |
| Nummer-Fakten | Numbers API | `http://numbersapi.com/random/trivia?json` |
| GitHub-User | GitHub API | `https://api.github.com/users/torvalds` |
| Deutsche Feiertage | Nager.Date | `https://date.nager.at/api/v3/publicholidays/2026/CH` |
| Aktivitäts-Idee | Bored API | `https://bored-api.appbrewery.com/random` |

**Mehr:** https://github.com/public-apis/public-apis

## Anforderungen

- [ ] **Mindestens eine API** wird per `fetch()` abgefragt
- [ ] **`async`/`await`** verwenden, kein `.then()`
- [ ] **`try/catch`** für Fehler-Handling
- [ ] **Loading-, Success- und Error-State** in der UI
- [ ] **User-Interaktion**: Button klicken, Input eingeben, Auswahl treffen
- [ ] **Ergebnis wird schön angezeigt** — nicht nur `console.log`
- [ ] **CSS** sieht gut aus
- [ ] Bei Bildern (Katzen, Hunde, Pokémon): das Bild wird auch tatsächlich angezeigt

## Ideen für konkrete Apps

### Pokémon-Suche
- Input für Pokémon-Namen
- Zeigt: Bild, Namen, Typen, Höhe, Gewicht, Stats
- API: `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`

### Cat Random
- Button "Neue Katze"
- Zeigt zufälliges Katzenbild + Fact
- APIs: `https://cataas.com/cat?json=true` + `https://catfact.ninja/fact`

### Länder-Info
- Input für Land
- Zeigt: Flagge, Hauptstadt, Bevölkerung, Sprachen, Kontinent
- API: `https://restcountries.com/v3.1/name/${name}`

### Zitat des Tages
- Zeigt zufälliges Zitat mit Autor
- Button "Neues Zitat"
- API: `https://api.quotable.io/random`

### SpaceX Tracker
- Zeigt neuesten Launch mit Details
- Bild, Namen, Datum, Beschreibung
- API: `https://api.spacexdata.com/v5/launches/latest`

## Struktur-Grundgerüst

```javascript
const API_URL = "...";

const btn = document.getElementById("btn");
const container = document.getElementById("container");

async function laden() {
    container.innerHTML = "⏳ Lade...";
    btn.disabled = true;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(response.status);
        const daten = await response.json();

        anzeigen(daten);

    } catch (error) {
        container.innerHTML = "❌ Fehler beim Laden.";
        console.error(error);
    } finally {
        btn.disabled = false;
    }
}

function anzeigen(daten) {
    // Baue die UI aus den Daten
    container.innerHTML = `...`;
}

btn.addEventListener("click", laden);
```

## Testing-Tipps

**API vorher im Browser testen:**
Öffne die API-URL einfach im Browser. Du siehst das JSON direkt. So weisst du, welche Felder es gibt.

**DevTools → Network:**
Wenn deine App nicht funktioniert, schau in Network — siehst du die Request? Was ist der Status? Was ist die Antwort?

**JSON-Viewer:**
Für komplexe APIs: JSON online formatieren (z.B. https://jsonformatter.org) — dann siehst du die Struktur besser.

## Muss-Have

- Loading-Feedback (nicht einfach 5 Sekunden Schwarz-auf-Weiss warten)
- Error-Feedback (nicht einfach nix)

**Warum?** Weil das Frontend-Grundverantwortung ist. Ohne diese Details fühlt sich deine App billig an.

## Musterlösung

`loesungen/uebung-3/` — **Pokémon-Suche** als Beispiel. Deine kann komplett anders sein!

## Was du damit erreicht hast

Wenn du das schaffst, kannst du **jede öffentliche API der Welt** in einer App verwenden. Das ist die Basis für:
- Wetter-Apps, News-Reader
- Stock-Ticker, Krypto-Tracker
- Chat-Apps mit Backend
- Alles, was Live-Daten braucht

Nächster Schritt (später): **eigene APIs bauen** (Backend mit Node.js, Python, etc.) — aber das ist ein anderer Kurs.
