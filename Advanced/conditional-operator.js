//const myAge = 7
//const message = myAge >= 18 ? 'You can vote' : 'You can not vote'

/*
if (myAge >= 18) {
    message = 'You can vote!'
} else {
    message = 'You can not vote'
}
*/

//console.log(message)



const myAge = 27

const showPage = () => "Showing the page"
const showErrorPage = () => "Showing the error page"

const message = myAge >= 18 ? showPage() : showErrorPage()

console.log(message)

//////////////////////

const team = ['Tyler','Porter']

team.length <= 4 ? console.log(`Team size: ${team.length}`) : console.log('Too many')