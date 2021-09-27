//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes)
console.log(notes.length)
console.log(notes[0].toUpperCase())
console.log(notes[notes.length-1])

notes.push('Note 4') // This is used for adding an element to the array at the end

console.log(notes)

console.log(notes.pop()) // Removes the last item and returns it 

console.log(notes)

console.log(notes.shift()) // Removes the first item and returns it 

console.log(notes)

notes.unshift('Note 1+') // This is used for adding an element to the array at the end

console.log(notes)

notes.splice(1, 1) //Removes 1 item starting from the index 1

console.log(notes)

notes.splice(1, 0, 'This is the new second item') // Adds 1 item on the index 1

console.log(notes)

notes.splice(1, 1, 'This is the new second+ item') // Deletes the item on the index 1 and replaces it for the new item

console.log(notes)

notes[2] = 'This is the new note 3'



notes.forEach(function (item,index){
    console.log(index)
    console.log(item)
})

console.log(notes)

for(let x = 0; x<=2; x++){
    console.log(`Counting..${x}`)
}

for(let x = 0; x<notes.length; x++){
    console.log(`${x} = ${notes[x]}`)
}

//reverse
for(let x = notes.length-1; x>=0; x--){
    console.log(`${x} = ${notes[x]}`)
}


console.log (notes.indexOf('Note 1+'))