# AGENTS.md — HTML/JavaScript Grundkurs

Du hilfst mir beim Aufbau eines HTML/JavaScript-Grundkurses für einen 16-jährigen Lehrling mit minimalem Vorwissen.

## Zielgruppe

- **Alter:** 16 Jahre
- **Kontext:** Lehrling **Applikationsentwickler EFZ** (1. Lehrjahr), minimales Programmier-Vorwissen
- **Sprache:** Deutsch, duzen, Fachbegriffe einführen und erklären (er wird sie später brauchen)
- **Lernstil:** projektbasiert, praxisnah, Erfolg vor Theorie
- **Perspektive:** Das wird sein Beruf. Grundlagen solid, aber mit Blick auf professionelle Praxis (nicht nur Bastel-Niveau).

## Kursprinzipien

1. **Jede Lektion endet mit einem sichtbaren Ergebnis**, das der Lehrling zeigen kann.
2. **Ein Konzept pro Lektion**, sofort anwenden.
3. **Kurze Sessions:** 60–90 Minuten pro Lektion.
4. **Kein Setup-Hell:** nur Browser + VS Code + Live Server. Kein npm, kein Node, keine Frameworks.
5. **Fehlermeldungen lesen** ist eine eigene Skill — beibringen.
6. **Google/Stack Overflow** ist erlaubt, aber verstehen was man kopiert.

## Kursstruktur

| # | Thema | Projekt am Ende |
|---|-------|-----------------|
| 1 | HTML-Grundgerüst | Persönliche Steckbrief-Seite |
| 2 | CSS (Farben, Schrift) | Steckbrief wird schön |
| 3 | Flexbox / Layout | 3-Spalten-Layout |
| 4 | Bilder, Links, Listen | Kleine Fanpage |
| 5 | JS: Erste Zeilen | Button ändert Text |
| 6 | Variablen, if/else | Zahlenraten-Spiel |
| 7 | DOM manipulieren | Klick-Counter |
| 8 | Formulare & Events | To-Do-Liste |
| 9 | Arrays & LocalStorage | To-Do bleibt gespeichert |
| 10 | fetch() & APIs | Wetter- oder Witze-App |
| 11 | Code-Qualität & Debugging | Bestehenden Code refactoren |
| 12 | Freies Abschlussprojekt | Eigene Idee, in Code-Review vorstellen |

## Format pro Lektion

Erstelle jede Lektion als eigenen Ordner mit folgender Struktur:

```
lektion-XX-thema/
├── README.md          # Lernziele, Theorie kurz, Anleitung
├── beispiel/          # Fertiges Code-Beispiel zum Anschauen
│   ├── index.html
│   ├── style.css
│   └── script.js
├── uebungen/          # Übungsaufgaben
│   ├── uebung-1.md
│   ├── uebung-2.md
│   └── uebung-3.md
└── loesungen/         # Musterlösungen
    ├── uebung-1/
    ├── uebung-2/
    └── uebung-3/
```

### README.md pro Lektion enthält:

1. **Lernziele** — 2–4 klare Punkte ("Du kannst nach dieser Lektion...")
2. **Vorwissen** — was aus vorherigen Lektionen bekannt sein muss
3. **Theorie** — max. 1 A4-Seite, mit Code-Snippets
4. **Live-Demo** — Anleitung, was gemeinsam gebaut wird
5. **Übungen** — Verweis auf `uebungen/` mit kurzer Beschreibung
6. **Bonus** — 1 optionale Herausforderung für Schnelle
7. **Checkliste** — "Vor der nächsten Lektion solltest du..."

### Übungen

- **3 Übungen pro Lektion**, aufsteigend im Schwierigkeitsgrad:
  - Übung 1: Nachbauen (geführt)
  - Übung 2: Erweitern (kleine eigene Entscheidung)
  - Übung 3: Selber machen (freier)
- Jede Übung hat: Aufgabenstellung, erwartetes Ergebnis (Screenshot/Beschreibung), Hinweise
- **Keine fertige Lösung in der Übungs-MD verlinken** — muss aktiv aus `loesungen/` geholt werden

### Lösungen

- Kompletter lauffähiger Code
- Kommentare im Code, die WARUM erklären, nicht WAS
- Am Ende der Lösung: kurzer Text "Andere Varianten wären..." (zeigt: es gibt mehr als einen Weg)

## Weglassen (in DIESEM Kurs)

- Frameworks (React, Vue, Angular) — kommt im Folgekurs
- Build-Tools (Webpack, Vite) — kommt mit Frameworks
- TypeScript — kommt später
- Backend / Node.js / npm — separater Kurs
- CSS Grid (Flexbox reicht als Einstieg — Grid als Bonus möglich)

## Was ich BEWUSST einbaue (weil Applikationsentwickler)

- **Semantisches HTML** ab Lektion 1 (`<header>`, `<main>`, `<article>` statt nur `<div>`)
- **Saubere Namensgebung** (Variablen, Funktionen, IDs, Klassen)
- **DevTools ab Lektion 2** — Elements, Console, Network
- **Fehlermeldungen lesen** als eigene Übung (Lektion 5)
- **Git-Basics ab Lektion 6** (commit/push, lokal + GitHub) — nur das Nötigste
- **Code-Kommentare** wann sinnvoll, wann nicht
- **Refactoring** als Konzept (Lektion 11)
- **Ausblick** am Kursende: was kommt als nächstes (Frameworks, Backend, DBs)

## Tools, die vorausgesetzt werden

- **VS Code** + Extension "Live Server"
- **Chrome** oder Firefox mit DevTools (F12)
- Ab Lektion 6: **Git** + GitHub-Account
- Nix anderes

## Wenn ich dich um was bitte

- **"Erstelle Lektion X"** → komplette Ordnerstruktur mit README, Beispiel, Übungen, Lösungen
- **"Baue Übung X aus Lektion Y"** → nur die eine Übung + Musterlösung
- **"Prüfe meine Lösung"** → Code review, wohlwollend, konstruktiv, für einen Lehrling verständlich
- **"Erklär mir X wie einem 16-Jährigen"** → Analogien, Alltagsbeispiele, keine Buzzwords

## Ton

- Direkt, freundlich, motivierend
- Keine unnötigen Warnungen ("Achtung, hier musst du unbedingt...")
- Fehler sind normal — nicht dramatisieren
- Humor ist ok, wenn er passt
