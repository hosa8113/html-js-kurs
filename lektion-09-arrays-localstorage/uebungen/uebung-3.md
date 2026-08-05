# Übung 3 — Eigene persistente App

**Schwierigkeit:** Frei
**Zeit:** 30–60 Minuten

## Aufgabe

Bau **irgendeine App**, die das State → Render → Persist Pattern verwendet.

## Ideen

**Datenbanken:**
- **Bookmark-Manager** — Links speichern mit Titel + URL + Kategorie
- **Notiz-App** — Kurznotizen mit Titel + Text + Farbe
- **Zitat-Sammlung** — Zitate mit Autor speichern
- **Filmliste** — gesehene Filme mit Bewertung
- **Zuckerkonsum-Tracker** — Datum + Menge

**Tracker:**
- **Habit-Tracker** — täglich abhaken (Sport, Wasser, Lernen)
- **Trinkmengen-Zähler** — den Tag über Wasser trinken
- **Ausgaben-Tracker** — Beträge + Kategorie
- **Stimmungs-Tagebuch** — täglich Stimmung + Notiz

**Spiele:**
- **Highscore-Liste** für ein simples Spiel
- **Vokabel-Trainer** — Wortpaare speichern und abfragen

## Anforderungen

- [ ] **State-Array** mit **Objekten** (mind. 3 Felder pro Objekt)
- [ ] **`render()`** baut UI aus State
- [ ] **`speichern()`** + **`laden()`** mit `localStorage`
- [ ] Mindestens **3 Actions** (z.B. hinzufügen, ändern, löschen)
- [ ] Nach Reload: alles ist noch da
- [ ] **Sauberes CSS** — sieht gut aus
- [ ] **Empty-State** — was zeigen, wenn Array leer?

## Ansatz-Grundgerüst

```javascript
const SPEICHER_KEY = "meine-app";
let items = [];

function speichern() {
    localStorage.setItem(SPEICHER_KEY, JSON.stringify(items));
}

function laden() {
    items = JSON.parse(localStorage.getItem(SPEICHER_KEY) || "[]");
}

function render() {
    // DOM leeren und aus items neu bauen
}

// Actions
function hinzufuegen(...) {
    items.push({ id: Date.now(), ... });
    speichern();
    render();
}

function loeschen(id) {
    items = items.filter((i) => i.id !== id);
    speichern();
    render();
}

// Start
laden();
render();
```

## Bonus-Ideen

- **Suche/Filter** — nur passende Items anzeigen
- **Sortieren** — nach Datum, Titel, ...
- **Export/Import** als JSON-Datei
- **Dark Mode** mit gespeicherter Präferenz
- **Statistiken** — z.B. "Diesen Monat hast du X Bookmarks hinzugefügt"

## Musterlösung

Die Lösung unter `loesungen/uebung-3/` ist ein **Bookmark-Manager** mit Kategorien, Suche und persistentem Dark-Mode. Aber deine App kann komplett anders sein.

## Warum das die "grosse Übung" ist

Ab hier hast du **alles**, was du für eine echte Vanilla-JS-App brauchst:
- HTML-Struktur
- CSS-Styling
- JS-Interaktivität
- State-Management
- Persistenz
- CRUD

Das nächste Level (fetch/APIs, Frameworks) baut alles darauf auf. Wenn diese Übung sitzt, kannst du **ohne Framework** produktive Apps bauen.

Lösung: `loesungen/uebung-3/`
