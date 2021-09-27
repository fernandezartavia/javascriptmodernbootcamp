let restaurant = {
    name: 'Burger King',
    guestCapacity: 75,
    guestCount:0,
    checkAvailability: function (partySize){
        totalSpaces= this.guestCapacity-this.guestCount
        return partySize<=totalSpaces
    },
    seatParty: function (partySize){
        if(this.checkAvailability(partySize)){
            this.guestCount = this.guestCount + partySize
        }else{
            console.log("There is not enough space")
        }
    },
    removeParty: function (partySize){
        this.guestCount = this.guestCount - partySize
    }
}
restaurant.seatParty(74)
restaurant.removeParty(35)
console.log(restaurant)
