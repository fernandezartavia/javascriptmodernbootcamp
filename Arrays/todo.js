 let todos = ['Walk the dog','Clean the kitchen','Do crossfit','Study Javascript','Play Soccer']
 
 console.log(`You have ${todos.length} todos`)

 console.log(`Todo: ${todos[0]}`)
 console.log(`Todo: ${todos[todos.length-2]}`)


////////////////////// Challenge 2
// Delete the 3rd item
// Add a new item to the end
// Remove the first item from the list

todos.splice(2,1)
todos.push('Play basketball')
todos.shift()

todos.forEach(function(value,index){
    console.log(`${index+1}. ${value}`)
})

console.log(`Now using the for loop:`)

for(let x = 0; x<todos.length; x++){
    console.log(`${x+1}. ${todos[x]}`)
}


//Find the index of an object in an array and deletes it
console.log('\n///////////////////\n')

const todosCompletion = [{
    text: 'Walk the dog',
    completed: true
},{
    text: 'Clean the kitchen',
    completed: false
},{
    text: 'Play soccer',
    completed: false
},{
    text: 'Study JS',
    completed: false
},{
    text: 'Go to the gym',
    completed: true
}]

const deleteTodo = function (todos, text){
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if(index > -1){
        todosCompletion.splice(index,1)
    }

}

//console.log(todosCompletion)
//deleteTodo(todosCompletion,'Clean the kitchen')

//Function that filters the todos that havent been done

const getThingsToDo = function(todos){
    return todos.filter(function(todo, index){
        return !todo.completed
    })
}

const sortToDos = function (todos) {
    todos.sort(function(a, b){
        if(a.completed === false && b.completed === true){
            return -1
        }
        if(a.completed === true && b.completed === false){
            return 1
        }else{
            return 0
        }
    })
}

console.log(getThingsToDo(todosCompletion))
console.log('\n /////// sorting todos ////////\n')
sortToDos(todosCompletion)
console.log(todosCompletion)
