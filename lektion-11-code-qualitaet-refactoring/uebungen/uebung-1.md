# Übung 1 — Chaotischen Counter refactoren

**Schwierigkeit:** Einfach
**Zeit:** ca. 20 Minuten

## Aufgabe

Nimm den Code in `loesungen/uebung-1/vorher/` und mach ihn **schön**. Speichere das Ergebnis in einem neuen Ordner (z.B. `uebung-1/nachher/`).

**Wichtig:** Die App muss danach **genauso funktionieren** wie vorher. Refactoring ändert nicht das Verhalten, nur die Struktur.

## Der chaotische Code

Schau dir `loesungen/uebung-1/vorher/script.js` an. Findest du folgende Probleme?

- [ ] Kryptische Variablennamen (`x`, `n`, `y`, `el`)
- [ ] Duplizierte Code-Blöcke
- [ ] Magic Numbers
- [ ] Unnötige Kommentare
- [ ] Direkte DOM-Zugriffe überall
- [ ] Grosse Funktionen mit mehreren Aufgaben

## Anforderungen fürs Refactoring

- [ ] **Alle Variablennamen** sind sprechend und auf Deutsch
- [ ] **Konstanten** für "magische" Werte (`localStorage`-Key, min/max)
- [ ] **DOM-Elemente einmal holen**, nicht mehrfach
- [ ] **Update-Funktion** statt duplizierter Code-Blöcke
- [ ] **Kommentare** nur wo sie was Nützliches sagen
- [ ] Funktioniert **immer noch** wie vorher

## Refactoring-Reihenfolge (empfohlen)

1. **DOM-Elemente einmal holen** und in `const`s speichern
2. **Variablen umbenennen** (VS Code: Rechtsklick → Rename Symbol, F2)
3. **Konstanten extrahieren** (Magic Numbers/Strings raus)
4. **Duplikate zusammenführen** in Funktionen
5. **Unnötige Kommentare löschen**, sinnvolle hinzufügen
6. **Testen** dass alles läuft

**Nach jedem Schritt**: App im Browser testen! Nicht 10 Änderungen auf einmal.

## Bonus

- **Git-Commits pro Refactoring-Schritt** — so kannst du zurückgehen
- **Vor + nach** dokumentieren: Wie viele Zeilen? Wie viele Funktionen?
- **Zeige jemandem** das Vorher-Nachher — sieht der Unterschied sofort?

Lösung: `loesungen/uebung-1/nachher/`
