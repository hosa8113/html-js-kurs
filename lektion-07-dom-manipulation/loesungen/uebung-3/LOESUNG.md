# Musterlösung — Übung 3

## Was hier gemacht wurde

Eine funktionierende Einkaufsliste mit:
- Eintrag hinzufügen (Input + Button + Enter-Taste)
- Erledigt-Checkbox pro Eintrag
- Löschen-Button pro Eintrag
- Live-Zähler: "X von Y erledigt"
- Empty-State ("Noch nichts auf der Liste.")

## Warum ist das schon fast eine To-Do-App?

Weil es exakt die 4 CRUD-Operationen abbildet:

- **Create** → neuer Eintrag hinzufügen
- **Read** → Liste anzeigen
- **Update** → Erledigt-Status togglen
- **Delete** → Eintrag löschen

Was fehlt für eine "echte" To-Do-App? Nur **Persistenz** (`localStorage` — Lektion 9). Der Rest ist Kür.

## `updateStatus()` — der "Redraw"-Pattern

```javascript
function updateStatus() {
    const alle = liste.querySelectorAll("li");
    const erledigt = liste.querySelectorAll("li.erledigt");
    // ...
}
```

Statt einen Zähler manuell zu incrementieren, **liest** die Funktion jedes Mal die aktuelle Realität aus dem DOM aus. Vorteil: kann nie inkonsistent werden.

**Nachteil bei sehr grossen Listen** (1000+ Einträge): jedes Mal alles zählen ist verschwendet. Für kleine Listen (bis paar hundert) völlig egal.

Framework-Alternative: State-basiertes Rendering, aber das ist Lektion "Frameworks" in einem späteren Kurs.

## Input-Handling — die 3 wichtigen Dinge

```javascript
const text = input.value.trim();   // 1. Whitespace weg
if (text === "") return;           // 2. Leere abfangen
input.value = "";                  // 3. Feld leeren
input.focus();                     // 4. Fokus zurück
```

Alle 4 sind wichtig für gute UX. Fehlt einer, fühlt sich die App "billig" an.

## Die "einfacher"-Alternative mit `innerHTML`

Man **könnte** den Eintrag auch so bauen:

```javascript
liste.innerHTML += `
    <li>
        <input type="checkbox" onchange="this.parentElement.classList.toggle('erledigt')">
        <span>${text}</span>
        <button class="loesch" onclick="this.parentElement.remove()">Löschen</button>
    </li>
`;
```

**Warum wir das NICHT machen:**

1. **XSS-Gefahr:** Wenn `text` `<script>` enthält, wird es ausgeführt
2. **Alle Event-Listener bestehender Einträge werden zerstört**, wenn `innerHTML += ...` läuft
3. **`updateStatus()` funktioniert nicht mehr**, weil `onchange`/`onclick` nicht darauf zugreifen

Der `createElement`-Weg ist länger, aber **korrekt**.

## Der Enter-Taste-Trick

```javascript
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnHinzu.click();
});
```

`btnHinzu.click()` **löst programmatisch** den Klick aus. Der bereits gebundene Listener wird ausgeführt.

Alternative: Formular-Element (`<form>`) mit `submit`-Event → kommt in Lektion 8 offiziell.

## Was du mit dieser Übung erreicht hast

Du hast **alle Basics moderner Frontend-Entwicklung** in einer kleinen App vereint:

- **User Input** validieren und verarbeiten
- **Dynamisches Rendering** (Elemente bauen, einfügen)
- **State pro Element** (erledigt-Klasse)
- **Aggregierter State** (Zähler)
- **UX-Details** (Fokus, leeres Input, Enter-Taste)
- **Empty-State-Handling** (was zeigen, wenn Liste leer?)

Damit hast du die **Grundlage** für alles, was in Lektion 8 (Formulare) und 9 (localStorage) dazukommt. Und für jedes Framework, das später kommt.
