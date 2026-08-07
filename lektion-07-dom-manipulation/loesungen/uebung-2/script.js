const btnNeu = document.getElementById("btn-neu");
const btnClear = document.getElementById("btn-clear");
const container = document.getElementById("karten");

let counter = 0;

const zufallsfarben = ["#e0f2fe", "#fef3c7", "#dcfce7", "#fce7f3", "#e0e7ff"];

function neueKarte() {
    counter = counter + 1;

    const karte = document.createElement("div");
    karte.className = "karte";
    karte.style.backgroundColor = zufallsfarben[Math.floor(Math.random() * zufallsfarben.length)];

    const titel = document.createElement("h3");
    titel.textContent = "Karte #" + counter;

    const text = document.createElement("p");
    text.textContent = "Erstellt um " + new Date().toLocaleTimeString("de-CH");

    const loeschBtn = document.createElement("button");
    loeschBtn.textContent = "Löschen";
    loeschBtn.className = "loesch-btn";
    loeschBtn.addEventListener("click", () => {
        karte.remove();
        console.log("Karte", counter, "entfernt");
    });

    karte.append(titel, text, loeschBtn);
    container.append(karte);

    console.log("Karte", counter, "hinzugefügt");
}

btnNeu.addEventListener("click", neueKarte);

btnClear.addEventListener("click", () => {
    container.innerHTML = "";
    console.log("Alle Karten entfernt");
});
