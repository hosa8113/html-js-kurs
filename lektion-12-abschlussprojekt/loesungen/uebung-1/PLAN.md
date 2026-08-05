# Mein Abschlussprojekt: 📝 QuickNotes

Musterlösung für Phase 1 — ein realistischer, gut geplanter Projekt-Plan.

---

## Was macht die App?

Eine schnelle Notiz-App im Browser, in der ich kurze Gedanken, Ideen und Erinnerungen festhalten kann — mit Kategorien und Suche. Alles wird lokal gespeichert, keine Anmeldung nötig.

## Zielgruppe

Ich selbst (und alle, denen Google Keep zu überfrachtet ist). Studenten, Auszubildende, alle die schnell was notieren wollen.

## Wichtigste Features (MVP — 3–5 Tage)

- [ ] Neue Notiz erstellen (Titel + Text)
- [ ] Alle Notizen als Karten-Grid anzeigen
- [ ] Kategorie pro Notiz (Idee, Aufgabe, Wichtig, Sonstiges)
- [ ] Notiz löschen (mit Bestätigung)
- [ ] Suche über Titel und Text
- [ ] Alles in `localStorage` gespeichert

## Nice-to-have Features (später)

- [ ] Notiz bearbeiten (nicht nur löschen)
- [ ] Zeitstempel pro Notiz
- [ ] Farb-Codierung pro Kategorie
- [ ] Export als JSON
- [ ] Dark Mode
- [ ] Pin-Funktion (wichtige Notizen oben)

## Datenmodell

Eine Notiz sieht so aus:

```javascript
{
    id: 1725184623456,      // Date.now()
    titel: "Idee für App",
    text: "Was wäre, wenn...",
    kategorie: "idee",
    erstellt: "2026-08-05T10:30:00.000Z"
}
```

## Screens / Ansichten

**Nur eine Seite** — alles in einer Ansicht:

1. **Header** — Titel + Suchfeld
2. **Formular** oben — neue Notiz eingeben
3. **Filter-Reihe** — nach Kategorie filtern
4. **Notiz-Grid** — alle Notizen als Karten
5. **Empty State** — wenn noch nichts da ist

## Persistenz

- [x] localStorage
- [ ] fetch von einer API

## Skizze

```
┌────────────────────────────────────────┐
│  📝 QuickNotes    [🔍 suchen...]       │
├────────────────────────────────────────┤
│  [Titel...] [Text...]  [Idee ▼]  [+]  │
├────────────────────────────────────────┤
│  [Alle] [Idee] [Aufgabe] [Wichtig]     │
├────────────────────────────────────────┤
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │Titel1│ │Titel2│ │Titel3│            │
│  │Text..│ │Text..│ │Text..│            │
│  │[Idee]│ │[Auf.]│ │[Wich]│            │
│  │  🗑️  │ │  🗑️  │ │  🗑️  │            │
│  └──────┘ └──────┘ └──────┘            │
└────────────────────────────────────────┘
```

---

## Umsetzung — Schritte

### Setup (30 min)
- [ ] Projekt-Ordner + Git initialisieren
- [ ] index.html, style.css, script.js
- [ ] PLAN.md, README.md (Skelett)

### HTML (30 min)
- [ ] Header
- [ ] Formular (Titel + Text + Kategorie + Submit)
- [ ] Filter-Buttons
- [ ] Container für Notiz-Grid

### CSS Basics (1h)
- [ ] Farbschema wählen (evtl. Coolors.co)
- [ ] Typography
- [ ] Formular gestylt
- [ ] Karten-Layout mit CSS Grid

### JavaScript — Grundfunktionen (2h)
- [ ] DOM-Elemente holen
- [ ] `notizen`-Array als State
- [ ] `render()` Funktion
- [ ] `speichern()` / `laden()` mit localStorage
- [ ] Formular-Submit → neue Notiz
- [ ] Löschen mit Bestätigung

### JavaScript — Features (2h)
- [ ] Filter nach Kategorie
- [ ] Suche über Titel und Text
- [ ] Empty States

### Polituren (1h)
- [ ] Fokus-Management
- [ ] Enter-Taste
- [ ] Zeitstempel-Anzeige ("vor 5 Min", "gestern")
- [ ] Kleine Animationen

### Präsentation (1h)
- [ ] README.md fertig
- [ ] Screenshot
- [ ] Auf GitHub pushen
- [ ] GitHub Pages aktivieren

**Total: ~8 Stunden Arbeit → realistisch in 3-5 Tagen à 1-2h**

---

## Was ich NICHT einbaue (für dieses Projekt)

- Benutzer-Accounts (braucht Backend)
- Sync über Geräte (braucht Server)
- Ordner-Struktur (Kategorien reichen erstmal)
- Editor mit Formatierung (überkomplex)
- Bilder-Upload (later)

**Warum wichtig:** So bleibt der Scope klar und ich baue mich nicht in eine Ecke.

---

## Was passiert, wenn ich in der Zeit nicht fertig werde?

**Prioritäten von wichtig → weniger wichtig:**

1. Erstellen + Anzeigen + Löschen + localStorage — muss unbedingt
2. Kategorie + Suche — sehr wichtig
3. Empty State + Zeitstempel — nett
4. Polituren + Animationen — Bonus

Falls Zeitdruck: 1 fertig ist besser als 4 halb.
