var previus = 0;
var points = 0;
var repetition = null;

function startGame(){
    repetition =  setInterval("changeBackground()", 1500);
    setTimeout("stopGame()", 50000);
   }

function stopGame(){
    clearInterval(repetition);
    points = 0;
}

function changeBackground() {
    var tds = document.querySelectorAll(".gameboard td");
    if (tds.length === 0) return; // Check for null or empty NodeList

    var randomNumber = Math.random();
    var index = Math.floor(randomNumber * tds.length);

    var what = Math.random();
    var className = "dark-vador";

    if (what < 0.30) {
        var classes = ["cerise", "orange-juice", "pain", "pizza", "steak"];
        className = classes[Math.floor(Math.random() * classes.length)];
    }

    if (previus < tds.length) {
        tds[previus].className = "";
    }

    if (index < tds.length) {
        tds[index].className = className;
    }

    previus = index;
}

function check(td) {
    if (!td) {
        console.error("td is null", td);
        return;
    }

    if (typeof td.className !== "string") {
        console.error("td.className is not a string", td.className);
        return;
    }

    try {
        if (td.className === "cerise" || td.className === "orange-juice" || td.className === "pain" || td.className === "pizza" || td.className === "steak") {
            points++;
        } else {
            points--;
        }
        showPoints();
    } catch (e) {
        console.error("Error in check function", e);
    }
}

function showPoints() {
    try {
        const pointsElement = document.getElementById("points");
        if (pointsElement) {
            pointsElement.innerHTML = points;
        } else {
            console.error("showPoints: points element is null");
        }
    } catch (e) {
        console.error("showPoints: error", e);
    }
}
