// ==========================================
// Zahlenraten-Spiel — Live-Demo Lektion 6
// ==========================================

console.log("Spiel geladen.");

// DOM-Elemente holen
const eingabe = document.getElementById("eingabe");
const btnRaten = document.getElementById("btn-raten");
const btnNeu = document.getElementById("btn-neu");
const feedback = document.getElementById("feedback");
const versucheAnzeige = document.getElementById("versuche");

// Spiel-State (mit let, weil es sich ändert)
let geheimeZahl = 0;
let versuche = 0;
let gewonnen = false;

// Neues Spiel starten
function neuesSpiel() {
    geheimeZahl = Math.floor(Math.random() * 100) + 1;
    versuche = 0;
    gewonnen = false;

    feedback.textContent = "Los geht's! Rate eine Zahl zwischen 1 und 100.";
    feedback.className = "feedback";
    versucheAnzeige.textContent = "0";
    eingabe.value = "";
    eingabe.disabled = false;
    btnRaten.disabled = false;
    btnNeu.hidden = true;

    console.log("Neue geheime Zahl:", geheimeZahl);
}

// Beim Klick auf "Raten"
btnRaten.addEventListener("click", () => {
    const geraten = Number(eingabe.value);

    // Ungültige Eingabe abfangen
    if (isNaN(geraten) || geraten < 1 || geraten > 100) {
        feedback.textContent = "Bitte eine Zahl zwischen 1 und 100 eingeben!";
        feedback.className = "feedback fehler";
        return;
    }

    versuche = versuche + 1;
    versucheAnzeige.textContent = versuche;

    if (geraten === geheimeZahl) {
        feedback.textContent = `🎉 Gewonnen! Du hast ${versuche} Versuche gebraucht.`;
        feedback.className = "feedback richtig";
        gewonnen = true;
        eingabe.disabled = true;
        btnRaten.disabled = true;
        btnNeu.hidden = false;
    } else if (geraten < geheimeZahl) {
        feedback.textContent = "📈 Höher!";
        feedback.className = "feedback zu-tief";
    } else {
        feedback.textContent = "📉 Tiefer!";
        feedback.className = "feedback zu-hoch";
    }

    eingabe.value = "";
    eingabe.focus();
});

// Nochmal spielen
btnNeu.addEventListener("click", neuesSpiel);

// Enter-Taste löst auch Rate-Button aus
eingabe.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        btnRaten.click();
    }
});

// Spiel starten
neuesSpiel();
