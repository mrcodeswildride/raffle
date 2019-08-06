var nameInput = document.getElementById("name");
var submitButton = document.getElementById("submit");
var pickWinnerButton = document.getElementById("pickWinner");
var namesDisplay = document.getElementById("names");
var winnerDisplay = document.getElementById("winner");

var names = [];

submitButton.addEventListener("click", submit);
pickWinnerButton.addEventListener("click", pickWinner);

function submit() {
    var nameValue = nameInput.value.trim();

    if (nameValue.length > 0) {
        names.push(nameValue);

        if (names.length > 1) {
            namesDisplay.innerHTML = namesDisplay.innerHTML + ",";
        }

        namesDisplay.innerHTML = namesDisplay.innerHTML + " " + nameValue;
        nameInput.value = "";
    }
}

function pickWinner() {
    if (names.length == 0) {
        winnerDisplay.innerHTML = "Nobody was submitted.";
    }
    else {
        var randomNumber = Math.floor(Math.random() * names.length);
        winnerDisplay.innerHTML = "The winner is " + names[randomNumber] + ".";
    }
}
