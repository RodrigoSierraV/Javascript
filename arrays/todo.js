//const todos = ['todo1', 'todo2', 'todo3', 'todo4', 'todo5']
//
//console.log(todos[0])
//console.log(todos[todos.length -2])
//console.log(todos.slice(-3, -1))
//
//// add and delete items
//
//console.log(todos)
//console.log(todos.push('todo6'))
//console.log(todos)
//console.log(todos.pop())
//console.log(todos)
//console.log(todos.shift())
//console.log(todos)
//console.log(todos.unshift('todo7'))
//console.log(todos)
//console.log('***SPLICE***')
//console.log(todos.splice(2, 1))
//console.log(todos)
//console.log(todos.splice(0, 2))
//console.log(todos)
//console.log(todos.splice(1, 0, 'todo8'))
//console.log(todos)
//console.log(todos.splice(2, 0, 'todo9', 'todo10'))
//console.log(todos)
//
//console.log('****for loop***')
//
//for (let count = 0; count < todos.length; count++) {
//    console.log(`${count+1}. ${todos[count]}`)
//}

const todos = [{
    text: 'buy groceries',
    completed: false
}, {
    text: 'wash dishes',
    completed: true
}, {
    text:'wash clothes',
    completed: false
}, {
    text: 'study english',
    completed: true
}]

//const deleteTodo = function (todos, toDelete) {
//    const index = todos.findIndex(function (todo, index) {
//        return todo.text.toLowerCase() === toDelete.toLowerCase()
//    })
//    console.log(index)
//    if (index > -1) {
//        todos.splice(index, 1)
//    }
//}
//
//deleteTodo(todos, 'WasH   Dishes')
//console.log(todos)

//const getThingsToDo = function (todos) {
//    return todos.filter(function (todo) {
//        return todo.completed === false
//    })
//}
//
//console.log(getThingsToDo(todos))

//const sortTodos = function (todos) {
//    todos.sort(function (a, b) {
//        if (!a.completed && b.completed) {
//            return -1
//        } else if (a.completed && !b.completed) {
//            return 1
//        } else {
//            return 0
//        }
//    })
//}
//sortTodos(todos)
//console.log(todos)

const account = {
    name: 'Rodrgo',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        const expense = {
            description: description,
            amount: amount
        }
        this.expenses.push(expense)
    },
    addIncome: function (description, amount) {
        const income = {
            description: description,
            amount: amount
        }
        this.income.push(income)
    },
    getAccounSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        const balance = totalIncome - totalExpenses
        return `${this.name} has ${totalIncome} income, and ${totalExpenses} expenses, for a balance of ${balance}`
    }
}

account.addExpense('rent', 950)
account.addExpense('beers', 100)
console.log(account.getAccounSummary())
account.addIncome('sell antibacterial gel', 800)
account.addIncome('web page', 1500)
console.log(account.getAccounSummary())



