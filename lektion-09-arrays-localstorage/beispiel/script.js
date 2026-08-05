// ==========================================
// To-Do mit localStorage — Lektion 9 Beispiel
// ==========================================

const form = document.getElementById("form");
const input = document.getElementById("input");
const liste = document.getElementById("liste");
const status = document.getElementById("status");
const btnClear = document.getElementById("btn-clear");

const SPEICHER_KEY = "meine-tasks";

// State — die einzige Wahrheit
let tasks = [];

// -----------------------------------------
// Speicher-Funktionen
// -----------------------------------------
function speichern() {
    localStorage.setItem(SPEICHER_KEY, JSON.stringify(tasks));
}

function laden() {
    const roh = localStorage.getItem(SPEICHER_KEY);
    tasks = JSON.parse(roh || "[]");
}

// -----------------------------------------
// Render: State → DOM
// -----------------------------------------
function render() {
    liste.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        if (task.erledigt) li.classList.add("erledigt");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.erledigt;
        checkbox.addEventListener("change", () => {
            task.erledigt = checkbox.checked;
            speichern();
            render();
        });

        const textSpan = document.createElement("span");
        textSpan.className = "text";
        textSpan.textContent = task.text;

        const loesch = document.createElement("button");
        loesch.textContent = "Löschen";
        loesch.className = "loesch";
        loesch.addEventListener("click", () => {
            tasks = tasks.filter((t) => t.id !== task.id);
            speichern();
            render();
        });

        li.append(checkbox, textSpan, loesch);
        liste.append(li);
    });

    updateStatus();
}

function updateStatus() {
    const alle = tasks.length;
    const erledigt = tasks.filter((t) => t.erledigt).length;

    if (alle === 0) {
        status.textContent = "Keine Tasks.";
    } else {
        status.textContent = `${erledigt} von ${alle} erledigt`;
    }
}

// -----------------------------------------
// Actions
// -----------------------------------------
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") return;

    tasks.push({
        id: Date.now(),
        text: text,
        erledigt: false
    });

    speichern();
    render();

    input.value = "";
    input.focus();
});

btnClear.addEventListener("click", () => {
    if (tasks.length === 0) return;
    if (!confirm("Wirklich alle Tasks löschen?")) return;

    tasks = [];
    speichern();
    render();
});

// -----------------------------------------
// Start
// -----------------------------------------
laden();
render();
