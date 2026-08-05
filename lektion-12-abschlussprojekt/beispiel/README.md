# 🌱 Habit Tracker

Eine einfache Web-App, um tägliche Gewohnheiten zu tracken und Streaks zu sammeln.

**Beispiel-Projekt** für Lektion 12 (Abschlussprojekt) des HTML/JS-Grundkurses.

## Features

- ✅ Gewohnheiten mit Emoji + Namen hinzufügen
- 🔥 Streak-Zähler (wie viele Tage in Folge?)
- 📅 7-Tage-Ansicht pro Gewohnheit
- 💾 Alles wird lokal gespeichert (localStorage)
- 🗑️ Gewohnheiten wieder löschen

## Starten

1. Ordner in VS Code öffnen
2. Rechtsklick auf `index.html` → "Open with Live Server"
3. Browser öffnet die App

**Kein Server, kein Build, kein npm.** Reines HTML + CSS + JavaScript.

## Technisch

- **HTML** — semantische Struktur mit `<header>`, `<main>`, `<form>`
- **CSS** — Grid für Layout, CSS-Variablen für Theming, Flexbox für Reihen
- **JavaScript** — State → Render Pattern mit localStorage-Persistenz
- **Kein Framework**

## Datenformat

Ein Habit sieht so aus:

```javascript
{
    id: 1725184623456,   // Date.now() als eindeutige ID
    emoji: "🏃",
    name: "Joggen",
    erledigt: {
        "2026-08-05": true,
        "2026-08-04": true
    }
}
```

## Was ich gelernt habe

- **Datum als Key** in einem Objekt (`erledigt["2026-08-05"]`) — perfekt für Datums-basiertes Tracking
- **Streak-Berechnung** rückwärts vom heutigen Tag
- **CSS-Variablen** für zentralisiertes Theming
- **Grid-Layout** für strukturierte Karten

## Was ich als nächstes bauen würde

- Kategorien für Habits (Sport, Lernen, Health)
- Statistiken über Zeit (letzte 30 Tage, letzten 3 Monate)
- Erinnerungen (Web Notifications API)
- Export/Import als JSON
- Dark Mode
