//multiple arguments

let add = function (a,b,c) {

    return a+b+c
    
}

let result = add (1,1,10)
console.log(result)


// Default arguments

let getScoreText = function (name= "Default Name",score = 0){
    return  `Name: ${name} - Score:${score}`
}

let scoreText = getScoreText("Aaron",100)
console.log(scoreText)

//Challengue Area

let calculateTip =  function (total, tipPorcent = .2){ 
return `A ${tipPorcent*100}% tip on ${total} would be ${total*tipPorcent}`
}

console.log(calculateTip(10000,.03))

let name = 'Jen'
let age = 27
console.log(`Hey, I am ${age} years old and my name is ${name}!`)

