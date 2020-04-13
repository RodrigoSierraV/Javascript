// ===  equality operator
// !==  no equal operator
//  <   less than operator
//  >   greater than operator
//  <=  less than or equal operator
//  >=  greater than or equal operator

let age = 39
let isChild = age <= 7
let isSenior = age >= 65

console.log('Age = ' + age,
            '\nIs child: ' + isChild,
            '\nIs senior: ' + isSenior)

// if statements

if (age <= 7) {
    console.log('You have a beautiful promo to buy TOYS!!!')
} else if (age >= 65) {
    console.log("You've got 30% off in fruits")
} else if (age === 39) {
    console.log('Hello Rodrigo')
} else {
    console.log('Welcome we have new things for you')
}

// And and  Or operators

let temp = 55

if (temp >= 60 && temp <= 90) {
    console.log('It is nice out there')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Do what you want')
}