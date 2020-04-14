// undefined for variable
let name

if (name === undefined) {
    console.log('please provide a value')
} else {
    console.log(name)
}

// undefined for function arguments

let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// null as assigned value

let age = 39

age = null
console.log(age)
