const SPEICHER_KEY = "tasks-v1";

const form = document.getElementById("form");
const input = document.getElementById("input");
const liste = document.getElementById("liste");
const status = document.getElementById("status");
const btnClear = document.getElementById("btn-clear");
const filterButtons = document.querySelectorAll(".filter-btn");

// State
let tasks = [];
let aktiverFilter = "alle";

// -----------------------------------------
// Storage
// -----------------------------------------
function speichern() {
    localStorage.setItem(SPEICHER_KEY, JSON.stringify(tasks));
}

function laden() {
    tasks = JSON.parse(localStorage.getItem(SPEICHER_KEY) || "[]");
}

// -----------------------------------------
// Render
// -----------------------------------------
function render() {
    liste.innerHTML = "";

    // Filter anwenden
    let sichtbar = tasks;
    if (aktiverFilter === "offen") sichtbar = tasks.filter((t) => !t.erledigt);
    if (aktiverFilter === "erledigt") sichtbar = tasks.filter((t) => t.erledigt);

    if (sichtbar.length === 0) {
        const empty = document.createElement("li");
        empty.className = "leer";
        empty.textContent = tasks.length === 0
            ? "Noch keine Tasks — fang an!"
            : "Keine Tasks in dieser Ansicht.";
        liste.append(empty);
    } else {
        sichtbar.forEach((task) => {
            const li = document.createElement("li");
            if (task.erledigt) li.classList.add("erledigt");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.erledigt;
            checkbox.addEventListener("change", () => toggleTask(task.id));

            const textSpan = document.createElement("span");
            textSpan.className = "text";
            textSpan.textContent = task.text;

            const loesch = document.createElement("button");
            loesch.textContent = "×";
            loesch.className = "loesch";
            loesch.addEventListener("click", () => loescheTask(task.id));

            li.append(checkbox, textSpan, loesch);
            liste.append(li);
        });
    }

    updateStatus();
}

function updateStatus() {
    const alle = tasks.length;
    const offen = tasks.filter((t) => !t.erledigt).length;

    if (alle === 0) {
        status.textContent = "Keine Tasks.";
    } else {
        status.textContent = `${offen} von ${alle} offen`;
    }
}

// -----------------------------------------
// Actions
// -----------------------------------------
function neuerTask(text) {
    tasks.push({
        id: Date.now(),
        text: text,
        erledigt: false
    });
    speichern();
    render();
}

function toggleTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.erledigt = !task.erledigt;
        speichern();
        render();
    }
}

function loescheTask(id) {
    tasks = tasks.filter((t) => t.id !== id);
    speichern();
    render();
}

// -----------------------------------------
// Events
// -----------------------------------------
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") return;
    neuerTask(text);
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

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("aktiv"));
        btn.classList.add("aktiv");
        aktiverFilter = btn.dataset.filter;
        render();
    });
});

// -----------------------------------------
// Start
// -----------------------------------------
laden();
render();
