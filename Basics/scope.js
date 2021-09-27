// JS uses lexical scope (static scope)
// Global scope - Defined outside of all code blocks
// Local scope - Defined inside a code block

let varOne = 'varOne'

if(true){
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);

    if(true) {
        let varFour = 'varFour';
        }
}

if (true) {
    let varThree = 'varThree';
    }

