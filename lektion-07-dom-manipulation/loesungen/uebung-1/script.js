const counterEl = document.getElementById("counter");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnReset = document.getElementById("btn-reset");

let counter = 0;

function updateAnzeige() {
    counterEl.textContent = counter;

    counterEl.classList.remove("positiv", "negativ");
    if (counter > 0) counterEl.classList.add("positiv");
    if (counter < 0) counterEl.classList.add("negativ");

    console.log("Counter:", counter);
}

btnPlus.addEventListener("click", () => {
    counter = counter + 1;
    updateAnzeige();
});

btnMinus.addEventListener("click", () => {
    counter = counter - 1;
    updateAnzeige();
});

btnReset.addEventListener("click", () => {
    counter = 0;
    updateAnzeige();
});
