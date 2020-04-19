// Fetch existing Todos from localStorage
const getSavedTodos = function () {
    const todosLocal = localStorage.getItem('todos')

    if (todosLocal) {
        return JSON.parse(todosLocal)
    }
    return []
}

// Save todo
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = function (id) {
    const getIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (getIndex > -1) {
        todos.splice(getIndex, 1)
    }
}
// Get DOM elements for an individual Todo
const generateTodoDOM = function (todo) {
    const addDiv = document.createElement('div')
    // Create and append a checkbox
    const addCheckbox = document.createElement('input')
    addCheckbox.setAttribute('type', 'checkbox')    
    addCheckbox.checked = todo.completed
    addCheckbox.addEventListener('change', function (ev) {
        todo.completed = ev.target.checked
        todo.updatedAt = moment().valueOf()
        saveTodos(todos)
        rendertodos(todos, filters)
    })
    addDiv.appendChild(addCheckbox)
    // Create and append an anchor tag
    const anchorTag = document.createElement('a')
    anchorTag.textContent = todo.text
    anchorTag.setAttribute('href', `/edit-todo.html#${todo.id}`)
    addDiv.appendChild(anchorTag)
    // Create and append a button
    const removeButton = document.createElement('button')
    removeButton.textContent = 'x'
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        rendertodos(todos, filters)
    })
    addDiv.appendChild(removeButton)

    return addDiv
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

// Change span Last edited message in edit-todo
const changeLastEdited = function (timeStamp) {
    return `Last edited ${moment(timeStamp).fromNow()}`
}