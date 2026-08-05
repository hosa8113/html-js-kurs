# Übung 3 — Ein eigenes Projekt refactoren

**Schwierigkeit:** Frei
**Zeit:** 30–60 Minuten

## Aufgabe

Nimm **eines deiner eigenen Projekte** aus Lektion 5–10 und refactor es.

Wähle ein Projekt, das:
- Etwas grösser ist (Lektion 8, 9, oder 10)
- Wo du "wusstest, dass es besser geht" beim Bauen
- Wo Copy-Paste-Code drin ist

## Refactoring-Checkliste

### Namen
- [ ] Alle Variablen: sprechend, keine `x`, `y`, `tmp`
- [ ] Alle Funktionen: `verb` oder `verb-substantiv`
- [ ] Booleans: `ist-`, `hat-`, `kann-`
- [ ] Konstanten: `GROSSBUCHSTABEN`

### Funktionen
- [ ] Jede Funktion macht **eine** Sache
- [ ] Funktionsnamen beschreiben genau, was passiert
- [ ] Keine Funktion länger als ~15 Zeilen (Richtwert!)

### Struktur
- [ ] Konstanten oben in der Datei
- [ ] DOM-Referenzen einmal geholt
- [ ] Funktionen nach Verantwortung gruppiert
- [ ] Kein `document.getElementById` mitten im Code

### DRY
- [ ] Kein Copy-Paste-Code
- [ ] Wiederkehrende Muster in Funktionen
- [ ] Magic Numbers/Strings als Konstanten

### Kommentare
- [ ] Überflüssige Kommentare weg (`// Counter erhöhen`)
- [ ] Sinnvolle Kommentare drin (WARUM, nicht WAS)

### State (falls relevant)
- [ ] State und DOM sind nicht parallel geführt
- [ ] Änderungen gehen über State → render()

## Vor + Nach dokumentieren

Erstelle in deinem Refactoring-Ordner eine `REFACTORING.md` mit:

- **Ausgangslage**: Welche Probleme hattest du im alten Code?
- **Änderungen**: Was hast du refactored?
- **Statistik**: Zeilen vorher/nachher, Anzahl Funktionen, ...
- **Was ich gelernt habe**: 2-3 Punkte

## Bonus

- **Git-Commits pro Refactoring-Schritt** — nicht alles in einem grossen Commit
- **README.md** in deinem Projekt — was macht das Ding, wie startet man's?
- **CSS auch refactoren**: Klassen sinnvoll benennen, Variables (`--main-color`) verwenden

## Warum das eine gute Übung ist

Refactoring ist eine der wichtigsten Skills als Applikationsentwickler.

- Im echten Job wirst du **90% deiner Zeit** bestehenden Code lesen und ändern, nicht neuen schreiben
- Wer sauberen Code hinterlässt, wird geschätzt
- Wer immer nur "es tut" abliefert, macht sich unbeliebt

Deine ZFA/LAP wird oft daran bewertet, wie **sauber** deine Lösung ist — nicht nur, ob sie funktioniert.

## Lösung

Kein "richtiges" Lösungs-File für diese Übung — dein Projekt ist einzigartig.

Aber unter `loesungen/uebung-3/nachher/` findest du eine **allgemeine Refactoring-Checkliste als PDF-ähnliche Markdown**, die du bei jedem zukünftigen Projekt durchgehen kannst.
