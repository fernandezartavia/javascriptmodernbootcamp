// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase

let name = '     Aaron Fernandez    ' 

// Lenght property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc12345password6789'
console.log(password.includes('password'))

// Trim // Removes white space at the beginning at the end
console.log(name.trim())

//Challenge area

//isvalidpassword 
//return true if the lenght is more than 8 and it doesn't contain the word passowrd

let isValidPassword = function (pass){
    return (pass.length>=8) && (pass.includes('password')==false)  
}

console.log(isValidPassword('apassword123'))
console.log(isValidPassword('123132'))
console.log(isValidPassword('123456789'))