 let myBook = {
     title: '1984', 
     author: 'George Orwell',
     pageCount: 326
 }

 console.log(`Title: ${myBook.title} by ${myBook.author}`)

 myBook.title = 'Animal Farm'

 console.log(`Title: ${myBook.title} by ${myBook.author}`)

 let person = {
     name: 'Aaron',
     age: 29,
     city: 'San Jose'
 }
 person.age++

 console.log(`${person.name} is ${person.age} and lives in ${person.city}`)