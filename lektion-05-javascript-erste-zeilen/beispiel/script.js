// ==========================================
// Erste JavaScript-Datei — Live-Demo aus Lektion 5
// ==========================================

console.log("Script läuft!");

// Elemente aus dem HTML holen
const titel = document.getElementById("titel");
const ausgabe = document.getElementById("ausgabe");

const btnTitel = document.getElementById("btn-titel");
const btnZeit = document.getElementById("btn-zeit");
const btnModus = document.getElementById("btn-modus");

// Button 1 — Titel ändern
btnTitel.addEventListener("click", () => {
    titel.textContent = "🎉 Der Titel hat sich geändert!";
    console.log("Titel wurde geändert");
});

// Button 2 — Aktuelle Uhrzeit anzeigen
btnZeit.addEventListener("click", () => {
    const jetzt = new Date();
    const zeit = jetzt.toLocaleTimeString("de-CH");
    ausgabe.textContent = "Jetzt ist es " + zeit;
    console.log("Zeit angezeigt:", zeit);
});

// Button 3 — Dark Mode toggeln
btnModus.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    console.log("Dark Mode getoggelt");
});
