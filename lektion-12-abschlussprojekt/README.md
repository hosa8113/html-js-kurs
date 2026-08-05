# Lektion 12 — Abschlussprojekt 🎓

**Dauer:** flexibel — 1–3 Wochen
**Vorher:** Lektionen 1–10 abgeschlossen (Lektion 11 empfohlen, aber nicht Pflicht)
**Am Ende:** Ein eigenes Projekt, das du zeigen und in dein Portfolio packen kannst.

---

## Was ist das Abschlussprojekt?

**Kein neuer Stoff.** Du hast alles gelernt, was du brauchst. Jetzt geht's darum, das Gelernte in **einem grösseren, eigenen Projekt** zu kombinieren.

Diese Lektion begleitet dich durch:
1. **Planen** — Idee finden, Anforderungen definieren
2. **Bauen** — schrittweise umsetzen
3. **Präsentieren** — README, GitHub, Vorführen

## Lernziele

Nach diesem Projekt hast du:

- Ein **vollständiges, lauffähiges** Projekt gebaut
- Erfahrung mit dem **kompletten Workflow** (Idee → Plan → Code → Deploy)
- Ein **Vorzeige-Projekt** für Bewerbungen und Portfolio
- Selbstvertrauen, dass du eigenständig Web-Apps bauen kannst

---

## Was zählt als Abschlussprojekt?

**Anforderungen (die absoluten Basics):**

- [ ] Vollständige Web-App mit HTML + CSS + JavaScript
- [ ] Mindestens **3 verschiedene Bildschirme/Ansichten** oder **3 wesentliche Interaktionen**
- [ ] Nutzt **State** und **DOM-Manipulation** (Lektionen 5–7)
- [ ] Nutzt **Formulare** oder **User-Input** (Lektion 8)
- [ ] Persistente Daten mit **`localStorage`** ODER **`fetch()`-API** (Lektionen 9 oder 10)
- [ ] **CSS ist bewusst gestaltet** — nicht "einfach so"
- [ ] **README.md** erklärt das Projekt
- [ ] Läuft **lokal** über Live Server ohne Fehler

**Bonus-Punkte:**

- Mehrere HTML-Seiten mit Navigation
- Kombination von localStorage UND fetch
- Responsive für Mobile
- Auf GitHub Pages veröffentlicht
- Dark Mode / Themes
- Animationen

---

## Projekt-Ideen (falls du keine hast)

### Einfach — 1–3 Tage

1. **Persönliche Portfolio-Seite** — über dich, deine Projekte, Kontakt
2. **Habit Tracker** — täglich abhaken (Sport, Wasser, Lernen)
3. **Zitat des Tages** — Zufalls-Zitat + Favoriten speichern
4. **Kanban-Board** — 3 Spalten (To Do / Doing / Done)
5. **Ausgaben-Tracker** — Beträge + Kategorien, monatliche Summe

### Mittel — 3–7 Tage

6. **Pomodoro-Timer** — 25min Arbeit / 5min Pause / Statistik
7. **Vokabel-Trainer** — Wortpaare speichern, abfragen, Fortschritt
8. **Rezept-Sammlung** — Rezepte speichern mit Zutaten und Anleitung
9. **Filmliste** — gesehen/wollen mit Bewertungen (evtl. + OMDb-API)
10. **Wetter-Dashboard** — Wetter für mehrere Städte (Open-Meteo API)

### Fortgeschritten — 1–3 Wochen

11. **Trading-Journal** — Trades erfassen, Statistiken, Grafiken
12. **Blog-System** — Artikel schreiben, Übersicht, Detail-Ansicht
13. **Zwei-Spieler-Spiel** — Schach, TicTacToe, Battleship (nur lokal)
14. **Chat-Interface** mit einer LLM-API (OpenAI-kompatibel, ohne Backend nur lokal)
15. **Musik-Player** — Songs verwalten, abspielen (`<audio>`-Element)

---

## Beispiel-Projekt anschauen

Unter `beispiel/` findest du einen fertigen **Habit Tracker** als Referenz.

**Features:**
- Habits hinzufügen (Name + Emoji)
- Täglich abhaken
- 7-Tage-Ansicht mit Streaks
- Alles persistent in localStorage
- Reset-Funktion pro Habit

**Nicht kopieren — als Vorlage nutzen.** Wenn du das nachbaust, hast du keinen eigenen Gedanken drin.

---

## Übungen — die 3 Phasen

- **Phase 1 (Übung 1):** Idee & Planung — was baust du, wie?
- **Phase 2 (Übung 2):** Umsetzung — schrittweise bauen
- **Phase 3 (Übung 3):** Präsentation — README, GitHub, Vorstellen

Arbeit dich **der Reihe nach** durch.

---

## Der wichtigste Rat

**Fang klein an.** Der häufigste Fehler bei Abschlussprojekten: zu grosse Idee.

**Grundregel:** Wenn du denkst "das ist safe machbar in 3 Tagen" — geh davon aus, dass es **eine Woche** dauert. Wenn du denkst "eine Woche" → wird's ein Monat.

**Deshalb:** kleine Idee, sauber gebaut. Lieber ein fertiges "Habit Tracker mit 5 Features" als ein halb-fertiges "Social Media Clone".

**Iteriere.** Erst v1: minimal lauffähig. Dann v2: die Features, die du wolltest. Dann v3: Polituren.

---

## Bewertungs-Kriterien (falls dein Lehrer/Betreuer nachfragt)

**Funktion (40%)**
- [ ] App läuft ohne Fehler
- [ ] Alle geplanten Features funktionieren
- [ ] Edge Cases abgefangen (leere Eingaben, Fehler-Fälle)

**Code (30%)**
- [ ] Sinnvolle Variablen-/Funktionsnamen
- [ ] Kein Copy-Paste-Code
- [ ] Kommentare wo nötig
- [ ] Dateien logisch strukturiert

**Design (20%)**
- [ ] Sieht bewusst gestaltet aus (nicht "default weiss")
- [ ] Konsistente Farben/Fonts
- [ ] Responsive (funktioniert auf Mobile)
- [ ] Gute UX (Loading, Empty States, Fehler)

**Präsentation (10%)**
- [ ] README erklärt das Projekt
- [ ] GitHub-Repo sauber
- [ ] Kannst du dein Projekt jemandem in 2 Minuten erklären?

---

## Was danach kommt

Nach diesem Kurs bist du **grundständig ausgebildet** in HTML/CSS/JS.

**Nächste Schritte für deine Applikationsentwickler-Reise:**

1. **Git & GitHub** vertiefen (Branches, Pull Requests, Merge Conflicts)
2. **CSS Grid** dazulernen — das schwesterliche Layout-System zu Flexbox
3. **Ein Framework** anfangen: **Vue.js** oder **React** oder **Svelte**
4. **TypeScript** für sicherere Typen
5. **Backend** mit Node.js + Express + Datenbank
6. **Deploy** lernen: Vercel, Netlify, GitHub Pages

Aber das ist alles Aufbau. Die **Grundlagen** hast du.

**Herzliche Gratulation** zum Kurs-Abschluss. 🎉
