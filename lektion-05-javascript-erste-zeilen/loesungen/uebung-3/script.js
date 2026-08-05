console.log("Mood Tracker gestartet.");

const ergebnis = document.getElementById("ergebnis");
const buttons = document.querySelectorAll(".stimmung");

// Nachrichten pro Stimmung
const texte = {
    glücklich: "Du fühlst dich super — nutz den Tag!",
    neutral:   "Alles chill, einfach am Tag entlang.",
    traurig:   "Schwerer Tag? Nimm dir was Nettes vor.",
    müde:      "Zeit für Kaffee. Oder Nickerchen.",
    wütend:    "Tief einatmen. Bisschen Musik hilft.",
    mega:      "Auf Feuer! Weiter so 🔥"
};

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const stimmung = btn.dataset.stimmung;
        const emoji = btn.textContent;
        const zeit = new Date().toLocaleTimeString("de-CH");
        const text = texte[stimmung];

        // Ergebnis-Box füllen
        ergebnis.innerHTML = `
            <p class="emoji">${emoji}</p>
            <p class="text">${text}</p>
            <p class="zeit">Notiert um ${zeit}</p>
        `;

        // Body-Farbe anpassen — erst alte Klasse weg, dann neue
        document.body.className = "";
        document.body.classList.add("stimmung-" + stimmung);

        console.log("Stimmung:", stimmung, "um", zeit);
    });
});
