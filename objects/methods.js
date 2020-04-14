let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        if (this.checkAvailability(partySize) == true) {
            this.guestCount = this.guestCount + partySize
        }
        //return this.guestCapacity, this.guestCount
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
        //return this.guestCapacity, this.guestCount
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))