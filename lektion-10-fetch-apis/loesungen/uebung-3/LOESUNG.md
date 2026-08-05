# Musterlösung — Übung 3

## Was hier gemacht wurde

Eine vollständige **Pokémon-Suche** mit:
- Name oder Zufalls-ID
- Bild, Namen, Nummer, Grösse, Gewicht
- Typen als farbige Badges (18 Typen mit passenden Farben)
- 3 Basis-Stats (HP, Attack, Defense)
- Loading-/Error-States
- Auto-Load bei Start

## Struktur der PokéAPI-Response

Die API liefert **richtig viel** Info. Die wichtigsten Felder:

```json
{
    "id": 25,
    "name": "pikachu",
    "height": 4,          // in Dezimetern!
    "weight": 60,         // in Hektogramm!
    "sprites": {
        "front_default": "https://.../25.png"
    },
    "types": [
        { "type": { "name": "electric" } }
    ],
    "stats": [
        { "stat": { "name": "hp" }, "base_stat": 35 },
        { "stat": { "name": "attack" }, "base_stat": 55 }
    ]
}
```

**Ungewöhnliche Units:**
- `height` in Dezimetern (÷10 für Meter, ×10 für Zentimeter)
- `weight` in Hektogramm (÷10 für Kilogramm)

Immer die API-Docs lesen (oder ausprobieren) → nicht blind Werte anzeigen.

## `.map()` und `.find()` zusammen

**Typen als Badges bauen:**
```javascript
const typenHTML = typen.map((t) => `<span class="typ typ-${t}">${t}</span>`).join("");
```

- `.map(...)` transformiert jedes Element
- `.join("")` klebt sie zu einem String zusammen

**Einzelne Stats finden:**
```javascript
const hp = daten.stats.find((s) => s.stat.name === "hp").base_stat;
```

- `.find(...)` sucht den ersten Treffer
- `.base_stat` ist das Feld daran

**Achtung**: Wenn `.find()` nichts findet, kommt `undefined` zurück und `.base_stat` würde crashen. Für einfache Fälle wo Feld garantiert existiert (wie hier) okay. Sicherer:
```javascript
const hp = daten.stats.find((s) => s.stat.name === "hp")?.base_stat ?? 0;
```

`?.` = Optional Chaining (kein Fehler bei undefined)
`?? 0` = Fallback wenn null/undefined

## 404 speziell behandeln

```javascript
if (response.status === 404) {
    throw new Error(`"${name}" wurde nicht gefunden.`);
}
```

Bessere UX als "API-Fehler: 404". PokéAPI liefert 404 wenn der Name unbekannt ist. Also **explizite Meldung**.

## CSS-Klassen dynamisch aus Daten

```javascript
`<span class="typ typ-${t}">${t}</span>`
```

**Der Trick**: `t` ist z.B. "electric" → Klasse `typ-electric` → CSS-Regel `.typ-electric { background-color: gelb; }` greift.

Wenn Pokémon 2 Typen hat (z.B. Bulbasaur = grass + poison) → beide Badges in ihren Farben.

**Skaliert:** Neuer Typ? Nur CSS-Regel dazu, kein JS-Change.

## `.toLowerCase().trim()` — Robustheit

```javascript
const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`;
```

User könnte tippen: `"Pikachu "`, `"PIKACHU"`, `" pikachu"`.
API akzeptiert nur `"pikachu"`.

Also **immer**:
- `.trim()` — Whitespace weg
- `.toLowerCase()` — kleinschreiben

Kleine Zeile, viel Frustration erspart.

## Der "Zufall"-Trick

```javascript
const zufallsId = Math.floor(Math.random() * 898) + 1;
```

PokéAPI akzeptiert **Namen oder ID**. Also einfach eine Zufalls-ID aus dem Bereich der ersten 898 Pokémon (Gen 1-8) generieren und laden.

## Was fehlt für ein "richtiges" Pokédex

- **Alle 898 Pokémon in einer Liste** — mit Suche/Filter (viel Daten holen und cachen)
- **Cries** — die Töne der Pokémon sind auch in der API
- **Evolutions-Kette** — welche entwickeln sich aus welchen
- **Moves** — welche Attacken das Pokémon kann
- **Vergleich** zwischen 2 Pokémon
- **Deutsche Namen** — braucht extra Endpoint `pokemon-species`

Alles möglich mit derselben API. Das hier ist der Einstieg.

## Häufige Fehler

- **Bild lädt nicht** → `daten.sprites.front_default` — Pfad kann bei manchen Pokémon `null` sein. Fallback nutzen.
- **Zwei Typen als ein String** → `.join(",")` würde "electric,fire" ergeben. Wir wollen zwei getrennte Badges.
- **`.toLowerCase()` vergessen** → "Pikachu" → 404
- **Try/catch nur um `fetch`** → aber `.json()` kann auch failen bei kaputtem JSON. Ganzen Block wrappen.

## Warum das ein guter Abschluss ist

Diese Übung vereint:
- **HTML** — semantische Struktur mit Form
- **CSS** — Themen-Farben, Grid für Stats, Typ-System
- **JS** — Events, Fetch, async/await, DOM-Manipulation
- **APIs** — echte externe Daten
- **Datenstrukturen** — Arrays, Objekte, verschachtelt

**Wenn du das gebaut hast, hast du im Wesentlichen den Kurs geschafft.** Nächste Lektionen sind Politur: Code sauber machen und die Abschluss-Präsentation.
