let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples history', 
    author: 'Howard Zinn',
    pageCount: 723 
}

let getSummary = function (book){

    return{
        summary: `Title: ${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    
}

console.log(getSummary(myBook).summary)
console.log(getSummary(myBook).pageCountSummary)

//Challenge area

let convert = function (fahr){
    let allTemp = {
        fahrenheit: fahr,
        celsius: (fahr - 32) * (5/9),
        kelvin: (fahr + 459.67) * (5/9)
    }
    return allTemp;
}

let printTemp = function(allTemp){
    console.log(`Fahrenheit: ${allTemp.fahrenheit} Celsius: ${allTemp.celsius} Kelvin: ${allTemp.kelvin}`)
}

temp = convert(32)
printTemp(temp)
