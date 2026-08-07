# Lektion 11 — Code-Qualität & Refactoring

**Dauer:** 90 Minuten
**Vorher:** Lektionen 5–10 abgeschlossen
**Am Ende:** Du kannst chaotischen Code erkennen und ihn Schritt für Schritt sauber machen.

---

## Lernziele

Nach dieser Lektion kannst du:

- Erkennen, was "schlechter" Code ist und warum
- Variablen und Funktionen **sinnvoll benennen**
- Grosse Funktionen in **kleine, fokussierte** aufteilen
- **DRY** anwenden — kein Copy-Paste-Code
- **Magic Numbers/Strings** durch Konstanten ersetzen
- Wissen, wann Kommentare helfen — und wann sie stören
- **Refactoring** als Prozess durchführen (kleine Schritte, Tests danach)

## Vorwissen

- Lektionen 5–10 (JS-Basics bis fetch)

---

## Theorie (25 Minuten)

### Warum Code-Qualität?

Kurze Antwort: **Weil du deinen eigenen Code in 3 Monaten wieder anschaust.**

Lange Antwort:
- Andere Entwickler müssen deinen Code lesen (im Team)
- **Du selbst** bist der grösste Fremde deines eigenen Codes
- Schlechter Code = mehr Bugs, langsameres Ändern, teure Wartung
- Applikationsentwickler-Lehrabschluss-Prüfung fragt genau das ab

**Prinzip:** Code wird **10× öfter gelesen** als geschrieben. Optimiere für's Lesen.

### Regel 1 — Sprechende Namen

**Schlecht:**
```javascript
let x = 5;
let a = [];
function fn(y) { return y * 2; }
```

**Gut:**
```javascript
let anzahlVersuche = 5;
let ausstehendeAufgaben = [];
function verdoppeln(zahl) { return zahl * 2; }
```

**Regeln:**
- Variablen: `substantiv` oder `adjektiv-substantiv` (`benutzer`, `gefundenerBenutzer`)
- Funktionen: **`verb`** oder **`verb-substantiv`** (`speichern`, `ladeBenutzer`)
- Booleans: **`ist-` / `hat-` / `kann-`** (`istEingeloggt`, `hatFehler`)
- Konstanten: **`GROSSBUCHSTABEN_MIT_UNDERSCORES`** (`API_URL`, `MAX_VERSUCHE`)

**Kompakt vs. beschreibend:** Bei kurzen Funktionen okay, bei komplexem Code lieber beschreibend.

### Regel 2 — Eine Funktion, eine Aufgabe

**Schlecht:**
```javascript
function macheAlles() {
    const daten = fetch(...);
    const gefiltert = daten.filter(...);
    document.getElementById("liste").innerHTML = ...;
    localStorage.setItem("cache", ...);
    console.log("done");
}
```

**Gut:**
```javascript
async function ladeDaten() { ... }
function filtereAktive(daten) { ... }
function zeigeInListe(daten) { ... }
function cacheDaten(daten) { ... }
```

**Vorteil:** Jede Funktion ist **testbar, wiederverwendbar, lesbar**.

**Faustregel:** Wenn du deine Funktion in einem Satz beschreiben musst und **"und"** vorkommt, sind es wahrscheinlich zwei Funktionen.

### Regel 3 — DRY (Don't Repeat Yourself)

**Schlecht:**
```javascript
btnRot.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
    localStorage.setItem("farbe", "red");
    console.log("Farbe geändert zu red");
});

btnBlau.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
    localStorage.setItem("farbe", "blue");
    console.log("Farbe geändert zu blue");
});
```

**Gut:**
```javascript
function setzeFarbe(farbe) {
    document.body.style.backgroundColor = farbe;
    localStorage.setItem("farbe", farbe);
    console.log("Farbe geändert zu", farbe);
}

btnRot.addEventListener("click", () => setzeFarbe("red"));
btnBlau.addEventListener("click", () => setzeFarbe("blue"));
```

**Warum wichtig?** Wenn du später `setzeFarbe` änderst (z.B. auch in eine Historie loggen), musst du es **an einer Stelle** ändern — nicht 5×.

**Achtung:** DRY nicht übertreiben. Wenn zwei Code-Stücke **zufällig gleich** aussehen aber **verschiedene Konzepte** sind, sollten sie getrennt bleiben.

### Regel 4 — Keine Magic Numbers / Strings

**Schlecht:**
```javascript
if (versuche > 3) { ... }
setTimeout(() => hideMessage(), 3000);
if (user.role === "admin") { ... }
```

Was bedeutet die 3? Was ist 3000? Was macht "admin"?

**Gut:**
```javascript
const MAX_VERSUCHE = 3;
const NACHRICHT_DAUER_MS = 3000;
const ROLLE_ADMIN = "admin";

if (versuche > MAX_VERSUCHE) { ... }
setTimeout(() => hideMessage(), NACHRICHT_DAUER_MS);
if (user.role === ROLLE_ADMIN) { ... }
```

**Vorteile:** Code selbstdokumentierend, Werte an einer Stelle änderbar.

### Regel 5 — Kommentare nur wenn nötig

**Schlecht (überflüssig):**
```javascript
// Counter um 1 erhöhen
counter = counter + 1;

// Klicke Button
btn.addEventListener("click", () => { ... });
```

**Gut (erklärt WARUM, nicht WAS):**
```javascript
// Wir warten 500ms, damit die Animation fertig läuft
// bevor das Element entfernt wird
setTimeout(() => element.remove(), 500);
```

```javascript
// Backend liefert Timestamps in Millisekunden,
// wir brauchen Sekunden für die API
const sekunden = Math.floor(ms / 1000);
```

**Faustregel:**
- Gut benannter Code **erklärt sich selbst**
- Kommentare für **WHY**, nicht WHAT
- Wenn du einen Kommentar brauchst, um WHAT zu erklären → **bessere Namen finden**

### Refactoring — der Prozess

**Refactoring** = Code verbessern, ohne das Verhalten zu ändern.

**Die Regeln:**
1. **Kleine Schritte**: eine Änderung nach der anderen
2. **Nach jedem Schritt testen**: läuft die App noch?
3. **Verhalten bleibt gleich**: nur Struktur ändert sich
4. **Bei Unsicherheit: Backup** (mit Git!)

**Typische Refactoring-Moves:**
- Extract Function (Code in eigene Funktion auslagern)
- Rename (bessere Namen)
- Replace Magic Number with Constant
- Remove Duplication (DRY anwenden)
- Simplify Conditionals (if/else vereinfachen)

### Datei-Struktur bei grösseren Projekten

**Bis jetzt:**
```
mein-projekt/
├── index.html
├── style.css
└── script.js
```

**Bei mehr Code:**
```
mein-projekt/
├── index.html
├── css/
│   ├── style.css
│   ├── layout.css
│   └── forms.css
└── js/
    ├── main.js
    ├── api.js
    ├── ui.js
    └── storage.js
```

**Trennung nach Verantwortung**:
- `api.js` — alle Fetch-Aufrufe
- `ui.js` — DOM-Manipulation, Rendering
- `storage.js` — localStorage-Wrapper
- `main.js` — verbindet alles

Für **ES-Modules** (fortgeschritten):
```html
<script type="module" src="js/main.js"></script>
```

```javascript
// api.js
export async function ladeDaten() { ... }

// main.js
import { ladeDaten } from "./api.js";
```

Kommt im Framework-Kurs offiziell.

---

## Live-Demo (30 Minuten)

Wir schauen uns eine **absichtlich chaotische Version** einer Wetter-App an (`beispiel/vorher/`) und refactoren sie Schritt für Schritt zu `beispiel/nachher/`.

**Was wir tun:**
1. Aussagekräftige Variablennamen
2. Magic Strings/Numbers extrahieren
3. Eine grosse Funktion in mehrere kleine aufteilen
4. Duplikate zusammenführen
5. Unnötige Kommentare entfernen, nützliche hinzufügen

**Vergleich am Ende:** gleiche Funktionalität, halbe Code-Länge, doppelte Lesbarkeit.

---

## Übungen (45 Minuten)

- **Übung 1:** Chaotischen Counter refactoren (geführt)
- **Übung 2:** Chaotische To-Do-Liste refactoren (mittel)
- **Übung 3:** Ein eigenes Projekt aus Lektion 1–10 refactoren (frei)

---

## Bonus — Linter & Formatter

**Prettier** (Formatter) und **ESLint** (Linter) sind Tools, die dir helfen:
- **Prettier** — formatiert deinen Code automatisch nach Regeln (Einrückung, Anführungszeichen, Semikolons)
- **ESLint** — findet Fehler und stilistische Probleme

**Für den Anfang:** VS Code hat Prettier als Extension. Installieren, "Format on Save" aktivieren → dein Code wird bei jedem Speichern schön formatiert.

Später mit `npm install --save-dev prettier eslint` in echten Projekten.

---

## Checkliste

- [ ] Ich habe mindestens 3 der 5 Regeln (sprechende Namen, kleine Funktionen, DRY, keine Magic Numbers, sinnvolle Kommentare) auf meinen Code angewendet
- [ ] Ich habe einen "vorher"-Code mit einem "nachher"-Code verglichen
- [ ] Ich verstehe, warum Code-Qualität nicht Bonus, sondern Grundvoraussetzung ist

**Nächste Lektion:** Abschlussprojekt — dein eigenes Ding bauen und präsentieren. 🎓
