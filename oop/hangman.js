const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessed = []
}

Hangman.prototype.puzzleBack = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessed.includes(letter)) {
            puzzle += letter
        } else if (letter === ' ') {
            puzzle += ' '
        }else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    if (guess.length > 1) {
        console.log('It must be a single letter')
    } else if (this.guessed.includes(guess)) {
        console.log('Enter a new letter')
    } else {
        this.guessed.push(guess)
        if (!this.word.includes(guess)) {
            this.remainingGuesses -= 1
        }
        console.log(this.puzzleBack(), this.remainingGuesses)
    }
    if (this.remainingGuesses === 0) {
        console.log('NO remaining Guesses')
    }
}
const hang1 = new Hangman('sofa', 2)
const hang2 = new Hangman('New Jersey', 4)

hang2.makeGuess('a')
hang2.makeGuess('f')
hang2.makeGuess('hg')
hang2.makeGuess('o')
hang2.makeGuess('k')

