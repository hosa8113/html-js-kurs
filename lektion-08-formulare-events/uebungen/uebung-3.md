# Übung 3 — Formular mit Validierung

**Schwierigkeit:** Frei
**Zeit:** 20–30 Minuten

## Aufgabe

Baue ein **Multi-Feld-Formular** mit ordentlicher Validierung. Das kann sein:

- **Kontakt-Formular** (Name, E-Mail, Betreff, Nachricht)
- **Registrierung** (Username, E-Mail, Passwort, Passwort-Wiederholung, AGB-Häkchen)
- **Umfrage** (Alter, Meinungsfragen, Kommentar)
- **Buchungs-Formular** (Name, Datum, Anzahl, Sonderwünsche)
- **Feedback-Formular** (Sterne-Rating, Text, "Would recommend")

## Anforderungen

- [ ] Mindestens **5 verschiedene Felder** (Text, E-Mail, Zahl, Radio/Checkbox, Textarea, ...)
- [ ] Mindestens **3 verschiedene Input-Typen** (nicht 5× text)
- [ ] Alle Pflichtfelder haben `required`
- [ ] Passende `type`s (`email`, `number`, `tel`, `url`, ...)
- [ ] Mindestens **eine benutzerdefinierte Validierung** in JavaScript (nicht nur HTML)
  - z.B. Passwort-Wiederholung muss matchen
  - Alter mindestens 16
  - Text mindestens 20 Zeichen
- [ ] Bei Fehler: **eigene Fehlermeldung** anzeigen (nicht Browser-Alert)
- [ ] Bei Erfolg: Bestätigungsmeldung anzeigen, Form zurücksetzen

## Beispiel-Struktur

```html
<form id="form">
    <label>Name: <input type="text" id="name" required></label>
    <label>E-Mail: <input type="email" id="email" required></label>
    <label>Alter: <input type="number" id="alter" min="16" max="99" required></label>
    <label>Passwort: <input type="password" id="pw" minlength="8" required></label>
    <label>Wiederholen: <input type="password" id="pw2" required></label>
    <label><input type="checkbox" id="agb" required> Ich akzeptiere die AGB</label>

    <button type="submit">Absenden</button>
</form>

<div id="fehler" class="fehler" hidden></div>
<div id="erfolg" class="erfolg" hidden></div>
```

## Benutzerdefinierte Validierung — Beispiel

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const pw = document.getElementById("pw").value;
    const pw2 = document.getElementById("pw2").value;

    if (pw !== pw2) {
        zeigeFehler("Passwörter stimmen nicht überein!");
        return;
    }

    // Weitere Prüfungen ...

    zeigeErfolg("Registrierung erfolgreich!");
    form.reset();
});

function zeigeFehler(text) {
    const box = document.getElementById("fehler");
    box.textContent = text;
    box.hidden = false;
}
```

## Design-Tipps

**Fehler-Style:**
```css
.fehler {
    background-color: #fee2e2;
    color: #991b1b;
    padding: 12px;
    border-radius: 6px;
    border-left: 4px solid #ef4444;
}

.erfolg {
    background-color: #dcfce7;
    color: #065f46;
    padding: 12px;
    border-radius: 6px;
    border-left: 4px solid #22c55e;
}

input:invalid {
    border-color: #ef4444;
}

input:valid {
    border-color: #22c55e;
}
```

Der `:valid`/`:invalid`-Trick ist super — bei jedem Tippen wird das Feld farblich markiert.

## Bonus

- **Live-Validierung** mit `input`-Event: schon während dem Tippen prüfen
- **Passwort-Stärke-Anzeige** — je nach Länge / Zeichen: schwach/mittel/stark
- **Zeichen-Zähler** bei Textarea: "127/500 Zeichen"
- **Zeige AGB** als aufklappbares Detail
- **Speichere** die letzten Formulareinträge in `localStorage` (Lektion 9)

## Warum Formular-Übung so wichtig ist

**In jeder echten Web-App gibt es Formulare.** Login, Registrierung, Kontakt, Suche, Filter, Einstellungen — überall.

Wer Formulare sauber bauen kann, kann in **jeder** Web-App etwas beitragen. Das ist eine der wichtigsten Skills als Applikationsentwickler.

Lösung: `loesungen/uebung-3/` — Registrierungs-Formular als Beispiel.
