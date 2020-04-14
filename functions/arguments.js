// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result, '\n')

// Default arguments
let getScore = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let first = getScore()
let second = getScore('Jhon', 32)
let third = getScore(undefined, 15)
let fourth = getScore('Doe', null)
let fifth = getScore(undefined, undefined)
console.log(first + '\n',second+'\n',third+'\n',fourth+'\n')

// Challenge

let tipCalc = function (bill = 0, tip = 0.2) {
    total = bill * (1 + tip)
    return total
}

console.log(tipCalc(100))
console.log(tipCalc(100, .3))
console.log('*******************')
// Trial

let trial = function (number) {
    newVariable = number ** 3
    return newVariable
}
console.log(trial(5))
console.log(newVariable)
console.log('*******************')

// Trial2
let rec = function (num) {
    if (num === 0) {
        return 1
    }
    console.log(num)
    return rec(num - 1) + 1
}
console.log(rec(8))