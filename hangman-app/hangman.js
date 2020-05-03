let puzzle = document.querySelector('#puzzle')
let messages = document.querySelector('#messages')
let game

window.addEventListener('keypress', function (ev) {
    game.makeGuess(ev.key)
    renderGame()
})

const renderGame = () => {
    puzzle.textContent = game.puzzleBack()
    messages.textContent = game.statusMessages()
}

const startGame = async () => {
    const puzzle = await getPuzzleAsync()
    game = new Hangman(puzzle, 5)
    renderGame()
}

startGame()

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', startGame)

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

get_puzzle_promise('4').then((puzzle) => {
    console.log(puzzle)
}, (error) => {
    console.log(error)
})

const fetchPromise = fetch('http://puzzle.mead.io/puzzle').then((response) => {
    if (response.status === 200) {
        return response.json()
    }
    throw new Error
}).then((data) => {
    return data.puzzle
}).catch((error) => {
    return 'THERE was an error'
})

fetchPromise.then((puzzle) => {
    console.log('PUZZLE from fetch API:', puzzle)
})
