// To-Do — NACHHER (refactored auf State-Pattern)

const SPEICHER_KEY = "todo-items-v2";

// DOM
const form = document.getElementById("form");
const input = document.getElementById("input");
const liste = document.getElementById("liste");
const status = document.getElementById("status");

// State
let tasks = [];

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
// Rendering
// -----------------------------------------
function render() {
    liste.innerHTML = "";
    tasks.forEach((task) => liste.append(baueTaskElement(task)));
    aktualisiereStatus();
}

function baueTaskElement(task) {
    const li = document.createElement("li");
    if (task.erledigt) li.classList.add("erledigt");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.erledigt;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const textSpan = document.createElement("span");
    textSpan.className = "text";
    textSpan.textContent = task.text;

    const loeschBtn = document.createElement("button");
    loeschBtn.className = "loesch";
    loeschBtn.textContent = "×";
    loeschBtn.addEventListener("click", () => loescheTask(task.id));

    li.append(checkbox, textSpan, loeschBtn);
    return li;
}

function aktualisiereStatus() {
    if (tasks.length === 0) {
        status.textContent = "Keine Tasks.";
        return;
    }
    const offen = tasks.filter((t) => !t.erledigt).length;
    status.textContent = `${offen} offen von ${tasks.length}`;
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

// Start
laden();
render();
