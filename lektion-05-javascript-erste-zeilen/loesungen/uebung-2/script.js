console.log("Button-Party gestartet!");

const ausgabe = document.getElementById("ausgabe");

const btnFarbe = document.getElementById("btn-farbe");
const btnZufall = document.getElementById("btn-zufall");
const btnEmoji = document.getElementById("btn-emoji");
const btnCounter = document.getElementById("btn-counter");
const btnReset = document.getElementById("btn-reset");

// Standardfarbe merken, damit Reset funktioniert
const startFarbe = document.body.style.backgroundColor;

// -----------------------------------------
// Button: Hintergrundfarbe wechseln
// -----------------------------------------
const farben = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c"];

btnFarbe.addEventListener("click", () => {
    const zufall = farben[Math.floor(Math.random() * farben.length)];
    document.body.style.backgroundColor = zufall;
    ausgabe.textContent = "Neue Farbe: " + zufall;
    console.log("Farbe gewechselt zu", zufall);
});

// -----------------------------------------
// Button: Zufallszahl
// -----------------------------------------
btnZufall.addEventListener("click", () => {
    const zahl = Math.floor(Math.random() * 100) + 1;
    ausgabe.textContent = "🎲 Deine Zahl: " + zahl;
    console.log("Zufallszahl:", zahl);
});

// -----------------------------------------
// Button: Zufalls-Emoji
// -----------------------------------------
const emojis = ["😀", "🤖", "🚀", "🎮", "🌈", "🍕", "⚡", "🔥", "🌊", "🎸"];

btnEmoji.addEventListener("click", () => {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    ausgabe.textContent = emoji;
    console.log("Emoji:", emoji);
});

// -----------------------------------------
// Button: Klick-Counter (braucht let!)
// -----------------------------------------
let klicks = 0;

btnCounter.addEventListener("click", () => {
    klicks = klicks + 1;
    ausgabe.textContent = "Du hast " + klicks + "× geklickt";
    console.log("Klicks:", klicks);
});

// -----------------------------------------
// Button: Reset
// -----------------------------------------
btnReset.addEventListener("click", () => {
    document.body.style.backgroundColor = startFarbe;
    ausgabe.textContent = "Alles zurückgesetzt.";
    klicks = 0;
    console.log("Reset");
});
