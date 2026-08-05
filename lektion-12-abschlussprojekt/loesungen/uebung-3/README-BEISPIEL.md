# 📝 QuickNotes

Eine schnelle, minimalistische Notiz-App im Browser. Keine Anmeldung, keine Wolke — nur du und deine Gedanken.

![Screenshot der QuickNotes-App](screenshot.png)

## Live Demo

👉 **[quicknotes.anna-example.ch](#)** (nicht real — Beispiel)

Oder lokal starten:

```bash
git clone https://github.com/anna-example/quicknotes.git
cd quicknotes
# index.html mit Live Server öffnen
```

## Was kann die App?

- 📝 Neue Notizen schnell erstellen
- 🏷️ Nach Kategorien organisieren (Idee, Aufgabe, Wichtig, Sonstiges)
- 🔍 Live-Suche über Titel und Inhalt
- 🗑️ Notizen mit Bestätigung löschen
- 💾 Alles wird lokal im Browser gespeichert
- ✨ Kleine Animationen für angenehmes Nutzungsgefühl

## Warum ich das gebaut habe

Google Keep ist mir zu überladen. Notion ist too much für eine Idee, die man schnell festhalten will. Ich wollte was, das in **2 Sekunden** aufgeht und in dem ich in **3 Sekunden** die Notiz habe. QuickNotes ist die Antwort.

## Technisch

- **HTML5** mit semantischen Tags
- **CSS3** mit CSS-Variablen für Theming
- **JavaScript (ES6+)** — Vanilla, kein Framework
- **localStorage** für Persistenz
- **CSS Grid + Flexbox** für Layout
- **Kein Build-Tool**, kein npm

Läuft in jedem modernen Browser (Chrome, Firefox, Safari, Edge).

## Datenmodell

Eine Notiz sieht so aus:

```javascript
{
    id: 1725184623456,           // Date.now() als eindeutige ID
    titel: "App-Idee",
    text: "Was wäre, wenn eine App mir hilft...",
    kategorie: "idee",           // "idee" | "aufgabe" | "wichtig" | "sonstiges"
    erstellt: "2026-08-05T10:30:00.000Z"
}
```

Alle Notizen als Array in `localStorage["quicknotes-v1"]`.

## Struktur

```
quicknotes/
├── index.html          # Haupt-HTML
├── style.css           # Styling
├── script.js           # App-Logik
├── screenshot.png      # Für README
├── PLAN.md             # Ursprünglicher Projekt-Plan
└── README.md           # Du liest sie gerade
```

## Was ich beim Bauen gelernt habe

1. **State → Render Pattern** ist mächtig. Ein Array als Wahrheit, `render()` baut UI daraus. So einfach zu warten.
2. **CSS-Variablen** ändern alles. Ein Theme-Wechsel in 2 Minuten möglich.
3. **`Date.now()` als ID** ist einfach und robust — kein extra Counter nötig.
4. **Empty States** sind wichtiger als gedacht — eine leere Liste ohne Feedback fühlt sich kaputt an.
5. **`.trim()` immer**, wenn User-Input verarbeitet wird — sonst Weissraum-Chaos.

## Was ich als nächstes bauen würde

- ✏️ **Notiz bearbeiten** — Doppelklick auf Titel/Text
- 🌙 **Dark Mode** mit gespeicherter Präferenz
- 📤 **Export als JSON** — Notizen sichern
- 📌 **Pin-Funktion** — wichtige Notizen oben
- ⌨️ **Keyboard-Shortcuts** — `Ctrl+N` für neue Notiz

Und wenn ich noch mehr Zeit hätte:
- ☁️ Backend mit Node.js + PostgreSQL für Sync über Geräte
- 📱 PWA-Version für Handy-Home-Screen

## Für wen ist das?

Für alle, die eine **einfache** Notiz-App wollen — ohne Konto, ohne Sync, ohne Berechtigungen. Perfekt für:
- Studenten und Auszubildende
- Kreative mit vielen Ideen
- Alle mit einem "Google Keep zu voll"-Problem

## Bekannte Einschränkungen

- Notizen sind **nur in diesem Browser** gespeichert (kein Sync)
- Bei Cache-Löschen sind alle Notizen weg — Export-Funktion empfohlen (kommt in v1.1)
- Keine Formatierung (kein Markdown, kein Rich-Text — Absicht: einfach halten)

## Lizenz

MIT — mach was draus.

---

**Gebaut von Anna Beispiel** — August 2026
📧 [anna@example.com](mailto:anna@example.com) · 🐙 [github.com/anna-example](https://github.com/anna-example)

Teil des HTML/JavaScript-Grundkurses.
