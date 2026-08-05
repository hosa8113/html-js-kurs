# Musterlösung — Übung 1

## Was hier gemacht wurde

Die vier vorgegebenen Style-Bereiche 1:1 umgesetzt. Klein und übersichtlich — genau richtig für die erste CSS-Übung.

## Wichtige Punkte

- **Kommentare in CSS:** `/* ... */` — hilft dir und anderen, die CSS-Datei später zu verstehen.
- **`sans-serif`** ist eine generische Schriftfamilie — der Browser wählt selbst eine passende. Später bindet man einen echten Font ein (Übung 3).
- **Farbe `#333` statt `#000`:** Reines Schwarz ist auf hellem Grund unnötig hart. `#333` ist weicher und liest sich angenehmer.

## Häufige Fehler

- **CSS-Datei nicht verlinkt** — `<link>` fehlt im `<head>`, oder Pfad ist falsch
- **Selektor mit `.` oder `#` verwechselt** — bei Tag-Selektoren KEIN Punkt (`h1`, nicht `.h1`)
- **Semikolon vergessen** am Ende der Regel — die folgende Regel wird dann ignoriert
- **Geschweifte Klammer nicht geschlossen** — CSS ab da kaputt

## Andere Wege

- Man könnte alle Farben als **CSS-Variablen** definieren (kommt in Übung 3 Bonus).
- Statt `border-bottom` würde auch `text-decoration: underline` gehen — aber `border-bottom` gibt dir Kontrolle über Farbe und Dicke.
