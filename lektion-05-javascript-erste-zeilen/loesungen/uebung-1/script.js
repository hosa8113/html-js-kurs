console.log("Script läuft!");

const button = document.getElementById("mein-button");
const text = document.getElementById("text");

button.addEventListener("click", () => {
    text.textContent = "🎉 Ich wurde gedrückt!";
    console.log("Button geklickt");
});
