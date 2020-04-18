const todos = getSavedTodos()

const filters = {
    serachText: '',
    hideCompleted: false
}

rendertodos(todos, filters)

document.querySelector('#add-filter').addEventListener('input', function (ev) {
    filters.serachText = ev.target.value
    rendertodos(todos, filters)
})

document.querySelector('#checkTodos').addEventListener('click', function (ev) {
    filters.hideCompleted = ev.target.checked
    rendertodos(todos, filters)
})

document.querySelector('#addToDo-form').addEventListener('submit', function (ev) {
    ev.preventDefault()
    const text = ev.target.elements.todoInput.value
    todos.push({
        id: uuidv4(),
        text: text,
        completed: false
    })
    saveTodos(todos)
    ev.target.elements.todoInput.value = ''
    rendertodos(todos, filters)
})
