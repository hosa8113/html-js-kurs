const form = document.getElementById("form");
const fehlerBox = document.getElementById("fehler");
const erfolgBox = document.getElementById("erfolg");
const bio = document.getElementById("bio");
const bioCounter = document.getElementById("bio-counter");

// Live-Zeichen-Counter für Bio
bio.addEventListener("input", () => {
    bioCounter.textContent = bio.value.length;
});

function zeigeFehler(text) {
    fehlerBox.textContent = text;
    fehlerBox.hidden = false;
    erfolgBox.hidden = true;
}

function zeigeErfolg(text) {
    erfolgBox.textContent = text;
    erfolgBox.hidden = false;
    fehlerBox.hidden = true;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const username = data.get("username").trim();
    const email = data.get("email").trim();
    const pw = data.get("pw");
    const pw2 = data.get("pw2");
    const alter = Number(data.get("alter"));

    // Benutzerdefinierte Validierung

    if (pw !== pw2) {
        zeigeFehler("❌ Passwörter stimmen nicht überein!");
        document.getElementById("pw2").focus();
        return;
    }

    if (username.includes(" ")) {
        zeigeFehler("❌ Benutzername darf keine Leerzeichen enthalten.");
        return;
    }

    if (alter < 16) {
        zeigeFehler("❌ Du musst mindestens 16 Jahre alt sein.");
        return;
    }

    // Passwort-Stärke: mindestens eine Zahl UND ein Buchstabe
    const hatZahl = /[0-9]/.test(pw);
    const hatBuchstabe = /[a-zA-Z]/.test(pw);
    if (!hatZahl || !hatBuchstabe) {
        zeigeFehler("❌ Passwort muss Buchstaben UND Zahlen enthalten.");
        return;
    }

    // Alles okay!
    zeigeErfolg(`✅ Willkommen, ${username}! Konto wurde (fiktiv) erstellt.`);
    form.reset();
    bioCounter.textContent = "0";

    console.log("Registriert:", { username, email, alter });
});
