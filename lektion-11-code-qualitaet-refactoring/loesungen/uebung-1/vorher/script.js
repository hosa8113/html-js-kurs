// Counter mit LocalStorage — VORHER

// zahl laden
var x = localStorage.getItem("c");
if (x == null) x = 0;
x = Number(x);

// anzeigen
document.getElementById("p").innerHTML = x;

// plus button
document.getElementById("a").addEventListener("click", function() {
    // erhoehen
    x = x + 1;
    // limit check
    if (x > 999) x = 999;
    // in dom
    document.getElementById("p").innerHTML = x;
    // farbe
    if (x > 0) document.getElementById("p").style.color = "green";
    else if (x < 0) document.getElementById("p").style.color = "red";
    else document.getElementById("p").style.color = "black";
    // speichern
    localStorage.setItem("c", x);
});

// minus button
document.getElementById("b").addEventListener("click", function() {
    // verringern
    x = x - 1;
    // limit check
    if (x < -999) x = -999;
    // in dom
    document.getElementById("p").innerHTML = x;
    // farbe
    if (x > 0) document.getElementById("p").style.color = "green";
    else if (x < 0) document.getElementById("p").style.color = "red";
    else document.getElementById("p").style.color = "black";
    // speichern
    localStorage.setItem("c", x);
});

// reset button
document.getElementById("c").addEventListener("click", function() {
    // auf 0
    x = 0;
    // in dom
    document.getElementById("p").innerHTML = x;
    // farbe
    document.getElementById("p").style.color = "black";
    // aus storage
    localStorage.removeItem("c");
});
