const hang2 = new Hangman('New Jersey', 4)
console.log(hang2.status)

let puzzle = document.querySelector('#puzzle')
puzzle.textContent = hang2.puzzleBack()

let messages = document.querySelector('#messages')
messages.textContent = hang2.statusMessages()

window.addEventListener('keypress', function (ev) {
    hang2.makeGuess(ev.key)
    puzzle.textContent = hang2.puzzleBack()
    messages.textContent = hang2.statusMessages()
    console.log(hang2.status)
})

get_puzzle((error, phrase) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log('Puzzle1', phrase)
    }
})
console.log('Do something while request is done')

const puzzle2 = get_puzzleSync()
console.log('Puzzle2', puzzle2)
console.log('Do NOTHING until request is done')
