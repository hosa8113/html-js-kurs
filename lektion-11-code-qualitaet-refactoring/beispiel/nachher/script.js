// Wetter-App — NACHHER (refactored)

const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WETTER_URL = "https://api.open-meteo.com/v1/forecast";

const WETTER_ICONS = {
    0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
    45: "🌫️", 48: "🌫️",
    61: "🌧️", 63: "🌧️", 65: "🌧️",
    71: "🌨️", 73: "🌨️", 75: "🌨️",
    95: "⛈️"
};

// DOM
const form = document.getElementById("such-form");
const ortInput = document.getElementById("ort-input");
const ergebnisBox = document.getElementById("ergebnis");

// -----------------------------------------
// API-Layer
// -----------------------------------------
async function findeOrt(name) {
    const url = `${GEOCODING_URL}?name=${encodeURIComponent(name)}&count=1&language=de`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Geocoding fehlgeschlagen");

    const daten = await response.json();
    if (!daten.results || daten.results.length === 0) {
        throw new Error(`Ort "${name}" nicht gefunden`);
    }
    return daten.results[0];
}

async function ladeAktuellesWetter(latitude, longitude) {
    const url = `${WETTER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Wetter-API fehlgeschlagen");

    const daten = await response.json();
    return daten.current_weather;
}

// -----------------------------------------
// UI-Layer
// -----------------------------------------
function zeigeLoading() {
    ergebnisBox.className = "ergebnis";
    ergebnisBox.textContent = "⏳ Lade Wetter...";
}

function zeigeFehler(nachricht) {
    ergebnisBox.className = "ergebnis fehler";
    ergebnisBox.textContent = `❌ ${nachricht}`;
}

function zeigeWetter(ort, wetter) {
    const icon = WETTER_ICONS[wetter.weathercode] || "❓";
    ergebnisBox.className = "ergebnis";
    ergebnisBox.innerHTML = `
        <h2>${icon} ${ort.name}, ${ort.country}</h2>
        <p>Temperatur: ${Math.round(wetter.temperature)}°C</p>
        <p>Wind: ${wetter.windspeed} km/h</p>
    `;
}

// -----------------------------------------
// Main-Flow
// -----------------------------------------
async function sucheWetter(ortName) {
    zeigeLoading();
    try {
        const ort = await findeOrt(ortName);
        const wetter = await ladeAktuellesWetter(ort.latitude, ort.longitude);
        zeigeWetter(ort, wetter);
    } catch (error) {
        zeigeFehler(error.message);
        console.error(error);
    }
}

// Events
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const ortName = ortInput.value.trim();
    if (ortName) sucheWetter(ortName);
});
