# Musterlösung — Übung 3

## Was hier gemacht wurde

Ein Registrierungs-Formular mit:
- 7 verschiedenen Feldern (text, email, number, 2×password, textarea, checkbox)
- HTML-Validierung (`required`, `min`, `max`, `minlength`, `maxlength`)
- Custom-Validierung in JavaScript
- Live-Zeichen-Counter für Bio
- Live-Farb-Feedback per CSS `:valid`/`:invalid`
- Eigene Fehler-/Erfolgs-Meldungen

## Zwei-Ebenen-Validierung

**Ebene 1: HTML (kostenlos)**
```html
<input type="email" required minlength="3">
```
Browser prüft und zeigt Standard-Fehlermeldung.

**Ebene 2: JavaScript (custom)**
```javascript
if (pw !== pw2) { ... }
```
Für Regeln, die HTML nicht abdeckt (Cross-Field-Vergleiche, komplexere Logik).

**Best Practice:** Beide Ebenen einsetzen. HTML fängt die einfachen Fälle, JS macht den Rest.

## Der `:valid`/`:invalid` CSS-Trick

```css
input:not(:placeholder-shown):invalid {
    border-color: #ef4444;
}

input:not(:placeholder-shown):valid {
    border-color: #22c55e;
}
```

**Was passiert:**
- `input:invalid` → Feld erfüllt HTML-Regeln NICHT (z.B. leer bei `required`, zu kurz, ...)
- `input:valid` → alles gut

Das `:not(:placeholder-shown)` verhindert, dass **leere Felder** sofort rot werden — die werden erst rot, wenn du reingetippt hast und wieder rausgehst.

**Ergebnis:** Live-Feedback beim Tippen, ohne eine Zeile JavaScript. Nice.

## Regex-Basics — für die Passwort-Prüfung

```javascript
/[0-9]/.test(pw)      // enthält Ziffer?
/[a-zA-Z]/.test(pw)   // enthält Buchstabe?
/[^a-zA-Z0-9]/.test(pw) // enthält Sonderzeichen?
```

**Regex** (Regular Expressions) sind ein Riesen-Thema. Aber ein paar Basis-Patterns kann man auswendig lernen:

- `/abc/` → "abc" muss vorkommen
- `/[0-9]/` → mindestens eine Ziffer
- `/[a-z]/` → mindestens ein Kleinbuchstabe
- `/^abc/` → beginnt mit "abc"
- `/abc$/` → endet mit "abc"

**`.test(string)`** → gibt `true`/`false` zurück, ob das Pattern matcht.

## Live-Counter für Textarea

```javascript
bio.addEventListener("input", () => {
    bioCounter.textContent = bio.value.length;
});
```

**Wichtig:** `input`-Event, **nicht** `change`.
- `input` → feuert bei **jedem** Tippen
- `change` → feuert erst, wenn Fokus verloren geht

Für Live-Feedback ist `input` richtig.

## Early Return Pattern

```javascript
if (pw !== pw2) {
    zeigeFehler("...");
    return;
}

if (username.includes(" ")) {
    zeigeFehler("...");
    return;
}

// Wenn wir hier sind: alles ok
zeigeErfolg("...");
```

Statt verschachtelter if/else — jeder Fehler ist ein **eigenes if mit `return`**. Lesbar und übersichtlich.

## Was in der Praxis noch dazukommt

Ein "echtes" Registrier-Formular hat:
- **Server-Kommunikation** (`fetch` → Backend) — Lektion 10
- **Rate Limiting** (Schutz vor Bots)
- **CAPTCHA** oder ähnliches
- **Verify-Mail** an User-Adresse
- **Passwort-Hashing** auf dem Server (**nie** im Frontend hashen!)
- **DSGVO-Consent** und Datenschutzerklärung
- **Fehler-Feedback pro Feld**, nicht nur global

Aber die **Frontend-Grundlagen** sind alle in dieser Übung enthalten.

## Häufige Fehler

- **`type="password"` als `text` gelassen** → Passwort ist sichtbar. Peinlich.
- **Passwort im Frontend hashen** → falsch! Immer server-side.
- **Cross-Field-Vergleich in HTML** → geht nicht. Passwort-Match nur per JS.
- **Alle Fehler `alert()`ieren** → Popup-Hölle. Immer eigene Fehler-Box.

## Was du damit bewiesen hast

Du kannst jetzt:
- Formulare **strukturell** korrekt bauen
- Auf **verschiedene Events** reagieren (`submit`, `input`, `change`)
- **Ein- und Multi-Feld-Validierung** kombinieren
- **User Feedback** sauber anzeigen
- **State** aus Formulardaten extrahieren

Das reicht, um in einer echten Web-App ein funktionierendes Formular zu bauen. In grossen Apps wird das oft mit Bibliotheken (Zod, React Hook Form) automatisiert — aber die Basics musst du drauf haben.
