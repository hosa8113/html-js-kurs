# Übung 1 — Zufalls-Ratschlag

**Schwierigkeit:** Einfach
**Zeit:** ca. 15 Minuten

## Aufgabe

Bau eine App, die per Klick einen **zufälligen Ratschlag** von einer API holt und anzeigt.

## Die API

**Advice Slip API** — kostenlos, kein Key nötig:

```
https://api.adviceslip.com/advice
```

**Antwort sieht so aus:**
```json
{
    "slip": {
        "id": 42,
        "advice": "Trust your gut."
    }
}
```

Der Ratschlag ist unter `daten.slip.advice`.

## HTML-Vorlage

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Ratschlag</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <main>
        <h1>💡 Ratschlag des Moments</h1>
        <blockquote id="rat">Hole dir Weisheit!</blockquote>
        <button id="btn">Neuer Ratschlag</button>
    </main>
</body>
</html>
```

## Anforderungen

- [ ] Beim Klick: **`fetch()`** auf die API
- [ ] `async`/`await` verwenden
- [ ] **Loading-State** anzeigen ("Lade..." oder ähnlich)
- [ ] Bei **Erfolg**: Ratschlag anzeigen
- [ ] Bei **Fehler**: Fehlermeldung anzeigen (`try/catch`)
- [ ] Button während dem Laden **deaktivieren**

## Code-Grundgerüst

```javascript
const rat = document.getElementById("rat");
const btn = document.getElementById("btn");

async function ladeRatschlag() {
    rat.textContent = "⏳ Lade...";
    btn.disabled = true;

    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) throw new Error(response.status);

        const daten = await response.json();
        rat.textContent = daten.slip.advice;

    } catch (error) {
        rat.textContent = "❌ Konnte keinen Ratschlag laden.";
        console.error(error);
    } finally {
        btn.disabled = false;
    }
}

btn.addEventListener("click", ladeRatschlag);
```

## Testen

1. Klick den Button → siehst du kurz "Lade..." und dann den Ratschlag?
2. Öffne DevTools → Network-Tab → klicke nochmal → siehst du die Request?
3. Klick auf die Request → Response-Tab → siehst du das JSON?

## Bonus

- **Zeige die ID** des Ratschlags mit an: "Rat #42"
- **Deutsche Übersetzung** — hänge einfach eine "Übersetzt mit DeepL/Google" hin (die API liefert nur Englisch)
- **Klick-Zähler**: "Du hast 5 Ratschläge gelesen"
- **Historie**: die letzten 5 Ratschläge speichern und anzeigen (mit `localStorage`!)
- **Speak-Button**: `speechSynthesis.speak(new SpeechSynthesisUtterance(text))` — Browser liest den Text vor

Lösung: `loesungen/uebung-1/`
