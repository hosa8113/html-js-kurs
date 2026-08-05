// Todo — VORHER (absichtlich schlecht)

// Beim start laden
var d = localStorage.getItem("todo-items");
if (d) {
    var items = JSON.parse(d);
    // Alle items ins DOM
    for (var i = 0; i < items.length; i++) {
        document.getElementById("l").innerHTML +=
            '<li class="' + (items[i].e ? 'done' : '') + '">' +
            '<input type="checkbox" ' + (items[i].e ? 'checked' : '') + ' onchange="tog(' + i + ')">' +
            '<span>' + items[i].t + '</span>' +
            '<button onclick="del(' + i + ')">X</button>' +
            '</li>';
    }
    // Status
    document.getElementById("s").innerHTML = items.filter(function(x) { return !x.e; }).length + " offen von " + items.length;
} else {
    items = [];
    document.getElementById("s").innerHTML = "Keine Tasks";
}

// Add Button
document.getElementById("b").addEventListener("click", function() {
    var t = document.getElementById("i").value;
    // Check leer
    if (t == "" || t == null) return;
    // Hinzufügen
    items.push({ t: t, e: false });
    // Speichern
    localStorage.setItem("todo-items", JSON.stringify(items));
    // Neu ins DOM
    document.getElementById("l").innerHTML = "";
    for (var i = 0; i < items.length; i++) {
        document.getElementById("l").innerHTML +=
            '<li class="' + (items[i].e ? 'done' : '') + '">' +
            '<input type="checkbox" ' + (items[i].e ? 'checked' : '') + ' onchange="tog(' + i + ')">' +
            '<span>' + items[i].t + '</span>' +
            '<button onclick="del(' + i + ')">X</button>' +
            '</li>';
    }
    // Status
    document.getElementById("s").innerHTML = items.filter(function(x) { return !x.e; }).length + " offen von " + items.length;
    // Input leeren
    document.getElementById("i").value = "";
});

// Toggle
function tog(i) {
    items[i].e = !items[i].e;
    localStorage.setItem("todo-items", JSON.stringify(items));
    // Neu ins DOM
    document.getElementById("l").innerHTML = "";
    for (var j = 0; j < items.length; j++) {
        document.getElementById("l").innerHTML +=
            '<li class="' + (items[j].e ? 'done' : '') + '">' +
            '<input type="checkbox" ' + (items[j].e ? 'checked' : '') + ' onchange="tog(' + j + ')">' +
            '<span>' + items[j].t + '</span>' +
            '<button onclick="del(' + j + ')">X</button>' +
            '</li>';
    }
    document.getElementById("s").innerHTML = items.filter(function(x) { return !x.e; }).length + " offen von " + items.length;
}

// Delete
function del(i) {
    items.splice(i, 1);
    localStorage.setItem("todo-items", JSON.stringify(items));
    document.getElementById("l").innerHTML = "";
    for (var j = 0; j < items.length; j++) {
        document.getElementById("l").innerHTML +=
            '<li class="' + (items[j].e ? 'done' : '') + '">' +
            '<input type="checkbox" ' + (items[j].e ? 'checked' : '') + ' onchange="tog(' + j + ')">' +
            '<span>' + items[j].t + '</span>' +
            '<button onclick="del(' + j + ')">X</button>' +
            '</li>';
    }
    if (items.length == 0) {
        document.getElementById("s").innerHTML = "Keine Tasks";
    } else {
        document.getElementById("s").innerHTML = items.filter(function(x) { return !x.e; }).length + " offen von " + items.length;
    }
}
