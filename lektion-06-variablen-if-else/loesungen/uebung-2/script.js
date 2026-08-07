// Elemente
const buttons = document.querySelectorAll(".wahl");
const ergebnis = document.getElementById("ergebnis");
const siegeAnz = document.getElementById("siege");
const niederlagenAnz = document.getElementById("niederlagen");
const unentschiedenAnz = document.getElementById("unentschieden");
const btnReset = document.getElementById("btn-reset");

// State
let siege = 0;
let niederlagen = 0;
let unentschieden = 0;

// Was schlägt was? (Lookup-Objekt)
const schlaegt = {
    schere: "papier",
    stein: "schere",
    papier: "stein"
};

// Emoji-Zuordnung für die Ausgabe
const emojis = {
    schere: "✂️",
    stein: "🪨",
    papier: "📄"
};

// Button-Klicks
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const userWahl = btn.dataset.wahl;
        const optionen = ["schere", "stein", "papier"];
        const computerWahl = optionen[Math.floor(Math.random() * optionen.length)];

        let status;
        let text;

        if (userWahl === computerWahl) {
            status = "unentschieden";
            unentschieden = unentschieden + 1;
            text = "🤝 Unentschieden!";
        } else if (schlaegt[userWahl] === computerWahl) {
            status = "sieg";
            siege = siege + 1;
            text = "🎉 Du hast gewonnen!";
        } else {
            status = "niederlage";
            niederlagen = niederlagen + 1;
            text = "😢 Verloren.";
        }

        ergebnis.innerHTML = `
            <p><strong>${text}</strong></p>
            <p>Du: ${emojis[userWahl]} · Computer: ${emojis[computerWahl]}</p>
        `;
        ergebnis.className = "ergebnis " + status;

        siegeAnz.textContent = siege;
        niederlagenAnz.textContent = niederlagen;
        unentschiedenAnz.textContent = unentschieden;

        console.log(`${userWahl} vs ${computerWahl} → ${status}`);
    });
});

// Reset
btnReset.addEventListener("click", () => {
    siege = 0;
    niederlagen = 0;
    unentschieden = 0;
    siegeAnz.textContent = "0";
    niederlagenAnz.textContent = "0";
    unentschiedenAnz.textContent = "0";
    ergebnis.innerHTML = "<p>Statistik zurückgesetzt.</p>";
    ergebnis.className = "ergebnis";
});
