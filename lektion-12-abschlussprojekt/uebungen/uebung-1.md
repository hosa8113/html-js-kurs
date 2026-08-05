# Übung 1 (Phase 1) — Planung

**Dauer:** 1–2 Stunden
**Ergebnis:** Ein klarer Plan, bevor du die erste Zeile Code tippst.

---

## Warum planen?

Ohne Plan passiert eins von zwei Dingen:

1. **Zu ambitioniert** — du fängst mit einem "Twitter-Klon" an und gibst nach 3 Tagen auf
2. **Zu klein/langweilig** — du baust in 2 Stunden was und weisst nicht, was noch machen

**Mit Plan:** klare Ziele, klare Grenzen, klarer Fortschritt.

---

## Schritt 1 — Idee finden

Wähle **eine** dieser Optionen:

**A. Eigene Idee**
- Was nervt dich im Alltag, das eine App lösen könnte?
- Was macht dir Spass, das man in Software abbilden könnte?
- Was hast du schon 100× im Kopf durchgespielt?

**B. Von der Liste im README wählen**
- Schau dir die 15 Ideen an
- Wähl eine aus, die du **realistisch** in deiner Zeit schaffst

**C. Klassiker mit Twist**
- Nimm einen Klassiker (To-Do, Wetter, Notizen) und **mach ihn spezifisch**:
  - To-Do → Rezept-To-Do für Kochen
  - Wetter → Ski-Wetter mit Schneehöhe
  - Notizen → Voice-Memos mit Web Speech API

**Meine Empfehlung:** Klassiker mit Twist. Sicher machbar, aber trotzdem "deins".

---

## Schritt 2 — Spec schreiben

Erstell in deinem Projekt-Ordner eine `PLAN.md` mit folgendem:

### Vorlage

```markdown
# Mein Abschlussprojekt: [NAME]

## Was macht die App?
[2-3 Sätze — wer nutzt sie, wofür]

## Zielgruppe
[wer ist der User?]

## Wichtigste Features (MVP — Minimum Viable Product)
- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3

## Nice-to-have Features (später)
- [ ] Feature X
- [ ] Feature Y

## Datenmodell
Ein "Item" (Task, Buch, Bookmark, ...) sieht so aus:
```javascript
{
    id: ...,
    ...
}
```

## Screens / Ansichten
1. Startseite: [beschreiben]
2. Detail-Ansicht: [beschreiben]
3. ...

## Persistenz
[ ] localStorage
[ ] fetch von einer API — welche?
[ ] beides

## Skizze
[Zeichne auf Papier / iPad / Figma, wie die App aussehen soll]
```

---

## Schritt 3 — Aufteilen in kleine Schritte

Zerbrich dein MVP in **konkrete Aufgaben**. Beispiel für einen Bookmark-Manager:

```markdown
## Umsetzung — Schritte

### Setup
- [ ] index.html mit Grundgerüst
- [ ] style.css minimal
- [ ] script.js leer

### HTML
- [ ] Header mit Titel
- [ ] Formular (Titel + URL + Kategorie)
- [ ] Container für Bookmark-Liste

### CSS Basics
- [ ] Farbschema wählen
- [ ] Typography
- [ ] Formular gestylt
- [ ] Bookmark-Karten Layout

### JS Basics
- [ ] DOM-Elemente holen
- [ ] Formular-Submit abfangen
- [ ] Bookmark ins Array pushen
- [ ] Liste rendern

### State-Pattern
- [ ] `render()` Funktion
- [ ] `speichern()` / `laden()` mit localStorage
- [ ] `neuBookmark()`, `loescheBookmark()`

### Features
- [ ] Suche
- [ ] Kategorien-Filter
- [ ] Dark Mode

### Polituren
- [ ] Empty State
- [ ] Bestätigung vor Löschen
- [ ] Fokus-Management
- [ ] README
```

**Ziel:** Jede Aufgabe ist so klein, dass du sie in **30 Minuten oder weniger** erledigen kannst.

---

## Anforderungen für Phase 1

- [ ] Idee ist gewählt und aufgeschrieben
- [ ] `PLAN.md` existiert
- [ ] MVP-Features sind klar (3-5 Features max)
- [ ] Datenmodell ist skizziert
- [ ] Umsetzungs-Schritte sind aufgeschrieben
- [ ] Grobe UI-Skizze existiert

## Zeit-Check

**Realistische Einschätzung:** Wenn ich denke, das Projekt dauert **X Tage**, dann rechne ich mit **2X Tagen**.

Wenn dein Plan mehr als deine geplante Zeit ergibt → **kürzen**. Lieber MVP + nice-to-have als halbes Grosses.

---

## Musterlösung

`loesungen/uebung-1/` enthält einen kompletten **PLAN.md** als Beispiel — für eine Notiz-App mit Kategorien und Suche.
