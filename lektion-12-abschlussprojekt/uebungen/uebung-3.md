# Übung 3 (Phase 3) — Präsentation

**Dauer:** 2–4 Stunden
**Ergebnis:** Dein Projekt ist so präsentierbar, dass du es einem Chef/Prüfer zeigen kannst.

---

## Warum präsentieren wichtig ist

Ein Projekt, das **niemand versteht**, ist kein Projekt — es ist ein Ordner voller Dateien.

Als Applikationsentwickler wirst du **immer** deinen Code erklären müssen — im Team, in Reviews, in der Abschlussprüfung.

**Übung macht den Meister.**

---

## Schritt 1 — README.md schreiben

Die `README.md` ist das Aushängeschild deines Projekts. Wer's zuerst sieht: du selbst in 3 Monaten, Prüfer, potenzielle Arbeitgeber.

### Vorlage

```markdown
# 🚀 [PROJEKT-NAME]

[Ein Satz — was macht die App?]

![Screenshot](screenshot.png)

## Was kann die App?

- ✅ Feature 1
- ✅ Feature 2
- ✅ Feature 3

## Live Demo

[Link zur deployed Version — falls vorhanden]

Oder lokal starten:

1. Repo klonen: `git clone ...`
2. `index.html` in VS Code öffnen
3. Rechtsklick → "Open with Live Server"

## Warum ich das gebaut habe

[2-3 Sätze — welches Problem löst es? Was war die Idee?]

## Technisch

- HTML, CSS, JavaScript (Vanilla, kein Framework)
- localStorage für Persistenz
- [ggf.] API: [welche]

## Datenmodell

```javascript
{
    id: 1725184623456,
    ...
}
```

## Was ich gelernt habe

- [Konkret, was war neu?]

## Was ich als nächstes bauen würde

- [Idee 1]
- [Idee 2]

## Ordner-Struktur

```
projekt/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

**Gebaut von [Dein Name]** — August 2026
```

**Wichtig:** README **nicht dem Publisher-Copy-Paste-Modus** — schreib es persönlich, mit deinen Worten.

---

## Schritt 2 — Screenshot machen

Ein Bild sagt mehr als 1000 Zeilen Code.

**Wie:**
1. Deine App im Browser öffnen
2. Feature-reich befüllen (nicht leere Liste zeigen)
3. Screenshot machen (Shift+Cmd+4 auf Mac / Windows-Snipping-Tool)
4. In deinen Projekt-Ordner packen (`screenshot.png`)
5. In README einbinden mit `![Screenshot](screenshot.png)`

Bonus: **GIF** einer Interaktion (Tools: LICEcap, Kap, ScreenToGif)

---

## Schritt 3 — Auf GitHub pushen

Falls noch nicht getan:

```bash
cd mein-projekt
git init
git add .
git commit -m "Initial commit"
```

Auf GitHub.com:
1. Neues Repo erstellen (**public**, damit du's zeigen kannst)
2. **KEIN** README/gitignore auf GitHub anlegen (hast du schon lokal)
3. Anleitung von GitHub folgen:
   ```bash
   git remote add origin https://github.com/DEIN-USER/PROJEKT.git
   git branch -M main
   git push -u origin main
   ```

**Jetzt ist dein Projekt online sichtbar.** Link mit README ist deine Visitenkarte.

---

## Schritt 4 — Auf GitHub Pages veröffentlichen (Bonus)

Deine Seite als echte Website ins Internet:

1. Auf GitHub → dein Repo → **Settings**
2. **Pages** (linke Sidebar)
3. Source: **Deploy from a branch**
4. Branch: **main**, Folder: **/(root)**
5. Save
6. Warte 1-2 Min
7. Deine URL: `https://DEIN-USER.github.io/PROJEKT/`

**Kostenlos.** Echte URL. Kann jeder besuchen.

---

## Schritt 5 — Präsentation vorbereiten

Übe, dein Projekt in **2 Minuten** zu erklären:

**Struktur:**

1. **Was macht es?** (10 Sek)
2. **Warum hast du's gebaut?** (20 Sek)
3. **Live-Demo** (60 Sek — die wichtigsten Features vorführen)
4. **Was war schwierig?** (20 Sek)
5. **Was würdest du als nächstes bauen?** (10 Sek)

**Testfrage:** Kannst du das ohne Skript, mit Handy in der Hand, machen? Wenn ja → ready.

**Tipp:** Nimm's mit dem Handy auf und schau's dir an. Peinlich, aber effektiv.

---

## Anforderungen für Phase 3

- [ ] **README.md** existiert und ist aussagekräftig
- [ ] Mindestens **ein Screenshot** in der README
- [ ] Projekt ist auf **GitHub** (public repo)
- [ ] Du kannst dein Projekt in **2 Minuten** erklären
- [ ] Du hast das **einmal geübt** (nur du + Wand ist ok)

## Bonus

- [ ] Auf **GitHub Pages** deployed
- [ ] **Video-Demo** oder GIF in README
- [ ] Eine **Custom Domain** (5-15 CHF/Jahr)
- [ ] Projekt in deinem **LinkedIn/Portfolio** verlinkt

---

## Der wichtigste Rat

**Sei stolz.** Ein fertiges Projekt zu haben, ist ein Meilenstein. Egal wie klein — es ist **deins**.

Die meisten Leute reden nur über Ideen. Du hast eine **umgesetzt**. Das ist der Unterschied.

## Musterlösung

Ein Beispiel-README für ein fiktives Projekt findest du unter `loesungen/uebung-3/README-BEISPIEL.md`.

---

## Was jetzt?

Wenn Phase 3 fertig ist, hast du:
- Ein funktionierendes Projekt
- Auf GitHub sichtbar
- Präsentationsreif

**Herzliche Gratulation zum Abschluss des Kurses. 🎉**

Du bist jetzt kein Anfänger mehr. Du bist **Applikationsentwickler-Lehrling mit soliden Web-Grundlagen**.

Weiter geht's mit: Frameworks, Backend, Datenbanken, DevOps, ...

Aber das ist der nächste Kurs. Für jetzt: **feier den Erfolg**. 🥳
