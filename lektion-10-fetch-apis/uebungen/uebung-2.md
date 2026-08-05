# Übung 2 — Wetter-App

**Schwierigkeit:** Mittel
**Zeit:** ca. 25 Minuten

## Aufgabe

Bau eine **Wetter-App**, die für einen wählbaren Ort die aktuelle Temperatur anzeigt.

## Die APIs

**Open-Meteo** ist kostenlos, kein Key, unlimited Requests:

**Ort → Koordinaten** (Geocoding):
```
https://geocoding-api.open-meteo.com/v1/search?name=Zürich&count=1&language=de
```

**Antwort:**
```json
{
    "results": [{
        "name": "Zürich",
        "latitude": 47.36667,
        "longitude": 8.55,
        "country": "Schweiz"
    }]
}
```

**Wetter für Koordinaten:**
```
https://api.open-meteo.com/v1/forecast?latitude=47.37&longitude=8.55&current_weather=true
```

**Antwort:**
```json
{
    "current_weather": {
        "temperature": 22.3,
        "windspeed": 5.4,
        "winddirection": 180,
        "weathercode": 1,
        "time": "2026-08-05T10:00"
    }
}
```

## Anforderungen

- [ ] Input-Feld für den Ort + "Suchen"-Button
- [ ] Zwei Fetches nacheinander:
  1. Ort → Koordinaten (Geocoding)
  2. Koordinaten → Wetter
- [ ] Anzeige: Ortname, Land, Temperatur, Wind, Wetter-Icon (basierend auf `weathercode`)
- [ ] Loading-, Success- und Error-State
- [ ] Bei "Ort nicht gefunden": passende Fehlermeldung

## HTML-Vorlage

```html
<main>
    <h1>🌤️ Wetter</h1>
    <form id="form">
        <input type="text" id="ort" placeholder="Ort eingeben..." value="Zürich" required>
        <button type="submit">Suchen</button>
    </form>
    <div id="ergebnis"></div>
</main>
```

## Zwei Fetches — wie?

```javascript
async function ladeWetter(ort) {
    // 1. Geocoding
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ort)}&count=1&language=de`;
    const geoResponse = await fetch(geoUrl);
    const geoDaten = await geoResponse.json();

    if (!geoDaten.results || geoDaten.results.length === 0) {
        throw new Error("Ort nicht gefunden");
    }

    const { latitude, longitude, name, country } = geoDaten.results[0];

    // 2. Wetter für die Koordinaten
    const wetterUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const wetterResponse = await fetch(wetterUrl);
    const wetterDaten = await wetterResponse.json();

    return {
        ort: name,
        land: country,
        temperatur: wetterDaten.current_weather.temperature,
        wind: wetterDaten.current_weather.windspeed,
        wetterCode: wetterDaten.current_weather.weathercode
    };
}
```

## `encodeURIComponent` — was ist das?

Wenn der User "New York" eingibt, hat das ein Leerzeichen. In einer URL darf kein Leerzeichen sein.

`encodeURIComponent("New York")` → `"New%20York"` — kodiert alles korrekt.

**Immer** verwenden, wenn du User-Input in URLs steckst.

## Destructuring — die `{ latitude, longitude }`-Notation

```javascript
const { latitude, longitude, name } = geoDaten.results[0];
```

Ist die Kurzform von:
```javascript
const latitude = geoDaten.results[0].latitude;
const longitude = geoDaten.results[0].longitude;
const name = geoDaten.results[0].name;
```

Nennt sich **Destructuring**. Elegant und wird du in jedem modernen JS-Code sehen.

## Wetter-Icons aus `weathercode`

Open-Meteo hat einen numerischen Code für den Wetter-Typ:

```javascript
const wetterIcons = {
    0: "☀️",        // Clear
    1: "🌤️",       // Mainly clear
    2: "⛅",        // Partly cloudy
    3: "☁️",        // Overcast
    45: "🌫️",      // Fog
    51: "🌦️",      // Drizzle
    61: "🌧️",      // Rain
    71: "🌨️",      // Snow
    95: "⛈️"       // Thunderstorm
};

const icon = wetterIcons[wetterCode] || "❓";
```

Nicht alle Codes brauchst du — mit ein paar tut's.

## Bonus

- **Vorhersage**: Open-Meteo liefert auch `hourly` und `daily` — zeige die nächsten 7 Tage
- **Geolocation**: `navigator.geolocation.getCurrentPosition(...)` — hole die Position des Users
- **History**: speichere die letzten Suchen in `localStorage`
- **Auto-Refresh**: alle 10 min neu laden
- **Design**: Hintergrundfarbe/Bild passend zum Wetter

Lösung: `loesungen/uebung-2/`
