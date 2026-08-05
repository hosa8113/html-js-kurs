const rat = document.getElementById("rat");
const ratId = document.getElementById("rat-id");
const btn = document.getElementById("btn");

async function ladeRatschlag() {
    rat.textContent = "⏳ Lade Weisheit...";
    ratId.textContent = "";
    btn.disabled = true;

    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) throw new Error("Status " + response.status);

        const daten = await response.json();

        rat.textContent = `"${daten.slip.advice}"`;
        ratId.textContent = `— Ratschlag #${daten.slip.id}`;

        console.log("Antwort:", daten);

    } catch (error) {
        rat.textContent = "❌ Konnte keinen Ratschlag laden.";
        console.error("Fehler:", error);
    } finally {
        btn.disabled = false;
    }
}

btn.addEventListener("click", ladeRatschlag);
