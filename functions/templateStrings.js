let getScore = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let first = getScore()
let second = getScore('Jhon', 32)
let third = getScore(undefined, 15)
let fourth = getScore('Doe', null)
let fifth = getScore(undefined, undefined)
console.log(`${first}\n${second}\n${third}\n${fourth}\n`)

// Challenge: grade calculator
console.log('*********CHALLENGE*********')
let gradeCalc = function (studentScore = 0, totalPosibleScore = 0) {
    let result = studentScore / totalPosibleScore * 100
    let letter
    if (result >= 90) {
        letter = 'A'
    } else if (result < 90 && result >= 80) {
        letter = 'B'
    } else if (result < 80 && result >= 70) {
        letter = 'C'
    } else if (result < 70 && result >= 60) {
        letter = 'D'
    } else {
        letter = 'F'
    }
    
    return `${studentScore}/${totalPosibleScore} -> You got a ${letter} (${result}%)!`
}

console.log(gradeCalc(45,80))
console.log(gradeCalc(55,80))
console.log(gradeCalc(60,80))
console.log(gradeCalc(70,80))
console.log(gradeCalc(75,80))