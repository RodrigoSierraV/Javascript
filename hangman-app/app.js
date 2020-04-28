const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessed = []
    this.status = 'Playing'
}

Hangman.prototype.puzzleBack = function () {
    let puzzle = ''
    if (this.remainingGuesses <= 0) {
        return puzzle
    }
    this.word.forEach((letter) => {
        if (this.guessed.includes(letter)) {
            puzzle += letter
        } else if (letter === ' ') {
            puzzle += ' '
        }else {
            puzzle += '*'
        }
    })
    if (!puzzle.includes('*')) {
        this.status = 'Finished'
    }
    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    
    if (this.guessed.includes(guess)) {
        return 'Enter a different letter'
    } else {
        this.guessed.push(guess)
        if (!this.word.includes(guess)) {
            this.remainingGuesses -= 1
        }
    }
}

Hangman.prototype.statusMessages = function () {
    if (this.remainingGuesses <= 0) {
        this.status = 'Failed'
        return 'NO remaining Guesses'
    } else if (this.status === 'Playing') {
        return `Remaining Guesses ${this.remainingGuesses}`
    } else if (this.status === 'Finished') {
        return 'Congratulations You WON!!!'
    }
}
