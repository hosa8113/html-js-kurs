const form = document.getElementById("form");
const input = document.getElementById("input");
const liste = document.getElementById("liste");
const status = document.getElementById("status");

function updateStatus() {
    const alle = liste.querySelectorAll("li").length;
    const erledigt = liste.querySelectorAll("li.erledigt").length;

    if (alle === 0) {
        status.textContent = "Keine Tasks.";
    } else {
        status.textContent = `${erledigt} von ${alle} erledigt`;
    }
}

function neuerTask(text) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("erledigt", checkbox.checked);
        updateStatus();
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
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    neuerTask(text);
    input.value = "";
    input.focus();
});
