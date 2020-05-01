const tipper = (tip) => {
    const total = (bill) => {
        return bill * (1 + tip) 
    }
    return total
}

const tip15 = tipper(0.14)
const tip20 = tipper(0.2)
const tip25 = tipper(0.25)

console.log(tip15(100), tip20(100), tip25(100))