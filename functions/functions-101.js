let greetUser = function () {
    console.log('Welcome user')
}

greetUser()

let square = function (num = 0) {
    return num ** 2
}

let value = square(4)
let newValue = square(10)
console.log(value, newValue, '\n')

let fahrenheitToCelcius = function (fahrenheit) {
    return (fahrenheit - 32) / 1.8
}

let first = fahrenheitToCelcius(32)
let second = fahrenheitToCelcius(68)

console.log(first, second)