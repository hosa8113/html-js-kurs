const KEY = "counter-wert";

const counterEl = document.getElementById("counter");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnReset = document.getElementById("btn-reset");

let counter = 0;

function speichern() {
    localStorage.setItem(KEY, counter);
}

function laden() {
    const gespeichert = localStorage.getItem(KEY);
    if (gespeichert !== null) {
        counter = Number(gespeichert);
    }
}

function render() {
    counterEl.textContent = counter;
}

btnPlus.addEventListener("click", () => {
    counter++;
    speichern();
    render();
});

btnMinus.addEventListener("click", () => {
    counter--;
    speichern();
    render();
});

btnReset.addEventListener("click", () => {
    counter = 0;
    localStorage.removeItem(KEY);
    render();
});

// Start
laden();
render();
