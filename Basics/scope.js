// Lexical scope (Static scope)
// Global scope - Defined outside of all code blocks
// Local scope - Defined inside a code block

// In a scope we can access variables defined in that scope
// or in any parent scope
let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
}

// Different scopes

let varThree = 'varThree'

if (true) {
    console.log(varThree)
    if (true) {
        let varThree = 'second varThree'
        console.log(varThree)
        if (true) {
            let varThree = 'third varThree'
            console.log(varThree)
        }
    }
}
console.log(varThree + '\n')

// Reassigning the value

let varFour = 'varFour'

if (true) {
    console.log(varFour)
    if (true) {
        varFour = 'second varFour'
        console.log(varFour)
        if (true) {
            varFour = 'third varFour'
            console.log(varFour)
        }
    }
}

console.log(varFour)

// Creating a global variable inside a scope

if (true) {

    if (true) {

        if (true) {
            varFive = 'varFive'
            console.log(varFive)
        }
    }
}

console.log(varFive)