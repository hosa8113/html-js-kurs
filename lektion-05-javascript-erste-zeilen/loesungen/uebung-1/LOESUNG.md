# Musterlösung — Übung 1

## Was hier gemacht wurde

Die absolute Basis: Element holen → Event binden → beim Klick was tun.

```javascript
const button = document.getElementById("mein-button");
const text = document.getElementById("text");

button.addEventListener("click", () => {
    text.textContent = "🎉 Ich wurde gedrückt!";
});
```

**3 Zeilen Code, die dein Leben ändern.** Ab hier kannst du im Prinzip **jede** Art von Interaktion bauen — nur die Aktion darin wird komplexer.

## `const` — warum keine `let`?

Weder der Button-Verweis noch der Text-Verweis werden je überschrieben — wir holen sie **einmal** und benutzen sie dann. `const` ist genau richtig.

Später bei Countern oder Toggle-States kommt `let` zum Einsatz.

## Warum `.textContent` und nicht `.innerHTML`?

Beide funktionieren, aber:

- **`.textContent`** → setzt reinen Text. HTML-Tags im Text werden **nicht** interpretiert.
- **`.innerHTML`** → setzt HTML. Wenn du `<script>` reinsteckst, wird es (fast) ausgeführt.

**Sicherheit:** Wenn dein Text aus User-Input kommt, ist `.innerHTML` gefährlich (XSS-Angriffe). Immer `.textContent` bevorzugen, wenn's nur Text ist.

## Arrow Function vs. klassische Funktion

Beide funktionieren identisch für unseren Fall:

```javascript
// Arrow (moderner, kürzer)
button.addEventListener("click", () => {
    text.textContent = "...";
});

// Klassisch
button.addEventListener("click", function() {
    text.textContent = "...";
});
```

Arrow Functions haben ein paar technische Unterschiede (bei `this`), aber für den Anfang: **nimm immer Arrow**.

## Häufige Fehler bei dieser Übung

- **ID falsch geschrieben** → `getElementById` gibt `null` zurück → `Cannot read properties of null`
- **`<script>` im `<head>` ohne `defer`** → Script läuft, bevor Button existiert → `null`
- **`.textContent = ...` mit `=` statt `==`** → richtig! `=` ist zuweisen, `==` ist vergleichen
- **Anführungszeichen vergessen** → `"Text"` ist ein String, `Text` ohne Anführungszeichen wäre eine Variable

## Was jetzt passiert, wenn du 5× klickst?

Der Text wird 5× auf denselben Wert gesetzt. Es passiert visuell nichts, weil er schon so aussieht.

**Wenn du willst, dass der Text jedes Mal wechselt:**

```javascript
let anzahl = 0;
button.addEventListener("click", () => {
    anzahl = anzahl + 1;
    text.textContent = "Du hast mich " + anzahl + "× geklickt!";
});
```

Vorschau auf Übung 2 und Lektion 6.
