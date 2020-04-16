console.log('From a js file')

// query and remove
const p = document.querySelector('p')
//p.remove()

// query all and remove

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = 'Now i have changed'
    //console.log(p.textContent)
    //p.remove()
})

// Add a new element

const newParagraph = document.createElement('p')

newParagraph.textContent = 'New P from Javascript'

document.querySelector('body').appendChild(newParagraph)