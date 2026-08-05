const frageInput = document.getElementById("frage");
const btnFragen = document.getElementById("btn-fragen");
const antwortBox = document.getElementById("antwort");
const counterAnzeige = document.getElementById("counter");

// Antworten in 3 Kategorien
const antworten = {
    positiv: [
        "Absolut ja!",
        "Zeichen stehen sehr gut.",
        "Du kannst dich drauf verlassen.",
        "Ja, definitiv.",
        "Ohne Zweifel."
    ],
    neutral: [
        "Frag nochmal.",
        "Konzentrier dich und frag nochmal.",
        "Kann ich jetzt nicht sagen.",
        "Antwort ist unklar."
    ],
    negativ: [
        "Nein.",
        "Meine Quellen sagen nein.",
        "Sehr zweifelhaft.",
        "Aussichten nicht so gut.",
        "Zähl nicht drauf."
    ]
};

let anzahlFragen = 0;

btnFragen.addEventListener("click", () => {
    const frage = frageInput.value.trim();

    // Leere Frage abfangen
    if (frage === "") {
        antwortBox.innerHTML = "<p class='platzhalter'>Stell zuerst eine Frage!</p>";
        antwortBox.className = "antwort";
        return;
    }

    // Kategorie zufällig wählen
    const zufall = Math.random();
    let kategorie;

    if (zufall < 0.4) {
        kategorie = "positiv";
    } else if (zufall < 0.7) {
        kategorie = "negativ";
    } else {
        kategorie = "neutral";
    }

    // Antwort aus der Kategorie
    const optionen = antworten[kategorie];
    const antwort = optionen[Math.floor(Math.random() * optionen.length)];

    antwortBox.textContent = antwort;
    antwortBox.className = "antwort " + kategorie;

    anzahlFragen = anzahlFragen + 1;
    counterAnzeige.textContent = anzahlFragen;

    console.log(`Frage: "${frage}" → ${kategorie}: ${antwort}`);

    frageInput.value = "";
    frageInput.focus();
});

// Enter-Taste
frageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnFragen.click();
});
