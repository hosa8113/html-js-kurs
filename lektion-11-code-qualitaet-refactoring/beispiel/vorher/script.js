// Wetter-App — VORHER (absichtlich chaotisch)

document.getElementById("b").addEventListener("click", async () => {
    // Loading
    document.getElementById("d").innerHTML = "Lade...";

    try {
        // Ort holen
        let x = document.getElementById("in").value;

        // Erst geocoding
        let r = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + x + "&count=1&language=de");
        let j = await r.json();

        if (!j.results) {
            document.getElementById("d").innerHTML = "Fehler!";
            return;
        }

        let lat = j.results[0].latitude;
        let lon = j.results[0].longitude;
        let n = j.results[0].name;
        let c = j.results[0].country;

        // Dann wetter
        let r2 = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true");
        let j2 = await r2.json();
        let t = j2.current_weather.temperature;
        let w = j2.current_weather.windspeed;
        let code = j2.current_weather.weathercode;

        // Icon bestimmen
        let icon = "❓";
        if (code == 0) icon = "☀️";
        if (code == 1) icon = "🌤️";
        if (code == 2) icon = "⛅";
        if (code == 3) icon = "☁️";
        if (code == 45) icon = "🌫️";
        if (code == 61) icon = "🌧️";
        if (code == 71) icon = "🌨️";
        if (code == 95) icon = "⛈️";

        // Anzeigen
        document.getElementById("d").innerHTML = "<h2>" + icon + " " + n + ", " + c + "</h2><p>Temperatur: " + t + "°C</p><p>Wind: " + w + " km/h</p>";

        // Loggen
        console.log("Wetter geladen fuer " + n + ": " + t + "°C, " + w + " km/h");

    } catch (e) {
        // Fehler
        document.getElementById("d").innerHTML = "Fehler!";
        console.log(e);
    }
});
