class Person {
    constructor(firstName, lastName, age, likes=[]) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio = `${this.firstName} ${this.lastName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` Likes ${like}.`
        })
        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
    }
}

const person1 = new Person('Rodrigo', 'Sierra', 39, ['Mountain bike', 'Watching movies'])
console.log(person1.getBio())

class Employee extends Person {
    constructor(firstName, lastName, age, likes=[], position) {
        super(firstName, lastName, age, likes=[])
        this.position = position
    }

    getBio() {
        return `${this.firstName} ${this.lastName} is ${this.position}`
    }
}

const employee1 = new Employee('Rodrigo     ', 'Sierra', 39, ['Mountain bike', 'Watching movies'], 'Engineer')
console.log(employee1.firstName)