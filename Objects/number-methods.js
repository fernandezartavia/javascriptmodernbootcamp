//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

let num = 103.941

//Keep a specific amount of digits
console.log(num.toFixed(1))

//Round number
console.log(Math.round(num))

//Floor number // round down
console.log(Math.floor(num))

//Ceil number // round up
console.log(Math.ceil(num))

//Random
let min = 10
let max = 20
let randonNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randonNum)

//Challenge Area

let makeGuess = function (num){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return num === randomNum
}

console.log(makeGuess(1))