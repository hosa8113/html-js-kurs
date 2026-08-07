// Elemente holen
const eingabe = document.getElementById("eingabe");
const btnRaten = document.getElementById("btn-raten");
const feedback = document.getElementById("feedback");
const versucheAnzeige = document.getElementById("versuche");

// State
const geheimeZahl = Math.floor(Math.random() * 100) + 1;
let versuche = 0;

console.log("Geheime Zahl (nur fürs Testen):", geheimeZahl);

btnRaten.addEventListener("click", () => {
    const geraten = Number(eingabe.value);
    versuche = versuche + 1;
    versucheAnzeige.textContent = versuche;

    if (geraten === geheimeZahl) {
        feedback.textContent = `🎉 Gewonnen in ${versuche} Versuchen!`;
        btnRaten.disabled = true;
    } else if (geraten < geheimeZahl) {
        feedback.textContent = "📈 Höher!";
    } else {
        feedback.textContent = "📉 Tiefer!";
    }

    eingabe.value = "";
    eingabe.focus();
});

// Enter-Taste als Bonus
eingabe.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnRaten.click();
});
