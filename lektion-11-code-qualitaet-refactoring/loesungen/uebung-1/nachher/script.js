// Counter mit LocalStorage — NACHHER

const SPEICHER_KEY = "counter-wert";
const MIN = -999;
const MAX = 999;

// DOM
const anzeige = document.getElementById("anzeige");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnReset = document.getElementById("btn-reset");

// State
let counter = laden();

// -----------------------------------------
// Storage
// -----------------------------------------
function speichern() {
    localStorage.setItem(SPEICHER_KEY, counter);
}

function laden() {
    return Number(localStorage.getItem(SPEICHER_KEY) ?? 0);
}

function loescheAusSpeicher() {
    localStorage.removeItem(SPEICHER_KEY);
}

// -----------------------------------------
// Rendering
// -----------------------------------------
function render() {
    anzeige.textContent = counter;
    anzeige.classList.remove("positiv", "negativ");
    if (counter > 0) anzeige.classList.add("positiv");
    if (counter < 0) anzeige.classList.add("negativ");
}

// -----------------------------------------
// Actions
// -----------------------------------------
function aendere(delta) {
    counter = Math.max(MIN, Math.min(MAX, counter + delta));
    speichern();
    render();
}

function reset() {
    counter = 0;
    loescheAusSpeicher();
    render();
}

// -----------------------------------------
// Events
// -----------------------------------------
btnPlus.addEventListener("click", () => aendere(1));
btnMinus.addEventListener("click", () => aendere(-1));
btnReset.addEventListener("click", reset);

// Start
render();
