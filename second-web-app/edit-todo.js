const todoId = location.hash.substring(1)
let todos = getSavedTodos()
let todo = todos.find(function (td) {
    return todoId === td.id
})

if (!todo) {
    location.assign('/index.html')
}

let inputTitle = document.querySelector('#input-title')
inputTitle.value = todo.text
inputTitle.addEventListener('input', function (ev) {
    todo.text = ev.target.value
    saveTodos(todos)
})

let bodyText = document.querySelector('#body-text')
bodyText.value = todo.body
bodyText.addEventListener('input', function (ev) {
    todo.body = ev.target.value
    saveTodos(todos)
})

const removeButton = document.querySelector('#remove-button')
removeButton.addEventListener('click', function () {
    removeTodo(todoId)
    saveTodos(todos)
    location.assign('/index.html')
})

window.addEventListener('storage', function (ev) {
    if (ev.key === 'todos') {
        todos = JSON.parse(ev.newValue)
        todo = todos.find(function (td) {
            return todoId === td.id
        })
        if (!todo) {
            location.assign('/index.html')
        }
        inputTitle.value = todo.text
        bodyText.value = todo.body
    }
})