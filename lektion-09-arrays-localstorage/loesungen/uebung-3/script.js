const SPEICHER_KEY = "bookmarks-v1";
const THEME_KEY = "bookmark-theme";

const form = document.getElementById("form");
const titelInput = document.getElementById("titel");
const urlInput = document.getElementById("url");
const kategorieSelect = document.getElementById("kategorie");
const sucheInput = document.getElementById("suche");
const liste = document.getElementById("liste");
const stats = document.getElementById("stats");
const btnClear = document.getElementById("btn-clear");
const btnTheme = document.getElementById("btn-theme");

// State
let bookmarks = [];
let suche = "";

// -----------------------------------------
// Storage
// -----------------------------------------
function speichern() {
    localStorage.setItem(SPEICHER_KEY, JSON.stringify(bookmarks));
}

function laden() {
    bookmarks = JSON.parse(localStorage.getItem(SPEICHER_KEY) || "[]");
}

// -----------------------------------------
// Render
// -----------------------------------------
function render() {
    liste.innerHTML = "";

    // Suche anwenden (Titel ODER Kategorie enthält Suchbegriff)
    const gefiltert = bookmarks.filter((b) => {
        const term = suche.toLowerCase();
        return b.titel.toLowerCase().includes(term) ||
               b.kategorie.toLowerCase().includes(term);
    });

    if (gefiltert.length === 0) {
        const empty = document.createElement("li");
        empty.className = "leer";
        empty.textContent = bookmarks.length === 0
            ? "Noch keine Bookmarks — leg los!"
            : "Kein Treffer für die Suche.";
        liste.append(empty);
    } else {
        gefiltert.forEach((bm) => {
            const li = document.createElement("li");
            li.className = "bookmark";

            const titel = document.createElement("p");
            titel.className = "titel";
            titel.textContent = bm.titel;

            const url = document.createElement("a");
            url.className = "url";
            url.href = bm.url;
            url.target = "_blank";
            url.rel = "noopener";
            url.textContent = bm.url;

            const meta = document.createElement("div");
            meta.className = "meta";

            const badge = document.createElement("span");
            badge.className = "badge";
            badge.textContent = bm.kategorie;

            const loesch = document.createElement("button");
            loesch.className = "loesch";
            loesch.textContent = "🗑️";
            loesch.title = "Löschen";
            loesch.addEventListener("click", () => loescheBookmark(bm.id));

            meta.append(badge, loesch);
            li.append(titel, url, meta);
            liste.append(li);
        });
    }

    updateStats();
}

function updateStats() {
    const alle = bookmarks.length;
    if (alle === 0) {
        stats.textContent = "";
    } else {
        stats.textContent = `${alle} Bookmark${alle === 1 ? "" : "s"} gespeichert`;
    }
}

// -----------------------------------------
// Actions
// -----------------------------------------
function neuBookmark(titel, url, kategorie) {
    bookmarks.push({
        id: Date.now(),
        titel: titel,
        url: url,
        kategorie: kategorie
    });
    speichern();
    render();
}

function loescheBookmark(id) {
    bookmarks = bookmarks.filter((b) => b.id !== id);
    speichern();
    render();
}

// -----------------------------------------
// Theme
// -----------------------------------------
function themeAnwenden(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark");
        btnTheme.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        btnTheme.textContent = "🌙";
    }
}

btnTheme.addEventListener("click", () => {
    const neu = document.body.classList.contains("dark") ? "light" : "dark";
    themeAnwenden(neu);
    localStorage.setItem(THEME_KEY, neu);
});

// -----------------------------------------
// Events
// -----------------------------------------
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titel = titelInput.value.trim();
    const url = urlInput.value.trim();
    const kategorie = kategorieSelect.value;
    if (titel === "" || url === "") return;

    neuBookmark(titel, url, kategorie);
    form.reset();
    titelInput.focus();
});

sucheInput.addEventListener("input", () => {
    suche = sucheInput.value;
    render();
});

btnClear.addEventListener("click", () => {
    if (bookmarks.length === 0) return;
    if (!confirm("Alle Bookmarks wirklich löschen?")) return;
    bookmarks = [];
    speichern();
    render();
});

// -----------------------------------------
// Start
// -----------------------------------------
themeAnwenden(localStorage.getItem(THEME_KEY) || "light");
laden();
render();
