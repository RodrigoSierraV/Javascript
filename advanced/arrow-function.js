const squareLong = function(num) {
    return num**2
}

const squareMid = (num) => {
    return num**2
}

const squareShort = (num) => num**2

console.log(squareShort(5))

const people = [
    {
        name: 'Jose',
        age: 37
    },
    {
        name: 'Rodrigo',
        age: 39
    },
    {
        name: 'Juan',
        age: 56
    }
]

//const under50 = people.filter(function (person) {
//    return person.age < 50
//})

//const under50 = people.filter((person) => {
//    return person.age < 50
//})

const under50 = people.filter((person) => person.age < 50)

console.log(under50)

const person37 = people.find((person) => person.age === 37)

console.log(person37)


const car = {
    brand: 'BMW',
    color: 'red',
    getSummary: function () {
        return `This car is ${this.color}`
    }
}

console.log(car.getSummary())

const car1 = {
    brand: 'BMW',
    color: 'red',
    getSummary: () => {
        return `This car is ${this.color}`
    }
}

console.log(car1.getSummary())

const car2 = {
    brand: 'BMW',
    color: 'red',
    getSummary() {
        return `This car is ${this.color}`
    }
}

console.log(car2.getSummary())

const args = function () {
    return arguments[0] + arguments[1]
}

console.log(args(11,22,33))

const args1 = () => {
    return arguments[0] + arguments[1]
}

console.log(args1(11,22,33))