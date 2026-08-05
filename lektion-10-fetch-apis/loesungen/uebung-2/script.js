const form = document.getElementById("form");
const ortInput = document.getElementById("ort");
const ergebnis = document.getElementById("ergebnis");
const btn = form.querySelector("button");

const wetterIcons = {
    0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
    45: "🌫️", 48: "🌫️",
    51: "🌦️", 53: "🌦️", 55: "🌦️",
    61: "🌧️", 63: "🌧️", 65: "🌧️",
    71: "🌨️", 73: "🌨️", 75: "🌨️",
    80: "🌦️", 81: "🌧️", 82: "🌧️",
    95: "⛈️", 96: "⛈️", 99: "⛈️"
};

async function ladeWetter(ort) {
    ergebnis.className = "ergebnis laden";
    ergebnis.textContent = "⏳ Lade Wetter...";
    btn.disabled = true;

    try {
        // 1. Ort → Koordinaten
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ort)}&count=1&language=de`;
        const geoResponse = await fetch(geoUrl);
        if (!geoResponse.ok) throw new Error("Geocoding fehlgeschlagen");

        const geoDaten = await geoResponse.json();
        if (!geoDaten.results || geoDaten.results.length === 0) {
            throw new Error("Ort nicht gefunden");
        }

        const { latitude, longitude, name, country } = geoDaten.results[0];

        // 2. Wetter für die Koordinaten
        const wetterUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const wetterResponse = await fetch(wetterUrl);
        if (!wetterResponse.ok) throw new Error("Wetter-API fehlgeschlagen");

        const wetterDaten = await wetterResponse.json();
        const { temperature, windspeed, weathercode } = wetterDaten.current_weather;

        // 3. Anzeigen
        const icon = wetterIcons[weathercode] || "❓";

        ergebnis.className = "ergebnis";
        ergebnis.innerHTML = `
            <p class="icon">${icon}</p>
            <p class="temp">${Math.round(temperature)}°C</p>
            <p class="ort">${name}</p>
            <p class="land">${country}</p>
            <div class="details">
                <div class="detail">
                    <div class="label">Wind</div>
                    <div class="wert">${windspeed} km/h</div>
                </div>
                <div class="detail">
                    <div class="label">Code</div>
                    <div class="wert">${weathercode}</div>
                </div>
            </div>
        `;

        console.log("Wetter geladen für", name);

    } catch (error) {
        ergebnis.className = "ergebnis fehler";
        ergebnis.textContent = `❌ ${error.message}`;
        console.error("Fehler:", error);
    } finally {
        btn.disabled = false;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const ort = ortInput.value.trim();
    if (ort === "") return;
    ladeWetter(ort);
});

// Beim Start direkt für Standardwert laden
ladeWetter(ortInput.value);
