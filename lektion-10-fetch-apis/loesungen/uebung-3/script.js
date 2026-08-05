const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const ergebnis = document.getElementById("ergebnis");
const btnSuchen = form.querySelector("button[type='submit']");
const btnZufall = document.getElementById("btn-zufall");

async function ladePokemon(name) {
    ergebnis.className = "ergebnis laden";
    ergebnis.textContent = "⏳ Suche " + name + "...";
    btnSuchen.disabled = true;
    btnZufall.disabled = true;

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`;
        const response = await fetch(url);

        if (response.status === 404) {
            throw new Error(`"${name}" wurde nicht gefunden.`);
        }
        if (!response.ok) {
            throw new Error("API-Fehler: " + response.status);
        }

        const daten = await response.json();
        anzeigen(daten);

    } catch (error) {
        ergebnis.className = "ergebnis fehler";
        ergebnis.textContent = "❌ " + error.message;
        console.error(error);
    } finally {
        btnSuchen.disabled = false;
        btnZufall.disabled = false;
    }
}

function anzeigen(daten) {
    ergebnis.className = "ergebnis";

    const typen = daten.types.map((t) => t.type.name);
    const typenHTML = typen.map((t) => `<span class="typ typ-${t}">${t}</span>`).join("");

    const hp = daten.stats.find((s) => s.stat.name === "hp").base_stat;
    const attack = daten.stats.find((s) => s.stat.name === "attack").base_stat;
    const defense = daten.stats.find((s) => s.stat.name === "defense").base_stat;

    ergebnis.innerHTML = `
        <img class="pokemon-bild" src="${daten.sprites.front_default}" alt="${daten.name}">
        <h2 class="pokemon-name">${daten.name}</h2>
        <p class="pokemon-id">#${daten.id} · ${daten.height * 10} cm · ${daten.weight / 10} kg</p>
        <div class="typen">${typenHTML}</div>
        <div class="stats">
            <div class="stat">
                <div class="label">HP</div>
                <div class="wert">${hp}</div>
            </div>
            <div class="stat">
                <div class="label">Attack</div>
                <div class="wert">${attack}</div>
            </div>
            <div class="stat">
                <div class="label">Defense</div>
                <div class="wert">${defense}</div>
            </div>
        </div>
    `;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    if (name === "") return;
    ladePokemon(name);
});

btnZufall.addEventListener("click", () => {
    // Zufällige ID zwischen 1 und 898 (Gen 1-8)
    const zufallsId = Math.floor(Math.random() * 898) + 1;
    nameInput.value = zufallsId;
    ladePokemon(String(zufallsId));
});

// Beim Start Pikachu laden
ladePokemon("pikachu");
