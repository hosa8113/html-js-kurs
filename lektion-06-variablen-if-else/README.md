# Lektion 6 — Variablen, Bedingungen & Zahlenraten-Spiel

**Dauer:** 90 Minuten
**Vorher:** Lektion 5 abgeschlossen (erste JavaScript-Kenntnisse)
**Am Ende:** Du hast ein funktionierendes Zahlenraten-Spiel gebaut.

---

## Lernziele

Nach dieser Lektion kannst du:

- Verstehen, welche Datentypen es gibt und wann welcher passt
- Rechnen mit JavaScript (+, -, *, /, %)
- Vergleichen (===, !==, <, >, <=, >=)
- Bedingungen mit `if`, `else if`, `else`
- Logische Verknüpfungen (`&&`, `||`, `!`)
- Zahlen von Text unterscheiden und umwandeln
- Ein komplettes kleines Spiel mit State und Logik bauen

**Bonus (freiwillig):** Erste Git-Schritte — Code versionieren.

## Vorwissen

- Lektion 5 (JS-Grundlagen, Buttons, `addEventListener`)

---

## Theorie (25 Minuten)

### Datentypen — kurz gerepetiert

```javascript
const zahl = 42;                // Number
const kommazahl = 3.14;         // Number
const text = "Hallo";           // String
const jaOderNein = true;        // Boolean
const leer = null;              // absichtlich leer
```

**Wichtig:** JavaScript unterscheidet **nicht** zwischen "Integer" und "Float" — beides ist einfach `Number`.

### Rechnen — die Operatoren

```javascript
5 + 3      // 8  (Addition)
5 - 3      // 2  (Subtraktion)
5 * 3      // 15 (Multiplikation)
5 / 3      // 1.6666... (Division)
5 % 3      // 2  (Modulo = Rest bei Division)
5 ** 3     // 125 (Potenz)
```

**Modulo (`%`)** ist super für "ist Zahl gerade?": `zahl % 2 === 0`

### Zahlen mit Strings mischen — Vorsicht!

```javascript
"5" + 3        // "53"  (String-Verkettung!)
"5" - 3        // 2     (Zahlen-Subtraktion)
5 + "abc"      // "5abc"
```

**Wenn du sicher gehen willst, wandelst du um:**

```javascript
Number("42")       // 42
parseInt("42")     // 42
parseFloat("3.14") // 3.14
String(42)         // "42"
```

**Klassischer Fall:** `prompt()` gibt immer einen **String** zurück:

```javascript
const eingabe = prompt("Zahl?");   // "42" (String!)
const zahl = Number(eingabe);      // 42 (echte Zahl)
```

### Vergleichen

```javascript
5 === 5     // true  (Wert UND Typ gleich)
5 === "5"   // false (Wert gleich, Typ verschieden)
5 !== 3     // true
5 > 3       // true
5 < 3       // false
5 <= 5      // true
5 >= 6      // false
```

**Wichtig:** Immer `===` und `!==` verwenden, **nie** `==` und `!=`. Warum? `==` macht komische Typ-Konvertierungen im Hintergrund und führt zu Bugs.

```javascript
0 == false     // true  (WTF)
"" == 0        // true  (auch WTF)
0 === false    // false (klarer)
```

### `if`, `else if`, `else`

```javascript
const alter = 16;

if (alter >= 18) {
    console.log("Volljährig");
} else if (alter >= 16) {
    console.log("Fast volljährig");
} else {
    console.log("Noch minderjährig");
}
```

**Ablauf:**
1. Ist Bedingung 1 wahr? → Führe Block 1 aus, fertig.
2. Wenn nicht: ist Bedingung 2 wahr? → Führe Block 2 aus, fertig.
3. Sonst: Führe `else`-Block aus.

**Nur einer der Blöcke** wird ausgeführt.

### Logische Verknüpfungen

```javascript
// UND (beide müssen wahr sein)
if (alter >= 16 && hatFahrausweis) { ... }

// ODER (mindestens eines wahr)
if (istWochenende || istFeiertag) { ... }

// NICHT (dreht Wahrheitswert um)
if (!istEingeloggt) { ... }
```

### `prompt()` — schnelle Eingabe

Für erste Übungen und Spiele super:

```javascript
const name = prompt("Wie heisst du?");
const alter = Number(prompt("Wie alt bist du?"));

if (alter >= 18) {
    alert(name + ", du bist volljährig.");
}
```

**Hinweis:** `prompt` und `alert` sind altmodisch und in echten Web-Apps kaum benutzt. Für Lernen und schnelle Spiele okay. Später bauen wir Eingaben mit `<input>`-Feldern (Lektion 8).

### `Math.random()` — zufällige Zahlen

```javascript
Math.random()                            // 0.0000 bis 0.9999
Math.random() * 10                       // 0 bis 9.99
Math.floor(Math.random() * 10)           // 0 bis 9 (ganze Zahl)
Math.floor(Math.random() * 10) + 1       // 1 bis 10
Math.floor(Math.random() * 100) + 1      // 1 bis 100 → für unser Spiel!
```

### State: Variablen, die sich über die Zeit ändern

In einem Spiel merkst du dir Sachen:
- Wie oft hat der User geraten?
- Was ist die geheime Zahl?
- Hat er schon gewonnen?

Dafür brauchst du **`let`**:

```javascript
let versuche = 0;
let geheimeZahl = Math.floor(Math.random() * 100) + 1;
let gewonnen = false;
```

Diese Variablen leben ausserhalb der Event-Listener, damit sie sich zwischen Klicks merken, was passiert ist.

---

## Live-Demo (30 Minuten)

Wir bauen zusammen ein **Zahlenraten-Spiel**:

1. Computer denkt sich Zahl zwischen 1 und 100 aus
2. User rät per `<input>`-Feld + Button
3. Nach jedem Rate-Versuch gibt's Feedback:
   - "Höher!" wenn zu tief
   - "Tiefer!" wenn zu hoch
   - "Gewonnen!" wenn richtig
4. Anzahl Versuche wird gezählt und angezeigt
5. Nach einem Sieg: neues Spiel starten können

Beispiel liegt unter `beispiel/`.

---

## Übungen (45 Minuten)

- **Übung 1:** Zahlenraten-Spiel bauen (geführt)
- **Übung 2:** Schere-Stein-Papier gegen den Computer (mittel)
- **Übung 3:** Eigenes Mini-Spiel oder Quiz (frei)

---

## Bonus 1 — Fehler-Handling

Was passiert, wenn der User **"abc"** statt einer Zahl eingibt?

```javascript
const zahl = Number(prompt("Zahl?"));

if (isNaN(zahl)) {
    alert("Das ist keine Zahl!");
} else {
    // weitermachen
}
```

`isNaN(x)` = "is Not a Number". Prüft, ob die Umwandlung geklappt hat.

## Bonus 2 — Erste Git-Schritte (optional!)

Zeit, dein Code zu **versionieren**. Git ist der Standard, jedes Team nutzt es.

**Setup (einmalig):**
```bash
git config --global user.name "Dein Name"
git config --global user.email "deine@mail.ch"
```

**Neues Projekt initialisieren:**
```bash
cd mein-zahlenspiel
git init
```

**Änderungen speichern:**
```bash
git add .
git commit -m "Erste Version des Zahlenspiels"
```

**Alle Commits anschauen:**
```bash
git log --oneline
```

**Auf GitHub veröffentlichen:**
1. Neues Repo auf github.com erstellen
2. Lokal verbinden:
```bash
git remote add origin https://github.com/DEIN-USER/zahlenspiel.git
git branch -M main
git push -u origin main
```

**Ab jetzt bei Änderungen:**
```bash
git add .
git commit -m "Änderung X gemacht"
git push
```

**Warum sich das lohnt:**
- Du siehst jede Änderung deiner Historie
- Du kannst zurückgehen, wenn was kaputt geht
- Du kannst mit anderen zusammenarbeiten
- Du hast dein Projekt online sichtbar (Bewerbungen!)

**Nicht Pflicht** für diese Lektion, aber sehr empfohlen. Google + YouTube haben tausend gute Git-Anfänger-Tutorials.

---

## Checkliste vor der nächsten Lektion

- [ ] Ich weiss, warum immer `===` statt `==`
- [ ] Ich habe `if`, `else if`, `else` benutzt
- [ ] Ich habe `Math.random()` verwendet
- [ ] Ich weiss, dass `prompt()` einen String zurückgibt und wie ich in eine Zahl umwandle
- [ ] Ich habe eine `let`-Variable ausserhalb eines Event-Listeners, die sich zwischen Klicks merkt
- [ ] Mein Zahlenraten-Spiel funktioniert im Browser

**Nächste Lektion:** DOM tiefer — Klick-Counter, Elemente hinzufügen und entfernen. 🎯
