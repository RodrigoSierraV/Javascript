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

const filters = {
    serachText: '',
    hideCompleted: false
}

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

    const thingsToDo = document.createElement('h2')
    thingsToDo.textContent = `You have ${getThingsToDo.length} todos left`
    document.querySelector('#todos-group').appendChild(thingsToDo)

    filtered.forEach(function (todo) {
        const addToDo = document.createElement('p')
        addToDo.textContent = todo.text
        document.querySelector('#todos-group').appendChild(addToDo)
    })
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
    const txt = ev.target.elements.todoInput.value
    const newTodo = {
        text: txt,
        completed: false
    }
    ev.target.elements.todoInput.value = ''
    todos.push(newTodo)
    rendertodos(todos, filters)
})

//document.querySelector('#remove-all-todos').addEventListener('click', function (ev) {
//    const allP = document.querySelectorAll('p')
//    allP.forEach(function (p) {
//        p.remove()
//    })
//})

//document.querySelector('#add_todo').addEventListener('click', function(ev) {
//    console.log('Button is working, yeahhhh!!!')
//    ev.target.textContent = 'TODO added'
//})
//

//const getThingsToDo = function (todos) {
//    return todos.filter(function (todo) {
//        return todo.completed === false
//    })
//}

//const todoLeft = getThingsToDo(todos)

//const new_p = document.createElement('h2')
//
//new_p.textContent = `You have ${todoLeft.length} todos left`
//
//document.body.appendChild(new_p)

//todos.forEach(function (todo) {
//    const new_p = document.createElement('p')
//    new_p.textContent = todo.text
//    document.querySelector('#todos-group').appendChild(new_p)
//})

//const ps = document.querySelectorAll('p')
//
//ps.forEach(function (p) {
//    const txt = p.textContent.toLowerCase()
//    console.log(txt, txt.includes('th'))
//    if (txt.includes('th')) {
//        p.remove()
//    }    
//})