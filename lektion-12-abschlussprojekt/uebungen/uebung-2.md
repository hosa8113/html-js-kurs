# Übung 2 (Phase 2) — Umsetzung

**Dauer:** flexibel — 1 Tag bis 2 Wochen
**Ergebnis:** Ein lauffähiges Projekt.

---

## Bauprinzipien für Abschlussprojekte

### 1. MVP zuerst — Politur später

**MVP** = **M**inimum **V**iable **P**roduct = die kleinste Version, die "funktioniert".

**Falsch:** Erst alles designen, dann alle Features perfekt einbauen, dann testen
**Richtig:** Alle Basis-Features **rudimentär** einbauen, dann iterativ verfeinern

**Beispiel Bookmark-Manager:**

**v0.1 (Tag 1):** Man kann einen Bookmark eingeben, er erscheint in einer Liste. Nichts Schönes.
**v0.2 (Tag 2):** Löschen funktioniert. Sieht nicht mehr komplett hässlich aus.
**v0.3 (Tag 3):** Speicherung in localStorage. Bookmarks überleben Reload.
**v0.4 (Tag 4):** Suche funktioniert. CSS ist ordentlich.
**v1.0 (Tag 5):** Kategorien, README, deployed.

**Vorteile:**
- Am Tag 1 hast du **schon was** — motiviert
- Wenn du in der Zeit nicht fertig wirst, hast du **trotzdem eine funktionierende App**
- Jeder Schritt ist testbar

### 2. Häufig testen

Nach **jedem** kleinen Feature:
1. Speichern (`Ctrl+S`)
2. Browser refreshen
3. Testen: funktioniert das Feature?
4. Console prüfen: gibt's rote Fehler?

**Nicht** 10 Änderungen machen und dann testen — dann weisst du nicht, was den Fehler verursacht hat.

### 3. Commit oft (falls Git benutzt)

```bash
git commit -m "Add: Bookmark-Formular funktioniert"
git commit -m "Add: localStorage-Persistenz"
git commit -m "Fix: Reset-Button leert jetzt korrekt"
```

**Kleine Commits** = einfaches Zurückgehen bei Bugs.

### 4. Wenn du stecken bleibst

**Der Workflow bei Fehlern:**

1. **Lies die Fehlermeldung** — steht sie in der Browser-Console?
2. **`console.log` überall** — was ist der aktuelle Wert der Variable?
3. **Google die Fehlermeldung** — 99% der Probleme haben andere schon gehabt
4. **Simplify** — kommentiere Code weg, bis der Fehler weg ist. Dann weisst du, wo er war.
5. **Frag jemanden** — Kollege, Discord-Community, ChatGPT

**Regel:** Wenn du 30 Minuten stecken bleibst — Pause machen und/oder anderswo weitermachen.

---

## Ordner-Struktur — Vorschlag

```
mein-projekt/
├── index.html
├── style.css
├── script.js
├── README.md              (Projekt-Beschreibung)
├── PLAN.md                (aus Phase 1)
└── assets/                (optional: Bilder, Icons)
    └── logo.png
```

Bei grösseren Projekten:

```
mein-projekt/
├── index.html
├── css/
│   ├── style.css
│   └── formular.css
├── js/
│   ├── main.js
│   ├── api.js
│   └── storage.js
└── README.md
```

---

## Anforderungen für Phase 2

- [ ] Alle **MVP-Features** aus PLAN.md sind umgesetzt
- [ ] App **läuft ohne Fehler** in der Console
- [ ] Alle **Edge Cases** funktionieren:
  - Leerer Zustand? → Empty State
  - Leere Eingabe? → Wird abgefangen
  - Fehler (falls fetch)? → Fehlermeldung
- [ ] **CSS ist bewusst** — nicht "default weiss"
- [ ] Code hat **sinnvolle Namen** und Funktionen
- [ ] Verwendet **State → Render** Pattern (falls relevant)

## Bonus-Tricks für Politur

**Kleine Details, riesiger Unterschied:**

- **Fokus-Management:** Nach Submit den Fokus zurück ins Input (`input.focus()`)
- **Enter-Taste:** Sollte immer sinnvoll reagieren (via `<form>`)
- **Loading-States:** "Lade..." statt leere Seite
- **Empty-States:** "Noch nichts hier — leg los!" statt leere Liste
- **Confirm-Dialoge:** Vor destruktiven Aktionen `confirm(...)`
- **Feedback:** Wenn was gespeichert wird, kurz einen Bestätigungs-Toast
- **Hover-Effekte:** Buttons und Links reagieren beim Drüberfahren
- **Animationen:** Neue Items fliegen sanft rein (`@keyframes`)

Diese Kleinigkeiten machen aus "Schul-Projekt" ein "professionelles Projekt".

---

## Musterlösung

Kein Code hier — dein Projekt ist einzigartig.

Aber unter `loesungen/uebung-2/BAUPHASEN.md` findest du **Beispiel-Bauphasen** eines Projekts, damit du ein Gefühl für iteratives Bauen bekommst.
