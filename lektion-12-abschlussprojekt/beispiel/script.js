// ==========================================
// Habit Tracker — Beispiel-Abschlussprojekt
// ==========================================

const SPEICHER_KEY = "habit-tracker-v1";

// DOM
const form = document.getElementById("form");
const emojiInput = document.getElementById("emoji");
const nameInput = document.getElementById("name");
const habitsListe = document.getElementById("habits");
const heuteTitel = document.getElementById("heute-titel");
const statistikEl = document.getElementById("statistik");

// State
let habits = [];

// -----------------------------------------
// Helpers
// -----------------------------------------
function heuteKey() {
    // "2026-08-05" — pro Tag ein eindeutiger Key
    return new Date().toISOString().slice(0, 10);
}

function tagVor(anzahl) {
    const d = new Date();
    d.setDate(d.getDate() - anzahl);
    return d.toISOString().slice(0, 10);
}

function berechneStreak(habit) {
    let streak = 0;
    for (let i = 0; i < 365; i++) {
        if (habit.erledigt[tagVor(i)]) {
            streak++;
        } else {
            break;
        }
    }
    return streak;
}

// -----------------------------------------
// Storage
// -----------------------------------------
function speichern() {
    localStorage.setItem(SPEICHER_KEY, JSON.stringify(habits));
}

function laden() {
    habits = JSON.parse(localStorage.getItem(SPEICHER_KEY) || "[]");
}

// -----------------------------------------
// Rendering
// -----------------------------------------
function render() {
    habitsListe.innerHTML = "";

    if (habits.length === 0) {
        const empty = document.createElement("li");
        empty.className = "leer";
        empty.textContent = "Noch keine Gewohnheiten — leg oben los!";
        habitsListe.append(empty);
    } else {
        habits.forEach((h) => habitsListe.append(baueHabitElement(h)));
    }

    aktualisiereStatistik();
}

function baueHabitElement(habit) {
    const heute = heuteKey();
    const istErledigtHeute = !!habit.erledigt[heute];

    const li = document.createElement("li");
    li.className = "habit" + (istErledigtHeute ? " erledigt" : "");

    // Emoji
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = habit.emoji;

    // Info (Name + Streak)
    const info = document.createElement("div");
    const name = document.createElement("p");
    name.className = "name";
    name.textContent = habit.name;

    const streakZahl = berechneStreak(habit);
    const streak = document.createElement("p");
    streak.className = "streak";
    streak.textContent = streakZahl > 0
        ? `🔥 ${streakZahl} Tag${streakZahl === 1 ? "" : "e"} in Folge`
        : "Noch keine Serie";

    info.append(name, streak);

    // 7-Tage-Ansicht
    const woche = document.createElement("div");
    woche.className = "woche";
    for (let i = 6; i >= 0; i--) {
        const tagKey = tagVor(i);
        const tag = document.createElement("div");
        tag.className = "tag";
        if (habit.erledigt[tagKey]) tag.classList.add("erledigt");
        if (i === 0) tag.classList.add("heute");
        tag.textContent = new Date(tagKey).getDate();
        woche.append(tag);
    }

    // Check-Button
    const checkBtn = document.createElement("button");
    checkBtn.className = "check-btn" + (istErledigtHeute ? " erledigt" : "");
    checkBtn.textContent = istErledigtHeute ? "✓" : "○";
    checkBtn.title = istErledigtHeute ? "Rückgängig" : "Heute erledigt";
    checkBtn.addEventListener("click", () => toggleHeute(habit.id));

    // Löschen
    const loeschBtn = document.createElement("button");
    loeschBtn.className = "loesch-btn";
    loeschBtn.textContent = "🗑️";
    loeschBtn.title = "Gewohnheit löschen";
    loeschBtn.addEventListener("click", () => loescheHabit(habit.id));

    li.append(emoji, info, woche, checkBtn, loeschBtn);
    return li;
}

function aktualisiereStatistik() {
    const heute = new Date();
    const wochentag = heute.toLocaleDateString("de-CH", { weekday: "long" });
    const datum = heute.toLocaleDateString("de-CH", { day: "numeric", month: "long" });
    heuteTitel.textContent = `${wochentag}, ${datum}`;

    if (habits.length === 0) {
        statistikEl.textContent = "";
        return;
    }

    const heuteKeyStr = heuteKey();
    const erledigtHeute = habits.filter((h) => h.erledigt[heuteKeyStr]).length;
    statistikEl.textContent = `${erledigtHeute} von ${habits.length} heute erledigt`;
}

// -----------------------------------------
// Actions
// -----------------------------------------
function neuHabit(emoji, name) {
    habits.push({
        id: Date.now(),
        emoji: emoji,
        name: name,
        erledigt: {}  // { "2026-08-05": true, "2026-08-04": true }
    });
    speichern();
    render();
}

function toggleHeute(id) {
    const habit = habits.find((h) => h.id === id);
    if (!habit) return;
    const heute = heuteKey();
    if (habit.erledigt[heute]) {
        delete habit.erledigt[heute];
    } else {
        habit.erledigt[heute] = true;
    }
    speichern();
    render();
}

function loescheHabit(id) {
    if (!confirm("Gewohnheit wirklich löschen? Alle Streaks gehen verloren.")) return;
    habits = habits.filter((h) => h.id !== id);
    speichern();
    render();
}

// -----------------------------------------
// Events
// -----------------------------------------
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emoji = emojiInput.value.trim();
    const name = nameInput.value.trim();
    if (emoji === "" || name === "") return;

    neuHabit(emoji, name);
    form.reset();
    emojiInput.focus();
});

// Start
laden();
render();
