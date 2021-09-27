// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()

const createCounter = () => {
    let count = 0

    return {
        increment(){
            count ++
        },
        decrement(){
            count --
        },
        get(){
            return count
        }
        
    }
}
const counter = createCounter()

counter.increment()
console.log(counter.get())


///////////////////////////



const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-90))



//////////////////////////

//Tipper

const createTipper = (tip) => {
    return (amount) => {
        return `The amount of the tip is ${amount * tip}`
    }
}

const tip15 = createTipper(.15)
console.log(tip15(100))