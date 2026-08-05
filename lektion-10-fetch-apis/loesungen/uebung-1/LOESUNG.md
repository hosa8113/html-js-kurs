# Musterlösung — Übung 1

## Was hier gemacht wurde

Ein Ratschlag-Fetcher mit sauberem Loading-/Success-/Error-Handling.

## Die 6-Zeilen-Wahrheit über fetch

```javascript
const response = await fetch(url);
if (!response.ok) throw new Error(...);
const daten = await response.json();
```

**Das ist alles.** Der Rest ist "richtig damit umgehen" (Loading zeigen, Fehler abfangen).

## Warum `finally { btn.disabled = false }`?

`try/catch/finally`:
- `try` — hier läuft der Happy Path
- `catch` — hier fangen wir Fehler ab
- `finally` — läuft **immer**, egal ob Erfolg oder Fehler

**Perfekt** für "Button wieder aktivieren" — soll ja immer passieren, sonst bleibt der Button für immer disabled.

Ohne `finally` müsstest du `btn.disabled = false` **doppelt** schreiben (im try UND im catch). `finally` = DRY.

## Warum das `response.ok` Check?

**Falle:** `fetch()` "wirft" **keinen Fehler** bei 404 oder 500 — nur bei Netzwerk-Problemen (kein Internet, DNS-Fehler).

Beispiel: API existiert nicht → Server schickt 404 → `fetch()` **erfolgt normal** → `response.status` ist 404, aber kein Exception!

Deshalb: **immer manuell prüfen**:
```javascript
if (!response.ok) {
    throw new Error("Response nicht OK: " + response.status);
}
```

`response.ok` = `true` bei Status 200–299, sonst `false`.

## Der Template-Literal Trick

```javascript
rat.textContent = `"${daten.slip.advice}"`;
ratId.textContent = `— Ratschlag #${daten.slip.id}`;
```

Backticks + `${...}` = **String Templates**. Viel schöner als `"\"" + text + "\""`.

## Was du in Network sehen solltest

**DevTools → Network → klick Button:**
- Neue Zeile "advice" auftaucht
- Status: 200
- Type: xhr/fetch
- Klick drauf → Response-Tab → siehst du das JSON:
  ```json
  { "slip": { "id": 42, "advice": "Text..." } }
  ```

**Falls du keinen Request siehst:** dein `fetch` wurde nicht aufgerufen (Listener falsch gebunden?)

**Falls Status rot ist (4xx/5xx):** URL falsch oder API down.

## Häufige Fehler

- **`await` in nicht-`async` Funktion** → `SyntaxError`
- **`.json()` vergessen** → du hast das Response-Objekt, nicht die Daten
- **`response.ok` nicht geprüft** → App zeigt komische leere Werte statt Fehler
- **Button nicht wieder aktiviert** → nach 1× Fehler ist er für immer tot

## Bonus umgesetzt: Historie

Wenn du die letzten 5 Ratschläge speichern willst:

```javascript
let historie = JSON.parse(localStorage.getItem("historie") || "[]");

// Nach erfolgreichem Laden:
historie.push({
    id: daten.slip.id,
    text: daten.slip.advice,
    zeit: new Date().toISOString()
});

// Nur letzte 5 behalten
historie = historie.slice(-5);
localStorage.setItem("historie", JSON.stringify(historie));

// Historie im DOM anzeigen (Liste bauen)
```

Kombiniert **fetch** (Lektion 10) mit **State-Pattern + localStorage** (Lektion 9). Voll integriert.

## Text vorlesen lassen — der Show-Off

```javascript
const utter = new SpeechSynthesisUtterance(daten.slip.advice);
utter.lang = "en-US";
speechSynthesis.speak(utter);
```

Browser hat einen eingebauten TTS (Text-To-Speech). Nice für Accessibility oder einfach Spass.
