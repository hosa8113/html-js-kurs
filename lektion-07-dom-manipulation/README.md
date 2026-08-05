# Lektion 7 — DOM manipulieren

**Dauer:** 90 Minuten
**Vorher:** Lektionen 5–6 abgeschlossen
**Am Ende:** Du kannst Elemente per JavaScript hinzufügen, löschen und verändern — die Basis für jede echte Web-App.

---

## Lernziele

Nach dieser Lektion kannst du:

- Verstehen, was das **DOM** ist (kein Magie-Kram)
- Elemente auf mehrere Arten finden: `getElementById`, `querySelector`, `querySelectorAll`
- Neue Elemente **erstellen** mit `createElement()`
- Elemente **hinzufügen** mit `appendChild()` oder `.append()`
- Elemente **entfernen** mit `.remove()`
- Klassen dynamisch steuern mit `classList` (add/remove/toggle/contains)
- Attribute setzen und lesen mit `setAttribute` / `getAttribute` / `dataset`

## Vorwissen

- Lektionen 5–6 (JS-Basics, Events, Bedingungen)

---

## Theorie (20 Minuten)

### Was ist das DOM?

**DOM** = **D**ocument **O**bject **M**odel.

Wenn der Browser deine HTML-Datei lädt, baut er sie im Speicher als **Baum von Objekten** auf. Diesen Baum nennt man DOM.

Beispiel:

```html
<body>
    <h1>Titel</h1>
    <p>Text</p>
</body>
```

Wird intern zu:

```
document
  └── html
      └── body
          ├── h1  ("Titel")
          └── p   ("Text")
```

Alles, was du mit JavaScript siehst und änderst, ist ein Objekt in diesem Baum. `document.getElementById(...)` gibt dir eines dieser Objekte — und du kannst es dann verändern, löschen, oder neue erstellen.

### Elemente finden — die 3 Wege

**`getElementById`** — ein Element per ID:
```javascript
const btn = document.getElementById("mein-button");
```

**`querySelector`** — erstes Element per CSS-Selektor:
```javascript
const btn = document.querySelector("#mein-button");
const ersteKarte = document.querySelector(".karte");
const ersterLink = document.querySelector("nav a");
```

**`querySelectorAll`** — alle Elemente per CSS-Selektor:
```javascript
const alleKarten = document.querySelectorAll(".karte");
const alleLinks = document.querySelectorAll("nav a");
```

**Faustregel:**
- **1 Element mit ID** → `getElementById` (leicht schneller)
- **1 Element mit anderer Regel** → `querySelector`
- **Mehrere Elemente** → `querySelectorAll`

### Elemente erstellen und hinzufügen

**Schritt 1: erstellen**
```javascript
const neuesLi = document.createElement("li");
neuesLi.textContent = "Neuer Punkt";
```

**Schritt 2: einfügen**
```javascript
const liste = document.getElementById("meine-liste");
liste.appendChild(neuesLi);
// oder moderner:
liste.append(neuesLi);
```

**Ergebnis im DOM:**
```html
<ul id="meine-liste">
    <li>Alter Punkt</li>
    <li>Noch einer</li>
    <li>Neuer Punkt</li>   <!-- ← wurde hinzugefügt -->
</ul>
```

### Elemente entfernen

```javascript
const element = document.getElementById("weg-damit");
element.remove();
```

Weg. Fertig.

### Attribute und Klassen

**Klassen:**
```javascript
element.classList.add("aktiv");
element.classList.remove("aktiv");
element.classList.toggle("aktiv");        // an/aus
element.classList.contains("aktiv");      // true/false
```

**Attribute (allgemein):**
```javascript
img.setAttribute("src", "neu.jpg");
img.getAttribute("src");           // "neu.jpg"
img.removeAttribute("src");
```

**`data-*`-Attribute (Kurzform):**
```html
<button data-user-id="42">Löschen</button>
```
```javascript
btn.dataset.userId    // "42"
btn.dataset.userId = "43";
```

**Spezielle Element-Properties:**
```javascript
input.value = "neuer Text";     // <input>-Wert
checkbox.checked = true;        // Checkbox setzen
img.src = "bild.jpg";           // Bild ändern
link.href = "neu.html";         // Link-Ziel
```

### `textContent` vs. `innerHTML` — nochmal

```javascript
element.textContent = "Reiner Text";     // sicher, immer bevorzugen
element.innerHTML = "<b>Fett</b>";       // baut HTML — gefährlich bei User-Input
```

**Faustregel:** `textContent`, ausser du willst **wirklich** HTML einfügen und weisst, dass der Input sicher ist.

### Alles zusammen — Beispiel

Ein Element **komplett aus dem Nichts** bauen und einfügen:

```javascript
const container = document.getElementById("container");

const karte = document.createElement("div");
karte.className = "karte";
karte.dataset.id = "42";

const titel = document.createElement("h3");
titel.textContent = "Neue Karte";

const inhalt = document.createElement("p");
inhalt.textContent = "Inhalt der Karte";

const loeschBtn = document.createElement("button");
loeschBtn.textContent = "Löschen";
loeschBtn.addEventListener("click", () => karte.remove());

karte.append(titel, inhalt, loeschBtn);
container.append(karte);
```

**Ergebnis:** Fertig gebaute Karte mit Titel, Text und Lösch-Button — alles per JS.

### Kurze Alternative: `innerHTML` mit Vorsicht

```javascript
container.innerHTML += `
    <div class="karte" data-id="42">
        <h3>Neue Karte</h3>
        <p>Inhalt der Karte</p>
        <button onclick="this.parentElement.remove()">Löschen</button>
    </div>
`;
```

Kürzer, aber:
- **XSS-Gefahr** bei User-Input
- **Alle bestehenden Event-Listener gehen verloren**, wenn du `innerHTML` überschreibst
- **Performance schlechter** bei vielen Änderungen

**Für kleine Sachen okay, für seriösen Code: `createElement`.**

---

## Live-Demo (30 Minuten)

Wir bauen einen **Klick-Counter mit Verlauf**:

- Ein grosser Zähler in der Mitte
- **+1 / -1 / Reset**-Buttons
- **Verlaufs-Liste**: jeder Klick fügt einen Eintrag mit Zeitstempel hinzu
- **Löschen**-Button pro Eintrag

Alle Techniken der Lektion kommen vor: `createElement`, `append`, `remove`, `classList`, `textContent`.

Schau dir `beispiel/` an — genau das ist das Ziel.

---

## Übungen (45 Minuten)

- **Übung 1:** Klick-Counter mit +/-/Reset (geführt)
- **Übung 2:** Karten-Builder — Karten dynamisch hinzufügen (mittel)
- **Übung 3:** Interaktive Liste (Vorgeschmack auf To-Do — frei)

---

## Bonus — DevTools-Trick

Rechts-Klick auf ein Element → "Inspect" → in der Console kannst du live Elemente manipulieren:

```javascript
document.querySelector("h1").textContent = "Ha!";
document.body.style.backgroundColor = "hotpink";
```

**Perfekt zum Testen**, ohne den Code jedes Mal zu ändern.

---

## Checkliste vor der nächsten Lektion

- [ ] Ich verstehe, was das DOM ist
- [ ] Ich kenne den Unterschied zwischen `getElementById`, `querySelector` und `querySelectorAll`
- [ ] Ich habe mit `createElement` + `append` ein Element live hinzugefügt
- [ ] Ich habe mit `.remove()` ein Element gelöscht
- [ ] Ich habe `classList.toggle()` mindestens einmal verwendet
- [ ] Ich weiss, warum `textContent` sicherer ist als `innerHTML`

**Nächste Lektion:** Formulare & Events tiefer — die richtige To-Do-Liste. ✅
