const date1 = new Date('march 1 1981')
const date2 = new Date('january 14 1985')

const timestamp1 = date1.getTime()
const timestamp2 = date2.getTime()

console.log(date1, timestamp1)
console.log(date2, timestamp2)

if (timestamp1 < timestamp2) {
    console.log(date1.toString(),'is first')
} else {
    console.log(date2.toString(), 'is first')
}

let moment = require('moment')

const date = moment().set({'year':1981,'month':2,'date':1})

console.log(`${date.format("MMM D, YYYY")}`)

console.log(moment(1587322543189).fromNow())
