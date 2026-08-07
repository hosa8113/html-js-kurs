# Übung 3 — Multi-Seiten-Fanpage

**Schwierigkeit:** Frei
**Zeit:** ca. 15 Minuten (+ mehr wenn du willst)

## Aufgabe

Baue eine **komplette Fanpage mit mindestens 3 Seiten**, die alle sauber miteinander verlinkt sind.

## Struktur

```
meine-fanpage/
├── index.html         (Startseite — aus Übung 1)
├── galerie.html       (Bildergalerie — aus Übung 2)
├── fakten.html        (NEU: Fakten & Details)
├── style.css          (gemeinsame Styles für alle Seiten)
└── bilder/            (optional: eigene Bilder)
```

## Anforderungen für die neue Seite `fakten.html`

- [ ] Kopfbereich mit Navigation (konsistent mit anderen Seiten)
- [ ] **Beschreibungsliste (`<dl>`)** mit mindestens 5 Fakten — z.B.:
  - Erscheinungsjahr / Gründung
  - Entwickler / Künstler
  - Genre
  - Ort / Land
  - Coole Trivia
- [ ] Mindestens **3 Sektionen** mit `id` (z.B. `id="geschichte"`, `id="charaktere"`, ...)
- [ ] Am Seitenanfang ein **"Inhaltsverzeichnis"** mit Sprungmarken zu den Sektionen
- [ ] **Verschachtelte Liste** — Hauptpunkt mit Unterpunkten
- [ ] Mindestens **ein externer Link** (offizielle Website, Wikipedia, whatever)

## Anforderungen für das Gesamtprojekt

- [ ] **Alle 3 Seiten** existieren und funktionieren
- [ ] Navigation zeigt auf **allen Seiten** dieselben Links
- [ ] Der Nav-Link zur **aktuellen Seite** ist visuell markiert
- [ ] `style.css` ist auf **allen** HTML-Dateien eingebunden
- [ ] Keine kaputten Links, keine fehlenden Bilder

## Testen

Klick dich durch:
1. Startseite → "Galerie" klicken → Galerie öffnet sich
2. "Fakten" klicken → Fakten-Seite öffnet sich
3. Auf Fakten-Seite: Sprungmarke im Inhaltsverzeichnis anklicken → springt zur Sektion
4. "Home" klicken → zurück zur Startseite

Alles klappt? 

## Bonus

- **Konsistentes Design** über alle 3 Seiten
- **Favicon** hinzufügen (das kleine Icon im Browser-Tab):
  ```html
  <link rel="icon" href="bilder/favicon.png">
  ```
- **404-Seite:** Erstelle eine `404.html` — nur zum Spass
- **README.md** in deinem Projekt-Ordner, das erklärt, was das Projekt ist

## Was du damit später machen kannst

Diese Struktur — mehrere HTML-Dateien mit gemeinsamer Navigation und CSS — ist die Basis **jeder statischen Webseite**. Ein Blog, ein Portfolio, eine Firmen-Homepage: gleiches Prinzip.

Später lernst du **Templating** und **Static Site Generators** (Astro, Eleventy, Hugo), die dir helfen, den doppelten Header-Code zu vermeiden. Aber die Grundstruktur bleibt.

Lösung: `loesungen/uebung-3/` — vollständige Fanpage mit allen Seiten.
