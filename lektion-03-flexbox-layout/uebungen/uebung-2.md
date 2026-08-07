# Übung 2 — Card-Grid mit flex-wrap

**Schwierigkeit:** Mittel
**Zeit:** ca. 15 Minuten

## Aufgabe

Baue eine Seite mit **6 Karten** (Games, Filme, Skills — was du willst), die:

- Auf einem breiten Bildschirm **3 in einer Reihe** anzeigt
- Auf einem schmaleren Bildschirm **2 in einer Reihe** umbricht
- Auf einem Handy **1 pro Reihe** wird

## HTML-Struktur

```html
<main>
    <h1>Meine Top 6 Games</h1>
    <section class="grid">
        <article class="karte">
            <h2>Minecraft</h2>
            <p>Bauen, überleben, kreativ sein. Timeless.</p>
        </article>
        <article class="karte">
            <h2>The Witcher 3</h2>
            <p>Bester Storyteller im Gaming, Punkt.</p>
        </article>
        <!-- 4 weitere Karten -->
    </section>
</main>
```

## Anforderungen

- [ ] Container `.grid` ist ein Flexbox-Container mit **`flex-wrap: wrap`**
- [ ] Gap zwischen Karten: `20px`
- [ ] Jede Karte hat: weissen Hintergrund, Border-Radius `8px`, Padding `20px`, leichten Schatten
- [ ] Karten haben eine **flexible Breite**, nutzen aber `flex: 1 1 300px` oder ähnlich
- [ ] Bei Fenstergrösse < 900px: 2 pro Reihe (durch das Wrap-Verhalten automatisch)
- [ ] Bei Fenstergrösse < 500px: 1 pro Reihe

## Erklärung zu `flex: 1 1 300px`

Das ist die Kurzform von:

```css
flex-grow: 1;      /* darf wachsen */
flex-shrink: 1;    /* darf schrumpfen */
flex-basis: 300px; /* Basis-Breite */
```

Bedeutet: *"Sei ungefähr 300px breit — wachse in freien Platz rein, schrumpfe wenn's eng wird, aber unter 300px brichst du in die nächste Zeile um."*

## Testen

**Ändere die Browser-Breite** — DevTools → oben rechts das Handy-Icon (Toggle Device Toolbar) → wähle "Responsive" und zieh am Rand.

## Bonus

- Füge einen `:hover`-Effekt hinzu, der die Karte leicht hebt: `transform: translateY(-4px)`
- Nutze `box-shadow` für einen Schatten-Effekt
- Bau eine "Filter"-Zeile über dem Grid (nur HTML/CSS — Funktion kommt später mit JS)

## Häufige Fehler

- **`flex-wrap: wrap` vergessen** → alle Karten quetschen sich in eine Zeile
- **Feste `width` auf den Karten** → verhindert das flexible Verhalten
- **`gap` vergessen** → Karten kleben aneinander

Lösung: `loesungen/uebung-2/`
