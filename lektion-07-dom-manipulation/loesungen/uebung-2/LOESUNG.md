# Musterlösung — Übung 2

## Was hier gemacht wurde

Ein Karten-Board mit:
- Neue Karten dynamisch hinzufügen (mit Nummerierung, Zeitstempel, zufälliger Farbe)
- Karten einzeln löschen
- Alle auf einmal löschen
- Kleine CSS-Einfliegen-Animation

## Der Kern-Trick: Element in Funktion bauen

Statt für jede neue Karte den Bau-Code duplizieren zu müssen, ist `neueKarte()` **eine Funktion**, die man beliebig oft aufruft.

Das ist genau das Muster, das später Frameworks wie React zu **Komponenten** abstrahieren:

```jsx
function Karte({ nummer }) {
    return (
        <div className="karte">
            <h3>Karte #{nummer}</h3>
            ...
        </div>
    );
}
```

Vanilla-JS-Version davon = genau das, was du grad gebaut hast.

## Warum jeder Karte ihren **eigenen** Löschen-Button?

Der Trick liegt in **Closures**:

```javascript
function neueKarte() {
    const karte = document.createElement("div");
    // ...

    const loeschBtn = document.createElement("button");
    loeschBtn.addEventListener("click", () => {
        karte.remove();   // ← weiss, welche "karte" gemeint ist!
    });
}
```

Bei jedem Aufruf von `neueKarte()` wird eine **neue** `karte`-Variable erzeugt. Der Listener "erinnert sich" an genau diese `karte` — auch nachdem die Funktion längst durch ist. Das nennt man **Closure**.

**Für Anfänger:** Nicht verwirren lassen — es "funktioniert einfach". In fortgeschrittenen Lektionen wird's tiefer erklärt.

## Zufällige Hintergrundfarbe

```javascript
karte.style.backgroundColor = zufallsfarben[Math.floor(...)];
```

**`.style.backgroundColor`** setzt einen **Inline-Style** direkt aufs Element. Kann von externem CSS überschrieben werden (Spezifität), aber für dynamische Werte wie hier perfekt.

**Wichtig:** CSS-Eigenschaft in **camelCase**, nicht kebab-case!
- CSS: `background-color`
- JS: `.style.backgroundColor`

Weitere:
- CSS `font-size` → JS `.style.fontSize`
- CSS `border-radius` → JS `.style.borderRadius`

## `container.innerHTML = ""` — alle Kinder löschen

Der schnellste Weg, alle Kinder-Elemente eines Containers zu entfernen.

**Alternative** (sauberer, aber länger):
```javascript
while (container.firstChild) {
    container.firstChild.remove();
}
```

Beide funktionieren. `innerHTML = ""` reicht für die meisten Fälle.

**Wichtig:** Wenn die Kinder eigene Event-Listener haben, wird durch `innerHTML = ""` alles zerstört — Speicher wird freigegeben. Für Sonderfälle mit vielen Listenern ist das die Loop-Variante besser.

## Die CSS-Animation

```css
@keyframes einfliegen {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
}

.karte {
    animation: einfliegen 0.25s ease-out;
}
```

Jede neue Karte "fliegt" leicht rein — kleine UX-Verbesserung, riesiger Wow-Effekt.

**Was passiert:**
- `@keyframes einfliegen` definiert Start- und Endzustand
- `animation: einfliegen 0.25s` sagt: "Wende die Animation an, dauert 0.25s"
- Läuft **automatisch**, wenn das Element ins DOM kommt

## Warum das exemplarisch für Web-Apps ist

**Konzept:** Der User macht was → State ändert sich → UI wird neu aufgebaut → alter State wird ggf. entfernt.

Egal ob:
- Karten hinzufügen (hier)
- To-Do-Einträge (Lektion 8)
- Warenkorb-Items
- Chat-Nachrichten

Das Muster ist immer dasselbe. Genau **die Grundlage** dessen, was React, Vue & Co. dann automatisieren.

## Häufige Fehler

- **`neueKarte` als Funktion aufgerufen mit `()` beim Zuweisen** → `btn.addEventListener("click", neueKarte())` läuft **sofort einmal** statt beim Klick. Korrekt: `neueKarte` **ohne** `()`
- **`karte.append(titel, text, loeschBtn)` in falscher Reihenfolge** → einfach im HTML-Sinne die Reihenfolge, in der die Elemente erscheinen
- **`counter` als `const`** → `TypeError`
