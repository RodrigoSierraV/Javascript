const myage = 25
let message

//if (myage < 21) {
//    message = 'You cannot vote'
//} else {
//    message = 'You can vote!!'
//}
message = myage < 21 ? 'You cannot vote' : 'You can vote'

console.log(message)

const team = ['Angie', 'Juan', 'Rodrigo', 'Giovanny', 'Diego']

const size = team.length <= 4 ? `Team size ${team.length}` : "Too many people on your team"

console.log(size)