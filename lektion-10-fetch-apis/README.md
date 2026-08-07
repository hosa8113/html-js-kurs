# Lektion 10 — fetch & APIs: Daten aus dem Internet

**Dauer:** 90 Minuten
**Vorher:** Lektionen 5–9 abgeschlossen
**Am Ende:** Deine App holt Daten aus dem Internet — Wetter, Witze, was auch immer.

---

## Lernziele

Nach dieser Lektion kannst du:

- Erklären, was eine API ist und wie sie funktioniert
- HTTP-Basics verstehen: GET, Status-Codes, JSON
- Mit `fetch()` Daten von einer öffentlichen API holen
- `async` / `await` für lesbare asynchrone Aufrufe verwenden
- Fehler mit `try/catch` abfangen
- Loading-States und Error-States in der UI zeigen
- Öffentliche APIs für dein eigenes Projekt nutzen

## Vorwissen

- Lektionen 5–9

---

## Theorie (25 Minuten)

### Was ist eine API?

**API** = **A**pplication **P**rogramming **I**nterface. Eine Schnittstelle, über die dein Code mit einem anderen System redet.

**Beispiel:** Du willst das aktuelle Wetter anzeigen. Statt selbst Wetterstationen zu bauen, fragst du eine **Wetter-API**:

> "Hey Wetter-API, wie ist das Wetter in Zürich?"

Und die API antwortet mit **JSON-Daten**:

```json
{
    "ort": "Zürich",
    "temperatur": 22,
    "wetter": "sonnig"
}
```

Dein Code nimmt die Daten und zeigt sie in der UI.

### HTTP kurz erklärt

Wenn dein Browser oder JavaScript mit einem Server redet, passiert das über **HTTP**. Der Klassiker:

- Du schickst eine **Request** an eine URL
- Der Server schickt eine **Response** zurück

**HTTP-Methoden** (die wichtigsten):
- `GET` → Daten **holen** (Wetter abfragen, Liste anzeigen)
- `POST` → Daten **senden** (Login, Kommentar posten)
- `PUT` / `PATCH` → Daten **ändern**
- `DELETE` → Daten **löschen**

**Für den Anfang:** Nur `GET` — reicht für die meisten öffentlichen APIs.

### Status-Codes — was der Server sagt

```
200 OK             → alles gut, hier sind deine Daten
404 Not Found      → gibt's nicht
500 Server Error   → Server-Bug
403 Forbidden      → darfst du nicht
429 Too Many       → zu viele Anfragen, chill
```

Merke: **200 = gut**, **4XX = du hast Mist gebaut**, **5XX = Server hat Mist gebaut**.

### `fetch()` — die Web-Standard-Funktion

**Kurze Variante (nur GET, nur JSON):**

```javascript
async function ladeWetter() {
    const response = await fetch("https://api.example.com/wetter?ort=zuerich");
    const daten = await response.json();
    console.log(daten);
}

ladeWetter();
```

**Was passiert Schritt für Schritt:**

1. `fetch(url)` schickt eine Request los
2. `await` wartet auf die Antwort (kann Sekunden dauern)
3. `response.json()` liest den Body und parsed JSON
4. `daten` ist jetzt ein JavaScript-Objekt

### `async` und `await` — kurz erklärt

**Was ist "asynchron"?**
Netz-Anfragen dauern lang. Du willst nicht, dass die ganze Seite hängt, während gewartet wird.

**Alt (nervig, mit "Callbacks" oder Promises):**
```javascript
fetch(url).then((response) => {
    return response.json();
}).then((daten) => {
    console.log(daten);
});
```

**Neu (mit `async`/`await` — viel lesbarer):**
```javascript
const response = await fetch(url);
const daten = await response.json();
console.log(daten);
```

**Regeln:**
- `await` funktioniert nur in Funktionen, die mit `async` markiert sind
- `async function name() { ... }` → immer beim Fetching verwenden

### Fehler abfangen mit `try/catch`

```javascript
async function ladeWetter() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Fehler: ${response.status}`);
        }

        const daten = await response.json();
        console.log(daten);

    } catch (error) {
        console.error("Fehler beim Laden:", error);
        // User informieren
    }
}
```

**Was ist was:**
- `try { ... }` — versuche den Code auszuführen
- `catch (error) { ... }` — bei Fehler: hier landen
- `throw new Error(...)` — selbst einen Fehler auslösen

**`response.ok`** ist `true`, wenn der Status-Code 200–299 ist. Sonst ist was schiefgegangen.

### Loading, Success, Error — die 3 States

Jede API-Anfrage hat immer 3 mögliche Zustände. Deine UI sollte alle 3 zeigen:

```javascript
async function ladeDaten() {
    zeigeLoading();        // "Lade..."

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.status);
        const daten = await response.json();
        zeigeErgebnis(daten);   // Daten anzeigen

    } catch (error) {
        zeigeFehler(error);   // Fehler anzeigen
    }
}
```

**Guter UX-Standard.** Vergiss keinen der 3.

### Kostenlose öffentliche APIs zum Üben

Alle ohne API-Key nutzbar:

| API | URL | Was |
|-----|-----|-----|
| **JokeAPI** | `https://v2.jokeapi.dev/joke/Programming?type=single` | Programmier-Witze |
| **Advice Slip** | `https://api.adviceslip.com/advice` | Zufalls-Ratschlag |
| **PokéAPI** | `https://pokeapi.co/api/v2/pokemon/pikachu` | Pokémon-Daten |
| **Cat Facts** | `https://catfact.ninja/fact` | Katzen-Fakten |
| **REST Countries** | `https://restcountries.com/v3.1/name/switzerland` | Länder-Info |
| **Bored API** | `https://bored-api.appbrewery.com/random` | Aktivitäts-Vorschlag *(Community-Mirror, kann ausfallen)* |
| **Open-Meteo** | `https://api.open-meteo.com/v1/forecast?latitude=47.5&longitude=8.5&current_weather=true` | Wetter (ohne Key!) |

**Grosse Liste mit vielen mehr:** https://github.com/public-apis/public-apis

### Response im DevTools inspizieren

Öffne **DevTools → Network** → mach die Fetch → siehst du:
- Die genaue URL, die dein Code aufgerufen hat
- Den Status-Code
- **Response**-Tab: die rohen JSON-Daten
- **Headers**: was gesendet/empfangen wurde

Extrem hilfreich beim Debuggen.

---

## Live-Demo (30 Minuten)

Wir bauen eine **Witz-App**:

- Button "Neuer Witz"
- Beim Klick: Witz von JokeAPI holen
- Beim Laden: "Lade..."
- Bei Fehler: "Fehler, versuche es nochmal"
- Bei Erfolg: Witz anzeigen

Beispiel unter `beispiel/`.

---

## Übungen (45 Minuten)

- **Übung 1:** Zufalls-Ratschlag-App (geführt)
- **Übung 2:** Wetter-App mit Ort-Input (mittel)
- **Übung 3:** Eigene API-App mit einer API deiner Wahl (frei)

---

## Bonus — Was du unbedingt vermeiden sollst

**API-Keys NIE im Frontend-Code!**

Viele APIs (OpenWeatherMap, News, Google Maps) brauchen einen Key. Wenn du den in deinen JS-Code schreibst und pushst:
- Jeder kann ihn kopieren
- Du kannst über Nacht 1000 CHF Rechnung bekommen
- Musst neuen Key holen

**Regel:** Frontend-Code = für alle sichtbar. Alles Geheime muss auf einem **Server** (Backend) leben.

Für diese Lektion nutzen wir nur **Key-freie** APIs.

---

## Checkliste vor der nächsten Lektion

- [ ] Ich weiss, was eine API ist
- [ ] Ich habe erfolgreich `fetch()` mit `async`/`await` benutzt
- [ ] Ich habe `try/catch` für Fehler-Handling verwendet
- [ ] Ich habe Loading-, Success- und Error-States in der UI
- [ ] Ich weiss, warum API-Keys nie ins Frontend gehören
- [ ] Ich habe DevTools-Network verwendet, um eine API-Antwort zu inspizieren

**Nächste Lektion:** Code-Qualität & Refactoring — mach deinen Code sauber. 🧹
