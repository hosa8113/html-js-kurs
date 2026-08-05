// ==========================================
// Klick-Counter mit Verlauf — Lektion 7 Beispiel
// ==========================================

const counterEl = document.getElementById("counter");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnReset = document.getElementById("btn-reset");
const verlaufEl = document.getElementById("verlauf");

let counter = 0;

function updateAnzeige() {
    counterEl.textContent = counter;

    // Klassen setzen je nach Wert
    counterEl.classList.remove("positiv", "negativ");
    if (counter > 0) counterEl.classList.add("positiv");
    if (counter < 0) counterEl.classList.add("negativ");
}

function verlaufsEintrag(aktion, wert) {
    const li = document.createElement("li");

    const aktionSpan = document.createElement("span");
    aktionSpan.className = "aktion";
    aktionSpan.textContent = aktion;

    const wertSpan = document.createElement("span");
    wertSpan.className = "wert";
    wertSpan.textContent = wert;

    const zeitSpan = document.createElement("span");
    zeitSpan.className = "aktion";
    zeitSpan.textContent = new Date().toLocaleTimeString("de-CH");

    const loeschBtn = document.createElement("button");
    loeschBtn.textContent = "×";
    loeschBtn.addEventListener("click", () => li.remove());

    li.append(aktionSpan, wertSpan, zeitSpan, loeschBtn);
    verlaufEl.prepend(li);   // Neueste zuerst
}

btnPlus.addEventListener("click", () => {
    counter = counter + 1;
    updateAnzeige();
    verlaufsEintrag("+1 →", counter);
});

btnMinus.addEventListener("click", () => {
    counter = counter - 1;
    updateAnzeige();
    verlaufsEintrag("−1 →", counter);
});

btnReset.addEventListener("click", () => {
    counter = 0;
    updateAnzeige();
    verlaufEl.innerHTML = "";   // Verlauf leeren
    console.log("Reset");
});

updateAnzeige();
