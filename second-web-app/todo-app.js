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

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return todo.completed === false
    })
}

const todoLeft = getThingsToDo(todos)

const new_p = document.createElement('h2')

new_p.textContent = `You have ${todoLeft.length} todos left:`

document.body.appendChild(new_p)

todos.forEach(function (todo) {
    const new_p = document.createElement('p')
    new_p.textContent = todo.text
    document.body.appendChild(new_p)
})

document.querySelector('#add_todo').addEventListener('click', function(ev) {
    console.log('Button is working, yeahhhh!!!')
    ev.target.textContent = 'TODO added'
})

document.querySelector('#remove-all-todos').addEventListener('click', function (ev) {
    const allP = document.querySelectorAll('p')
    allP.forEach(function (p) {
        p.remove()
    })
})

document.querySelector('#add-input').addEventListener('input', function (ev) {
    console.log(ev.target.value)
})

//const ps = document.querySelectorAll('p')
//
//ps.forEach(function (p) {
//    const txt = p.textContent.toLowerCase()
//    console.log(txt, txt.includes('th'))
//    if (txt.includes('th')) {
//        p.remove()
//    }    
//})