const form = document.getElementById("form");
const liste = document.getElementById("liste");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // FormData — sammelt alle Felder auf einmal
    const data = new FormData(form);
    const text = data.get("text").trim();
    const prio = data.get("prio");
    const kategorie = data.get("kategorie");

    if (text === "") return;

    neuerTask(text, prio, kategorie);

    form.reset();
    document.getElementById("text").focus();
});

function neuerTask(text, prio, kategorie) {
    const li = document.createElement("li");
    li.classList.add("prio-" + prio);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("erledigt", checkbox.checked);
    });

    const textSpan = document.createElement("span");
    textSpan.className = "text";
    textSpan.textContent = text;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = kategorie;

    const loesch = document.createElement("button");
    loesch.textContent = "×";
    loesch.className = "loesch";
    loesch.addEventListener("click", () => li.remove());

    li.append(checkbox, textSpan, badge, loesch);
    liste.append(li);

    console.log("Task:", { text, prio, kategorie });
}
