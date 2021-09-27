const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
},{
    title: 'Habbits to work on',
    body: 'Excercise. Eating a bit better'
},{
    title: 'Office Modification',
    body: 'Get a new seat'
}]

//console.log(notes);
//console.log(notes.indexOf({}))

//the only way to have two similar objects
//let someObject = {}
//let otherObject = someObject
//console.log(someObject === otherObject)

//const index = notes.findIndex(function (note, index){
    //console.log(note)
  //  return note.title === 'Habbits to work on'
//})

//console.log(index)

const findNote = function (notes, noteTitle){
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    
}

/*
const findNote = function (notes, noteTitle){
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}
*/

console.log('a' > 'b') // true

//Function to sort the notes by the title alfabetically lol
const sortNotes = function (notes) {
    notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }
        if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}


const note = findNote(notes, 'office modification')
console.log(note)

const findNotes = function(notes, query){
    return notes.filter(function(note,index){
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
    })
}
console.log('//////////////')
console.log(findNotes(notes,'work'))

console.log('////////////// sorting array ////////')
sortNotes(notes)
console.log(notes)