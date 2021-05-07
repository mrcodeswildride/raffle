let nameInput = document.getElementById(`nameInput`)
let submitButton = document.getElementById(`submitButton`)
let winnerButton = document.getElementById(`winnerButton`)
let namesParagraph = document.getElementById(`namesParagraph`)
let winnerParagraph = document.getElementById(`winnerParagraph`)

let names = []

submitButton.addEventListener(`click`, submit)
winnerButton.addEventListener(`click`, pickWinner)

nameInput.addEventListener(`keydown`, keyPressed)
nameInput.focus()

function submit() {
  let nameValue = nameInput.value.trim()

  if (nameValue != ``) {
    namesParagraph.innerHTML = `${namesParagraph.innerHTML} ${nameValue}`
    nameInput.value = ``

    names.push(nameValue)
  }

  nameInput.focus()
}

function pickWinner() {
  if (names.length == 0) {
    winnerParagraph.innerHTML = `Nobody was submitted.`
  } else {
    let randomNumber = Math.floor(Math.random() * names.length)
    winnerParagraph.innerHTML = `The winner is ${names[randomNumber]}.`
  }
}

function keyPressed(event) {
  if (event.keyCode == 13) {
    submit()
  }
}
