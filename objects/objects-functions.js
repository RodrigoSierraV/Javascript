let fahrenheitToCelcius = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) / 1.8,
        kelvin: ((fahrenheit - 32) / 1.8) + 273.15
    }
}

console.log(fahrenheitToCelcius(74))

// Trial

let myAccount = {
    name: 'Rodrigo',
    expenses: 0,
    income: 0
}
console.log(myAccount)
let other = myAccount
other.debt = 10000
console.log(myAccount)
other = {
    otherProperty: 'new'
}
console.log(other, myAccount)
other.expenses = 444
console.log(other, myAccount)

// Challenge 
console.log('*****Challenge*****')
let addIncome = function (account, income) {
    account.income = account.income + income
}

let addExpense = function (account, expense) {
    account.expenses = account.expenses + expense
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} income. $${account.expenses} in expenses`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 70)
addExpense(myAccount, 30)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))