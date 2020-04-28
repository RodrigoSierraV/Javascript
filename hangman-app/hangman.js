const hang2 = new Hangman('New Jersey', 4)
console.log(hang2.status)

let puzzle = document.querySelector('#puzzle')
puzzle.textContent = hang2.puzzleBack()

//let guessesLeft = document.querySelector('#guesses')
//guessesLeft.textContent = `Remaining Guesses ${hang2.remainingGuesses}`

let messages = document.querySelector('#messages')
messages.textContent = hang2.statusMessages()
window.addEventListener('keypress', function (ev) {
    hang2.makeGuess(ev.key)
    puzzle.textContent = hang2.puzzleBack()
    messages.textContent = hang2.statusMessages()
    console.log(hang2.status)
})

