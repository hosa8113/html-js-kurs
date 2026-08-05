const ausgabe = document.getElementById("ausgabe");
const btnNeu = document.getElementById("btn-neu");

async function ladeWitz() {
    // 1. Loading-State
    ausgabe.className = "ausgabe laden";
    ausgabe.textContent = "⏳ Hole einen Witz...";
    btnNeu.disabled = true;

    try {
        // 2. Fetch
        const url = "https://v2.jokeapi.dev/joke/Programming?type=single&lang=de";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Antwort war nicht OK: " + response.status);
        }

        // 3. JSON parsen
        const daten = await response.json();

        // 4. Ergebnis anzeigen
        ausgabe.className = "ausgabe";
        ausgabe.textContent = daten.joke;

        console.log("Volle Antwort:", daten);

    } catch (error) {
        // 5. Fehler anzeigen
        ausgabe.className = "ausgabe fehler";
        ausgabe.textContent = "😢 Konnte keinen Witz laden. Versuch es nochmal.";
        console.error("Fetch-Fehler:", error);
    } finally {
        // 6. Button wieder aktivieren (immer, egal ob Erfolg/Fehler)
        btnNeu.disabled = false;
    }
}

btnNeu.addEventListener("click", ladeWitz);
