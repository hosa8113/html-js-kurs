// ==========================================
// To-Do-Liste — Live-Demo Lektion 8
// ==========================================

const form = document.getElementById("form");
const input = document.getElementById("input");
const liste = document.getElementById("liste");
const status = document.getElementById("status");
const filterButtons = document.querySelectorAll(".filter-btn");

let aktiverFilter = "alle";

function updateStatus() {
    const alle = liste.querySelectorAll("li").length;
    const offen = liste.querySelectorAll("li:not(.erledigt)").length;

    if (alle === 0) {
        status.textContent = "Noch nichts zu tun.";
    } else {
        status.textContent = `${offen} von ${alle} offen`;
    }
}

function filterAnwenden() {
    liste.querySelectorAll("li").forEach((li) => {
        const istErledigt = li.classList.contains("erledigt");
        let sichtbar;

        if (aktiverFilter === "alle") sichtbar = true;
        else if (aktiverFilter === "offen") sichtbar = !istErledigt;
        else if (aktiverFilter === "erledigt") sichtbar = istErledigt;

        li.classList.toggle("versteckt", !sichtbar);
    });
}

function neuerTask(text) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("erledigt", checkbox.checked);
        updateStatus();
        filterAnwenden();
    });

    const textSpan = document.createElement("span");
    textSpan.className = "text";
    textSpan.textContent = text;

    const loesch = document.createElement("button");
    loesch.textContent = "Löschen";
    loesch.className = "loesch";
    loesch.addEventListener("click", () => {
        li.remove();
        updateStatus();
    });

    li.append(checkbox, textSpan, loesch);
    liste.append(li);
    updateStatus();
    filterAnwenden();
}

// Form-Submit
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    neuerTask(text);
    input.value = "";
    input.focus();
});

// Filter-Buttons
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("aktiv"));
        btn.classList.add("aktiv");
        aktiverFilter = btn.dataset.filter;
        filterAnwenden();
    });
});

updateStatus();
