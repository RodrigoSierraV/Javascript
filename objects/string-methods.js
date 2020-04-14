let name = '  Rodrigo  Sierra'

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'abc1234pass567'

console.log(password.includes('password'))

console.log(name.trim())
console.log('*****Challenge****')
let isValidPassword = function (string) {
    if (string.length > 8 && !string.includes('password')) {
        return true
    }
    return false
}
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!$&$%&$&%%'))
console.log(isValidPassword('asdfpassword1234'))

