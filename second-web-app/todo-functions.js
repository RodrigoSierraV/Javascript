// Fetch existing Todos from localStorage
const getSavedTodos = function () {
    const todosLocal = localStorage.getItem('todos')

    if (todosLocal) {
        return JSON.parse(todosLocal)
    }
    return []
}

// Save todo
const saveTodos = function (todos, text) {
    todos.push({
        text: text,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Get DOM elements for an individual Todo
const generateTodoDOM = function (todo) {
    const addToDo = document.createElement('p')
    addToDo.textContent = todo.text
    return addToDo
}

// Creates new h2 with things Todo
const generateSummaryDOM = function (getThingsToDo) {
    const thingsToDo = document.createElement('h2')
    thingsToDo.textContent = `You have ${getThingsToDo.length} todos left`
    return thingsToDo
}
// Render todos
const rendertodos = function (todos, filters) {
    const filtered = todos.filter(function (todo) {
        if (filters.hideCompleted) {
            return todo.completed === false && todo.text.toLowerCase().includes(filters.serachText.toLowerCase())
        }
        return todo.text.toLowerCase().includes(filters.serachText.toLowerCase())
    })
    const getThingsToDo = filtered.filter(function (todo) {
            return todo.completed === false
    })
    
    document.querySelector('#todos-group').innerHTML = ''
    document.querySelector('#todos-group').appendChild(generateSummaryDOM(getThingsToDo))

    filtered.forEach(function (todo) {
        document.querySelector('#todos-group').appendChild(generateTodoDOM(todo))
    })
}