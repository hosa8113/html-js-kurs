# Musterlösung — Übung 2

## Was hier gemacht wurde

Eine echte Wetter-App mit:
- Zwei Fetches nacheinander (Geocoding → Wetter)
- Loading-/Error-State
- Deutschsprachiges Ergebnis
- Wetter-Icon aus Code
- Nettes Blau-Gradient-Design

## Zwei Fetches nacheinander

```javascript
const geoResponse = await fetch(geoUrl);
const geoDaten = await geoResponse.json();

const wetterResponse = await fetch(wetterUrl);
const wetterDaten = await wetterResponse.json();
```

**Sequenziell:** Erst Fetch 1 fertig, dann Fetch 2. Weil der zweite die Daten des ersten braucht.

**Wenn du parallel könntest** (unabhängige Fetches):
```javascript
const [a, b] = await Promise.all([
    fetch(urlA).then(r => r.json()),
    fetch(urlB).then(r => r.json())
]);
```

`Promise.all([...])` = warte auf **alle** parallel. Für unabhängige Requests **viel schneller**.

## `encodeURIComponent` in Aktion

```javascript
const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ort)}&count=1&language=de`;
```

Was passiert:
- User gibt "New York" ein
- `encodeURIComponent("New York")` → `"New%20York"`
- Final URL: `?name=New%20York&count=1` — funktioniert

Ohne `encodeURIComponent`: URL ist kaputt bei Leerzeichen, Umlauten, Sonderzeichen.

## Destructuring rules

```javascript
const { latitude, longitude, name, country } = geoDaten.results[0];
```

Vier Werte in einer Zeile. Statt:
```javascript
const latitude = geoDaten.results[0].latitude;
const longitude = geoDaten.results[0].longitude;
// ...
```

**Muss** man nicht nutzen, aber wenn du 3+ Werte aus einem Objekt brauchst, spart's viel Code.

## Der zweistufige Error-Check

```javascript
if (!geoResponse.ok) throw new Error("Geocoding fehlgeschlagen");
const geoDaten = await geoResponse.json();
if (!geoDaten.results || geoDaten.results.length === 0) {
    throw new Error("Ort nicht gefunden");
}
```

**Wichtig:** Die API kann **Status 200 zurückgeben aber trotzdem "kein Ergebnis"** liefern.

Bei Open-Meteo: Sucht du "Xyzzy123" → Status 200, aber `results` ist leer/fehlt.

Also musst du **zwei Checks** machen:
1. HTTP-OK? (Netzwerk/Server-Ebene)
2. Enthält die Antwort was Sinnvolles? (Daten-Ebene)

## `Math.round(temperature)` — warum?

Die API liefert `22.3` — kein Mensch will "22.3°C" sehen. `Math.round()` → `22`.

Für den Alltag reicht ganzzahlig. Wenn du Kommastelle brauchst: `temperature.toFixed(1)` → `"22.3"`.

## Automatisch beim Start laden

```javascript
// Ganz unten:
ladeWetter(ortInput.value);
```

Warum? User soll **direkt was sehen**, nicht erst eine leere Seite. Standard-Wert "Zürich" im Input → App lädt beim Start.

**Kleine Sache, riesiger UX-Boost.**

## `wetterIcons`-Lookup-Objekt

```javascript
const wetterIcons = {
    0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
    // ...
};

const icon = wetterIcons[weathercode] || "❓";
```

Effizientes Mapping von numerischen Codes zu Emojis. Der `|| "❓"` fängt unbekannte Codes ab (falls Open-Meteo mal einen neuen Code liefert).

Gleiches Prinzip wie das `schlaegt`-Objekt in Schere-Stein-Papier aus Lektion 6.

## Bonus umgesetzt: Geolocation

```javascript
navigator.geolocation.getCurrentPosition(
    async (position) => {
        const { latitude, longitude } = position.coords;
        // Direkt zum Wetter-Fetch springen
    },
    (error) => {
        console.error("Standort nicht verfügbar", error);
    }
);
```

**Achtung:** Nur mit `https://` oder `localhost`. Nicht mit `file://` (Datei direkt öffnen). Deshalb Live Server nutzen.

## Häufige Fehler

- **Response.ok vergessen** → dein Code läuft "erfolgreich" durch obwohl 404
- **`encodeURIComponent` vergessen** → Leerzeichen zerstört URL
- **Zwei Fetches unabhängig, aber sequenziell** → doppelt so lange Wartezeit
- **Kein Loading angezeigt** → User denkt, App ist tot

## Was du damit kannst

Open-Meteo hat noch viel mehr:
- **Vorhersage** für 7 Tage
- **Stündliche Werte**
- **UV-Index**, Niederschlag, Luftfeuchtigkeit
- **Historische Daten**

Und **kein API-Key**, unlimited kostenlos. Perfekt für dein eigenes Wetter-Projekt.
