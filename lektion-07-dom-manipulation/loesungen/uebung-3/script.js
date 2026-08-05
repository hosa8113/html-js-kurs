const input = document.getElementById("eintrag-input");
const btnHinzu = document.getElementById("btn-hinzu");
const liste = document.getElementById("liste");
const status = document.getElementById("status");

function updateStatus() {
    const alle = liste.querySelectorAll("li");
    const erledigt = liste.querySelectorAll("li.erledigt");

    if (alle.length === 0) {
        status.textContent = "Noch nichts auf der Liste.";
    } else {
        status.textContent = `${erledigt.length} von ${alle.length} erledigt`;
    }
}

function neuerEintrag(text) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("erledigt");
        updateStatus();
    });

    const span = document.createElement("span");
    span.textContent = text;

    const loesch = document.createElement("button");
    loesch.textContent = "Löschen";
    loesch.className = "loesch";
    loesch.addEventListener("click", () => {
        li.remove();
        updateStatus();
    });

    li.append(checkbox, span, loesch);
    liste.append(li);
    updateStatus();
}

btnHinzu.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    neuerEintrag(text);
    input.value = "";
    input.focus();
});

// Enter-Taste
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnHinzu.click();
});
