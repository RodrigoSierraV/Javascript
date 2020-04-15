//const notes = ['note1', 'note2', 'note3', 'note4']
//
//notes.forEach(function (item, index) {
//    console.log(index + 1, item)
//})
//
//// for loop
//
//for (let count = 0; count < 3; count++) {
//    console.log(count)
//}
//
//for (let count = 0; count < notes.length; count++) {
//    console.log(notes[count])
//}
//console.log('backwards')
//for (let count = notes.length - 1; count >= 0; count--) {
//    console.log(notes[count])
//}
//
//console.log(notes.indexOf('note4'))
//const index = notes.findIndex(function(note, index) {
//    return note === 'note3'
//})
//console.log('IndexOf', index)

const notes = [{
    title: 'Next course',
    body: 'Javascript'
}, {
    title: 'new habbits',
    body: 'excercise at 6 am'
}, {
    title: 'sell the apartment',
    body: 'talk with realstate agent'
}]

//const index = notes.findIndex(function (note, index) {
//    return note.title.toLowerCase() === 'Sell the apartment'.toLowerCase()
//})
//
//console.log('first search: ',index)
//
//const findNote = function (notes, noteTiltle) {
//    const index = notes.findIndex(function (note, index) {
//        return note.title.toLowerCase() === noteTiltle.toLowerCase()
//    })
//    return notes[index]
//}
//
//const note = findNote(notes, 'new Habbits')
//console.log(note)

// Arrays are passed by reference

const findNote = function (notes, noteTiltle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTiltle.toLowerCase()
    })
}

const note = findNote(notes, 'new Habbits')
console.log(note)